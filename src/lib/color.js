export function color(price) {
	return `hsl(${165 - price / 2}deg 100% 65%)`;
}

export function today(date) {
	const then = date.substring(0, 10);
	const now = new Date().toLocaleDateString().substring(0, 10);
	if (then < now) return 'igår';
	if (then > now) return 'imorgon';
	return 'idag';
}

export function current(date) {
	const then = date.substring(0, 10);
	const now = new Date();
	const today = now.toLocaleDateString();
	if (then < today) return false;
	if (then > today) return false;
	return date.substring(11, 13) === now.toLocaleTimeString().substring(0, 2);
}
