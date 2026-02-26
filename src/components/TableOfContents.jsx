import React, { useState, useEffect } from "react";
import { List } from "lucide-react";

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -80% 0%" },
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  return (
    <nav className="bg-white rounded-xl border border-stone-200 p-5">
      <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4 flex items-center gap-2">
        <List className="w-4 h-4" />
        Nesta página
      </h4>
      <ul className="space-y-1">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          const indent = heading.level === 3 ? "pl-4" : "";

          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`block py-1.5 text-sm transition-all duration-200 border-l-2 pl-3 -ml-0.5
                  ${indent}
                  ${
                    isActive
                      ? "text-stone-900 font-medium border-teal-500 bg-teal-50/50"
                      : "text-stone-500 border-transparent hover:text-stone-700 hover:border-stone-300"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
