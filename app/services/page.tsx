import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, ChevronRight, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { HowWeWork, WhyCuriuz } from '@/components/consulting'
import { CURIUZ_PILLARS, serviceUrl } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Services — Business & technology consulting',
  description:
    'Curiuz Technologies services across the full transformation lifecycle: business process optimization, operational efficiency, ERP advisory & implementation, and post-implementation review.',
}

export default function ServicesIndex() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-950 pt-28 text-white md:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-curi opacity-20 blur-[120px]" />
          <div className="absolute right-0 top-16 h-96 w-96 rounded-full bg-curi-400 opacity-15 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.12] bg-cover bg-center"
            style={{ backgroundImage: 'url(/img/tech-nodes.svg)' }}
          />
        </div>

        <div className="wrap relative pb-20">
          <Reveal>
            <nav className="flex items-center gap-1.5 text-sm text-white/50">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/80">Services</span>
            </nav>
          </Reveal>
          <Reveal delay={60}>
            <span className="kicker mt-6 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-curi-400">
              <Sparkles className="h-3.5 w-3.5" /> Business &amp; technology consulting
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
              From complexity to clarity —{' '}
              <span className="bg-curi-grad bg-clip-text text-transparent">across the full transformation lifecycle</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              We help organizations define, optimize and operationalize their business processes — and get real value
              from the systems that run them. Four connected services, one senior-led team, from process discovery to
              post-implementation optimization.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="btn-primary">
                Explore services <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/contact" className="btn-onink">
                Book a consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="bg-white py-24">
        <div className="wrap">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="kicker justify-center text-curi"><span className="h-1.5 w-1.5 rounded-full bg-curi" /> What we do</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Four services that build on each other
            </h2>
            <p className="mt-4 text-lg text-slatey">
              Engage one where it hurts most, or run them end-to-end as a single transformation.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {CURIUZ_PILLARS.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.slug} delay={i * 60}>
                  <Link
                    href={serviceUrl(s.slug)}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-curi/30 hover:shadow-card-hover"
                  >
                    {/* image banner */}
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.name}
                        width={720}
                        height={360}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                      <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-curi-grad text-white shadow-glowc">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-wider text-white/70">
                        Service 0{i + 1}
                      </span>
                    </div>

                    {/* body */}
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="text-lg font-bold leading-snug text-ink">{s.name}</h3>
                      <p className="mt-2 text-sm text-slatey">{s.detail.tagline}</p>
                      <ul className="mt-5 grid gap-2 border-t border-line pt-5">
                        {s.points.slice(0, 3).map((pt) => (
                          <li key={pt} className="flex items-start gap-2.5 text-sm text-ink">
                            <Check className="mt-0.5 h-4 w-4 flex-none text-curi" /> {pt}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-curi">
                        Explore this service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* METHOD + WHY (reused sections) */}
      <HowWeWork />
      <WhyCuriuz />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-curi opacity-20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-curi-400 opacity-15 blur-[120px]" />
        </div>
        <div className="wrap relative text-center">
          <Reveal className="mx-auto max-w-2xl">
            <span className="kicker justify-center text-curi-400"><Sparkles className="h-3.5 w-3.5" /> Let&apos;s talk</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Not sure where to start?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Tell us where it hurts. A short conversation is the fastest way to find the right starting point.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Book a consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/#about" className="btn-onink">About Curiuz</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
