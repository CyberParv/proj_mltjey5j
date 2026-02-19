export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="animate-pulse space-y-6">
        <div className="h-10 w-2/3 rounded-md bg-muted" />
        <div className="h-6 w-1/2 rounded-md bg-muted" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="h-48 rounded-xl bg-muted" />
          <div className="h-48 rounded-xl bg-muted" />
          <div className="h-48 rounded-xl bg-muted" />
        </div>
      </div>
    </div>
  )
}
