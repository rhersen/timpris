import { color } from '$lib/color.js';

export function storuman(jsons) {
	const priceEntries = jsons.flatMap(({ priceEntries }) => priceEntries);
	const hours = priceEntries.map(({ hourLocal }) =>
		hourLocal.length === 1 ? `0${hourLocal}` : hourLocal
	);
	return {
		prices: priceEntries.map(({ dateLocal, value }, i) => ({
			color: color(value),
			day: dateLocal,
			fromHour: hours[i],
			toHour: hours[i + 1] ?? '24',
			value: parseFloat(value)
		}))
	};
}

export function vg(json) {
	return {
		prices: json.timeseries.rows.map(([day, hour, , , value]) => ({
			color: color(value),
			day,
			fromHour: hour.slice(0, 2),
			toHour: hour.slice(3) === '00' ? '24' : hour.slice(3),
			value
		}))
	};
}
