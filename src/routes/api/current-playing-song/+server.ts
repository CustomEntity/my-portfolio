import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REFRESH_TOKEN
} from '$env/static/private';

const BASE64_ENCODED = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString(
	'base64'
);
let accessToken = '';

async function refreshAccessToken() {
	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${BASE64_ENCODED}`
		},
		body: `grant_type=refresh_token&refresh_token=${SPOTIFY_REFRESH_TOKEN}`
	});

	const data = await response.json();
	accessToken = data.access_token;
}

async function getCurrentlyPlaying() {
	const trackResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	});
	if (trackResponse.status === 204) {
		return null;
	}
	const text = await trackResponse.json();
	return text;
}

export async function GET({ url }) {
	if (!accessToken || accessToken === '') {
		await refreshAccessToken();
	}
	let currentlyPlaying = await getCurrentlyPlaying();
	if (!currentlyPlaying) {
		await refreshAccessToken();
		currentlyPlaying = await getCurrentlyPlaying();
	}
	return new Response(JSON.stringify(currentlyPlaying));
}

setTimeout(refreshAccessToken, 45 * 60 * 1000);
