import Hero from './hero';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import WorkHistory from './work-history';
import Footer from '@/app/components/global/footer';
export default function Page() {
	return (
		<>
			<Hero />
			<About />
			<Skills />
			<Projects />
			<WorkHistory />
			<Footer />
		</>
	);
}
