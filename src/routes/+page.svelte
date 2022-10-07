<script>
	import { current, today } from '$lib/color.js';
	export let data;
	let hour = 12;

	function y(value) {
		return 750 - value;
	}
</script>

<div>
	<h1>Elpris per timme</h1>
	<svg
		viewBox="0 0 804 804"
		on:mousedown={function (evt) {
			hour = Math.round(evt.offsetX / 30 - 3);
			console.log(hour);
		}}
	>
		{#each Array.from({ length: 10 }) as u, i}
			<line class="y-grid" x1={0} x2={804} y1={y(i * 100)} y2={y(i * 100)} />
			<text class="y-axis" x={50} y={y(i * 100) + 6}>{i * 100}</text>
		{/each}

		{#each data.prices as { color, day, fromHour, toHour, value }, i}
			{#if i > 0}
				<line
					class="connect"
					x1={90 + 30 * (i - 1)}
					x2={90 + 30 * i}
					y1={y(data.prices[i - 1].value)}
					y2={y(value)}
				/>
			{/if}
		{/each}

		{#each data.prices as { color, day, fromHour, toHour, value }, i}
			<circle cx={90 + 30 * i} cy={y(value)} r="8" fill={color} />
		{/each}

		<g class="tooltip" transform={`translate(${90 + (hour - 1) * 30},500)`}>
			<rect />
			<text x="40" y="20">{hour}</text>
			<text x="40" y="40">{data.prices[hour].value} öre</text>
		</g>
	</svg>

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
	svg {
		width: 804px;
	}

	.y-axis {
		font-size: 18px;
		text-anchor: end;
	}

	.y-grid {
		stroke: #ccc;
		stroke-width: 1;
	}

	.connect {
		stroke: #ccc;
		stroke-width: 3;
	}

	.tooltip rect {
		width: 80px;
		height: 48px;
		fill: #ddd;
	}

	.tooltip text {
		text-anchor: middle;
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
