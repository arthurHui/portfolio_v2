import Image from 'next/image'
import s from './page.module.css'
import { GithubIcon, LinkInIcon } from '@/components/icon'
import Experience from "@/components/experience/Experience"

export default function Home() {

  return (
    <main className={s.main}>
      <div className={s.stickyRow} >
        <div>
          <h1 className={s.title}>Arthur Hui</h1>
          <h2 className={s.subTitle}>Full Stask Developer</h2>
          <h4 className={s.shortDescription}>I build accessible, inclusive products and digital experiences for the web.</h4>
          <div className={s.sectionList}>
            <a
              className={s.sectionItem}
              href='#about'
            >
              <div className={s.line} />
              <div>ABOUT</div>
            </a>
            <a
              className={s.sectionItem}
              href='#experience'
            >
              <div className={s.line} />
              <div>EXPERIENCE</div>
            </a>
            <div
              className={s.sectionItem}
            >
              <div className={s.line} />
              <div>PROJECTS</div>
            </div>
          </div>
        </div>
        <div className={s.contentList}>
          <GithubIcon fill="#94A3B8" className={s.icon} />
          <LinkInIcon fill="#94A3B8" className={s.icon} />
        </div>
      </div>
      <div className={s.row}>
        <section id='about' className={s.section}>
          <div className={s.description}>
            Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.
          </div>
          <div className={s.description}>
            My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
          </div>
          <div className={s.description}>
            When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.
          </div>
        </section>
        <section id='experience' className={s.section}>
          <Experience />
        </section>
      </div>
    </main>
  )
}
