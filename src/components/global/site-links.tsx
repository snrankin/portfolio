import { IProject } from '@/lib/api/projects';
import Link from 'next/link';

export default function SiteLinks({ projects }: { projects?: IProject[] }) {
	return (
		<>
			<li role="none" data-section="about">
				<Link
					role="menuitem"
					className="whitespace-nowrap"
					href="/#about"
				>
					About
				</Link>
			</li>
			<li role="none" data-section="projects">
				<details>
					<summary>
						<Link
							role="menuitem"
							className="whitespace-nowrap"
							href="/#projects"
						>
							Projects
						</Link>
					</summary>
					{!!projects && (
						<ul>
							{projects.map(({ shortTitle, slug }: IProject) => {
								return (
									<li key={slug}>
										<Link
											role="menuitem"
											className="whitespace-nowrap"
											href={`/projects/${slug}`}
										>
											{shortTitle}
										</Link>
									</li>
								);
							})}
						</ul>
					)}
				</details>
			</li>
			<li role="none" data-section="work-history">
				<Link
					role="menuitem"
					className="whitespace-nowrap"
					href="/#work-history"
				>
					Work History
				</Link>
			</li>
			<li role="none">
				<Link
					role="menuitem"
					className="whitespace-nowrap"
					href="/resume"
				>
					Resume
				</Link>
			</li>
		</>
	);
}
