'use client'

import Image from 'next/image'
import { WordRevealText } from './word-reveal-text'

export function CertificationsSection() {
  const certifications = [
    {
      title: "Software Developer (Frontend & Backend JavaScript)",
      profileBackground: true,
      issuer: "Ugire Rwanda Organization",
      year: "2024",
      description: "Comprehensive training in frontend and backend JavaScript development with practical project experience.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-28%20at%204.03.06%20PM-aNFxLsqbGanc7bprKmxrlERNgfA9ls.jpeg"
    },
    {
      title: "UI/UX Design Certification",
      issuer: "Solvit Africa",
      year: "2024",
      description: "Professional training in user interface and user experience design principles and best practices.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-28%20at%204.03.06%20PM%20%281%29-YYgpRB8dapdmDtpPUOG8vKuTZ7JCqE.jpeg"
    }
  ]

  return (
    <section id="certifications" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">Achievements</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <WordRevealText text="Certifications & Training" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative isolate flex flex-col gap-6 overflow-hidden rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {cert.profileBackground && (
                <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%204.32.47%20PM-99Tx9iuKwMHxY5h3mOvNRfA31c5OgE.jpeg"
                    alt=""
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-card/75" />
                </div>
              )}

              <div className="relative z-10 flex flex-col gap-6">
                {/* Image */}
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                      {cert.year}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">
                    <WordRevealText text={cert.title} />
                  </h3>
                  <p className="text-accent font-semibold mb-4">{cert.issuer}</p>
                  <p className="text-foreground/70 leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
