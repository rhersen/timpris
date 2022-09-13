import { color } from '$lib/color.js';
import { describe, expect, it } from 'vitest';

describe('color', () => {
	it('works', () => {
		expect(color(0)).toBe('hsl(120deg 100% 65%)');
		expect(color(250)).toBe('hsl(60deg 100% 65%)');
		expect(color(500)).toBe('hsl(0deg 100% 65%)');
	});
});
