import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Salsa for Women Houston",
  description:
    "Meet your Colombian salsa instructor. Learn about the authentic, women-centered approach to salsa instruction in Houston.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="tropical-hero py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 text-coral-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🇨🇴 Born & Raised in Colombia
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Teaching salsa the way I learned it—with heart and soul
              </h1>
              <p className="text-xl text-gray-700">
                I grew up surrounded by salsa in Colombia. The music, the movement, the joy—it&apos;s in my blood.
                Now I share that passion with women in Houston who want to feel that same magic.
              </p>
            </div>
            <div className="relative">
              <div className="glass rounded-[28px] p-6">
                <div className="rounded-[22px] bg-gradient-to-br from-coral-200 via-white to-mango-200 p-4">
                  <div className="aspect-square rounded-[18px] bg-white/80 flex items-center justify-center text-center border border-white/60">
                    <div className="space-y-3">
                      <span className="text-7xl block">💃</span>
                      <p className="text-sm font-semibold text-gray-700">Instructor photo here</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg">
                <p className="font-display text-coral-600">10+ years</p>
                <p className="text-gray-600 text-sm">teaching experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colombian Authenticity */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Colombian Salsa Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-sand-50 rounded-2xl p-8 border border-sand-100">
              <span className="text-4xl mb-4 block">🎵</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real Technique, Real Sabor</h3>
              <p className="text-gray-600">
                Colombian salsa (salsa caleña) is known for fast footwork, intricate patterns, and joyful energy.
                When you learn from someone who grew up with it, you get the real feel—not a watered-down version.
              </p>
            </div>
            <div className="bg-sand-50 rounded-2xl p-8 border border-sand-100">
              <span className="text-4xl mb-4 block">💫</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Connection</h3>
              <p className="text-gray-600">
                Salsa isn&apos;t just steps—it&apos;s a way of expressing joy, connecting with music, and honoring culture.
                I share the spirit and story behind the dance, not just the moves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 px-4 bg-sand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
            My Teaching Philosophy
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Supportive, not intimidating",
                body: "I create a space where you can make mistakes, ask questions, and learn at your pace—no judgment, no pressure.",
              },
              {
                title: "Technique + expression",
                body: "Good technique is the foundation, but dancing is about feeling the music. I teach both.",
              },
              {
                title: "Practical skills for social dancing",
                body: "Everything I teach is designed to help you dance confidently at Latin nights and social events.",
              },
            ].map((item, index) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 flex gap-4 border border-sand-100">
                <div className="w-12 h-12 bg-coral-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Women-Only */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Women-Centered Classes?
          </h2>
          <div className="bg-sand-50 rounded-2xl p-8 md:p-12 border border-sand-100">
            <p className="text-lg text-gray-700 mb-6">
              Many women are curious about salsa but feel held back by common concerns:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "I don&apos;t want to feel awkward dancing with strangers",
                "I&apos;m worried about unwanted attention",
                "I want a comfortable space to learn without pressure",
                "I want to focus on my own skills, not just following a partner",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-coral-600">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700">
              A women-centered environment removes these barriers. You can focus entirely on your growth,
              build genuine friendships, and develop confidence that carries over to social dancing.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-4 bg-sand-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Background & Experience</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Years teaching", value: "10+" },
              { label: "Students taught", value: "500+" },
              { label: "Colombian born", value: "🇨🇴" },
              { label: "Languages", value: "2" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-6 border border-sand-100">
                <p className="font-display text-3xl text-coral-500 mb-2">{item.value}</p>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1f1a16]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-4">Let&apos;s dance together</h2>
          <p className="text-gray-300 text-lg mb-8">
            Book an intro lesson and let&apos;s see where the music takes us.
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
