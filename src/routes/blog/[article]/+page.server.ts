import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { Storage } from '@google-cloud/storage';
import { compile } from 'mdsvex';
import { GOOGLE_CLIENT_EMAIL, GOOGLE_CLOUD_PROJECT, GOOGLE_PRIVATE_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
	const storage = new Storage({
		projectId: GOOGLE_CLOUD_PROJECT,
		credentials: {
			client_email: GOOGLE_CLIENT_EMAIL,
			private_key: GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
		}
	});
	const bucket = storage.bucket('portfolio-flavio-bucket');
	const { article } = params;
	const file = bucket.file(`articles/${article}.svx`);

	try {
		const [content, metadata] = await Promise.all([
			file.download().then((data) => data[0].toString('utf-8')),
			file.getMetadata().then((data) => data[0])
		]);

		const compiledContent = await compile(content);

		return { articleCode: compiledContent?.code, metadata: metadata.metadata };
	} catch (e) {
		console.error(e);
		throw error(404, 'Not found');
	}
};
