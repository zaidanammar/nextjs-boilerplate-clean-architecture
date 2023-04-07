import Layout from '@/view/common/components/templates/layout';
import {persistor, wrapper} from '@/view/common/store';
import type {NextPageWithLayout} from '@/view/common/types';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import type {AppProps} from 'next/app';
import {Inter} from 'next/font/google';
import {SnackbarProvider} from 'notistack';
import {Suspense, useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import '@/view/common/styles/globals.css';

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const inter = Inter({preload: true, subsets: ['latin']});

const App = ({Component, pageProps, ...rest}: AppPropsWithLayout) => {
	const [queryClient] = useState(new QueryClient());
	const {store} = wrapper.useWrappedStore(rest);

	const getLayout =
		Component.getLayout ??
		(page => (
			<Suspense fallback={page}>
				<Layout>
					<main className={inter.className}>{page}</main>
				</Layout>
			</Suspense>
		));

	return (
		<QueryClientProvider client={queryClient}>
			<SnackbarProvider
				maxSnack={3}
				autoHideDuration={1500}
				anchorOrigin={{horizontal: 'center', vertical: 'top'}}
			>
				<Provider store={store}>
					<PersistGate persistor={persistor}>
						{getLayout(<Component {...pageProps} />)}
					</PersistGate>
				</Provider>
			</SnackbarProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};

export default App;
