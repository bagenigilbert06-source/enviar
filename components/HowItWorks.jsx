'use client';

import { FileText, Users, MapPin, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: 'Submit the order',
      description: 'Your client submits a shipping order through the portal with all required details.',
    },
    {
      number: 2,
      icon: Users,
      title: 'Coordinate fulfilment',
      description: 'We coordinate with carriers and handle assignments automatically.',
    },
    {
      number: 3,
      icon: MapPin,
      title: 'Track the shipment',
      description: 'Monitor delivery in real-time with full visibility into every step.',
    },
    {
      number: 4,
      icon: CheckCircle,
      title: 'Complete and bill',
      description: 'Delivery complete. We consolidate billing and send your monthly invoice.',
    },
  ];

  return (
    <section id="how-it-works" className="section-spacing bg-bg-secondary">
      <div className="grid-container">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 text-balance">
            From shipping request to completed delivery
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-6 relative">
            {/* Connecting Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-accent-lime via-accent-lime to-transparent"></div>

            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  {/* Step Circle */}
                  <div className="mb-8 relative">
                    <div className="w-24 h-24 bg-bg-primary border-2 border-accent-lime rounded-full flex items-center justify-center">
                      <Icon size={32} className="text-accent-lime" />
                    </div>
                    <div className="absolute top-0 right-0 w-8 h-8 bg-bg-secondary border-2 border-accent-lime rounded-full flex items-center justify-center text-accent-lime font-semibold text-sm">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-text-primary font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-11 top-24 bottom-0 w-1 bg-gradient-to-b from-accent-lime to-transparent"></div>

            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative flex gap-6">
                  {/* Step Circle */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-20 h-20 bg-bg-primary border-2 border-accent-lime rounded-full flex items-center justify-center relative z-10">
                      <Icon size={28} className="text-accent-lime" />
                    </div>
                    <div className="absolute -top-3 -right-4 w-7 h-7 bg-bg-secondary border-2 border-accent-lime rounded-full flex items-center justify-center text-accent-lime font-semibold text-xs">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <h3 className="text-text-primary font-semibold text-base mb-2">{step.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
