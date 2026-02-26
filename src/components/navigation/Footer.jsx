import React from "react";
import { Link } from "react-router-dom";
import { Map, Github, Linkedin, Mail, Heart } from "lucide-react";
import { courses } from "../../data/courses";
import { siteConfig } from "../../config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Map className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl text-white">
                  {siteConfig.name}
                </span>
                <span className="block text-xs text-slate-500">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>
            <p className="text-sm max-w-md mb-6">{siteConfig.description}</p>
            <div className="flex gap-3">
              {siteConfig.social.github && (
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              <a
                href={`mailto:${siteConfig.professor.email}`}
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Disciplinas */}
          <div>
            <h4 className="font-semibold text-white mb-4">Disciplinas</h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link
                    to={`/disciplina/${course.id}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {course.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-white transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <a
                  href="/#disciplinas"
                  className="text-sm hover:text-white transition-colors"
                >
                  Ver Disciplinas
                </a>
              </li>
              <li>
                <a
                  href="/#sobre"
                  className="text-sm hover:text-white transition-colors"
                >
                  Sobre o Professor
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-sm flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
            por{" "}
            <span className="text-white">{siteConfig.professor.shortName}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
