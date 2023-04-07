/* eslint-disable react-hooks/exhaustive-deps */
import {RefObject, useEffect} from 'react';

type UseClickOutsideProps = {
	ref: RefObject<HTMLInputElement>;
	handleClick: () => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	state?: any;
};

const useClickOutside = ({ref, handleClick, state}: UseClickOutsideProps) => {
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handleClick();
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, state]);
};

// export default useClickOutside;
