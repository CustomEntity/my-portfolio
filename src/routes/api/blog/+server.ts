import { Storage } from '@google-cloud/storage';

import { GOOGLE_CLIENT_EMAIL, GOOGLE_CLOUD_PROJECT, GOOGLE_PRIVATE_KEY } from '$env/static/private';

export async function GET() {
	try {
		const storage = new Storage({
			projectId: GOOGLE_CLOUD_PROJECT,
			credentials: {
				client_email: GOOGLE_CLIENT_EMAIL,
				private_key: GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
			}
		});
		const bucket = storage.bucket('portfolio-flavio-bucket');

		const [files] = await bucket.getFiles({
			prefix: 'articles/',
			delimiter: '/'
		});

		const results = [];

		for (const file of files) {
			const [metadata] = await file.getMetadata();

			if (!metadata.metadata?.title) continue;
			results.push({
				fileName: file.name.split('/')[1],
				title: metadata.metadata?.title,
				date: metadata.metadata?.date,
				color: metadata.metadata?.color,
				summary: metadata.metadata?.summary,
				keywords: metadata.metadata?.keywords,
				timeToRead: metadata.metadata?.timeToRead,
				imageUrl: metadata.metadata?.imageUrl
			});
		}

		return new Response(JSON.stringify(results), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error: any) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
