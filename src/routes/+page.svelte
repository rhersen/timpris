<script>
	export let data;

	function color(price) {
		if (price < 360) return 'hsl(120deg 100% 65%)';
		if (price > 460) return 'hsl(0deg 100% 65%)';
		return 'hsl(60deg 100% 65%)';
	}
</script>

<div>
	<h1>Elpris per timme {data.date}</h1>
	<ol>
		{#each data.prices as { Value }}
			<li style="color: {color(Value)}">{Value}</li>
		{/each}
	</ol>
</div>

<style>
	div {
		background: black;
		font-family: sans-serif;
	}

	h1 {
		color: white;
	}
</style>
