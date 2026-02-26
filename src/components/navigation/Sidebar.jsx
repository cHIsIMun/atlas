import { Link, useLocation } from "react-router-dom";
import {
  Github,
  Linkedin,
  Home,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { courses } from "../../data/courses";
import { siteConfig } from "../../config/site";
import { useSidebar } from "../../context/SidebarContext";

export default function Sidebar({ courseId }) {
  const location = useLocation();
  const { isCollapsed, toggle } = useSidebar();
  const currentCourse = courses.find((c) => c.id === courseId);

  return (
    <aside
      className={`bg-white border-r border-stone-200 flex flex-col fixed h-full z-20 transition-all duration-300 ease-out
        ${isCollapsed ? "w-16" : "w-72"}`}
    >
      {/* Header */}
      <div
        className={`p-4 border-b border-stone-100 flex items-center ${
          isCollapsed ? "justify-center" : "justify-between"
        }`}
      >
        {!isCollapsed ? (
          <Link to="/" className="flex items-center gap-2">
            <div className="text-xl font-bold text-stone-900 tracking-tight">
              Atlas
            </div>
          </Link>
        ) : (
          <Link
            to="/"
            className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center text-white font-bold text-sm"
          >
            A
          </Link>
        )}

        {!isCollapsed && (
          <button
            onClick={toggle}
            className="p-1.5 rounded-md hover:bg-stone-100 transition-colors text-stone-400 hover:text-stone-600"
            title="Recolher"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Expand button when collapsed */}
      {isCollapsed && (
        <button
          onClick={toggle}
          className="mx-auto mt-3 p-1.5 rounded-md hover:bg-stone-100 transition-colors text-stone-400 hover:text-stone-600"
          title="Expandir"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}

      {/* Back to home */}
      <div className={`px-3 pt-3 ${isCollapsed ? "flex justify-center" : ""}`}>
        <Link
          to="/"
          className={`flex items-center gap-2 px-2.5 py-2 text-sm text-stone-500 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-colors
            ${isCollapsed ? "justify-center" : ""}`}
          title="Início"
        >
          <Home className="w-4 h-4 shrink-0" />
          {!isCollapsed && <span>Início</span>}
        </Link>
      </div>

      {/* Course Navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-3">
        {/* Current Course Header */}
        {currentCourse && !isCollapsed && (
          <div className="mb-3 px-2.5">
            <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider mb-2">
              Disciplina
            </p>
            <div className="flex items-center gap-2.5">
              <div
                className={`w-8 h-8 rounded-lg ${currentCourse.colorClasses.bgLight} flex items-center justify-center shrink-0`}
              >
                <currentCourse.icon
                  className={`w-4 h-4 ${currentCourse.colorClasses.text}`}
                />
              </div>
              <span className="font-medium text-stone-900 text-sm truncate">
                {currentCourse.shortTitle}
              </span>
            </div>
          </div>
        )}

        {/* Current Course Icon when collapsed */}
        {currentCourse && isCollapsed && (
          <div className="flex justify-center mb-3">
            <div
              className={`w-9 h-9 rounded-lg ${currentCourse.colorClasses.bgLight} flex items-center justify-center`}
              title={currentCourse.shortTitle}
            >
              <currentCourse.icon
                className={`w-5 h-5 ${currentCourse.colorClasses.text}`}
              />
            </div>
          </div>
        )}

        {/* Modules */}
        <div className="mb-4">
          {!isCollapsed && (
            <p className="px-2.5 text-[10px] font-semibold text-stone-400 uppercase tracking-wider mb-2">
              Módulos
            </p>
          )}
          <div className="space-y-0.5">
            {currentCourse?.modules.map((module, index) => {
              const hasSubmodules =
                module.submodules && module.submodules.length > 0;
              const isSubmoduleActive =
                hasSubmodules &&
                module.submodules.some((sm) =>
                  location.pathname.includes(
                    sm.slug.replace("/", "/modulo/").split("/").pop(),
                  ),
                );
              const isModuleActive =
                location.pathname.endsWith(`/modulo/${module.slug}`) ||
                isSubmoduleActive;
              const isActive = isModuleActive;
              const isLocked = module.status === "locked";
              const isComingSoon = module.status === "coming-soon";

              // Build proper link - submodule slugs have format "parent/child"
              const getSubmoduleLink = (slug) => {
                // slug is like "hierarquia-memoria/introducao-hierarquia"
                return `/disciplina/${courseId}/modulo/${slug}`;
              };

              // Determine the link - if has submodules, link to first submodule
              const moduleLink = hasSubmodules
                ? getSubmoduleLink(module.submodules[0].slug)
                : `/disciplina/${courseId}/modulo/${module.slug}`;

              if (isCollapsed) {
                return (
                  <Link
                    key={module.slug}
                    to={isLocked ? "#" : moduleLink}
                    className={`flex justify-center py-2 rounded-lg transition-colors
                      ${
                        isActive
                          ? currentCourse.colorClasses.bgLight
                          : "hover:bg-stone-50"
                      }
                      ${isLocked ? "opacity-40 cursor-not-allowed" : ""}`}
                    onClick={(e) => isLocked && e.preventDefault()}
                    title={module.title}
                  >
                    <span
                      className={`w-7 h-7 rounded-md text-xs font-semibold flex items-center justify-center
                      ${
                        isActive
                          ? `${currentCourse.colorClasses.bg} text-white`
                          : "bg-stone-100 text-stone-500"
                      }`}
                    >
                      {index + 1}
                    </span>
                  </Link>
                );
              }

              return (
                <div key={module.slug}>
                  <Link
                    to={isLocked ? "#" : moduleLink}
                    className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-colors group
                      ${
                        isActive
                          ? currentCourse.colorClasses.bgLight
                          : "hover:bg-stone-50"
                      }
                      ${isLocked ? "opacity-40 cursor-not-allowed" : ""}`}
                    onClick={(e) => isLocked && e.preventDefault()}
                  >
                    <span
                      className={`w-6 h-6 rounded-md text-xs font-semibold flex items-center justify-center shrink-0
                      ${
                        isActive
                          ? `${currentCourse.colorClasses.bg} text-white`
                          : "bg-stone-100 text-stone-500 group-hover:bg-stone-200"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span
                        className={`block text-sm truncate ${
                          isActive
                            ? "font-medium text-stone-900"
                            : "text-stone-600"
                        }`}
                      >
                        {module.title}
                      </span>
                    </div>
                    {hasSubmodules && (
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? "rotate-90" : ""
                        } text-stone-400`}
                      />
                    )}
                    {isComingSoon && (
                      <span className="text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded font-medium">
                        Breve
                      </span>
                    )}
                  </Link>

                  {/* Submodules - Always visible when module has them */}
                  {hasSubmodules && (
                    <div
                      className={`ml-4 mt-1 space-y-0.5 border-l-2 pl-3 overflow-hidden transition-all duration-300 ease-in-out ${
                        isActive
                          ? `max-h-96 opacity-100 ${currentCourse.colorClasses.borderLight}`
                          : "max-h-0 opacity-0 border-stone-200"
                      }`}
                    >
                      {module.submodules.map((submodule) => {
                        const subSlugParts = submodule.slug.split("/");
                        const isSubActive = location.pathname.includes(
                          subSlugParts[subSlugParts.length - 1],
                        );
                        return (
                          <Link
                            key={submodule.slug}
                            to={getSubmoduleLink(submodule.slug)}
                            className={`flex items-center gap-2 px-2 py-1.5 rounded-md transition-colors text-sm
                              ${
                                isSubActive
                                  ? `${currentCourse.colorClasses.text} font-medium bg-white`
                                  : "text-stone-500 hover:text-stone-700 hover:bg-stone-50"
                              }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                isSubActive
                                  ? currentCourse.colorClasses.bg
                                  : "bg-stone-300"
                              }`}
                            />
                            <span className="truncate">{submodule.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Other Courses */}
        {!isCollapsed && (
          <div>
            <p className="px-2.5 text-[10px] font-semibold text-stone-400 uppercase tracking-wider mb-2">
              Outras Disciplinas
            </p>
            <div className="space-y-0.5">
              {courses
                .filter((c) => c.id !== courseId)
                .map((course) => {
                  const Icon = course.icon;
                  return (
                    <Link
                      key={course.id}
                      to={`/disciplina/${course.id}`}
                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-colors hover:bg-stone-50"
                    >
                      <div
                        className={`w-7 h-7 rounded-md ${course.colorClasses.bgLight} flex items-center justify-center shrink-0`}
                      >
                        <Icon
                          className={`w-3.5 h-3.5 ${course.colorClasses.text}`}
                        />
                      </div>
                      <span className="text-sm text-stone-600">
                        {course.shortTitle}
                      </span>
                    </Link>
                  );
                })}
            </div>
          </div>
        )}

        {/* Other courses when collapsed */}
        {isCollapsed && (
          <div className="space-y-1 mt-4 pt-4 border-t border-stone-100">
            {courses
              .filter((c) => c.id !== courseId)
              .map((course) => {
                const Icon = course.icon;
                return (
                  <Link
                    key={course.id}
                    to={`/disciplina/${course.id}`}
                    className="flex justify-center py-2 rounded-lg transition-colors hover:bg-stone-50"
                    title={course.shortTitle}
                  >
                    <div
                      className={`w-8 h-8 rounded-md ${course.colorClasses.bgLight} flex items-center justify-center`}
                    >
                      <Icon className={`w-4 h-4 ${course.colorClasses.text}`} />
                    </div>
                  </Link>
                );
              })}
          </div>
        )}
      </nav>

      {/* Professor Info */}
      <div
        className={`p-3 border-t border-stone-100 ${
          isCollapsed ? "flex justify-center" : ""
        }`}
      >
        {isCollapsed ? (
          <div
            className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center text-white font-bold text-sm"
            title={siteConfig.professor.shortName}
          >
            LC
          </div>
        ) : (
          <div className="bg-stone-50 rounded-lg p-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-white font-bold text-xs">
                LC
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-stone-400">Professor</p>
                <p className="font-medium text-stone-900 text-sm truncate">
                  {siteConfig.professor.shortName}
                </p>
              </div>
              <div className="flex gap-1">
                {siteConfig.social.github && (
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md hover:bg-stone-200 transition-colors text-stone-500"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                {siteConfig.social.linkedin && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md hover:bg-stone-200 transition-colors text-stone-500"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
