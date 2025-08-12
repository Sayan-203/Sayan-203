
---

## 2) `App.tsx` — React + Tailwind preview (place in `web/src/App.tsx`)

This is a standalone React (TypeScript) component that mirrors the README look and adds animations. Use Vite + React + Tailwind to run it locally or host it.

Create a Vite + React + TypeScript project and install Tailwind (I’ll give commands below). Put this file at `web/src/App.tsx`.

```tsx
import React from "react";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-8 px-4">
      <div className="max-w-6xl mx-auto text-white">
        <div className="text-center mb-8">
          <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-sm">
            📄 GitHub Profile README Preview
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl shadow-2xl p-8 markdown-body backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                👋 Hi, I'm Sayan Samanta
              </h1>
              <p className="text-gray-300 text-lg">
                🚀 AI/ML Engineer • 💻 Web Developer • 🎓 Final Year B.Tech CSE
              </p>
            </div>

            <div className="w-48 h-48 hidden md:flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-spin-slow"></div>
              <div className="relative z-10 w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-5xl animate-bounce">🤖</span>
              </div>
            </div>
          </div>

          {/* About */}
          <section className="mb-8">
            <div className="inline-block bg-gray-900 text-green-300 px-4 py-2 rounded-lg font-mono">
              $ ./deploy_ai_solutions.sh
            </div>
            <div className="mt-4 bg-gradient-to-r from-blue-50/40 to-purple-50/30 p-4 rounded-lg border-l-4 border-blue-400">
              <p className="text-gray-200">
                Final-year B.Tech student (KIIT). I build Deep Learning models (YOLOv8, EfficientNet) and
                full-stack apps (React + Node). Check my projects and connect below.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Python","TensorFlow","PyTorch","YOLOv8","React","Node.js","TailwindCSS","Docker","MySQL"
              ].map((s) => (
                <span key={s} className="px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-medium shadow-lg">
                  {s}
                </span>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-pink-300 mb-3">Featured Projects</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-200">
              <li>
                <a className="underline hover:text-yellow-300" href="https://github.com/SAYANsamanta2003/ChatBLOG" target="_blank" rel="noreferrer">ChatBlogs</a> — LLaMA2 + LangChain blog generator (Streamlit)
              </li>
              <li>
                <a className="underline hover:text-yellow-300" href="https://github.com/SAYANsamanta2003/car_rental_system" target="_blank" rel="noreferrer">Car Rental System</a> — Java OOP
              </li>
              <li>
                <a className="underline hover:text-yellow-300" href="https://github.com/SAYANsamanta2003/Underwater-Object-Detection-Using-Deep-Learning-Techniques" target="_blank" rel="noreferrer">Underwater Object Detection</a> — YOLOv8 model
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="text-center mt-8">
            <h3 className="text-lg font-semibold text-purple-300 mb-3">Let's Connect</h3>
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/sayan310/" className="px-4 py-2 bg-blue-600 rounded-lg">LinkedIn</a>
              <a href="mailto:samanta2003sayan@gmail.com" className="px-4 py-2 bg-gray-800 rounded-lg">Email</a>
              <a href="https://github.com/Sayan-203" className="px-4 py-2 bg-purple-600 rounded-lg">GitHub</a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
