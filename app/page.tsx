import Image from "next/image";
import Link from "next/link";
import {
  Code,
  GraduationCap,
  Target,
  Mail,
  ArrowDown,
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
    <main className="min-h-screen overflow-x-hidden bg-black text-white">

      {/* HERO SECTION */}
      <section
        id="home"
        className="mx-auto flex min-h-[85vh] w-full max-w-7xl flex-col items-center justify-center gap-12 px-6 py-20 md:flex-row md:gap-16"
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

        {/* INTRODUCTION */}
        <div className="w-full flex-1 text-center md:text-left">
          <p className="mb-4 font-semibold tracking-widest text-green-400">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Hello, I'm
            <span className="mt-2 block text-green-400">
              Shaun Reiver Vincent M. Dauran
            </span>
          </h1>

          <h2 className="mt-4 text-xl text-gray-300">
            IS Student | Aspiring Developer
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-gray-400 md:mx-0">
            Welcome to my personal portfolio! I am an IS student
            passionate about technology, programming, and learning
            new skills. This website showcases my background,
            interests, and journey in the field of Information
            Technology.
          </p>

          <Link
            href="#skills"
            className="neon-button mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold"
          >
            Explore My Portfolio
            <ArrowDown size={18} />
          </Link>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="border-t border-green-500/20 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-10 flex items-center justify-center gap-3 md:justify-start">
            <Code className="text-green-400" size={32} />

            <h2 className="text-3xl font-bold">
              My <span className="text-green-400">Skills</span>
            </h2>
          </div>

          <p className="mb-10 text-center text-gray-400 md:text-left">
            Here are some of the technologies and skills I am
            currently learning and developing.
          </p>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="portfolio-card p-6 text-center font-semibold text-green-400 transition hover:border-green-400 hover:bg-green-500 hover:text-black"
              >
                {skill}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section
        id="education"
        className="border-t border-green-500/20 bg-zinc-950 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-10 flex items-center justify-center gap-3 md:justify-start">
            <GraduationCap className="text-green-400" size={34} />

            <h2 className="text-3xl font-bold">
              My <span className="text-green-400">Education</span>
            </h2>
          </div>

          <div className="portfolio-card p-8 md:p-10">
            <h3 className="text-2xl font-bold text-green-400">
              College Student
            </h3>

            <p className="mt-3 text-lg text-gray-300">
              Information Technology
            </p>

            <p className="mt-2 text-gray-500">
              Naga College Foundation
            </p>

            <p className="mt-6 max-w-3xl leading-8 text-gray-400">
              Currently studying Information Technology and
              developing my knowledge in programming, database
              management, computer systems, and web development.
              I am continuously improving my technical skills
              and learning new technologies.
            </p>
          </div>

        </div>
      </section>

      {/* GOAL SECTION */}
      <section
        id="goal"
        className="border-t border-green-500/20 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">

          <div className="portfolio-card p-10 text-center md:p-14">
            <Target
              className="mx-auto mb-5 text-green-400"
              size={45}
            />

            <h2 className="text-3xl font-bold">
              My <span className="text-green-400">Goal</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
              My goal is to become a successful IT professional,
              continuously improve my programming skills, and
              create technology that can help people and solve
              real-world problems.
            </p>

          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="border-t border-green-500/20 bg-zinc-950 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl text-center">

          <Mail
            className="mx-auto mb-5 text-green-400"
            size={40}
          />

          <h2 className="text-3xl font-bold">
            Get <span className="text-green-400">In Touch</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-400">
            Thank you for visiting my personal portfolio!
            Feel free to explore my website and learn more
            about my background, skills, and interests.
          </p>

          <Link
            href="/contact"
            className="neon-button mt-8 inline-flex items-center gap-2 rounded-lg px-8 py-3 font-semibold"
          >
            Contact Me
            <Mail size={18} />
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-green-500/20 bg-black px-6 py-8 text-center">
        <p className="text-sm text-gray-500">
          Copyright © 2026 Shaun Reiver Vincent M. Dauran.
          All Rights Reserved.
        </p>

        <p className="mt-2 text-sm text-green-400">
          Designed with passion for technology.
        </p>
      </footer>

    </main>
  );
}