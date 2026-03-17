"use client";

import SectionWrapper from "./SectionWrapper";
import researchData from "@/content/research.json";

export default function ResearchInterests() {
    return (
        <SectionWrapper id="research">
            <h2 className="section-title">
                Research Interests<span style={{ color: "var(--accent)" }}>.</span>
            </h2>
            <p className="section-subtitle">
                Where I want to push boundaries
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {researchData.map((item, i) => (
                    <div
                        key={i}
                        className="card p-6 group relative overflow-hidden"
                    >
                        {/* Number index */}
                        <span
                            className="absolute top-4 right-4 text-4xl font-heading font-bold opacity-[0.06] select-none"
                            style={{ color: "var(--text-primary)" }}
                        >
                            {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Icon */}
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                            style={{
                                background: "var(--accent-glow)",
                                border: "1px solid var(--accent)",
                            }}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                                style={{ color: "var(--accent-light)" }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-2.206 2.206c-.422.422-.659.994-.659 1.591v2.453a2.25 2.25 0 01-2.25 2.25h-5.37a2.25 2.25 0 01-2.25-2.25v-2.453c0-.597-.237-1.17-.659-1.591L4.2 14.5m15.6 0h-15.6"
                                />
                            </svg>
                        </div>

                        <h3
                            className="text-base font-heading font-semibold mb-2"
                            style={{ color: "var(--text-primary)" }}
                        >
                            {item.title}
                        </h3>
                        <p
                            className="text-sm leading-relaxed"
                            style={{ color: "var(--text-muted)" }}
                        >
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
