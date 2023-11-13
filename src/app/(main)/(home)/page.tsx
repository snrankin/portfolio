import Hero from './hero';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import WorkHistory from './work-history';
import { getAuthor } from '@/lib/api/authors';
import { getAllProjects } from '@/lib/api/projects';
import { getAllJobs } from '@/lib/api/jobs';
import { getAllSkills } from '@/lib/api/skills';
export default async function Page() {
	const me = await getAuthor('Sam Rankin', false);
	const projects = await getAllProjects(false);
	const jobs = await getAllJobs(false);
	const skills = await getAllSkills(false);

	return (
		<>
			<Hero me={me} />
			<About me={me} />
			<Skills skills={skills} />
			<Projects projects={projects} />
			<WorkHistory jobs={jobs} />
		</>
	);
}
