import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-8 px-4">
      <div className="max-w-5xl mx-auto text-white">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            👋 Hi, I'm Sayan Samanta
          </h1>
          <p className="text-lg mt-2 animate-fadeIn">
            🚀 AI/ML Engineer | 💻 Web Developer | 🎓 Final Year B.Tech CSE
          </p>
        </div>

        {/* About */}
        <section className="mb-12 bg-white/10 rounded-lg p-6 backdrop-blur-lg">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">
            About Me
          </h2>
          <p className="leading-relaxed">
            Final-year B.Tech student in Computer Science with a strong foundation in AI/ML, Computer Vision, Web Development, and Data Structures. Passionate about creating deep learning applications and solving real-world problems.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-300 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Java",
              "Python",
              "SQL",
              "JavaScript",
              "HTML",
              "CSS",
              "React",
              "Node.js",
              "TensorFlow",
              "Git",
              "Pandas",
              "NumPy",
              "Matplotlib",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-300 mb-4">
            Projects
          </h2>
          <ul className="space-y-3">
            <li>
              🔹{" "}
              <a
                href="https://github.com/SAYANsamanta2003/ChatBLOG"
                className="underline hover:text-yellow-300"
              >
                ChatBlogs
              </a>{" "}
              – AI Blog generator using LLaMA 2 + LangChain + Streamlit
            </li>
            <li>
              🔹{" "}
              <a
                href="https://github.com/SAYANsamanta2003/car_rental_system"
                className="underline hover:text-yellow-300"
              >
                Car Rental System
              </a>{" "}
              – Java OOP project with rental tracking
            </li>
            <li>
              🔹{" "}
              <a
                href="https://github.com/SAYANsamanta2003/Underwater-Object-Detection-Using-Deep-Learning-Techniques"
                className="underline hover:text-yellow-300"
              >
                Underwater Object Detection
              </a>{" "}
              – YOLOv8 deep learning model for marine detection
            </li>
          </ul>
        </section>

        {/* Achievements */}
        <section className="mb-12 bg-white/10 rounded-lg p-6 backdrop-blur-lg">
          <h2 className="text-2xl font-semibold text-orange-300 mb-4">
            Achievements
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              STM32 Innovation Fair – Built autonomous robot, ranked in top 15
            </li>
            <li>
              Annual Project Expo – 1st place for Underwater Object Detection
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="text-center mt-12">
          <h2 className="text-xl font-semibold text-purple-300 mb-4">
            📫 Let's Connect
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/sayan310"
              className="hover:text-yellow-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:samanta2003sayan@gmail.com"
              className="hover:text-yellow-300"
            >
              Email
            </a>
            <a
              href="https://github.com/Sayan-203"
              className="hover:text-yellow-300"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
