import Head from 'next/head'

import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

const DefaultLayout: React.FC = function ({ children }) {
  return (
    <>
      <Head>
        <title>Charme Gerdoo</title>
      </Head>

      <TheHeader />
      <main>{children}</main>
      <TheFooter />
    </>
  )
}
export default DefaultLayout
