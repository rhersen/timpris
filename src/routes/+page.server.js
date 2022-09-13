export async function load() {
	const HOURS = 60 * 60 * 1000;
	const dateTimeFormat = new Intl.DateTimeFormat('sv-SE', { dateStyle: 'short' });
	console.log(dateTimeFormat.format(Date.now()));
	const response = await fetch(
		`https://www.vattenfall.se/api/price/spot/pricearea/${dateTimeFormat.format(
			Date.now() - 24 * HOURS
		)}/${dateTimeFormat.format(Date.now() + 24 * HOURS)}/SN3`
	);
	const prices = await response.json();
	console.log(prices);
	return {
		prices: prices.map((price) => ({ ...price, date: new Date(Date.parse(price.TimeStamp)) }))
	};
}
