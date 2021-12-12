import 'tailwindcss/tailwind.css'

import '@/public/fonts/IRANSansX/IRANSansX.css'
import '@/styles/styles.scss'
import '@/styles/main.scss'

import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
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
  const [isDark, setIsDark] = useState<boolean>()

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    prefersDark.addEventListener('change', (e) => setIsDark(e.matches))
    setIsDark(prefersDark.matches)
  }, [])

  return (
    <>
      <Head>
        <SEOMetaTags />
        {isDark ? (
          <link rel="icon" href="/favicon-dark.ico" />
        ) : (
          <link rel="icon" href="/favicon.ico" />
        )}
      </Head>

      {Layout(<Component {...pageProps} />)}
    </>
  )
}
