"use client";
import { useState, type FormEvent } from "react";
import type { ProjectSubmission } from "@/lib/types";
import { validateProjectSubmission } from "@/lib/validation";

const initialValues: ProjectSubmission = { name: "", author: "", description: "", url: "", category: "" };
const fields: Array<{ key: keyof ProjectSubmission; label: string; placeholder: string; type?: "text" | "url" }> = [
  { key: "name", label: "Project name", placeholder: "e.g. Habesha Health" },
  { key: "author", label: "Your name or team", placeholder: "e.g. Aster and friends" },
  { key: "url", label: "Project URL", placeholder: "https://github.com/...", type: "url" },
];

export function ProjectForm() {
  const [values, setValues] = useState<ProjectSubmission>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ProjectSubmission, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  function update(key: keyof ProjectSubmission, value: string) { setValues((current) => ({ ...current, [key]: value })); setErrors((current) => ({ ...current, [key]: undefined })); }
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const result = validateProjectSubmission(values); if (!result.valid) { setErrors(result.errors); return; } setSubmitted(true); setValues(initialValues); }
  if (submitted) return <div className="rounded-2xl border border-[#9bd7ba] bg-[#e5f4ea] p-8"><p className="text-sm font-bold uppercase tracking-[.15em] text-[#0c7c59]">Received</p><h2 className="mt-2 text-2xl font-black">Thanks for sharing your work.</h2><p className="mt-3 text-stone-700">Your project has been queued for community review. We&apos;ll celebrate it here soon.</p><button className="mt-6 font-bold text-[#0c7c59] hover:underline" onClick={() => setSubmitted(false)} type="button">Submit another project →</button></div>;
  return <form className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8" noValidate onSubmit={submit}>{fields.map((field) => <label className="mb-5 block" key={field.key}><span className="text-sm font-bold">{field.label}</span><input aria-describedby={`${field.key}-error`} aria-invalid={Boolean(errors[field.key])} className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-[#0c7c59] focus:ring-2 focus:ring-[#e5f4ea]" onChange={(event) => update(field.key, event.target.value)} placeholder={field.placeholder} type={field.type ?? "text"} value={values[field.key]} />{errors[field.key] && <span className="mt-1 block text-sm text-red-700" id={`${field.key}-error`}>{errors[field.key]}</span>}</label>)}<label className="mb-5 block"><span className="text-sm font-bold">Category</span><select aria-describedby="category-error" aria-invalid={Boolean(errors.category)} className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-[#0c7c59] focus:ring-2 focus:ring-[#e5f4ea]" onChange={(event) => update("category", event.target.value)} value={values.category}><option value="">Choose one</option><option>Civic tech</option><option>Fintech</option><option>Agri-tech</option><option>Open source</option><option>Other</option></select>{errors.category && <span className="mt-1 block text-sm text-red-700" id="category-error">{errors.category}</span>}</label><label className="mb-6 block"><span className="text-sm font-bold">What does it do?</span><textarea aria-describedby="description-error" aria-invalid={Boolean(errors.description)} className="mt-2 min-h-32 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-[#0c7c59] focus:ring-2 focus:ring-[#e5f4ea]" onChange={(event) => update("description", event.target.value)} placeholder="Tell the community who it helps and why it matters." value={values.description} />{errors.description && <span className="mt-1 block text-sm text-red-700" id="description-error">{errors.description}</span>}</label><button className="rounded-full bg-[#112418] px-6 py-3 font-bold text-white transition hover:bg-[#0c7c59]" type="submit">Send for review</button></form>;
}
