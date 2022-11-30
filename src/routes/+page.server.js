import { eliq, vg } from '$lib/transform.js';

export async function load({ url }) {
	const day = url.searchParams.get('day');
	if (!day) return { day: undefined, values: [] };

	const vgResponse = await fetch(vgUrl(day));
	const eliqResponse = await fetch(eliqUrl(day));
	if (vgResponse.ok && eliqResponse.ok) {
		const { prices } = vg(await vgResponse.json());
		const { wattHours } = eliq(await eliqResponse.json());
		const values = Object.entries(prices)
			.map(([key, value]) => ({ ...wattHours[key], ...value }))
			.map((obj) => ({
				...obj,
				cost: obj.price * 1e-2 * obj.wattHours * 1e-3
			}));
		return {
			day,
			cost: values.map(({ cost }) => cost).reduce((a, b) => a + b),
			averagePrice: values.map(({ price }) => price).reduce((a, b) => a + b) / values.length,
			wattHours: values.map(({ wattHours }) => wattHours).reduce((a, b) => a + b),
			values
		};
	}
}

function vgUrl(day) {
	return `https://redutv-api.vg.no/power-data/v1/nordpool/price/${day}/se`;
}

function eliqUrl(day) {
	return `https://my.eliq.io/api/data?accesstoken=${process.env.ACCESS_TOKEN}&startdate=${day}&intervaltype=hour`;
}
