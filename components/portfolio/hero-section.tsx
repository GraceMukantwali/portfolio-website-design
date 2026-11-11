'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Grace Mukantwali
              </h1>
              <p className="text-2xl sm:text-3xl font-light text-muted-foreground">
                IT Professional & UI/UX Designer
              </p>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Crafting elegant digital solutions through frontend & backend development, with a passion for intuitive user experiences and clean design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-medium px-8 border-2"
                disabled
                title="Upload the original CV PDF to enable downloads"
              >
                CV PDF pending upload
                <Download className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="pt-12 flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Kigali, Rwanda
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Available for opportunities
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-full min-h-500px flex items-center justify-center">
            <div className="relative w-full aspect-[3/4] max-w-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-28%20at%204.03.06%20PM%20%281%29-YYgpRB8dapdmDtpPUOG8vKuTZ7JCqE.jpeg"
                alt="Grace Mukantwali Professional Portrait"
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
