import React, { useState } from "react";

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

    const [skills] = useState(initialSkills);

    return (
        <section
            id="skills"
            className="py-16 px-6 sm:px-12 md:px-20 lg:px-36 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute w-96 h-96 bg-[#38f9d6] rounded-full opacity-75 blur-3xl animate-glow top-1/4 left-1/4"></div>
                <div className="absolute w-80 h-80 bg-[#38f9d6] rounded-full opacity-75 blur-3xl animate-glow bottom-1/4 right-1/4"></div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
                My Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl mb-4">{skill.icon}</div>
                        <p className="text-lg font-semibold text-light">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
