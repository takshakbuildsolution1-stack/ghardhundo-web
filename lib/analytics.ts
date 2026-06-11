const APP_BASE = 'https://app.ghardhundo.com'

export function appLink(path: string, utmCampaign: string): string {
  const url = new URL(path, APP_BASE)
  url.searchParams.set('utm_source', 'ghardhundo.com')
  url.searchParams.set('utm_medium', 'marketing')
  url.searchParams.set('utm_campaign', utmCampaign)
  return url.toString()
}

export const LINKS = {
  register: appLink('/register', 'hero-cta'),
  registerNav: appLink('/register', 'nav-cta'),
  registerFooter: appLink('/register', 'footer-cta'),
  projectBase: (id: string) => appLink(`/projects/${id}`, 'project-card'),
}
