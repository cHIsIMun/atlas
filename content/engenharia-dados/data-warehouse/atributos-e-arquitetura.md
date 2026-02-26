---
title: "Data Warehouse: Atributos e Arquitetura"
description: "Os fundamentos de um Data Warehouse — características essenciais, arquitetura em camadas e como os dados fluem do operacional ao analítico."
duration: 1 aula
---

# Data Warehouse: Atributos e Arquitetura

Você já ouviu que "dados são o novo petróleo". Mas assim como petróleo bruto precisa ser refinado, dados brutos precisam ser organizados e transformados para gerar valor. O **Data Warehouse** é essa refinaria de dados.

---

## O que é um Data Warehouse?

Um **Data Warehouse (DW)** é um repositório central de dados integrados de múltiplas fontes, projetado especificamente para **análise e tomada de decisão**.

Diferente de bancos de dados operacionais (que registram transações do dia a dia), o DW é otimizado para **consultas analíticas** — perguntas como "Qual foi o crescimento de vendas por região nos últimos 3 anos?".

```diagram
{
  "title": "Banco Operacional vs Data Warehouse",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 40, "y": 40, "width": 360, "height": 200, "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 220, "y": 75, "content": "Banco Operacional (OLTP)", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 220, "y": 110, "content": "• Transações do dia a dia", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 135, "content": "• INSERT, UPDATE, DELETE frequentes", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 160, "content": "• Dados atuais (estado presente)", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 185, "content": "• Consultas simples e rápidas", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 210, "content": "• Normalizado (3FN)", "fontSize": 12, "color": "#57534e" },

    { "type": "rect", "x": 440, "y": 40, "width": 360, "height": 200, "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 14 },
    { "type": "text", "x": 620, "y": 75, "content": "Data Warehouse (OLAP)", "fontSize": 15, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 620, "y": 110, "content": "• Análise e relatórios", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 135, "content": "• SELECT intensivo (leitura)", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 160, "content": "• Dados históricos (evolução)", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 185, "content": "• Consultas complexas e agregadas", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 210, "content": "• Desnormalizado (Star/Snowflake)", "fontSize": 12, "color": "#57534e" }
  ]
}
```

---

## Os 4 Atributos Fundamentais (Bill Inmon)

Bill Inmon, considerado o "pai do Data Warehouse", definiu 4 características essenciais que todo DW deve ter:

```diagram
{
  "title": "Os 4 Atributos do Data Warehouse",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 40, "y": 40, "width": 380, "height": 120, "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12 },
    { "type": "text", "x": 230, "y": 70, "content": "1. Orientado por Assunto", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 230, "y": 100, "content": "Organizado por temas de negócio", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 230, "y": 125, "content": "Ex: Vendas, Clientes, Produtos, Finanças", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 440, "y": 40, "width": 360, "height": 120, "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 620, "y": 70, "content": "2. Integrado", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 620, "y": 100, "content": "Dados de múltiplas fontes unificados", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 125, "content": "Padrões consistentes (formato, unidades)", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 40, "y": 180, "width": 380, "height": 120, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12 },
    { "type": "text", "x": 230, "y": 210, "content": "3. Não Volátil", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 230, "y": 240, "content": "Dados são carregados e consultados", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 230, "y": 265, "content": "Não há UPDATE/DELETE de registros", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 440, "y": 180, "width": 360, "height": 120, "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 12 },
    { "type": "text", "x": 620, "y": 210, "content": "4. Variante no Tempo", "fontSize": 14, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 620, "y": 240, "content": "Mantém histórico dos dados", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 265, "content": "Permite análise de tendências e evolução", "fontSize": 11, "color": "#78716c" }
  ]
}
```

### 1. Orientado por Assunto

O DW é organizado em torno de **áreas de negócio** (assuntos), não de processos ou aplicações.

| Sistema Operacional | Data Warehouse |
|---------------------|----------------|
| Sistema de Pedidos | Assunto: Vendas |
| Sistema de RH | Assunto: Funcionários |
| Sistema Financeiro | Assunto: Finanças |
| CRM | Assunto: Clientes |

### 2. Integrado

Dados vêm de **múltiplas fontes** com formatos diferentes. O DW unifica tudo:

- **Gênero:** "M/F" vs "Masculino/Feminino" vs "1/2" → padronizado
- **Moeda:** Dólar, Euro, Real → convertido para uma moeda base
- **Data:** "DD/MM/YYYY" vs "YYYY-MM-DD" → formato único

### 3. Não Volátil

Uma vez que os dados entram no DW, eles **não são alterados**:

- Não há `UPDATE` para corrigir registros antigos
- Novos dados são **adicionados**, não substituídos
- Isso garante consistência para análises históricas

### 4. Variante no Tempo

O DW guarda a **história** dos dados:

- Todo registro tem uma referência temporal (data/timestamp)
- Permite comparar "como era" vs "como é"
- Análises de tendência, sazonalidade, crescimento

---

## Arquitetura de um Data Warehouse

A arquitetura de um DW define como os dados fluem das fontes até os usuários finais.

### Arquitetura em Camadas

```diagram
{
  "title": "Arquitetura em Camadas do Data Warehouse",
  "width": 840,
  "height": 420,
  "elements": [
    { "type": "text", "x": 420, "y": 25, "content": "Fluxo de Dados no Data Warehouse", "fontSize": 16, "color": "#1c1917", "fontWeight": "bold" },

    { "type": "rect", "x": 40, "y": 60, "width": 140, "height": 320, "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 12 },
    { "type": "text", "x": 110, "y": 90, "content": "FONTES", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "rect", "x": 55, "y": 110, "width": 110, "height": 50, "fill": "#fff", "stroke": "#fca5a5", "rounded": 6 },
    { "type": "text", "x": 110, "y": 140, "content": "ERP", "fontSize": 11, "color": "#57534e" },
    { "type": "rect", "x": 55, "y": 170, "width": 110, "height": 50, "fill": "#fff", "stroke": "#fca5a5", "rounded": 6 },
    { "type": "text", "x": 110, "y": 200, "content": "CRM", "fontSize": 11, "color": "#57534e" },
    { "type": "rect", "x": 55, "y": 230, "width": 110, "height": 50, "fill": "#fff", "stroke": "#fca5a5", "rounded": 6 },
    { "type": "text", "x": 110, "y": 260, "content": "Planilhas", "fontSize": 11, "color": "#57534e" },
    { "type": "rect", "x": 55, "y": 290, "width": 110, "height": 50, "fill": "#fff", "stroke": "#fca5a5", "rounded": 6 },
    { "type": "text", "x": 110, "y": 320, "content": "APIs", "fontSize": 11, "color": "#57534e" },

    { "type": "arrow", "from": { "x": 185, "y": 220 }, "to": { "x": 225, "y": 220 }, "stroke": "#78716c", "strokeWidth": 2 },

    { "type": "rect", "x": 230, "y": 60, "width": 140, "height": 320, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12 },
    { "type": "text", "x": 300, "y": 90, "content": "STAGING", "fontSize": 13, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 300, "y": 120, "content": "Área de", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 300, "y": 140, "content": "Preparação", "fontSize": 11, "color": "#57534e" },
    { "type": "rect", "x": 245, "y": 160, "width": 110, "height": 80, "fill": "#fff", "stroke": "#fcd34d", "rounded": 6 },
    { "type": "text", "x": 300, "y": 190, "content": "ETL/ELT", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 300, "y": 215, "content": "Extract", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 300, "y": 230, "content": "Transform", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 300, "y": 275, "content": "Limpeza", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 300, "y": 295, "content": "Validação", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 300, "y": 315, "content": "Padronização", "fontSize": 11, "color": "#57534e" },

    { "type": "arrow", "from": { "x": 375, "y": 220 }, "to": { "x": 415, "y": 220 }, "stroke": "#78716c", "strokeWidth": 2 },

    { "type": "rect", "x": 420, "y": 60, "width": 180, "height": 320, "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12 },
    { "type": "text", "x": 510, "y": 90, "content": "DATA WAREHOUSE", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "rect", "x": 435, "y": 115, "width": 150, "height": 70, "fill": "#eff6ff", "stroke": "#93c5fd", "rounded": 6 },
    { "type": "text", "x": 510, "y": 140, "content": "Tabelas Fato", "fontSize": 11, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 510, "y": 160, "content": "Métricas, medidas", "fontSize": 10, "color": "#78716c" },
    { "type": "rect", "x": 435, "y": 195, "width": 150, "height": 70, "fill": "#eff6ff", "stroke": "#93c5fd", "rounded": 6 },
    { "type": "text", "x": 510, "y": 220, "content": "Tabelas Dimensão", "fontSize": 11, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 510, "y": 240, "content": "Contexto, atributos", "fontSize": 10, "color": "#78716c" },
    { "type": "rect", "x": 435, "y": 275, "width": 150, "height": 50, "fill": "#eff6ff", "stroke": "#93c5fd", "rounded": 6 },
    { "type": "text", "x": 510, "y": 300, "content": "Data Marts", "fontSize": 11, "color": "#1e40af" },
    { "type": "text", "x": 510, "y": 350, "content": "Modelo Dimensional", "fontSize": 10, "color": "#3b82f6", "fontStyle": "italic" },

    { "type": "arrow", "from": { "x": 605, "y": 220 }, "to": { "x": 645, "y": 220 }, "stroke": "#78716c", "strokeWidth": 2 },

    { "type": "rect", "x": 650, "y": 60, "width": 150, "height": 320, "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 725, "y": 90, "content": "CONSUMO", "fontSize": 13, "color": "#065f46", "fontWeight": "bold" },
    { "type": "rect", "x": 665, "y": 115, "width": 120, "height": 50, "fill": "#fff", "stroke": "#86efac", "rounded": 6 },
    { "type": "text", "x": 725, "y": 145, "content": "BI / Dashboards", "fontSize": 11, "color": "#57534e" },
    { "type": "rect", "x": 665, "y": 175, "width": 120, "height": 50, "fill": "#fff", "stroke": "#86efac", "rounded": 6 },
    { "type": "text", "x": 725, "y": 205, "content": "Relatórios", "fontSize": 11, "color": "#57534e" },
    { "type": "rect", "x": 665, "y": 235, "width": 120, "height": 50, "fill": "#fff", "stroke": "#86efac", "rounded": 6 },
    { "type": "text", "x": 725, "y": 265, "content": "Data Science", "fontSize": 11, "color": "#57534e" },
    { "type": "rect", "x": 665, "y": 295, "width": 120, "height": 50, "fill": "#fff", "stroke": "#86efac", "rounded": 6 },
    { "type": "text", "x": 725, "y": 325, "content": "Ad-hoc Queries", "fontSize": 11, "color": "#57534e" }
  ]
}
```

### Descrição das Camadas

| Camada | Função | Características |
|--------|--------|-----------------|
| **Fontes** | Origem dos dados | Sistemas operacionais, APIs, arquivos |
| **Staging** | Área de preparação | Temporária, dados brutos em processamento |
| **Data Warehouse** | Armazenamento central | Modelo dimensional, dados históricos |
| **Consumo** | Acesso pelos usuários | BI, relatórios, análises |

---

## Camada de Staging (Área de Preparação)

A **Staging Area** é uma zona intermediária onde os dados são processados antes de entrar no DW:

```diagram
{
  "title": "O que acontece na Staging Area",
  "width": 840,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 40, "y": 40, "width": 180, "height": 140, "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 10 },
    { "type": "text", "x": 130, "y": 70, "content": "Extração", "fontSize": 14, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "text", "x": 130, "y": 100, "content": "Cópia dos dados", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 130, "y": 120, "content": "das fontes", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 130, "y": 150, "content": "Full ou Incremental", "fontSize": 10, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 230, "y": 110 }, "to": { "x": 270, "y": 110 }, "stroke": "#78716c", "strokeWidth": 2 },

    { "type": "rect", "x": 280, "y": 40, "width": 180, "height": 140, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 370, "y": 70, "content": "Transformação", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 370, "y": 100, "content": "Limpeza, conversão", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 370, "y": 120, "content": "padronização", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 370, "y": 150, "content": "Regras de negócio", "fontSize": 10, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 470, "y": 110 }, "to": { "x": 510, "y": 110 }, "stroke": "#78716c", "strokeWidth": 2 },

    { "type": "rect", "x": 520, "y": 40, "width": 180, "height": 140, "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 10 },
    { "type": "text", "x": 610, "y": 70, "content": "Carga", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 610, "y": 100, "content": "Inserção no DW", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 120, "content": "em formato final", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 150, "content": "Modelo dimensional", "fontSize": 10, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 710, "y": 110 }, "to": { "x": 750, "y": 110 }, "stroke": "#78716c", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 780, "cy": 110, "rx": 30, "ry": 30, "fill": "#d1fae5", "stroke": "#10b981" },
    { "type": "text", "x": 780, "y": 115, "content": "DW", "fontSize": 12, "color": "#065f46", "fontWeight": "bold" }
  ]
}
```

**Por que usar Staging?**
- Não impacta os sistemas de origem durante o processamento
- Permite validação e correção antes da carga final
- Facilita reprocessamento em caso de erros
- Isola a complexidade do ETL

---

## Data Marts

Um **Data Mart** é um subconjunto do Data Warehouse focado em uma **área específica** do negócio:

```diagram
{
  "title": "Data Warehouse vs Data Marts",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 250, "y": 40, "width": 340, "height": 100, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 3, "rounded": 12 },
    { "type": "text", "x": 420, "y": 80, "content": "DATA WAREHOUSE", "fontSize": 16, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 110, "content": "Repositório central integrado", "fontSize": 12, "color": "#57534e" },

    { "type": "line", "from": { "x": 320, "y": 140 }, "to": { "x": 180, "y": 180 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 420, "y": 140 }, "to": { "x": 420, "y": 180 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 520, "y": 140 }, "to": { "x": 660, "y": 180 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "rect", "x": 60, "y": 185, "width": 180, "height": 80, "fill": "#d1fae5", "stroke": "#10b981", "rounded": 10 },
    { "type": "text", "x": 150, "y": 215, "content": "DM Vendas", "fontSize": 13, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 150, "y": 240, "content": "Equipe comercial", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 300, "y": 185, "width": 180, "height": 80, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 390, "y": 215, "content": "DM Finanças", "fontSize": 13, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 390, "y": 240, "content": "Controladoria", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 540, "y": 185, "width": 180, "height": 80, "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 10 },
    { "type": "text", "x": 630, "y": 215, "content": "DM Marketing", "fontSize": 13, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 630, "y": 240, "content": "Campanhas", "fontSize": 11, "color": "#78716c" }
  ]
}
```

**Vantagens dos Data Marts:**
- Performance otimizada para consultas específicas
- Dados relevantes para cada departamento
- Menor complexidade para usuários finais
- Pode ter modelagem própria (ex: agregações)

---

## Abordagens de Construção

Existem duas filosofias principais para construir um DW:

### Top-Down (Inmon)

Constrói primeiro o **Data Warehouse central**, depois deriva os Data Marts:

```
Fontes → DW Corporativo → Data Marts departamentais
```

**Vantagens:** Visão integrada, dados consistentes
**Desvantagens:** Projeto maior, mais tempo para entregar valor

### Bottom-Up (Kimball)

Constrói primeiro os **Data Marts**, que juntos formam o DW:

```
Fontes → Data Marts independentes → (formam o) DW
```

**Vantagens:** Entrega rápida de valor, iterativo
**Desvantagens:** Risco de inconsistência entre marts

> [!nota] Na prática, muitas organizações usam uma **abordagem híbrida**, combinando elementos de ambas as filosofias.

---

## Metadados: Dados sobre Dados

**Metadados** são informações sobre os dados armazenados no DW:

| Tipo | Exemplos |
|------|----------|
| **Técnicos** | Tipos de dados, tamanho, origem, transformações aplicadas |
| **Negócio** | Definições, regras, responsáveis, significado |
| **Operacionais** | Data de carga, frequência, logs de execução |

Os metadados são essenciais para:
- Documentar o que cada dado significa
- Rastrear a origem dos dados (linhagem)
- Facilitar manutenção e evolução do DW

---

## Recapitulando

| Conceito | Descrição |
|----------|-----------|
| **OLTP vs OLAP** | Operacional (transações) vs Analítico (consultas) |
| **4 Atributos** | Orientado por assunto, Integrado, Não volátil, Variante no tempo |
| **Staging** | Área de preparação para ETL |
| **Data Mart** | Subconjunto do DW para área específica |
| **Metadados** | Informações sobre os dados |

---

## Exercícios de Fixação

1. **Atributos:** Para cada cenário, identifique qual atributo do DW está sendo violado:
   - a) Um DW que só guarda os dados do mês atual
   - b) Um DW onde cada sistema fonte usa um código diferente para "cliente"
   - c) Um DW organizado por sistema (ERP_dados, CRM_dados)

2. **Camadas:** Descreva o caminho que um registro de venda faz desde o sistema de PDV até aparecer em um dashboard de BI.

3. **Data Mart:** Uma empresa tem DW corporativo e quer criar um Data Mart para RH. Que tabelas/assuntos você incluiria?

4. **Comparação:** Compare as abordagens Top-Down e Bottom-Up. Qual seria mais adequada para uma startup vs uma grande corporação?

5. **Metadados:** Por que a linhagem de dados (saber de onde veio cada informação) é importante em um DW?
