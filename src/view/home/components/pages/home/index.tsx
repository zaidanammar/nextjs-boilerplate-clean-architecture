import {useRouter} from 'next/router';
import React from 'react';

const PagesHome = () => {
	const router = useRouter();
	return (
		<main className="h-full">
			<h1>Home Page</h1>
			<p
				onClick={() => router.push('/auth/login')}
				className="mt-10 cursor-pointer hover:opacity-70"
			>
				go to login Page
			</p>
		</main>
	);
};

export default PagesHome;
