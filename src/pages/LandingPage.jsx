import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Coffee,
  Sparkles,
} from "lucide-react";
import { courses } from "../data/courses";
import { siteConfig } from "../config/site";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-stone-50 to-teal-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-100/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-teal-100/40 to-transparent" />

        {/* Decorative blobs */}
        <div className="absolute top-32 right-32 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-32 w-56 h-56 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl" />

        {/* Header */}
        <header className="relative z-10 px-6 py-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
              <span className="text-stone-600 font-medium">
                {siteConfig.semester}
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a
                href="#disciplinas"
                className="text-stone-600 hover:text-stone-900 transition-colors"
              >
                Disciplinas
              </a>
              <a
                href="#sobre"
                className="text-stone-600 hover:text-stone-900 transition-colors"
              >
                Professor
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative flex-1 flex flex-col items-center justify-center px-6 pb-20">
          <div className="text-center max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-amber-200/60 text-stone-700 px-4 py-2 rounded-full text-sm mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Material didático atualizado
            </div>

            {/* Logo/Name */}
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-6">
              <span className="p-2 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-600 bg-clip-text text-transparent drop-shadow-sm">
                Atlas
              </span>
            </h1>

            <p className="text-xl text-stone-600 mb-3 leading-relaxed">
              Repositório de conteúdo de{" "}
              <span className="text-teal-700 font-medium">Computação</span>
            </p>
            <p className="text-stone-500 mb-12">
              por{" "}
              <span className="text-stone-800 font-semibold">
                {siteConfig.professor.name}
              </span>
            </p>

            <a
              href="#disciplinas"
              className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-stone-800 transition-all shadow-xl shadow-stone-900/20 hover:shadow-2xl hover:shadow-stone-900/30 hover:-translate-y-0.5"
            >
              Explorar Disciplinas
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex items-center justify-center gap-12 md:gap-24 text-center">
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-stone-900">
                {courses.length}
              </div>
              <div className="text-sm text-stone-500 mt-1">Disciplinas</div>
            </div>
            <div className="w-px h-14 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-stone-900">
                {courses.reduce((acc, c) => {
                  return (
                    acc +
                    c.modules.reduce((mAcc, m) => {
                      return mAcc + (m.submodules ? m.submodules.length : 1);
                    }, 0)
                  );
                }, 0)}
              </div>
              <div className="text-sm text-stone-500 mt-1">Tópicos</div>
            </div>
            <div className="w-px h-14 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-teal-600">
                {courses.reduce(
                  (acc, c) =>
                    acc +
                    c.modules.filter((m) => m.status === "available").length,
                  0,
                )}
              </div>
              <div className="text-sm text-stone-500 mt-1">Disponíveis</div>
            </div>
          </div>
        </div>
      </div>

      {/* Disciplinas */}
      <section id="disciplinas" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-stone-900 mb-3">
              Disciplinas
            </h2>
            <p className="text-stone-500 max-w-lg mx-auto">
              Escolha uma disciplina para acessar o material completo com
              módulos organizados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              const Icon = course.icon;
              const availableCount = course.modules.filter(
                (m) => m.status === "available",
              ).length;

              return (
                <Link
                  key={course.id}
                  to={`/disciplina/${course.id}`}
                  className="group relative bg-gradient-to-br from-stone-50 to-white border border-stone-200 rounded-2xl p-7 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Accent line */}
                  <div
                    className={`absolute top-0 left-6 right-6 h-1 ${course.colorClasses.bg} rounded-b-full opacity-80`}
                  />

                  <div className="flex items-start justify-between mb-5 mt-2">
                    <div
                      className={`p-3.5 rounded-xl ${course.colorClasses.bgLight} ring-4 ring-white shadow-sm`}
                    >
                      <Icon className={`w-6 h-6 ${course.colorClasses.text}`} />
                    </div>
                    <span className="text-xs font-medium text-stone-400 bg-stone-100 px-2.5 py-1 rounded-full">
                      {availableCount}/{course.modules.length}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-stone-900 mb-2 group-hover:text-stone-700 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-sm text-stone-500 line-clamp-2 mb-5">
                    {course.description}
                  </p>

                  {/* Progress */}
                  <div className="h-2 bg-stone-100 rounded-full overflow-hidden mb-5">
                    <div
                      className={`h-full ${course.colorClasses.bg} transition-all duration-500`}
                      style={{
                        width: `${
                          (availableCount / course.modules.length) * 100
                        }%`,
                      }}
                    />
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 group-hover:text-stone-900 transition-colors">
                    Acessar conteúdo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professor */}
      <section
        id="sobre"
        className="py-24 bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50/30"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 mb-10 text-center">
              Professor
            </h2>

            <div className="bg-white border border-stone-200 rounded-3xl p-10 shadow-sm">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center text-white font-bold text-2xl shrink-0 shadow-lg">
                  LC
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-bold text-stone-900 text-xl mb-1">
                    {siteConfig.professor.name}
                  </h3>
                  <p className="text-teal-600 font-medium">
                    {siteConfig.professor.title}
                  </p>
                </div>
              </div>

              <p className="text-stone-600 leading-relaxed mb-8 text-center md:text-left">
                {siteConfig.professor.bio}
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                {siteConfig.professor.email && (
                  <a
                    href={`mailto:${siteConfig.professor.email}`}
                    className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 px-5 py-2.5 rounded-xl text-sm font-medium text-stone-700 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                )}
                {siteConfig.social.github && (
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 px-5 py-2.5 rounded-xl text-sm font-medium text-stone-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {siteConfig.social.linkedin && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 px-5 py-2.5 rounded-xl text-sm font-medium text-stone-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2 text-stone-600">
            <span className="font-semibold text-stone-800">Atlas</span>
            <span className="text-stone-300">·</span>
            <span>{siteConfig.professor.name}</span>
          </div>
          <p className="flex items-center gap-2 text-stone-500">
            Feito com <Coffee className="w-4 h-4 text-amber-600" /> e dedicação
          </p>
        </div>
      </footer>
    </div>
  );
}
