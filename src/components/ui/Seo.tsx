import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../../data/site'

type SeoProps = {
  title: string
  description: string
  canonical?: string
}

const setMeta = (name: string, content: string, property = false) => {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(property ? 'property' : 'name', name)
    document.head.appendChild(element)
  }

  element.content = content
}

export function Seo({ title, description, canonical }: SeoProps) {
  const location = useLocation()

  useEffect(() => {
    const canonicalUrl = canonical ?? `${site.domain}${location.pathname}`
    document.title = title
    setMeta('description', description)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:type', 'website', true)
    setMeta('og:url', canonicalUrl, true)
    setMeta('og:image', `${site.domain}${site.logo}`, true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', `${site.domain}${site.logo}`)

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonicalUrl
  }, [canonical, description, location.pathname, title])

  return null
}
