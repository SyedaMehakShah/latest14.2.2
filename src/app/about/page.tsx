// pages/about.js

import '../styles/about.css';

export default function About() {
  return (
    <div className="aboutSection">
      <div className="container">
        <h1 className="title">About Me</h1>
        <p className="description hoverEffect">
          I’m a frontend web developer with a strong focus on crafting responsive, user-friendly websites and web applications. I specialize in modern web technologies like HTML, CSS, JavaScript, and TypeScript, and I’m experienced with frameworks like Next.js and styling tools like Tailwind CSS. With a keen eye for detail and a love for clean, efficient code, I strive to create digital experiences that not only look great but are easy to use and accessible on all devices.
        </p>
        <h2 className="title">Skills</h2>
        <ul className="skillsList">
          <li className="hoverEffect">HTML</li>
          <li className="hoverEffect">CSS</li>
          <li className="hoverEffect">JavaScript</li>
          <li className="hoverEffect">TypeScript</li>
          <li className="hoverEffect">Next.js</li>
          <li className="hoverEffect">Tailwind CSS</li>
        </ul>
        <h2 className="title">Experience</h2>
        <p className="description hoverEffect">
          Frontend Web Developer (Personal Projects) - Self-Employed
        </p>
      </div>
    </div>
  );
}
