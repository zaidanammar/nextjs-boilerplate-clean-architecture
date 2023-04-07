import Image from 'next/image';
import {useRouter} from 'next/router';
import {FC, ReactNode} from 'react';

import Transition from '../../../atoms/animations/transition';

const bgImage = require('public/images/forest-bg.jpeg');

const AuthLayout: FC<{children: ReactNode}> = ({children}) => {
	const {asPath} = useRouter();

	return (
		<div className="flex max-h-screen min-h-screen items-center overflow-hidden bg-gray-50">
			<div className="mx-auto h-screen min-h-screen flex-1 rounded-lg bg-white shadow-xl">
				<div className="h-4 w-full bg-primary-main shadow-md" />
				<div className="flex min-h-screen flex-col md:flex-row">
					<div className="hidden bg-cover bg-top md:flex md:h-auto md:w-1/2">
						<Image
							src={bgImage}
							alt="img"
							priority
							style={{objectFit: 'cover', objectPosition: 'top'}}
						/>
					</div>
					<div className="h-screen bg-[#f9f9f9] md:w-1/2">
						<Transition asPath={asPath}>{children}</Transition>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
