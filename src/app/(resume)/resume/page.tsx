import type { Metadata } from 'next';
import Content from './content';
import { getAuthor } from '@/lib/api/authors';
import { getProjects } from '@/lib/api/projects';
import { getAllJobs } from '@/lib/api/jobs';
import { getAllSkills } from '@/lib/api/skills';

import './page.css';
export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
		nocache: true,
	},
	title: 'Resume',
	description: 'Portfolio for Phoenix, AZ Based Web Developer',
};
export default async function Page() {
	const me = await getAuthor('Sam Rankin', false);
	const projects = await getProjects(
		'portfolio,midfirst,skipro,riester,lazoo',
		false
	);
	const jobs = await getAllJobs(false);
	const skills = await getAllSkills(false);
	return <Content projects={projects} jobs={jobs} skills={skills} me={me} />;
}
