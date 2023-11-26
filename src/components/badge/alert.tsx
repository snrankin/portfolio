'use client';

import { omitBy } from 'lodash';

import { APOS } from '@/lib/symbols';
import { TypeAuthorFields } from '@/lib/types';

import { getSocialLinks } from '../social/group';

export default function Alert({ author }: { author?: TypeAuthorFields }) {
	let profiles = getSocialLinks(author);
	let links = omitBy(profiles, (l) => l.href.includes('github'));

	return (
		<>
			<div role="alert" className="bg-secondary text-center py-3">
				<p className="text-lg">
					I am available for hire!{' '}
					<a className="link font-bold">Let{APOS}s connect.</a>
				</p>
			</div>
		</>
	);
}
