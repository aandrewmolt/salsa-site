"use client";

import Link from "next/link";
import { useState } from "react";

const danceStyles = [
  "Salsa",
  "Bachata",
  "Cumbia",
  "Merengue",
  "Bolero Son",
  "Multiple styles",
  "Not sure yet - help me decide",
];

const services = [
  "Intro Private Lesson ($79)",
  "Private Lesson ($110)",
  "Semi-Private (with friends)",
  "4-Week Group Series ($89)",
  "6-Week Group Series ($129)",
  "Ladies Styling Workshop ($35)",
  "Not sure yet - help me decide",
];

const locations = ["Midtown", "The Heights", "Galleria Area", "Medical Center", "No preference"];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    danceStyle: "",
    service: "",
    location: "",
    experience: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 bg-sand-50">
        <div className="text-center max-w-md bg-white rounded-3xl p-10 border border-sand-100">
          <div className="text-6xl mb-6">💃</div>
          <h1 className="font-display text-3xl font-bold text-gray-900 mb-4">
            ¡Gracias! Message Received
          </h1>
          <p className="text-gray-600 mb-8">
            I&apos;ll get back to you within 24 hours to schedule your lesson. Can&apos;t wait to dance with you!
          </p>
          <Link
            href="/"
            className="inline-block bg-coral-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-coral-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="tropical-hero py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-coral-600 mb-3">Book</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book your lesson
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            Ready to start your Latin dance journey? Fill out the form and I&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["🔥 Salsa", "💕 Bachata", "🌴 Cumbia", "🎉 Merengue", "🌹 Bolero Son"].map((style) => (
              <span key={style} className="text-sm bg-white/80 px-3 py-1.5 rounded-full font-medium text-gray-700 shadow-sm">
                {style}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-coral-600">hello@latindanceforwomen.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone/Text</h3>
                  <p className="text-coral-600">(713) 555-0123</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Instagram</h3>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coral-600 hover:text-coral-700"
                  >
                    @latindanceforwomenhtx
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Locations</h3>
                  <p className="text-gray-600 text-sm">
                    Partner studios across Houston: Midtown, The Heights, Galleria, Medical Center
                  </p>
                </div>

                <div className="bg-sand-50 rounded-2xl p-4 border border-sand-100">
                  <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-600 text-sm">
                    I typically respond within 24 hours. For faster response, text or DM me on Instagram.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-sand-100 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-colors"
                      placeholder="Maria Garcia"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-sand-100 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-colors"
                      placeholder="maria@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone (optional, for text confirmations)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-sand-100 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-colors"
                    placeholder="(713) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="danceStyle" className="block text-sm font-medium text-gray-700 mb-2">
                    Which dance style interests you? *
                  </label>
                  <select
                    id="danceStyle"
                    required
                    value={formData.danceStyle}
                    onChange={(e) => setFormData({ ...formData, danceStyle: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-sand-100 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-colors bg-white"
                  >
                    <option value="">Select a dance style...</option>
                    {danceStyles.map((style) => (
                      <option key={style} value={style}>
                        {style}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    What type of lesson? *
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-sand-100 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-colors bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Location *
                  </label>
                  <select
                    id="location"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-sand-100 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-colors bg-white"
                  >
                    <option value="">Select a location...</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Dance Experience
                  </label>
                  <select
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-sand-100 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-colors bg-white"
                  >
                    <option value="">Select your level...</option>
                    <option value="none">Complete beginner - never danced</option>
                    <option value="some">Some experience - took a few classes</option>
                    <option value="social">Social dancer - go out dancing sometimes</option>
                    <option value="intermediate">Intermediate - comfortable with basics</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Anything else you&apos;d like me to know?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-sand-100 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-colors resize-none"
                    placeholder="Goals, questions, preferred times, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-coral-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-coral-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                <p className="text-center text-gray-500 text-sm">
                  By submitting, you agree to receive occasional emails about classes and events. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 px-4 bg-sand-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
            Studio Locations Across Houston
          </h2>
          <p className="text-gray-600 mb-8">
            I teach at partner studios throughout the city. Your exact address is confirmed after booking based on
            your preferred area.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locations.slice(0, 4).map((location) => (
              <div key={location} className="bg-white rounded-xl p-4 border border-sand-100">
                <span className="text-2xl mb-2 block">📍</span>
                <p className="font-medium text-gray-900">{location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
