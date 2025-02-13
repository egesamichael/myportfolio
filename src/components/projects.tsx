import React from "react";

const projects = [
  {
    title: "Smarthire App",
    description: "A mobile app that provides services like MEP, Transport with payment integrations.",
    category: "App",
    technologies: ["React", "Expo", "Firebase"],
    link: "#", // Replace with the actual link
  },
  {
    title: "Dr Ezzy App",
    description: "A mobile app that enables users find Health information easily.",
    category: "App",
    technologies: ["React Native", "Expo"],
    link: "https://play.google.com/store/apps/details?id=com.praisewebsolutions.drezzy&hl=en", // Replace with the actual link
  },
  {
    title: "PrEP Uganda App",
    description: "A mobile app that allows users to find PrEP Centers easily.",
    category: "App",
    technologies: ["React Native", "Expo"],
    link: "https://play.google.com/store/apps/details?id=com.praisewebsolutions.prepugandaapp&hl=en", // Replace with the actual link
  },
  {
    title: "WhatsApp Chatbot",
    description: "A WhatsApp chatbot for automating customer interactions and payment requests.",
    category: "App",
    technologies: ["Node.js", "Express", "GitHub"],
    link: "https://github.com/yourusername/whatsapp-chatbot", // Replace with the actual link
  },
//   {
//     title: "React Chatbot SDK",
//     description: "A React SDK for integrating WhatsApp chatbot into websites.",
//     category: "Library",
//     technologies: ["React", "GitHub"],
//     link: "https://github.com/yourusername/react-chatbot-sdk", // Replace with the actual link
//   },
//   {
//     title: "Next.js CMS",
//     description: "A headless CMS built with Next.js for content management.",
//     category: "Library",
//     technologies: ["Next.js", "Node.js", "MongoDB"],
//     link: "https://github.com/yourusername/nextjs-cms", // Replace with the actual link
//   },
  {
    title: "momo-payment-lib",
    description: "A library for integrating Momo payment services.",
    category: "Library",
    technologies: ["Node.js"],
    link: "https://www.npmjs.com/package/momo-payment-lib",
  },
  {
    title: "ug-domain-checker",
    description: "A library for checking the availability of .ug domain names.",
    category: "Library",
    technologies: ["Node.js"],
    link: "https://www.npmjs.com/package/ug-domain-checker",
  },
];

export default function ProjectsSection() {
  return (
    <section className="mx-auto bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">My Projects</h2>
        </div>

        {/* Project Categories */}
        <div className="space-y-12">
          {/* Apps Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Apps</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === "App")
                .map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105"
                  >
                    <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                    <p className="text-gray-500 mt-2">
                      <strong>Technologies Used: </strong>
                      {project.technologies.join(", ")}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500 mt-4 inline-block"
                    >
                      View Project
                    </a>
                  </div>
                ))}
            </div>
          </div>

          {/* Libraries Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Libraries</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === "Library")
                .map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105"
                  >
                    <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                    <p className="text-gray-500 mt-2">
                      <strong>Technologies Used: </strong>
                      {project.technologies.join(", ")}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500 mt-4 inline-block"
                    >
                      View Project
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}