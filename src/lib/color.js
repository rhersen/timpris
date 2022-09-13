export function color(price) {
	if (price < 64) return 'hsl(120deg 100% 65%)';
	if (price > 85) return 'hsl(0deg 100% 65%)';
	return 'hsl(60deg 100% 65%)';
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
