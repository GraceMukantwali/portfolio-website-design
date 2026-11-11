'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="hero-section relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div aria-hidden="true" className="hero-grid absolute inset-0" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="hero-copy order-1 lg:order-1">
          <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
            <span className="hero-status-dot" />
            Rwanda-based · Web & product design
          </p>

          <h1 className="hero-title text-[clamp(4rem,10vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-balance">
            <span className="block">Grace</span>
            <span className="hero-title-highlight block">Mukantwali</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg font-medium tracking-wide text-white/85 sm:text-xl">
            IT Professional <span className="text-white/45">/</span> UI/UX Designer
          </p>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
            Crafting elegant digital solutions through frontend & backend development, with a passion for intuitive user experiences and clean design.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="hero-primary-button bg-[var(--highlight)] px-7 text-base font-semibold text-[var(--highlight-foreground)] hover:brightness-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let&apos;s talk
              <ArrowRight data-icon="inline-end" />
            </Button>
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

        <div className="hero-portrait-wrap relative order-2 mx-auto w-full max-w-sm lg:order-2 lg:max-w-md">
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
      </div>
    </section>
  )
}
