import { color } from '$lib/color.js';

export function vattenfall(json) {
	const nonzero = json.priceEntries.filter(({ Value }) => Value);
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
