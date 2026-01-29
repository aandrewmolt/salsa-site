import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Latin Dance for Women Houston",
  description:
    "Transparent pricing for private Latin dance lessons, group classes, and workshops in Houston. Salsa, bachata, cumbia, merengue & bolero son. Packages available. No hidden fees.",
};

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="tropical-hero py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-coral-600 mb-3">Pricing</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            All prices include studio rental. Packages expire in 4 months. Learn any style—salsa, bachata, cumbia, merengue, or bolero son.
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

      {/* Private Lessons */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
            Private Lessons <span className="text-coral-500">(Women Only)</span>
          </h2>

          <div className="rounded-3xl overflow-hidden border border-sand-100 shadow-sm">
            <div className="bg-gradient-to-r from-coral-600 to-mango-400 text-white px-6 py-4">
              <p className="font-semibold text-lg">Personalized coaching for fast progress—any dance style</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-sand-50 text-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Option</th>
                    <th className="px-6 py-4 text-left font-semibold">Duration</th>
                    <th className="px-6 py-4 text-left font-semibold">Price</th>
                    <th className="px-6 py-4 text-left font-semibold">Per Lesson</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-100">
                  <tr className="bg-coral-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Intro Private
                      <span className="block text-sm text-coral-600 font-normal">First-time students</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">60 min</td>
                    <td className="px-6 py-4 font-bold text-coral-600">$79</td>
                    <td className="px-6 py-4 text-gray-600">—</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Single Private</td>
                    <td className="px-6 py-4 text-gray-600">60 min</td>
                    <td className="px-6 py-4 font-bold text-gray-900">$110</td>
                    <td className="px-6 py-4 text-gray-600">$110</td>
                  </tr>
                  <tr className="bg-mango-200/40">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      4-Pack
                      <span className="ml-2 inline-block bg-coral-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                        MOST POPULAR
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">60 min each</td>
                    <td className="px-6 py-4 font-bold text-gray-900">$399</td>
                    <td className="px-6 py-4 text-teal-600 font-medium">$99.75</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">8-Pack</td>
                    <td className="px-6 py-4 text-gray-600">60 min each</td>
                    <td className="px-6 py-4 font-bold text-gray-900">$749</td>
                    <td className="px-6 py-4 text-teal-600 font-medium">$93.63</td>
                  </tr>
                  <tr className="bg-sand-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      12-Pack
                      <span className="block text-sm text-teal-600 font-normal">Best value!</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">60 min each</td>
                    <td className="px-6 py-4 font-bold text-gray-900">$1,049</td>
                    <td className="px-6 py-4 text-teal-600 font-medium">$87.42</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-4 text-sm">
            * Packages expire 4 months from purchase date. Mix styles across lessons!
          </p>
        </div>
      </section>

      {/* Semi-Private */}
      <section className="py-16 px-4 bg-sand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
            Semi-Private Lessons <span className="text-coral-500">(Bring Friends!)</span>
          </h2>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sand-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-coral-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Group Size</th>
                    <th className="px-6 py-4 text-left font-semibold">Total Price</th>
                    <th className="px-6 py-4 text-left font-semibold">Per Person</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-100">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">2 Women</td>
                    <td className="px-6 py-4 font-bold text-gray-900">$140</td>
                    <td className="px-6 py-4 text-coral-600 font-medium">$70 each</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">3 Women</td>
                    <td className="px-6 py-4 font-bold text-gray-900">$180</td>
                    <td className="px-6 py-4 text-coral-600 font-medium">$60 each</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-6">
            Perfect for friends, sisters, or coworkers who want to learn salsa, bachata, or any style together!
          </p>
        </div>
      </section>

      {/* Group Classes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
            Women&apos;s Group Classes
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-sand-50 rounded-2xl p-6 text-center border border-sand-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Drop-in</h3>
              <p className="text-4xl font-bold text-coral-500 mb-4">$25</p>
              <p className="text-gray-600 text-sm">Try a single class with no commitment</p>
            </div>

            <div className="bg-gradient-to-br from-coral-600 to-mango-400 rounded-2xl p-6 text-center text-white relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-coral-700 text-xs px-3 py-1 rounded-full font-bold">
                RECOMMENDED
              </div>
              <h3 className="text-xl font-bold mb-2">4-Week Series</h3>
              <p className="text-4xl font-bold mb-4">$89</p>
              <p className="text-white/80 text-sm">
                Progressive curriculum, same group each week
              </p>
              <p className="text-white/70 text-xs mt-2">$22.25/class</p>
            </div>

            <div className="bg-sand-50 rounded-2xl p-6 text-center border border-sand-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">6-Week Series</h3>
              <p className="text-4xl font-bold text-coral-500 mb-4">$129</p>
              <p className="text-gray-600 text-sm">Deep dive into technique and styling</p>
              <p className="text-gray-500 text-xs mt-2">$21.50/class</p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-6 text-sm">
            Group series available for salsa, bachata, cumbia, and merengue. Check schedule for current offerings.
          </p>
        </div>
      </section>

      {/* Workshops & Add-ons */}
      <section className="py-16 px-4 bg-sand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
            Workshops & Add-ons
          </h2>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sand-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-coral-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Workshop</th>
                    <th className="px-6 py-4 text-left font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-100">
                  <tr>
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">Ladies Styling Workshop</span>
                      <span className="block text-sm text-gray-500">Arm styling, body movement, feminine expression—all styles</span>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900">$35</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">Social Night Prep</span>
                      <span className="block text-sm text-gray-500">Etiquette, confidence, what to expect at Latin clubs</span>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900">$25</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">In-Home Private Lesson</span>
                      <span className="block text-sm text-gray-500">I come to you (depends on location/travel)</span>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900">$140–175</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            Good to Know
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "All prices include studio",
                body: "No extra rental fees—everything is covered.",
              },
              {
                title: "Packages expire in 4 months",
                body: "Plenty of time to use all your lessons.",
              },
              {
                title: "24-hour cancellation policy",
                body: "Reschedule free with 24 hours notice.",
              },
              {
                title: "Referral credit available",
                body: "$20 off when a friend books an intro!",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 bg-sand-50 rounded-2xl p-5">
                <span className="text-coral-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1f1a16]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Book your intro lesson to experience the difference. Choose any style—salsa, bachata, cumbia, merengue, or bolero son.
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
