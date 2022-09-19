<script>
	import { color, current, today } from '$lib/color.js';
	export let data;
</script>

<div>
	<h1>Elpris per timme</h1>
	{#each data.prices as { TimeStamp, Value }, i}
		{#if /T00:/.test(TimeStamp)}
			<h2>{today(TimeStamp)}</h2>
		{/if}
		<div style="color: {color(Value, data.limits)}" class:current={current(TimeStamp)}>
			{TimeStamp.substring(11, 13)}–{data.prices[i + 1]
				? data.prices[i + 1].TimeStamp.substring(11, 13)
				: '24'}
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
