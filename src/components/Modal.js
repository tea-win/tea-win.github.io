// src/components/Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, projects }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div
          className={`project-grid ${
            projects.length > 1 ? "project-grid-cols-2" : "project-grid-cols-1"
          }`}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card"
              style={{ backgroundImage: `url(${project.backgroundImage})` }}
            >
              <div className="project-card-inner">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-details">{project.details}</p>
                <div className="project-technologies">
                  <strong>Technologies:</strong>
                  <ul className="list-disc list-inside">
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
