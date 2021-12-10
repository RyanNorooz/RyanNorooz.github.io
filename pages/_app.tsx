import 'tailwindcss/tailwind.css'

import '@/styles/IRANSansX/IRANSansX.css'
import '@/styles/styles.scss'
import '@/styles/globals.scss'

import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'

import Head from 'next/head'
import SEOMetaTags from '@/components/SEOMetaTags'

type NextPageWithLayout = NextPage & {
  layout?: (page: ReactElement) => ReactNode
}

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.layout ?? ((page) => page)
  return (
    <>
      <Head>
        <SEOMetaTags />
      </Head>

      {Layout(<Component {...pageProps} />)}
    </>
  )
}
