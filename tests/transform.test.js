import { storuman, vattenfall } from '$lib/transform.js';
import { describe, expect, it } from 'vitest';

describe('transform', () => {
	describe('vattenfall', () => {
		it('works', () => {
			expect(
				vattenfall([
					{ TimeStamp: '2022-10-06T00:00:00', Value: -0.42 },
					{ TimeStamp: '2022-10-06T01:00:00', Value: -1.03 },
					{ TimeStamp: '2022-10-06T02:00:00', Value: -1.07 },
					{ TimeStamp: '2022-10-06T03:00:00', Value: -0.56 },
					{ TimeStamp: '2022-10-06T04:00:00', Value: -0.1 },
					{ TimeStamp: '2022-10-06T05:00:00', Value: 0.63 },
					{ TimeStamp: '2022-10-06T06:00:00', Value: 4.63 },
					{ TimeStamp: '2022-10-06T07:00:00', Value: 11.05 },
					{ TimeStamp: '2022-10-06T08:00:00', Value: 14.21 },
					{ TimeStamp: '2022-10-06T09:00:00', Value: 14.1 },
					{ TimeStamp: '2022-10-06T10:00:00', Value: 12.06 },
					{ TimeStamp: '2022-10-06T11:00:00', Value: 9.69 },
					{ TimeStamp: '2022-10-06T12:00:00', Value: 6.16 },
					{ TimeStamp: '2022-10-06T13:00:00', Value: 4.76 },
					{ TimeStamp: '2022-10-06T14:00:00', Value: 4.28 },
					{ TimeStamp: '2022-10-06T15:00:00', Value: 4.72 },
					{ TimeStamp: '2022-10-06T16:00:00', Value: 4.51 },
					{ TimeStamp: '2022-10-06T17:00:00', Value: 7.21 },
					{ TimeStamp: '2022-10-06T18:00:00', Value: 5.94 },
					{ TimeStamp: '2022-10-06T19:00:00', Value: 5.51 },
					{ TimeStamp: '2022-10-06T20:00:00', Value: 3.58 },
					{ TimeStamp: '2022-10-06T21:00:00', Value: 1.59 },
					{ TimeStamp: '2022-10-06T22:00:00', Value: 0.1 },
					{ TimeStamp: '2022-10-06T23:00:00', Value: -0.05 }
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
					{ color: 'hsl(150deg 100% 65%)', day: '2022-10-06', fromHour: '09', toHour: '10', value: 14.1 },
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
				storuman({
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
});
