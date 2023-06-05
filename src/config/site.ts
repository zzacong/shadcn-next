export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Next.js',
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Payments',
      href: '/payments',
    },
    {
      title: 'Forms',
      href: '/forms',
    },
    {
      title: 'Dashboard',
      href: '/dashboard',
    },
  ],
  links: {
    github: 'https://github.com/zzacong/shadcn-next',
  },
}
