import { Storage } from '@google-cloud/storage';

export async function GET() {
	try {
		const storage = new Storage({ keyFilename: 'portfolio-412415-9dd3eb2b390c.json' });
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
