import Link from 'next/link'
import { MapPin } from 'lucide-react'
import {
  PREMYZ_SUITES, CURIUZ_PILLARS, premyzSuiteUrl, serviceUrl, PREMYZ_SOLUTIONS, PREMYZ_DEMO,
} from '@/lib/site-data'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-white">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center" aria-label="Curiuz Technologies — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/curiuz-reversed.svg" alt="Curiuz Technologies" className="h-14 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Powered by Curiosity. Enabled by AI. Business transformation advisory — and the makers of Premyz.
          </p>
          <p className="mt-4 flex items-start gap-2 text-sm text-white/50">
            <MapPin className="mt-0.5 h-4 w-4 flex-none" />
            New Crescent Street, Dubai
          </p>
        </div>

        <FooterCol title="Product — Premyz">
          {PREMYZ_SUITES.slice(0, 6).map((s) => (
            <FooterLink key={s.name} href={premyzSuiteUrl(s.slug)}>{s.name}</FooterLink>
          ))}
          <FooterLink href={PREMYZ_SOLUTIONS}>All 25+ modules →</FooterLink>
        </FooterCol>

        <FooterCol title="Services">
          {CURIUZ_PILLARS.map((s) => (
            <FooterLink key={s.slug} href={serviceUrl(s.slug)}>{s.short}</FooterLink>
          ))}
          <FooterLink href="/#how-we-work">How we work</FooterLink>
        </FooterCol>

        <FooterCol title="Company">
          <FooterLink href="/#about">About</FooterLink>
          <FooterLink href="/#resources">Blog</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href={PREMYZ_DEMO}>Book a demo</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Legal Notice</FooterLink>
        </FooterCol>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Curiuz Technologies. All rights reserved.</span>
          <span>Premyz™ is a product of Curiuz.</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">{title}</h4>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = /^(https?:|mailto:)/.test(href)
  const cls = 'text-sm text-white/60 transition-colors hover:text-curi-400'
  return (
    <li>
      {external ? (
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      ) : (
        <Link href={href} className={cls}>
          {children}
        </Link>
      )}
    </li>
  )
}
