import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Target,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import Sidebar from "../../components/navigation/Sidebar";
import { getCourseById } from "../../data/courses";
import { siteConfig } from "../../config/site";
import { useSidebar } from "../../context/SidebarContext";

export default function CoursePage() {
  const { courseId } = useParams();
  const course = getCourseById(courseId);
  const { isCollapsed } = useSidebar();

  if (!course) {
    return <Navigate to="/" replace />;
  }

  const Icon = course.icon;
  const availableModules = course.modules.filter(
    (m) => m.status === "available",
  ).length;

  return (
    <div className="flex min-h-screen bg-stone-50">
      <Sidebar courseId={courseId} />

      <main
        className={`flex-1 p-8 transition-all duration-300 ${
          isCollapsed ? "ml-16" : "ml-72"
        }`}
      >
        <div
          className={`transition-all duration-300 ${
            isCollapsed ? "max-w-5xl" : "max-w-4xl"
          } mx-auto`}
        >
          {/* Hero Section */}
          <header className="mb-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-stone-500 mb-6">
              <Link to="/" className="hover:text-stone-900 transition-colors">
                Início
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-stone-900 font-medium">
                {course.shortTitle}
              </span>
            </nav>

            {/* Course Header */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
              {/* Colored top bar */}
              <div className={`h-1.5 ${course.colorClasses.bg}`} />

              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${course.colorClasses.bgLight} ${course.colorClasses.text} flex items-center justify-center shrink-0`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${course.colorClasses.bgLight} ${course.colorClasses.text}`}
                      >
                        Disciplina
                      </span>
                      <span className="text-sm text-stone-400">
                        {siteConfig.semester}
                      </span>
                    </div>

                    <h1 className="text-3xl font-bold text-stone-900 mb-3">
                      {course.title}
                    </h1>

                    <p className="text-stone-600 mb-6">{course.description}</p>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-stone-600">
                        <BookOpen className="w-4 h-4 text-stone-400" />
                        <span>
                          <strong className="text-stone-900">
                            {course.modules.length}
                          </strong>{" "}
                          módulos
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-600">
                        <Clock className="w-4 h-4 text-stone-400" />
                        <span>
                          <strong className="text-stone-900">
                            {availableModules}
                          </strong>{" "}
                          disponíveis
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-600">
                        <Target className="w-4 h-4 text-stone-400" />
                        <span>
                          <strong className="text-stone-900">
                            {course.objectives.length}
                          </strong>{" "}
                          objetivos
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Objectives */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
              <Target className={`w-5 h-5 ${course.colorClasses.text}`} />
              Objetivos de Aprendizagem
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6">
              <ul className="space-y-3">
                {course.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span
                      className={`w-6 h-6 rounded-lg ${course.colorClasses.bgLight} ${course.colorClasses.text} flex items-center justify-center text-xs font-bold shrink-0 mt-0.5`}
                    >
                      {index + 1}
                    </span>
                    <span className="text-stone-600">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Modules */}
          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
              <BookOpen className={`w-5 h-5 ${course.colorClasses.text}`} />
              Conteúdo do Curso
            </h2>
            <div className="space-y-3">
              {course.modules.map((module, index) => {
                const isAvailable = module.status === "available";
                const isComingSoon = module.status === "coming-soon";
                const hasSubmodules =
                  module.submodules && module.submodules.length > 0;

                // If module has submodules, link to first submodule
                const moduleLink = isAvailable
                  ? hasSubmodules
                    ? `/disciplina/${courseId}/modulo/${module.submodules[0].slug}`
                    : `/disciplina/${courseId}/modulo/${module.slug}`
                  : "#";

                return (
                  <Link
                    key={module.slug}
                    to={moduleLink}
                    className={`block bg-white rounded-xl border border-stone-200 p-5 transition-all duration-200 group
                      ${
                        isAvailable
                          ? "hover:border-stone-300 hover:shadow-md cursor-pointer"
                          : "opacity-60 cursor-not-allowed"
                      }`}
                    onClick={(e) => !isAvailable && e.preventDefault()}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-10 h-10 rounded-xl text-sm font-bold flex items-center justify-center shrink-0
                        ${
                          isAvailable
                            ? `${course.colorClasses.bgLight} ${course.colorClasses.text}`
                            : "bg-stone-100 text-stone-400"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3
                            className={`font-semibold truncate ${
                              isAvailable
                                ? "text-stone-900 group-hover:text-stone-700"
                                : "text-stone-500"
                            }`}
                          >
                            {module.title}
                          </h3>
                          {isComingSoon && (
                            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                              Em breve
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-stone-500 truncate">
                          {module.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        {hasSubmodules && (
                          <span className="text-xs text-stone-500 bg-stone-100 px-2.5 py-1 rounded-lg font-medium">
                            {module.submodules.length} tópicos
                          </span>
                        )}
                        <span className="text-xs text-stone-400 bg-stone-50 px-2 py-1 rounded">
                          {module.duration}
                        </span>
                        {isAvailable && (
                          <ArrowRight
                            className={`w-5 h-5 text-stone-300 group-hover:text-stone-500 group-hover:translate-x-1 transition-all`}
                          />
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
