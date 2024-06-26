"use client"
import s from './page.module.css'
import { GithubIcon, LinkInIcon } from '@/components/icon'
import Experience from "@/components/experience/Experience"
import Project from '@/components/projects/Project'
import { useEffect, useState } from 'react'
import useWindowSize from "@/utilities/useWindowSize"
import SubTitle from '@/components/SubTitle'

export default function Home() {

    const [mouse, setMouse] = useState({ x: 0, y: 0 })
    const [scrollSection, setScrollSection] = useState("about");

    const { width } = useWindowSize()

    useEffect(() => {

        const handleScroll = () => {
            const position = window.scrollY;
            if (position === 0) {
                setScrollSection("about")
            } else if (position >= 529 && position < 600) {
                setScrollSection("experience")
            } else if (position >= 600) {
                setScrollSection("projects")
            }
        };

        const handleMousemove = (event) => {
            setMouse({
                x: event.clientX,
                y: event.clientY
            })
        };

        addEventListener("mousemove", handleMousemove);
        addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            removeEventListener("mousemove", handleMousemove)
            removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <main className={s.main}>
            <div className={s.mouseAnimation} style={{ background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(29, 78, 216, 0.15), transparent 80%)` }} />
            <div className={s.stickyRow} >
                <div>
                    <h1 className={s.title}>Arthur Hui</h1>
                    <SubTitle />
                    <h4 className={s.shortDescription}>I build accessible, inclusive products and digital experiences for the web.</h4>
                    {width > 1024 && (
                        <div className={s.sectionList}>
                            <a
                                className={scrollSection === "about" ? s.scrolledSectionItem : s.sectionItem}
                                href='#about'
                            >
                                <div className={s.line} />
                                <div>ABOUT</div>
                            </a>
                            <a
                                className={scrollSection === "experience" ? s.scrolledSectionItem : s.sectionItem}
                                href='#experience'
                            >
                                <div className={s.line} />
                                <div>EXPERIENCE</div>
                            </a>
                            <a
                                className={scrollSection === "projects" ? s.scrolledSectionItem : s.sectionItem}
                                href='#projects'
                            >
                                <div className={s.line} />
                                <div>PROJECTS</div>
                            </a>
                        </div>
                    )}
                </div>
                <div className={s.contentList}>
                    <a href='https://github.com/arthurHui' target='_blank' >
                        <GithubIcon fill="#94A3B8" className={s.icon} />
                    </a>
                    <a href='https://www.linkedin.com/in/hung-chak-hui-111917233/' target='_blank'>
                        <LinkInIcon fill="#94A3B8" className={s.icon} />
                    </a>
                </div>
            </div>
            <div className={s.row}>
                <section id='about' className={s.section}>
                    {width <= 1024 && (
                        <div className={s.sectionTitle}>About</div>
                    )}
                    <div className={s.description}>
                        Hello and welcome to my portfolio website! I am Arthur, and I am a passionate.
                    </div>
                    <div className={s.description}>
                        Throughout my journey as a developer, I have acquired a deep understanding of both front-end and back-end development, allowing me to create seamless and robust solutions. I thoroughly enjoy the process of transforming ideas into functional and visually appealing websites, and I constantly strive to stay up-to-date with the latest trends and technologies in the industry.
                    </div>
                    <div className={s.description}>
                        I am excited to showcase my projects and share my passion for web development through this portfolio website. Feel free to explore my work and get in touch with me for any inquiries or collaboration opportunities. Thank you for visiting, and I look forward to connecting with you soon!
                    </div>
                </section>
                <section id='experience' className={s.section}>
                    {width <= 1024 && (
                        <div className={s.sectionTitle}>Experience</div>
                    )}
                    <Experience
                        isEnabledHover={width > 1024}
                    />
                </section>
                <section id='projects' className={s.section}>
                    {width <= 1024 && (
                        <div className={s.sectionTitle}>Projects</div>
                    )}
                    <Project
                        isEnabledHover={width > 1024}
                    />
                </section>
                <section className={s.section}>
                    <div className={`${s.description} ${s.projectDesign}`}>Coded in Visual Studio Code by yours truly. Built with Next.js and CSS, deployed with Vercel. All text is set in the Inter typeface.</div>
                </section>
            </div>
        </main>
    )
}
