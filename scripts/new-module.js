/**
 * Script para criar um novo módulo em uma disciplina
 *
 * Uso: npm run content:new <disciplina> <slug>
 * Exemplo: npm run content:new arquitetura-organizacao processadores
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, "../content");

const COURSE_NAMES = {
  "arquitetura-organizacao": "Arquitetura e Organização de Computadores",
  "circuitos-digitais": "Circuitos Digitais",
  "engenharia-dados": "Engenharia Inteligente de Dados",
};

function slugToTitle(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function createModule(courseId, moduleSlug) {
  if (!COURSE_NAMES[courseId]) {
    console.error(`❌ Disciplina não encontrada: ${courseId}`);
    console.log("\nDisciplinas disponíveis:");
    Object.keys(COURSE_NAMES).forEach((id) => {
      console.log(`  - ${id}`);
    });
    process.exit(1);
  }

  const courseDir = path.join(CONTENT_DIR, courseId);
  const filePath = path.join(courseDir, `${moduleSlug}.md`);

  if (fs.existsSync(filePath)) {
    console.error(`❌ Arquivo já existe: ${filePath}`);
    process.exit(1);
  }

  // Garantir que o diretório existe
  if (!fs.existsSync(courseDir)) {
    fs.mkdirSync(courseDir, { recursive: true });
  }

  const title = slugToTitle(moduleSlug);
  const template = `---
title: ${title}
description: Descrição do módulo
duration: X aulas
---

# ${title}

Introdução ao módulo...

## Seção 1

Conteúdo...

## Seção 2

Conteúdo...

## Exercícios

1. Exercício 1
2. Exercício 2

---

**Próximo módulo:** [Nome do próximo módulo]
`;

  fs.writeFileSync(filePath, template);
  console.log(`✅ Módulo criado: ${filePath}`);
  console.log(`\n📝 Próximos passos:`);
  console.log(`   1. Edite o arquivo com o conteúdo`);
  console.log(`   2. Execute: npm run content:generate`);
}

// Processar argumentos
const args = process.argv.slice(2);

if (args.length < 2) {
  console.log("Uso: npm run content:new <disciplina> <slug>");
  console.log(
    "Exemplo: npm run content:new arquitetura-organizacao processadores"
  );
  console.log("\nDisciplinas disponíveis:");
  Object.keys(COURSE_NAMES).forEach((id) => {
    console.log(`  - ${id}`);
  });
  process.exit(1);
}

const [courseId, moduleSlug] = args;
createModule(courseId, moduleSlug);
