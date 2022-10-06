import { color } from '$lib/color.js';

export async function load() {
	const HOURS = 60 * 60 * 1000;
	const dateTimeFormat = new Intl.DateTimeFormat('sv-SE', { dateStyle: 'short' });

	const response = await fetch(
		`https://www.vattenfall.se/api/price/spot/pricearea/${dateTimeFormat.format(
			Date.now() - 24 * HOURS
		)}/${dateTimeFormat.format(Date.now() + 24 * HOURS)}/SN3`
	);

	const json = await response.json();
	const nonzero = json.filter(({ Value }) => Value);
	const hours = nonzero.map(({ TimeStamp }) => TimeStamp.substring(11, 13));
	return {
		prices: nonzero.map(({ TimeStamp, Value }, i) => ({
			color: color(Value),
			day: TimeStamp.substring(0, 10),
			fromHour: hours[i],
			toHour: hours[i + 1] ?? '24',
			value: Value
		}))
	};
}
