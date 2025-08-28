"use client";
import { useState } from "react";

export default function Footer() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSend = async () => {
    if (!message.trim()) return;
    setStatus("Sending...");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        setStatus("Message sent! ✅");
        setMessage("");
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (error) {
      setStatus("Error sending message ❌");
    }
  };

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
          <textarea
            className="w-full h-40 p-4 rounded-lg mb-4 text-gray-900 bg-white"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={handleSend}
            className="bg-blue-300 hover:bg-blue-400 transition-colors px-6 py-3 rounded-lg font-semibold self-start"
          >
            Send
          </button>
          {status && <p className="mt-2 text-white">{status}</p>}
        </div>
      </div>
    </footer>
  );
}
