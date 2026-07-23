'use client'

import { useState, type FormEvent } from 'react'
import { Send, Loader2, CheckCircle2 } from 'lucide-react'
import { CONTACT, CURIUZ_PILLARS } from '@/lib/site-data'

// Submissions go to Web3Forms — a free, backend-less form service that emails
// them to you. Works on any static host. The access key is public by design
// (safe in client code); set it via NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY. Get a key
// at https://web3forms.com (enter the inbox that should receive submissions).
const ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ''

type Status = 'idle' | 'submitting' | 'success' | 'error'

const FIELD =
  'w-full rounded-xl border border-line bg-mist px-4 py-3 text-sm text-ink placeholder:text-slatey/60 outline-none transition-colors focus:border-curi focus:bg-white focus:ring-2 focus:ring-curi/15'
const LABEL = 'mb-2 block text-xs font-semibold text-ink'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot: if a bot filled the hidden field, pretend success and stop.
    if (String(data.get('company_website') ?? '')) {
      form.reset()
      setStatus('success')
      return
    }

    if (!ACCESS_KEY) {
      setStatus('error')
      setError(`Form isn't configured yet — please email us at ${CONTACT.email}.`)
      return
    }

    const name = String(data.get('name') ?? '')
    const payload = {
      access_key: ACCESS_KEY,
      subject: `New enquiry — ${name || 'Curiuz website'}`,
      from_name: 'Curiuz Website',
      name,
      company: String(data.get('company') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      interest: String(data.get('interest') ?? ''),
      message: String(data.get('message') ?? ''),
    }

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || !json.success) {
        throw new Error(json.message || 'Could not send your message.')
      }
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
      setError(`Could not send right now — please email us at ${CONTACT.email}.`)
    }
  }

  if (status === 'success') {
    return (
      <div className="card flex flex-col items-center justify-center p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-curi-50 text-curi">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-display text-xl font-bold text-ink">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-slatey">
          Thanks for reaching out — a senior consultant will be in touch within one business day.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-6">
          Send another
        </button>
      </div>
    )
  }

  const submitting = status === 'submitting'

  return (
    <form onSubmit={handleSubmit} className="card p-7 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL}>Full name <span className="text-curi">*</span></label>
          <input id="name" name="name" required placeholder="Jordan Avery" className={FIELD} />
        </div>
        <div>
          <label htmlFor="company" className={LABEL}>Company</label>
          <input id="company" name="company" placeholder="Acme Group" className={FIELD} />
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={LABEL}>Work email <span className="text-curi">*</span></label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" className={FIELD} />
        </div>
        <div>
          <label htmlFor="phone" className={LABEL}>Phone</label>
          <input id="phone" name="phone" placeholder="+971 …" className={FIELD} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="interest" className={LABEL}>How can we help?</label>
        <select id="interest" name="interest" defaultValue="" className={FIELD}>
          <option value="" disabled>Select an area…</option>
          {CURIUZ_PILLARS.map((p) => (
            <option key={p.slug} value={p.short}>{p.short}</option>
          ))}
          <option value="Premyz (product)">Premyz (product)</option>
          <option value="General enquiry">General enquiry</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={LABEL}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your organization, the challenge you're facing, and what a good outcome looks like."
          className={`${FIELD} resize-none`}
        />
      </div>

      {/* Honeypot — hidden from humans, catches bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" disabled={submitting} className="btn-primary mt-6 w-full disabled:opacity-70">
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send message
          </>
        )}
      </button>

      {status === 'error' && <p className="mt-4 text-center text-sm font-medium text-red-600">{error}</p>}
      <p className="mt-3 text-center text-xs text-slatey">
        We&apos;ll never share your details. Response within one business day.
      </p>
    </form>
  )
}
