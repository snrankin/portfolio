import Image from 'next/image';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import WorkHistory from './components/work-history';
export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Projects />
			<WorkHistory />
		</>
	);
}
