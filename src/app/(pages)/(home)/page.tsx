import Hero from './hero';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import WorkHistory from './work-history';
import Header from '@/app/components/global/header';
import Footer from '@/app/components/global/footer';
export default function Page() {
	return (
		<>
			<Header />
			<main className="flex min-h-screen flex-col w-full overflow-y-none">
				<Hero />
				<About />
				<Skills />
				<Projects />
				<WorkHistory />
			</main>
			<Footer />
		</>
	);
}
