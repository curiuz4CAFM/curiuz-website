import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, ChevronRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { CONTACT } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Talk to Curiuz Technologies about business process optimization, operational efficiency, ERP advisory, or the Premyz platform. A senior consultant responds within one business day.',
}

export default function ContactPage() {
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
        <div className="wrap relative pb-16">
          <Reveal>
            <nav className="flex items-center gap-1.5 text-sm text-white/50">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/80">Contact</span>
            </nav>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s turn complexity into{' '}
              <span className="bg-curi-grad bg-clip-text text-transparent">clarity.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Tell us where it hurts — a process that won&apos;t scale, an ERP decision ahead, or a system that
              isn&apos;t delivering. A senior consultant will get back to you within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="bg-white py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left: details */}
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink">Get in touch</h2>
            <p className="mt-3 text-slatey">
              Prefer to reach us directly? Use the details below, or send the form and we&apos;ll route your enquiry
              to the right consultant.
            </p>

            <ul className="mt-8 space-y-5">
              <ContactRow icon={Mail} label="Email">
                <a href={`mailto:${CONTACT.email}`} className="font-medium text-ink hover:text-curi">
                  {CONTACT.email}
                </a>
              </ContactRow>
              <ContactRow icon={Phone} label="Phone">
                <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} className="font-medium text-ink hover:text-curi">
                  {CONTACT.phone}
                </a>
              </ContactRow>
              <ContactRow icon={MapPin} label="Office">
                <span className="font-medium text-ink">{CONTACT.address}</span>
              </ContactRow>
              <ContactRow icon={Clock} label="Response time">
                <span className="font-medium text-ink">Within one business day</span>
              </ContactRow>
            </ul>

            <div className="mt-8 rounded-2xl border border-line bg-mist p-6">
              <p className="text-sm font-semibold text-ink">What happens next</p>
              <ul className="mt-3 space-y-2.5">
                {[
                  'We review your enquiry and route it to the right senior consultant',
                  'A short intro call to understand context and goals',
                  'A clear, no-obligation view of how we can help',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-slatey">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-curi" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}

function ContactRow({
  icon: Icon, label, children,
}: { icon: typeof Mail; label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-curi-50 text-curi">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-slatey">{label}</p>
        <div className="mt-0.5 text-sm">{children}</div>
      </div>
    </li>
  )
}
