export function colorLimits(prices) {
	const values = prices.map(({ Value }) => Value);
	values.sort((a, b) => a - b);
	return [values[values.length / 3], values[(values.length * 2) / 3]];
}

export function color(price, [limit1, limit2]) {
	if (price < limit1) return 'hsl(120deg 100% 65%)';
	if (price < limit2) return 'hsl(60deg 100% 65%)';
	return 'hsl(0deg 100% 65%)';
}

export function today(date) {
	const then = date.toLocaleDateString();
	const now = new Date().toLocaleDateString();
	if (then < now) return 'igår';
	if (then > now) return 'imorgon';
	return 'idag';
}

export function current(date) {
	const then = date.toLocaleDateString();
	const now = new Date();
	const today = now.toLocaleDateString();
	if (then < today) return false;
	if (then > today) return false;
	return date.getHours() === now.getHours();
}
