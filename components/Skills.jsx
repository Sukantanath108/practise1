"use client";

import SectionWrapper from "./SectionWrapper";
import skillsData from "@/content/skills.json";

export default function Skills() {
    return (
        <SectionWrapper id="skills">
            <h2 className="section-title">
                Skills<span style={{ color: "var(--accent)" }}>.</span>
            </h2>
            <p className="section-subtitle">
                Technologies &amp; tools I work with
            </p>

            {/* Highlight skills (AI/ML, Programming) */}
            <div className="space-y-8 mb-10">
                {skillsData.highlight.map((group) => (
                    <div key={group.category}>
                        <h3
                            className="text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2"
                            style={{ color: "var(--accent)" }}
                        >
                            <span
                                className="w-8 h-px"
                                style={{ backgroundColor: "var(--accent)" }}
                            />
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="skill-chip-accent cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Supporting skills */}
            <div className="space-y-8 mb-10">
                {skillsData.supporting.map((group) => (
                    <div key={group.category}>
                        <h3
                            className="text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2"
                            style={{ color: "var(--text-muted)" }}
                        >
                            <span
                                className="w-8 h-px"
                                style={{ backgroundColor: "var(--border)" }}
                            />
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {group.skills.map((skill) => (
                                <span key={skill} className="skill-chip cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Other skills */}
            {skillsData.other && skillsData.other.length > 0 && (
                <div>
                    <h3
                        className="text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2"
                        style={{ color: "var(--text-muted)" }}
                    >
                        <span
                            className="w-8 h-px"
                            style={{ backgroundColor: "var(--border)" }}
                        />
                        Also familiar with
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {skillsData.other.map((skill) => (
                            <span
                                key={skill}
                                className="text-sm px-3 py-1.5 rounded-lg cursor-default"
                                style={{ color: "var(--text-muted)" }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </SectionWrapper>
    );
}
