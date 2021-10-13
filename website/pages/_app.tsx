import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { AppContext, SelectedContext } from '../context'
import Selected from '../context/SelectedContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <SelectedContext>
        <Component {...pageProps} />
      </SelectedContext>
    </AppContext>
  )
}
export default MyApp
