// src/components/ContactForm.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        message: "",
    });

    const [status, setStatus] = useState({
        loading: false,
        success: null,
        error: null,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null, error: null });

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Add current_year to formData
        const data = {
            ...formData,
            current_year: new Date().getFullYear(),
        };

        emailjs.send(serviceID, templateID, data, publicKey).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                setStatus({
                    loading: false,
                    success: "Message sent successfully!",
                    error: null,
                });
                setFormData({ from_name: "", from_email: "", message: "" });
            },
            (err) => {
                console.error("FAILED...", err);
                setStatus({
                    loading: false,
                    success: null,
                    error: "Failed to send message. Please try again later.",
                });
            }
        );
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label
                    htmlFor="from_name"
                    className="block text-lg font-medium mb-1">
                    Name
                </label>
                <input
                    type="text"
                    name="from_name"
                    id="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-secondary text-light focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                />
            </div>
            <div>
                <label
                    htmlFor="from_email"
                    className="block text-lg font-medium mb-1">
                    Email
                </label>
                <input
                    type="email"
                    name="from_email"
                    id="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-secondary text-light focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Email"
                />
            </div>
            <div>
                <label
                    htmlFor="message"
                    className="block text-lg font-medium mb-1">
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-secondary text-light focus:outline-none focus:ring-2 focus:ring-primary"
                    rows="5"
                    placeholder="Your Message"></textarea>
            </div>
            <div>
                <button
                    type="submit"
                    className={`w-full px-4 py-2 rounded-md bg-primary text-dark font-semibold hover:bg-secondary transition-colors duration-300 ${
                        status.loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={status.loading}>
                    {status.loading ? "Sending..." : "Send Message"}
                </button>
            </div>
            {status.success && (
                <p className="text-green-500 text-center">{status.success}</p>
            )}
            {status.error && (
                <p className="text-red-500 text-center">{status.error}</p>
            )}
        </form>
    );
};

export default ContactForm;
