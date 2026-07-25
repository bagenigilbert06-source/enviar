'use client';

import { Eye, TrendingUp, FileText, MapPin } from 'lucide-react';

export default function ValueStrip() {
  const values = [
    {
      icon: Eye,
      heading: 'Centralised order visibility',
    },
    {
      icon: TrendingUp,
      heading: 'Coordinated carrier operations',
    },
    {
      icon: FileText,
      heading: 'Consolidated billing',
    },
    {
      icon: MapPin,
      heading: 'Real-time delivery tracking',
    },
  ];

  return (
    <section className="border-t border-border bg-bg-primary">
      <div className="grid-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 lg:py-16">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex gap-4">
                <Icon size={24} className="text-accent-lime flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-text-primary font-semibold text-base">{item.heading}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
