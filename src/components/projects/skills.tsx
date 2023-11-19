import Skill from '@/components/skills/item';
import { slice } from 'lodash';
import { paramCase } from 'change-case-all';
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
		languages: 'badge-primary dark:bg-primary-600 dark:border-primary-600',
		frameworks:
			'badge-secondary dark:bg-secndary-600 dark:border-secndary-600',
		cms: 'badge-accent dark:bg-accent-600 dark:border-accent-600',
		tools: 'badge-warning dark:bg-warning-600 dark:border-warning-600',
		software: 'badge-success dark:bg-success-600 dark:border-success-600',
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
