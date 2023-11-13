import { IProject } from '@/lib/api/projects';
import ProjectCard from '@/components/projects/card';

export default function MoreProjects({
	moreProjects,
}: {
	moreProjects: IProject[];
}): JSX.Element {
	return (
		<>
			{moreProjects.map((project: IProject) => {
				return (
					<ProjectCard
						key={project.slug}
						compact={true}
						className="bg-base-100 shadow"
						{...project}
					/>
				);
			})}
		</>
	);
}
