<?php
/**
 * Enviar Solutions front page.
 *
 * Inactive reference only: WordPress does not load this file because its name
 * is not front-page.php. The block-managed Astra/Spectra homepage is retained.
 *
 * @package EnviarChild
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>

<main id="primary" class="enviar-home">

	<section class="enviar-hero">
		<div class="enviar-shell enviar-hero__inner">

			<div class="enviar-badge">
				<span class="enviar-badge__dot" aria-hidden="true"></span>
				Outsourced logistics, fully managed
			</div>

			<h1 class="enviar-hero__title">
				Every shipping order<br>
				on one platform
			</h1>

			<p class="enviar-hero__copy">
				Enviar Solutions aggregates orders across all your carriers,
				consolidates shipments, and bills you once. Your team stops
				chasing logistics and gets back to production and sales.
			</p>

			<div class="enviar-hero__actions">
				<a class="enviar-button enviar-button--primary" href="#demo">
					Request a demo
					<span aria-hidden="true">→</span>
				</a>

				<a class="enviar-button enviar-button--secondary" href="#how-it-works">
					See how it works
				</a>
			</div>

			<ul class="enviar-trust" aria-label="Platform benefits">
				<li>No carrier lock-in</li>
				<li>One monthly invoice</li>
				<li>Setup in days, not months</li>
			</ul>

			<div class="enviar-dashboard">
				<img
					src="<?php echo esc_url( get_stylesheet_directory_uri() . '/assets/images/tuma-dashboard.png' ); ?>"
					alt="Tuma logistics client dashboard"
					width="1400"
					height="900"
					loading="eager"
				>
			</div>

		</div>
	</section>

	<section class="enviar-results" id="results">
		<div class="enviar-shell">

			<p class="enviar-eyebrow">
				Trusted by operations and finance teams that ship at scale
			</p>

			<div class="enviar-results__grid">
				<div>
					<strong>Lower</strong>
					<span>shipping and operational costs</span>
				</div>

				<div>
					<strong>Multi-carrier</strong>
					<span>visibility from one account</span>
				</div>

				<div>
					<strong>One</strong>
					<span>consolidated monthly invoice</span>
				</div>

				<div>
					<strong>Real-time</strong>
					<span>tracking across shipments</span>
				</div>
			</div>

		</div>
	</section>

</main>

<?php
get_footer();
