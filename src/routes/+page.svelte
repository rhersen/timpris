<script>
	import { current, today } from '$lib/color.js';
	export let data;

	function y(value) {
		return 190 - value / 3;
	}
</script>

<div>
	<h1>Elpris per timme</h1>
	<svg
		viewBox="-40 0 300 200"
		on:mousedown={function (ev) {
			console.log('mousedown', ev);
		}}
	>
		{#each Array.from({ length: 6 }) as u, i}
			<text class="y-axis" x={-20} y={y(i * 100) + 2}>{i * 100}</text>
			<line class="y-grid" x1={-5} x2={235} y1={y(i * 100)} y2={y(i * 100)} />
		{/each}

		{#each data.prices as { TimeStamp, Value }, i}
			{#if i > 0}
				<line
					class="connect"
					x1={10 * (i - 1)}
					x2={10 * i}
					y1={y(data.prices[i - 1].Value)}
					y2={y(Value)}
				/>
			{/if}
		{/each}

		{#each data.prices as { TimeStamp, Value }, i}
			<circle cx={10 * i} cy={y(Value)} r="2" fill={color(Value, data.limits)} />
		{/each}
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
		width: 100%;
	}

	.y-axis {
		font-size: 6px;
		text-anchor: end;
	}

	.y-grid {
		stroke: #ccc;
		stroke-width: 0.5;
	}

	.connect {
		stroke: #ccc;
		stroke-width: 1;
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
