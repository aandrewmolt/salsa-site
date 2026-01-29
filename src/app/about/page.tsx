"use client";

import Link from "next/link";
import { Heart, Sparkles, Users, Music, ArrowRight, Award, Globe, Flame, TreePalm, PartyPopper, Flower2 } from "lucide-react";
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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden tropical-hero py-16 px-4">
        <Floating className="absolute -top-20 -left-32 h-72 w-72 rounded-full bg-coral-300/40 blur-3xl" duration={8} />
        <Floating className="absolute top-10 -right-24 h-64 w-64 rounded-full bg-mango-400/40 blur-3xl" duration={7} distance={16} />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection variants={fadeInLeft}>
              <HeroEntrance>
                <div className="inline-flex items-center gap-2 bg-white/80 text-coral-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Globe className="h-4 w-4" aria-hidden="true" />
                  Born & Raised in Colombia
                </div>
              </HeroEntrance>
              <HeroEntrance delay={0.1}>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Teaching Latin dance the way I learned it—with heart and soul
                </h1>
              </HeroEntrance>
              <HeroEntrance delay={0.2}>
                <p className="text-xl text-gray-700 mb-4">
                  I grew up surrounded by salsa, cumbia, and all the rhythms of Colombia. The music, the movement, the joy—it&apos;s in my blood.
                  Now I share that passion with women in Houston who want to feel that same magic.
                </p>
              </HeroEntrance>
              <HeroEntrance delay={0.3}>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Salsa", icon: Flame },
                    { name: "Bachata", icon: Heart },
                    { name: "Cumbia", icon: TreePalm },
                    { name: "Merengue", icon: PartyPopper },
                    { name: "Bolero Son", icon: Flower2 },
                  ].map((style) => (
                    <span key={style.name} className="inline-flex items-center gap-1.5 text-xs bg-coral-100 text-coral-700 px-3 py-1 rounded-full font-medium hover:bg-coral-200 transition-colors">
                      <style.icon className="h-3 w-3" aria-hidden="true" />
                      {style.name}
                    </span>
                  ))}
                </div>
              </HeroEntrance>
            </AnimatedSection>
            <AnimatedSection variants={fadeInRight} delay={0.2}>
              <div className="relative">
                <div className="glass rounded-[28px] p-6">
                  <div className="rounded-[22px] bg-gradient-to-br from-coral-200 via-white to-mango-200 p-4">
                    <div className="aspect-square rounded-[18px] bg-white/80 flex items-center justify-center text-center border border-white/60">
                      <div className="space-y-3">
                        <div className="w-20 h-20 bg-coral-100 rounded-2xl flex items-center justify-center mx-auto">
                          <Music className="h-10 w-10 text-coral-600" aria-hidden="true" />
                        </div>
                        <p className="text-sm font-semibold text-gray-700">Instructor portrait</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Floating className="absolute -bottom-4 -right-4" duration={5} distance={8}>
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-lg">
                    <p className="font-display text-coral-600 flex items-center gap-2">
                      <Award className="h-4 w-4" aria-hidden="true" />
                      10+ years
                    </p>
                    <p className="text-gray-600 text-sm">teaching experience</p>
                  </div>
                </Floating>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Colombian Authenticity */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-gray-900">
              Why Learning from a Colombian Matters
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
            <StaggerItem>
              <div className="bg-sand-50 rounded-2xl p-8 border border-sand-100 hover:shadow-lg hover:-translate-y-1 transition-all h-full">
                <div className="w-14 h-14 bg-coral-500 rounded-2xl flex items-center justify-center mb-4">
                  <Music className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real Technique, Real Sabor</h3>
                <p className="text-gray-600">
                  Colombian salsa (salsa caleña) is known for fast footwork and joyful energy. Cumbia is in our blood.
                  When you learn from someone who grew up with these rhythms, you get the real feel—not a watered-down version.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-sand-50 rounded-2xl p-8 border border-sand-100 hover:shadow-lg hover:-translate-y-1 transition-all h-full">
                <div className="w-14 h-14 bg-mango-400 rounded-2xl flex items-center justify-center mb-4">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Connection</h3>
                <p className="text-gray-600">
                  Latin dance isn&apos;t just steps—it&apos;s a way of expressing joy, connecting with music, and honoring culture.
                  I share the spirit and story behind each rhythm, not just the moves.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 px-4 bg-sand-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-gray-900">
              My Teaching Philosophy
            </h2>
          </AnimatedSection>
          <StaggerContainer className="space-y-6" staggerDelay={0.15}>
            {[
              {
                title: "Supportive, not intimidating",
                body: "I create a space where you can make mistakes, ask questions, and learn at your pace—no judgment, no pressure.",
                icon: Heart,
                bg: "bg-coral-600",
              },
              {
                title: "Technique + expression",
                body: "Good technique is the foundation, but dancing is about feeling the music. I teach both—across salsa, bachata, cumbia, merengue, and bolero son.",
                icon: Music,
                bg: "bg-mango-400",
              },
              {
                title: "Practical skills for social dancing",
                body: "Everything I teach is designed to help you dance confidently at Latin nights and social events, in any rhythm.",
                icon: Users,
                bg: "bg-teal-500",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white rounded-2xl p-6 flex gap-4 border border-sand-100 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 ${item.bg} text-white rounded-full flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
              Many women are curious about Latin dance but feel held back by common concerns:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "I don't want to feel awkward dancing with strangers",
                "I'm worried about unwanted attention",
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
              build genuine friendships, and develop confidence that carries over to social dancing—in any rhythm.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-4 bg-sand-50">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection className="mb-8">
            <h2 className="font-display text-3xl font-bold text-gray-900">Background & Experience</h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              { label: "Years teaching", value: "10+" },
              { label: "Students taught", value: "500+" },
              { label: "Dance styles", value: "5" },
              { label: "Languages", value: "2" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="bg-white rounded-xl p-6 border border-sand-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <p className="font-display text-3xl text-coral-500 mb-2">{item.value}</p>
                  <p className="text-gray-600">{item.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1f1a16]">
        <AnimatedSection className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-4">Let&apos;s dance together</h2>
          <p className="text-gray-300 text-lg mb-8">
            Book an intro lesson and let&apos;s see where the music takes us—salsa, bachata, cumbia, or all of them.
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
