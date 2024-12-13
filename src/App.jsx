import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const App = () => {
    return (
        <div className="bg-dark text-light font-sans min-h-screen">
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
            </main>
            <Footer />
        </div>
    );
};

export default App;
