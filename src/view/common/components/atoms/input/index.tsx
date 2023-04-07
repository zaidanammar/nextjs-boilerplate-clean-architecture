/* eslint-disable no-nested-ternary */
import {cva} from 'class-variance-authority';
import React, {forwardRef} from 'react';

const InputStyles = cva(
	'block w-full rounded-md border px-3 transition duration-300 ease-in-out active:shadow-md',
	{
		variants: {
			size: {
				l: 'h-10 text-l-regular',
				m: 'h-8 text-m-regular',
			},
			// success: {
			//   true: 'border-green-success hover:border-green-success focus:outline-green-success',
			// },
			error: {
				true: 'border-red-caution hover:border-red-caution focus:outline-red-caution text-red-caution',
			},
			disabled: {
				true: 'disabled:bg-gray-200 disabled:text-gray-600 border-gray-600 hover:border-gray-600 focus:outline-gray-600 active:shadow-none cursor-not-allowed',
			},
			default: {
				true: 'border-neutral-500 hover:border-primary-main focus:outline-1 focus:outline-primary-main',
			},
			withEndAdornment: {
				true: 'pr-9',
			},
			withStartAdornment: {
				true: 'pl-8',
			},
		},
	},
);

const HelperTextStyles = cva('text-m-regular mt-1 block', {
	variants: {
		// success: {
		//   true: 'text-green-success ',
		// },
		error: {
			true: 'text-red-caution',
		},
		disabled: {
			true: 'text-gray-600',
		},
		default: {
			true: 'text-neutral-100',
		},
	},
});

const AdornmentStyles = cva('absolute mr-3', {
	variants: {
		// success: {
		//   true: 'text-green-success ',
		// },
		error: {
			true: 'text-red-caution',
		},
		disabled: {
			true: 'text-gray-600',
		},
		withStartAdornment: {
			true: 'ml-3',
		},
		default: {
			true: 'text-gray-500',
		},
	},
});

type InputProps = {
	fullwidth?: boolean;
	labelText?: string;
	helperText?: string;
	error?: boolean;
	size?: 'l' | 'm';
	endAdornment?: JSX.Element;
	startAdornment?: JSX.Element;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			value,
			name,
			onChange,
			onFocus,
			onBlur,
			labelText,
			helperText,
			disabled,
			endAdornment,
			startAdornment,
			error = false,
			fullwidth,
			placeholder = 'Placeholder',
			size = 'l',
			className,
			...inputProps
		},
		ref,
	) => {
		const withEndAdornment = !!endAdornment;
		const withStartAdornment = !!startAdornment;
		// const success = !!(!error && !disabled && value)

		const handleFocus = (
			event: React.FocusEvent<HTMLInputElement, Element>,
		) => {
			if (onFocus) onFocus(event);
		};

		const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
			if (onBlur) onBlur(event);
		};

		return (
			<div>
				{labelText && (
					<label
						htmlFor={`input-${name}`}
						className="text-m-regular mb-1 block"
					>
						{labelText}
					</label>
				)}
				<span
					className={`${fullwidth ? 'w-full' : 'w-auto'} ${
						withEndAdornment
							? 'relative flex items-center justify-end'
							: withStartAdornment
							? 'relative flex items-center'
							: ''
					}`}
				>
					{withStartAdornment && (
						<div
							className={AdornmentStyles({
								error,
								disabled,
								withStartAdornment,
								default: !error && !disabled,
							})}
						>
							{startAdornment}
						</div>
					)}
					<input
						ref={ref}
						placeholder={placeholder}
						disabled={disabled}
						value={value}
						onChange={onChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						name={name}
						aria-describedby={name}
						className={InputStyles({
							error,
							disabled,
							withEndAdornment,
							withStartAdornment,
							size,
							default: !error && !disabled,
							className,
						})}
						{...inputProps}
					/>
					{withEndAdornment && (
						<div
							className={AdornmentStyles({
								error,
								disabled,
								default: !error && !disabled,
							})}
						>
							{endAdornment}
						</div>
					)}
				</span>
				{helperText && (
					<small
						className={HelperTextStyles({
							error,
							disabled,
							default: !error && !disabled,
						})}
					>
						{helperText}
					</small>
				)}
			</div>
		);
	},
);

Input.displayName = 'Input';
export default Input;
