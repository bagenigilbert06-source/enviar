'use client';

export default function Hero() {
  return (
    <section className="section-spacing bg-bg-primary relative overflow-hidden">
      {/* Subtle background grid and glow */}
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(40,50,56,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(40,50,56,0.1)_1px,transparent_1px)] bg-[56px_56px]"></div>
      <div className="absolute top-0 right-1/3 w-[600px] h-[400px] gradient-subtle"></div>

      <div className="grid-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[650px]">
          {/* Left Content */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6 w-fit">
              <div className="w-2 h-2 bg-accent-lime rounded-full"></div>
              <span className="text-text-muted text-sm font-medium">Outsourced logistics, fully managed</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6 text-balance leading-tight">
              Every shipping order on one platform
            </h1>

            {/* Paragraph */}
            <p className="text-text-muted text-lg mb-8 text-balance leading-relaxed max-w-md">
              Enviar Solutions brings your shipping orders, carriers, tracking and billing into one place. Your team gets complete visibility while we handle the operational complexity behind every delivery.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-7 py-3 bg-accent-lime text-bg-primary font-semibold rounded hover:bg-accent-hover transition-colors">
                Request a demo
              </button>
              <button className="px-7 py-3 border border-border text-text-primary font-semibold rounded hover:bg-bg-elevated transition-colors">
                See how it works
              </button>
            </div>

            {/* Trust Points */}
            <div className="space-y-3">
              {['No carrier lock-in', 'One monthly invoice', 'Setup in days, not months'].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent-lime flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-muted text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Dashboard Image */}
          <div className="hidden lg:flex justify-center">
            <div className="w-full aspect-video bg-bg-elevated border border-border rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://enviar.co.ke/wp-content/uploads/2026/07/tuma-dashboard-1024x571.png"
                alt="Tuma Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile Dashboard */}
        <div className="lg:hidden mt-12 mb-8">
          <div className="w-full aspect-video bg-bg-elevated border border-border rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://enviar.co.ke/wp-content/uploads/2026/07/tuma-dashboard-1024x571.png"
              alt="Tuma Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
