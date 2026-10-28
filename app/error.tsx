"use client";
import { useEffect } from "react";
import { StateMessage } from "@/components/state-message";
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) { useEffect(() => { console.error(error); }, [error]); return <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10"><StateMessage title="Something did not load" description="Please try again. If the problem persists, come back a little later." variant="error" /><button className="mt-5 rounded-full bg-[#112418] px-5 py-2 font-bold text-white" onClick={reset} type="button">Try again</button></section>; }
