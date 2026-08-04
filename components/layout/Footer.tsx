import Link from 'next/link'
import { siteConfig, footerNav } from '@/config/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer data-testid="site-footer" className="bg-navy text-white" aria-label="Site footer">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block font-display font-bold text-xl text-white hover:text-primary transition-colors mb-3"
            >
              Rocket.io
            </Link>
            <p className="text-slate-400 font-body text-sm leading-relaxed max-w-xs mb-4">
              {siteConfig.description}
            </p>
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-body text-sm text-slate-400 hover:text-primary transition-colors"
              >
                {siteConfig.email}
              </a>
            )}
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

          {/* Legal + social */}
          <nav aria-label="Legal and social links">
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
              {siteConfig.social.linkedin && (
                <li>
                  <a
                    href={siteConfig.social.linkedin}
                    className="text-slate-400 hover:text-primary font-body text-sm transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              {siteConfig.social.github && (
                <li>
                  <a
                    href={siteConfig.social.github}
                    className="text-slate-400 hover:text-primary font-body text-sm transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-slate-500 font-body text-sm">
            &copy; {year} Rocket.io. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
