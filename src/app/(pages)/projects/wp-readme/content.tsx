'use client';
import { IProject } from '@/app/lib/interfaces';
import Section from '@/app/components/section/section';
import DeviceTabs from '@/app/components/device-tabs/device-tabs';
import { paramCase } from 'change-case-all';
import Icon from '@/app/components/icons/icon';
import classNames from 'classnames';
import Image from 'next/image';
import figlet from 'figlet';

function asciText(text: string) {
	return figlet.textSync(text, {
		font: 'Standard',
	});
}
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
						<div>
							<div className="mockup-code">
								<pre data-prefix="$">
									<code>{asciText('text')}</code>
								</pre>
							</div>
						</div>
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
