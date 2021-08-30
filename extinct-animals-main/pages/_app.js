import '../styles/globals.css'
import { WorkerProvider } from '../context/WorkerContext'

function MyApp({ Component, pageProps }) {
  return (
    <WorkerProvider>
      <Component {...pageProps} />
    </WorkerProvider>
  )
}

export default MyApp
