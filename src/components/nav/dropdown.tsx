import { NavLink } from '@/lib/types';
import MenuItems from './menu-items';
export default function Dropdown({
	links,
	expanded,
	depth,
}: {
	links: NavLink[];
	depth: number;
	expanded: boolean;
}) {
	depth = depth + 1;
	return (
		<>
			{!!links && (
				<ul
					tabIndex={0}
					className="menu dropdown-content z-[10] md:before:content-none md:shadow rounded-box md:bg-base-100"
				>
					{links.map((item, index) => {
						return (
							<MenuItems {...item} key={index} depth={depth} />
						);
					})}
				</ul>
			)}
		</>
	);
}
