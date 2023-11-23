'use client';

import { GoogleAnalytics, event } from 'nextjs-google-analytics';

import { useReportWebVitals } from 'next/web-vitals';

export default function Analytics() {
	useReportWebVitals((metric) => {
		// console.log(metric);
		event(metric.name, {
			category:
				metric.label === 'web-vital'
					? 'Web Vitals'
					: 'Next.js custom metric',
			value: Math.round(
				metric.name === 'CLS' ? metric.value * 1000 : metric.value
			), // values must be integers
			label: metric.id, // id unique to current page load
			nonInteraction: true, // avoids affecting bounce rate.
		});
	});

	return <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />;
}
