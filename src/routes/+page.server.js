import { vg } from '$lib/transform.js';

const HOURS = 60 * 60 * 1000;
const dateTimeFormat = new Intl.DateTimeFormat('sv-SE', { dateStyle: 'short' });

export async function load() {
	const today = dateTimeFormat.format(Date.now());
	const tomorrow = dateTimeFormat.format(Date.now() + 24 * HOURS);

	console.log('fetching vg');
	const response = await fetch(vgUrl(today, tomorrow));
	if (response.ok) return vg(await response.json());
}

function vgUrl(today) {
	return `https://redutv-api.vg.no/power-data/v1/nordpool/price/${today}/se`;
}
