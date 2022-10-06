import { storuman, vattenfall } from '$lib/transform.js';

export async function load() {
	const HOURS = 60 * 60 * 1000;
	const dateTimeFormat = new Intl.DateTimeFormat('sv-SE', { dateStyle: 'short' });

	if (!HOURS) {
		const storumanResponse = await fetch(
			`https://www.storumanenergi.se/net.seab.jsonproxy/spotprices.jsp?elarea=SE3&date=${dateTimeFormat.format(
				Date.now()
			)}`
		);

		return storuman(await storumanResponse.json());
	}

	const vattenfallResponse = await fetch(
		`https://www.vattenfall.se/api/price/spot/pricearea/${dateTimeFormat.format(
			Date.now() - 24 * HOURS
		)}/${dateTimeFormat.format(Date.now() + 24 * HOURS)}/SN3`
	);

	return vattenfall(await vattenfallResponse.json());
}
