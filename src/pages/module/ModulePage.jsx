import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, ChevronRight } from "lucide-react";
import Sidebar from "../../components/navigation/Sidebar";
import MarkdownView from "../../components/MarkdownView";
import TableOfContents from "../../components/TableOfContents";
import { getCourseById, getModuleBySlug } from "../../data/courses";
import { getContent, getHeadings } from "../../content";
import { useSidebar } from "../../context/SidebarContext";

export default function ModulePage() {
  const { courseId, moduleSlug, submoduleSlug } = useParams();

  // Combine slugs if submodule exists
  const fullSlug = submoduleSlug
    ? `${moduleSlug}/${submoduleSlug}`
    : moduleSlug;

  const course = getCourseById(courseId);
  const module = getModuleBySlug(courseId, fullSlug);
  const { isCollapsed } = useSidebar();

  if (!course || !module) {
    return <Navigate to="/" replace />;
  }

  // Check if this is a submodule
  const isSubmodule = !!module.parentModule;
  const parentModule = module.parentModule;

  // Get content
  const content = getContent(courseId, fullSlug);
  const headings = getHeadings(courseId, fullSlug);

  // Navigation for submodules
  let prevItem = null;
  let nextItem = null;
  let currentPosition = "";

  if (isSubmodule && parentModule.submodules) {
    const submodules = parentModule.submodules;
    const currentSubIndex = submodules.findIndex((sm) => sm.slug === fullSlug);
    prevItem = currentSubIndex > 0 ? submodules[currentSubIndex - 1] : null;
    nextItem =
      currentSubIndex < submodules.length - 1
        ? submodules[currentSubIndex + 1]
        : null;
    currentPosition = `${currentSubIndex + 1} / ${submodules.length}`;
  } else {
    // Navigation for main modules
    const currentIndex = course.modules.findIndex((m) => m.slug === fullSlug);
    prevItem = currentIndex > 0 ? course.modules[currentIndex - 1] : null;
    nextItem =
      currentIndex < course.modules.length - 1
        ? course.modules[currentIndex + 1]
        : null;
    currentPosition = `${currentIndex + 1} / ${course.modules.length}`;

    // If next module has submodules, link to first submodule
    if (nextItem?.submodules?.length > 0) {
      nextItem = { ...nextItem.submodules[0], isSubmoduleLink: true };
    }
    // If prev module has submodules, link to last submodule
    if (prevItem?.submodules?.length > 0) {
      prevItem = {
        ...prevItem.submodules[prevItem.submodules.length - 1],
        isSubmoduleLink: true,
      };
    }
  }

  // Get module index for display
  const moduleIndex = isSubmodule
    ? course.modules.findIndex((m) => m.slug === parentModule.slug) + 1
    : course.modules.findIndex((m) => m.slug === fullSlug) + 1;

  // Fallback content if not found
  const fallbackContent = `
> 🚧 **Conteúdo em desenvolvimento**
> 
> Este módulo está sendo preparado e em breve estará disponível com todo o material didático.

## O que você vai aprender

${module.description}

---

**Duração estimada:** ${module.duration || parentModule?.duration || "Em breve"}

Enquanto isso, explore os outros módulos disponíveis ou volte em breve para conferir as atualizações!
`;

  // Helper to get navigation link
  const getNavLink = (item) => {
    if (!item) return "#";
    return `/disciplina/${course.id}/modulo/${item.slug}`;
  };

  return (
    <div className="flex min-h-screen bg-stone-50">
      <Sidebar courseId={courseId} />

      <main
        className={`flex-1 transition-all duration-300 ${
          isCollapsed ? "ml-16" : "ml-72"
        }`}
      >
        {/* Top Navigation Bar */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-stone-200 z-10">
          <div className="max-w-5xl mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm">
                <Link
                  to="/"
                  className="text-stone-500 hover:text-stone-900 transition-colors"
                >
                  Início
                </Link>
                <ChevronRight className="w-4 h-4 text-stone-400" />
                <Link
                  to={`/disciplina/${course.id}`}
                  className="text-stone-500 hover:text-stone-900 transition-colors"
                >
                  {course.shortTitle}
                </Link>
                {isSubmodule && (
                  <>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                    <Link
                      to={`/disciplina/${course.id}/modulo/${parentModule.submodules[0].slug}`}
                      className="text-stone-500 hover:text-stone-900 transition-colors"
                    >
                      {parentModule.title}
                    </Link>
                  </>
                )}
                <ChevronRight className="w-4 h-4 text-stone-400" />
                <span className="text-stone-900 font-medium truncate max-w-[200px]">
                  {module.title}
                </span>
              </nav>

              {/* Module navigation */}
              <div className="flex items-center gap-2">
                {prevItem && (
                  <Link
                    to={getNavLink(prevItem)}
                    className="p-2 rounded-lg hover:bg-stone-100 transition-colors"
                    title={prevItem.title}
                  >
                    <ArrowLeft className="w-5 h-5 text-stone-600" />
                  </Link>
                )}
                <span className="text-sm text-stone-500 px-2 bg-stone-100 rounded-lg py-1">
                  {currentPosition}
                </span>
                {nextItem &&
                  (nextItem.status === "available" ||
                    nextItem.isSubmoduleLink ||
                    isSubmodule) && (
                    <Link
                      to={getNavLink(nextItem)}
                      className="p-2 rounded-lg hover:bg-stone-100 transition-colors"
                      title={nextItem.title}
                    >
                      <ArrowRight className="w-5 h-5 text-stone-600" />
                    </Link>
                  )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area with TOC */}
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex gap-8">
            {/* Main Content */}
            <div
              className={`flex-1 min-w-0 transition-all duration-300 ${
                isCollapsed ? "max-w-4xl" : "max-w-3xl"
              }`}
            >
              {/* Markdown Content with Header inside */}
              <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
                {/* Module Header - Inside the card */}
                <header
                  className={`px-8 pt-8 pb-6 border-b border-stone-100 ${course.colorClasses.bgLight}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-white/80 ${course.colorClasses.text}`}
                    >
                      {isSubmodule
                        ? `${parentModule.title}`
                        : `Módulo ${moduleIndex}`}
                    </span>
                    {(module.duration || parentModule?.duration) && (
                      <span className="flex items-center gap-1.5 text-sm text-stone-600">
                        <Clock className="w-4 h-4" />
                        {module.duration || parentModule?.duration}
                      </span>
                    )}
                    {isSubmodule && parentModule?.submodules && (
                      <span className="text-xs text-stone-500 bg-white/60 px-2 py-0.5 rounded-full">
                        {parentModule.submodules.findIndex(
                          (sm) => sm.slug === fullSlug,
                        ) + 1}{" "}
                        de {parentModule.submodules.length} tópicos
                      </span>
                    )}
                  </div>

                  <h1 className="text-3xl font-bold text-stone-900 mb-3">
                    {module.title}
                  </h1>

                  <p className="text-stone-600">{module.description}</p>
                </header>

                {/* Markdown Content */}
                <div className="p-8">
                  <MarkdownView
                    content={content || fallbackContent}
                    skipFirstHeading={true}
                  />
                </div>
              </article>

              {/* Bottom Navigation */}
              <nav className="mt-12 grid grid-cols-2 gap-4">
                {prevItem ? (
                  <Link
                    to={getNavLink(prevItem)}
                    className="group bg-white rounded-xl border border-stone-200 p-5 hover:border-stone-300 hover:shadow-md transition-all"
                  >
                    <span className="text-sm text-stone-500 mb-1 block flex items-center gap-1">
                      <ArrowLeft className="w-3 h-3" /> Anterior
                    </span>
                    <span className="font-medium text-stone-900 group-hover:text-stone-700 transition-colors">
                      {prevItem.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}

                {nextItem &&
                (nextItem.status === "available" ||
                  nextItem.isSubmoduleLink ||
                  isSubmodule) ? (
                  <Link
                    to={getNavLink(nextItem)}
                    className="group bg-white rounded-xl border border-stone-200 p-5 hover:border-stone-300 hover:shadow-md transition-all text-right"
                  >
                    <span className="text-sm text-stone-500 mb-1 block flex items-center gap-1 justify-end">
                      Próximo <ArrowRight className="w-3 h-3" />
                    </span>
                    <span className="font-medium text-stone-900 group-hover:text-stone-700 transition-colors">
                      {nextItem.title}
                    </span>
                  </Link>
                ) : nextItem ? (
                  <div className="bg-stone-100 rounded-xl border border-stone-200 p-5 text-right opacity-60">
                    <span className="text-sm text-stone-500 mb-1 block">
                      Próximo
                    </span>
                    <span className="font-medium text-stone-500">
                      {nextItem.title}
                    </span>
                    <span className="block text-xs text-amber-600 mt-1">
                      Em breve
                    </span>
                  </div>
                ) : (
                  <Link
                    to={`/disciplina/${course.id}`}
                    className={`group ${course.colorClasses.bg} rounded-xl p-5 text-right text-white`}
                  >
                    <span className="text-sm opacity-80 mb-1 block">
                      ✓ {isSubmodule ? "Submódulo" : "Módulo"} concluído
                    </span>
                    <span className="font-medium">
                      Voltar para a disciplina
                    </span>
                  </Link>
                )}
              </nav>
            </div>

            {/* Table of Contents - Right Sidebar */}
            {headings && headings.length > 0 && (
              <aside className="hidden xl:block w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <TableOfContents headings={headings} />
                </div>
              </aside>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
