export function color(price) {
	return `hsl(${165 - price / 2}deg 100% 40%)`;
}

export function today(then) {
	const now = new Date().toLocaleDateString().substring(0, 10);
	if (then < now) return 'igår';
	if (then > now) return 'imorgon';
	return 'idag';
}

export function current(then, hour) {
	const now = new Date();
	const today = now.toLocaleDateString();
	if (then < today) return false;
	if (then > today) return false;
	return hour === now.toLocaleTimeString().substring(0, 2);
}
