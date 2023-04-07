import Transition from '@/view/common/components/atoms/animations/transition';
import {useRouter} from 'next/router';
import {FC, ReactNode} from 'react';

const PlainLayout: FC<{children: ReactNode}> = ({children}) => {
	const {asPath} = useRouter();

	return (
		<div className="flex max-h-screen min-h-screen items-center overflow-hidden bg-gray-50">
			<div className="mx-auto h-screen min-h-screen flex-1 rounded-lg bg-white shadow-xl">
				<div className="h-4 w-full bg-primary-main shadow-md" />
				<div className="flex min-h-screen w-full">
					<div className="h-screen w-full bg-[#f9f9f9]">
						<Transition asPath={asPath}>{children}</Transition>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlainLayout;
