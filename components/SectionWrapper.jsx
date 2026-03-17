"use client";

import { useEffect, useRef } from "react";

export default function SectionWrapper({ id, children, className = "" }) {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id={id}
            ref={ref}
            className={`section-animate py-20 md:py-28 px-6 ${className}`}
        >
            <div className="max-w-5xl mx-auto">{children}</div>
        </section>
    );
}
