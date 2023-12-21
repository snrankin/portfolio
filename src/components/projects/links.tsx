import { TypePostFields } from '@/lib/types';

import IconLink from '../icons/link';

export default function ProjectLinks(props?: TypePostFields) {
	return (
		<div className="inline-flex items-center gap-4">
			{!!props?.repo && (
				<IconLink
					href={props?.repo}
					icon="code"
					title="View Code"
					titleDisplay="inline"
					target="_blank"
					iconClasses="!text-current"
					className="btn btn-primary"
				/>
			)}
			{!!props?.website && (
				<IconLink
					href={props?.website}
					icon="compass"
					title="View Website"
					titleDisplay="inline"
					target="_blank"
					iconClasses="!text-current"
					className="btn btn-secondary"
				/>
			)}
		</div>
	);
}
