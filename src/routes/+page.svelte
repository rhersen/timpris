<script>
	import { color, current, today } from '$lib/color.js';
	export let data;
</script>

<div>
	<h1>Elpris per timme</h1>
	{#each data.prices as { TimeStamp, date, Value }}
		{#if date.getHours() === 0}
			<h2>{today(date)}</h2>
		{/if}
		<div style="color: {color(Value, data.limits)}" class:current={current(date)}>
			{date.getHours().toString().padStart(2, '0')}–{(date.getHours() + 1)
				.toString()
				.padStart(2, '0')}
			{Value}
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
