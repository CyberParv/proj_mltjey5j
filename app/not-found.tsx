import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center gap-6 px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">404</p>
      <h1 className="text-3xl font-semibold text-foreground md:text-4xl font-[var(--font-heading)]">Page not found</h1>
      <p className="text-sm text-muted-foreground">The page you're looking for doesn't exist. Let's get you back to the dining room.</p>
      <Link
        href="/"
        className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
      >
        Return Home
      </Link>
    </div>
  )
}
