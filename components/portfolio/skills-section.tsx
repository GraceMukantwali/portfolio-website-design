'use client'

import { WordRevealText } from './word-reveal-text'

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML", proficiency: 90 },
        { name: "CSS", proficiency: 85 },
        { name: "JavaScript", proficiency: 88 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "JavaScript", proficiency: 75 },
        { name: "Node.js Basics", proficiency: 70 }
      ]
    },
    {
      category: "Design & Tools",
      skills: [
        { name: "UI/UX Design", proficiency: 85 },
        { name: "Figma", proficiency: 88 }
      ]
    },
    {
      category: "Professional Skills",
      skills: [
        { name: "Microsoft Office", proficiency: 85 },
        { name: "Communication", proficiency: 90 },
        { name: "Problem Solving", proficiency: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">
          <WordRevealText text="Technical & Professional Skills" />
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mb-6">
                <WordRevealText text={category.category} />
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-accent text-sm">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-accent h-full rounded-full transition-all duration-500"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
