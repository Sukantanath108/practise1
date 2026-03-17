"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // IntersectionObserver for active section tracking
    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
        const observers = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setMobileOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"
                }`}
            style={{
                backgroundColor: scrolled
                    ? "var(--background)"
                    : "transparent",
                borderBottom: scrolled ? "1px solid var(--border)" : "none",
                backdropFilter: scrolled ? "blur(12px)" : "none",
            }}
        >
            <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
                {/* Logo / Name */}
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-lg font-heading font-bold transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                >
                    SN<span style={{ color: "var(--accent)" }}>.</span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className="text-sm font-medium transition-all duration-200 relative"
                            style={{
                                color:
                                    activeSection === link.href.replace("#", "")
                                        ? "var(--accent)"
                                        : "var(--text-muted)",
                            }}
                        >
                            {link.label}
                            {activeSection === link.href.replace("#", "") && (
                                <span
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                                    style={{ backgroundColor: "var(--accent)" }}
                                />
                            )}
                        </a>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile menu button */}
                <div className="flex md:hidden items-center gap-3">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all"
                        style={{
                            backgroundColor: "var(--surface)",
                            border: "1px solid var(--border)",
                        }}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-4 h-0.5 rounded transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-1" : ""
                                }`}
                            style={{ backgroundColor: "var(--text-primary)" }}
                        />
                        <span
                            className={`block w-4 h-0.5 rounded transition-all duration-200 ${mobileOpen ? "opacity-0" : ""
                                }`}
                            style={{ backgroundColor: "var(--text-primary)" }}
                        />
                        <span
                            className={`block w-4 h-0.5 rounded transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-1" : ""
                                }`}
                            style={{ backgroundColor: "var(--text-primary)" }}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div
                    className="md:hidden mt-3 mx-6 rounded-xl p-4 flex flex-col gap-3"
                    style={{
                        backgroundColor: "var(--surface)",
                        border: "1px solid var(--border)",
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className="text-sm font-medium py-2 px-3 rounded-lg transition-all duration-200"
                            style={{
                                color:
                                    activeSection === link.href.replace("#", "")
                                        ? "var(--accent)"
                                        : "var(--text-muted)",
                                backgroundColor:
                                    activeSection === link.href.replace("#", "")
                                        ? "var(--accent-glow)"
                                        : "transparent",
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
