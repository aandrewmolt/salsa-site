"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Send, Clock, Flame, Heart, TreePalm, PartyPopper, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  HeroEntrance,
  Floating,
  fadeInLeft,
  fadeInRight,
} from "@/lib/motion";

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
          <div className="w-16 h-16 bg-coral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <PartyPopper className="h-8 w-8 text-coral-600" aria-hidden="true" />
          </div>
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
      <section className="relative overflow-hidden tropical-hero py-16 px-4">
        <Floating className="absolute -top-20 -left-32 h-72 w-72 rounded-full bg-coral-300/40 blur-3xl" duration={8} />
        <Floating className="absolute top-10 -right-24 h-64 w-64 rounded-full bg-mango-400/40 blur-3xl" duration={7} distance={16} />

        <div className="relative max-w-6xl mx-auto text-center">
          <HeroEntrance>
            <p className="text-sm uppercase tracking-[0.25em] text-coral-600 mb-3">Book</p>
          </HeroEntrance>
          <HeroEntrance delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book your lesson
            </h1>
          </HeroEntrance>
          <HeroEntrance delay={0.2}>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
              Ready to start your Latin dance journey? Fill out the form and I&apos;ll get back to you within 24 hours.
            </p>
          </HeroEntrance>
          <HeroEntrance delay={0.3}>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { name: "Salsa", icon: Flame, color: "text-coral-600" },
                { name: "Bachata", icon: Heart, color: "text-pink-500" },
                { name: "Cumbia", icon: TreePalm, color: "text-teal-500" },
                { name: "Merengue", icon: PartyPopper, color: "text-mango-500" },
                { name: "Bolero Son", icon: Flower2, color: "text-rose-500" },
              ].map((style) => (
                <span key={style.name} className="inline-flex items-center gap-1.5 text-sm bg-white/80 px-3 py-1.5 rounded-full font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  <style.icon className={`h-4 w-4 ${style.color}`} aria-hidden="true" />
                  {style.name}
                </span>
              ))}
            </div>
          </HeroEntrance>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <AnimatedSection variants={fadeInLeft} className="md:col-span-1">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

              <StaggerContainer className="space-y-6" staggerDelay={0.1}>
                <StaggerItem>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-coral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-coral-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-coral-600">hello@latindanceforwomen.com</p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-coral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-coral-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone/Text</h3>
                      <p className="text-coral-600">(713) 555-0123</p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-coral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Instagram className="h-5 w-5 text-coral-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Instagram</h3>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-coral-600 hover:text-coral-700 transition-colors"
                      >
                        @latindanceforwomenhtx
                      </a>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-coral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-coral-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Locations</h3>
                      <p className="text-gray-600 text-sm">
                        Partner studios across Houston: Midtown, The Heights, Galleria, Medical Center
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-sand-50 rounded-2xl p-4 border border-sand-100 flex items-start gap-3">
                    <Clock className="h-5 w-5 text-coral-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                      <p className="text-gray-600 text-sm">
                        I typically respond within 24 hours. For faster response, text or DM me on Instagram.
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection variants={fadeInRight} delay={0.2} className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
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
                      name="email"
                      required
                      autoComplete="email"
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
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
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
                    name="danceStyle"
                    required
                    autoComplete="off"
                    value={formData.danceStyle}
                    onChange={(e) => setFormData({ ...formData, danceStyle: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-sand-100 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-colors bg-white"
                  >
                    <option value="">Select a dance style…</option>
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
                    name="service"
                    required
                    autoComplete="off"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-sand-100 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-colors bg-white"
                  >
                    <option value="">Select a service…</option>
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
                    name="location"
                    required
                    autoComplete="off"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-sand-100 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-colors bg-white"
                  >
                    <option value="">Select a location…</option>
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
                    name="experience"
                    autoComplete="off"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-sand-100 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-colors bg-white"
                  >
                    <option value="">Select your level…</option>
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
                    name="message"
                    rows={4}
                    autoComplete="off"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-sand-100 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-colors resize-none"
                    placeholder="Goals, questions, preferred times, etc."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-coral-600 hover:bg-coral-700 text-white rounded-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" aria-hidden="true" />
                    </>
                  )}
                </Button>

                <p className="text-center text-gray-500 text-sm">
                  By submitting, you agree to receive occasional emails about classes and events. Unsubscribe anytime.
                </p>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 px-4 bg-sand-50">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
              Studio Locations Across Houston
            </h2>
            <p className="text-gray-600 mb-8">
              I teach at partner studios throughout the city. Your exact address is confirmed after booking based on
              your preferred area.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.1}>
            {locations.slice(0, 4).map((location) => (
              <StaggerItem key={location}>
                <div className="bg-white rounded-xl p-4 border border-sand-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="h-5 w-5 text-coral-600" aria-hidden="true" />
                  </div>
                  <p className="font-medium text-gray-900">{location}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
