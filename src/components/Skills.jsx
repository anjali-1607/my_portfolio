import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Skills = () => {
    const initialSkills = [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "💻" },
        { name: "React.js", icon: "⚛️" },
        { name: "Tailwind CSS", icon: "🌀" },
        { name: "Python", icon: "🐍" },
        { name: "C++", icon: "🔧" },
        { name: "SQL", icon: "📊" },
        { name: "GitHub", icon: "🐙" },
        { name: "UI/UX", icon: "🎨" },
        { name: "Responsive Design", icon: "📱" },
        { name: "Canva", icon: "🖌️" },
        { name: "Figma", icon: "📐" },
        { name: "Chat GPT", icon: "🤖" },
        { name: "Semantic UI", icon: "🌈" },
        { name: "Bootstrap", icon: "📦" },
        { name: "AWS", icon: "☁️" },
        { name: "Problem Solving", icon: "🧠" },
        { name: "Postman", icon: "📮" },
        { name: "Lighthouse", icon: "💡" },
    ];

    const [skills, setSkills] = useState(initialSkills);

    // Shuffle skills periodically
    useEffect(() => {
        const interval = setInterval(() => {
            setSkills((prevSkills) => {
                const shuffledSkills = [...prevSkills];
                for (let i = shuffledSkills.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffledSkills[i], shuffledSkills[j]] = [
                        shuffledSkills[j],
                        shuffledSkills[i],
                    ];
                }
                return shuffledSkills;
            });
        }, 2000); // Change position every 2 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <section
            id="skills"
            className="bg-dark py-16 px-6 sm:px-12 md:px-20 lg:px-36">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
                My Skills
            </h2>
            <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                transition={{ type: "spring", stiffness: 50 }}>
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        layout
                        className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl mb-4">{skill.icon}</div>
                        <p className="text-lg font-semibold text-light">
                            {skill.name}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
