import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Salsa for Women Houston",
  description:
    "Private salsa lessons, semi-private sessions, group classes, and ladies styling workshops for women in Houston. No partner needed.",
};

const services = [
  {
    title: "Private Lessons",
    emoji: "🎯",
    whoFor: "Women wanting personalized attention and fast progress",
    description:
      "One-on-one instruction tailored to your goals. Ideal for beginners or dancers who want faster, focused growth.",
    learns: [
      "Custom curriculum based on your goals",
      "Footwork fundamentals & advanced patterns",
      "Ladies styling and arm movements",
      "Musicality and timing",
      "Spins and turn techniques",
    ],
    pricing: "$79 intro / $110 standard",
    cta: "Book Private Lesson",
    highlight: true,
  },
  {
    title: "Semi-Private Lessons",
    emoji: "👯‍♀️",
    whoFor: "Friends who want to learn together",
    description:
      "Bring your bestie, sister, or colleague. Same quality as privates with a shared, fun experience.",
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
    emoji: "💃",
    whoFor: "Women wanting community + weekly structure",
    description:
      "Progressive 4–6 week series with the same group each week. Build friendships while building skill.",
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
    emoji: "✨",
    whoFor: "Any level wanting to add polish and feminine movement",
    description:
      "A focused workshop on the art of feminine expression in salsa. Add that extra 'sabor' to your movement.",
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
      <section className="tropical-hero py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-coral-600 mb-3">
            Services
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose your perfect way to learn
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            From private one-on-one lessons to energizing group classes, find the best fit for your goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`rounded-3xl p-8 border transition-transform hover:-translate-y-1 ${
                  service.highlight
                    ? "bg-gradient-to-br from-coral-600 to-mango-400 text-white border-transparent shadow-xl"
                    : "bg-sand-50 border-sand-100 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{service.emoji}</span>
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
                        <span className={service.highlight ? "text-white" : "text-coral-600"}>✓</span>
                        <span className={service.highlight ? "text-white/90" : "text-gray-600"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className={`font-bold text-lg ${service.highlight ? "text-white" : "text-gray-900"}`}>
                    {service.pricing}
                  </p>
                  <Link
                    href="/contact"
                    className={`px-6 py-3 rounded-full font-semibold text-center transition-colors ${
                      service.highlight
                        ? "bg-white text-coral-700 hover:bg-coral-50"
                        : "bg-coral-600 text-white hover:bg-coral-700"
                    }`}
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 px-4 bg-sand-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
            Special Add-ons
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-sand-100">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Social Night Prep — $25</h3>
              <p className="text-gray-600">
                Learn social etiquette, how to ask/decline dances, and how to feel confident walking into Latin nights.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-sand-100">
              <h3 className="font-bold text-lg text-gray-900 mb-2">In-Home Private — $140–175</h3>
              <p className="text-gray-600">
                Prefer learning at home? I&apos;ll come to you—ideal for busy schedules and private settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-sand-100 pb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1f1a16]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-4">
            Not sure which service fits?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Book an intro lesson and we&apos;ll tailor a plan around your goals and schedule.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-mango-400 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-mango-500 transition-colors"
          >
            Book Intro Lesson — $79
          </Link>
        </div>
      </section>
    </>
  );
}
