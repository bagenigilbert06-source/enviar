'use client';

import { TrendingDown, Eye, Layers, AlertCircle, Zap } from 'lucide-react';

export default function WhyEnviar() {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Reduce manual follow-up across carriers',
    },
    {
      icon: Eye,
      title: 'Improve shipment visibility',
    },
    {
      icon: Layers,
      title: 'Consolidate billing and delivery records',
    },
    {
      icon: AlertCircle,
      title: 'Handle delivery exceptions clearly',
    },
    {
      icon: Zap,
      title: 'Scale without unnecessary logistics overhead',
    },
  ];

  return (
    <section className="section-spacing bg-bg-primary">
      <div className="grid-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 text-balance">
              Let your team focus on the business, not the logistics
            </h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Enviar Solutions handles the operational complexity while your team gets complete visibility over every delivery.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-bg-secondary border border-border rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-accent-lime" />
                    </div>
                    <p className="text-text-primary font-medium pt-2">{benefit.title}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block">
            <div className="w-full aspect-video bg-bg-elevated border border-border rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://enviar.co.ke/wp-content/uploads/2026/07/tuma-dashboard-1024x571.png"
                alt="Tuma Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden mt-12">
          <div className="w-full aspect-video bg-bg-elevated border border-border rounded-2xl overflow-hidden shadow-xl">
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
