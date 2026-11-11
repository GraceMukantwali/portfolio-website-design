'use client'

import Image from 'next/image'
import { WordRevealText } from './word-reveal-text'

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-4 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">About Grace · GM</p>
            <h2 className="text-4xl sm:text-5xl font-bold">
              <WordRevealText text="My story" />
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            {/* Text content */}
            <div className="order-last space-y-4 text-lg italic text-foreground/80 leading-relaxed lg:order-first lg:col-span-2">
            <p>
              I&apos;m Grace Mukantwali (GM), an IT professional and Commercial Engineering graduate based in Kigali, Rwanda. I&apos;m currently pursuing a Bachelor of Science in Information Technology at the University of Kigali.
            </p>

            <p>
              I enjoy bringing technology and design together. My work spans frontend development with HTML, CSS, and JavaScript, backend development with Node.js, and interface design in Figma. I aim to make every digital product useful, intuitive, and polished.
            </p>

            <p>
              I&apos;m motivated by practical problem-solving and thoughtful collaboration. I bring curiosity, clear communication, and adaptability to each project, and I&apos;m excited to contribute to work that makes a meaningful impact.
            </p>
            </div>

            {/* Right side - Image */}
            <div className="order-first mx-auto flex w-full max-w-sm flex-col gap-6 lg:order-last lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%204.35.34%20PM%20%281%29-Tr8exOEfvyIhV7OtKQBL5Y5tcPj8pE.jpeg"
                  alt="Grace Mukantwali in a tan shirt, photographed outdoors"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
