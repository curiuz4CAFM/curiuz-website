import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, ChevronRight, Package, Target, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CURIUZ_PILLARS, CURIUZ_PROCESS, serviceUrl } from '@/lib/site-data'

export function generateStaticParams() {
  return CURIUZ_PILLARS.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = CURIUZ_PILLARS.find((p) => p.slug === slug)
  if (!s) return {}
  return {
    title: `${s.name} — Services`,
    description: s.detail.tagline,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = CURIUZ_PILLARS.find((p) => p.slug === slug)
  if (!s) notFound()

  const Icon = s.icon
  const related = CURIUZ_PILLARS.filter((p) => p.slug !== s.slug)

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
          {/* breadcrumb */}
          <Reveal>
            <nav className="flex items-center gap-1.5 text-sm text-white/50">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/services" className="hover:text-white">Services</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/80">{s.short}</span>
            </nav>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <Reveal delay={60}>
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-curi-grad text-white shadow-glowc">
                  <Icon className="h-8 w-8" />
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
                  {s.name}
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">{s.detail.tagline}</p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">
                    Book a consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="#included" className="btn-onink">What&apos;s included</a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-[28px] bg-curi-grad opacity-20 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-card">
                  <Image src={s.image} alt={s.name} width={640} height={480} className="h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink/60 via-transparent to-curi/25" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <span className="kicker text-curi"><span className="h-1.5 w-1.5 rounded-full bg-curi" /> Overview</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink">Why it matters</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-slatey">
              {s.detail.overview.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
          </Reveal>

          {/* At-a-glance capabilities */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-line bg-mist p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slatey">At a glance</h3>
              <ul className="mt-4 space-y-3">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm font-medium text-ink">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-curi" /> {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section id="included" className="bg-mist py-24">
        <div className="wrap">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="kicker justify-center text-curi"><span className="h-1.5 w-1.5 rounded-full bg-curi" /> What&apos;s included</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              How we deliver this service
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {s.detail.included.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="flex h-full gap-4 rounded-2xl border border-line bg-white p-6 shadow-card">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-curi-grad text-sm font-bold text-white">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slatey">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES + OUTCOMES */}
      <section className="bg-white py-24">
        <div className="wrap grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-white p-8 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-curi-50 text-curi">
                <Package className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">Key deliverables</h3>
              <ul className="mt-5 space-y-3">
                {s.detail.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-ink">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-curi" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-950 p-8 text-white shadow-card">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-curi-grad opacity-25 blur-3xl" />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-curi-400">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 font-display text-xl font-bold">Outcomes you can expect</h3>
              <ul className="relative mt-5 space-y-3">
                {s.detail.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-sm text-white/85">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-curi-400" /> {o}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* METHOD STRIP */}
      <section className="border-y border-line bg-mist py-14">
        <div className="wrap">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-slatey">
            Delivered through our method
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
            {CURIUZ_PROCESS.map((step, i) => (
              <div key={step.key} className="flex items-center gap-3">
                <span className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink">
                  <step.icon className="h-4 w-4 text-curi" /> {step.title}
                </span>
                {i < CURIUZ_PROCESS.length - 1 && <ChevronRight className="h-4 w-4 text-slatey/40" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-white py-24">
        <div className="wrap">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">Related services</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((r, i) => {
              const RIcon = r.icon
              return (
                <Reveal key={r.slug} delay={i * 60}>
                  <Link href={serviceUrl(r.slug)} className="card group flex h-full flex-col">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-curi-50 text-curi transition-colors group-hover:bg-curi-grad group-hover:text-white">
                      <RIcon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-ink">{r.short}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slatey">{r.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-curi">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink-950 py-24 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-curi opacity-20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-curi-400 opacity-15 blur-[120px]" />
        </div>
        <div className="wrap relative text-center">
          <Reveal className="mx-auto max-w-2xl">
            <span className="kicker justify-center text-curi-400"><Sparkles className="h-3.5 w-3.5" /> Let&apos;s talk</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to turn complexity into clarity?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              A short conversation is the fastest way to see how {s.short} could work for your organization.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Book a consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-onink">See all services</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
