<script>
	import { current, today } from '$lib/color.js';
	export let data;
</script>

<div>
	<h1>Elpris per timme</h1>
	{#each data.prices as { color, day, fromHour, toHour, value }}
		{#if fromHour === '00'}
			<h2>{today(day)}</h2>
		{/if}
		<div style="color: {color}" class:current={current(day, fromHour)}>
			{fromHour}–{toHour}
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
