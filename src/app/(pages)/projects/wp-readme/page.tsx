import { IProject } from '@/app/lib/interfaces';

import { ProjectsList } from '@/app/lib/projects';
import { find } from 'lodash';
import Content from './content';

export default function Page() {
	let project = find(ProjectsList, ['slug', 'wp-readme']);
	return <>{project != undefined ? <Content project={project} /> : null}</>;
}
