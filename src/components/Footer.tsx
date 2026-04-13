export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-violet-900 text-white text-xl" id="footer">
      <section className="max-w-6xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <address>
          <h2>Rocket.IO GmbH</h2>
          Hauptstraße 1,<br />
          12345, Berlin.<br />
          Germany Email:{' '}
          <a href="mailto:info@rocketio.com" className="hover:opacity-90">
            Info@rocketio.com
          </a>
          <br />
          Phone:{' '}
          <a href="tel:+49123456789" className="hover:opacity-90">
            +49 123 456 789
          </a>
        </address>
        <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
          <a href="#rockets" className="hover:opacity-90">Our Apps</a>
          <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
          <a href="#contact" className="hover:opacity-90">Contact Us</a>
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">Copyright &copy; {year}</p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  )
}
