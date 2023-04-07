/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/view/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontSize: {
				// heading s
				'heading-s-bold': [
					'30px',
					{
						lineHeight: '38px',
						fontWeight: 700,
					},
				],
				'heading-s-semibold': [
					'30px',
					{
						lineHeight: '38px',
						fontWeight: 600,
					},
				],
				'heading-s-medium': [
					'30px',
					{
						lineHeight: '38px',
						fontWeight: 500,
					},
				],
				'heading-s-regular': [
					'30px',
					{
						lineHeight: '38px',
						fontWeight: 400,
					},
				],
				// heading m
				'heading-m-bold': [
					'60px',
					{
						lineHeight: '72px',
						fontWeight: 700,
					},
				],
				'heading-m-semibold': [
					'60px',
					{
						lineHeight: '72px',
						fontWeight: 600,
					},
				],
				'heading-m-medium': [
					'60px',
					{
						lineHeight: '72px',
						fontWeight: 500,
					},
				],
				'heading-m-regular': [
					'60px',
					{
						lineHeight: '72px',
						fontWeight: 400,
					},
				],
				// text xxl
				'xxl-bold': [
					'20px',
					{
						lineHeight: '32px',
						fontWeight: 700,
					},
				],
				'xxl-semibold': [
					'20px',
					{
						lineHeight: '32px',
						fontWeight: 600,
					},
				],
				'xxl-medium': [
					'20px',
					{
						lineHeight: '32px',
						fontWeight: 500,
					},
				],
				'xxl-regular': [
					'20px',
					{
						lineHeight: '32px',
						fontWeight: 400,
					},
				],
				// text xl
				'xl-bold': [
					'18px',
					{
						lineHeight: '28px',
						fontWeight: 700,
					},
				],
				'xl-semibold': [
					'18px',
					{
						lineHeight: '28px',
						fontWeight: 600,
					},
				],
				'xl-medium': [
					'18px',
					{
						lineHeight: '28px',
						fontWeight: 500,
					},
				],
				'xl-regular': [
					'18px',
					{
						lineHeight: '28px',
						fontWeight: 400,
					},
				],
				// text l
				'l-bold': [
					'16px',
					{
						lineHeight: '24px',
						fontWeight: 700,
					},
				],
				'l-semibold': [
					'16px',
					{
						lineHeight: '24px',
						fontWeight: 600,
					},
				],
				'l-medium': [
					'16px',
					{
						lineHeight: '24px',
						fontWeight: 500,
					},
				],
				'l-regular': [
					'16px',
					{
						lineHeight: '24px',
						fontWeight: 400,
					},
				],
				// text m
				'm-bold': [
					'14px',
					{
						lineHeight: '20px',
						fontWeight: 700,
					},
				],
				'm-semibold': [
					'14px',
					{
						lineHeight: '20px',
						fontWeight: 600,
					},
				],
				'm-medium': [
					'14px',
					{
						lineHeight: '20px',
						fontWeight: 500,
					},
				],
				'm-regular': [
					'14px',
					{
						lineHeight: '20px',
						fontWeight: 400,
					},
				],
				// text s
				's-bold': [
					'12px',
					{
						lineHeight: '18px',
						fontWeight: 700,
					},
				],
				's-semibold': [
					'12px',
					{
						lineHeight: '18px',
						fontWeight: 600,
					},
				],
				's-medium': [
					'12px',
					{
						lineHeight: '18px',
						fontWeight: 500,
					},
				],
				's-regular': [
					'12px',
					{
						lineHeight: '18px',
						fontWeight: 400,
					},
				],
			},
			colors: {
				'primary-main': '#2F265B',
				'red-caution': '#D40000',
			},
			boxShadow: {
				basic: '0px 0px 16px rgba(0, 0, 0, 0.15)',
			},
		},
	},
};
