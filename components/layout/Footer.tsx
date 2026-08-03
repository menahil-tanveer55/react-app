import Link from 'next/link'
import { siteConfig, footerNav } from '@/config/site'
import { Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white" aria-label="Site footer">
      {/* Main footer */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-display font-bold text-2xl hover:text-primary transition-colors">
              🚀 Rocket.io
            </Link>
            <p className="mt-4 text-slate-400 font-body leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={siteConfig.social.twitter}
                aria-label="Rocket.io on Twitter / X"
                className="text-slate-400 hover:text-primary transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Twitter size={20} aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                aria-label="Rocket.io on LinkedIn"
                className="text-slate-400 hover:text-primary transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.github}
                aria-label="Rocket.io on GitHub"
                className="text-slate-400 hover:text-primary transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <nav aria-label="Products links">
            <h3 className="font-display font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3" role="list">
              {footerNav.products.map((link) => (
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

          <nav aria-label="Services links">
            <h3 className="font-display font-semibold text-white mb-4">Services</h3>
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

          <nav aria-label="Company links">
            <h3 className="font-display font-semibold text-white mb-4">Company</h3>
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
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-dark">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 font-body text-sm">
            &copy; {year} Rocket.io. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex items-center gap-6">
            {footerNav.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-primary font-body text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
