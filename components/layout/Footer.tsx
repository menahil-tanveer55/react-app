import Link from 'next/link'
import { siteConfig, footerNav } from '@/config/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white" aria-label="Site footer">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-display font-bold text-xl hover:text-primary transition-colors">
              Rocket.io
            </Link>
            <p className="mt-4 text-slate-400 font-body text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services links">
            <h3 className="font-display font-semibold text-white text-sm mb-4">Services</h3>
            <ul className="space-y-3" role="list">
              {footerNav.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary font-body text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company links">
            <h3 className="font-display font-semibold text-white text-sm mb-4">Company</h3>
            <ul className="space-y-3" role="list">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary font-body text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal links">
            <h3 className="font-display font-semibold text-white text-sm mb-4">Legal</h3>
            <ul className="space-y-3" role="list">
              {footerNav.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary font-body text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-border-dark">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-slate-500 font-body text-sm text-center sm:text-left">
            &copy; {year} Rocket.io. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
