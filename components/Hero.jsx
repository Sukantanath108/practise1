"use client";

import { useEffect, useState } from "react";
import siteData from "@/content/site.json";

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        >
            {/* Ambient background glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 50% 40%, var(--accent-glow), transparent)",
                }}
            />

            {/* Floating grid dots (decorative) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, var(--text-primary) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div
                className={`relative max-w-4xl mx-auto text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
            >
                {/* Status badge */}
                <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-medium tracking-wide"
                    style={{
                        backgroundColor: "var(--surface)",
                        border: "1px solid var(--border)",
                        color: "var(--text-muted)",
                    }}
                >
                    <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: "#22c55e" }}
                    />
                    Open to Graduate Research Opportunities
                </div>

                {/* Name */}
                <h1
                    className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                >
                    {siteData.name.split(" ")[0]}{" "}
                    <span style={{ color: "var(--accent)" }}>
                        {siteData.name.split(" ").slice(1).join(" ")}
                    </span>
                </h1>

                {/* Headline */}
                <p
                    className="text-lg md:text-xl lg:text-2xl mb-4 max-w-2xl mx-auto font-light leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                >
                    {siteData.headline}
                </p>

                {/* Subheadline */}
                <p
                    className="text-sm md:text-base mb-10 font-mono"
                    style={{ color: "var(--text-muted)" }}
                >
                    {siteData.subheadline}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {siteData.cta.map((btn) => (
                        <a
                            key={btn.label}
                            href={btn.href}
                            className={btn.primary ? "btn-accent" : "btn-outline"}
                            onClick={(e) => {
                                if (btn.href.startsWith("#")) {
                                    e.preventDefault();
                                    document
                                        .querySelector(btn.href)
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            {btn.label}
                            {btn.primary && (
                                <span className="ml-2">→</span>
                            )}
                        </a>
                    ))}
                </div>

                {/* Scroll hint */}
                <div
                    className={`mt-16 transition-all duration-1000 delay-700 ${mounted ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <div
                        className="w-6 h-10 rounded-full mx-auto flex items-start justify-center p-2"
                        style={{ border: "2px solid var(--border)" }}
                    >
                        <div
                            className="w-1 h-2.5 rounded-full animate-bounce"
                            style={{ backgroundColor: "var(--accent)" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
