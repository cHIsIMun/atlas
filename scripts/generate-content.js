/**
 * Script para gerar o índice de conteúdo a partir dos arquivos Markdown
 * Suporta hierarquia de subpastas dentro de cada disciplina
 *
 * Uso: npm run content:generate
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";
import GithubSlugger from "github-slugger";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, "../content");
const OUTPUT_FILE = path.join(__dirname, "../src/content/generated.js");

// Mapeamento de pastas para IDs de curso
const COURSE_MAPPING = {
  "arquitetura-organizacao": "arquitetura-organizacao",
  "circuitos-digitais": "circuitos-digitais",
  "engenharia-dados": "engenharia-dados",
};

/**
 * Extrai headings do markdown para gerar Table of Contents
 * Usa github-slugger para gerar IDs compatíveis com rehype-slug
 */
function extractHeadings(markdown) {
  const slugger = new GithubSlugger();
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    // Usa github-slugger para gerar o mesmo ID que rehype-slug
    const id = slugger.slug(text);

    // Só inclui h2 e h3 no TOC
    if (level >= 2 && level <= 3) {
      headings.push({ level, text, id });
    }
  }

  return headings;
}

/**
 * Busca todos os arquivos markdown recursivamente
 */
function getMarkdownFiles(dir, basePath = "") {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(dir, item.name);
    const relativePath = basePath ? basePath + "/" + item.name : item.name;

    if (item.isDirectory()) {
      files.push(...getMarkdownFiles(itemPath, relativePath));
    } else if (item.name.endsWith(".md") && item.name !== "README.md") {
      files.push({
        fullPath: itemPath,
        relativePath: relativePath,
      });
    }
  }

  return files;
}

/**
 * Processa um arquivo markdown
 */
function processMarkdownFile(fileInfo, courseFolder) {
  const content = fs.readFileSync(fileInfo.fullPath, "utf-8");
  const { data: frontmatter, content: markdown } = matter(content);

  const pathParts = fileInfo.relativePath.split("/");
  pathParts.shift(); // Remove pasta do curso

  const filename = pathParts.pop();
  const slug = path.basename(filename, ".md");
  const subPath = pathParts.join("/");

  const courseId = COURSE_MAPPING[courseFolder];
  const headings = extractHeadings(markdown);
  const fullSlug = subPath ? subPath + "/" + slug : slug;

  return {
    courseId,
    slug: fullSlug,
    filename: slug,
    subPath,
    title: frontmatter.title || slug,
    description: frontmatter.description || "",
    duration: frontmatter.duration || "",
    order: frontmatter.order || 999,
    category: frontmatter.category || subPath || "geral",
    content: markdown.trim(),
    headings,
  };
}

function generateContentIndex() {
  console.log("🔍 Buscando arquivos Markdown...\n");

  if (!fs.existsSync(CONTENT_DIR)) {
    console.error("❌ Pasta /content não encontrada");
    process.exit(1);
  }

  const courseFolders = fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && COURSE_MAPPING[d.name]);

  const contentByCategory = {};
  let totalModules = 0;

  for (const folder of courseFolders) {
    const courseId = COURSE_MAPPING[folder.name];
    const coursePath = path.join(CONTENT_DIR, folder.name);
    const files = getMarkdownFiles(coursePath, folder.name);

    console.log("📚 " + folder.name + "/");
    contentByCategory[courseId] = {};

    for (const file of files) {
      const processed = processMarkdownFile(file, folder.name);

      contentByCategory[courseId][processed.slug] = {
        title: processed.title,
        description: processed.description,
        duration: processed.duration,
        order: processed.order,
        category: processed.category,
        content: processed.content,
        headings: processed.headings,
      };

      totalModules++;
      const indent = processed.subPath ? "    " : "  ";
      console.log(indent + "✓ " + processed.slug);
    }
  }

  const output = `// Gerado automaticamente - npm run content:generate
// ${new Date().toISOString()}

export const generatedContent = ${JSON.stringify(contentByCategory, null, 2)};

export const getContent = (courseId, moduleSlug) => {
  return generatedContent[courseId]?.[moduleSlug]?.content || null;
};

export const getModuleInfo = (courseId, moduleSlug) => {
  const module = generatedContent[courseId]?.[moduleSlug];
  if (!module) return null;
  return {
    title: module.title,
    description: module.description,
    duration: module.duration,
    headings: module.headings || [],
  };
};

export const getHeadings = (courseId, moduleSlug) => {
  return generatedContent[courseId]?.[moduleSlug]?.headings || [];
};
`;

  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, output);

  console.log("\n✅ Gerado: src/content/generated.js");
  console.log(
    "\n📊 " +
      courseFolders.length +
      " disciplinas, " +
      totalModules +
      " módulos"
  );
}

generateContentIndex();
