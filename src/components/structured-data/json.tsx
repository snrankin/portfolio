import Head from 'next/head';

export default function StructuredData({ data }: { data: Object }) {
	return (
		<Head>
			<script
				key="structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
			/>
		</Head>
	);
}
