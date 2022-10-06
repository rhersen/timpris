export function color(price) {
	let deg;
	if (price < 25) deg = 150;
	else if (price < 50) deg = 120;
	else if (price < 100) deg = 90;
	else if (price < 200) deg = 60;
	else if (price < 400) deg = 30;
	else if (price < 800) deg = 0;
	else deg = -30;

	return `hsl(${deg}deg 100% 65%)`;
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
