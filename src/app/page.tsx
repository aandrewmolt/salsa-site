import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden tropical-hero py-20 md:py-28 px-4">
        <div className="absolute -top-20 -left-32 h-72 w-72 rounded-full bg-coral-300/40 blur-3xl animate-float" />
        <div className="absolute top-10 -right-24 h-64 w-64 rounded-full bg-mango-400/40 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-12 h-72 w-72 rounded-full bg-teal-400/30 blur-3xl animate-float" />
        <div className="absolute inset-0 tropical-grid opacity-15" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 bg-white/70 text-coral-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                🇨🇴 Colombian Salsa for Women in Houston
                <span className="inline-flex h-2 w-2 rounded-full bg-teal-500" />
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05]">
                Women&apos;s Salsa Lessons in Houston — Taught by a Colombian Instructor
              </h1>

              <p className="text-lg md:text-xl text-gray-700 max-w-xl">
                Learn authentic salsa with a supportive, women-centered approach. Build
                confidence, technique, and style—<span className="font-semibold text-coral-700">no partner needed</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-coral-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-coral-500/30 hover:bg-coral-700 transition-colors text-center"
                >
                  Book Your Intro Lesson
                </Link>
                <Link
                  href="/services"
                  className="bg-white text-coral-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-coral-200 hover:border-coral-400 transition-colors text-center"
                >
                  See Class Options
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 text-sm font-semibold text-gray-700">
                <span className="px-3 py-1 rounded-full bg-white/70">Beginner friendly</span>
                <span className="px-3 py-1 rounded-full bg-white/70">Bilingual (EN/ES)</span>
                <span className="px-3 py-1 rounded-full bg-white/70">Pop-up studios</span>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <span>
                  <span className="text-coral-700 font-semibold">$79</span> intro lesson
                </span>
                <span>
                  <span className="text-coral-700 font-semibold">$89</span> 4-week series
                </span>
                <span className="text-teal-600 font-semibold">Confidence starts in your feet.</span>
              </div>
            </div>

            <div className="relative">
              <div className="glass rounded-[32px] p-6 md:p-8">
                <div className="rounded-[24px] bg-gradient-to-br from-coral-200 via-white to-mango-200 p-4">
                  <div className="aspect-[4/5] rounded-[18px] bg-white/80 border border-white/60 flex items-center justify-center text-center">
                    <div className="space-y-3">
                      <div className="text-5xl">🎬</div>
                      <p className="text-sm font-semibold text-gray-700">Add a 30s teaching reel here</p>
                      <div className="inline-flex items-center gap-2 text-xs text-gray-500">
                        <span className="h-2 w-2 rounded-full bg-coral-500" />
                        Footwork • Styling • Musicality
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-6 bottom-8 bg-white rounded-2xl px-4 py-3 shadow-lg">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Signature Focus</p>
                  <p className="font-semibold text-gray-900">Ladies Styling + Shines</p>
                </div>

                <div className="absolute -right-6 top-10 bg-white rounded-2xl px-4 py-3 shadow-lg">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Locations</p>
                  <p className="font-semibold text-gray-900">Midtown • Heights • Galleria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/70 rounded-2xl p-5 text-center">
              <p className="font-display text-2xl text-coral-700">10+ yrs</p>
              <p className="text-sm text-gray-600">Teaching experience</p>
            </div>
            <div className="bg-white/70 rounded-2xl p-5 text-center">
              <p className="font-display text-2xl text-coral-700">500+</p>
              <p className="text-sm text-gray-600">Women taught</p>
            </div>
            <div className="bg-white/70 rounded-2xl p-5 text-center">
              <p className="font-display text-2xl text-coral-700">Women-only</p>
              <p className="text-sm text-gray-600">Supportive space</p>
            </div>
            <div className="bg-white/70 rounded-2xl p-5 text-center">
              <p className="font-display text-2xl text-coral-700">Colombian</p>
              <p className="text-sm text-gray-600">Authentic sabor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-coral-600 mb-3">Why Women Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A women-centered space with real Colombian technique
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Learn in a supportive environment that celebrates confidence, musicality, and feminine styling.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl p-8 bg-sand-50 border border-sand-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-coral-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Beginner-friendly — you don&apos;t need experience
              </h3>
              <p className="text-gray-600">
                Start from zero with a structured plan, supportive coaching, and clear progress you can feel each week.
              </p>
            </div>
            <div className="rounded-2xl p-8 bg-white border border-sand-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-mango-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">👠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Footwork, turns, musicality + ladies styling
              </h3>
              <p className="text-gray-600">
                Shines, spins, body movement, and musicality taught the Colombian way—fast, elegant, and joyful.
              </p>
            </div>
            <div className="rounded-2xl p-8 bg-sand-50 border border-sand-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">👯‍♀️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Private lessons + small women-only group classes
              </h3>
              <p className="text-gray-600">
                Build skill and confidence without pressure. Learn at your pace in a space designed for women.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-sand-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-coral-600 mb-3">How It Works</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three simple steps to your first dance night
            </h2>
            <p className="text-gray-600 text-lg">
              Pick your path, pick your location, and show up ready to move.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-sand-100">
              <div className="w-12 h-12 bg-coral-500 text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pick private or group</h3>
              <p className="text-gray-600">
                Choose a one-on-one lesson, semi-private with friends, or a women&apos;s series.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-sand-100">
              <div className="w-12 h-12 bg-mango-400 text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Choose time & location</h3>
              <p className="text-gray-600">
                Partner studios across Houston—Midtown, Heights, Galleria, and more.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-sand-100">
              <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Show up—no partner needed</h3>
              <p className="text-gray-600">
                We focus on your footwork, styling, and confidence from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Focus */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-coral-600 mb-3">Signature Focus</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Build the confidence to dance anywhere
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                We blend authentic Colombian technique with a women-centered coaching style. Expect fast footwork,
                fluid styling, and a training plan that keeps you progressing week by week.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Footwork & shines",
                  "Spins & turns",
                  "Musicality",
                  "Body movement",
                  "Ladies styling",
                  "Social dance confidence",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-sand-50 rounded-xl px-4 py-3">
                    <span className="text-coral-600">✓</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] bg-gradient-to-br from-coral-100 via-white to-mango-200 p-8 border border-sand-100 shadow-lg">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Best For</p>
                  <p className="font-semibold text-gray-900 text-lg">Professional women • New to Houston • Culture lovers</p>
                </div>
                <div className="h-px bg-sand-100" />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Women-only Promise</p>
                  <p className="text-gray-700">
                    A supportive space that prioritizes comfort, confidence, and growth—without intimidation.
                  </p>
                </div>
                <div className="h-px bg-sand-100" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Start Here</p>
                    <p className="font-semibold text-gray-900">Intro private — $79</p>
                  </div>
                  <Link
                    href="/contact"
                    className="bg-coral-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-coral-700 transition-colors"
                  >
                    Book Intro
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-sand-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-coral-600 mb-3">Testimonials</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real women. Real confidence.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I finally went to a Latin night and actually danced. The lessons gave me the confidence I needed.",
                name: "Sarah M.",
                tag: "Medical Center Professional",
              },
              {
                quote:
                  "The women-only environment made all the difference—no pressure, just support and fun.",
                name: "Jessica L.",
                tag: "New to Houston",
              },
              {
                quote:
                  "Learning from a Colombian instructor is incredible. You feel the authenticity in every move.",
                name: "Maria G.",
                tag: "Latina Culture Lover",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-8 shadow-sm border border-sand-100">
                <div className="flex items-center mb-4 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-semibold text-coral-600">— {testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[28px] bg-gradient-to-r from-coral-600 via-coral-500 to-mango-400 p-1">
            <div className="rounded-[26px] bg-white p-10 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2">Pricing Snapshot</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Simple, transparent pricing that respects your time
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Intro Private: <span className="font-semibold text-coral-600">$79</span> &nbsp;•&nbsp; Group Series: <span className="font-semibold text-coral-600">$89/4 weeks</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pricing"
                  className="bg-coral-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-coral-700 transition-colors"
                >
                  View Full Pricing
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-coral-700 px-8 py-3 rounded-full font-semibold border-2 border-coral-200 hover:border-coral-400 transition-colors"
                >
                  Book Intro Lesson
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#1f1a16]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to feel confident on the dance floor?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Book your intro lesson today and start dancing with confidence—no experience needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-mango-400 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-mango-500 transition-colors"
            >
              Book Intro Lesson — $79
            </Link>
            <Link
              href="/services"
              className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:border-white/60 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
