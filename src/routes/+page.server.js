import { colorLimits } from '$lib/color.js';

export async function load() {
	const HOURS = 60 * 60 * 1000;
	const dateTimeFormat = new Intl.DateTimeFormat('sv-SE', { dateStyle: 'short' });

	const response = await fetch(
		`https://www.vattenfall.se/api/price/spot/pricearea/${dateTimeFormat.format(
			Date.now() - 24 * HOURS
		)}/${dateTimeFormat.format(Date.now() + 24 * HOURS)}/SN3`
	);

	const json = await response.json();
	const prices = json.filter(({ Value }) => Value);
	return { prices, limits: colorLimits(prices) };
}
