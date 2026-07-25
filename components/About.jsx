'use client';

export default function About() {
  return (
    <section id="about" className="section-spacing bg-bg-secondary">
      <div className="grid-container">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-accent-lime rounded-full"></div>
            <span className="text-text-muted text-sm font-medium">About Enviar Solutions</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 text-balance">
              Logistics built around operational clarity
            </h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Enviar Solutions was founded to solve a simple problem: shipping operations are complex, but they don't have to be hidden from your team.
            </p>
            <p className="text-text-muted text-lg mb-12 leading-relaxed">
              We bring order coordination, carrier management, and billing into one platform so your operations teams, finance departments, and clients all see the same reality.
            </p>

            {/* Founder Info */}
            <div>
              <p className="text-text-muted text-sm mb-2">Founder &amp; CEO</p>
              <h3 className="text-text-primary font-bold text-2xl">Mark JK Chege</h3>
            </div>
          </div>

          {/* Right Placeholder */}
          <div className="hidden lg:block">
            <div className="w-full aspect-square bg-bg-elevated border border-border rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto bg-bg-primary rounded-full border border-border mb-4"></div>
                <p className="text-text-muted text-sm">Founder portrait</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Placeholder */}
        <div className="lg:hidden mt-12">
          <div className="w-full aspect-square bg-bg-elevated border border-border rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto bg-bg-primary rounded-full border border-border mb-4"></div>
              <p className="text-text-muted text-sm">Founder portrait</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
