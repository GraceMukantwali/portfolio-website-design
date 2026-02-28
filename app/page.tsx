'use client'

import { HeroSection } from '@/components/portfolio/hero-section'
import { AboutSection } from '@/components/portfolio/about-section'
import { EducationSection } from '@/components/portfolio/education-section'
import { SkillsSection } from '@/components/portfolio/skills-section'
import { CertificationsSection } from '@/components/portfolio/certifications-section'
import { LanguagesSection } from '@/components/portfolio/languages-section'
import { ContactSection } from '@/components/portfolio/contact-section'
import { Navigation } from '@/components/portfolio/navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <CertificationsSection />
        <LanguagesSection />
        <ContactSection />
      </main>
    </div>
  )
}
