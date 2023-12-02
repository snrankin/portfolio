'use client';
import dayjs from 'dayjs';
import Link from 'next/link';

import { COPY } from '@/lib/symbols';
import { TypeAuthorFields } from '@/lib/types';

export default function Footer({ author }: { author?: TypeAuthorFields }) {
	return (
		<>
			<footer className="print:hidden footer footer-center pb-envb bg-base-300 dark:bg-slate-950 text-base-content print:bg-white lg:pb-0 ">
				<aside className="p-4">
					<div className="pb-10 lg:pb-0">
						<p>
							Copyright {COPY} {dayjs().format('YYYY')} - All
							rights reserved by {author?.firstName}{' '}
							{author?.lastName} |{' '}
							<Link href="/sam-rankin.vcf" className="link">
								Download my contact info
							</Link>
						</p>
					</div>
				</aside>
			</footer>
		</>
	);
}
