import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // You can replace this with an actual CV file path
    const cvContent = `
GRACE MUKANTWALI
Kigali, Rwanda | +250 786 957 012 | megagradus@gmail.com

─────────────────────────────────────────────────────────

PROFESSIONAL SUMMARY

Motivated IT professional and Commercial Engineering graduate with strong expertise in full-stack JavaScript development and modern UI/UX design principles. Combining academic learning with hands-on experience to deliver solutions that are functionally robust and genuinely delightful to use.

─────────────────────────────────────────────────────────

EDUCATION

Bachelor of Science in Information Technology
University of Kigali, Rwanda
Expected Graduation: [Year]

Commercial Engineering
[Institution], Rwanda

─────────────────────────────────────────────────────────

TECHNICAL SKILLS

Frontend Development
• HTML5, CSS3, JavaScript (ES6+)
• React.js, Next.js
• Tailwind CSS, Responsive Design
• UI Component Libraries (shadcn/ui)

Backend Development
• Node.js, Express
• RESTful APIs
• Database Design & Management

UI/UX Design
• Figma
• User Research & Testing
• Wireframing & Prototyping
• Design Systems

─────────────────────────────────────────────────────────

CERTIFICATIONS

[List your certifications here]

─────────────────────────────────────────────────────────

LANGUAGES

English - Fluent
Kinyarwanda - Native
French - Intermediate

─────────────────────────────────────────────────────────

For more details, visit: https://grace-portfolio.com
`

    // Create a text file response
    const response = new NextResponse(cvContent, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Disposition': 'attachment; filename="Grace_Mukantwali_CV.txt"',
      },
    })

    return response
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to download CV' },
      { status: 500 }
    )
  }
}
