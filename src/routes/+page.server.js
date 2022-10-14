import { storuman, vattenfall } from '$lib/transform.js';

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

	console.log('fetching vattenfall');
	const response = await fetch(vattenfallUrl(today, tomorrow));
	if (response.ok) return vattenfall(await response.json());

	console.log('vattenfall not ok, fetching storuman/today');
	return storuman(await Promise.all([await fetch(storumanUrl(today))].map((rsp) => rsp.json())));
}

function storumanUrl(date) {
	return `https://www.storumanenergi.se/net.seab.jsonproxy/spotprices.jsp?elarea=SE3&date=${date}`;
}

function vattenfallUrl(today, tomorrow) {
	return `https://www.vattenfall.se/api/price/spot/pricearea/${today}/${tomorrow}/SN3`;
}
