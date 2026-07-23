'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import {
  PREMYZ_SUITES, premyzSuiteUrl, PREMYZ_DEMO, CURIUZ_PILLARS, serviceUrl,
  ABOUT_LINKS, aboutUrl,
} from '@/lib/site-data'

type MenuName = 'about' | 'products' | 'services' | null

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState<MenuName>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Hover-intent: open immediately, close after a short grace period so the
  // pointer can cross the gap between the trigger and the panel without it vanishing.
  const openMenu = (name: Exclude<MenuName, null>) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMenu(name)
  }
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setMenu(null), 160)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Solid = white bar with dark text (scrolled or a menu open); otherwise transparent
  // over the dark hero, so nav text must be white.
  const solid = scrolled || menu !== null

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'border-b border-line bg-white/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="wrap flex h-[72px] items-center justify-between md:h-20">
        {/* Logo — navy version on light bar, reversed version over the dark hero */}
        <Link href="/" className="flex items-center" aria-label="Curiuz Technologies — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={solid ? '/logo/curiuz-primary.svg' : '/logo/curiuz-reversed.svg'}
            alt="Curiuz Technologies"
            className="h-12 w-auto md:h-16"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {/* About — homepage section + mega-menu of sub-pages */}
          <MenuTrigger
            label="About"
            href="/#about"
            active={menu === 'about'}
            solid={solid}
            onOpen={() => openMenu('about')}
            onClose={closeSoon}
            onClick={() => setMenu(null)}
          />

          {/* Products — links to the internal teaser; hover opens the mega-menu */}
          <MenuTrigger
            label="Products"
            href="/products/premyz"
            active={menu === 'products'}
            solid={solid}
            onOpen={() => openMenu('products')}
            onClose={closeSoon}
            onClick={() => setMenu(null)}
          />

          {/* Services — links to the services index; hover opens the services mega-menu */}
          <MenuTrigger
            label="Services"
            href="/services"
            active={menu === 'services'}
            solid={solid}
            onOpen={() => openMenu('services')}
            onClose={closeSoon}
            onClick={() => setMenu(null)}
          />

          <NavItem href="/#resources" solid={solid}>Resources</NavItem>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="btn-primary">
            Contact us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`grid h-10 w-10 place-items-center rounded-lg border md:hidden ${
            solid ? 'border-line text-ink' : 'border-white/25 text-white'
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ── About mega-menu ── */}
      {menu === 'about' && (
        <MegaWrap onOpen={() => openMenu('about')} onClose={closeSoon}>
          <div className="grid grid-cols-[1.1fr_2.4fr]">
            {/* Left: intro */}
            <div className="relative flex flex-col justify-between overflow-hidden bg-ink-950 p-7 text-white">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-curi-grad opacity-30 blur-3xl" />
              <div className="relative">
                <span className="font-display text-lg font-bold">Think Forward</span>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Powered by curiosity. Enabled by AI. The philosophy, values and people behind Curiuz.
                </p>
              </div>
              <Link
                href="/#about"
                onClick={() => setMenu(null)}
                className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-curi-400 hover:gap-3"
              >
                About Curiuz <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right: about sub-pages */}
            <div className="grid grid-cols-1 gap-1 p-4 sm:grid-cols-3">
              {ABOUT_LINKS.map((l) => {
                const Icon = l.icon
                return (
                  <Link
                    key={l.slug}
                    href={aboutUrl(l.slug)}
                    onClick={() => setMenu(null)}
                    className="group flex flex-col gap-2 rounded-xl p-3 transition-colors hover:bg-mist"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-curi-50 text-curi transition-colors group-hover:bg-curi-grad group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="block text-sm font-semibold text-ink">{l.label}</span>
                    <span className="block text-xs leading-snug text-slatey">{l.desc}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </MegaWrap>
      )}

      {/* ── Products mega-menu ── */}
      {menu === 'products' && (
        <MegaWrap onOpen={() => openMenu('products')} onClose={closeSoon}>
          <div className="grid grid-cols-[1.1fr_2.4fr]">
            {/* Left: product intro */}
            <div className="relative flex flex-col justify-between overflow-hidden bg-navy p-7 text-white">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-premyz-grad opacity-30 blur-3xl" />
              <div className="relative">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-display text-lg font-bold">premyz</span>
                  <span className="rounded-full border border-cyan/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan">
                    by Curiuz
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  The AI-powered operating system for modern facilities. 10 solution suites, 25+ modules —
                  from reactive to predictive.
                </p>
              </div>
              <Link
                href="/products/premyz"
                onClick={() => setMenu(null)}
                className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:gap-3"
              >
                Explore Premyz <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right: the 10 suites */}
            <div className="grid grid-cols-2 gap-1 p-4 lg:grid-cols-3">
              {PREMYZ_SUITES.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.name}
                    href={premyzSuiteUrl(s.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenu(null)}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-mist"
                  >
                    <span className="mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-lg bg-brand-50 text-brand transition-colors group-hover:bg-premyz-grad group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{s.name}</span>
                      <span className="mt-0.5 block text-xs leading-snug text-slatey">{s.blurb}</span>
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-line bg-mist px-6 py-3 text-sm">
            <span className="text-slatey">Trusted across 8 industries — Real Estate to Government.</span>
            <a href={PREMYZ_DEMO} target="_blank" rel="noopener noreferrer" className="font-semibold text-curi hover:underline">
              Book a live demo →
            </a>
          </div>
        </MegaWrap>
      )}

      {/* ── Services mega-menu ── */}
      {menu === 'services' && (
        <MegaWrap onOpen={() => openMenu('services')} onClose={closeSoon}>
          <div className="grid grid-cols-[1.1fr_2.4fr]">
            {/* Left: consulting intro */}
            <div className="relative flex flex-col justify-between overflow-hidden bg-ink-950 p-7 text-white">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-curi-grad opacity-30 blur-3xl" />
              <div className="relative">
                <span className="font-display text-lg font-bold">Consulting services</span>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  From process discovery to post-implementation optimization — four connected capabilities across
                  the full transformation lifecycle.
                </p>
              </div>
              <Link
                href="/#how-we-work"
                onClick={() => setMenu(null)}
                className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:gap-3"
              >
                How we work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right: the 4 services */}
            <div className="grid grid-cols-2 gap-1 p-4">
              {CURIUZ_PILLARS.map((s) => {
                const Icon = s.icon
                return (
                  <Link
                    key={s.slug}
                    href={serviceUrl(s.slug)}
                    onClick={() => setMenu(null)}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-mist"
                  >
                    <span className="mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-lg bg-curi-50 text-curi transition-colors group-hover:bg-curi-grad group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{s.short}</span>
                      <span className="mt-0.5 block text-xs leading-snug text-slatey">{s.summary}</span>
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-line bg-mist px-6 py-3 text-sm">
            <span className="text-slatey">ERP-agnostic. Senior-led. Outcome-driven.</span>
            <Link href="/contact" onClick={() => setMenu(null)} className="font-semibold text-curi hover:underline">
              Talk to an advisor →
            </Link>
          </div>
        </MegaWrap>
      )}

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-line bg-white md:hidden">
          <nav className="wrap flex flex-col py-4">
            <MobileLink href="/#about" onClick={() => setMobileOpen(false)}>About</MobileLink>
            {ABOUT_LINKS.map((l) => (
              <MobileSub key={l.slug} href={aboutUrl(l.slug)} onClick={() => setMobileOpen(false)}>
                {l.label}
              </MobileSub>
            ))}
            <MobileLink href="/products/premyz" onClick={() => setMobileOpen(false)}>Products — Premyz</MobileLink>

            <MobileLink href="/services" onClick={() => setMobileOpen(false)}>Services</MobileLink>
            {CURIUZ_PILLARS.map((s) => (
              <MobileSub key={s.slug} href={serviceUrl(s.slug)} onClick={() => setMobileOpen(false)}>
                {s.short}
              </MobileSub>
            ))}

            <MobileLink href="/#resources" onClick={() => setMobileOpen(false)}>Resources</MobileLink>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-3">
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

/* Full-width dropdown shell with an invisible hover bridge (pt-2). */
function MegaWrap({
  children, onOpen, onClose,
}: { children: React.ReactNode; onOpen: () => void; onClose: () => void }) {
  return (
    <div className="absolute inset-x-0 top-full hidden md:block" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <div className="wrap pt-2 pb-6">
        <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card-hover">{children}</div>
      </div>
    </div>
  )
}

function MenuTrigger({
  label, href, active, solid, onOpen, onClose, onClick,
}: {
  label: string
  href: string
  active: boolean
  solid: boolean
  onOpen: () => void
  onClose: () => void
  onClick: () => void
}) {
  return (
    <div onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Link
        href={href}
        className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          active ? 'text-curi' : solid ? 'text-ink/80 hover:text-curi' : 'text-white/90 hover:text-white'
        }`}
        aria-expanded={active}
        aria-haspopup="true"
        onClick={onClick}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${active ? 'rotate-180' : ''}`} />
      </Link>
    </div>
  )
}

function NavItem({ href, solid, children }: { href: string; solid: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        solid ? 'text-ink/80 hover:text-curi' : 'text-white/90 hover:text-white'
      }`}
    >
      {children}
    </Link>
  )
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="border-b border-line py-3 text-base font-medium text-ink">
      {children}
    </Link>
  )
}

function MobileSub({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="border-b border-line py-2.5 pl-3 text-sm font-medium text-ink/80">
      {children}
    </Link>
  )
}
