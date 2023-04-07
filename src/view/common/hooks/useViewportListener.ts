import {useEffect, useState} from 'react';

const initialState = {
	isMobile: false,
	isTabletSm: false,
	isTabletXl: false,
	isDesktopSm: false,
	isDesktopMd: false,
	isDesktopLg: false,
	isDesktopXl: false,
};

const useViewportListener = () => {
	const [width, setWidth] = useState(0);
	const [
		{
			isMobile,
			isTabletSm,
			isTabletXl,
			isDesktopSm,
			isDesktopMd,
			isDesktopLg,
			isDesktopXl,
		},
		setScreen,
	] = useState(initialState);
	const isSmallScreen = isMobile || isTabletSm || isTabletXl;
	const isSmallerScreen = isMobile || isTabletSm;
	const isTablet = isTabletSm || isTabletXl;

	const handleScreenChange = (key: string) => {
		setScreen(() => ({
			...initialState,
			[key]: true,
		}));
	};

	useEffect(() => {
		const handleChange = () => {
			setWidth(window.innerWidth);
			const windowInner = window.innerWidth;
			if (windowInner < 576) handleScreenChange('isMobile');
			if (windowInner > 576 && windowInner < 769)
				handleScreenChange('isTabletSm');
			if (windowInner > 768 && windowInner < 821)
				handleScreenChange('isTabletXl');
			if (windowInner < 991 && windowInner > 820)
				handleScreenChange('isDesktopSm');
			if (windowInner < 1200 && windowInner > 991)
				handleScreenChange('isDesktopMd');
			if (windowInner < 1440 && windowInner > 1200)
				handleScreenChange('isDesktopLg');
			if (windowInner > 1440) handleScreenChange('isDesktopXl');
		};

		window.addEventListener('resize', handleChange);
		handleChange();

		return () => window.removeEventListener('resize', handleChange);
	}, []);

	return {
		width,
		isMobile,
		isTabletSm,
		isTabletXl,
		isDesktopSm,
		isDesktopMd,
		isDesktopLg,
		isDesktopXl,
		isSmallerScreen,
		isSmallScreen,
		isTablet,
	};
};

// export default useViewportListener;
