import React from "react";
import { motion } from "framer-motion";
import ecommerceImg from "../assets/images/e-commerce.jpg";
import musicPlayerImg from "../assets/images/music-player.webp";
import chatbotImg from "../assets/images/chatbot.jpg";

const Projects = () => {
    const projects = [
        {
            title: "Ecommerce Platform",
            description:
                "Developed a fully responsive platform for footwear with CMS integration for streamlined product management.",
            link: "https://github.com/anjali-1607/ecommerce-platform",
            image: ecommerceImg,
        },
        {
            title: "Music Player",
            description:
                "Built a responsive MP3 player with HTML, CSS, and JavaScript, featuring controls for play, pause, and track navigation.",
            link: "https://github.com/anjali-1607/music-player",
            image: musicPlayerImg,
        },
        {
            title: "Healthcare Chatbot",
            description:
                "Built an AI-based chatbot for appointment scheduling and patient inquiries.",
            link: "https://github.com/anjali-1607/healthcare-chatbot",
            image: chatbotImg,
        },
    ];

    return (
        <motion.section
            id="projects"
            className="bg-dark mb-20 px-6 sm:px-12 md:px-20 lg:px-36"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
                Projects
            </h2>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2, // Stagger animation for cards
                        },
                    },
                }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="p-6 bg-secondary rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.5 }}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-light mb-2">
                            {project.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">
                            {project.description}
                        </p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline">
                            View Project
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Projects;
