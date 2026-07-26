<?php
/**
 * Enviar Child Blocksy bootstrap.
 *
 * Blocksy controls the site shell and Elementor controls page content.
 *
 * @package EnviarChildBlocksy
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load the parent and child theme styles without changing Elementor output.
 */
function enviar_child_blocksy_enqueue_styles(): void {
	$parent_theme = wp_get_theme( 'blocksy' );
	$child_css     = get_stylesheet_directory() . '/style.css';

	wp_enqueue_style(
		'blocksy-parent-style',
		get_template_directory_uri() . '/style.css',
		array(),
		$parent_theme->get( 'Version' )
	);

	wp_enqueue_style(
		'enviar-child-blocksy-style',
		get_stylesheet_uri(),
		array( 'blocksy-parent-style' ),
		file_exists( $child_css ) ? (string) filemtime( $child_css ) : null
	);
}
add_action( 'wp_enqueue_scripts', 'enviar_child_blocksy_enqueue_styles', 20 );

/**
 * Remove WordPress emoji assets; modern browsers render emoji without them.
 */
function enviar_remove_emoji_assets(): void {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
}
add_action( 'init', 'enviar_remove_emoji_assets' );

/**
 * The homepage has no embedded posts, so the legacy embed helper is needless.
 */
function enviar_remove_unused_frontend_assets(): void {
	if ( is_front_page() ) {
		wp_deregister_script( 'wp-embed' );
	}
}
add_action( 'wp_enqueue_scripts', 'enviar_remove_unused_frontend_assets', 100 );

/**
 * Apply the logistics content layer to the existing Elementor Services page.
 */
function enviar_enqueue_services_page_updates(): void {
	if ( ! is_page( 'services' ) ) {
		return;
	}

	$script = get_stylesheet_directory() . '/assets/js/services-page.js';

	wp_enqueue_script(
		'enviar-services-page',
		get_stylesheet_directory_uri() . '/assets/js/services-page.js',
		array(),
		file_exists( $script ) ? (string) filemtime( $script ) : null,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'enviar_enqueue_services_page_updates', 110 );

/**
 * Render the demo request panel used by the Elementor homepage.
 */
function enviar_demo_request_form(): string {
	$status  = isset( $_GET['enviar_demo'] ) ? sanitize_key( wp_unslash( $_GET['enviar_demo'] ) ) : '';
	$notice  = '';

	if ( 'sent' === $status ) {
		$notice = '<p class="enviar-demo-notice is-success" role="status">Thank you. Your demo request has been received.</p>';
	} elseif ( 'error' === $status ) {
		$notice = '<p class="enviar-demo-notice is-error" role="alert">Please check the required fields and try again.</p>';
	}

	$action = esc_url( admin_url( 'admin-post.php' ) );
	$nonce  = wp_nonce_field( 'enviar_demo_request', 'enviar_demo_nonce', true, false );

	return '
		<div class="enviar-demo-panel">
			<div class="enviar-demo-copy">
				<p class="enviar-demo-eyebrow">REQUEST A DEMO</p>
				<h2>See Enviar Solutions on your shipments</h2>
				<p class="enviar-demo-intro">Book a personalized demo and we’ll show you the consolidation and savings potential across your current carriers.</p>
				<ul>
					<li>30-minute walkthrough</li>
					<li>Tailored savings estimate</li>
					<li>No commitment required</li>
				</ul>
			</div>
			<div class="enviar-demo-form-wrap">
				' . $notice . '
				<form class="enviar-demo-form" action="' . $action . '" method="post">
					<input type="hidden" name="action" value="enviar_demo_request">
					' . $nonce . '
					<label class="enviar-demo-hp" aria-hidden="true">Website<input type="text" name="website" tabindex="-1" autocomplete="off"></label>
					<div class="enviar-demo-row">
						<label>First name<input type="text" name="first_name" autocomplete="given-name" required></label>
						<label>Last name<input type="text" name="last_name" autocomplete="family-name" required></label>
					</div>
					<label>Work email<input type="email" name="email" autocomplete="email" required></label>
					<label>Company<input type="text" name="company" autocomplete="organization" required></label>
					<label>Monthly shipment volume
						<select name="volume" required>
							<option value="">Select a range</option>
							<option value="Under 500">Under 500</option>
							<option value="500–2,000">500–2,000</option>
							<option value="2,001–10,000">2,001–10,000</option>
							<option value="10,000+">10,000+</option>
						</select>
					</label>
					<button type="submit">Request a demo <span aria-hidden="true">→</span></button>
					<p class="enviar-demo-consent">By submitting, you agree to be contacted about Enviar Solutions.</p>
				</form>
			</div>
		</div>
	';
}
add_shortcode( 'enviar_demo_form', 'enviar_demo_request_form' );

/**
 * Validate and email homepage demo requests to the WordPress admin address.
 */
function enviar_handle_demo_request(): void {
	$redirect = wp_get_referer() ?: home_url( '/' );
	$redirect = remove_query_arg( 'enviar_demo', $redirect );

	if (
		! isset( $_POST['enviar_demo_nonce'] )
		|| ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['enviar_demo_nonce'] ) ), 'enviar_demo_request' )
		|| ! empty( $_POST['website'] )
	) {
		wp_safe_redirect( add_query_arg( 'enviar_demo', 'error', $redirect ) );
		exit;
	}

	$first_name = isset( $_POST['first_name'] ) ? sanitize_text_field( wp_unslash( $_POST['first_name'] ) ) : '';
	$last_name  = isset( $_POST['last_name'] ) ? sanitize_text_field( wp_unslash( $_POST['last_name'] ) ) : '';
	$email      = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
	$company    = isset( $_POST['company'] ) ? sanitize_text_field( wp_unslash( $_POST['company'] ) ) : '';
	$volume     = isset( $_POST['volume'] ) ? sanitize_text_field( wp_unslash( $_POST['volume'] ) ) : '';

	if ( '' === $first_name || '' === $last_name || ! is_email( $email ) || '' === $company || '' === $volume ) {
		wp_safe_redirect( add_query_arg( 'enviar_demo', 'error', $redirect ) );
		exit;
	}

	$subject = sprintf( 'Demo request from %s %s — %s', $first_name, $last_name, $company );
	$message = implode(
		"\n",
		array(
			'New Enviar Solutions demo request',
			'',
			"Name: {$first_name} {$last_name}",
			"Email: {$email}",
			"Company: {$company}",
			"Monthly shipment volume: {$volume}",
		)
	);
	$sent    = wp_mail(
		get_option( 'admin_email' ),
		$subject,
		$message,
		array( 'Reply-To: ' . $first_name . ' ' . $last_name . ' <' . $email . '>' )
	);

	wp_safe_redirect( add_query_arg( 'enviar_demo', $sent ? 'sent' : 'error', $redirect ) );
	exit;
}
add_action( 'admin_post_nopriv_enviar_demo_request', 'enviar_handle_demo_request' );
add_action( 'admin_post_enviar_demo_request', 'enviar_handle_demo_request' );
