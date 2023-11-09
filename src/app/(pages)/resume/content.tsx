'use client';
import Link from 'next/link';
import { Me } from '@/app/lib/me';
import Section from '@/app/components/section/section';
import SocialLinks from '@/app/components/social/group';
import ProjectsGroup from '@/app/components/projects/list';
import { ProjectCardProps } from '@/app/components/projects/card';
import SkillsList from '@/app/components/skills/skills';
import Timeline from '@/app/components/timeline/print-group';
import Icon from '@/app/components/icons/icon-item';
import Logo from '@/app/components/global/logo';
export default function Content() {
	var projectCardProps: ProjectCardProps = {
		bodyClasses: '!p-0 leading-none gap-0',
		titleClasses: '!m-0 text-base',
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
				<div className="col-span-8 border-y py-[0.25in]  border-r">
					<h2 className="font-bold">Skillset</h2>

					<SkillsList
						className="grid grid-cols-1 gap-4"
						groupProps={{
							className: 'p-0',
							showGroupTitle: true,
							bodyClasses: '!p-0 gap-0',
							groupClasses:
								'flex flex-wrap items-center gap-3 h-[18pt] overflow-hidden',
							skillProps: {
								titleDisplay: 'inline',
								className: 'h-[18pt] ',
							},
							titleClasses: '!m-0 text-base',
						}}
					/>
				</div>
				<div className="col-span-4 border-y py-[0.25in] pl-[0.25in]">
					<h2 className="font-bold">Projects</h2>
					<ProjectsGroup
						className="grid grid-cols-1  gap-4 justify-between"
						projects="portfolio,lazoo,midfirst,riester,skipro"
					/>
				</div>
			</div>
			<div className="py-[0.25in] prose-print max-w-none">
				<h2 className="font-bold">Work History</h2>
				<Timeline className="flex flex-col gap-y-[0.5in]" />
			</div>
		</Section>
	);
}
