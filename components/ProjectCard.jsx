"use client";

import { useState } from "react";

export default function ProjectCard({ project, featured = false }) {
    const [expanded, setExpanded] = useState(false);

    if (featured) {
        return (
            <div className="card p-6 md:p-8 relative overflow-hidden">
                {/* Status badge */}
                <div className="flex items-center gap-3 mb-4">
                    <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${project.status === "Active"
                                ? "text-emerald-400"
                                : "text-blue-400"
                            }`}
                        style={{
                            backgroundColor:
                                project.status === "Active"
                                    ? "rgba(34,197,94,0.1)"
                                    : "rgba(59,130,246,0.1)",
                            border: `1px solid ${project.status === "Active"
                                    ? "rgba(34,197,94,0.3)"
                                    : "rgba(59,130,246,0.3)"
                                }`,
                        }}
                    >
                        <span
                            className={`w-1.5 h-1.5 rounded-full ${project.status === "Active" ? "animate-pulse bg-emerald-400" : "bg-blue-400"
                                }`}
                        />
                        {project.status}
                    </span>
                    <span
                        className="text-xs font-mono"
                        style={{ color: "var(--text-muted)" }}
                    >
                        {project.period}
                    </span>
                </div>

                {/* Title */}
                <h3
                    className="text-xl md:text-2xl font-heading font-bold mb-3"
                    style={{ color: "var(--text-primary)" }}
                >
                    {project.title}
                </h3>

                {/* Problem */}
                <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "var(--text-secondary)" }}
                >
                    {project.problem}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="skill-chip-accent">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Expandable details */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-sm font-medium transition-all duration-200 inline-flex items-center gap-1"
                    style={{ color: "var(--accent)" }}
                >
                    {expanded ? "Show less" : "Show details"}
                    <svg
                        className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""
                            }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                <div
                    className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-[600px] opacity-100 mt-5" : "max-h-0 opacity-0"
                        }`}
                >
                    {/* What I built */}
                    <div className="mb-4">
                        <h4
                            className="text-sm font-semibold mb-2 uppercase tracking-wider"
                            style={{ color: "var(--text-muted)" }}
                        >
                            What I Built
                        </h4>
                        <ul className="space-y-2">
                            {project.built.map((item, i) => (
                                <li
                                    key={i}
                                    className="text-sm flex gap-2"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    <span style={{ color: "var(--accent)" }}>▸</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Results */}
                    <div className="mb-4">
                        <h4
                            className="text-sm font-semibold mb-2 uppercase tracking-wider"
                            style={{ color: "var(--text-muted)" }}
                        >
                            Key Results
                        </h4>
                        <ul className="space-y-2">
                            {project.results.map((item, i) => (
                                <li
                                    key={i}
                                    className="text-sm flex gap-2"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    <span style={{ color: "var(--accent)" }}>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Alignment */}
                    <p
                        className="text-xs italic p-3 rounded-lg"
                        style={{
                            backgroundColor: "var(--accent-glow)",
                            color: "var(--text-muted)",
                        }}
                    >
                        💡 {project.alignment}
                    </p>
                </div>

                {/* Links */}
                {(project.github || project.demo) && (
                    <div className="flex gap-3 mt-4">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline text-xs px-4 py-2"
                            >
                                GitHub →
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-accent text-xs px-4 py-2"
                            >
                                Live Demo →
                            </a>
                        )}
                    </div>
                )}
            </div>
        );
    }

    // Non-featured / smaller card
    return (
        <div className="card p-5 relative overflow-hidden">
            {project.placeholder && (
                <span className="placeholder-badge mb-3">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Coming Soon
                </span>
            )}
            <h3
                className="text-base font-heading font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
            >
                {project.title}
            </h3>
            <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-muted)" }}
            >
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                    <span key={tech} className="skill-chip text-xs">
                        {tech}
                    </span>
                ))}
            </div>
            <span
                className="text-xs font-mono"
                style={{ color: "var(--text-muted)" }}
            >
                {project.period}
            </span>
        </div>
    );
}
