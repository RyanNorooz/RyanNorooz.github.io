import 'tailwindcss/tailwind.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@/styles/IRANSansX/IRANSansX.css'

import '@/styles/globals.scss'
import '@/styles/style.scss'

import Script from 'next/script'
import Head from 'next/head'

import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'

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
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      />

      <Head>
        <SEOMetaTags />
      </Head>

      {Layout(<Component {...pageProps} />)}
    </>
  )
}
