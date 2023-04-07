import {
	removeNumericFormat,
	type NumericFormatProps,
} from 'react-number-format';

const formatCurrency = (
	amount: number,
	options: {
		digit: number;
		currency: string;
		currencyFormat: string;
	} = {
		digit: 0,
		currency: 'IDR',
		currencyFormat: 'id-ID',
	},
) =>
	new Intl.NumberFormat(options.currencyFormat, {
		style: 'currency',
		currency: options.currency,
		maximumFractionDigits: options.digit,
	}).format(amount);

const formatCurrencyTextInput = (value: string) =>
	value
		.replace(/^[0]/, '')
		.replace(/\D/g, '')
		.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

const defaultFormat: Partial<NumericFormatProps> = {
	thousandsGroupStyle: 'thousand',
	thousandSeparator: '.',
	decimalSeparator: ',',
	fixedDecimalScale: true,
	allowNegative: false,
};

const removeFormatRupiah = (value: string) =>
	removeNumericFormat(
		value,
		{
			from: {start: 0, end: 0},
			to: {start: 0, end: value.length},
			lastValue: '',
		},
		{
			prefix: '',
			...defaultFormat,
		},
	);
