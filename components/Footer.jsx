'use client';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="grid-container py-16 lg:py-20">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent-lime rounded-lg flex items-center justify-center">
                <span className="text-bg-primary font-bold text-sm">ES</span>
              </div>
              <h3 className="text-text-primary font-semibold">Enviar Solutions</h3>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Bringing order to the logistics of your business through one unified platform.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4">Platform</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Security', 'Performance'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-muted text-sm hover:text-accent-lime transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              {['About us', 'Blog', 'Careers', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-muted text-sm hover:text-accent-lime transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4">Get in touch</h4>
            <ul className="space-y-2">
              <li className="text-text-muted text-sm">Email: info@enviar.co.ke</li>
              <li className="text-text-muted text-sm">Phone: +254 700 000000</li>
              <li className="text-text-muted text-sm">Kenya, East Africa</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">© 2024 Enviar Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-text-muted text-sm hover:text-accent-lime transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-text-muted text-sm hover:text-accent-lime transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
