import Head from 'next/head';
import './globals.css'
import { Inter } from 'next/font/google'
import ProviderWrap from './ProviderWrap';
import {store} from './store'
import {Provider} from 'react-redux'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
    </Head>
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider store={store}> */}
        <ProviderWrap>
        {children}
        </ProviderWrap>
          {/* </Provider> */}
      </body>
    </html>
    </>
  )
}
