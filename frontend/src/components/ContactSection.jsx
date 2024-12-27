import axios from "axios";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", formData);
      setModalMessage("Message sent successfully!");
      setIsModalOpen(true);
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error sending message:", error);
      setModalMessage("Failed to send message. Please try again.");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="contact" className="bg-[#FFDBD0] py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
            Connect with me!
          </h2>
          <form onSubmit={handleSubmit}>
            <label className="block text-gray-600 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mb-4 border-b-2 border-gray-400 focus:outline-none focus:border-[#1A1A1A]"
              placeholder="Your Name"
            />
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mb-4 border-b-2 border-gray-400 focus:outline-none focus:border-[#1A1A1A]"
              placeholder="example@email.com"
            />
            <label className="block text-gray-600 mb-2">Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mb-6 border-b-2 border-gray-400 focus:outline-none focus:border-[#1A1A1A]"
              placeholder="Write your message here..."
            ></textarea>
            <button
              type="submit"
              className="bg-[#C4E7E1] text-[#252525] font-bold px-6 py-3 border-2 border-black rounded-lg"
            >
              Send &nbsp; →
            </button>
          </form>
        </div>
        <div>
          <p className="text-gray-700 mb-4">
            Let’s connect and create something impactful one line of code at a
            time!
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white text-[#1A1A1A] p-6 rounded-lg shadow-[0_4px_8px_0_rgba(0,0,0,1)]"
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">Notification</h3>
            <p className="mb-4">{modalMessage}</p>
            <button
              className="bg-[#FFDBD0] text-[#1A1A1A] px-4 py-2 font-bold border-2 border-black rounded-lg hover:bg-[#C4E7E1] transition-all"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
