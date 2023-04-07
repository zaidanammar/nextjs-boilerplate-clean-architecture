import {dateFormatter} from '../dateFormatter';

describe('dateFormatter', () => {
	test('valid', () => {
		const test = dateFormatter(new Date('1988-08-06T07:01:31.240937Z'));
		expect(test).toBe('06 August 1988');
	});

	test('valid data with date format', () => {
		const testWithDateFormat = dateFormatter(
			new Date('1988-08-06T07:01:31.240937Z'),
			'dd MMM yyyy',
		);
		expect(testWithDateFormat).toBe('06 Aug 1988');
	});
});
