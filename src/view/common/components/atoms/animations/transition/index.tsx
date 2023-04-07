import {AnimatePresence, motion} from 'framer-motion';
import {FC, ReactNode} from 'react';

const variant = {
	in: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.5,
		},
	},
	out: {
		opacity: 0,
		scale: 1,
		y: 40,
		transition: {
			duration: 0.5,
		},
	},
};

type TransitionProps = {
	children: ReactNode;
	asPath: string;
	initial?: boolean;
	variants?: Record<string, never>;
};

const Transition: FC<TransitionProps> = ({
	children,
	asPath,
	initial = true,
	variants = variant,
}) => (
	<AnimatePresence initial={initial}>
		<motion.div
			key={`an${asPath}`}
			variants={variants}
			animate="in"
			initial="out"
			exit="out"
			className="h-full w-full"
		>
			{children}
		</motion.div>
	</AnimatePresence>
);

export default Transition;
