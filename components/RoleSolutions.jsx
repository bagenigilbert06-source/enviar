'use client';

import { useState } from 'react';
import { Users, Zap, DollarSign, Lock } from 'lucide-react';

export default function RoleSolutions() {
  const [activeRole, setActiveRole] = useState('client');

  const roles = {
    client: {
      icon: Users,
      label: 'Client',
      heading: 'Track your orders end-to-end',
      capabilities: [
        'Submit shipping orders directly',
        'Real-time tracking of all shipments',
        'Digital proof of delivery',
        'Consolidated invoicing per month',
        'Performance reporting and analytics',
      ],
    },
    operations: {
      icon: Zap,
      label: 'Operations',
      heading: 'Coordinate every delivery efficiently',
      capabilities: [
        'Manage carrier assignments',
        'Optimize route planning',
        'Handle exceptions in real-time',
        'Monitor fleet performance',
        'Reduce manual coordination overhead',
      ],
    },
    finance: {
      icon: DollarSign,
      label: 'Finance',
      heading: 'Simplify shipping cost management',
      capabilities: [
        'Consolidated billing from all carriers',
        'Detailed cost breakdown per shipment',
        'Budget tracking and forecasting',
        'Automated invoice reconciliation',
        'Payment processing and reporting',
      ],
    },
    admin: {
      icon: Lock,
      label: 'Administration',
      heading: 'Full control over your logistics',
      capabilities: [
        'User and team management',
        'Carrier integration and setup',
        'Custom reporting and exports',
        'System configuration and settings',
        'Audit logs and compliance tracking',
      ],
    },
  };

  const current = roles[activeRole];
  const CurrentIcon = current.icon;

  return (
    <section id="solutions" className="section-spacing bg-bg-primary">
      <div className="grid-container">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 text-balance">
            Built around the way logistics teams work
          </h2>
        </div>

        {/* Role Tabs */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-12 overflow-x-auto">
          {Object.entries(roles).map(([key, role]) => {
            const Icon = role.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveRole(key)}
                className={`px-6 py-3 rounded-lg font-medium text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeRole === key
                    ? 'bg-accent-lime text-bg-primary'
                    : 'bg-bg-secondary border border-border text-text-muted hover:border-accent-lime hover:text-accent-lime'
                }`}
              >
                <Icon size={18} />
                {role.label}
              </button>
            );
          })}
        </div>

        {/* Role Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Description and Capabilities */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CurrentIcon size={32} className="text-accent-lime" />
              <h3 className="text-3xl font-bold text-text-primary">{current.heading}</h3>
            </div>
            <div className="space-y-3 mt-8">
              {current.capabilities.map((capability, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-lime flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-muted">{capability}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Screenshot */}
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

        {/* Mobile Screenshot */}
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
