"use client"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center gap-6 px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Something went wrong</p>
      <h1 className="text-3xl font-semibold text-foreground md:text-4xl font-[var(--font-heading)]">We couldn't load the page</h1>
      <p className="text-sm text-muted-foreground">{error.message || "Please try again or return to the homepage."}</p>
      <button
        onClick={() => reset()}
        className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
      >
        Try Again
      </button>
    </div>
  )
}
