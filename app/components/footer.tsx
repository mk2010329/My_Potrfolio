"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Check for empty fields (extra safety beyond "required")
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("All fields are required ❌");
      return;
    }

    setStatus("Sending...");
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("https://formsubmit.co/ajax/613f19f6fa4de4676a1e7f43634cde19", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent! ✅");
        setFormData({ name: "", email: "", message: "" });
        setSuccess(true);
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (error) {
      setStatus("Error sending message ❌");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Reset form back after 3 seconds of success
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <footer className="py-12 px-6" style={{ backgroundColor: "#001845" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col justify-between text-white">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
            <p className="mb-2">WhatsApp: +974-55787624</p>
            <p>Email: hassamtk@gmail.com</p>
          </div>
          <p className="text-gray-300 text-sm mt-auto">
            © {new Date().getFullYear()} MHTK. All rights reserved.
          </p>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-white">Send Me a Message</h2>

          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-lg text-gray-900 bg-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-lg text-gray-900 bg-white"
                />
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full h-40 p-4 rounded-lg text-gray-900 bg-white"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-3 rounded-lg font-semibold self-start transition-colors ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-300 hover:bg-blue-400"
                  }`}
                >
                  {loading ? "Sending..." : "Send"}
                </button>

                {status && (
                  <motion.p
                    key="status"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 font-medium"
                  >
                    {status}
                  </motion.p>
                )}
              </motion.form>
            ) :  (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center text-green-400"
            >
              {/* ✅ Pulsing Check */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-6xl mb-2"
              >
                ✅
              </motion.div>

              {/* Pulsing Text */}
              <motion.p
                animate={{ opacity: [1, 0.6, 1], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-lg font-semibold"
              >
                {status}
              </motion.p>
            </motion.div>
          )}

                    </AnimatePresence>
                  </div>
                </div>
              </footer>
            );
}
