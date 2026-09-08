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


  authors: [
    {
      name: 'Sudeep Silwal',
      url: 'https://sudeepsilwal.com.np',
    },
  ],

  creator: 'Sudeep Silwal',

  openGraph: {
  title: "Sudeep Silwal's Blog",
  description:
    'Articles about technology, web development, health, lifestyle, projects, books, reviews, and interesting ideas.',
  url: '/',
  type: 'website',
  images: [
    {
      url: '/og-image.png',
      width: 1734,
      height: 907,
      alt: "Sudeep Silwal's Blog",
    },
  ],
},

twitter: {
  card: 'summary_large_image',
  title: "Sudeep Silwal's Blog",
  description:
    'Articles about technology, web development, health, lifestyle, projects, books, reviews, and interesting ideas.',
  images: ['/og-image.png'],
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
