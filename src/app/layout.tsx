import '~/styles/globals.css'
import { cn } from '~/lib/utils'
import { fontSans } from '~/lib/fonts'
import { ThemeProvider } from '~/components/theme-provider'
import { SiteHeader } from '~/components/site-header'
import { TailwindIndicator } from '~/components/tailwind-indicator'
import { siteConfig } from '~/config/site'

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

type RootLayoutProps = React.PropsWithChildren<unknown>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="">
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
