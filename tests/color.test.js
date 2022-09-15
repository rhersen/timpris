import { color, colorLimits } from '$lib/color.js';
import { describe, expect, it } from 'vitest';

describe('color', () => {
	it('color', () => {
		expect(color(0)).toBe('hsl(120deg 100% 65%)');
		expect(color(250)).toBe('hsl(60deg 100% 65%)');
		expect(color(500)).toBe('hsl(0deg 100% 65%)');
	});

	describe('colorLimits', () => {
		it('handles three values', () => {
			expect(colorLimits([{ Value: 69.01 }, { Value: 56.3 }, { Value: 36.24 }])).toEqual([
				56.3, 69.01
			]);
		});

		it('handles six values', () => {
			expect(
				colorLimits([
					{ Value: 69.01 },
					{ Value: 56.3 },
					{ Value: 36.24 },
					{ Value: 120.05 },
					{ Value: 124.94 },
					{ Value: 80.92 }
				])
			).toEqual([69.01, 120.05]);
		});
	});
});
