import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/images/profile2.png";

const About = () => {
    return (
        <motion.section
            id="about"
            className="bg-dark px-6 sm:px-12 md:px-20 lg:px-36 sm:mt-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            <motion.div
                className="flex flex-col md:flex-row items-center md:items-start text-light p-6 bg-secondary rounded-lg shadow-lg mt-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}>
                {/* Image Section */}
                <motion.div
                    className="flex justify-center md:justify-start mb-8 md:mb-0 md:mr-16"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}>
                    <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-lg shadow-lg">
                        <img
                            src={profileImg}
                            alt="Anjali Paderiya"
                            className="w-full h-full rounded-lg object-cover border-4 border-primary shadow-md"
                        />
                        <div className="absolute top-0 left-0 w-full h-full border-4 border-primary rounded-lg opacity-50 blur-md animate-pulse"></div>
                    </div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className="text-center md:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}>
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 mt-3">
                        About Me
                    </h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                        <span className="block md:hidden">
                            Motivated CS student with a passion for intuitive
                            web development. Skilled in React.js, Tailwind CSS,
                            and responsive design. Experienced in healthcare and
                            e-commerce platforms, ensuring seamless user
                            experiences.
                        </span>
                        <span className="hidden md:block">
                            As a highly motivated Computer Science student, I am
                            passionate about crafting intuitive and visually
                            appealing web applications. With expertise in
                            React.js, Tailwind CSS, and modern frontend
                            frameworks, I have developed a deep understanding of
                            building responsive designs that enhance user
                            engagement. My hands-on experience spans healthcare
                            and e-commerce platforms, where I have optimized
                            user interfaces and implemented multilingual
                            functionality. Beyond coding, I take pride in my
                            collaborative skills, often working across teams to
                            ensure seamless project execution and delivery. With
                            a strong foundation in problem-solving and a
                            creative mindset, I aspire to contribute to projects
                            that make a meaningful impact.
                        </span>
                    </p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default About;
