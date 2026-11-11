'use client'

import { WordRevealText } from './word-reveal-text'

export function EducationSection() {
  const educationItems = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "University of Kigali",
      period: "2023 – Present",
      status: "In Progress"
    },
    {
      degree: "Bachelor's Degree in Commercial Engineering",
      institution: "Catholic University of Rwanda",
      period: "2015 – 2017 (Awarded 2023)",
      status: "Completed"
    },
    {
      degree: "High School Diploma",
      institution: "Secondary Education",
      period: "Completed 2014",
      status: "Completed"
    }
  ]

  return (
    <section id="education" className="py-4 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">
          <WordRevealText text="Education" />
        </h2>

        <div className="space-y-5">
          {educationItems.map((item, index) => (
            <div key={index} className="flex gap-6 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-accent mt-2"></div>
                {index < educationItems.length - 1 && (
                  <div className="w-1 h-16 bg-border mt-4"></div>
                )}
              </div>

              <div className="pb-4 flex-1">
                <div className="bg-card rounded-lg p-5 border border-border hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold">
                    <WordRevealText text={item.degree} />
                  </h3>
                  <p className="text-accent font-semibold mt-2">{item.institution}</p>
                  <p className="text-muted-foreground text-sm mt-2">{item.period}</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
