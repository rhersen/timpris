<script>
	export let data;

	function color(price) {
		if (price < 360) return 'green';
		if (price > 460) return 'red';
		return 'orange';
	}
</script>

<h1>Elpris per timme {data.date}</h1>
<ol>
	{#each data.prices as { Value }}
		<li style="color: {color(Value)}">{Value}</li>
	{/each}
</ol>
