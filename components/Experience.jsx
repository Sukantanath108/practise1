"use client";

import SectionWrapper from "./SectionWrapper";
import experienceData from "@/content/experience.json";

export default function Experience() {
    return (
        <SectionWrapper id="experience">
            <h2 className="section-title">
                Experience<span style={{ color: "var(--accent)" }}>.</span>
            </h2>
            <p className="section-subtitle">
                Leadership &amp; teamwork in action
            </p>

            <div className="relative">
                {/* Vertical timeline line */}
                <div
                    className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px"
                    style={{ backgroundColor: "var(--border)" }}
                />

                <div className="space-y-10">
                    {experienceData.map((entry, i) => (
                        <div key={i} className="relative pl-8 md:pl-10">
                            {/* Timeline dot */}
                            <div
                                className="absolute left-0 md:left-1 top-1.5 w-[15px] h-[15px] rounded-full border-[3px] z-10"
                                style={{
                                    borderColor: i === 0 ? "var(--accent)" : "var(--border)",
                                    backgroundColor: i === 0 ? "var(--accent)" : "var(--surface)",
                                }}
                            />

                            {/* Content */}
                            <div className="card p-5 md:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                                    <h3
                                        className="text-base font-heading font-semibold"
                                        style={{ color: "var(--text-primary)" }}
                                    >
                                        {entry.role}
                                    </h3>
                                    <span
                                        className="text-xs font-mono"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        {entry.period}
                                    </span>
                                </div>
                                <p
                                    className="text-sm font-medium mb-3"
                                    style={{ color: "var(--accent-light)" }}
                                >
                                    {entry.organization}
                                </p>
                                <ul className="space-y-2">
                                    {entry.description.map((item, j) => (
                                        <li
                                            key={j}
                                            className="text-sm flex gap-2 leading-relaxed"
                                            style={{ color: "var(--text-secondary)" }}
                                        >
                                            <span
                                                className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full"
                                                style={{ backgroundColor: "var(--accent)" }}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
