import React from 'react';
import '../css/skills.css';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const skill = [
  {
    icon: <FaHtml5 size={28} />,
    title: 'HTML5',
    desc: 'I build modern, semantic, and SEO-friendly web structures using HTML5. It’s the foundation of all my web projects.',
    tags: ['Semantic Tags', 'Responsive Layout', 'SEO Friendly']
  },
  {
    icon: <FaCss3Alt size={28} />,
    title: 'CSS3 / Sass',
    desc: 'I craft professional styles with CSS and modularize styles using Sass for clean and maintainable code.',
    tags: ['Flexbox', 'Grid', 'Sass Modules']
  },
  {
    icon: <SiJavascript size={28} />,
    title: 'JavaScript',
    desc: 'With strong Vanilla JS skills, I build interactive interfaces and handle events and DOM manipulations effectively.',
    tags: ['DOM', 'Fetch API', 'ES6+']
  },
  {
    icon: <SiTypescript size={28} />,
    title: 'TypeScript',
    desc: 'I use TypeScript for writing safe, scalable, and maintainable code in large web applications.',
    tags: ['Static Typing', 'Interfaces', 'Code Safety']
  },
  {
    icon: <FaReact size={28} />,
    title: 'React.js',
    desc: 'I create fast, dynamic single-page applications with React using component-based architecture.',
    tags: ['Hooks', 'Router', 'State Management']
  },
  {
    icon: <SiTailwindcss size={28} />,
    title: 'Tailwind CSS',
    desc: 'Using Tailwind, I build responsive, customizable interfaces efficiently with a utility-first approach.',
    tags: ['Utility-First', 'Custom Theme', 'Responsive']
  },
  {
    icon: <FaNodeJs size={28} />,
    title: 'Node.js / Express',
    desc: 'I develop robust backend APIs with Node and Express, handling database interactions with MongoDB.',
    tags: ['REST API', 'Express.js', 'Middleware']
  },
  {
    icon: <SiMongodb size={28} />,
    title: 'MongoDB',
    desc: 'I design flexible and scalable NoSQL schemas using MongoDB and manage data securely and efficiently.',
    tags: ['Mongoose', 'Schema Design', 'Aggregation']
  },
  {
    icon: <FaGitAlt size={28} />,
    title: 'Git & GitHub',
    desc: 'I version my code with Git and collaborate through GitHub for better project management and tracking.',
    tags: ['Branching', 'Commit', 'GitHub Pages']
  },
  {
    icon: <FaFigma size={28} />,
    title: 'Figma',
    desc: 'I translate Figma designs into precise front-end implementations, ensuring accurate UI replication.',
    tags: ['Prototype', 'Components', 'UI Mapping']
  }
];

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <section className="services-wrapper">
        <div className="services-header">
          <h2>My Tech Stack</h2>
          <p>
            Below are the tools, languages and frameworks I use to bring modern web experiences to life.
          </p>
        </div>
        <div className="services-grid">
          {skill.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="tags">
                {service.tags.map((tag, j) => (
                  <span className="tag" key={j}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
