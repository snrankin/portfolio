'use client';

import '@/css/print.css';
import Link from 'next/link';
import { Me } from '../../lib/me';
import Logo from '@/img/logo.svg';
import Section from '@/app/components/section/section';
import SocialLinks from '@/app/components/social/group';
import ProjectsGroup from '@/app/components/projects/list';
import { ProjectCardProps } from '@/app/components/projects/card';
import SkillsGroup from '@/app/components/skills/group';
import Timeline from '@/app/components/timeline/print-group';
import Icon from '@/app/components/icons/icon';
export default function Page() {
	var projectCardProps: ProjectCardProps = {
		bodyClasses: '!p-0 leading-none',
	};
	var printClick = () => {
		window.print();
	};
	return (
		<Section className="print">
			<div className="print:hidden flex justify-center pb-14">
				<button onClick={printClick} className="btn btn-primary">
					<Icon
						icon="print"
						title="Print My Resume"
						titleDisplay="inline"
					/>
				</button>
			</div>
			<div className="prose-print max-w-none grid grid-cols-12">
				<div className="col-span-8 pr-[0.25in] pb-[0.25in] border-r">
					<div className="flex gap-2 mb-4">
						<Link href="/" className="w-[60px] block">
							<Logo className="fill-base-content w-full" />
						</Link>
						<h1 className="font-bold leading-0 m-0">
							{Me.firstName} {Me.lastName}
							<small className="block font-sans font-bold text-[0.49em]">
								{Me.label}
							</small>
						</h1>
					</div>
					<p className="m-0">{Me.summary}</p>
					{/* <div className="grid grid-cols-1 gap-7">
						<SkillsGroup
							className="p-0"
							showGroupTitle={true}
							bodyClasses="!p-0"
							groupClasses="flex flex-wrap items-center gap-3"
							group="languages"
							skillProps={{ titleDisplay: 'inline' }}
						/>
						<SkillsGroup
							className="p-0"
							showGroupTitle={true}
							bodyClasses="!p-0"
							groupClasses="flex flex-wrap items-center gap-3"
							group="cms"
							skillProps={{ titleDisplay: 'inline' }}
						/>
						<SkillsGroup
							className="p-0"
							showGroupTitle={true}
							bodyClasses="!p-0"
							groupClasses="flex flex-wrap items-center gap-3"
							group="frameworks"
							skillProps={{ titleDisplay: 'inline' }}
						/>
						<SkillsGroup
							className="p-0"
							showGroupTitle={true}
							bodyClasses="!p-0"
							groupClasses="flex flex-wrap items-center gap-3"
							group="tools"
							skillProps={{ titleDisplay: 'inline' }}
						/>
					</div> */}

					{/* <p>{Me.about?.[1]}</p> */}
				</div>
				<div className="col-span-4 pl-[0.25in] pb-[0.25in]">
					<SocialLinks
						className="flex flex-col gap-3"
						iconProps={{
							displayUrl: true,
							titleDisplay: 'inline',
							iconClasses: 'stroke-2 text-black',
						}}
					/>
				</div>
				<div className="col-span-12 border-y py-[0.25in]">
					<h2 className="font-bold">Featured Projects</h2>
					<ProjectsGroup
						className="grid gap-4 grid-cols-3 justify-between"
						projectProps={projectCardProps}
					/>
				</div>
				{/* <div className="col-span-12">
					<div className="grid grid-cols-12 gap-7">
						<SkillsGroup
							className="p-0 col-span-4"
							showGroupTitle={true}
							bodyClasses="!p-0"
							groupClasses="flex flex-wrap items-center gap-3"
							group="languages"
							skillProps={{ titleDisplay: 'inline' }}
						/>
						<SkillsGroup
							className="p-0 col-span-4"
							showGroupTitle={true}
							bodyClasses="!p-0"
							groupClasses="flex flex-wrap items-center gap-3"
							group="cms"
							skillProps={{ titleDisplay: 'inline' }}
						/>
						<SkillsGroup
							className="p-0 col-span-4"
							showGroupTitle={true}
							bodyClasses="!p-0"
							groupClasses="flex flex-wrap items-center gap-3"
							group="frameworks"
							skillProps={{ titleDisplay: 'inline' }}
						/>
						<SkillsGroup
							className="p-0 col-span-6"
							showGroupTitle={true}
							bodyClasses="!p-0"
							groupClasses="flex flex-wrap items-center gap-3"
							group="tools"
							skillProps={{ titleDisplay: 'inline' }}
						/>
						<SkillsGroup
							className="p-0 col-span-6"
							showGroupTitle={true}
							bodyClasses="!p-0"
							groupClasses="flex flex-wrap items-center gap-3"
							group="software"
							skillProps={{ titleDisplay: 'inline' }}
						/>
					</div>
				</div> */}
			</div>
			<div className="py-[0.25in] prose-print max-w-none">
				<h2 className="font-bold">Work History</h2>
				<Timeline className="flex flex-col gap-y-[0.5in]" />
			</div>
		</Section>
	);
}
