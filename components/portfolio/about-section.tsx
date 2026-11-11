'use client'

import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">About</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Professional Summary</h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
            {/* Text content */}
            <div className="order-last space-y-6 text-lg text-foreground/80 leading-relaxed lg:order-first lg:col-span-2">
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

            {/* Right side - Image */}
            <div className="order-first mx-auto flex w-full max-w-sm flex-col gap-6 lg:order-last lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%204.35.34%20PM%20%281%29-Tr8exOEfvyIhV7OtKQBL5Y5tcPj8pE.jpeg"
                  alt="Grace Mukantwali in a tan shirt, photographed outdoors"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
