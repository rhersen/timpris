import { color } from '$lib/color.js';

export function storuman(json) {
	const nonzero = json.priceEntries.filter(({ value }) => value);
	const hours = nonzero.map(({ hourLocal }) =>
		hourLocal.length === 1 ? `0${hourLocal}` : hourLocal
	);
	return {
		prices: nonzero.map(({ dateLocal, value }, i) => ({
			color: color(value),
			day: dateLocal,
			fromHour: hours[i],
			toHour: hours[i + 1] ?? '24',
			value: parseFloat(value)
		}))
	};
}

export function vattenfall(json) {
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
