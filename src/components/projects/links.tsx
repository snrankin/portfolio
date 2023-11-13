import { IProject } from '@/lib/interfaces';
import IconLink from '../icons/link';

export default function ProjectLinks({ repo, website }: IProject) {
	return (
		<>
			{!!repo && (
				<IconLink
					href={repo}
					group="web"
					icon="code"
					title="View Code"
					titleDisplay="inline"
					target="_blank"
					iconClasses="!text-current"
					className="btn btn-primary"
				/>
			)}
			{!!website && (
				<IconLink
					href={website}
					group="web"
					icon="web"
					title="View Website"
					titleDisplay="inline"
					target="_blank"
					iconClasses="!text-current"
					className="btn btn-secondary"
				/>
			)}
		</>
	);
}
