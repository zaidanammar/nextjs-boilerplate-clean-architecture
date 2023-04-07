import {cva, type VariantProps} from 'class-variance-authority';
import React from 'react';

import LoadingText from '../loading/loadingText';

const ButtonStyles = cva(
	'px-6 text-center transition-all duration-300 ease-in-out active:shadow-md disabled:shadow-none disabled:cursor-not-allowed',
	{
		variants: {
			variant: {
				primary:
					'bg-primary-main text-white hover:bg-opacity-80 hover:border-neutral-100 disabled:bg-opacity-70 disabled:text-neutral-100',
				secondary:
					'bg-neutral-10 border border-neutral-100 text-neutral-100 hover:border-neutral-100  disabled:border disabled:border-neutral-50 disabled:text-neutral-50',
			},
			fullWidth: {
				true: 'w-full',
			},
			size: {
				xs: 'h-[24px] text-m-medium',
				m: 'h-[32px] text-m-semibold',
				l: 'h-[40px] text-l-semibold',
				xl: 'h-[48px] text-l-semibold',
				xxl: 'h-[72px] text-xxl-semibold',
			},
			rounded: {
				m: 'rounded-2xl',
				l: 'rounded-3xl',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'l',
			rounded: 'l',
		},
	},
);

const loadingColor: Record<
	string,
	{
		bg: string;
		color: string;
	}
> = {
	primary: {bg: 'currentColor', color: '#E0E0E0'},
	secondary: {bg: '#E0E0E0', color: '#C2C2C2'},
};

type ButtonProps = {
	isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof ButtonStyles>;

const Button = ({
	type,
	children,
	onClick,
	size = 'l',
	variant = 'primary',
	rounded = 'l',
	fullWidth = false,
	disabled = false,
	isLoading = false,
	className,
	...buttonProps
}: ButtonProps) => {
	return (
		<button
			type={type}
			disabled={isLoading ? true : disabled}
			onClick={onClick}
			className={ButtonStyles({size, variant, fullWidth, className, rounded})}
			{...buttonProps}
		>
			{isLoading ? (
				<LoadingText
					background={loadingColor[variant as string].bg}
					color={loadingColor[variant as string].color}
				/>
			) : (
				children
			)}
		</button>
	);
};

export default Button;
