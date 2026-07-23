import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Check, Sparkles, TrendingUp, ShieldCheck, Zap,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import {
  PREMYZ_SUITES, PREMYZ_INDUSTRIES, PREMYZ_FEATURES,
  premyzSuiteUrl, PREMYZ_SOLUTIONS, PREMYZ_DEMO,
} from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Premyz — AI-powered CAFM & facilities platform',
  description:
    'Premyz by Curiuz is the AI-powered operating system for modern facilities — 10 solution suites, 25+ modules covering maintenance, assets, HSE, sustainability and more. Book a demo.',
}

export default function PremyzPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy pt-28 text-white md:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-brand opacity-30 blur-[120px]" />
          <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-cyan opacity-20 blur-[120px]" />
        </div>
        <div className="wrap relative pb-20">
          <Reveal>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold">premyz</span>
              <span className="rounded-full border border-cyan/40 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-cyan">
                by Curiuz
              </span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              The AI-powered operating system for{' '}
              <span className="bg-premyz-grad bg-clip-text text-transparent">modern facilities</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Unify assets, maintenance, spaces, people and performance across your entire portfolio. Move from
              reactive to predictive — with real-time visibility from the command centre to the field.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={PREMYZ_DEMO} target="_blank" rel="noopener noreferrer" className="btn bg-premyz-grad text-white shadow-glowp hover:-translate-y-0.5">
                Book a Demo <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="#suites" className="btn-onink">See the 10 suites</Link>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
              {[
                { icon: TrendingUp, k: '10', v: 'solution suites' },
                { icon: Zap, k: '25+', v: 'modules' },
                { icon: ShieldCheck, k: '8', v: 'industries' },
              ].map(({ icon: Icon, k, v }) => (
                <div key={v} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <Icon className="h-5 w-5 text-cyan" />
                  <div className="mt-2 font-display text-2xl font-bold">{k}</div>
                  <div className="text-xs text-white/60">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section className="bg-white py-24">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="kicker text-brand"><span className="h-1.5 w-1.5 rounded-full bg-premyz-grad" /> Why Premyz</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Facilities data lives in silos. Premyz makes it one system.
            </h2>
            <p className="mt-4 text-lg text-slatey">
              Spreadsheets, disconnected tools and reactive maintenance cost you uptime and margin. Premyz centralises
              every workflow — so teams act on one source of truth, and AI flags problems before they escalate.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'One platform across assets, maintenance, HSE, procurement and more',
                'Predictive alerts instead of emergency call-outs',
                'Field-ready mobile app that works offline',
                'Open API into your ERP and BI stack',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-ink">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-brand" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl border border-line bg-mist p-6 shadow-card">
              <div className="grid grid-cols-2 gap-3">
                {PREMYZ_SUITES.slice(0, 6).map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.name} className="rounded-xl border border-line bg-white p-4">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="mt-2 text-xs font-semibold text-ink">{s.name}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE 10 SUITES */}
      <section id="suites" className="bg-mist py-24">
        <div className="wrap">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="kicker text-brand"><span className="h-1.5 w-1.5 rounded-full bg-premyz-grad" /> The platform</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              10 solution suites. 25+ modules. One platform.
            </h2>
            <p className="mt-4 text-lg text-slatey">Turn on what you need today, expand when you're ready.</p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PREMYZ_SUITES.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.name} delay={i * 40}>
                  <a
                    href={premyzSuiteUrl(s.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group flex h-full flex-col"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-brand-50 text-brand transition-colors group-hover:bg-premyz-grad group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-base font-bold text-ink">{s.name}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slatey">{s.blurb}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {s.modules.map((m) => (
                        <span key={m} className="rounded-md bg-mist px-2 py-1 text-[11px] font-medium text-ink">{m}</span>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      View on premyz.com <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="bg-white py-24">
        <div className="wrap">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="kicker text-brand"><span className="h-1.5 w-1.5 rounded-full bg-premyz-grad" /> Built for the field</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Capabilities that set Premyz apart
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PREMYZ_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 50}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-card">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-premyz-grad text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-ink">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slatey">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-mist py-20">
        <div className="wrap text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              One platform, tuned to your sector
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {PREMYZ_INDUSTRIES.map((ind) => (
                <span key={ind} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm">
                  {ind}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEMO CTA */}
      <section id="demo" className="relative overflow-hidden bg-navy py-24 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-brand opacity-25 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cyan opacity-20 blur-[120px]" />
        </div>
        <div className="wrap relative text-center">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              See Premyz on your portfolio
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Book a 30-minute walkthrough on premyz.com. We'll tailor it to your industry and the modules that
              matter to you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={PREMYZ_DEMO} target="_blank" rel="noopener noreferrer" className="btn bg-premyz-grad text-white shadow-glowp hover:-translate-y-0.5">
                Book a Demo on premyz.com <ArrowRight className="h-4 w-4" />
              </a>
              <a href={PREMYZ_SOLUTIONS} target="_blank" rel="noopener noreferrer" className="btn-onink">
                Explore all 10 suites
              </a>
            </div>
            <p className="mt-6 text-sm text-white/50">
              Backed by Curiuz — 26+ years of transformation expertise.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
