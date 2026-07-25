'use client';

import { Package, Users, Truck, CreditCard, BarChart3, Shield } from 'lucide-react';

export default function Platform() {
  const features = [
    {
      icon: Package,
      heading: 'Order management',
      description: 'Track and manage all shipping orders in one place with real-time updates.',
    },
    {
      icon: Users,
      heading: 'Carrier coordination',
      description: 'Coordinate with multiple carriers and manage shipment assignments.',
    },
    {
      icon: Truck,
      heading: 'Shipment tracking',
      description: 'Monitor deliveries in real-time with complete visibility into operations.',
    },
    {
      icon: CreditCard,
      heading: 'Billing and invoices',
      description: 'Consolidated billing from all carriers with detailed breakdown.',
    },
    {
      icon: BarChart3,
      heading: 'Analytics and reporting',
      description: 'Gain insights into shipping costs, performance and delivery metrics.',
    },
    {
      icon: Shield,
      heading: 'Role-based portals',
      description: 'Custom views for clients, operations teams and finance departments.',
    },
  ];

  return (
    <section id="platform" className="section-spacing bg-bg-secondary">
      <div className="grid-container">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-accent-lime rounded-full"></div>
            <span className="text-text-muted text-sm font-medium">Tuma platform</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 text-balance">
            One platform for every shipment
          </h2>
          <p className="text-text-muted text-lg max-w-2xl">
            Tuma gives clients, operators and finance teams a shared view of orders, deliveries, billing and performance.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-6 border border-border bg-bg-elevated rounded-lg hover:border-accent-lime hover:bg-bg-primary transition-all duration-300 group"
              >
                <Icon size={28} className="text-accent-lime mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-text-primary font-semibold text-lg mb-2">{feature.heading}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
