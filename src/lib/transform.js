export function vg(json) {
	return {
		prices: Object.fromEntries(
			json.timeseries.rows.map(([day, hour, , , value]) => [
				`${day}T${hour.slice(0, 2)}:00:00`,
				{
					day,
					fromHour: hour.slice(0, 2),
					toHour: hour.slice(3) === '00' ? '24' : hour.slice(3),
					price: value
				}
			])
		)
	};
}

export function eliq(json) {
	return {
		wattHours: Object.fromEntries(
			json.data.map(({ time_start, time_end, energy }) => [
				time_start,
				{
					day: time_start.slice(0, 10),
					fromHour: time_start.slice(11, 13),
					toHour: time_end.slice(11, 13) === '00' ? '24' : time_end.slice(11, 13),
					wattHours: energy
				}
			])
		)
	};
}
