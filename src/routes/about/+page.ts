import { error } from '@sveltejs/kit';

export const load = async () => {
	try {
		const about = await import('$lib/svx/About.svx');

		return {
			about: about.default
		};
	} catch (e) {
		throw error(404, `Uh oh! Sorry, looks like that page doesn't exist`);
	}
};
