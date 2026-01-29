"use client";

import Link from "next/link";
import { Sparkles, Users, Heart, Flame, ArrowRight, Check, HelpCircle, TreePalm, PartyPopper, Flower2, Target, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  HeroEntrance,
  Floating,
} from "@/lib/motion";


const danceStyles = [
  { name: "Salsa", icon: Flame, color: "bg-coral-500", desc: "Fast footwork, shines, Colombian caleña style" },
  { name: "Bachata", icon: Heart, color: "bg-pink-500", desc: "Sensual Dominican rhythm, body movement" },
  { name: "Cumbia", icon: TreePalm, color: "bg-teal-500", desc: "Joyful Colombian folk dance, easy to learn" },
  { name: "Merengue", icon: PartyPopper, color: "bg-mango-400", desc: "Energetic, great for beginners" },
  { name: "Bolero Son", icon: Flower2, color: "bg-rose-500", desc: "Romantic, elegant, slower tempo" },
];

const services = [
  {
    title: "Private Lessons",
    icon: Target,
    iconBg: "bg-coral-600",
    whoFor: "Women wanting personalized attention and fast progress",
    description:
      "One-on-one instruction tailored to your goals. Choose any style or mix multiple rhythms. Ideal for beginners or dancers who want faster, focused growth.",
    learns: [
      "Custom curriculum for any dance style",
      "Footwork fundamentals & advanced patterns",
      "Ladies styling and arm movements",
      "Musicality and timing for each rhythm",
      "Spins and turn techniques",
    ],
    pricing: "$79 intro / $110 standard",
    cta: "Book Private Lesson",
    highlight: true,
  },
  {
    title: "Semi-Private Lessons",
    icon: UserPlus,
    iconBg: "bg-mango-400",
    whoFor: "Friends who want to learn together",
    description:
      "Bring your bestie, sister, or colleague. Learn salsa, bachata, or any style with the same quality as privates in a shared, fun experience.",
    learns: [
      "Same quality instruction as privates",
      "Shared learning experience",
      "Built-in accountability partner",
      "More affordable per person",
      "Perfect for girls' nights prep",
    ],
    pricing: "$70/person (2 women) / $60/person (3 women)",
    cta: "Book with Friends",
  },
  {
    title: "Women's Group Series",
    icon: Users,
    iconBg: "bg-teal-500",
    whoFor: "Women wanting community + weekly structure",
    description:
      "Progressive 4–6 week series focused on one style. Build friendships while building skill in salsa, bachata, cumbia, or merengue.",
    learns: [
      "Progressive curriculum over weeks",
      "Community of like-minded women",
      "Weekly accountability",
      "Social skills for Latin nights",
      "Partner-free practice",
    ],
    pricing: "Drop-in $25 / 4-week $89 / 6-week $129",
    cta: "Join Next Series",
  },
  {
    title: "Ladies Styling Workshop",
    icon: Sparkles,
    iconBg: "bg-pink-500",
    whoFor: "Any level wanting to add polish and feminine movement",
    description:
      "A focused workshop on the art of feminine expression across all Latin dance styles. Add that extra 'sabor' to your movement.",
    learns: [
      "Arm styling and hand movements",
      "Body isolations and waves",
      "Hip movement and footwork accents",
      "Stage presence and confidence",
      "How to shine on the dance floor",
    ],
    pricing: "$35 one-time workshop",
    cta: "Reserve Spot",
  },
];

const faqs = [
  {
    question: "Do I need a partner?",
    answer:
      "No! All classes are designed for women learning independently. For partner basics, women practice with each other or learn both roles.",
  },
  {
    question: "Which dance style should I start with?",
    answer:
      "For absolute beginners, merengue is the easiest. Salsa and bachata are the most popular. We'll help you choose based on your goals in your intro lesson.",
  },
  {
    question: "I'm a total beginner—will I look awkward?",
    answer:
      "Everyone starts somewhere. The environment is supportive and judgment-free, so you can relax and learn at your pace.",
  },
  {
    question: "What should I wear?",
    answer:
      "Comfortable clothes you can move in (leggings, a flowy top). Smooth-soled shoes work best. Heels optional once comfortable.",
  },
  {
    question: "Where are classes held?",
    answer:
      "Partner studios across Houston—Midtown, Heights, Galleria. Your exact address is confirmed after booking.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden tropical-hero py-16 px-4">
        <Floating className="absolute -top-20 -left-32 h-72 w-72 rounded-full bg-coral-300/40 blur-3xl" duration={8} />
        <Floating className="absolute top-10 -right-24 h-64 w-64 rounded-full bg-mango-400/40 blur-3xl" duration={7} distance={16} />

        <div className="relative max-w-6xl mx-auto text-center">
          <HeroEntrance>
            <p className="text-sm uppercase tracking-[0.25em] text-coral-600 mb-3">
              Services
            </p>
          </HeroEntrance>
          <HeroEntrance delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose your perfect way to learn
            </h1>
          </HeroEntrance>
          <HeroEntrance delay={0.2}>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              From private one-on-one lessons to energizing group classes, find the best fit for your goals—across all five Latin rhythms.
            </p>
          </HeroEntrance>
          <HeroEntrance delay={0.3}>
            <div className="flex flex-wrap justify-center gap-2">
              {danceStyles.map((style) => (
                <span
                  key={style.name}
                  className="inline-flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <style.icon className="h-4 w-4" />
                  {style.name}
                </span>
              ))}
            </div>
          </HeroEntrance>
        </div>
      </section>

      {/* Dance Styles Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-6">
            <h2 className="font-display text-2xl font-bold text-gray-900">
              Dance Styles We Teach
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-4" staggerDelay={0.1}>
            {danceStyles.map((style) => (
              <StaggerItem key={style.name}>
                <div className="bg-sand-50 rounded-2xl p-4 text-center border border-sand-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className={`w-10 h-10 ${style.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                    <style.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{style.name}</h3>
                  <p className="text-xs text-gray-600">{style.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-sand-50">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid lg:grid-cols-2 gap-8" staggerDelay={0.15}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div
                  className={`rounded-3xl p-8 border transition-all hover:-translate-y-2 hover:shadow-xl h-full ${
                    service.highlight
                      ? "bg-gradient-to-br from-coral-600 to-mango-400 text-white border-transparent shadow-xl"
                      : "bg-white border-sand-100 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${service.highlight ? "bg-white/20" : service.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                  </div>

                  <p
                    className={`text-sm font-semibold mb-3 ${
                      service.highlight ? "text-coral-100" : "text-coral-600"
                    }`}
                  >
                    For: {service.whoFor}
                  </p>

                  <p className={`mb-6 ${service.highlight ? "text-white/90" : "text-gray-600"}`}>
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className={`font-semibold mb-3 ${service.highlight ? "text-white" : "text-gray-900"}`}>
                      What you&apos;ll learn:
                    </h3>
                    <ul className="space-y-2">
                      {service.learns.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className={`h-5 w-5 flex-shrink-0 ${service.highlight ? "text-white" : "text-coral-600"}`} />
                          <span className={service.highlight ? "text-white/90" : "text-gray-600"}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className={`font-bold text-lg ${service.highlight ? "text-white" : "text-gray-900"}`}>
                      {service.pricing}
                    </p>
                    <Button
                      asChild
                      className={`rounded-full ${
                        service.highlight
                          ? "bg-white text-coral-700 hover:bg-coral-50"
                          : "bg-coral-600 text-white hover:bg-coral-700"
                      }`}
                    >
                      <Link href="/contact">
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
            Special Add-ons
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-sand-50 rounded-2xl p-6 border border-sand-100">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Social Night Prep — $25</h3>
              <p className="text-gray-600">
                Learn social etiquette, how to ask/decline dances, and how to feel confident walking into Latin nights.
              </p>
            </div>
            <div className="bg-sand-50 rounded-2xl p-6 border border-sand-100">
              <h3 className="font-bold text-lg text-gray-900 mb-2">In-Home Private — $140–175</h3>
              <p className="text-gray-600">
                Prefer learning at home? I&apos;ll come to you—ideal for busy schedules and private settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-sand-50">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
              <HelpCircle className="h-8 w-8 text-coral-600" />
              Frequently Asked Questions
            </h2>
          </AnimatedSection>
          <StaggerContainer className="space-y-6" staggerDelay={0.1}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.question}>
                <div className="bg-white border border-sand-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1f1a16]">
        <AnimatedSection className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-4">
            Not sure which service fits?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Book an intro lesson and we&apos;ll tailor a plan around your goals, preferred style, and schedule.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-mango-400 hover:bg-mango-500 text-gray-900 rounded-full px-8 text-lg"
          >
            <Link href="/contact">
              Book Intro Lesson — $79
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </section>
    </>
  );
}
