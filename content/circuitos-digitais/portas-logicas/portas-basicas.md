---
title: "Portas Básicas: AND, OR, NOT"
description: "As três portas fundamentais que são a base de toda a lógica digital — símbolos, tabelas-verdade e comportamento."
duration: 1 aula
---

# Portas Básicas: AND, OR, NOT

Toda a eletrônica digital — de calculadoras a supercomputadores — é construída a partir de apenas **três operações fundamentais**. Nesta aula, vamos conhecer as portas que implementam essas operações: AND, OR e NOT.

---

## A Porta NOT (Inversor)

Vamos começar pela mais simples. A porta **NOT** tem apenas **uma entrada** e faz uma coisa: **inverte** o valor.

- Entra 0 → sai 1
- Entra 1 → sai 0

```diagram
{
  "title": "Porta NOT (Inversor)",
  "width": 800,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 360, "height": 180, "fill": "#fdf2f8", "stroke": "#fbcfe8", "rounded": 14 },
    { "type": "text", "x": 220, "y": 50, "content": "Símbolo da Porta NOT", "fontSize": 14, "color": "#9d174d", "fontWeight": "bold" },

    { "type": "gate", "x": 140, "y": 85, "width": 70, "height": 50, "gateType": "not", "fill": "#fce7f3", "stroke": "#db2777", "inputs": ["A"], "outputs": ["A'"] },

    { "type": "rect", "x": 420, "y": 20, "width": 340, "height": 180, "fill": "#f5f5f4", "stroke": "#e5e5e5", "rounded": 14 },
    { "type": "text", "x": 590, "y": 50, "content": "Tabela-Verdade", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 470, "y": 75, "width": 80, "height": 35, "fill": "#fce7f3", "stroke": "#f9a8d4", "rounded": 4 },
    { "type": "text", "x": 510, "y": 98, "content": "A", "fontSize": 13, "color": "#9d174d", "fontWeight": "bold" },

    { "type": "rect", "x": 560, "y": 75, "width": 150, "height": 35, "fill": "#fce7f3", "stroke": "#f9a8d4", "rounded": 4 },
    { "type": "text", "x": 635, "y": 98, "content": "Saída (NOT A)", "fontSize": 13, "color": "#9d174d", "fontWeight": "bold" },

    { "type": "rect", "x": 470, "y": 110, "width": 80, "height": 30, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 510, "y": 130, "content": "0", "fontSize": 14, "color": "#78716c" },
    { "type": "rect", "x": 560, "y": 110, "width": 150, "height": 30, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 635, "y": 130, "content": "1", "fontSize": 14, "color": "#db2777", "fontWeight": "bold" },

    { "type": "rect", "x": 470, "y": 140, "width": 80, "height": 30, "fill": "#fafafa", "stroke": "#e5e5e5" },
    { "type": "text", "x": 510, "y": 160, "content": "1", "fontSize": 14, "color": "#78716c" },
    { "type": "rect", "x": 560, "y": 140, "width": 150, "height": 30, "fill": "#fafafa", "stroke": "#e5e5e5" },
    { "type": "text", "x": 635, "y": 160, "content": "0", "fontSize": 14, "color": "#db2777", "fontWeight": "bold" }
  ]
}
```

> [!dica] **Analogia:** Pense em um interruptor "invertido" — quando você pressiona (1), a luz apaga (0). Quando solta (0), a luz acende (1).

### Notações para NOT

A operação NOT pode ser escrita de várias formas:

| Notação        | Exemplo        | Significado |
| -------------- | -------------- | ----------- |
| Barra superior | $\overline{A}$ | NOT A       |
| Apóstrofo      | A'             | NOT A       |
| Símbolo ¬      | ¬A             | NOT A       |

---

## A Porta AND

A porta **AND** implementa a operação "E" lógico. A saída é 1 **somente** quando **todas** as entradas são 1.

```diagram
{
  "title": "Porta AND (2 entradas)",
  "width": 800,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 360, "height": 220, "fill": "#eff6ff", "stroke": "#bfdbfe", "rounded": 14 },
    { "type": "text", "x": 220, "y": 50, "content": "Símbolo da Porta AND", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "gate", "x": 140, "y": 80, "width": 80, "height": 60, "gateType": "and", "fill": "#dbeafe", "stroke": "#2563eb", "inputs": ["A", "B"], "outputs": ["A·B"], "label": "AND" },

    { "type": "rect", "x": 420, "y": 20, "width": 340, "height": 220, "fill": "#f5f5f4", "stroke": "#e5e5e5", "rounded": 14 },
    { "type": "text", "x": 590, "y": 50, "content": "Tabela-Verdade", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 75, "width": 50, "height": 30, "fill": "#dbeafe", "stroke": "#93c5fd", "rounded": 4 },
    { "type": "text", "x": 475, "y": 95, "content": "A", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 75, "width": 50, "height": 30, "fill": "#dbeafe", "stroke": "#93c5fd", "rounded": 4 },
    { "type": "text", "x": 535, "y": 95, "content": "B", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 75, "width": 140, "height": 30, "fill": "#dbeafe", "stroke": "#93c5fd", "rounded": 4 },
    { "type": "text", "x": 640, "y": 95, "content": "Saída (A·B)", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 105, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 475, "y": 123, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 105, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 535, "y": 123, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 105, "width": 140, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 640, "y": 123, "content": "0", "fontSize": 13, "color": "#ef4444", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 133, "width": 50, "height": 28, "fill": "#fafafa", "stroke": "#e5e5e5" },
    { "type": "text", "x": 475, "y": 151, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 133, "width": 50, "height": 28, "fill": "#fafafa", "stroke": "#e5e5e5" },
    { "type": "text", "x": 535, "y": 151, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 133, "width": 140, "height": 28, "fill": "#fafafa", "stroke": "#e5e5e5" },
    { "type": "text", "x": 640, "y": 151, "content": "0", "fontSize": 13, "color": "#ef4444", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 161, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 475, "y": 179, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 161, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 535, "y": 179, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 161, "width": 140, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 640, "y": 179, "content": "0", "fontSize": 13, "color": "#ef4444", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 189, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 207, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 189, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 207, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 189, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 207, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" }
  ]
}
```

> [!nota] **Observe:** A saída só é 1 quando A **E** B são 1. Basta uma entrada ser 0 para a saída ser 0.

### Analogia do AND

Pense em dois interruptores **em série** numa lâmpada:

```diagram
{
  "title": "Analogia: Interruptores em Série",
  "width": 800,
  "height": 180,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 720, "height": 140, "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 400, "y": 50, "content": "AND = Interruptores em série (ambos precisam estar fechados)", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 100, "y": 100, "content": "🔌", "fontSize": 24, "color": "#57534e" },
    { "type": "line", "from": { "x": 130, "y": 100 }, "to": { "x": 200, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 200, "y": 85, "width": 80, "height": 30, "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 6 },
    { "type": "text", "x": 240, "y": 105, "content": "A", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 280, "y": 100 }, "to": { "x": 340, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 340, "y": 85, "width": 80, "height": 30, "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 6 },
    { "type": "text", "x": 380, "y": 105, "content": "B", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 420, "y": 100 }, "to": { "x": 500, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 540, "cy": 100, "rx": 25, "ry": 25, "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "text", "x": 540, "y": 105, "content": "💡", "fontSize": 18, "color": "#78716c" },

    { "type": "text", "x": 620, "y": 105, "content": "Só acende se A e B\nestiverem fechados", "fontSize": 11, "color": "#78716c" }
  ]
}
```

### Notações para AND

| Notação       | Exemplo | Significado |
| ------------- | ------- | ----------- |
| Ponto         | A · B   | A AND B     |
| Multiplicação | A × B   | A AND B     |
| Justaposição  | AB      | A AND B     |
| Símbolo ∧     | A ∧ B   | A AND B     |

---

## A Porta OR

A porta **OR** implementa a operação "OU" lógico. A saída é 1 quando **pelo menos uma** entrada é 1.

```diagram
{
  "title": "Porta OR (2 entradas)",
  "width": 800,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 360, "height": 220, "fill": "#f0fdf4", "stroke": "#bbf7d0", "rounded": 14 },
    { "type": "text", "x": 220, "y": 50, "content": "Símbolo da Porta OR", "fontSize": 14, "color": "#166534", "fontWeight": "bold" },

    { "type": "gate", "x": 140, "y": 80, "width": 80, "height": 60, "gateType": "or", "fill": "#dcfce7", "stroke": "#22c55e", "inputs": ["A", "B"], "outputs": ["A+B"], "label": "OR" },

    { "type": "rect", "x": 420, "y": 20, "width": 340, "height": 220, "fill": "#f5f5f4", "stroke": "#e5e5e5", "rounded": 14 },
    { "type": "text", "x": 590, "y": 50, "content": "Tabela-Verdade", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 75, "width": 50, "height": 30, "fill": "#dcfce7", "stroke": "#86efac", "rounded": 4 },
    { "type": "text", "x": 475, "y": 95, "content": "A", "fontSize": 12, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 75, "width": 50, "height": 30, "fill": "#dcfce7", "stroke": "#86efac", "rounded": 4 },
    { "type": "text", "x": 535, "y": 95, "content": "B", "fontSize": 12, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 75, "width": 140, "height": 30, "fill": "#dcfce7", "stroke": "#86efac", "rounded": 4 },
    { "type": "text", "x": 640, "y": 95, "content": "Saída (A+B)", "fontSize": 12, "color": "#166534", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 105, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 123, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 105, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 123, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 105, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 123, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 133, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 475, "y": 151, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 133, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 535, "y": 151, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 133, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 151, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 161, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 475, "y": 179, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 161, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 535, "y": 179, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 161, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 179, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 189, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 475, "y": 207, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 189, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 535, "y": 207, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 189, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 207, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" }
  ]
}
```

> [!nota] **Observe:** A saída só é 0 quando **ambas** entradas são 0. Basta uma ser 1 para a saída ser 1.

### Analogia do OR

Pense em dois interruptores **em paralelo** numa lâmpada:

```diagram
{
  "title": "Analogia: Interruptores em Paralelo",
  "width": 800,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 720, "height": 160, "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 400, "y": 50, "content": "OR = Interruptores em paralelo (qualquer um fechado acende)", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 100, "y": 115, "content": "🔌", "fontSize": 24, "color": "#57534e" },
    { "type": "line", "from": { "x": 130, "y": 115 }, "to": { "x": 180, "y": 115 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 180, "cy": 115, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },

    { "type": "line", "from": { "x": 180, "y": 115 }, "to": { "x": 180, "y": 85 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 180, "y": 85 }, "to": { "x": 220, "y": 85 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "rect", "x": 220, "y": 70, "width": 80, "height": 30, "fill": "#dcfce7", "stroke": "#22c55e", "rounded": 6 },
    { "type": "text", "x": 260, "y": 90, "content": "A", "fontSize": 14, "color": "#166534", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 300, "y": 85 }, "to": { "x": 360, "y": 85 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 180, "y": 115 }, "to": { "x": 180, "y": 145 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 180, "y": 145 }, "to": { "x": 220, "y": 145 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "rect", "x": 220, "y": 130, "width": 80, "height": 30, "fill": "#dcfce7", "stroke": "#22c55e", "rounded": 6 },
    { "type": "text", "x": 260, "y": 150, "content": "B", "fontSize": 14, "color": "#166534", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 300, "y": 145 }, "to": { "x": 360, "y": 145 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 360, "cy": 115, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "line", "from": { "x": 360, "y": 85 }, "to": { "x": 360, "y": 145 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 360, "y": 115 }, "to": { "x": 430, "y": 115 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 470, "cy": 115, "rx": 25, "ry": 25, "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "text", "x": 470, "y": 120, "content": "💡", "fontSize": 18, "color": "#78716c" },

    { "type": "text", "x": 570, "y": 115, "content": "Acende se A ou B\n(ou ambos) estiverem\nfechados", "fontSize": 11, "color": "#78716c" }
  ]
}
```

### Notações para OR

| Notação   | Exemplo | Significado |
| --------- | ------- | ----------- |
| Soma      | A + B   | A OR B      |
| Símbolo ∨ | A ∨ B   | A OR B      |

---

## Comparativo das Três Portas Básicas

```diagram
{
  "title": "Resumo: As Três Portas Fundamentais",
  "width": 800,
  "height": 300,
  "elements": [
    { "type": "rect", "x": 30, "y": 20, "width": 240, "height": 260, "fill": "#fdf2f8", "stroke": "#fbcfe8", "rounded": 14 },
    { "type": "text", "x": 150, "y": 50, "content": "NOT (Inversor)", "fontSize": 15, "color": "#9d174d", "fontWeight": "bold" },
    { "type": "gate", "x": 85, "y": 70, "width": 60, "height": 40, "gateType": "not", "fill": "#fce7f3", "stroke": "#db2777", "inputs": ["A"], "outputs": [""], "inputLabels": true, "outputLabels": false },
    { "type": "text", "x": 150, "y": 150, "content": "Inverte o sinal", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 150, "y": 175, "content": "0 → 1", "fontSize": 13, "color": "#db2777", "fontWeight": "bold" },
    { "type": "text", "x": 150, "y": 195, "content": "1 → 0", "fontSize": 13, "color": "#db2777", "fontWeight": "bold" },
    { "type": "text", "x": 150, "y": 230, "content": "Expressão: A' ou ¬A", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 150, "y": 255, "content": "1 entrada, 1 saída", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 280, "y": 20, "width": 240, "height": 260, "fill": "#eff6ff", "stroke": "#bfdbfe", "rounded": 14 },
    { "type": "text", "x": 400, "y": 50, "content": "AND", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "gate", "x": 330, "y": 65, "width": 70, "height": 50, "gateType": "and", "fill": "#dbeafe", "stroke": "#2563eb", "inputs": ["A", "B"], "outputs": [""], "inputLabels": true, "outputLabels": false },
    { "type": "text", "x": 400, "y": 150, "content": "Todos precisam ser 1", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 400, "y": 175, "content": "0 AND ? = 0", "fontSize": 13, "color": "#2563eb" },
    { "type": "text", "x": 400, "y": 195, "content": "1 AND 1 = 1", "fontSize": 13, "color": "#2563eb", "fontWeight": "bold" },
    { "type": "text", "x": 400, "y": 230, "content": "Expressão: A·B ou AB", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 400, "y": 255, "content": "Em série", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 530, "y": 20, "width": 240, "height": 260, "fill": "#f0fdf4", "stroke": "#bbf7d0", "rounded": 14 },
    { "type": "text", "x": 650, "y": 50, "content": "OR", "fontSize": 15, "color": "#166534", "fontWeight": "bold" },
    { "type": "gate", "x": 580, "y": 65, "width": 70, "height": 50, "gateType": "or", "fill": "#dcfce7", "stroke": "#22c55e", "inputs": ["A", "B"], "outputs": [""], "inputLabels": true, "outputLabels": false },
    { "type": "text", "x": 650, "y": 150, "content": "Pelo menos um = 1", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 650, "y": 175, "content": "1 OR ? = 1", "fontSize": 13, "color": "#22c55e", "fontWeight": "bold" },
    { "type": "text", "x": 650, "y": 195, "content": "0 OR 0 = 0", "fontSize": 13, "color": "#22c55e" },
    { "type": "text", "x": 650, "y": 230, "content": "Expressão: A+B", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 650, "y": 255, "content": "Em paralelo", "fontSize": 11, "color": "#78716c" }
  ]
}
```

---

## Por que Apenas Três?

Com apenas **NOT**, **AND** e **OR**, você pode implementar **qualquer** função lógica possível. Este é um resultado fundamental da matemática chamado **completude funcional**.

Isso significa que todo circuito digital — do mais simples ao mais complexo — pode ser construído combinando essas três portas básicas!

> [!nota] **Curiosidade:** Na prática, veremos que podemos simplificar ainda mais. Uma única porta (como NAND ou NOR) também é "funcionalmente completa" — mas isso é assunto para a próxima aula!

---

## Exercícios de Fixação

1. **Tabela NOT:** Uma porta NOT recebe os valores 1, 0, 1, 0, 1 em sequência. Qual é a sequência de saída?

2. **Tabela AND:** Complete: 1 AND 0 = **_; 1 AND 1 = _**; 0 AND 0 = \_\_\_

3. **Tabela OR:** Complete: 1 OR 0 = **_; 0 OR 0 = _**; 0 OR 1 = \_\_\_

4. **Análise de circuito:** Se A=1 e B=0, qual é a saída de:
   - NOT A = ?
   - A AND B = ?
   - A OR B = ?

5. **Expressão para texto:** "A luz acende se a chave A **E** a chave B estiverem ligadas". Qual porta representa isso?

6. **Expressão para texto:** "O alarme toca se a porta A **OU** a porta B forem abertas". Qual porta representa isso?
