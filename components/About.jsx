"use client";

import SectionWrapper from "./SectionWrapper";
import siteData from "@/content/site.json";

export default function About() {
    const paragraphs = siteData.about.split("\n\n");

    return (
        <SectionWrapper id="about">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                {/* Left column — heading */}
                <div>
                    <h2 className="section-title">
                        About<span style={{ color: "var(--accent)" }}>.</span>
                    </h2>
                    <p className="section-subtitle">Who I am &amp; what drives me</p>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        {[
                            { value: "3.82", label: "CGPA" },
                            { value: "30+", label: "Team Size Led" },
                            { value: "5", label: "Semesters Merit" },
                            { value: "2", label: "Hackathon Wins" },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="card p-4 text-center"
                            >
                                <div
                                    className="text-2xl font-heading font-bold"
                                    style={{ color: "var(--accent)" }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="text-xs mt-1"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right column — bio text */}
                <div className="space-y-5">
                    {paragraphs.map((para, i) => (
                        <p
                            key={i}
                            className="text-base leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            {para}
                        </p>
                    ))}

                    {/* Contact chips */}
                    <div className="flex flex-wrap gap-3 pt-4">
                        <a
                            href={`mailto:${siteData.contact.email}`}
                            className="skill-chip hover:border-accent-DEFAULT inline-flex items-center gap-2 no-underline"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            {siteData.contact.email}
                        </a>
                        <a
                            href={siteData.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="skill-chip inline-flex items-center gap-2 no-underline"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </a>
                        <a
                            href={siteData.contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="skill-chip inline-flex items-center gap-2 no-underline"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                        <span
                            className="skill-chip inline-flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            {siteData.contact.location}
                        </span>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
