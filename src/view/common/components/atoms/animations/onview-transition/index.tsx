import {motion, Transition, useAnimation, Variants} from 'framer-motion';
import {FC, ReactNode, useEffect} from 'react';
import {useInView} from 'react-intersection-observer';

const fadeInDown = {
	visible: {opacity: 1, y: 0},
	hidden: {opacity: 0, y: -100},
};

const fadeInUp = {
	visible: {opacity: 1, y: 0},
	hidden: {opacity: 0, y: 100},
};

const fadeInLeft = {
	visible: {opacity: 1, x: 0},
	hidden: {opacity: 0, x: 100},
};

const fadeInRight = {
	visible: {opacity: 1, x: 0},
	hidden: {opacity: 0, x: -100},
};

const slideInLeft = {
	visible: {opacity: 1, x: 0},
	hidden: {opacity: 0, x: 100},
};

const slideInRight = {
	visible: {opacity: 1, x: 0},
	hidden: {opacity: 0, x: -100},
};

const variant: Record<string, Variants> = {
	fadeInDown,
	fadeInUp,
	fadeInLeft,
	fadeInRight,
	slideInLeft,
	slideInRight,
};

type Props = {
	children: ReactNode;
	variants?: Variants;
	transition?: Transition;
};

const OnViewTransition: FC<Props> = ({
	children,
	variants = variant.fadeInDown,
	transition = {
		duration: 0.8,
		delay: 0.55,
	},
}) => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			variants={variants}
			animate={controls}
			initial="hidden"
			transition={transition}
		>
			{children}
		</motion.div>
	);
};

// export default OnViewTransition;
