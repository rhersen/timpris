import { storuman, vattenfall } from '$lib/transform.js';

export async function load() {
	const HOURS = 60 * 60 * 1000;
	const dateTimeFormat = new Intl.DateTimeFormat('sv-SE', { dateStyle: 'short' });

	const today = dateTimeFormat.format(Date.now());
	const tomorrow = dateTimeFormat.format(Date.now() + 24 * HOURS);

	if (!HOURS) {
		const storumanResponse = await fetch(
			`https://www.storumanenergi.se/net.seab.jsonproxy/spotprices.jsp?elarea=SE3&date=${today}`
		);
		return storuman(await storumanResponse.json());
	}
	const vattenfallResponse = await fetch(
		`https://www.vattenfall.se/api/price/spot/pricearea/${today}/${tomorrow}/SN3`
	);

	return vattenfall(await vattenfallResponse.json());
}
