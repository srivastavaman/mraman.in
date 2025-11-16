"use client";

import { Briefcase, BookOpen, Cpu, FileText, Layers } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const services = [
  {
    icon: <Briefcase className="w-8 h-8 text-blue-400" />,
    title: "Full Stack Web Development",
    description:
      "Building scalable, responsive websites and web applications using Next.js, Node.js, MongoDB, and more.",
    image: "/services/webdev.jpg",
    count: 30,
    suffix: "+",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-green-400" />,
    title: "School & Academic Projects",
    description:
      "Helping students with functional and visual project models, including documentation, reports, and presentations.",
    image: "/services/schoolproject.jpg",
    count: 40,
    suffix: "+",
  },
  {
    icon: <Cpu className="w-8 h-8 text-yellow-400" />,
    title: "Electronic & IoT Gadgets",
    description:
      "Prototyping smart devices using Arduino, ESP32, sensors, and microcontrollers for automation and learning.",
    image: "/services/iot.jpg",
    count: 10,
    suffix: "+",
  },
  {
    icon: <FileText className="w-8 h-8 text-purple-400" />,
    title: "Presentation & Documentation",
    description:
      "Creating polished reports, animated slides, posters, and typing service aligned with educational standards.",
    image: "/services/docs.png",
    count: 100,
    suffix: "+",
  },
  {
    icon: <Layers className="w-8 h-8 text-pink-400" />,
    title: "Custom & Miscellaneous Projects",
    description:
      "Resume sites, admin dashboards, data apps, blog systems, and more based on your unique needs.",
    image: "/services/custom.jpg",
    count: 30,
    suffix: "+",
  },
];

export default function ServicesSection() {
  const [counts, setCounts] = useState(Array(services.length).fill(0));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: services[0].title,
  });

  // Cooldown timer
  const [isDisabled, setIsDisabled] = useState(false);
  const [timer, setTimer] = useState(0);

  /* -------------------------------------------------------
     1️⃣ RESTORE COOLDOWN AFTER PAGE REFRESH
  ------------------------------------------------------- */
  useEffect(() => {
    const lastTime = localStorage.getItem("servicesFormTime");
    if (lastTime) {
      const diff = (Date.now() - parseInt(lastTime)) / 1000;
      const remaining = 120 - diff; // 120 sec = 2 minutes
      if (remaining > 0) {
        setIsDisabled(true);
        setTimer(Math.ceil(remaining));
      }
    }
  }, []);

  /* -------------------------------------------------------
     2️⃣ TIMER COUNTDOWN
  ------------------------------------------------------- */
  useEffect(() => {
    if (timer > 0) {
      const t = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      if (timer === 1) {
        setIsDisabled(false);
      }

      return () => clearInterval(t);
    }
  }, [timer]);

  /* -------------------------------------------------------
     3️⃣ COUNTERS ANIMATION
  ------------------------------------------------------- */
  useEffect(() => {
    const intervals = services.map((service, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < service.count) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* -------------------------------------------------------
     4️⃣ SUBMIT FORM + START COOLDOWN
  ------------------------------------------------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contactr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Form submitted successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
          service: services[0].title,
        });

        // Save timestamp to localStorage
        localStorage.setItem("servicesFormTime", Date.now().toString());

        setIsDisabled(true);
        setTimer(120); // 2 minutes cooldown
      } else {
        alert("❌ Submission failed!");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      alert("⚠️ Something went wrong!");
    }
  };

  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          💼 My Services
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:border-blue-500 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-2">
                {service.icon}
                <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-400">
                  {service.title}
                </h3>
              </div>

              <p className="text-sm text-green-400 mb-2 font-bold">
                {counts[index]}
                {service.suffix} Projects Completed
              </p>

              <p className="text-gray-400 text-sm mb-4">
                {service.description}
              </p>

              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="rounded-lg border border-slate-800 shadow-sm"
              />
            </div>
          ))}

          {/* Contact Form */}
          <div className="group bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:border-blue-500 transition duration-300">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">
              📬 Work With Me
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="text-sm text-gray-300 mb-1 block">Name</label>
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isDisabled}
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white"
                />
              </div>

              <div className="mb-3">
                <label className="text-sm text-gray-300 mb-1 block">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isDisabled}
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white"
                />
              </div>

              <div className="mb-3">
                <label className="text-sm text-gray-300 mb-1 block">
                  Select Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  disabled={isDisabled}
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white"
                >
                  {services.map((s, i) => (
                    <option key={i} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="text-sm text-gray-300 mb-1 block">
                  Describe Your Work
                </label>
                <input
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isDisabled}
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white"
                />
              </div>

              <button
                type="submit"
                disabled={isDisabled}
                className={`w-full py-2 px-4 font-semibold rounded-lg transition ${
                  isDisabled
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-500"
                }`}
              >
                {isDisabled ? `Wait ${timer}s` : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
