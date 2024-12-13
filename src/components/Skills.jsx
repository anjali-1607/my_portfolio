import React from "react";

const Skills = () => {
    const skills = [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "💻" },
        { name: "React.js", icon: "⚛️" },
        { name: "Tailwind CSS", icon: "🌀" },
        { name: "Python", icon: "🐍" },
        { name: "C++", icon: "🔧" },
        { name: "SQL", icon: "📊" },
    ];

    return (
        <section
            id="skills"
            className="bg-dark py-16 px-6 sm:px-12 md:px-20 lg:px-36">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
                My Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
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
