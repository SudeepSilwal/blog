import './globals.css'

export const metadata = {
  title: {
    default: 'Sudeep Silwal | Blog',
    template: '%s | Sudeep Silwal',
  },
  description:
    'Articles about web development, programming, technology and projects by Sudeep Silwal.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}