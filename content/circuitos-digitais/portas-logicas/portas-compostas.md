---
title: "Portas Compostas: NAND, NOR, XOR, XNOR"
description: "Expandindo o arsenal — portas derivadas que simplificam projetos e revelam propriedades surpreendentes."
duration: 1 aula
---

# Portas Compostas: NAND, NOR, XOR, XNOR

As três portas básicas (AND, OR, NOT) são suficientes para construir qualquer circuito. Mas na prática, usamos também portas **compostas** que combinam operações — elas simplificam projetos e, como veremos, têm propriedades muito interessantes.

---

## Porta NAND (NOT + AND)

A porta **NAND** é simplesmente uma AND seguida de uma inversão. O nome vem de "**N**ot **AND**".

A saída é 0 **apenas** quando todas as entradas são 1. Em todos os outros casos, a saída é 1.

```diagram
{
  "title": "Porta NAND",
  "width": 800,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 360, "height": 240, "fill": "#fff7ed", "stroke": "#fed7aa", "rounded": 14 },
    { "type": "text", "x": 220, "y": 50, "content": "Símbolo da Porta NAND", "fontSize": 14, "color": "#c2410c", "fontWeight": "bold" },

    { "type": "gate", "x": 140, "y": 80, "width": 80, "height": 60, "gateType": "nand", "fill": "#ffedd5", "stroke": "#ea580c", "inputs": ["A", "B"], "outputs": ["(A·B)'"], "label": "NAND" },

    { "type": "text", "x": 220, "y": 195, "content": "NAND = AND + NOT", "fontSize": 12, "color": "#c2410c" },
    { "type": "text", "x": 220, "y": 220, "content": "○ indica inversão", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 420, "y": 20, "width": 340, "height": 240, "fill": "#f5f5f4", "stroke": "#e5e5e5", "rounded": 14 },
    { "type": "text", "x": 590, "y": 50, "content": "Tabela-Verdade", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 75, "width": 50, "height": 30, "fill": "#ffedd5", "stroke": "#fdba74", "rounded": 4 },
    { "type": "text", "x": 475, "y": 95, "content": "A", "fontSize": 12, "color": "#c2410c", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 75, "width": 50, "height": 30, "fill": "#ffedd5", "stroke": "#fdba74", "rounded": 4 },
    { "type": "text", "x": 535, "y": 95, "content": "B", "fontSize": 12, "color": "#c2410c", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 75, "width": 140, "height": 30, "fill": "#ffedd5", "stroke": "#fdba74", "rounded": 4 },
    { "type": "text", "x": 640, "y": 95, "content": "Saída NAND", "fontSize": 12, "color": "#c2410c", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 105, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 123, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 105, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 123, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 105, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 123, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 133, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 151, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 133, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 151, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 133, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 151, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 161, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 179, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 161, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 179, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 161, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 179, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 189, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 207, "content": "1", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 189, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 207, "content": "1", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 189, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 207, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },

    { "type": "text", "x": 590, "y": 245, "content": "Inverso da AND!", "fontSize": 11, "color": "#ea580c", "fontStyle": "italic" }
  ]
}
```

> [!nota] Compare com a AND: onde AND dá 1, NAND dá 0, e vice-versa. NAND é literalmente NOT(AND).

---

## Porta NOR (NOT + OR)

A porta **NOR** é uma OR seguida de uma inversão. O nome vem de "**N**ot **OR**".

A saída é 1 **apenas** quando todas as entradas são 0. Qualquer entrada 1 faz a saída ser 0.

```diagram
{
  "title": "Porta NOR",
  "width": 800,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 360, "height": 240, "fill": "#faf5ff", "stroke": "#e9d5ff", "rounded": 14 },
    { "type": "text", "x": 220, "y": 50, "content": "Símbolo da Porta NOR", "fontSize": 14, "color": "#7e22ce", "fontWeight": "bold" },

    { "type": "gate", "x": 140, "y": 80, "width": 80, "height": 60, "gateType": "nor", "fill": "#f3e8ff", "stroke": "#a855f7", "inputs": ["A", "B"], "outputs": ["(A+B)'"], "label": "NOR" },

    { "type": "text", "x": 220, "y": 195, "content": "NOR = OR + NOT", "fontSize": 12, "color": "#7e22ce" },
    { "type": "text", "x": 220, "y": 220, "content": "○ indica inversão", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 420, "y": 20, "width": 340, "height": 240, "fill": "#f5f5f4", "stroke": "#e5e5e5", "rounded": 14 },
    { "type": "text", "x": 590, "y": 50, "content": "Tabela-Verdade", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 75, "width": 50, "height": 30, "fill": "#f3e8ff", "stroke": "#d8b4fe", "rounded": 4 },
    { "type": "text", "x": 475, "y": 95, "content": "A", "fontSize": 12, "color": "#7e22ce", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 75, "width": 50, "height": 30, "fill": "#f3e8ff", "stroke": "#d8b4fe", "rounded": 4 },
    { "type": "text", "x": 535, "y": 95, "content": "B", "fontSize": 12, "color": "#7e22ce", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 75, "width": 140, "height": 30, "fill": "#f3e8ff", "stroke": "#d8b4fe", "rounded": 4 },
    { "type": "text", "x": 640, "y": 95, "content": "Saída NOR", "fontSize": 12, "color": "#7e22ce", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 105, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 123, "content": "0", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 105, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 123, "content": "0", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 105, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 123, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 133, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 151, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 133, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 151, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 133, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 151, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 161, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 179, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 161, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 179, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 161, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 179, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 189, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 207, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 189, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 207, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 189, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 207, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },

    { "type": "text", "x": 590, "y": 245, "content": "Inverso da OR!", "fontSize": 11, "color": "#a855f7", "fontStyle": "italic" }
  ]
}
```

---

## A Universalidade de NAND e NOR

Aqui está um fato surpreendente: tanto NAND quanto NOR são **portas universais**. Isso significa que você pode construir **qualquer circuito lógico** usando apenas um tipo de porta!

```diagram
{
  "title": "NAND como Porta Universal",
  "width": 800,
  "height": 300,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 720, "height": 260, "fill": "#fff7ed", "stroke": "#fed7aa", "rounded": 14 },
    { "type": "text", "x": 400, "y": 50, "content": "Construindo todas as portas básicas apenas com NAND", "fontSize": 14, "color": "#c2410c", "fontWeight": "bold" },

    { "type": "rect", "x": 60, "y": 80, "width": 200, "height": 90, "fill": "#fdf2f8", "stroke": "#f9a8d4", "rounded": 10 },
    { "type": "text", "x": 160, "y": 100, "content": "NOT com NAND", "fontSize": 12, "color": "#9d174d", "fontWeight": "bold" },
    { "type": "gate", "x": 95, "y": 115, "width": 60, "height": 40, "gateType": "nand", "fill": "#ffedd5", "stroke": "#ea580c", "inputs": ["A", "A"], "outputs": ["A'"], "inputLabels": true, "outputLabels": true },

    { "type": "rect", "x": 300, "y": 80, "width": 200, "height": 90, "fill": "#eff6ff", "stroke": "#93c5fd", "rounded": 10 },
    { "type": "text", "x": 400, "y": 100, "content": "AND com 2 NANDs", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 400, "y": 145, "content": "NAND → NAND", "fontSize": 11, "color": "#3b82f6" },
    { "type": "text", "x": 400, "y": 165, "content": "(inverte 2x = AND)", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 540, "y": 80, "width": 200, "height": 90, "fill": "#f0fdf4", "stroke": "#86efac", "rounded": 10 },
    { "type": "text", "x": 640, "y": 100, "content": "OR com 3 NANDs", "fontSize": 12, "color": "#166534", "fontWeight": "bold" },
    { "type": "text", "x": 640, "y": 145, "content": "De Morgan:", "fontSize": 11, "color": "#22c55e" },
    { "type": "text", "x": 640, "y": 165, "content": "A+B = (A'·B')'", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 150, "y": 190, "width": 500, "height": 70, "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 10 },
    { "type": "text", "x": 400, "y": 215, "content": "💡 Consequência prática:", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 400, "y": 240, "content": "Fábricas podem produzir apenas chips NAND e construir qualquer circuito!", "fontSize": 12, "color": "#78716c" }
  ]
}
```

> [!dica] **Por que isso importa?** Na fabricação de chips, é mais barato produzir apenas um tipo de porta. Com NAND (ou NOR), você tem toda a lógica que precisa!

---

## Porta XOR (OU Exclusivo)

A porta **XOR** (exclusive OR) é diferente das anteriores. A saída é 1 quando as entradas são **diferentes**.

```diagram
{
  "title": "Porta XOR",
  "width": 800,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 360, "height": 240, "fill": "#fefce8", "stroke": "#fef08a", "rounded": 14 },
    { "type": "text", "x": 220, "y": 50, "content": "Símbolo da Porta XOR", "fontSize": 14, "color": "#a16207", "fontWeight": "bold" },

    { "type": "gate", "x": 140, "y": 80, "width": 80, "height": 60, "gateType": "xor", "fill": "#fef9c3", "stroke": "#eab308", "inputs": ["A", "B"], "outputs": ["A⊕B"], "label": "XOR" },

    { "type": "text", "x": 220, "y": 195, "content": "XOR = OU Exclusivo", "fontSize": 12, "color": "#a16207" },
    { "type": "text", "x": 220, "y": 220, "content": "\"Um ou outro, mas não ambos\"", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 420, "y": 20, "width": 340, "height": 240, "fill": "#f5f5f4", "stroke": "#e5e5e5", "rounded": 14 },
    { "type": "text", "x": 590, "y": 50, "content": "Tabela-Verdade", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 75, "width": 50, "height": 30, "fill": "#fef9c3", "stroke": "#fde047", "rounded": 4 },
    { "type": "text", "x": 475, "y": 95, "content": "A", "fontSize": 12, "color": "#a16207", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 75, "width": 50, "height": 30, "fill": "#fef9c3", "stroke": "#fde047", "rounded": 4 },
    { "type": "text", "x": 535, "y": 95, "content": "B", "fontSize": 12, "color": "#a16207", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 75, "width": 140, "height": 30, "fill": "#fef9c3", "stroke": "#fde047", "rounded": 4 },
    { "type": "text", "x": 640, "y": 95, "content": "Saída XOR", "fontSize": 12, "color": "#a16207", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 105, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 123, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 105, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 123, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 105, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 123, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "text", "x": 720, "y": 123, "content": "iguais", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 450, "y": 133, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 151, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 133, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 151, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 133, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 151, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "text", "x": 720, "y": 151, "content": "diferentes", "fontSize": 10, "color": "#22c55e" },

    { "type": "rect", "x": 450, "y": 161, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 179, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 161, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 179, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 161, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 179, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "text", "x": 720, "y": 179, "content": "diferentes", "fontSize": 10, "color": "#22c55e" },

    { "type": "rect", "x": 450, "y": 189, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 207, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 189, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 207, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 189, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 207, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "text", "x": 720, "y": 207, "content": "iguais", "fontSize": 10, "color": "#78716c" }
  ]
}
```

### Aplicações do XOR

O XOR é especialmente útil para:

- **Comparação de bits**: XOR = 1 indica que os bits são diferentes
- **Soma binária**: A ⊕ B é o bit de soma (sem carry)
- **Criptografia**: XOR com uma chave inverte/restaura dados
- **Detecção de erro**: Paridade (XOR de todos os bits)

---

## Porta XNOR (NOT + XOR)

A porta **XNOR** é o inverso do XOR. A saída é 1 quando as entradas são **iguais**.

```diagram
{
  "title": "Porta XNOR (Coincidência)",
  "width": 800,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 360, "height": 240, "fill": "#ecfdf5", "stroke": "#a7f3d0", "rounded": 14 },
    { "type": "text", "x": 220, "y": 50, "content": "Símbolo da Porta XNOR", "fontSize": 14, "color": "#047857", "fontWeight": "bold" },

    { "type": "gate", "x": 140, "y": 80, "width": 80, "height": 60, "gateType": "xnor", "fill": "#d1fae5", "stroke": "#10b981", "inputs": ["A", "B"], "outputs": ["A⊙B"], "label": "XNOR" },

    { "type": "text", "x": 220, "y": 195, "content": "XNOR = XOR + NOT", "fontSize": 12, "color": "#047857" },
    { "type": "text", "x": 220, "y": 220, "content": "\"Coincidência\" ou \"Igualdade\"", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 420, "y": 20, "width": 340, "height": 240, "fill": "#f5f5f4", "stroke": "#e5e5e5", "rounded": 14 },
    { "type": "text", "x": 590, "y": 50, "content": "Tabela-Verdade", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 75, "width": 50, "height": 30, "fill": "#d1fae5", "stroke": "#6ee7b7", "rounded": 4 },
    { "type": "text", "x": 475, "y": 95, "content": "A", "fontSize": 12, "color": "#047857", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 75, "width": 50, "height": 30, "fill": "#d1fae5", "stroke": "#6ee7b7", "rounded": 4 },
    { "type": "text", "x": 535, "y": 95, "content": "B", "fontSize": 12, "color": "#047857", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 75, "width": 140, "height": 30, "fill": "#d1fae5", "stroke": "#6ee7b7", "rounded": 4 },
    { "type": "text", "x": 640, "y": 95, "content": "Saída XNOR", "fontSize": 12, "color": "#047857", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 105, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 123, "content": "0", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 105, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 123, "content": "0", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 105, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 123, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "text", "x": 720, "y": 123, "content": "iguais ✓", "fontSize": 10, "color": "#22c55e" },

    { "type": "rect", "x": 450, "y": 133, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 151, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 133, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 151, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 133, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 151, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 161, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 179, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 161, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 179, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 161, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 179, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 189, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 207, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 189, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 207, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 189, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 207, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "text", "x": 720, "y": 207, "content": "iguais ✓", "fontSize": 10, "color": "#22c55e" }
  ]
}
```

> [!dica] XNOR é também chamado de porta de **coincidência** ou **igualdade** — ideal para comparar se dois bits são iguais.

---

## Comparativo das Portas Compostas

```diagram
{
  "title": "Resumo: Portas Compostas",
  "width": 800,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 20, "y": 20, "width": 185, "height": 240, "fill": "#fff7ed", "stroke": "#fed7aa", "rounded": 14 },
    { "type": "text", "x": 112, "y": 50, "content": "NAND", "fontSize": 15, "color": "#c2410c", "fontWeight": "bold" },
    { "type": "gate", "x": 52, "y": 65, "width": 60, "height": 45, "gateType": "nand", "fill": "#ffedd5", "stroke": "#ea580c", "inputs": ["", ""], "outputs": [""], "inputLabels": false, "outputLabels": false },
    { "type": "text", "x": 112, "y": 150, "content": "NOT(A AND B)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 112, "y": 175, "content": "1 só se não forem", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 112, "y": 195, "content": "ambos 1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 112, "y": 230, "content": "⭐ Universal!", "fontSize": 11, "color": "#ea580c", "fontWeight": "bold" },

    { "type": "rect", "x": 215, "y": 20, "width": 185, "height": 240, "fill": "#faf5ff", "stroke": "#e9d5ff", "rounded": 14 },
    { "type": "text", "x": 307, "y": 50, "content": "NOR", "fontSize": 15, "color": "#7e22ce", "fontWeight": "bold" },
    { "type": "gate", "x": 247, "y": 65, "width": 60, "height": 45, "gateType": "nor", "fill": "#f3e8ff", "stroke": "#a855f7", "inputs": ["", ""], "outputs": [""], "inputLabels": false, "outputLabels": false },
    { "type": "text", "x": 307, "y": 150, "content": "NOT(A OR B)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 307, "y": 175, "content": "1 só se ambos", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 307, "y": 195, "content": "forem 0", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 307, "y": 230, "content": "⭐ Universal!", "fontSize": 11, "color": "#a855f7", "fontWeight": "bold" },

    { "type": "rect", "x": 410, "y": 20, "width": 185, "height": 240, "fill": "#fefce8", "stroke": "#fef08a", "rounded": 14 },
    { "type": "text", "x": 502, "y": 50, "content": "XOR", "fontSize": 15, "color": "#a16207", "fontWeight": "bold" },
    { "type": "gate", "x": 442, "y": 65, "width": 60, "height": 45, "gateType": "xor", "fill": "#fef9c3", "stroke": "#eab308", "inputs": ["", ""], "outputs": [""], "inputLabels": false, "outputLabels": false },
    { "type": "text", "x": 502, "y": 150, "content": "OU Exclusivo", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 502, "y": 175, "content": "1 se diferentes", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 502, "y": 195, "content": "0 se iguais", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 502, "y": 230, "content": "Soma, Paridade", "fontSize": 11, "color": "#eab308" },

    { "type": "rect", "x": 605, "y": 20, "width": 175, "height": 240, "fill": "#ecfdf5", "stroke": "#a7f3d0", "rounded": 14 },
    { "type": "text", "x": 692, "y": 50, "content": "XNOR", "fontSize": 15, "color": "#047857", "fontWeight": "bold" },
    { "type": "gate", "x": 632, "y": 65, "width": 60, "height": 45, "gateType": "xnor", "fill": "#d1fae5", "stroke": "#10b981", "inputs": ["", ""], "outputs": [""], "inputLabels": false, "outputLabels": false },
    { "type": "text", "x": 692, "y": 150, "content": "Coincidência", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 692, "y": 175, "content": "1 se iguais", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 692, "y": 195, "content": "0 se diferentes", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 692, "y": 230, "content": "Comparação", "fontSize": 11, "color": "#10b981" }
  ]
}
```

---

## Exercícios de Fixação

1. **Tabela NAND:** Complete: 1 NAND 0 = **_; 0 NAND 0 = _**; 1 NAND 1 = \_\_\_

2. **Tabela NOR:** Complete: 0 NOR 1 = **_; 0 NOR 0 = _**; 1 NOR 1 = \_\_\_

3. **Detector de diferença:** Qual porta indica quando dois bits são diferentes?

4. **Detector de igualdade:** Qual porta indica quando dois bits são iguais?

5. **Inversão:** Usando apenas NAND, como você faria um NOT? (Dica: conecte as duas entradas)

6. **Relação:** Se A=0 e B=1, calcule:
   - A NAND B = ?
   - A NOR B = ?
   - A XOR B = ?
   - A XNOR B = ?
