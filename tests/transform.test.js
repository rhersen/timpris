import { vattenfall } from '$lib/transform.js';
import { describe, expect, it } from 'vitest';

describe('transform', () => {
	describe('vattenfall', () => {
		it('works', () => {
			expect(
				vattenfall([
					{
						TimeStamp: '2022-10-06T00:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '00:00',
						Value: -0.42,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T01:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '01:00',
						Value: -1.03,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T02:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '02:00',
						Value: -1.07,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T03:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '03:00',
						Value: -0.56,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T04:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '04:00',
						Value: -0.1,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T05:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '05:00',
						Value: 0.63,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T06:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '06:00',
						Value: 4.63,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T07:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '07:00',
						Value: 11.05,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T08:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '08:00',
						Value: 14.21,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T09:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '09:00',
						Value: 14.1,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T10:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '10:00',
						Value: 12.06,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T11:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '11:00',
						Value: 9.69,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T12:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '12:00',
						Value: 6.16,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T13:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '13:00',
						Value: 4.76,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T14:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '14:00',
						Value: 4.28,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T15:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '15:00',
						Value: 4.72,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T16:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '16:00',
						Value: 4.51,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T17:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '17:00',
						Value: 7.21,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T18:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '18:00',
						Value: 5.94,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T19:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '19:00',
						Value: 5.51,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T20:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '20:00',
						Value: 3.58,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T21:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '21:00',
						Value: 1.59,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T22:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '22:00',
						Value: 0.1,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					},
					{
						TimeStamp: '2022-10-06T23:00:00',
						TimeStampDay: '2022-10-06',
						TimeStampHour: '23:00',
						Value: -0.05,
						PriceArea: 'SN3',
						Unit: 'öre/kWh'
					}
				])
			).toEqual({
				prices: [
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '00',
						toHour: '01',
						value: -0.42
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '01',
						toHour: '02',
						value: -1.03
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '02',
						toHour: '03',
						value: -1.07
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '03',
						toHour: '04',
						value: -0.56
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '04',
						toHour: '05',
						value: -0.1
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '05',
						toHour: '06',
						value: 0.63
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '06',
						toHour: '07',
						value: 4.63
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '07',
						toHour: '08',
						value: 11.05
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '08',
						toHour: '09',
						value: 14.21
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '09',
						toHour: '10',
						value: 14.1
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '10',
						toHour: '11',
						value: 12.06
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '11',
						toHour: '12',
						value: 9.69
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '12',
						toHour: '13',
						value: 6.16
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '13',
						toHour: '14',
						value: 4.76
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '14',
						toHour: '15',
						value: 4.28
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '15',
						toHour: '16',
						value: 4.72
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '16',
						toHour: '17',
						value: 4.51
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '17',
						toHour: '18',
						value: 7.21
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '18',
						toHour: '19',
						value: 5.94
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '19',
						toHour: '20',
						value: 5.51
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '20',
						toHour: '21',
						value: 3.58
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '21',
						toHour: '22',
						value: 1.59
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '22',
						toHour: '23',
						value: 0.1
					},
					{
						color: 'hsl(150deg 100% 65%)',
						day: '2022-10-06',
						fromHour: '23',
						toHour: '24',
						value: -0.05
					}
				]
			});
		});
	});
});
