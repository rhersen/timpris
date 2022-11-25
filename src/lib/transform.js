import { color } from '$lib/color.js';

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
