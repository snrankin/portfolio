import type { Metadata } from 'next';
import Content from './content';
export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
		nocache: true,
	},
	title: 'Resume',
	description: 'Portfolio for Phoenix, AZ Based Web Developer',
};
export default function Page() {
	return <Content />;
}
