import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CURIUZ_VALUES, ABOUT_LINKS, aboutUrl } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Our Values — The principles that power Think Forward',
  description:
    'The seven core values of Curiuz Technologies: curiosity with purpose, client-centric thinking, intelligence through AI & data, excellence in execution, integrity, agility, and a value-driven mindset.',
}

export default function ValuesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-950 pt-28 text-white md:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-curi opacity-20 blur-[120px]" />
          <div className="absolute right-0 top-16 h-96 w-96 rounded-full bg-spark opacity-15 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.12] bg-cover bg-center" style={{ backgroundImage: 'url(/img/tech-nodes.svg)' }} />
        </div>
        <div className="wrap relative pb-16">
          <Reveal>
            <nav className="flex items-center gap-1.5 text-sm text-white/50">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span>About</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/80">Our Values</span>
            </nav>
          </Reveal>
          <Reveal delay={60}>
            <span className="kicker mt-6 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-curi-400">
              <Sparkles className="h-3.5 w-3.5" /> The principles that power Think Forward
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.06] tracking-tight sm:text-6xl">
              Values you can <span className="bg-curi-grad bg-clip-text text-transparent">measure us by.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Strategies evolve and technologies advance — our values don’t. They’re not abstract ideals but practical
              principles embedded in every engagement, decision and interaction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEVEN VALUES */}
      <section className="bg-white py-24">
        <div className="wrap">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CURIUZ_VALUES.map((v, i) => {
              const Icon = v.icon
              return (
                <Reveal key={v.name} delay={i * 50}>
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-curi/30 hover:shadow-card-hover">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-curi-50 text-curi">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-2xl font-bold text-curi/25">0{i + 1}</span>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-ink">{v.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slatey">{v.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA + CROSS-LINKS */}
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-curi opacity-20 blur-[120px]" />
        <div className="wrap relative text-center">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Values, lived — not laminated
            </h2>
            <p className="mt-4 text-lg text-white/70">
              These principles guide how we collaborate, engage and deliver — turning the Think Forward philosophy into
              action and impact.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {ABOUT_LINKS.filter((l) => l.slug !== 'values').map((l) => (
                <Link key={l.slug} href={aboutUrl(l.slug)} className="btn-onink">{l.label}</Link>
              ))}
              <Link href="/contact" className="btn-primary">Work with us <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
