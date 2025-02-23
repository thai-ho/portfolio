import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32">
      <section className="min-h-screen">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">Designer & Frontend Developer</h1>
          <p className="text-xl max-w-2xl">
            I specialize in building modern web applications with Next.js and
            TypeScript.
          </p>
          <div className="flex space-x-6 pt-8">
            <SocialLink href="https://github.com" label="GitHub" />
            <SocialLink href="https://linkedin.com" label="LinkedIn" />
            <SocialLink href="https://twitter.com" label="Twitter" />
          </div>
        </div>

        <section id="about" className="pt-32">
          <h2 className="text-3xl font-bold mb-8">About</h2>
          <p className="max-w-3xl leading-relaxed">
            Your about section text here...
          </p>
        </section>

        <section id="projects" className="pt-32">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid gap-8">
            <ProjectCard
              title="Project 1"
              description="A modern web application built with Next.js"
              href="#"
            />
            <ProjectCard
              title="Project 2"
              description="E-commerce platform with TypeScript"
              href="#"
            />
          </div>
        </section>

        <section id="contact" className="pt-32 pb-32">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="max-w-xl">
            <p className="mb-8">
              {`Let's connect! Reach out via email or social media.`}
            </p>
            <Link
              href="mailto:you@example.com"
              className="border border-black px-8 py-4 hover:bg-black hover:text-white transition-colors"
            >
              Say Hello
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}

// Server Components
async function ProjectCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <article className="border border-black/10 p-8 rounded-lg hover:border-black/30 transition-colors">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link href={href} className="hover:text-black/60">
        View Project →
      </Link>
    </article>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-black/60"
    >
      <span className="sr-only">{label}</span>
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {/* Add your SVG path for each social icon */}
      </svg>
    </a>
  );
}
