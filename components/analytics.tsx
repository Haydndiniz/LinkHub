import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
import * as gtag from 'lib/gtag'
import { useRouter } from 'next/router'

// hotjar ID
const HJID = 3433831
const HJSV = 6


function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  // Google analytics init
useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  // hotjar init
useEffect(() => {
    hotjar.initialize(HJID, HJSV)
  }, [])
return <Component {...pageProps} />
}
export default MyApp