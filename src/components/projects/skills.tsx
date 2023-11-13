import { IProject } from '@/lib/api/projects';
import { ISkillsCollection } from '@/lib/api/skills';
import Skill from '@/components/skills/item';
import { slice } from 'lodash';
export default function ProjectSkills({
	skillCollection,
	limit,
}: {
	skillCollection?: ISkillsCollection;
	limit?: number;
}) {
	const skills = !!limit
		? slice(skillCollection?.items, 0, limit)
		: skillCollection?.items;

	return (
		<>
			{!!skills && (
				<ul className="flex list-none gap-3 !p-0 flex-wrap">
					{skills?.map((s, i) => {
						return (
							<li key={i} className="badge gap-1">
								<Skill icon={s.title} titleDisplay="inline" />
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
}
