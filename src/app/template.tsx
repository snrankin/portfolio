import dynamic from 'next/dynamic';
import Header from './components/global/header';
import Footer from './components/global/footer';

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main className="flex min-h-screen flex-col w-full overflow-y-none">
				{children}
			</main>
			<Footer />
		</>
	);
}
