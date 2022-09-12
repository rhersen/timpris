<script>
	export let data;
</script>

<h1>Elpris per timme {data.date}</h1>
<ol>
	{#each data.prices as { Value }}
		<li>{Value}</li>
	{/each}
</ol>
