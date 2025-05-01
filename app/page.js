'use client';

import React, { useEffect, useRef } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import './home.css';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  const faceRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const face = faceRef.current;
      if (!face) return;

      const { left, top, width, height } = face.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);

      const angle = Math.atan2(y, x) * (180 / Math.PI);
      face.style.transform = `rotate(${angle}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <img
            src="/face.png"
            alt="Face"
            ref={faceRef}
            className="face-img"
          />
          <h1 className="fade-in">Hi, I'm <span className="highlight">Shubham Solanki</span></h1>
          <p className="fade-in delay-1">A passionate Web Developer & Designer</p>
        </div>
      </section>

      <section className="important-links">
        <h2>Important Links</h2>
        <div className="links-grid">
          <a href="https://github.com/iamshubham1704" target="_blank" rel="noopener noreferrer" className="link-card">GitHub</a>
          <a href="https://linkedin.com/in/shubham-solanki-902331321" target="_blank" rel="noopener noreferrer" className="link-card">LinkedIn</a>
        </div>
      </section>

      <section className="projects">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/project1.png" alt="Project 1" className="project-img" />
            <div className="project-info">
              <h3>Stock Market Analyser</h3>
              <p>●Full stack Project : Next js , css , API
                ●Fetching Graphs of Stocks using API and providing Trends. There is also a AI assistant Stocky for any stock market related Query.
              </p>
              <a href="https://github.com/iamshubham1704/stock-market-analyser" target="_blank" className="project-link">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <img src="/project2.jpg" alt="Project 2" className="project-img" />
            <div className="project-info">
              <h3>URL - Shortener</h3>
              <p> ● Full stack Project : Next js , tailwind , mongodb , express
                ● Gives a short URL of your long URL in a customized way</p>
              <a href="https://github.com/iamshubham1704/Url-shortner" target="_blank" className="project-link">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <img src="/project3.png" alt="Project 2" className="project-img" />
            <div className="project-info">
              <h3>Resume-Builder</h3>
              <p> ● Full stack Project : Next js, CSS , mongodb , express
                ● Use of Next Auth for Authentication. AI powered resume making by providing Details of yours</p>
              <a href="https://github.com/iamshubham1704/Resume-Builder" target="_blank" className="project-link">View Project</a>
            </div>
          </div>

        </div>
      </section>
      <section className="experience">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-date">Jan 2025 – Present</div>
            <div className="experience-content">
              <h3>Founder</h3>
              <h4>Coencers</h4>
              <p>A platform which builds connections between Companies and Influencers.</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">Aug 2024 – Present</div>
            <div className="experience-content">
              <h3>Member</h3>
              <h4>Startup Shpere</h4>
              <p>Won HackwithMait Hackathon.</p>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-date">April 2025 – Present</div>
            <div className="experience-content">
              <h3>ISP</h3>
              <h4>Internshala</h4>

            </div>
          </div>
        </div>
      </section>
      <section className="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <img src="/html.png" alt="HTML" />
            <span>HTML</span>
          </div>
          <div className="skill-card">
            <img src="/css.png" alt="CSS" />
            <span>CSS</span>
          </div>
          <div className="skill-card">
            <img src="/js.png" alt="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div className="skill-card">
            <img src="/react.png" alt="React" />
            <span>React</span>
          </div>
          <div className="skill-card">
            <img src="/nextjs.png" alt="Next.js" />
            <span>Next.js</span>
          </div>
          <div className="skill-card">
            <img src="/mongo.png" alt="MongoDB" />
            <span>MongoDB</span>
          </div>
        </div>
      </section>

<Footer/>
    </div>
  );
}


