---
title: "Modelagem Dimensional"
description: "A arte de organizar dados para análise — fatos, dimensões, esquemas estrela e floco de neve, e as técnicas que tornam o DW eficiente."
duration: 1 aula
---

# Modelagem Dimensional

Se a arquitetura define **onde** os dados ficam, a modelagem dimensional define **como** eles são organizados. É a técnica que transforma dados normalizados em estruturas otimizadas para análise.

---

## Por que Modelagem Dimensional?

Bancos de dados operacionais usam **normalização** (3FN) para evitar redundância e garantir integridade. Mas isso gera muitas tabelas e JOINs complexos.

Para análise, precisamos de algo diferente:

```diagram
{
  "title": "Normalizado vs Dimensional",
  "width": 840,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 40, "y": 40, "width": 360, "height": 180, "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 14 },
    { "type": "text", "x": 220, "y": 75, "content": "Modelo Normalizado (3FN)", "fontSize": 14, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "text", "x": 220, "y": 105, "content": "• Muitas tabelas pequenas", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 130, "content": "• JOINs complexos (10+ tabelas)", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 155, "content": "• Otimizado para escrita", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 180, "content": "• Difícil para usuários de negócio", "fontSize": 12, "color": "#57534e" },

    { "type": "rect", "x": 440, "y": 40, "width": 360, "height": 180, "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 620, "y": 75, "content": "Modelo Dimensional", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 620, "y": 105, "content": "• Poucas tabelas maiores", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 130, "content": "• JOINs simples (fato + dimensões)", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 155, "content": "• Otimizado para leitura", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 180, "content": "• Intuitivo para análise", "fontSize": 12, "color": "#57534e" }
  ]
}
```

---

## Os Dois Pilares: Fatos e Dimensões

A modelagem dimensional se baseia em dois tipos de tabelas:

```diagram
{
  "title": "Tabelas Fato vs Tabelas Dimensão",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 40, "y": 40, "width": 380, "height": 240, "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 230, "y": 75, "content": "TABELA FATO", "fontSize": 16, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 230, "y": 105, "content": "O que aconteceu?", "fontSize": 13, "color": "#3b82f6", "fontStyle": "italic" },
    { "type": "text", "x": 230, "y": 140, "content": "• Métricas numéricas (valores)", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 230, "y": 165, "content": "• Quantidade, valor, preço, custo", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 230, "y": 190, "content": "• Chaves estrangeiras para dimensões", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 230, "y": 215, "content": "• Geralmente a maior tabela", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 230, "y": 250, "content": "Ex: fato_vendas, fato_pedidos", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 460, "y": 40, "width": 340, "height": 240, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 630, "y": 75, "content": "TABELA DIMENSÃO", "fontSize": 16, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 630, "y": 105, "content": "Quem, onde, quando, o quê?", "fontSize": 13, "color": "#f59e0b", "fontStyle": "italic" },
    { "type": "text", "x": 630, "y": 140, "content": "• Atributos descritivos", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 630, "y": 165, "content": "• Nome, categoria, região, data", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 630, "y": 190, "content": "• Contexto para os fatos", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 630, "y": 215, "content": "• Base para filtros e agrupamentos", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 630, "y": 250, "content": "Ex: dim_cliente, dim_produto, dim_tempo", "fontSize": 11, "color": "#78716c" }
  ]
}
```

### Exemplo Prático

Imagine uma análise: "Total de vendas por região e categoria de produto no último trimestre"

| Elemento da Pergunta | Tipo | Tabela |
|---------------------|------|--------|
| "Total de vendas" | **Fato** (métrica) | fato_vendas.valor_total |
| "por região" | **Dimensão** | dim_loja.regiao |
| "categoria de produto" | **Dimensão** | dim_produto.categoria |
| "último trimestre" | **Dimensão** | dim_tempo.trimestre |

---

## Tipos de Fatos

Nem todos os fatos são iguais. Existem três tipos principais:

### 1. Fatos Aditivos

Podem ser **somados** em qualquer dimensão:

```
Exemplo: valor_venda, quantidade_vendida, custo
Soma por tempo: ✓
Soma por loja: ✓
Soma por produto: ✓
```

### 2. Fatos Semi-Aditivos

Podem ser somados em **algumas** dimensões:

```
Exemplo: saldo_conta, estoque_atual
Soma por tempo: ✗ (não faz sentido somar saldos de dias diferentes)
Soma por filial: ✓ (saldo total de todas as filiais)
```

### 3. Fatos Não-Aditivos

**Não podem** ser somados (usar médias, máximos, etc.):

```
Exemplo: percentual_margem, temperatura, taxa_conversao
Soma: ✗
Média: ✓
```

```diagram
{
  "title": "Tipos de Fatos",
  "width": 840,
  "height": 180,
  "elements": [
    { "type": "rect", "x": 40, "y": 40, "width": 240, "height": 110, "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 160, "y": 70, "content": "Aditivo", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 160, "y": 95, "content": "Soma em todas dimensões", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 160, "y": 120, "content": "Ex: valor, quantidade", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 300, "y": 40, "width": 240, "height": 110, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12 },
    { "type": "text", "x": 420, "y": 70, "content": "Semi-Aditivo", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 95, "content": "Soma em algumas dimensões", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 120, "content": "Ex: saldo, estoque", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 560, "y": 40, "width": 240, "height": 110, "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 12 },
    { "type": "text", "x": 680, "y": 70, "content": "Não-Aditivo", "fontSize": 14, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "text", "x": 680, "y": 95, "content": "Não pode somar", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 680, "y": 120, "content": "Ex: margem %, temperatura", "fontSize": 11, "color": "#78716c" }
  ]
}
```

---

## Esquema Estrela (Star Schema)

O **Star Schema** é o modelo dimensional mais comum. A tabela fato fica no centro, cercada pelas dimensões — formando uma "estrela".

```diagram
{
  "title": "Star Schema - Vendas",
  "width": 840,
  "height": 450,
  "elements": [
    { "type": "rect", "x": 300, "y": 160, "width": 240, "height": 140, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 3, "rounded": 12 },
    { "type": "text", "x": 420, "y": 190, "content": "FATO_VENDAS", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 215, "content": "sk_tempo (FK)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 233, "content": "sk_produto (FK)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 251, "content": "sk_cliente (FK)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 269, "content": "sk_loja (FK)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 287, "content": "quantidade, valor, desconto", "fontSize": 10, "color": "#3b82f6" },

    { "type": "rect", "x": 60, "y": 20, "width": 180, "height": 120, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 150, "y": 50, "content": "DIM_TEMPO", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 150, "y": 75, "content": "sk_tempo (PK)", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 150, "y": 93, "content": "data, dia, mês, ano", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 150, "y": 111, "content": "trimestre, semestre", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 600, "y": 20, "width": 180, "height": 120, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 690, "y": 50, "content": "DIM_PRODUTO", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 690, "y": 75, "content": "sk_produto (PK)", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 690, "y": 93, "content": "nome, categoria", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 690, "y": 111, "content": "marca, fornecedor", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 60, "y": 320, "width": 180, "height": 110, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 150, "y": 350, "content": "DIM_CLIENTE", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 150, "y": 375, "content": "sk_cliente (PK)", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 150, "y": 393, "content": "nome, cidade, estado", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 150, "y": 411, "content": "segmento", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 600, "y": 320, "width": 180, "height": 110, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 690, "y": 350, "content": "DIM_LOJA", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 690, "y": 375, "content": "sk_loja (PK)", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 690, "y": 393, "content": "nome, cidade, região", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 690, "y": 411, "content": "gerente, tipo", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 240, "y": 100 }, "to": { "x": 300, "y": 190 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 600, "y": 100 }, "to": { "x": 540, "y": 190 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 240, "y": 360 }, "to": { "x": 300, "y": 270 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 600, "y": 360 }, "to": { "x": 540, "y": 270 }, "stroke": "#f59e0b", "strokeWidth": 2 }
  ]
}
```

**Características do Star Schema:**
- Dimensões **desnormalizadas** (todos os atributos em uma tabela)
- JOINs simples (sempre fato → dimensão)
- Excelente performance para consultas analíticas
- Fácil de entender para usuários de negócio

---

## Esquema Floco de Neve (Snowflake Schema)

O **Snowflake Schema** normaliza as dimensões, criando sub-dimensões:

```diagram
{
  "title": "Snowflake Schema - Dimensão Produto normalizada",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 40, "y": 110, "width": 180, "height": 100, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 3, "rounded": 10 },
    { "type": "text", "x": 130, "y": 140, "content": "FATO_VENDAS", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 130, "y": 165, "content": "sk_produto (FK)", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 130, "y": 185, "content": "métricas...", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 220, "y": 160 }, "to": { "x": 280, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "rect", "x": 280, "y": 100, "width": 160, "height": 120, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 360, "y": 130, "content": "DIM_PRODUTO", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 360, "y": 155, "content": "sk_produto (PK)", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 360, "y": 173, "content": "nome", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 360, "y": 191, "content": "sk_categoria (FK)", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 360, "y": 209, "content": "sk_marca (FK)", "fontSize": 10, "color": "#57534e" },

    { "type": "line", "from": { "x": 440, "y": 130 }, "to": { "x": 520, "y": 80 }, "stroke": "#a8a29e", "strokeWidth": 1.5 },
    { "type": "line", "from": { "x": 440, "y": 190 }, "to": { "x": 520, "y": 240 }, "stroke": "#a8a29e", "strokeWidth": 1.5 },

    { "type": "rect", "x": 520, "y": 30, "width": 140, "height": 90, "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 8 },
    { "type": "text", "x": 590, "y": 55, "content": "DIM_CATEGORIA", "fontSize": 11, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 590, "y": 78, "content": "sk_categoria (PK)", "fontSize": 9, "color": "#57534e" },
    { "type": "text", "x": 590, "y": 96, "content": "nome, departamento", "fontSize": 9, "color": "#78716c" },

    { "type": "rect", "x": 520, "y": 200, "width": 140, "height": 90, "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 8 },
    { "type": "text", "x": 590, "y": 225, "content": "DIM_MARCA", "fontSize": 11, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 590, "y": 248, "content": "sk_marca (PK)", "fontSize": 9, "color": "#57534e" },
    { "type": "text", "x": 590, "y": 266, "content": "nome, país", "fontSize": 9, "color": "#78716c" },

    { "type": "line", "from": { "x": 660, "y": 75 }, "to": { "x": 720, "y": 75 }, "stroke": "#a8a29e", "strokeWidth": 1.5 },

    { "type": "rect", "x": 720, "y": 40, "width": 100, "height": 70, "fill": "#d1fae5", "stroke": "#10b981", "rounded": 8 },
    { "type": "text", "x": 770, "y": 65, "content": "DIM_DEPTO", "fontSize": 10, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 770, "y": 88, "content": "sk, nome", "fontSize": 9, "color": "#78716c" }
  ]
}
```

**Star vs Snowflake:**

| Aspecto | Star Schema | Snowflake Schema |
|---------|-------------|------------------|
| Dimensões | Desnormalizadas | Normalizadas |
| JOINs | Menos (mais simples) | Mais (mais complexos) |
| Espaço | Mais redundância | Menos redundância |
| Performance | Geralmente melhor | Pode ser pior |
| Manutenção | Mais fácil | Mais complexa |

> [!dica] Na prática, o **Star Schema** é preferido na maioria dos casos. O Snowflake é usado quando há dimensões muito grandes com atributos que mudam frequentemente.

---

## Dimensões Especiais

### Dimensão Tempo

Praticamente **todo** DW tem uma dimensão tempo. Ela é especial porque:
- É pré-populada (todos os dias dos próximos N anos)
- Contém atributos derivados (dia da semana, feriado, etc.)

```sql
-- Exemplo de DIM_TEMPO
sk_tempo      -- Surrogate Key (YYYYMMDD)
data          -- 2024-03-15
dia           -- 15
mes           -- 3
ano           -- 2024
trimestre     -- 1
semestre      -- 1
dia_semana    -- Sexta-feira
eh_feriado    -- N
eh_fim_semana -- N
```

### Dimensão Degenerada

Uma dimensão **degenerada** não tem tabela própria — fica na tabela fato.

```
Exemplo: número do pedido, número da nota fiscal

Não faz sentido criar uma tabela DIM_PEDIDO só com sk e número.
O número fica diretamente na FATO_VENDAS.
```

### Dimensão Junk (Lixo)

Agrupa **flags e indicadores** pequenos que não merecem dimensões próprias:

```
Em vez de:
- dim_tipo_pagamento (2 valores)
- dim_canal_venda (3 valores)
- dim_promocao (S/N)

Criar:
- dim_junk com todas as combinações possíveis
```

---

## Slowly Changing Dimensions (SCD)

O que acontece quando um atributo de dimensão **muda**? Por exemplo, um cliente muda de cidade.

### Tipo 0: Manter Original
Não atualiza. Mantém o valor original para sempre.

### Tipo 1: Sobrescrever
Atualiza o valor. Perde o histórico.

```
Antes: João, São Paulo
Depois: João, Rio de Janeiro
(perdeu-se a informação que ele morou em SP)
```

### Tipo 2: Criar Nova Linha
Adiciona nova linha com nova surrogate key. Mantém histórico completo.

```
sk=1: João, São Paulo, 2020-01-01, 2024-02-28 (inativo)
sk=2: João, Rio de Janeiro, 2024-03-01, NULL (ativo)
```

### Tipo 3: Adicionar Coluna
Guarda valor atual e anterior em colunas separadas.

```
João, cidade_atual=RJ, cidade_anterior=SP
```

```diagram
{
  "title": "Comparação dos tipos de SCD",
  "width": 840,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 40, "y": 40, "width": 180, "height": 130, "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 10 },
    { "type": "text", "x": 130, "y": 70, "content": "Tipo 1", "fontSize": 14, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "text", "x": 130, "y": 95, "content": "Sobrescreve", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 130, "y": 120, "content": "Sem histórico", "fontSize": 11, "color": "#ef4444" },
    { "type": "text", "x": 130, "y": 145, "content": "Simples", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 250, "y": 40, "width": 180, "height": 130, "fill": "#d1fae5", "stroke": "#10b981", "rounded": 10 },
    { "type": "text", "x": 340, "y": 70, "content": "Tipo 2", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 340, "y": 95, "content": "Nova linha", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 340, "y": 120, "content": "Histórico completo", "fontSize": 11, "color": "#10b981" },
    { "type": "text", "x": 340, "y": 145, "content": "Mais usado", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 460, "y": 40, "width": 180, "height": 130, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 550, "y": 70, "content": "Tipo 3", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 550, "y": 95, "content": "Coluna extra", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 550, "y": 120, "content": "Histórico limitado", "fontSize": 11, "color": "#f59e0b" },
    { "type": "text", "x": 550, "y": 145, "content": "Apenas 1 mudança", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 670, "y": 40, "width": 130, "height": 130, "fill": "#e5e5e5", "stroke": "#a8a29e", "rounded": 10 },
    { "type": "text", "x": 735, "y": 70, "content": "Tipo 0", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 735, "y": 95, "content": "Não muda", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 735, "y": 120, "content": "Valor original", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 735, "y": 145, "content": "fixo", "fontSize": 11, "color": "#78716c" }
  ]
}
```

---

## Granularidade

A **granularidade** define o nível de detalhe da tabela fato. É uma das decisões mais importantes!

| Granularidade | Exemplo | Registros | Análise |
|---------------|---------|-----------|---------|
| Alta (detalhe) | Uma linha por item vendido | Muitos | Qualquer agregação |
| Média | Uma linha por venda | Médio | Por venda ou acima |
| Baixa (agregada) | Uma linha por dia/loja | Poucos | Apenas agregado |

> [!atencao] **Regra de ouro:** Comece com a **maior granularidade possível**. É fácil agregar dados detalhados, mas impossível detalhar dados já agregados.

---

## Recapitulando

| Conceito | Descrição |
|----------|-----------|
| **Tabela Fato** | Métricas numéricas (o que aconteceu) |
| **Tabela Dimensão** | Atributos descritivos (contexto) |
| **Star Schema** | Fato central + dimensões desnormalizadas |
| **Snowflake** | Star com dimensões normalizadas |
| **SCD** | Estratégias para mudanças em dimensões |
| **Granularidade** | Nível de detalhe da tabela fato |

---

## Exercícios de Fixação

1. **Classificação:** Para cada item, diga se é Fato ou Dimensão:
   - a) Valor do frete
   - b) Nome do vendedor
   - c) Quantidade em estoque
   - d) Categoria do produto
   - e) Data da venda

2. **Tipos de Fato:** Classifique como Aditivo, Semi-Aditivo ou Não-Aditivo:
   - a) Número de funcionários
   - b) Receita total
   - c) Taxa de conversão (%)
   - d) Saldo da conta

3. **SCD:** Uma empresa quer rastrear o histórico de cargos dos funcionários. Qual tipo de SCD é mais adequado? Por quê?

4. **Modelagem:** Desenhe um Star Schema para um sistema de biblioteca (empréstimos de livros). Identifique fato e dimensões.

5. **Granularidade:** Um e-commerce registra vendas. Qual granularidade você escolheria: por item, por pedido, ou por dia? Justifique.
