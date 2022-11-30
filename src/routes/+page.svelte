<script>
	import * as color from '$lib/color.js';
	export let data;
</script>

<div>
	{#if !data.day}
		<a href="?day={new Date().toISOString().slice(0, 10)}">idag</a>
	{/if}
	<h1>Elpris per timme {data.day}</h1>
	<table>
		<tr>
			<td>timme</td>
			<td>pris</td>
			<td>Wh</td>
			<td>kostnad</td>
		</tr>
		{#each data.values as { day, fromHour, toHour, price, wattHours, cost }}
			<tr>
				<td>{fromHour}–{toHour}</td>
				<td style="color: {color.price(price)}">{price}</td>
				<td style="color: {color.wattHours(wattHours)}">{wattHours}</td>
				<td style="color: {color.cost(cost)}">{cost}</td>
			</tr>
		{/each}
	</table>
	<ul>
		<li>snittpris: {data.averagePrice}</li>
		<li>kWh: {data.wattHours * 1e-3}</li>
		<li>kostnad: {data.cost}</li>
		<li>alt: {data.averagePrice * 1e-2 * data.wattHours * 1e-3}</li>
		<li>besparing kr: {data.averagePrice * 1e-2 * data.wattHours * 1e-3 - data.cost}</li>
		<li>
			besparing %: {(1e2 * (data.averagePrice * 1e-2 * data.wattHours * 1e-3 - data.cost)) /
				(data.averagePrice * 1e-2 * data.wattHours * 1e-3)}
		</li>
	</ul>
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
