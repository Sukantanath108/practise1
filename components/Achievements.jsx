"use client";

import SectionWrapper from "./SectionWrapper";
import achievementsData from "@/content/achievements.json";

export default function Achievements() {
    return (
        <SectionWrapper id="achievements">
            <h2 className="section-title">
                Achievements<span style={{ color: "var(--accent)" }}>.</span>
            </h2>
            <p className="section-subtitle">
                Recognition &amp; certifications
            </p>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Achievements */}
                <div>
                    <h3
                        className="text-sm font-semibold uppercase tracking-wider mb-6 flex items-center gap-2"
                        style={{ color: "var(--accent)" }}
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.837m0 0h.002" />
                        </svg>
                        Awards
                    </h3>
                    <div className="space-y-4">
                        {achievementsData.achievements.map((item, i) => (
                            <div key={i} className="card p-5">
                                <div className="flex items-start gap-3">
                                    <span
                                        className="mt-0.5 text-lg"
                                        style={{ color: "var(--accent)" }}
                                    >
                                        🏆
                                    </span>
                                    <div>
                                        <h4
                                            className="text-sm font-heading font-semibold mb-1"
                                            style={{ color: "var(--text-primary)" }}
                                        >
                                            {item.title}
                                        </h4>
                                        <p
                                            className="text-sm leading-relaxed mb-1"
                                            style={{ color: "var(--text-muted)" }}
                                        >
                                            {item.description}
                                        </p>
                                        <span
                                            className="text-xs font-mono"
                                            style={{ color: "var(--text-muted)" }}
                                        >
                                            {item.year}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <h3
                        className="text-sm font-semibold uppercase tracking-wider mb-6 flex items-center gap-2"
                        style={{ color: "var(--accent)" }}
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                        Certifications
                    </h3>
                    <div className="space-y-4">
                        {achievementsData.certifications.map((cert, i) => (
                            <div key={i} className="card p-5">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: "var(--accent-glow)",
                                            border: "1px solid var(--accent)",
                                        }}
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={1.5}
                                            style={{ color: "var(--accent-light)" }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4
                                            className="text-sm font-heading font-semibold mb-1"
                                            style={{ color: "var(--text-primary)" }}
                                        >
                                            {cert.title}
                                        </h4>
                                        <p
                                            className="text-xs mb-1"
                                            style={{ color: "var(--accent-light)" }}
                                        >
                                            {cert.issuer}
                                        </p>
                                        <p
                                            className="text-sm leading-relaxed mb-1"
                                            style={{ color: "var(--text-muted)" }}
                                        >
                                            {cert.description}
                                        </p>
                                        <span
                                            className="text-xs font-mono"
                                            style={{ color: "var(--text-muted)" }}
                                        >
                                            {cert.year}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
