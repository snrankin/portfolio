import Image from 'next/image';
import Hero from './components/hero';
import About from './components/about';
import WorkHistory from './components/work-history';
export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<WorkHistory />
		</>
	);
}
