<?php
/**
 * Enviar Solutions Modern Homepage Template
 * 
 * Premium dark logistics technology platform landing page
 * Built with modern design patterns and responsive layout
 *
 * @package EnviarChild
 */

get_header(); 
?>

<main id="primary" class="site-main">

	<!-- HERO SECTION -->
	<section class="enviar-hero">
		<div class="enviar-container enviar-hero-content">
			<div class="enviar-hero-left">
				<span class="enviar-eyebrow">Outsourced logistics, fully managed</span>
				<h1>Every shipping order on one platform</h1>
				<p>Enviar Solutions brings your shipping orders, carriers, tracking and billing into one place. Your team gets complete visibility while we handle the operational complexity behind every delivery.</p>
				
				<div class="enviar-buttons">
					<button class="enviar-btn enviar-btn-primary">Request a demo</button>
					<button class="enviar-btn enviar-btn-secondary">See how it works</button>
				</div>

				<ul class="enviar-trust-points">
					<li>No carrier lock-in</li>
					<li>One monthly invoice</li>
					<li>Setup in days, not months</li>
				</ul>
			</div>

			<div class="enviar-hero-right">
				<img src="<?php echo esc_url( get_stylesheet_directory_uri() . '/assets/images/dashboard.png' ); ?>" 
					 alt="Tuma Dashboard" 
					 class="enviar-dashboard-frame">
			</div>
		</div>
	</section>

	<!-- VALUE STRIP SECTION -->
	<section class="enviar-value-strip">
		<div class="enviar-container enviar-value-grid">
			<div class="enviar-value-item">
				<div class="enviar-value-icon">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<rect x="2" y="2" width="20" height="20" rx="2.18"></rect>
						<line x1="7" y1="2" x2="7" y2="22"></line>
						<line x1="17" y1="2" x2="17" y2="22"></line>
						<line x1="2" y1="12" x2="22" y2="12"></line>
					</svg>
				</div>
				<h3>Centralised order visibility</h3>
			</div>
			<div class="enviar-value-item">
				<div class="enviar-value-icon">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
					</svg>
				</div>
				<h3>Coordinated carrier operations</h3>
			</div>
			<div class="enviar-value-item">
				<div class="enviar-value-icon">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<line x1="12" y1="1" x2="12" y2="23"></line>
						<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
					</svg>
				</div>
				<h3>Consolidated billing</h3>
			</div>
			<div class="enviar-value-item">
				<div class="enviar-value-icon">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
					</svg>
				</div>
				<h3>Real-time delivery tracking</h3>
			</div>
		</div>
	</section>

	<!-- PLATFORM SECTION -->
	<section class="enviar-platform">
		<div class="enviar-container">
			<div class="enviar-section-header">
				<span class="enviar-eyebrow">Tuma platform</span>
				<h2>One platform for every shipment</h2>
				<p>Tuma gives clients, operators and finance teams a shared view of orders, deliveries, billing and performance.</p>
			</div>

			<div class="enviar-features-grid">
				<div class="enviar-feature-card">
					<div class="enviar-feature-icon">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M9 11H7.5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5H15"></path>
							<polyline points="16 8 12 4 8 8"></polyline>
						</svg>
					</div>
					<h3>Order management</h3>
					<p>Submit, track and manage all shipping orders in one place with complete visibility across carriers.</p>
				</div>

				<div class="enviar-feature-card">
					<div class="enviar-feature-icon">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<circle cx="9" cy="21" r="1"></circle>
							<circle cx="20" cy="21" r="1"></circle>
							<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
						</svg>
					</div>
					<h3>Carrier coordination</h3>
					<p>Seamlessly coordinate with multiple carriers and manage route optimization automatically.</p>
				</div>

				<div class="enviar-feature-card">
					<div class="enviar-feature-icon">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
							<circle cx="12" cy="10" r="3"></circle>
						</svg>
					</div>
					<h3>Shipment tracking</h3>
					<p>Real-time tracking and status updates for every shipment with proactive exception alerts.</p>
				</div>

				<div class="enviar-feature-card">
					<div class="enviar-feature-icon">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M12 2v20m10-10H2"></path>
							<rect x="2" y="4" width="20" height="16" rx="2"></rect>
						</svg>
					</div>
					<h3>Billing and invoices</h3>
					<p>Consolidated billing across all carriers with automated invoice generation and reconciliation.</p>
				</div>

				<div class="enviar-feature-card">
					<div class="enviar-feature-icon">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<line x1="12" y1="2" x2="12" y2="22"></line>
							<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
						</svg>
					</div>
					<h3>Analytics and reporting</h3>
					<p>Comprehensive performance analytics and custom reports for data-driven logistics decisions.</p>
				</div>

				<div class="enviar-feature-card">
					<div class="enviar-feature-icon">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
							<circle cx="12" cy="7" r="4"></circle>
						</svg>
					</div>
					<h3>Role-based portals</h3>
					<p>Custom dashboards for clients, operations teams and finance with tailored interfaces.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ROLE-BASED SOLUTIONS SECTION -->
	<section class="enviar-roles">
		<div class="enviar-container">
			<h2>Built around the way logistics teams work</h2>

			<div class="enviar-role-tabs">
				<button class="enviar-role-tab active" data-role="client">Client</button>
				<button class="enviar-role-tab" data-role="operations">Operations</button>
				<button class="enviar-role-tab" data-role="finance">Finance</button>
				<button class="enviar-role-tab" data-role="admin">Administration</button>
			</div>

			<div class="enviar-role-content">
				<div class="enviar-role-panel active" data-role="client">
					<div class="enviar-role-grid">
						<div>
							<h3>Client Portal</h3>
							<ul>
								<li>Submit shipping requests</li>
								<li>Track order status in real-time</li>
								<li>Access delivery proofs</li>
								<li>Review billing and invoices</li>
							</ul>
						</div>
						<div>
							<img src="<?php echo esc_url( get_stylesheet_directory_uri() . '/assets/images/client-portal.png' ); ?>" alt="Client Portal" class="enviar-role-image">
						</div>
					</div>
				</div>

				<div class="enviar-role-panel" data-role="operations">
					<div class="enviar-role-grid">
						<div>
							<h3>Operations Control</h3>
							<ul>
								<li>Manage carrier assignments</li>
								<li>Optimize routes and schedules</li>
								<li>Handle delivery exceptions</li>
								<li>Monitor performance metrics</li>
							</ul>
						</div>
						<div>
							<img src="<?php echo esc_url( get_stylesheet_directory_uri() . '/assets/images/operations-panel.png' ); ?>" alt="Operations Panel" class="enviar-role-image">
						</div>
					</div>
				</div>

				<div class="enviar-role-panel" data-role="finance">
					<div class="enviar-role-grid">
						<div>
							<h3>Finance Dashboard</h3>
							<ul>
								<li>Consolidated billing view</li>
								<li>Cost analysis and reporting</li>
								<li>Budget tracking</li>
								<li>Invoice reconciliation</li>
							</ul>
						</div>
						<div>
							<img src="<?php echo esc_url( get_stylesheet_directory_uri() . '/assets/images/finance-dashboard.png' ); ?>" alt="Finance Dashboard" class="enviar-role-image">
						</div>
					</div>
				</div>

				<div class="enviar-role-panel" data-role="admin">
					<div class="enviar-role-grid">
						<div>
							<h3>Administration</h3>
							<ul>
								<li>User and permission management</li>
								<li>System configuration</li>
								<li>API integrations</li>
								<li>Audit and compliance</li>
							</ul>
						</div>
						<div>
							<img src="<?php echo esc_url( get_stylesheet_directory_uri() . '/assets/images/admin-panel.png' ); ?>" alt="Admin Panel" class="enviar-role-image">
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- HOW IT WORKS SECTION -->
	<section class="enviar-how-it-works">
		<div class="enviar-container">
			<h2>From shipping request to completed delivery</h2>

			<div class="enviar-steps">
				<div class="enviar-step">
					<div class="enviar-step-number">1</div>
					<h3>Submit the order</h3>
					<p>Send shipping requests with full details and requirements</p>
				</div>
				<div class="enviar-step">
					<div class="enviar-step-number">2</div>
					<h3>Coordinate fulfilment</h3>
					<p>We match orders to optimal carriers and routes</p>
				</div>
				<div class="enviar-step">
					<div class="enviar-step-number">3</div>
					<h3>Track the shipment</h3>
					<p>Real-time visibility throughout the delivery process</p>
				</div>
				<div class="enviar-step">
					<div class="enviar-step-number">4</div>
					<h3>Complete and bill</h3>
					<p>Delivery confirmation with consolidated billing</p>
				</div>
			</div>
		</div>
	</section>

	<!-- WHY ENVIAR SECTION -->
	<section class="enviar-why">
		<div class="enviar-container enviar-why-grid">
			<div class="enviar-why-content">
				<h2>Let your team focus on the business, not the logistics</h2>
				<p>Enviar Solutions removes the operational burden of managing multiple carriers and logistics workflows, letting your team concentrate on growth and customer satisfaction.</p>

				<ul class="enviar-benefits">
					<li>Reduce manual follow-up across carriers</li>
					<li>Improve shipment visibility</li>
					<li>Consolidate billing and delivery records</li>
					<li>Handle delivery exceptions clearly</li>
					<li>Scale without unnecessary logistics overhead</li>
				</ul>
			</div>

			<div class="enviar-why-visual">
				<img src="<?php echo esc_url( get_stylesheet_directory_uri() . '/assets/images/platform-overview.png' ); ?>" alt="Platform Overview" class="enviar-why-image">
			</div>
		</div>
	</section>

	<!-- ABOUT SECTION -->
	<section class="enviar-about">
		<div class="enviar-container">
			<div class="enviar-section-header">
				<span class="enviar-eyebrow">About Enviar Solutions</span>
				<h2>Logistics built around operational clarity</h2>
			</div>

			<div class="enviar-about-grid">
				<div class="enviar-about-content">
					<p>Enviar Solutions was founded with a simple mission: make logistics coordination effortless for growing businesses across East Africa.</p>
					<p>We understand the operational complexity of managing shipments, carriers, and delivery logistics. Our platform, Tuma, brings clarity and efficiency to every step of the process.</p>
					<p><strong>Mark JK Chege</strong> founded Enviar Solutions to solve the logistics coordination challenge that every growing distributor, retailer and manufacturer faces.</p>
				</div>

				<div class="enviar-founder-photo">
					<img src="<?php echo esc_url( get_stylesheet_directory_uri() . '/assets/images/founder.jpg' ); ?>" alt="Mark JK Chege - Founder" class="enviar-founder-image">
				</div>
			</div>
		</div>
	</section>

	<!-- CONTACT SECTION -->
	<section class="enviar-contact">
		<div class="enviar-container">
			<div class="enviar-section-header">
				<h2>Let's discuss your logistics operation</h2>
				<p>Tell us how your business currently manages shipping, carriers and delivery reporting. We'll show you how Enviar Solutions can simplify the workflow.</p>
			</div>

			<div class="enviar-form-wrapper">
				<form class="enviar-contact-form" action="#" method="POST">
					<input type="text" name="first_name" placeholder="First name" required>
					<input type="text" name="last_name" placeholder="Last name" required>
					<input type="email" name="email" placeholder="Work email" required>
					<input type="tel" name="phone" placeholder="Phone number" required>
					<input type="text" name="company" placeholder="Company" required>
					<select name="volume" required>
						<option value="">Monthly shipment volume</option>
						<option value="1-50">1-50 shipments</option>
						<option value="51-200">51-200 shipments</option>
						<option value="201-500">201-500 shipments</option>
						<option value="500+">500+ shipments</option>
					</select>
					<textarea name="message" placeholder="Tell us about your operation..."></textarea>
					<button type="submit" class="enviar-btn enviar-btn-primary">Request a demo</button>
				</form>
			</div>
		</div>
	</section>

</main><!-- #primary -->

<?php
get_footer();
?>
