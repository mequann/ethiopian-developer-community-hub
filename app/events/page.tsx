import { EventCard } from "@/components/event-card";
import { SectionHeading } from "@/components/section-heading";
import { events } from "@/lib/data";
export default function EventsPage() { return <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10"><SectionHeading eyebrow="Developer events" title="Make your next connection" /><p className="mt-4 max-w-2xl text-stone-600">Workshops, meetups, and contribution sessions organized by communities around Ethiopia and online.</p><div className="mt-10 grid gap-5 md:grid-cols-3">{events.map((event) => <EventCard key={event.id} event={event} />)}</div></section>; }
