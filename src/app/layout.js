import { Geist, Geist_Mono } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  metadataBase: new URL('https://blog.sudeepsilwal.com.np'),

  title: {
    default: "Sudeep's Blog",
    template: "%s | Sudeep's Blog",
  },

  description:
    'Articles about technology, web development, health, lifestyle, and interesting ideas.',

  keywords: [
    'Sudeep Silwal',
    "Sudeep Silwal's Blog",
    'Sudeep Silwal Blog',
    'Sudeep Silwal Website',
    'Sudeep Silwal Developer',
    'Sudeep Silwal Programming',
    'Sudeep Silwal Coding',
    'Sudeep Silwal Next.js',
    'Sudeep Silwal React',
    'Sudeep Silwal JavaScript',
    'Technology',
    'Web Development',
    'Programming',
    'Coding',
    'React',
    'Next.js',
    'JavaScript',
    'Health',
    'Lifestyle',
    'Fashion',
    'Books',
    'Book Reviews',
    'Reviews',
    'Summaries',
    'Top 10',
    'Tips and Guides',
  ],

  authors: [
    {
      name: 'Sudeep Silwal',
      url: 'https://sudeepsilwal.com.np',
    },
  ],

  creator: 'Sudeep Silwal',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blog.sudeepsilwal.com.np',
    siteName: 'Sudeep Blog',
    title: 'Sudeep Blog',
    description:
      'Articles about technology, web development, health, lifestyle, and interesting ideas.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sudeep Blog',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sudeep Blog',
    description:
      'Articles about technology, web development, health, lifestyle, and interesting ideas.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sudeep Silwal',
    url: 'https://sudeepsilwal.com.np',
    sameAs: [
      'https://www.linkedin.com/in/sudeepsilwal',
      'https://x.com/thesudeepsilwal',
      'https://github.com/SudeepSilwal',
      'https://www.youtube.com/@thesudeepsilwal',
    ],
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
