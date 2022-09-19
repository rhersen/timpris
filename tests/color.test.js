import { color } from '$lib/color.js';
import { describe, expect, it } from 'vitest';

describe('color', () => {
	it('color', () => {
		expect(color(90)).toBe('hsl(120deg 100% 65%)');
		expect(color(210)).toBe('hsl(60deg 100% 65%)');
		expect(color(330)).toBe('hsl(0deg 100% 65%)');
	});
});
