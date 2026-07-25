'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    company: '',
    monthlyVolume: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section-spacing bg-bg-primary">
      <div className="grid-container max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 text-balance">
            Let's discuss your logistics operation
          </h2>
          <p className="text-text-muted text-lg">
            Tell us how your business currently manages shipping, carriers and delivery reporting. We'll show you how Enviar Solutions can simplify the workflow.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Row */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-text-primary text-sm font-medium mb-2">First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-lime transition-colors"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-text-primary text-sm font-medium mb-2">Last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-lime transition-colors"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* Email and Phone Row */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-text-primary text-sm font-medium mb-2">Work email</label>
              <input
                type="email"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-lime transition-colors"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-text-primary text-sm font-medium mb-2">Phone number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-lime transition-colors"
                placeholder="+254 700 000000"
              />
            </div>
          </div>

          {/* Company and Volume Row */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-text-primary text-sm font-medium mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-lime transition-colors"
                placeholder="Your company"
              />
            </div>
            <div>
              <label className="block text-text-primary text-sm font-medium mb-2">Monthly shipment volume</label>
              <select
                name="monthlyVolume"
                value={formData.monthlyVolume}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent-lime transition-colors"
              >
                <option value="">Select range</option>
                <option value="1-100">1 - 100</option>
                <option value="100-500">100 - 500</option>
                <option value="500-1000">500 - 1,000</option>
                <option value="1000+">1,000+</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-text-primary text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-lime transition-colors resize-none"
              placeholder="Tell us about your logistics operation..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-7 py-4 bg-accent-lime text-bg-primary font-semibold rounded-lg hover:bg-accent-hover transition-colors"
          >
            Request a demo
          </button>
        </form>
      </div>
    </section>
  );
}
