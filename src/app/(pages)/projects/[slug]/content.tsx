'use client';
import { IProject } from '@/app/lib/interfaces';
import Section from '@/app/components/section/section';
import DeviceTabs from '@/app/components/device-tabs/device-tabs';
import { paramCase } from 'change-case-all';
import Icon from '@/app/components/icons/icon';
import classNames from 'classnames';
import Image from 'next/image';
export default function Content(props: { project: IProject }) {
	let { project } = props;
	let useTabs =
		project.desktop != undefined ||
		project.mobile != undefined ||
		project.tablet != undefined;

	let useImage =
		project.image != undefined &&
		project.desktop == undefined &&
		project.mobile == undefined &&
		project.tablet == undefined;

	let wrapperClasses = classNames('grid', 'grid-cols-1', {
		'lg:grid-cols-2': useTabs || useImage,
	});
	return (
		<>
			{project != undefined ? (
				<Section>
					<div className={wrapperClasses}>
						{useTabs ? (
							<div>
								<DeviceTabs {...project} />
							</div>
						) : null}
						{useImage && project.image != undefined ? (
							<div>
								<Image
									src={project.image}
									alt={`Tablet view of `}
									className="w-full"
									sizes="100vw"
									loading="lazy"
									style={{
										width: '100%',
										height: 'auto',
									}}
								/>
							</div>
						) : null}
						<div className="prose">
							<h1>{project.title}</h1>
							{project.summary != undefined ? (
								<p>{project.summary}</p>
							) : null}

							{project.highlights != undefined ? (
								<ul className="inline-flex list-none gap-3 p-0 flex-wrap">
									{project.highlights?.map((h, i) => {
										return (
											<li key={i} className="badge gap-1">
												<Icon icon={h} group="dev" />
												{h}
											</li>
										);
									})}
								</ul>
							) : null}
						</div>
					</div>
				</Section>
			) : null}
		</>
	);
}
