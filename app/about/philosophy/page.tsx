import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Sparkles, Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { PHILOSOPHY, ABOUT_LINKS, aboutUrl } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Our Philosophy — Think Forward',
  description:
    'Think Forward is Curiuz Technologies’ philosophy: curiosity drives transformation, thinking forward delivers it. Powered by curiosity, enabled by AI.',
}

export default function PhilosophyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-950 pt-28 text-white md:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-curi opacity-20 blur-[120px]" />
          <div className="absolute right-0 top-16 h-96 w-96 rounded-full bg-spark opacity-15 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.12] bg-cover bg-center" style={{ backgroundImage: 'url(/img/tech-nodes.svg)' }} />
        </div>
        <div className="wrap relative pb-20">
          <Reveal>
            <nav className="flex items-center gap-1.5 text-sm text-white/50">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span>About</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/80">Our Philosophy</span>
            </nav>
          </Reveal>
          <Reveal delay={60}>
            <span className="kicker mt-6 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-curi-400">
              <Sparkles className="h-3.5 w-3.5" /> {PHILOSOPHY.kicker}
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Think <span className="bg-curi-grad bg-clip-text text-transparent">Forward.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-2xl font-medium leading-snug text-white/80">
              “{PHILOSOPHY.belief}”
            </p>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24">
        <div className="wrap max-w-3xl">
          <Reveal>
            <span className="kicker text-curi"><span className="h-1.5 w-1.5 rounded-full bg-curi" /> The idea</span>
            <div className="mt-5 space-y-5 text-lg leading-relaxed text-slatey">
              {PHILOSOPHY.intro.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* THREE MOVES */}
      <section className="bg-mist py-24">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-3">
            {PHILOSOPHY.sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-card">
                  <span className="font-display text-4xl font-bold text-curi/25">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slatey">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FIVE PILLARS */}
      <section className="bg-white py-24">
        <div className="wrap">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="kicker justify-center text-curi"><span className="h-1.5 w-1.5 rounded-full bg-curi" /> The five pillars</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              What Think Forward looks like in practice
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PHILOSOPHY.pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.name} delay={i * 50}>
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-card">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-curi-grad text-white shadow-glowc">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-sm font-bold text-ink">{p.name}</h3>
                    <p className="mt-1.5 text-xs leading-snug text-slatey">{p.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* BELIEF PULL + CROSS-LINKS */}
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-curi-grad opacity-25 blur-3xl" />
        <div className="wrap relative">
          <Reveal className="max-w-3xl">
            <Quote className="h-10 w-10 text-curi-400/50" />
            <p className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl">
              We challenge conventional thinking, bring clarity to complexity, and guide clients toward decisions that create sustained value — not just quick wins.
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {ABOUT_LINKS.filter((l) => l.slug !== 'philosophy').map((l) => (
              <Link key={l.slug} href={aboutUrl(l.slug)} className="btn-onink">
                {l.label} <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
            <Link href="/contact" className="btn-primary">Work with us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
