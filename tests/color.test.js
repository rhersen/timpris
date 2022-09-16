import { color, colorLimits } from '$lib/color.js';
import { describe, expect, it } from 'vitest';

describe('color', () => {
	it('color', () => {
		const limit = [200, 400];
		expect(color(0, limit)).toBe('hsl(120deg 100% 65%)');
		expect(color(250, limit)).toBe('hsl(60deg 100% 65%)');
		expect(color(500, limit)).toBe('hsl(0deg 100% 65%)');
	});

	describe('colorLimits', () => {
		it('handles three values', () => {
			expect(colorLimits([{ Value: 3 }, { Value: 2 }, { Value: 1 }])).toEqual([2, 3]);
		});

		it('handles four values', () => {
			expect(
				colorLimits([
					{ Value: 3 },
					{ Value: 2 },
					{ Value: 1 },
					{ Value: 4 }
				])
			).toEqual([2, 4]);
		});

		it('handles five values', () => {
			expect(
				colorLimits([
					{ Value: 3 },
					{ Value: 2 },
					{ Value: 1 },
					{ Value: 5 },
					{ Value: 4 }
				])
			).toEqual([3, 4]);
		});

		it('handles six values', () => {
			expect(
				colorLimits([
					{ Value: 3 },
					{ Value: 2 },
					{ Value: 1 },
					{ Value: 5 },
					{ Value: 6 },
					{ Value: 4 }
				])
			).toEqual([3, 5]);
		});
	});
});
