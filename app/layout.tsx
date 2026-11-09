
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = 'https://YOUR-DOMAIN.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Grace Mukantwali | Web Developer & UI/UX Designer',
    template: '%s | Grace Mukantwali',
  },

  description:
    'Grace Mukantwali is a Rwanda-based Web Developer, JavaScript Developer and UI/UX Designer. Explore her portfolio, projects and skills in React, Next.js, Node.js, Express.js, frontend and backend development.',

  applicationName: 'Grace Mukantwali Portfolio',

  authors: [
    { name: 'Grace Mukantwali' },
  ],

  creator: 'Grace Mukantwali',
  publisher: 'Grace Mukantwali',

  keywords: [
    'Grace Mukantwali',
    'Grace Mukantwali Developer',
    'Grace Mukantwali Portfolio',
    'Web Developer in Rwanda',
    'Frontend Developer Rwanda',
    'Backend Developer Rwanda',
    'JavaScript Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Express.js Developer',
    'UI UX Designer Rwanda',
    'Web Development',
    'Software Developer',
    'Commercial Engineering Graduate',
    'Website Designer',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Grace Mukantwali | Web Developer & UI/UX Designer',
    description:
      'Discover Grace Mukantwali’s professional portfolio, web development projects, technical skills and UI/UX designs.',
    url: '/',
    siteName: 'Grace Mukantwali Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Grace Mukantwali - Web Developer and UI/UX Designer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Grace Mukantwali | Web Developer',
    description:
      'Web Developer, JavaScript Developer and UI/UX Designer from Rwanda.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Grace Mukantwali',
  url: siteUrl,
  image: `${siteUrl}/profile.jpg`,
  jobTitle: 'Web Developer and UI/UX Designer',
  description:
    'Web Developer and UI/UX Designer specializing in JavaScript, React, Next.js, Node.js and web development.',
  knowsAbout: [
    'Frontend Development',
    'Backend Development',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'UI/UX Design',
    'Web Development',
    'Commercial Engineering',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'RW',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  )
}
