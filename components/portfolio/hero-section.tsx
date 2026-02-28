import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20">
      <div className="max-w-4xl w-full">
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
            >
              Download CV
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
      </div>
    </section>
  )
}
