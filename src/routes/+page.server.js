import { storuman, vg } from '$lib/transform.js';

const HOURS = 60 * 60 * 1000;
const dateTimeFormat = new Intl.DateTimeFormat('sv-SE', { dateStyle: 'short' });

export async function load() {
	const today = dateTimeFormat.format(Date.now());
	const tomorrow = dateTimeFormat.format(Date.now() + 24 * HOURS);

	console.log('fetching storuman/tomorrow');
	const tomorrowResponse = await fetch(storumanUrl(tomorrow));

	if (tomorrowResponse.ok) {
		console.log('storuman/tomorrow ok, fetching today');
		const todayResponse = await fetch(storumanUrl(today));
		return storuman(await Promise.all([todayResponse, tomorrowResponse].map((rsp) => rsp.json())));
	}

	console.log('fetching vg');
	const response = await fetch(vgUrl(today, tomorrow));
	if (response.ok) return vg(await response.json());

	console.log('vg not ok, fetching storuman/today');
	return storuman(await Promise.all([await fetch(storumanUrl(today))].map((rsp) => rsp.json())));
}

function storumanUrl(date) {
	return `https://www.storumanenergi.se/net.seab.jsonproxy/spotprices.jsp?elarea=SE3&date=${date}`;
}

function vgUrl(today) {
	return `https://redutv-api.vg.no/power-data/v1/nordpool/price/${today}/se`;
}
