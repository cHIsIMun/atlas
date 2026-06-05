# atlas

🇧🇷 Português | 🇺🇸 [English](README.en.md)

> Plataforma educacional interativa para arquitetura de computadores, circuitos digitais e engenharia de dados — conteúdo em Markdown com diagramas, LaTeX e animações.

## Visão geral

**atlas** é uma plataforma web de ensino que organiza cursos técnicos em conteúdo navegável gerado a partir de **Markdown**, com renderização de diagramas, fórmulas matemáticas (KaTeX) e *syntax highlight* de código. Inclui um motor de animações próprio para ilustrar conceitos.

## Cursos

- Arquitetura e Organização de Computadores
- Circuitos Digitais
- Engenharia de Dados

## Funcionalidades

- Geração de conteúdo a partir de Markdown (`npm run content:generate`).
- Roteamento por disciplina → módulo → submódulo, com sidebar e *table of contents* dinâmico.
- Suporte a LaTeX (KaTeX) e realce de código (Highlight.js) via rehype/remark.
- **Motor de animações** (`anim-engine`) extensível por pacotes.

## Stack

React 19 · Vite · TypeScript · Tailwind CSS · React Router · react-markdown (rehype-highlight, rehype-katex, remark-math, remark-gfm).

## Como executar

```bash
npm install
npm run content:generate   # gera o índice de conteúdo
npm run dev
```

## Estado do projeto

Ativo e bem estruturado, pronto para expansão modular de conteúdo.

## Licença

Este projeto ainda não declara uma licença; até que uma seja adicionada, todos os direitos são reservados ao autor.
