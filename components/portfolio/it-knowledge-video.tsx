export function ITKnowledgeVideo() {
  return (
    <section
      id="it-knowledge"
      aria-labelledby="it-knowledge-heading"
      className="scroll-mt-20 border-b border-border bg-card px-4 py-20 md:py-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">IT knowledge</p>
          <h2 id="it-knowledge-heading" className="text-4xl font-bold sm:text-5xl">
            Technology with purpose.
          </h2>
          <p className="text-lg leading-relaxed text-foreground/80">
            A short introduction made with my photos and the skills I bring to web development and user-centered design.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Featured skills: HTML, CSS, JavaScript, Node.js basics, Figma, UI/UX design, problem solving, and collaboration.
          </p>
        </div>

        <figure className="overflow-hidden rounded-lg border border-border bg-background shadow-xl">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/it-intro-poster.jpg"
            aria-labelledby="it-intro-video-title"
            aria-describedby="it-intro-video-description"
            className="aspect-video w-full bg-foreground/5"
          >
            <source src="/grace-it-intro.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
          <figcaption className="border-t border-border px-5 py-4">
            <h3 id="it-intro-video-title" className="font-semibold">
              Grace Mukantwali · IT portfolio intro
            </h3>
            <p id="it-intro-video-description" className="mt-1 text-sm text-muted-foreground">
              Silent 16-second introduction with on-screen highlights of software development, web, UI/UX, and professional skills.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
