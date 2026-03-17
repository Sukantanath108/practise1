"use client";

import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import projectsData from "@/content/projects.json";

export default function Projects() {
    return (
        <SectionWrapper id="projects">
            <h2 className="section-title">
                Projects<span style={{ color: "var(--accent)" }}>.</span>
            </h2>
            <p className="section-subtitle">
                What I&apos;ve built &amp; what I&apos;m building
            </p>

            {/* Featured projects */}
            <div className="space-y-6 mb-12">
                {projectsData.featured.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        featured
                    />
                ))}
            </div>

            {/* Other projects */}
            <h3
                className="text-lg font-heading font-semibold mb-6"
                style={{ color: "var(--text-primary)" }}
            >
                Other Projects
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
                {projectsData.other.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </SectionWrapper>
    );
}
