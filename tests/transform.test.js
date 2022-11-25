import { storuman, vg } from '$lib/transform.js';
import { describe, expect, it } from 'vitest';

describe('transform', () => {
	describe('vg', () => {
		it('works', () => {
			expect(
				vg({
					date: '2022-10-06',
					updated: '2022-10-05T13:29:10.000Z',
					average: { se1: 4.65, se2: 4.65, se3: 4.65, se4: 4.65 },
					timeseries: {
						columns: ['date', 'hours', 'se1', 'se2', 'se3', 'se4'],
						rows: [
							['2022-10-06', '00-01', -0.42, -0.42, -0.42, -0.42],
							['2022-10-06', '01-02', -1.03, -1.03, -1.03, -1.03],
							['2022-10-06', '02-03', -1.07, -1.07, -1.07, -1.07],
							['2022-10-06', '03-04', -0.56, -0.56, -0.56, -0.56],
							['2022-10-06', '04-05', -0.1, -0.1, -0.1, -0.1],
							['2022-10-06', '05-06', 0.63, 0.63, 0.63, 0.63],
							['2022-10-06', '06-07', 4.63, 4.63, 4.63, 4.63],
							['2022-10-06', '07-08', 11.05, 11.05, 11.05, 11.05],
							['2022-10-06', '08-09', 14.21, 14.21, 14.21, 14.21],
							['2022-10-06', '09-10', 14.11, 14.11, 14.11, 14.11],
							['2022-10-06', '10-11', 12.06, 12.06, 12.06, 12.06],
							['2022-10-06', '11-12', 9.69, 9.69, 9.69, 9.69],
							['2022-10-06', '12-13', 6.16, 6.16, 6.16, 6.16],
							['2022-10-06', '13-14', 4.76, 4.76, 4.76, 4.76],
							['2022-10-06', '14-15', 4.28, 4.28, 4.28, 4.28],
							['2022-10-06', '15-16', 4.72, 4.72, 4.72, 4.72],
							['2022-10-06', '16-17', 4.51, 4.51, 4.51, 4.51],
							['2022-10-06', '17-18', 7.21, 7.21, 7.21, 7.21],
							['2022-10-06', '18-19', 5.94, 5.94, 5.94, 5.94],
							['2022-10-06', '19-20', 5.51, 5.51, 5.51, 5.51],
							['2022-10-06', '20-21', 3.58, 3.58, 3.58, 3.58],
							['2022-10-06', '21-22', 1.59, 1.59, 1.59, 1.59],
							['2022-10-06', '22-23', 0.1, 0.1, 0.1, 0.1],
							['2022-10-06', '23-00', -0.05, -0.05, -0.05, -0.05]
						]
					}
				})
			).toEqual({
				prices: [
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '00', toHour: '01', value: -0.42 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '01', toHour: '02', value: -1.03 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '02', toHour: '03', value: -1.07 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '03', toHour: '04', value: -0.56 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '04', toHour: '05', value: -0.1 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '05', toHour: '06', value: 0.63 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '06', toHour: '07', value: 4.63 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '07', toHour: '08', value: 11.05 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '08', toHour: '09', value: 14.21 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '09', toHour: '10', value: 14.11 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '10', toHour: '11', value: 12.06 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '11', toHour: '12', value: 9.69 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '12', toHour: '13', value: 6.16 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '13', toHour: '14', value: 4.76 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '14', toHour: '15', value: 4.28 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '15', toHour: '16', value: 4.72 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '16', toHour: '17', value: 4.51 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '17', toHour: '18', value: 7.21 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '18', toHour: '19', value: 5.94 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '19', toHour: '20', value: 5.51 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '20', toHour: '21', value: 3.58 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '21', toHour: '22', value: 1.59 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '22', toHour: '23', value: 0.1 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '23', toHour: '24', value: -0.05 }
				]
			});
		});
	});

	describe('storuman', () => {
		it('works', () => {
			expect(
				storuman([
					{
						priceEntries: [
							{ sortOrder: 0, dateLocal: '2022-10-06', hourLocal: '0', value: '-0.42' },
							{ sortOrder: 1, dateLocal: '2022-10-06', hourLocal: '1', value: '-1.03' },
							{ sortOrder: 2, dateLocal: '2022-10-06', hourLocal: '2', value: '-1.07' },
							{ sortOrder: 3, dateLocal: '2022-10-06', hourLocal: '3', value: '-0.56' },
							{ sortOrder: 4, dateLocal: '2022-10-06', hourLocal: '4', value: '-0.10' },
							{ sortOrder: 5, dateLocal: '2022-10-06', hourLocal: '5', value: '0.63' },
							{ sortOrder: 6, dateLocal: '2022-10-06', hourLocal: '6', value: '4.63' },
							{ sortOrder: 7, dateLocal: '2022-10-06', hourLocal: '7', value: '11.05' },
							{ sortOrder: 8, dateLocal: '2022-10-06', hourLocal: '8', value: '14.21' },
							{ sortOrder: 9, dateLocal: '2022-10-06', hourLocal: '9', value: '14.11' },
							{ sortOrder: 10, dateLocal: '2022-10-06', hourLocal: '10', value: '12.06' },
							{ sortOrder: 11, dateLocal: '2022-10-06', hourLocal: '11', value: '9.69' },
							{ sortOrder: 12, dateLocal: '2022-10-06', hourLocal: '12', value: '6.16' },
							{ sortOrder: 13, dateLocal: '2022-10-06', hourLocal: '13', value: '4.76' },
							{ sortOrder: 14, dateLocal: '2022-10-06', hourLocal: '14', value: '4.28' },
							{ sortOrder: 15, dateLocal: '2022-10-06', hourLocal: '15', value: '4.72' },
							{ sortOrder: 16, dateLocal: '2022-10-06', hourLocal: '16', value: '4.51' },
							{ sortOrder: 17, dateLocal: '2022-10-06', hourLocal: '17', value: '7.21' },
							{ sortOrder: 18, dateLocal: '2022-10-06', hourLocal: '18', value: '5.94' },
							{ sortOrder: 19, dateLocal: '2022-10-06', hourLocal: '19', value: '5.51' },
							{ sortOrder: 20, dateLocal: '2022-10-06', hourLocal: '20', value: '3.58' },
							{ sortOrder: 21, dateLocal: '2022-10-06', hourLocal: '21', value: '1.59' },
							{ sortOrder: 22, dateLocal: '2022-10-06', hourLocal: '22', value: '0.10' },
							{ sortOrder: 23, dateLocal: '2022-10-06', hourLocal: '23', value: '-0.05' }
						]
					},
					{
						priceEntries: [
							{ sortOrder: 0, dateLocal: '2022-10-07', hourLocal: '0', value: '-1.00' },
							{ sortOrder: 1, dateLocal: '2022-10-07', hourLocal: '1', value: '-1.04' },
							{ sortOrder: 2, dateLocal: '2022-10-07', hourLocal: '2', value: '-1.04' },
							{ sortOrder: 3, dateLocal: '2022-10-07', hourLocal: '3', value: '-0.64' },
							{ sortOrder: 4, dateLocal: '2022-10-07', hourLocal: '4', value: '-0.05' },
							{ sortOrder: 5, dateLocal: '2022-10-07', hourLocal: '5', value: '0.88' },
							{ sortOrder: 6, dateLocal: '2022-10-07', hourLocal: '6', value: '6.46' },
							{ sortOrder: 7, dateLocal: '2022-10-07', hourLocal: '7', value: '14.49' },
							{ sortOrder: 8, dateLocal: '2022-10-07', hourLocal: '8', value: '16.22' },
							{ sortOrder: 9, dateLocal: '2022-10-07', hourLocal: '9', value: '16.23' },
							{ sortOrder: 10, dateLocal: '2022-10-07', hourLocal: '10', value: '16.20' },
							{ sortOrder: 11, dateLocal: '2022-10-07', hourLocal: '11', value: '15.77' },
							{ sortOrder: 12, dateLocal: '2022-10-07', hourLocal: '12', value: '15.27' },
							{ sortOrder: 13, dateLocal: '2022-10-07', hourLocal: '13', value: '14.93' },
							{ sortOrder: 14, dateLocal: '2022-10-07', hourLocal: '14', value: '13.12' },
							{ sortOrder: 15, dateLocal: '2022-10-07', hourLocal: '15', value: '11.43' },
							{ sortOrder: 16, dateLocal: '2022-10-07', hourLocal: '16', value: '8.25' },
							{ sortOrder: 17, dateLocal: '2022-10-07', hourLocal: '17', value: '11.28' },
							{ sortOrder: 18, dateLocal: '2022-10-07', hourLocal: '18', value: '12.31' },
							{ sortOrder: 19, dateLocal: '2022-10-07', hourLocal: '19', value: '11.56' },
							{ sortOrder: 20, dateLocal: '2022-10-07', hourLocal: '20', value: '8.78' },
							{ sortOrder: 21, dateLocal: '2022-10-07', hourLocal: '21', value: '6.24' },
							{ sortOrder: 22, dateLocal: '2022-10-07', hourLocal: '22', value: '4.11' },
							{ sortOrder: 23, dateLocal: '2022-10-07', hourLocal: '23', value: '1.41' }
						]
					}
				])
			).toEqual({
				prices: [
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '00', toHour: '01', value: -0.42 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '01', toHour: '02', value: -1.03 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '02', toHour: '03', value: -1.07 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '03', toHour: '04', value: -0.56 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '04', toHour: '05', value: -0.1 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '05', toHour: '06', value: 0.63 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '06', toHour: '07', value: 4.63 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '07', toHour: '08', value: 11.05 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '08', toHour: '09', value: 14.21 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '09', toHour: '10', value: 14.11 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '10', toHour: '11', value: 12.06 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '11', toHour: '12', value: 9.69 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '12', toHour: '13', value: 6.16 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '13', toHour: '14', value: 4.76 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '14', toHour: '15', value: 4.28 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '15', toHour: '16', value: 4.72 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '16', toHour: '17', value: 4.51 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '17', toHour: '18', value: 7.21 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '18', toHour: '19', value: 5.94 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '19', toHour: '20', value: 5.51 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '20', toHour: '21', value: 3.58 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '21', toHour: '22', value: 1.59 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '22', toHour: '23', value: 0.1 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '23', toHour: '00', value: -0.05 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '00', toHour: '01', value: -1 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '01', toHour: '02', value: -1.04 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '02', toHour: '03', value: -1.04 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '03', toHour: '04', value: -0.64 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '04', toHour: '05', value: -0.05 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '05', toHour: '06', value: 0.88 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '06', toHour: '07', value: 6.46 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '07', toHour: '08', value: 14.49 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '08', toHour: '09', value: 16.22 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '09', toHour: '10', value: 16.23 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '10', toHour: '11', value: 16.2 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '11', toHour: '12', value: 15.77 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '12', toHour: '13', value: 15.27 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '13', toHour: '14', value: 14.93 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '14', toHour: '15', value: 13.12 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '15', toHour: '16', value: 11.43 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '16', toHour: '17', value: 8.25 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '17', toHour: '18', value: 11.28 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '18', toHour: '19', value: 12.31 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '19', toHour: '20', value: 11.56 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '20', toHour: '21', value: 8.78 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '21', toHour: '22', value: 6.24 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '22', toHour: '23', value: 4.11 },
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-07', fromHour: '23', toHour: '24', value: 1.41 }
				]
			});
		});
	});
});
