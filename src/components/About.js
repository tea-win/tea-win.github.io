// src/components/About.jsx
import { useState } from "react";
import AboutPic from "../img/about-me.jpg";
import Modal from "./Modal"; // Import the Modal component

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleRoleClick = (roleProjects) => {
    setProjects(roleProjects);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const techWriterProjects = [
    {
      title: "Technical Writer '24 (Contract) 👩‍💻📝",
      details: "@Holistics - a Self-service Business Intelligence startup",
      technologies: ["Markdown", "Docusaurus", "Git Version Control"],
      link: "https://docs.holistics.io/docs/",
    },
  ];

  const sweProjects = [
    {
      title: "MyRaveList 🪩",
      details: "A full-stack web application for managing your festival events",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "RESTful API",
        "Express.js",
        "Tailwind CSS",
        "Vercel",
      ],
      link: "https://myravelist.vercel.app/login",
    },
    {
      title: "Spotify Explore 🎵",
      details:
        "A web application for exploring Spotify and creating a grid of user's favorite album covers",
      technologies: ["React", "Spotify API", "Tailwind CSS", "Vercel"],
      link: "https://spotify-explore.vercel.app",
    },
  ];

  const djProjects = [
    {
      title: "Tech House Mixtape 🎧",
      details: "My first ever track",
      technologies: ["Pioneer DJ", "Rekordbox"],
      link: "https://soundcloud.com/teaxwin/experimental-0",
    },
    {
      title: "Techno Mixtape 🎧",
      details: "A random mixtape , with some techno stuff",
      technologies: ["Pioneer DJ", "Rekordbox"],
      link: "https://soundcloud.com/teaxwin/t-n",
    },
  ];

  return (
    <div
      className="about-container"
      style={{ backgroundImage: `url(${AboutPic})` }} // Set the background image
    >
      <div className="about-overlay">
        <h1 className="about-title">Hey, It's Thy (Tee) ✌️</h1>
        <p className="text-center mt-2">
          <span
            onClick={() => handleRoleClick(techWriterProjects)}
            className="about-role"
          >
            @technical writer
          </span>
          /
          <span
            onClick={() => handleRoleClick(sweProjects)}
            className="about-role"
          >
            @develop-software-er
          </span>
          /
          <span
            onClick={() => handleRoleClick(djProjects)}
            className="about-role"
          >
            @dj (not really)
          </span>
        </p>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} projects={projects} />
    </div>
  );
};

export default About;
