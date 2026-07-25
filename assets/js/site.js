'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const headerLinks = document.querySelectorAll('#masthead a');

	for (const link of headerLinks) {
		if (link.textContent.trim() === 'Take Action') {
			link.textContent = 'Request a demo';
			link.setAttribute('href', '#contact');
			break;
		}
	}
});
