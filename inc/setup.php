<?php
/**
 * Theme setup and asset loading.
 *
 * @package EnviarChild
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load Enviar theme styles and scripts.
 */
function enviar_child_enqueue_assets(): void {
	$theme_version = wp_get_theme()->get( 'Version' );
	$style_version = $theme_version . '.' . filemtime( get_stylesheet_directory() . '/assets/css/home.css' );
	$script_version = $theme_version . '.' . filemtime( get_stylesheet_directory() . '/assets/js/site.js' );

	wp_enqueue_style(
		'enviar-child-style',
		get_stylesheet_uri(),
		array(),
		$theme_version
	);

	if ( is_front_page() ) {
		wp_enqueue_style(
			'enviar-home',
			get_stylesheet_directory_uri() . '/assets/css/home.css',
			array( 'enviar-child-style' ),
			$style_version
		);

	}

	wp_enqueue_script(
		'enviar-header-cta',
		get_stylesheet_directory_uri() . '/assets/js/site.js',
		array(),
		$script_version,
		true
	);

}
add_action( 'wp_enqueue_scripts', 'enviar_child_enqueue_assets', 20 );

/**
 * Register navigation menus.
 */
function enviar_child_register_menus(): void {
	register_nav_menus(
		array(
			'primary' => __( 'Primary Navigation', 'enviar-child' ),
			'footer'  => __( 'Footer Navigation', 'enviar-child' ),
		)
	);
}
add_action( 'after_setup_theme', 'enviar_child_register_menus' );
