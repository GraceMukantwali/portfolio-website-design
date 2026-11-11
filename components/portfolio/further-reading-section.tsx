const readingList = [
  {
    title: "The Design of Everyday Things",
    authors: "Don Norman",
    edition: "Revised and expanded edition · Basic Books · 2013",
  },
  {
    title: "Don't Make Me Think, Revisited",
    authors: "Steve Krug",
    edition: "3rd edition · New Riders · 2014",
  },
  {
    title: "Designing Interfaces",
    authors: "Jenifer Tidwell, Charles Brewer, and Aynne Valencia",
    edition: "3rd edition · O'Reilly Media · 2020",
  },
  {
    title: "The Elements of User Experience",
    authors: "Jesse James Garrett",
    edition: "2nd edition · New Riders · 2010",
  },
  {
    title: "Responsive Web Design",
    authors: "Ethan Marcotte",
    edition: "A Book Apart · 2011",
  },
  {
    title: "Eloquent JavaScript",
    authors: "Marijn Haverbeke",
    edition: "3rd edition · No Starch Press · 2018",
  },
  {
    title: "JavaScript: The Definitive Guide",
    authors: "David Flanagan",
    edition: "7th edition · O'Reilly Media · 2020",
  },
  {
    title: "The Pragmatic Programmer",
    authors: "David Thomas and Andrew Hunt",
    edition: "20th Anniversary edition · Addison-Wesley · 2019",
  },
] as const

export function FurtherReadingSection() {
  return (
    <section
      id="further-reading"
      aria-labelledby="further-reading-title"
      className="bg-black py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 grid gap-6 border-b border-white/15 pb-8 md:grid-cols-[0.8fr_1fr] md:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-accent">
              Books and references
            </p>
            <h2
              id="further-reading-title"
              className="mt-4 text-4xl font-black tracking-tight sm:text-5xl"
            >
              Further Reading
            </h2>
          </div>
          <p className="max-w-xl text-base font-semibold leading-7 text-white/70">
            Selected books on user-centered design, usability, and building for the web.
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {readingList.map((book, index) => (
            <li
              key={book.title}
              className="rounded-xl border border-white/15 bg-white/[0.04] p-5 transition-colors hover:border-accent/60 hover:bg-white/[0.07]"
            >
              <span className="text-xs font-extrabold tracking-[0.2em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-black leading-6 text-white">
                {book.title}
              </h3>
              <p className="mt-3 text-sm font-bold leading-5 text-white/85">
                {book.authors}
              </p>
              <p className="mt-2 text-xs font-semibold leading-5 text-white/55">
                {book.edition}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
