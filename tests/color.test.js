import { color } from '$lib/color.js';
import { describe, expect, it } from 'vitest';

describe('color', () => {
	it('color', () => {
		expect(color(90)).toBe('hsl(90deg 100% 65%)');
		expect(color(210)).toBe('hsl(30deg 100% 65%)');
		expect(color(330)).toBe('hsl(30deg 100% 65%)');
	});
});
