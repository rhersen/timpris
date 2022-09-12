<script>
	export let data;

	function color(price) {
		if (price < 360) return 'hsl(120deg 100% 65%)';
		if (price > 460) return 'hsl(0deg 100% 65%)';
		return 'hsl(60deg 100% 65%)';
	}
</script>

<div>
	<h1>Elpris per timme</h1>
	<h2>{data.date}</h2>
	{#each data.prices as { Value }, i}
		<div style="color: {color(Value)}">
			{i.toString().padStart(2, 0)}–{(i + 1).toString().padStart(2, 0)}
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
</style>
