import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { Suspense } from 'react'

// import { persistor, wrapper } from '@/store/index';
import Layout from '@/components/templates/layout'

import type { NextPageWithLayout } from '../types'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // const { store } = wrapper.useWrappedStore(rest);

  const getLayout =
    Component.getLayout ??
    ((page) => (
      <Suspense fallback={page}>
        <Layout>{page}</Layout>
      </Suspense>
    ))

  return (
    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>
    getLayout(<Component {...pageProps} />)
    //   </PersistGate>
    // </Provider>
  )
}

export default App
