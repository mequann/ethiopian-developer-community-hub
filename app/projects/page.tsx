import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";
export default function ProjectsPage() { return <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10"><SectionHeading eyebrow="Project showcase" title="Things Ethiopian developers are making" action={{ href: "/submit-project", label: "Submit yours" }} /><p className="mt-4 max-w-2xl text-stone-600">A small, growing collection of locally relevant experiments, products, and open-source work.</p><div className="mt-10 grid gap-5 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div></section>; }
