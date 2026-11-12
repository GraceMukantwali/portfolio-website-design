'use client'

import { WordRevealText } from './word-reveal-text'

export function LanguagesSection() {
  const languages = [
    {
      language: "Kinyarwanda",
      proficiency: "Native",
      level: "100"
    },
    {
      language: "English",
      proficiency: "Intermediate",
      level: "65"
    },
    {
      language: "French",
      proficiency: "Basic",
      level: "25"
    }
  ]

  return (
    <section id="languages" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">
          <WordRevealText text="Languages" />
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {languages.map((lang, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg p-8 text-center border border-border hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-3">
                <WordRevealText text={lang.language} />
              </h3>
              
              <div className="space-y-4">
                <div className="w-24 h-24 rounded-full bg-accent/20 mx-auto flex items-center justify-center">
                  <span className="text-3xl font-bold text-accent">{lang.level}</span>
                </div>
                <p className="font-semibold">{lang.proficiency}</p>
              </div>

              <div className="mt-6 w-full bg-secondary rounded-full h-2 overflow-hidden">
                <div
                  className="bg-accent h-full rounded-full"
                  style={{ width: `${lang.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
