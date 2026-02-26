import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import {
  AlertCircle,
  Info,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  Copy,
  Check,
} from "lucide-react";
import "highlight.js/styles/github-dark.css";
import "katex/dist/katex.min.css";
import DiagramRenderer from "./DiagramRenderer";

// Componente de código com botão de copiar e renderização de diagramas
function CodeBlock({ children, className, ...props }) {
  const [copied, setCopied] = React.useState(false);
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";

  // Interceptar blocos de diagrama
  if (language === "diagram" || language === "atlas-diagram") {
    const raw = String(children).replace(/\n$/, "");
    return <DiagramRenderer data={raw} />;
  }

  const handleCopy = () => {
    const code = String(children).replace(/\n$/, "");
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!className) {
    // Inline code
    return (
      <code
        className="bg-stone-100 text-teal-800 px-1.5 py-0.5 rounded-md text-[0.88em] font-mono font-medium border border-stone-200/60"
        {...props}
      >
        {children}
      </code>
    );
  }

  return (
    <div className="relative group my-6">
      {/* Header do código */}
      <div className="flex items-center justify-between bg-stone-800 px-4 py-2 rounded-t-xl border-b border-stone-700">
        <span className="text-xs font-medium text-stone-400 uppercase tracking-wide">
          {language || "código"}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-teal-400">Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
      {/* Código */}
      <pre className="!mt-0 !rounded-t-none !rounded-b-xl bg-stone-900 overflow-x-auto">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    </div>
  );
}

// Detecta e renderiza callouts/notas especiais
function Blockquote({ children, ...props }) {
  const text = React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string") return child;
      if (child?.props?.children) {
        const nested = React.Children.toArray(child.props.children);
        return nested.map((n) => (typeof n === "string" ? n : "")).join("");
      }
      return "";
    })
    .join("");

  // Detecta tipo de callout por marcador textual [!tipo] ou emoji fallback
  const calloutTypes = {
    // Marcadores textuais (preferidos — sem emoji)
    "[!dica]": { type: "tip", icon: Lightbulb, color: "amber", title: "Dica" },
    "[!tip]": { type: "tip", icon: Lightbulb, color: "amber", title: "Dica" },
    "[!atencao]": {
      type: "warning",
      icon: AlertTriangle,
      color: "orange",
      title: "Atenção",
    },
    "[!warning]": {
      type: "warning",
      icon: AlertTriangle,
      color: "orange",
      title: "Atenção",
    },
    "[!construcao]": {
      type: "wip",
      icon: AlertCircle,
      color: "amber",
      title: "Em construção",
    },
    "[!nota]": { type: "note", icon: Info, color: "blue", title: "Nota" },
    "[!note]": { type: "note", icon: Info, color: "blue", title: "Nota" },
    "[!info]": { type: "info", icon: Info, color: "blue", title: "Informação" },
    "[!sucesso]": {
      type: "success",
      icon: CheckCircle,
      color: "teal",
      title: "Sucesso",
    },
    "[!erro]": {
      type: "error",
      icon: AlertCircle,
      color: "red",
      title: "Erro",
    },
    "[!importante]": {
      type: "important",
      icon: AlertTriangle,
      color: "purple",
      title: "Importante",
    },
  };

  let callout = null;
  let matchedMarker = null;
  for (const [marker, config] of Object.entries(calloutTypes)) {
    if (text.toLowerCase().includes(marker)) {
      callout = config;
      matchedMarker = marker;
      break;
    }
  }

  // Estilos por cor
  const colorStyles = {
    amber: {
      bg: "bg-gradient-to-r from-amber-50 to-amber-50/50",
      border: "border-amber-300",
      icon: "text-amber-600 bg-amber-100",
      title: "text-amber-800",
    },
    orange: {
      bg: "bg-gradient-to-r from-orange-50 to-orange-50/50",
      border: "border-orange-300",
      icon: "text-orange-600 bg-orange-100",
      title: "text-orange-800",
    },
    blue: {
      bg: "bg-gradient-to-r from-blue-50 to-blue-50/50",
      border: "border-blue-300",
      icon: "text-blue-600 bg-blue-100",
      title: "text-blue-800",
    },
    teal: {
      bg: "bg-gradient-to-r from-teal-50 to-teal-50/50",
      border: "border-teal-300",
      icon: "text-teal-600 bg-teal-100",
      title: "text-teal-800",
    },
    red: {
      bg: "bg-gradient-to-r from-red-50 to-red-50/50",
      border: "border-red-300",
      icon: "text-red-600 bg-red-100",
      title: "text-red-800",
    },
    purple: {
      bg: "bg-gradient-to-r from-purple-50 to-purple-50/50",
      border: "border-purple-300",
      icon: "text-purple-600 bg-purple-100",
      title: "text-purple-800",
    },
  };

  if (callout) {
    const Icon = callout.icon;
    const styles = colorStyles[callout.color];

    // Remove o marcador [!tipo] do conteúdo renderizado
    const cleanChildren = React.Children.map(children, (child) => {
      if (typeof child === "string") {
        return child;
      }
      if (child?.props?.children) {
        const cleanedNested = React.Children.map(child.props.children, (n) => {
          if (typeof n === "string") {
            // Remove o marcador e qualquer ** ao redor dele
            let cleaned = n;
            // Remove padrões como **[!dica]** ou [!dica]
            const escapedMarker = matchedMarker.replace(/[[\]!]/g, "\\$&");
            cleaned = cleaned.replace(
              new RegExp(`\\*{0,2}${escapedMarker}\\*{0,2}\\s*`, "gi"),
              "",
            );
            return cleaned;
          }
          // Se for um <strong> contendo apenas o marcador, removê-lo
          if (n?.props?.children) {
            const strongText = String(n.props.children).toLowerCase();
            if (strongText.includes(matchedMarker)) {
              const remaining = strongText
                .replace(
                  new RegExp(matchedMarker.replace(/[[\]!]/g, "\\$&"), "gi"),
                  "",
                )
                .trim();
              if (!remaining) return null;
            }
          }
          return n;
        });
        return React.cloneElement(child, {}, ...cleanedNested.filter(Boolean));
      }
      return child;
    });

    return (
      <div
        className={`my-6 rounded-xl border-l-4 ${styles.border} ${styles.bg} overflow-hidden`}
      >
        <div className="px-5 py-4">
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-lg ${styles.icon} shrink-0`}>
              <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className={`font-semibold text-sm mb-1 ${styles.title}`}>
                {callout.title}
              </p>
              <div className="text-stone-600 text-sm [&>p]:m-0 [&>p:first-child]:mt-0">
                {cleanChildren}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Blockquote padrão
  return (
    <blockquote
      className="my-6 border-l-4 border-stone-300 bg-stone-50 rounded-r-xl py-4 px-5 text-stone-600 italic [&>p]:m-0"
      {...props}
    >
      {children}
    </blockquote>
  );
}

// Tabela estilizada
function Table({ children, ...props }) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-stone-200 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm" {...props}>
          {children}
        </table>
      </div>
    </div>
  );
}

function Thead({ children, ...props }) {
  return (
    <thead className="bg-stone-50 border-b-2 border-stone-200" {...props}>
      {children}
    </thead>
  );
}

function Th({ children, ...props }) {
  return (
    <th
      className="px-4 py-3 text-left font-semibold text-stone-800 whitespace-nowrap"
      {...props}
    >
      {children}
    </th>
  );
}

function Td({ children, ...props }) {
  return (
    <td
      className="px-4 py-3 border-t border-stone-100 text-stone-600"
      {...props}
    >
      {children}
    </td>
  );
}

function Tr({ children, ...props }) {
  return (
    <tr className="hover:bg-stone-50/50 transition-colors" {...props}>
      {children}
    </tr>
  );
}

// Links estilizados
function Link({ children, href, ...props }) {
  const isExternal = href?.startsWith("http");
  return (
    <a
      href={href}
      className="text-teal-700 font-medium underline decoration-teal-300 underline-offset-2 hover:decoration-teal-500 hover:text-teal-800 transition-colors"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}

// Headings com âncora visual
function Heading({ level, children, ...props }) {
  const Tag = `h${level}`;
  const baseStyles =
    "font-bold tracking-tight text-stone-900 scroll-mt-24 group";

  const levelStyles = {
    1: "text-2xl border-b border-stone-200 pb-4 mb-6",
    2: "text-xl mt-12 mb-4 pt-2 flex items-center gap-2",
    3: "text-lg mt-8 mb-3 text-stone-800",
    4: "text-base mt-6 mb-2 text-stone-700",
  };

  return (
    <Tag className={`${baseStyles} ${levelStyles[level] || ""}`} {...props}>
      {level === 2 && (
        <span className="w-1 h-6 bg-teal-500 rounded-full"></span>
      )}
      {children}
    </Tag>
  );
}

// Lista estilizada
function List({ ordered, children, ...props }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      className={`my-4 space-y-2 ${
        ordered ? "list-decimal" : "list-none"
      } pl-0`}
      {...props}
    >
      {children}
    </Tag>
  );
}

function ListItem({ children, ordered, ...props }) {
  return (
    <li className="flex items-start gap-3 text-stone-600" {...props}>
      {!ordered && (
        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 shrink-0"></span>
      )}
      <span className="flex-1">{children}</span>
    </li>
  );
}

// Linha horizontal
function Hr(props) {
  return (
    <hr
      className="my-10 border-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"
      {...props}
    />
  );
}

// Imagem com caption
function Image({ src, alt, ...props }) {
  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        className="rounded-xl shadow-lg border border-stone-200 w-full"
        {...props}
      />
      {alt && (
        <figcaption className="text-center text-sm text-stone-500 mt-3 italic">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}

export default function MarkdownView({ content, skipFirstHeading = false }) {
  // Se skipFirstHeading=true, remove o primeiro h1 do markdown
  const processedContent = React.useMemo(() => {
    if (!skipFirstHeading) return content;

    // Remove a primeira linha que começa com # (mas não ## ou mais)
    const lines = content.split("\n");
    let foundFirst = false;
    const filtered = lines.filter((line) => {
      // Match apenas h1 (uma única #)
      if (!foundFirst && /^#\s+/.test(line) && !/^##/.test(line)) {
        foundFirst = true;
        return false;
      }
      return true;
    });
    return filtered.join("\n");
  }, [content, skipFirstHeading]);

  return (
    <article className="prose-custom">
      <Markdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeSlug, rehypeHighlight, rehypeKatex]}
        components={{
          code: CodeBlock,
          blockquote: Blockquote,
          table: Table,
          thead: Thead,
          th: Th,
          td: Td,
          tr: Tr,
          a: Link,
          h1: (props) => <Heading level={1} {...props} />,
          h2: (props) => <Heading level={2} {...props} />,
          h3: (props) => <Heading level={3} {...props} />,
          h4: (props) => <Heading level={4} {...props} />,
          ul: (props) => <List ordered={false} {...props} />,
          ol: (props) => <List ordered={true} {...props} />,
          li: ListItem,
          hr: Hr,
          img: Image,
          p: ({ children, ...props }) => (
            <p className="text-stone-600 leading-relaxed my-4" {...props}>
              {children}
            </p>
          ),
          strong: ({ children, ...props }) => (
            <strong className="font-semibold text-stone-800" {...props}>
              {children}
            </strong>
          ),
          em: ({ children, ...props }) => (
            <em className="italic text-stone-700" {...props}>
              {children}
            </em>
          ),
        }}
      >
        {processedContent}
      </Markdown>
    </article>
  );
}
