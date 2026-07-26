(() => {
	'use strict';

	const widget = (id) => document.querySelector(`.elementor-element-${id}`);
	const setText = (id, selector, text) => {
		const node = widget(id)?.querySelector(selector);
		if (node) node.textContent = text;
	};

	const updateServicesPage = () => {
		if (!document.body.classList.contains('page-id-1434')) return;

		setText('2b6325b', '.elementor-heading-title', 'Logistics operations built around your business');
		const heroHeading = widget('2b6325b');
		if (heroHeading && !document.querySelector('.enviar-services-hero-copy')) {
			const breadcrumb = document.createElement('p');
			breadcrumb.className = 'enviar-services-breadcrumb';
			breadcrumb.textContent = 'HOME → SERVICES';
			heroHeading.before(breadcrumb);

			const copy = document.createElement('p');
			copy.className = 'enviar-services-hero-copy';
			copy.textContent = 'From carrier coordination and shipment tracking to consolidated billing and reporting, Enviar helps your team manage every delivery through one clear operational workflow.';
			heroHeading.after(copy);
		}

		setText('70f28e5', '.elementor-heading-title', 'Everything you need to manage logistics better');
		setText('f037e7f', '.elementor-widget-container', 'Enviar combines logistics coordination, shipment visibility and operational reporting in one managed service. Choose the support your business needs today and expand as your delivery operations grow.');

		const services = [
			['81efce6', 'Shipment Management', 'Create delivery orders, assign carriers and follow every shipment from pickup through final delivery.', 'fas fa-box'],
			['00eabe5', 'Carrier Coordination', 'Manage multiple transport providers, routes and delivery responsibilities without switching between systems.', 'fas fa-network-wired'],
			['1959659', 'Tracking and Visibility', 'See active shipments, delivery status, delays and operational exceptions from one clear dashboard.', 'fas fa-map-marker-alt'],
			['4c3bf08', 'Billing and Reporting', 'Consolidate carrier charges, reconcile delivery costs and give finance teams clear monthly reports.', 'fas fa-file-invoice-dollar'],
		];

		services.forEach(([id, title, description, icon]) => {
			setText(id, '.elementor-icon-box-title span', title);
			setText(id, '.elementor-icon-box-description', description);
			const iconNode = widget(id)?.querySelector('.elementor-icon');
			if (iconNode) iconNode.innerHTML = `<i class="${icon}" aria-hidden="true"></i>`;
		});

		setText('5beda29', 'p', 'WHY ENVIAR');
		setText('cfd9b39', '.elementor-heading-title', 'Make every delivery easier to control');
		setText('096d16f', 'p', 'We help businesses reduce logistics complexity by bringing carrier coordination, shipment visibility, billing and reporting into one reliable operational process.');

		const missionImage = widget('d300dc4')?.querySelector('img');
		if (missionImage) {
			missionImage.src = '/wp-content/themes/enviar-child/assets/images/services-operations.jpg';
			missionImage.srcset = '';
			missionImage.alt = 'Logistics operations team coordinating shipments';
			missionImage.loading = 'lazy';
		}

		[
			['ddd3161', 'One view', 'Shipment visibility'],
			['ed165f4', 'One process', 'Carrier coordination'],
			['1c2cacb', 'One statement', 'Consolidated billing'],
		].forEach(([id, value, label]) => {
			const counter = widget(id)?.querySelector('.elementor-counter');
			if (counter) {
				counter.innerHTML = `<div class="enviar-capability-value">${value}</div><div class="elementor-counter-title">${label}</div>`;
			}
		});

		setText('3ae2f9a', 'p', 'Answers to common questions about how Enviar manages shipments, carriers, tracking and billing.');
		const faqData = [
			['What types of deliveries can Enviar manage?', 'Enviar can support everyday business deliveries, scheduled distribution, intercity shipments, specialised freight and multi-carrier operations depending on your service requirements.'],
			['Do we have to stop using our current carriers?', 'No. Enviar can coordinate your existing carriers while helping you evaluate additional providers where needed. You retain flexibility without being locked into one carrier.'],
			['Can our team track shipments in real time?', 'Yes. Your team can view active shipments, delivery status, delays and exceptions from one shared operational dashboard.'],
			['How does consolidated billing work?', 'Carrier charges are reviewed and reconciled into one clear monthly statement, making logistics costs easier for your finance team to manage.'],
			['How long does setup take?', 'Setup depends on your shipment volume, carrier mix and workflow requirements. Most implementations begin with a short discovery and configuration process before onboarding users and carriers.'],
		];
		const accordion = widget('61da919')?.querySelector('.elementor-accordion');
		if (accordion) {
			const template = accordion.querySelector('.elementor-accordion-item');
			while (accordion.children.length < faqData.length && template) {
				accordion.append(template.cloneNode(true));
			}
			[...accordion.querySelectorAll('.elementor-accordion-item')].forEach((item, index) => {
				const data = faqData[index];
				if (!data) {
					item.remove();
					return;
				}
				const number = index + 1;
				const title = item.querySelector('.elementor-tab-title');
				const content = item.querySelector('.elementor-tab-content');
				const link = item.querySelector('.elementor-accordion-title');
				if (link) link.textContent = data[0];
				if (title) {
					title.dataset.tab = String(number);
					title.id = `enviar-faq-title-${number}`;
					title.setAttribute('aria-controls', `enviar-faq-content-${number}`);
					title.setAttribute('aria-expanded', 'false');
				}
				if (content) {
					content.dataset.tab = String(number);
					content.id = `enviar-faq-content-${number}`;
					content.setAttribute('aria-labelledby', `enviar-faq-title-${number}`);
					content.innerHTML = `<p>${data[1]}</p>`;
					content.style.display = 'none';
				}
			});

			if (!accordion.dataset.enviarReady) {
				accordion.dataset.enviarReady = 'true';
				accordion.addEventListener('click', (event) => {
					const title = event.target.closest('.elementor-tab-title');
					if (!title || !accordion.contains(title)) return;
					event.preventDefault();
					const item = title.closest('.elementor-accordion-item');
					const content = item?.querySelector('.elementor-tab-content');
					const isOpen = title.getAttribute('aria-expanded') === 'true';
					accordion.querySelectorAll('.elementor-tab-title').forEach((otherTitle) => {
						otherTitle.setAttribute('aria-expanded', 'false');
						otherTitle.classList.remove('elementor-active');
						const otherContent = otherTitle.closest('.elementor-accordion-item')?.querySelector('.elementor-tab-content');
						if (otherContent) otherContent.style.display = 'none';
					});
					if (!isOpen && content) {
						title.setAttribute('aria-expanded', 'true');
						title.classList.add('elementor-active');
						content.style.display = 'block';
					}
				});
			}
		}

		const faqImage = widget('0be0d7d')?.querySelector('img');
		if (faqImage) {
			faqImage.src = 'https://v0-enviar-landing-page.vercel.app/map-network.png';
			faqImage.srcset = '';
			faqImage.alt = 'Tuma logistics visibility and shipment network';
			faqImage.loading = 'lazy';
		}

		const proofPoints = [
			['f2f42eb', 'fas fa-truck', 'Multi-carrier', 'Coordination'],
			['723447b', 'fas fa-map-marked-alt', 'Centralised', 'Tracking'],
			['44db202', 'fas fa-file-invoice', 'Consolidated', 'Billing'],
			['ab441b4', 'fas fa-chart-line', 'Operational', 'Reporting'],
			['74c6555', 'fas fa-exclamation-circle', 'Managed', 'Exceptions'],
		];
		proofPoints.forEach(([id, icon, first, second]) => {
			const node = widget(id);
			if (node) node.innerHTML = `<div class="enviar-service-proof"><i class="${icon}" aria-hidden="true"></i><span><strong>${first}</strong>${second}</span></div>`;
		});

		widget('01afc5f')?.remove();

		setText('fcc27da', '.elementor-heading-title', 'Ready to simplify your logistics?');
		setText('07af962', 'p', 'Talk to Enviar about your current delivery operation and where your team needs better visibility or control.');
		const form = widget('3539d3c');
		if (form) {
			form.innerHTML = '<a class="enviar-services-cta" href="/#contact">Request a demo <span aria-hidden="true">→</span></a>';
		}

		document.querySelectorAll('footer *').forEach((node) => {
			if (node.children.length === 0 && /WordPress Theme by Enviar Solutions/i.test(node.textContent)) {
				node.closest('[data-id="copyright"], .ct-footer-copyright, p, div')?.remove();
			}
		});
	};

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', updateServicesPage, { once: true });
	} else {
		updateServicesPage();
	}
})();
