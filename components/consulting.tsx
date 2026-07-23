import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight, Quote, Sparkles, Eye, Compass, Gem } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import {
  CURIUZ_PILLARS, CURIUZ_PROCESS, CURIUZ_WHY, CURIUZ_SEGMENTS, CURIUZ_INDUSTRIES, serviceUrl,
  ABOUT_LINKS, aboutUrl,
} from '@/lib/site-data'

/* ─────────────────── WHY NOW — MARKET INSIGHT + FORWARD THINKING ─────────────────── */
export function MarketInsight() {
  return (
    <section id="why-now" className="relative overflow-hidden bg-mist py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-cover bg-center"
        style={{ backgroundImage: 'url(/img/tech-circuit.svg)' }}
      />
      <div className="wrap relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center text-curi">
            <span className="h-1.5 w-1.5 rounded-full bg-curi" /> Why now · Think Forward
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            The questions most organizations aren&apos;t asking — yet
          </h2>
          <p className="mt-4 text-lg text-slatey">
            The signals are everywhere. Reactive operators see cost and compliance; forward-thinking ones see
            opportunity. Curiosity is how we spot it early — thinking forward is how we act before it becomes urgent.
          </p>
        </Reveal>

        {/* Forward-thinking philosophy band */}
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-3xl bg-ink px-7 py-10 text-white md:px-12 md:py-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-curi-grad opacity-25 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="kicker text-curi-400">
                  <Sparkles className="h-3.5 w-3.5" /> Our philosophy
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl">
                  Curiosity finds the question. <span className="bg-curi-grad bg-clip-text text-transparent">Thinking forward turns it into advantage.</span>
                </h3>
                <p className="mt-4 max-w-xl text-white/70">
                  Reactive operators wait for problems — a failed asset, a missed ESG target, an ERP that never
                  delivered. We help you see them coming and act first. Powered by curiosity. Enabled by AI. Delivered
                  by thinking forward.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/#how-we-work" className="btn-primary">
                    How we think forward <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/services" className="btn-onink">Explore our services</Link>
                </div>
              </div>

              {/* Curiosity → Forward Thinking → Clarity → Value flow */}
              <ul className="grid gap-3">
                {[
                  { icon: Eye, title: 'Curiosity', desc: 'We challenge assumptions and ask what others overlook.' },
                  { icon: Compass, title: 'Forward thinking', desc: 'We anticipate what’s next instead of reacting to it.' },
                  { icon: Gem, title: 'Clarity → value', desc: 'We turn insight into measurable, operational advantage.' },
                ].map((step, i) => {
                  const Icon = step.icon
                  return (
                    <li key={step.title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-curi-grad text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-bold">
                          <span className="mr-2 text-curi-400">0{i + 1}</span>{step.title}
                        </p>
                        <p className="mt-0.5 text-sm text-white/60">{step.desc}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────────────────── ABOUT / INTRO BAND ───────────────────────── */
export function AboutBand() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="kicker text-curi">
            <span className="h-1.5 w-1.5 rounded-full bg-curi" /> Business &amp; technology consulting
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Curiosity that drives clarity.{' '}
            <span className="bg-curi-grad bg-clip-text text-transparent">Execution that delivers value.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slatey">
            Curiuz Technologies helps organizations define, optimize and operationalize their business processes to
            achieve measurable performance improvements. We partner with leadership teams to turn complexity into
            clarity and strategy into execution.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slatey">
            We believe the best transformations begin with curiosity — asking the right questions before designing
            solutions. It’s a philosophy we call <strong className="font-semibold text-ink">Think Forward</strong>.
          </p>
          <p className="mt-5 font-display text-xl font-bold leading-snug text-ink">
            Curiosity drives transformation. <span className="bg-curi-grad bg-clip-text text-transparent">Thinking forward delivers it.</span>
          </p>

          {/* About sub-pages */}
          <div className="mt-6 grid gap-2 sm:grid-cols-3">
            {ABOUT_LINKS.map((l) => {
              const Icon = l.icon
              return (
                <Link
                  key={l.slug}
                  href={aboutUrl(l.slug)}
                  className="group flex items-center gap-2.5 rounded-xl border border-line bg-white px-3.5 py-3 transition-colors hover:border-curi/40 hover:bg-mist"
                >
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-lg bg-curi-50 text-curi transition-colors group-hover:bg-curi-grad group-hover:text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-ink">{l.label}</span>
                </Link>
              )
            })}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#what-we-do" className="btn-primary">
              What we do <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#how-we-work" className="btn-ghost">How we work</a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[28px] bg-curi-grad opacity-15 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-line shadow-card">
              <Image
                src="/img/team-tablet.webp"
                alt="Consultants reviewing process and performance data with a client team"
                width={720}
                height={540}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink/45 via-transparent to-curi/20" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {['Process-first', 'ERP-agnostic', 'Senior-led'].map((t) => (
                  <span key={t} className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────────────────── WHAT WE DO (4 pillars) ───────────────────────── */
export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-mist py-24">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center text-curi">
            <span className="h-1.5 w-1.5 rounded-full bg-curi" /> What we do
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Support across the full transformation lifecycle
          </h2>
          <p className="mt-4 text-lg text-slatey">
            From process discovery to post-implementation optimization — four connected capabilities.
          </p>
          <div className="mt-7 flex justify-center">
            <Link href="/services" className="btn-primary">
              Explore our services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {CURIUZ_PILLARS.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.id} delay={i * 60}>
                <Link
                  href={serviceUrl(p.slug)}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-curi/30 hover:shadow-card-hover"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-curi-grad text-white shadow-glowc">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-curi">0{i + 1}</span>
                      <h3 className="text-lg font-bold leading-snug text-ink">{p.name}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slatey">{p.summary}</p>
                  <ul className="mt-5 grid gap-2.5 border-t border-line pt-5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-ink">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-curi" /> {pt}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-curi">
                    Explore this service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── HOW WE WORK (vector flow) ───────────────────────── */
export function HowWeWork() {
  return (
    <section id="how-we-work" className="relative overflow-hidden bg-ink-950 py-24 text-white">
      {/* tech texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15] bg-cover bg-center"
        style={{ backgroundImage: 'url(/img/tech-nodes.svg)' }}
      />
      <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-curi opacity-20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-curi-400 opacity-15 blur-[120px]" />

      <div className="wrap relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center text-curi-400">
            <span className="h-1.5 w-1.5 rounded-full bg-curi-400" /> How we work
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Structured, practical, outcome-driven
          </h2>
          <p className="mt-4 text-lg text-white/70">
            A method that focuses not just on systems and processes, but on how work actually gets done.
          </p>
        </Reveal>

        {/* Connector line behind the nodes */}
        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-curi/0 via-curi-400/60 to-curi/0 md:block" />
          <ol className="grid gap-8 md:grid-cols-4">
            {CURIUZ_PROCESS.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.key} delay={i * 90}>
                  <li className="relative flex flex-col items-center text-center">
                    <span className="relative grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur">
                      <Icon className="h-6 w-6 text-curi-400" />
                      <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-curi-grad text-[11px] font-bold text-white">
                        {i + 1}
                      </span>
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{s.desc}</p>
                  </li>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── WHY CURIUZ ───────────────────────── */
export function WhyCuriuz() {
  return (
    <section className="bg-white py-24">
      <div className="wrap grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <span className="kicker text-curi">
            <span className="h-1.5 w-1.5 rounded-full bg-curi" /> Why Curiuz
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            The difference is in how we think — and how we deliver
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slatey">
            Lean, senior-led teams that challenge assumptions and stay accountable to measurable outcomes.
          </p>
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-line shadow-card">
            <Image
              src="/img/engineers-walking.webp"
              alt="Senior consultants walking through an operational site"
              width={640}
              height={420}
              className="h-56 w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {CURIUZ_WHY.map((w) => {
              const Icon = w.icon
              return (
                <li key={w.title} className="rounded-2xl border border-line bg-mist p-5 transition-colors hover:border-curi/40">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-curi-50 text-curi">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slatey">{w.desc}</p>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────────────────── WHO WE SERVE ───────────────────────── */
export function WhoWeServe() {
  return (
    <section className="bg-mist py-24">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center text-curi">
            <span className="h-1.5 w-1.5 rounded-full bg-curi" /> Who we serve
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Built for organizations serious about performance
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CURIUZ_SEGMENTS.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} delay={i * 70}>
                <div className="card h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-curi-grad text-white shadow-glowc">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slatey">{s.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12">
          <div className="rounded-2xl border border-line bg-white p-6">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-slatey">
              Across industries
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {CURIUZ_INDUSTRIES.map((ind) => (
                <span key={ind} className="rounded-full border border-line bg-mist px-4 py-2 text-sm font-medium text-ink">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────────────────── OUR PROMISE ───────────────────────── */
export function OurPromise() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: 'url(/img/control-room.webp)' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
      <div className="wrap relative">
        <Reveal className="max-w-3xl">
          <Quote className="h-10 w-10 text-curi-400/40" />
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            We help organizations simplify operations, improve performance, and extract real value from their
            systems — not just implement them.
          </h2>
          <p className="mt-5 text-lg text-white/60">Our promise at Curiuz Technologies.</p>
        </Reveal>
      </div>
    </section>
  )
}
