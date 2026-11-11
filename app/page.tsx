'use client'

import { HeroSection } from '@/components/portfolio/hero-section'
import { AboutSection } from '@/components/portfolio/about-section'
import { EducationSection } from '@/components/portfolio/education-section'
import { SkillsSection } from '@/components/portfolio/skills-section'
import { ITKnowledgeVideo } from '@/components/portfolio/it-knowledge-video'
import { CertificationsSection } from '@/components/portfolio/certifications-section'
import { LanguagesSection } from '@/components/portfolio/languages-section'
import { ContactSection } from '@/components/portfolio/contact-section'
import { Navigation } from '@/components/portfolio/navigation'
import { RevealOnScroll } from '@/components/portfolio/reveal-on-scroll'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <RevealOnScroll>
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ITKnowledgeVideo />
          <CertificationsSection />
          <LanguagesSection />
          <ContactSection />
        </RevealOnScroll>
      </main>
    </div>
  )
}
