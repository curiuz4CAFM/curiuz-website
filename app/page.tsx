import Link from 'next/link'
import {
  ArrowRight, Sparkles, Check, Star, Quote,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { HeroVideo } from '@/components/hero-video'
import {
  MarketInsight, AboutBand, WhatWeDo, HowWeWork, WhyCuriuz, WhoWeServe, OurPromise,
} from '@/components/consulting'
import {
  PREMYZ_SUITES, CURIUZ_STATS, TESTIMONIALS, PREMYZ_INDUSTRIES, MARKET_INSIGHTS,
  premyzSuiteUrl, PREMYZ_SOLUTIONS, PREMYZ_DEMO,
} from '@/lib/site-data'

export default function Home() {
  return (
    <>
      <Hero />
      <MarketInsight />
      <AboutBand />
      <WhatWeDo />
      <HowWeWork />
      <StatsBand />
      <WhyCuriuz />
      <PremyzShowcase />
      <WhoWeServe />
      <Testimonials />
      <OurPromise />
      <DemoSection />
    </>
  )
}

/* ────────────────────────────── HERO ────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-ink-950 text-white">
      {/* Background video (plays at half speed, loops) */}
      <HeroVideo
        src="/curiuz-intro.mp4"
        playbackRate={0.25}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-65"
      />
      {/* Contrast overlay so white text stays legible over the video */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/45 to-ink-950/90" />

      {/* aurora accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-curi opacity-20 blur-[120px]" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-spark opacity-15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <div className="wrap relative flex flex-1 flex-col items-center justify-center pb-8 pt-24 text-center md:pt-28">
        <Reveal delay={80}>
          <h1 className="mx-auto max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Curiosity that drives clarity.
            <br />
            <span className="bg-curi-grad bg-clip-text text-transparent">Execution that delivers value.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            We were built to think differently. <strong className="font-semibold text-white">Curiosity</strong> makes
            us ask the questions others skip; <strong className="font-semibold text-white">thinking forward</strong>{' '}
            means acting on the answers before they become problems. That is how we turn complexity into clarity — and
            clarity into measurable value — across process design, ERP advisory and{' '}
            <strong className="font-semibold text-white">Premyz</strong>, our AI platform for facilities operations.
          </p>
        </Reveal>
      </div>

      {/* Auto-scrolling market-insight cards (right → left, pause on hover) */}
      <div className="group relative z-10 pb-8">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-ink-950 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-ink-950 to-transparent sm:w-24" />
        <div className="flex w-max animate-marquee gap-4 px-2 group-hover:[animation-play-state:paused]">
          {[...MARKET_INSIGHTS, ...MARKET_INSIGHTS].map((m, i) => {
            const Icon = m.icon
            return (
              <article
                key={`${m.topic}-${i}`}
                className="flex w-[270px] flex-none flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-left backdrop-blur-md sm:w-[300px]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-curi-grad text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-curi-400">
                    {m.topic}
                  </span>
                </div>
                <p className="mt-4 font-display text-3xl font-bold text-white">{m.figure}</p>
                <p className="mt-1 text-xs font-bold text-white/85">{m.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-white/55">{m.insight}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── PREMYZ PRODUCT SHOWCASE ─────────────────────── */
function PremyzShowcase() {
  return (
    <section id="products" className="relative bg-white py-24">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-premyz-grad" /> The product
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Meet <span className="bg-premyz-grad bg-clip-text text-transparent">Premyz</span> — the operating system for modern facilities
          </h2>
          <p className="mt-4 text-lg text-slatey">
            One cloud platform to unify assets, maintenance, spaces, people and performance across your whole
            portfolio. <strong className="text-ink">10 solution suites. 25+ modules.</strong> From reactive to predictive.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PREMYZ_SUITES.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.name} delay={i * 40}>
                <a
                  href={premyzSuiteUrl(s.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card-hover"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand transition-colors group-hover:bg-premyz-grad group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-ink">{s.name}</h3>
                  <p className="mt-1.5 text-xs leading-snug text-slatey">{s.blurb}</p>
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a href={PREMYZ_SOLUTIONS} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Explore all 25+ modules <ArrowRight className="h-4 w-4" />
          </a>
          <a href={PREMYZ_DEMO} target="_blank" rel="noopener noreferrer" className="btn-ghost">Book a live demo</a>
        </Reveal>

        {/* Industries strip */}
        <div className="mt-16 rounded-2xl border border-line bg-mist p-6">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-slatey">
            Built for the way these industries operate
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {PREMYZ_INDUSTRIES.map((ind) => (
              <span key={ind} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-medium text-ink">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── STATS BAND ─────────────────────────── */
function StatsBand() {
  return (
    <section className="bg-ink py-16 text-white">
      <div className="wrap grid grid-cols-2 gap-8 md:grid-cols-4">
        {CURIUZ_STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="text-center">
            <div className="font-display text-4xl font-bold text-curi-400 sm:text-5xl">{s.value}</div>
            <div className="mt-2 text-sm text-white/60">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ─────────────────────────── TESTIMONIALS ─────────────────────────── */
function Testimonials() {
  return (
    <section id="resources" className="bg-mist py-24">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker text-curi">
            <Star className="h-3.5 w-3.5 fill-spark text-spark" /> Proof
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Trusted by leaders who think forward
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 60}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card">
                <Quote className="h-7 w-7 text-curi/25" />
                <blockquote className="mt-3 flex-1 text-lg leading-relaxed text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-curi-grad text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{t.name}</span>
                    <span className="block text-xs text-slatey">{t.org}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── DEMO CTA (funnels to premyz.com) ─────────────────── */
function DemoSection() {
  return (
    <section id="demo" className="relative overflow-hidden bg-ink-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-curi opacity-20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-spark opacity-15 blur-[120px]" />
      </div>
      <div className="wrap relative text-center">
        <Reveal className="mx-auto max-w-2xl">
          <span className="kicker justify-center text-curi-400">
            <Sparkles className="h-3.5 w-3.5" /> See it live
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Book a Premyz demo
          </h2>
          <p className="mt-4 text-lg text-white/70">
            A 30-minute walkthrough tailored to your portfolio — see how teams move from reactive firefighting to
            predictive, planned operations.
          </p>
          <ul className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80">
            {[
              'Tailored to your industry',
              'See the offline-first mobile app',
              'Talk to a specialist',
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 flex-none text-curi-400" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={PREMYZ_DEMO} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Demo on premyz.com <ArrowRight className="h-4 w-4" />
            </a>
            <a href={PREMYZ_SOLUTIONS} target="_blank" rel="noopener noreferrer" className="btn-onink">
              Explore the platform
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
