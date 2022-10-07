import { storuman, vattenfall } from '$lib/transform.js';

const dateTimeFormat = new Intl.DateTimeFormat('sv-SE', { dateStyle: 'short' });

export async function load() {
	const today = dateTimeFormat.format(Date.now());

	console.log('fetching storuman/tomorrow');
	const todayResponse = await fetch(storumanUrl(today));

	if (todayResponse.ok) {
		console.log('storuman/tomorrow ok, fetching today');
		return storuman(await Promise.all([todayResponse].map((rsp) => rsp.json())));
	}

	console.log('fetching vattenfall');
	const response = await fetch(vattenfallUrl(today, today));

	return vattenfall(await response.json());
}

function storumanUrl(date) {
	return `https://www.storumanenergi.se/net.seab.jsonproxy/spotprices.jsp?elarea=SE3&date=${date}`;
}

function vattenfallUrl(today, tomorrow) {
	return `https://www.vattenfall.se/api/price/spot/pricearea/${today}/${tomorrow}/SN3`;
}
