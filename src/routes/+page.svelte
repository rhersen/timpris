<script>
	export let data;

	let hour = undefined;
	const startX = 88;
	const deltaX = 28;
	const prices = data.prices.slice(new Date().getHours());

	function y(value) {
		return 750 - value;
	}
</script>

<div>
	<h1>Elpris per timme</h1>
	<h2>{prices[0].day}</h2>
	<svg
		viewBox="0 0 804 804"
		on:mousedown={function (evt) {
			hour = Math.round(evt.offsetX / deltaX - startX / deltaX);
			if (!prices[hour]) hour = undefined;
		}}
	>
		{#each Array.from({ length: 10 }) as u, i}
			<line class="y-grid" x1={0} x2={804} y1={y(i * 100)} y2={y(i * 100)} />
			<text class="y-axis" x={50} y={y(i * 100) + 6}>{i * 100}</text>
		{/each}

		{#each prices as { color, day, fromHour, toHour, value }, i}
			{#if i > 0}
				<line
					class="connect"
					x1={startX + deltaX * (i - 1)}
					x2={startX + deltaX * i}
					y1={y(prices[i - 1].value)}
					y2={y(value)}
				/>
			{/if}
		{/each}

		{#each prices as { color, day, fromHour, toHour, value }, i}
			<circle cx={startX + deltaX * i} cy={y(value)} r="8" fill={color} />
		{/each}

		{#if hour !== undefined}
			<g
				class="tooltip"
				transform={`translate(${startX + hour * deltaX},${680 - prices[hour].value})`}
			>
				<polygon class="bg" points="-40,48 -8,48 0,64 8,48 40,48 40,0 -40,0" />
				<text y={20}>{prices[hour].fromHour}–{prices[hour].toHour}</text>
				<text y={40}>{prices[hour].value} öre</text>
			</g>
		{/if}
	</svg>
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

	.tooltip .bg {
		fill: #bbbb;
	}

	.tooltip text {
		text-anchor: middle;
	}

	div {
		font-family: sans-serif;
	}
</style>
