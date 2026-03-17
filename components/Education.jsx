"use client";

import SectionWrapper from "./SectionWrapper";
import educationData from "@/content/education.json";

export default function Education() {
    return (
        <SectionWrapper id="education">
            <h2 className="section-title">
                Education<span style={{ color: "var(--accent)" }}>.</span>
            </h2>
            <p className="section-subtitle">
                Academic foundation
            </p>

            <div className="space-y-5">
                {educationData.map((edu, i) => (
                    <div key={i} className="card p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{
                                    background: "var(--accent-glow)",
                                    border: "1px solid var(--accent)",
                                }}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                    style={{ color: "var(--accent-light)" }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                </svg>
                            </div>

                            <div className="flex-1">
                                <h3
                                    className="text-lg font-heading font-semibold mb-1"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {edu.degree}
                                </h3>
                                <p
                                    className="text-sm font-medium mb-2"
                                    style={{ color: "var(--accent-light)" }}
                                >
                                    {edu.institution}
                                </p>
                                <p
                                    className="text-sm mb-1"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {edu.details}
                                </p>
                                <span
                                    className="text-xs font-mono"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    {edu.period}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
