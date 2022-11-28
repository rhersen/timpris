export function price(price) {
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

export function wattHours(price) {
	let deg;
	if (price < 250) deg = 150;
	else if (price < 500) deg = 120;
	else if (price < 1000) deg = 90;
	else if (price < 2000) deg = 60;
	else if (price < 4000) deg = 30;
	else if (price < 8000) deg = 0;
	else deg = -30;

	return `hsl(${deg}deg 100% 65%)`;
}

export function cost(price) {
	let deg;
	if (price < 0.25) deg = 150;
	else if (price < 0.5) deg = 120;
	else if (price < 1) deg = 90;
	else if (price < 2) deg = 60;
	else if (price < 4) deg = 30;
	else if (price < 8) deg = 0;
	else deg = -30;

	return `hsl(${deg}deg 100% 65%)`;
}
