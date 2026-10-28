import Link from "next/link";
type Props = { eyebrow: string; title: string; action?: { href: string; label: string } };
export function SectionHeading({ eyebrow, title, action }: Props) { return <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-bold tracking-[.15em] text-[#0c7c59] uppercase">{eyebrow}</p><h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2></div>{action && <Link className="font-bold text-[#0c7c59] hover:underline" href={action.href}>{action.label} →</Link>}</div>; }
