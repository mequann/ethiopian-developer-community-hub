export type Project = { id: string; name: string; description: string; category: string; author: string; stack: string[]; emoji: string };
export type Event = { id: string; title: string; date: string; format: "In person" | "Online" | "Hybrid"; location: string; community: string; description: string };
export type Resource = { id: string; title: string; type: "Guide" | "Course" | "Community"; level: "Beginner" | "Intermediate" | "All levels"; language: string; description: string; url: string };
export type ProjectSubmission = { name: string; author: string; description: string; url: string; category: string };
