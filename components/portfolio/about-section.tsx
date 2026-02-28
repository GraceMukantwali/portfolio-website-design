'use client'

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">About</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Professional Summary</h2>
          </div>

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              I am a motivated IT professional and Commercial Engineering graduate with strong expertise in full-stack JavaScript development and modern UI/UX design principles. With a foundation in both technical implementation and user-centered design, I deliver solutions that are not only functionally robust but also genuinely delightful to use.
            </p>

            <p>
              Currently pursuing my Bachelor of Science in Information Technology at the University of Kigali, I combine academic learning with hands-on experience. My background spans frontend development with HTML, CSS, and JavaScript, backend engineering with Node.js, and interface design using industry-standard tools like Figma. I'm committed to staying current with emerging technologies while maintaining a focus on solving real problems efficiently.
            </p>

            <p>
              What drives me is the intersection of clean code and beautiful design—creating digital experiences that work seamlessly across all devices while maintaining an intuitive, accessible interface. I'm particularly passionate about translating complex requirements into elegant user experiences and collaborating with cross-functional teams to bring ambitious projects to life.
            </p>

            <p>
              Beyond technical skills, I bring strong communication abilities, adaptability, and a problem-solving mindset to every project. I thrive in fast-paced environments and am eager to contribute my skills to organizations seeking talented developers and designers ready to make an impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
