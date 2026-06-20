const APP_BASE = 'https://ghardhundo-platform.vercel.app'

export function appLink(path: string, utmCampaign: string): string {
  const url = new URL(path, APP_BASE)
  url.searchParams.set('utm_source', 'ghardhundo.com')
  url.searchParams.set('utm_medium', 'marketing')
  url.searchParams.set('utm_campaign', utmCampaign)
  return url.toString()
}

export const LINKS = {
  register: appLink('/chat', 'hero-cta'),
  registerNav: appLink('/chat', 'nav-cta'),
  registerFooter: appLink('/chat', 'footer-cta'),
  projectBase: (id: string) => appLink(`/project/${id}`, 'project-card'),
}
