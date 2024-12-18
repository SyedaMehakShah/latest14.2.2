import Image from "next/image";
import myimage from "../public/emoje.jpg"
import "../styles/hero.css"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa"; // Icons for skills

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Hero Content Container */}
      <div className="hero-content">
        {/* Left side - Image */}
        <div className="hero-image">
          <Image
            src={myimage} // Replace with your image file path
            alt="Your Image"
            width={300}
            height={300}
            className="image-effect"
          />
        </div>

        {/* Right side - Text */}
        <div className="hero-text">
          <h1>Hi, I&apos;m Syeda Mehak Shah </h1>
          <p>
            I&apos;m a passionate web developer with expertise in front-end
            technologies. I craft responsive, user-friendly websites with great
            attention to detail.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-icons">
          <FaHtml5 size={50} />
          <FaCss3Alt size={50} />
          <FaJs size={50} />
          <FaReact size={50} />
          <FaNodeJs size={50} />
          <FaGitAlt size={50} />
          <FaBootstrap size={50} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
