import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsSection } from "@/lib/site-config";
import { IconArrowLeft, IconExternalLink } from "@tabler/icons-react";

export async function generateStaticParams() {
  return projectsSection.projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsSection.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projectsSection.projects
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#191919] text-white selection:bg-blue-500/30 font-sans pb-20">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-6">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-semibold tracking-wider text-neutral-400 hover:text-white transition-colors uppercase"
        >
          <IconArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8">
          {project.title}
        </h1>
        
        <div className="flex flex-col gap-4 text-xs md:text-sm font-medium tracking-widest text-neutral-400 uppercase mb-12">
          <p>
            <span className="text-white mr-2">Tools:</span>
            {project.techStack.map((t) => t.title).join(" • ")}
          </p>
          <p>
            <span className="text-white mr-2">Skills:</span>
            {project.tags.join(" • ")}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800 flex items-center justify-center">
             {/* Author Placeholder Image or Initials */}
             <span className="text-white font-bold text-lg">AS</span>
          </div>
          <span className="text-lg font-medium text-white">Anil Singh</span>
        </div>
      </header>

      {/* Large Hero Image or Architecture Diagram */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
        <div className="w-full h-[40vh] md:h-[60vh] bg-neutral-800 rounded-lg overflow-hidden relative border border-white/10 flex items-center justify-center">
            {project.architectureDiagram && project.architectureDiagram !== "#" ? (
                <Image
                    src={project.architectureDiagram}
                    alt={`${project.title} Architecture`}
                    fill
                    className="object-contain p-4"
                />
            ) : project.image && project.image !== "#" ? (
                 <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-4"
                />
            ) : (
                <div className="text-center p-6">
                    <p className="text-white/40 font-heading font-bold text-2xl tracking-wider mb-2">ARCHITECTURE DIAGRAM / HERO IMAGE</p>
                    <p className="text-white/20 text-sm">Add 'architectureDiagram' path in site-config.ts</p>
                </div>
            )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-16 relative">
        
        {/* Left Sticky Sidebar (Outline) */}
        <aside className="hidden lg:block w-1/4 shrink-0 relative">
          <div className="sticky top-24 flex flex-col gap-6 text-sm">
            <h3 className="text-neutral-300 font-semibold mb-2">{project.title}</h3>
            {project.content?.whatMadeThisHard && (
              <a href="#what-made-this-hard" className="text-neutral-500 hover:text-white transition-colors">What Made This Hard</a>
            )}
            {project.content?.howIBuiltIt && (
              <a href="#how-i-built-it" className="text-neutral-500 hover:text-white transition-colors">How I Built It</a>
            )}
            {project.content?.techStackDetails && (
              <a href="#tech-stack" className="text-neutral-500 hover:text-white transition-colors">Tech Stack</a>
            )}
            <a href="#links" className="text-neutral-500 hover:text-white transition-colors">Links</a>
          </div>
        </aside>

        {/* Right Content */}
        <div className="w-full lg:w-3/4 max-w-3xl">
           
           {/* Story Highlight */}
           <div className="mb-20 p-8 md:p-12 border border-blue-500/30 bg-blue-500/5 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-400 mb-8 leading-tight">
                 {project.storyTagline || project.tagline}
              </h2>
              {project.link && project.link !== "#" && (
                <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-bold uppercase tracking-wider text-sm transition-colors"
                >
                    Visit Live Site <span aria-hidden="true" className="ml-2">&rarr;</span>
                </Link>
              )}
           </div>

           <div className="h-px w-full bg-white/10 mb-16"></div>

           {/* What Made This Hard */}
           {project.content?.whatMadeThisHard && (
               <section id="what-made-this-hard" className="mb-16 scroll-mt-24">
                   <h2 className="text-3xl font-bold font-heading mb-8">What Made This Hard</h2>
                   <div className="flex flex-col gap-6">
                       {project.content.whatMadeThisHard.map((item: any, i: number) => (
                           <p key={i} className="text-neutral-300 leading-relaxed text-lg">
                               <strong className="text-white">{item.title}</strong> {item.description}
                           </p>
                       ))}
                   </div>
               </section>
           )}

           <div className="h-px w-full bg-white/10 mb-16"></div>

           {/* How I Built It */}
           {project.content?.howIBuiltIt && (
               <section id="how-i-built-it" className="mb-16 scroll-mt-24">
                   <h2 className="text-3xl font-bold font-heading mb-8">How I Built It</h2>
                   <div className="flex flex-col gap-6">
                       {project.content.howIBuiltIt.map((para: string, i: number) => (
                           <p key={i} className="text-neutral-300 leading-relaxed text-lg">
                               {para}
                           </p>
                       ))}
                   </div>
               </section>
           )}

           <div className="h-px w-full bg-white/10 mb-16"></div>

           {/* Tech Stack Details */}
           {project.content?.techStackDetails && (
               <section id="tech-stack" className="mb-16 scroll-mt-24">
                   <h2 className="text-3xl font-bold font-heading mb-8">Tech Stack</h2>
                   <div className="flex flex-col gap-6">
                       {project.content.techStackDetails.map((detail: any, i: number) => (
                           <p key={i} className="text-lg">
                               <strong className="text-white">{detail.label}:</strong> <span className="text-neutral-300">{detail.value}</span>
                           </p>
                       ))}
                   </div>
               </section>
           )}

           <div className="h-px w-full bg-white/10 mb-16"></div>

           {/* Links */}
           <section id="links" className="mb-20 scroll-mt-24">
                <h2 className="text-3xl font-bold font-heading mb-8">Links</h2>
                <div className="flex flex-col gap-4 text-lg">
                    {project.link && project.link !== "#" && (
                        <p>
                            <span className="inline-block w-24 text-neutral-400">Live:</span>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-colors break-all">
                                {project.link}
                            </a>
                        </p>
                    )}
                    {project.github && project.github !== "#" && (
                        <p>
                            <span className="inline-block w-24 text-neutral-400">GitHub:</span>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-colors break-all">
                                {project.github}
                            </a>
                        </p>
                    )}
                    {project.docsLink && project.docsLink !== "#" && (
                         <p>
                             <span className="inline-block w-24 text-neutral-400">Docs:</span>
                             <a href={project.docsLink} target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-colors break-all">
                                 {project.docsLink}
                             </a>
                         </p>
                     )}
                </div>
           </section>

        </div>
      </div>

      {/* More Projects Section */}
      {otherProjects.length > 0 && (
        <section className="bg-neutral-900 border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <h2 className="text-4xl font-heading font-bold text-center md:text-left mb-12">More Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((p) => (
                        <Link key={p.slug} href={`/projects/${p.slug}`} className="group block relative h-80 rounded-2xl overflow-hidden bg-neutral-800 border border-white/10 flex flex-col items-center justify-center p-6 text-center transition-transform hover:-translate-y-2">
                            {p.image ? (
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 opacity-60"></div>
                            )}
                            <div className="relative z-10 flex flex-col items-center gap-4">
                                <h3 className="text-2xl font-bold font-heading text-white">{p.title}</h3>
                                <p className="text-neutral-400 text-sm line-clamp-2">{p.tagline}</p>
                                <span className="inline-flex items-center text-blue-400 font-bold uppercase tracking-widest text-xs mt-4 group-hover:text-blue-300 transition-colors">
                                    Read Story &rarr;
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
      )}

    </div>
  );
}
