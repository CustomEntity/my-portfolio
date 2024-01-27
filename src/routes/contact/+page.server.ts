import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import { MAILJET_API_KEY, MAILJET_API_SECRET, MY_EMAIL_ADDRESS } from '$env/static/private';

const url = 'https://api.mailjet.com/v3.1/send';
const auth = 'Basic ' + Buffer.from(`${MAILJET_API_KEY}:${MAILJET_API_SECRET}`).toString('base64');

const schema = z.object({
	name: z.string().min(2).max(50),
	email: z.string().email(),
	message: z.string().min(10).max(500)
});

async function sendConfirmationEmail(name: string, email: string) {
	const body = {
		Messages: [
			{
				From: {
					Email: 'contact@flaviomoreno.fr',
					Name: 'Flavio Moreno'
				},
				To: [
					{
						Email: email,
						Name: name
					}
				],
				TemplateLanguage: true,
				TemplateID: 5353056,
				Variables: {
					name: name
				}
			}
		]
	};

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			Authorization: auth,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});

	const data = await response.json();
	console.log(data);
}

async function sendReceivedContactEmail(name: string, email: string, message: string) {
	const body = {
		Messages: [
			{
				From: {
					Email: 'contact@flaviomoreno.fr',
					Name: 'Flavio Moreno'
				},
				To: [
					{
						Email: MY_EMAIL_ADDRESS,
						Name: 'Flavio Moreno'
					}
				],
				TemplateLanguage: true,
				TemplateID: 5353065,
				Variables: {
					name: name,
					email: email,
					message: message,
					date: new Date().toLocaleString()
				}
			}
		]
	};

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			Authorization: auth,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});

	const data = await response.json();
	console.log(data);
}

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

		await sendConfirmationEmail(name, email);
		await sendReceivedContactEmail(name, email, message);

		await new Promise((resolve) => setTimeout(resolve, 1000));
		return {
			form
		};
	}
};
