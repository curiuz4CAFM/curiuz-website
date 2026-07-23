import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight, Quote, Linkedin, Mail } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { FOUNDER, ABOUT_LINKS, aboutUrl } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Founder — Manish Jha, Founder & CEO',
  description:
    'Manish Jha, Founder & CEO of Curiuz Technologies — 25+ years in digital transformation, enterprise technology and AI-driven innovation across EY, Avery Dennison, Imdaad and HITEK.AI.',
}

export default function FounderPage() {
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
              <span className="text-white/80">Founder</span>
            </nav>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
            <Reveal delay={80}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-[32px] bg-curi-grad opacity-30 blur-2xl" />
                <div className="relative h-44 w-44 overflow-hidden rounded-[32px] border border-white/10 shadow-glowc">
                  <Image
                    src="/img/manish-jha.webp"
                    alt="Manish Jha, Founder & CEO of Curiuz Technologies"
                    width={480}
                    height={480}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-curi-400">{FOUNDER.role}</p>
                <h1 className="mt-2 font-display text-5xl font-bold tracking-tight sm:text-6xl">{FOUNDER.name}</h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">{FOUNDER.lead}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="mailto:hello@curiuz.com" className="btn-onink"><Mail className="h-4 w-4" /> Contact</a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-onink">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BIO + QUOTE */}
      <section className="bg-white py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <Reveal>
            <span className="kicker text-curi"><span className="h-1.5 w-1.5 rounded-full bg-curi" /> Background</span>
            <div className="mt-5 space-y-5 text-lg leading-relaxed text-slatey">
              {FOUNDER.bio.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </div>
            <div className="mt-8">
              <p className="text-sm font-semibold text-ink">Areas of expertise</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {FOUNDER.expertise.map((e) => (
                  <span key={e} className="rounded-full border border-line bg-mist px-3.5 py-1.5 text-xs font-medium text-ink">{e}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <figure className="rounded-3xl border border-line bg-mist p-8 shadow-card">
              <Quote className="h-9 w-9 text-curi/30" />
              <blockquote className="mt-4 font-display text-xl font-bold leading-snug text-ink">
                “{FOUNDER.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                <Image src="/img/manish-jha.webp" alt="Manish Jha" width={80} height={80} className="h-10 w-10 rounded-full object-cover" />
                <span>
                  <span className="block text-sm font-semibold text-ink">{FOUNDER.name}</span>
                  <span className="block text-xs text-slatey">{FOUNDER.role}, Curiuz Technologies</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* CTA + CROSS-LINKS */}
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-curi opacity-20 blur-[120px]" />
        <div className="wrap relative text-center">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Let’s think forward, together</h2>
            <p className="mt-4 text-lg text-white/70">Start a conversation with the team behind Curiuz.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {ABOUT_LINKS.filter((l) => l.slug !== 'founder').map((l) => (
                <Link key={l.slug} href={aboutUrl(l.slug)} className="btn-onink">{l.label}</Link>
              ))}
              <Link href="/contact" className="btn-primary">Contact us <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
