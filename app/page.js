import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchInterests from "@/components/ResearchInterests";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <ResearchInterests />
            <Projects />
            <Skills />
            <Experience />
            <Education />
            <Achievements />
            <Contact />
        </>
    );
}
