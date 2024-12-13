import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

// Import company logos
import CufrontLogo from "../assets/logos/cufront.png";
import EasyCRMLogo from "../assets/logos/easycrm.jpg";
import HelpyMotoLogo from "../assets/logos/helpymoto.jpg";

const experiences = [
    {
        title: "Software Engineer Intern",
        company: "Cufront Healthcare, Nashik, India",
        duration: "June 2024 - Sept 2024",
        logo: CufrontLogo,
        responsibilities: [
            "Developed multilingual functionality for dynamic language switching in React applications.",
            "Improved load times by 30% through lazy loading and performance optimizations.",
            "Integrated an AI-driven chatbot via third-party APIs, boosting user engagement.",
            "Collaborated cross-functionally for seamless doctor and patient portal integration.",
        ],
    },
    {
        title: "Frontend Developer Intern",
        company: "EasyCRM, Bangalore, India",
        duration: "Mar 2024 - Jun 2024",
        logo: EasyCRMLogo,
        responsibilities: [
            "Built dynamic, visually appealing Vue.js components for a jobs platform.",
            "Optimized UI/UX for job seekers and employers, enhancing overall satisfaction.",
        ],
    },
    {
        title: "Graphic Designer Intern",
        company: "HelpyMoto, Delhi, India",
        duration: "Nov 2022 - Feb 2023",
        logo: HelpyMotoLogo,
        responsibilities: [
            "Created engaging social media content, increasing brand reach by 15%.",
            "Refined visual identity, supporting stronger marketing efforts.",
        ],
    },
];

const Experience = () => {
    return (
        <motion.section
            id="experience"
            className="bg-dark text-light pb-20 lg:pt-16 px-6 sm:px-12 md:px-20 lg:px-36"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
                    Work Experience
                </h2>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="relative group bg-gradient-to-r from-secondary to-dark rounded-lg p-6 shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.2, // Staggered animation for each card
                        }}
                        viewport={{ once: true }}>
                        {/* Background Element */}
                        <div className="absolute inset-0 bg-primary/10 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>

                        {/* Logo */}
                        <div className="z-10 relative flex justify-center mb-6">
                            <img
                                src={exp.logo}
                                alt={`${exp.company} Logo`}
                                className="w-20 h-20 object-contain rounded-full shadow-md transform group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        {/* Title & Company */}
                        <div className="z-10 relative text-center mb-4">
                            <div className="flex justify-center items-center mb-2">
                                <FaBriefcase className="text-primary text-2xl mr-2" />
                                <h3 className="text-xl font-semibold text-primary">
                                    {exp.title}
                                </h3>
                            </div>
                            <p className="text-md font-medium text-light">
                                {exp.company}
                            </p>
                            <p className="text-sm text-light italic">
                                {exp.duration}
                            </p>
                        </div>

                        {/* Responsibilities */}
                        <ul className="z-10 relative list-disc list-inside space-y-2 text-sm text-light leading-relaxed">
                            {exp.responsibilities.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Experience;
