/**
 * Módulo de conteúdo do Atlas
 *
 * Este arquivo serve como fallback e re-exporta o conteúdo gerado.
 *
 * Para adicionar/editar conteúdo:
 * 1. Edite os arquivos .md em /content/<disciplina>/
 * 2. Execute: npm run content:generate
 *
 * Para criar novo módulo:
 * - Execute: npm run content:new <disciplina> <slug>
 */

// Tenta importar conteúdo gerado, senão usa fallback
let generatedContent = {};
let getContentFromGenerated = null;

try {
  const generated = await import("./generated.js");
  generatedContent = generated.generatedContent || {};
  getContentFromGenerated = generated.getContent;
} catch {
  console.warn(
    "Conteúdo gerado não encontrado. Execute: npm run content:generate"
  );
}

// Conteúdo de fallback (usado quando não há arquivo gerado)
const fallbackContent = {
  "arquitetura-organizacao": {
    introducao: `
# Introdução à Arquitetura de Von Neumann

> Execute \`npm run content:generate\` para carregar o conteúdo completo dos arquivos Markdown.

Este módulo aborda os conceitos fundamentais da arquitetura de computadores proposta por John von Neumann.

## Tópicos

- Modelo de Von Neumann
- Componentes principais (CPU, Memória, E/S)
- Ciclo de instrução
- Gargalo de Von Neumann
`,
    "barramentos-memoria": `
# Barramentos e Memória

> Execute \`npm run content:generate\` para carregar o conteúdo completo dos arquivos Markdown.

Este módulo explora como os componentes do computador se comunicam.
`,
  },
  "circuitos-digitais": {
    "algebra-booleana": `
# Álgebra Booleana

> Execute \`npm run content:generate\` para carregar o conteúdo completo dos arquivos Markdown.

Base matemática para circuitos digitais.
`,
  },
  "engenharia-dados": {
    "etl-elt": `
# ETL vs ELT no Mundo Moderno

> Execute \`npm run content:generate\` para carregar o conteúdo completo dos arquivos Markdown.

Comparação de abordagens de pipeline de dados.
`,
  },
};

// Função para obter conteúdo (prioriza gerado, fallback para estático)
export const getContent = (courseId, moduleSlug) => {
  // Primeiro tenta o conteúdo gerado
  if (getContentFromGenerated) {
    const generated = getContentFromGenerated(courseId, moduleSlug);
    if (generated) return generated;
  }

  // Se não encontrou, tenta o conteúdo gerado diretamente
  if (generatedContent[courseId]?.[moduleSlug]?.content) {
    return generatedContent[courseId][moduleSlug].content;
  }

  // Fallback para conteúdo estático
  return fallbackContent[courseId]?.[moduleSlug] || null;
};

// Função para obter headings do conteúdo
export const getHeadings = (courseId, moduleSlug) => {
  if (generatedContent[courseId]?.[moduleSlug]?.headings) {
    return generatedContent[courseId][moduleSlug].headings;
  }
  return [];
};

// Re-exporta tudo do gerado se existir
export { generatedContent };
