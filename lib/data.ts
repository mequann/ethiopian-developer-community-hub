import type { Event, Project, Resource } from "./types";
export const projects: Project[] = [
  { id: "gebeta", name: "Gebeta", description: "A simple directory helping Addis Ababa residents find trusted local services.", category: "Civic tech", author: "Mekdes A.", stack: ["Next.js", "PostgreSQL"], emoji: "🗺️" },
  { id: "teff", name: "Teff Ledger", description: "Mobile-first records and inventory support for small agricultural co-ops.", category: "Agri-tech", author: "Nahom T.", stack: ["React Native", "Firebase"], emoji: "🌾" },
  { id: "fidell", name: "Fidell", description: "Open-source Amharic keyboard and transliteration tools for the web.", category: "Open source", author: "Saron K.", stack: ["TypeScript", "Web APIs"], emoji: "⌨️" },
  { id: "birrwise", name: "BirrWise", description: "A friendly budgeting companion made for student life and everyday spending.", category: "Fintech", author: "Abel G.", stack: ["Vue", "Node.js"], emoji: "💡" },
];
export const events: Event[] = [
  { id: "frontend", title: "Frontend Addis Meetup", date: "November 8, 2026", format: "In person", location: "Ice Addis, Addis Ababa", community: "Frontend Addis", description: "Lightning talks and a practical CSS architecture workshop." },
  { id: "ai", title: "Practical AI for Product Teams", date: "November 15, 2026", format: "Online", location: "Google Meet", community: "Ethio AI Collective", description: "A hands-on discussion of responsible, useful AI features." },
  { id: "opensource", title: "Open Source Contribution Day", date: "November 22, 2026", format: "Hybrid", location: "xHub + Discord", community: "Ethiopian OSS", description: "Find a good first issue, pair with a maintainer, and make your first contribution." },
];
export const resources: Resource[] = [
  { id: "web", title: "Modern Web Foundations", type: "Guide", level: "Beginner", language: "English", description: "A focused path through HTML, CSS, JavaScript, and accessible interface design.", url: "https://developer.mozilla.org" },
  { id: "git", title: "Git for Collaborative Teams", type: "Course", level: "Beginner", language: "English", description: "Build confident version-control habits for real-world pull requests.", url: "https://git-scm.com/doc" },
  { id: "oss", title: "Ethiopian Open Source", type: "Community", level: "All levels", language: "English", description: "A welcoming place to discover local maintainers and contribution opportunities.", url: "https://github.com" },
  { id: "backend", title: "API Design Field Notes", type: "Guide", level: "Intermediate", language: "English", description: "Patterns for thoughtful, durable APIs that other developers enjoy using.", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side" },
];
