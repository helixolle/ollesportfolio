import { gtag } from 'gtag'

const GA_TRACKING_ID = 'G-X2NBPTN32R'

// Initialize Google Analytics
export const pageview = (url) => {
  gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
