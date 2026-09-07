export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">

        <p>
          © {currentYear} Sudeep Silwal. All rights reserved.
        </p>

        <div className="flex items-center gap-5">

          <a
            href="https://sudeepsilwal.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Portfolio
          </a>

          <a
            href="https://blog.sudeepsilwal.com.np"
            className="transition-colors hover:text-foreground"
          >
            Posts
          </a>

        </div>
      </div>
    </footer>
  )
}
