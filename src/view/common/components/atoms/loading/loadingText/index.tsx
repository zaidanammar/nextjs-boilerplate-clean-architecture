import React from 'react';

type LoadingProps = {
	background: string;
	color: string;
};

const Loading = ({background, color}: LoadingProps) => (
	<div className="flex items-center justify-center gap-2">
		<svg
			className="inline h-4 w-4 animate-spin"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
		>
			<path
				fill={background}
				opacity=".25"
				d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
			/>
			<path
				fill={color}
				d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"
			/>
		</svg>
		<span>Loading...</span>
	</div>
);

export default Loading;
