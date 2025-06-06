import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/tahmidcoder",
      icon: "{ GitHub }",
      color: "cyber-blue",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tahmid",
      icon: "{ LinkedIn }",
      color: "cyber-purple",
    },
    {
      name: "Email",
      url: "mailto:mdtahmid0003@gmail.com",
      icon: "{ Email }",
      color: "cyber-green",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">{"{ ESTABLISH_CONNECTION }"}</h2>
          <p className="text-gray-400 font-mono text-lg">
            Ready to collaborate? Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glow-border rounded-lg p-8 bg-cyber-dark/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-cyber-blue mb-6 font-mono neon-text">
              {"> SEND_MESSAGE()"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label className="block text-cyber-green font-mono text-sm mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-cyber-dark/50 border rounded-lg px-4 py-3 text-white font-mono transition-all duration-300 ${
                    focusedField === "name"
                      ? "border-cyber-blue shadow-neon-blue"
                      : "border-gray-600 hover:border-cyber-blue/50"
                  }`}
                  placeholder="Enter your name..."
                  required
                />
              </div>

              <div className="relative">
                <label className="block text-cyber-green font-mono text-sm mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-cyber-dark/50 border rounded-lg px-4 py-3 text-white font-mono transition-all duration-300 ${
                    focusedField === "email"
                      ? "border-cyber-blue shadow-neon-blue"
                      : "border-gray-600 hover:border-cyber-blue/50"
                  }`}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="relative">
                <label className="block text-cyber-green font-mono text-sm mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  className={`w-full bg-cyber-dark/50 border rounded-lg px-4 py-3 text-white font-mono transition-all duration-300 resize-none ${
                    focusedField === "message"
                      ? "border-cyber-blue shadow-neon-blue"
                      : "border-gray-600 hover:border-cyber-blue/50"
                  }`}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full cyber-button group flex items-center justify-center"
              >
                <span className="mr-2">Deploy Message</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glow-border rounded-lg p-8 bg-cyber-dark/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyber-purple mb-6 font-mono neon-text">
                {"> CONNECT_SOCIALLY()"}
              </h3>

              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-4 border border-${
                      link.color
                    }/30 rounded-lg hover:border-${
                      link.color
                    } hover:shadow-neon-${
                      link.color.split("-")[1]
                    } transition-all duration-300 group`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4
                          className={`text-${link.color} font-mono font-bold group-hover:neon-text`}
                        >
                          {link.icon}
                        </h4>
                        <p className="text-gray-400 text-sm mt-1">
                          {link.name}
                        </p>
                      </div>
                      <ArrowRight
                        className={`w-5 h-5 text-${link.color} transition-transform group-hover:translate-x-1`}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glow-border rounded-lg p-8 bg-cyber-dark/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyber-green mb-6 font-mono neon-text">
                {"> AI_ASSISTANT()"}
              </h3>
              <p className="text-gray-300 mb-4 font-mono text-sm">
                Want to experience my AI integration skills? My intelligent
                assistant is coming soon to help answer your questions and
                showcase my AI capabilities.
              </p>
              <button className="cyber-button border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black hover:shadow-neon-green opacity-50 cursor-not-allowed">
                Coming Soon...
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
