export async function load() {
	const response = await fetch(
		'https://www.vattenfall.se/api/price/spot/pricearea/2022-09-12/2022-09-12/SN3'
	);
	return {
		date: '2022-09-12',
		prices: await response.json()
	};
}
