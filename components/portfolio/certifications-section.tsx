export function CertificationsSection() {
  const certifications = [
    {
      title: "Software Developer (Frontend & Backend JavaScript)",
      issuer: "Ugire Rwanda Organization",
      year: "2024",
      description: "Comprehensive training in frontend and backend JavaScript development with practical project experience."
    },
    {
      title: "UI/UX Design Certification",
      issuer: "Solvit Africa",
      year: "2024",
      description: "Professional training in user interface and user experience design principles and best practices."
    }
  ]

  return (
    <section id="certifications" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">Certifications & Training</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-8 border border-border hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                  {cert.year}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-accent font-semibold mb-4">{cert.issuer}</p>
              <p className="text-foreground/70 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
