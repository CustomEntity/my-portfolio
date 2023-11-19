import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const schema = z.object({
	name: z.string().min(2).max(50),
	email: z.string().email(),
	message: z.string().min(10).max(500)
});

export const load = async (event: any) => {
	const form = await superValidate(event, schema);
	return {
		form
	};
};

export const actions = {
	default: async (event: any) => {
		const form = await superValidate(event, schema);
		if (!form.valid) fail(400, { form });

		const { name, email, message } = form.data;

		// Use mailjet here to send the email

		// Wait 6 seconds to simulate a slow server
		await new Promise((resolve) => setTimeout(resolve, 3000));
		return {
			form
		};
	}
};
