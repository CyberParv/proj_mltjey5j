import { Button } from "@/components/ui/button";

export function HeroGradient() {
  return (
    <section className="relative min-h-[680px] md:min-h-[760px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=2000&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-24 text-center text-white">
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-accent">Authentic Indian Cuisine</p>
          <h1 className="mt-4 font-heading text-5xl font-semibold leading-tight md:text-7xl">
            Experience the Soul of India
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/90 md:text-lg">
            Journey through centuries of culinary tradition with our handcrafted dishes, prepared with authentic spices and time-honored recipes passed down through generations.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="rounded-lg px-8 py-6 text-base" asChild>
              <a href="/reservations">Reserve Your Table</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/80 text-white hover:bg-white/10" asChild>
              <a href="/menu">Explore Our Menu</a>
            </Button>
          </div>
          <p className="mt-8 text-sm text-white/70">
            Walk-ins welcome • Private dining available for parties of 10+
          </p>
        </div>
      </div>
    </section>
  );
}
