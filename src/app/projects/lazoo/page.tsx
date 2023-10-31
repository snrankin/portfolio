'use client';
import { ProjectList, Project } from '@/app/components/projects';
import Section from '@/app/components/section';
import DeviceTabs from '@/app/components/device-tabs';
import { paramCase } from 'change-case-all';
import { getIcon } from '@/app/lib/utils';
const project = ProjectList.lazoo;
export default function LAZoo() {
	return (
		<Section>
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div>
					<DeviceTabs {...project} />
				</div>
				<div className="prose">
					<h1>{project.name}</h1>
					<p>{project.summary}</p>
					<ul className="inline-flex list-none gap-3 p-0 flex-wrap">
						{project.highlights?.map((h, i) => {
							return (
								<li key={i} className="badge">
									{getIcon(h)}
									{h}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</Section>
	);
}
