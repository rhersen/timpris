<script>
	import { color, current, today } from '$lib/color.js';
	export let data;
	export let prices = data.prices.map((price) => ({
		value: price.Value,
		date: new Date(Date.parse(price.TimeStamp))
	}));

	function pad(hours) {
		return hours.toString().padStart(2, '0');
	}
</script>

<div>
	<h1>Elpris per timme</h1>
	{#each prices as { date, value }}
		{#if date.getHours() === 0}
			<h2>{today(date)}</h2>
		{/if}
		<div style="color: {color(value, data.limits)}" class:current={current(date)}>
			{pad(date.getHours())}–{pad(date.getHours() + 1)}
			{value}
		</div>
	{/each}
</div>

<style>
	:global(body) {
		color: white;
		background: black;
	}

	div {
		font-family: sans-serif;
	}

	div.current {
		font-weight: bold;
		font-size: larger;
		border: solid;
	}
</style>
