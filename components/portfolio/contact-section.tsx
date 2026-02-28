'use client'

import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">Let's Connect</h2>
        <p className="text-center text-foreground/70 text-lg mb-12">
          I'm always interested in hearing about new opportunities and collaborations. Reach out anytime!
        </p>

        <div className="bg-card rounded-lg p-8 md:p-12 border border-border space-y-8">
          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-foreground/60 text-sm font-semibold">Email</p>
                <a href="mailto:megagradus@gmail.com" className="text-lg font-semibold hover:text-accent transition-colors">
                  megagradus@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-foreground/60 text-sm font-semibold">Phone</p>
                <a href="tel:+250786957012" className="text-lg font-semibold hover:text-accent transition-colors">
                  +250 786 957 012
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-foreground/60 text-sm font-semibold">Location</p>
                <p className="text-lg font-semibold">Kigali, Rwanda</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8 border-t border-border">
            <a href="mailto:megagradus@gmail.com" className="inline-block w-full">
              <Button className="w-full text-lg py-6">
                Send Me an Email
              </Button>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-foreground/50 text-sm">
          <p>Built with Next.js, React, and Tailwind CSS</p>
          <p className="mt-2">© 2025 Grace Mukantwali. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
