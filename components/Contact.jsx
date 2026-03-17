"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import siteData from "@/content/site.json";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Frontend-only — no backend
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <SectionWrapper id="contact">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Left — info */}
                <div>
                    <h2 className="section-title">
                        Get in Touch<span style={{ color: "var(--accent)" }}>.</span>
                    </h2>
                    <p className="section-subtitle">
                        Let&apos;s discuss research, collaboration, or opportunities
                    </p>

                    <div className="space-y-5 mt-8">
                        {/* Email */}
                        <a
                            href={`mailto:${siteData.contact.email}`}
                            className="card p-4 flex items-center gap-4 no-underline group"
                        >
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                                style={{
                                    background: "var(--accent-glow)",
                                    border: "1px solid var(--accent)",
                                }}
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: "var(--accent-light)" }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "var(--text-muted)" }}>Email</div>
                                <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{siteData.contact.email}</div>
                            </div>
                        </a>

                        {/* Phone */}
                        <div className="card p-4 flex items-center gap-4">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{
                                    background: "var(--accent-glow)",
                                    border: "1px solid var(--accent)",
                                }}
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: "var(--accent-light)" }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "var(--text-muted)" }}>Phone</div>
                                <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{siteData.contact.phone}</div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="card p-4 flex items-center gap-4">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{
                                    background: "var(--accent-glow)",
                                    border: "1px solid var(--accent)",
                                }}
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: "var(--accent-light)" }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "var(--text-muted)" }}>Location</div>
                                <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{siteData.contact.location}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right — form */}
                <div className="card p-6 md:p-8">
                    <h3
                        className="text-lg font-heading font-semibold mb-6"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Send a Message
                    </h3>

                    {submitted ? (
                        <div
                            className="text-center py-12 rounded-xl"
                            style={{ backgroundColor: "var(--accent-glow)" }}
                        >
                            <div className="text-4xl mb-3">✉️</div>
                            <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                                Message sent! I&apos;ll get back to you soon.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label
                                    htmlFor="contact-name"
                                    className="block text-xs uppercase tracking-wider mb-2"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    Name
                                </label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2"
                                    style={{
                                        backgroundColor: "var(--background)",
                                        border: "1px solid var(--border)",
                                        color: "var(--text-primary)",
                                        "--tw-ring-color": "var(--accent)",
                                    }}
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="contact-email"
                                    className="block text-xs uppercase tracking-wider mb-2"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    Email
                                </label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2"
                                    style={{
                                        backgroundColor: "var(--background)",
                                        border: "1px solid var(--border)",
                                        color: "var(--text-primary)",
                                        "--tw-ring-color": "var(--accent)",
                                    }}
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="block text-xs uppercase tracking-wider mb-2"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-200 focus:ring-2"
                                    style={{
                                        backgroundColor: "var(--background)",
                                        border: "1px solid var(--border)",
                                        color: "var(--text-primary)",
                                        "--tw-ring-color": "var(--accent)",
                                    }}
                                    placeholder="I'd love to discuss..."
                                />
                            </div>
                            <button type="submit" className="btn-accent w-full">
                                Send Message →
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </SectionWrapper>
    );
}
