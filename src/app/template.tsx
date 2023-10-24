import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./components/header'), {
	ssr: false,
});
const Footer = dynamic(() => import('./components/footer'), {
	ssr: false,
});
export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main className="flex min-h-screen flex-col">{children}</main>
			<Footer />
		</>
	);
}
