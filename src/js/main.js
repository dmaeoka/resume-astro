// Alpine JS and plugins import
import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';

window.Alpine = Alpine;
Alpine.plugin(intersect);
Alpine.start();

import "./pages";

document.onreadystatechange = function () {
	if (document.readyState == 'complete') {
		// Run something globally
		document.querySelectorAll('a[href^=\'#\']').forEach((trigger) => {
			trigger.onclick = function (e) {
				e.preventDefault();
				let hash = this.getAttribute('href');
				let target = document.querySelector(hash);
				let headerOffset = 100;
				let elementPosition = target.offsetTop;
				let offsetPosition = elementPosition - headerOffset;

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth',
				});
			};
		});
	}
};
