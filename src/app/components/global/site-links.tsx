import Link from 'next/link';
import { ProjectsList } from '@/app/lib/projects';
import { IProject } from '@/app/lib/interfaces';
export default function SiteLinks() {
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
					<ul>
						{ProjectsList.map((project: IProject) => {
							return (
								<li key={project.slug}>
									<Link
										role="menuitem"
										className="whitespace-nowrap"
										href={`/projects/${project.slug}`}
									>
										{project.shortTitle}
									</Link>
								</li>
							);
						})}
					</ul>
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
