import { paramCase } from 'change-case-all';
import { slice } from 'lodash';

import Skill from '@/components/skills/item';
import { TypeSkillFields } from '@/lib/types';

export default function ProjectSkills({
	skillCollection,
	limit,
}: {
	skillCollection?: { items: TypeSkillFields[] };
	limit?: number;
}) {
	const skills: TypeSkillFields[] | undefined = !!limit
		? slice(skillCollection?.items, 0, limit)
		: skillCollection?.items;

	let bgColors: { [key: string]: string } = {
		languages: 'badge-primary',
		frameworks: 'badge-secondary',
		cms: 'badge-accent',
		tools: 'badge-success',
		software: 'badge-warning',
	};

	return (
		<>
			{!!skills && (
				<>
					{skills?.map((s, i) => {
						let category = paramCase(s.category);
						return (
							<Skill
								key={i}
								icon={s.title}
								titleDisplay="inline"
								className={`badge ${bgColors[category]}`}
							/>
						);
					})}
				</>
			)}
		</>
	);
}
