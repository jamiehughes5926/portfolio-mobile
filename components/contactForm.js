import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-1/2 p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-1/2 p-2 border border-gray-300 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        rows="5"
        required
      ></textarea>
      <button
        type="submit"
        className="w-1/3 p-2  text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Send Message
      </button>
      <div className="text-center">{status && <p>{status}</p>}</div>
    </form>
  );
};

export default ContactForm;
