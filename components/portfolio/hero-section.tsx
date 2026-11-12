'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'
import { ContactChatDialog } from './contact-chat-dialog'
import Image from 'next/image'
import { WordRevealText } from './word-reveal-text'

export function HeroSection() {
  return (
    <section className="hero-section relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div aria-hidden="true" className="hero-profile-background pointer-events-none absolute inset-y-0 left-0 hidden w-[58%] md:block">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%204.32.47%20PM-99Tx9iuKwMHxY5h3mOvNRfA31c5OgE.jpeg"
          alt=""
          fill
          sizes="58vw"
          className="object-cover"
        />
      </div>
      <div aria-hidden="true" className="hero-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="hero-future-marquee pointer-events-none absolute left-0 right-0 top-3 w-full overflow-hidden md:left-auto md:right-0 md:top-4 md:w-1/2"
      >
        <div className="hero-future-track">
          <span>I&apos;M ABLE TO BUILD MY FUTURE</span>
          <span>I&apos;M ABLE TO BUILD MY FUTURE</span>
          <span>I&apos;M ABLE TO BUILD MY FUTURE</span>
        </div>
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="hero-portrait-wrap relative order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-md">
          <div className="hero-portrait-frame relative aspect-square rounded-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%204.32.47%20PM-99Tx9iuKwMHxY5h3mOvNRfA31c5OgE.jpeg"
              alt="Grace Mukantwali in a white blazer in a tropical garden"
              fill
              className="hero-portrait rounded-full object-cover"
              priority
            />
            <span className="hero-photo-caption">Grace Mukantwali · Kigali</span>
          </div>
        </div>

        <div className="hero-copy order-2 md:order-1">
          <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
            <span className="hero-status-dot" />
            Rwanda-based · Web & product design
          </p>

          <h1 className="hero-title text-[clamp(1.75rem,4vw,3.25rem)] font-semibold leading-[0.95] text-balance">
            <WordRevealText text="Grace" className="block" />
            <WordRevealText
              text="Mukantwali"
              className="hero-title-highlight block"
              delayMs={220}
            />
          </h1>

          <p className="mt-8 max-w-xl text-base font-medium italic tracking-wide text-white/85 sm:text-lg">
            IT Professional <span className="text-white/45">/</span> UI/UX Designer
          </p>
          <p className="mt-5 max-w-lg text-base italic leading-7 text-white/70 sm:text-lg">
            I&apos;m Grace Mukantwali (GM), a Kigali-based IT professional and UI/UX designer. I bring ideas to life through full-stack development and thoughtful, people-first design.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ContactChatDialog>
              <Button
                size="lg"
                className="hero-primary-button bg-[var(--highlight)] px-7 text-base font-semibold text-[var(--highlight-foreground)] hover:brightness-105"
              >
                Let&apos;s Talk
                <ArrowRight data-icon="inline-end" />
              </Button>
            </ContactChatDialog>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hero-secondary-button border-white/35 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <a href="/cv.pdf" download="Grace-Mukantwali-CV.pdf" aria-label="Download Grace Mukantwali's CV as a PDF">
                CV (PDF)
                <Download data-icon="inline-end" />
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/65">
            <span className="inline-flex items-center gap-2">
              <span className="rwanda-flag" aria-hidden="true">
                <span className="rwanda-flag__blue">
                  <span className="rwanda-flag__sun" />
                </span>
                <span className="rwanda-flag__yellow" />
                <span className="rwanda-flag__green" />
              </span>
              Kigali, Rwanda
            </span>
            <span>Available for opportunities</span>
          </div>
        </div>
      </div>
    </section>
  )
}
