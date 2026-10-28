import Link from "next/link";
import { EventCard } from "@/components/event-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { events, projects, resources } from "@/lib/data";

export default function HomePage() {
  return <div>
    <section className="overflow-hidden bg-[#112418] px-6 py-20 text-[#f8f5ed] sm:px-10 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
        <div><p className="mb-5 text-sm font-bold tracking-[.2em] text-[#f6c84c] uppercase">Build local. Think global.</p><h1 className="max-w-3xl text-5xl font-black tracking-tight sm:text-7xl">Ethiopia&apos;s home for curious developers.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">Find the next room to learn in, the next project to contribute to, and people who care about building useful technology.</p><div className="mt-9 flex flex-wrap gap-3"><Link className="rounded-full bg-[#f6c84c] px-6 py-3 font-bold text-[#112418] transition hover:bg-[#ffe294]" href="/projects">Explore projects</Link><Link className="rounded-full border border-stone-500 px-6 py-3 font-bold transition hover:border-white" href="/submit-project">Share your work</Link></div></div>
        <div className="grid grid-cols-2 gap-3 text-[#112418]"><div className="rounded-3xl bg-[#f6c84c] p-6"><strong className="block text-4xl">{projects.length}</strong><span className="text-sm font-bold">featured builds</span></div><div className="mt-8 rounded-3xl bg-[#e5f4ea] p-6"><strong className="block text-4xl">{events.length}</strong><span className="text-sm font-bold">upcoming events</span></div><div className="col-span-2 rounded-3xl bg-[#0c7c59] p-6 text-white"><span className="text-sm font-bold">One community, many paths</span><p className="mt-2 text-xl font-bold">Frontend · Backend · Mobile · AI · Open Source</p></div></div>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10"><SectionHeading eyebrow="Made in Ethiopia" title="Projects worth knowing" action={{ href: "/projects", label: "See all projects" }} /><div className="mt-9 grid gap-5 md:grid-cols-3">{projects.slice(0, 3).map((project) => <ProjectCard key={project.id} project={project} />)}</div></section>
    <section className="bg-[#e5f4ea] px-6 py-20 sm:px-10"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Mark your calendar" title="Learn together, in person and online" action={{ href: "/events", label: "All events" }} /><div className="mt-9 grid gap-5 md:grid-cols-3">{events.map((event) => <EventCard key={event.id} event={event} />)}</div></div></section>
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10"><SectionHeading eyebrow="Level up" title="A practical learning shelf" action={{ href: "/resources", label: "Browse resources" }} /><div className="mt-9 grid gap-4 md:grid-cols-3">{resources.slice(0, 3).map((resource) => <article key={resource.id} className="rounded-2xl border border-stone-200 bg-white p-6"><p className="text-sm font-bold text-[#0c7c59]">{resource.type}</p><h3 className="mt-2 text-xl font-bold">{resource.title}</h3><p className="mt-3 text-stone-600">{resource.description}</p><span className="mt-5 inline-block text-sm font-bold">{resource.level} · {resource.language}</span></article>)}</div></section>
  </div>;
}
