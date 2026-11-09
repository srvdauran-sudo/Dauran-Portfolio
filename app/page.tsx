import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Code,
  User,
  GraduationCap,
  Target,
  Mail,
} from "lucide-react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "C++",
  "MySQL",
  "UI/UX Design",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section
        id="home"
        className="mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center gap-12 px-6 py-16 md:flex-row"
      >

      {/* PROFILE IMAGE */}
        <div className="flex flex-1 justify-center">
          <div className="rounded-full border-4 border-green-500 p-2 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            <Image
            src="/my-picture.jpg"
            alt="My Profile Picture"
            width={320}
            height={320}
            priority
            className="h-64 w-64 rounded-full object-cover md:h-80 md:w-80"
            />
          </div>
        </div>

        <div className="flex-1">
          <p className="mb-4 font-semibold tracking-widest text-green-400">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Hello, I'm
            <span className="block text-green-400">
              Shaun Reiver Vincent M. Dauran
            </span>
          </h1>

          <h2 className="mt-4 text-xl text-gray-300">
            IS Student | Aspiring Developer
          </h2>

          <p className="mt-6 max-w-xl leading-7 text-gray-400">
            Welcome to my personal portfolio! I am an IS student
            passionate about technology, programming, and learning
            new skills. This website showcases my background,
            interests, and journey in the field of Information
            Technology.
          </p>
        </div>

      {/* SKILLS SECTION */}
      <section id="skills" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex items-center gap-3">
            <Code className="text-green-400" size={30} />
            <h2 className="text-3xl font-bold">
              My <span className="text-green-400">Skills</span>
            </h2>
          </div>

          <p className="mb-8 text-gray-400">
            Here are some of the technologies and skills I am
            currently learning and developing.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-lg border border-green-500/30 bg-zinc-950 p-5 text-center font-semibold text-green-400 transition hover:border-green-400 hover:bg-green-500 hover:text-black"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="border-t border-green-500/20 bg-zinc-950 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex items-center gap-3">
            <GraduationCap className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold">
              My <span className="text-green-400">Education</span>
            </h2>
          </div>

          <div className="rounded-xl border border-green-500/20 bg-black p-8">
            <h3 className="text-xl font-bold text-green-400">
              College Student
            </h3>
            <p className="mt-2 text-gray-300">
              Information Technology
            </p>
            <p className="mt-2 text-gray-500">
              Naga College Foundation
            </p>
            <p className="mt-4 leading-7 text-gray-400">
              Currently studying Information Technology and
              developing my knowledge in programming, database
              management, computer systems, and web development.
            </p>
          </div>
        </div>
      </section>

      {/* GOAL SECTION */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-xl border border-green-500/30 bg-zinc-950 p-8 text-center">
          <Target className="mx-auto mb-4 text-green-400" size={40} />

          <h2 className="text-3xl font-bold">
            My <span className="text-green-400">Goal</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            My goal is to become a successful IT professional,
            continuously improve my programming skills, and create
            technology that can help people and solve real-world
            problems.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="border-t border-green-500/20 bg-zinc-950 px-6 py-16"
      >
        <div className="mx-auto max-w-5xl text-center">
          <Mail className="mx-auto mb-4 text-green-400" size={35} />

          <h2 className="text-3xl font-bold">
            Get In <span className="text-green-400">Touch</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Thank you for visiting my personal portfolio!
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-green-500/20 px-6 py-6 text-center text-sm text-gray-500">
        Copyright © 2026 Vincent Dauran. All Rights Reserved.
      </footer>
      
      </section>
    </main>
  );
};