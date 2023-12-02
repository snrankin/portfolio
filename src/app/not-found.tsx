import Link from 'next/link';

import Icon from '@/components/icons/icon-item';
import Section from '@/components/section/section';
import styles from '@/css/error.module.css';
import ThemeProvider from '@/lib/context/theme';
import { APOS } from '@/lib/symbols';

export default function NotFound() {
	return (
		<ThemeProvider>
			<Section
				id="error-404"
				className={`${styles.errorBg} bg-base-200 min-h-screen dark:bg-slate-900 flex flex-col justify-center items-center`}
				containerClasses="pt-[25vw] sm:pb-[10vw] md:pt-[20vw] xl:pt-[15vw] xl:pb-[5vw] 2xl:pt-64 2xl:pb-20 relative z-10"
			>
				<div className="prose prose-2xl max-w-[96%] md:max-w-[70%] lg:prose-lg prose-h1:text-14xl sm:prose-h1:text-6xl md:prose-h1:text-4xl xl:prose-h1:text-8xl text-center mx-auto">
					<h1 className={`!mb-0 ${styles.title}`}>
						404{' '}
						<small className="block font-semibold text-[0.5em] leading-none">
							Uh-oh!
						</small>
					</h1>

					<p className="mt-4">We can{APOS}t find that page.</p>

					<Link href="/" className="btn btn-lg btn-primary">
						<Icon
							icon="home"
							title="Go Back Home"
							titleDisplay="inline"
						/>
					</Link>
				</div>
			</Section>
		</ThemeProvider>
	);
}
