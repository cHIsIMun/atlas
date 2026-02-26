---
title: "Circuitos Combinacionais: Primeiros Passos"
description: "Construindo blocos funcionais com portas lógicas — do half-adder ao multiplexador, seus primeiros circuitos combinacionais."
duration: 1 aula
---

# Circuitos Combinacionais: Primeiros Passos

Até agora estudamos portas individuais. Agora vamos **combiná-las** para criar blocos funcionais úteis. Estes são os **circuitos combinacionais**: a saída depende apenas das entradas atuais.

---

## O que são Circuitos Combinacionais?

Em um circuito **combinacional**, a saída é determinada exclusivamente pela combinação atual das entradas. Não há memória, não há estado anterior — mude as entradas e a saída responde imediatamente.

```diagram
{
  "title": "Circuito combinacional vs sequencial",
  "width": 840,
  "height": 240,
  "elements": [
    { "type": "rect", "x": 30, "y": 30, "width": 360, "height": 180, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 210, "y": 60, "content": "COMBINACIONAL", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 100, "content": "Saída = f(entradas atuais)", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 135, "content": "Sem memória", "fontSize": 13, "color": "#3b82f6" },
    { "type": "text", "x": 210, "y": 170, "content": "Ex: somadores, decoders, MUX", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" },
    
    { "type": "rect", "x": 450, "y": 30, "width": 360, "height": 180, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 630, "y": 60, "content": "SEQUENCIAL", "fontSize": 15, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 630, "y": 100, "content": "Saída = f(entradas + estado)", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 630, "y": 135, "content": "Com memória (flip-flops)", "fontSize": 13, "color": "#f59e0b" },
    { "type": "text", "x": 630, "y": 170, "content": "Ex: contadores, registradores", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" }
  ]
}
```

Nesta aula vamos focar nos combinacionais. Os sequenciais serão o tema do próximo módulo!

---

## Half-Adder: Seu Primeiro Somador

O **half-adder** (meio-somador) soma dois bits e produz dois resultados:
- **Soma (S)**: o bit resultado
- **Carry (C)**: o "vai um" para a próxima posição

Analise a soma binária:

| A | B | A + B (decimal) | C (carry) | S (soma) |
|---|---|-----------------|-----------|----------|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 2 | 1 | 0 |

Olhe a coluna **S**: é exatamente um **XOR**!  
Olhe a coluna **C**: é exatamente um **AND**!

```diagram
{
  "title": "Half-Adder: circuito e símbolo",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 30, "y": 20, "width": 380, "height": 280, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 220, "y": 50, "content": "Circuito interno", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },
    
    { "type": "text", "x": 70, "y": 110, "content": "A", "fontSize": 16, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 70, "y": 200, "content": "B", "fontSize": 16, "color": "#3b82f6", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 90, "y": 105 }, "to": { "x": 150, "y": 105 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 90, "y": 195 }, "to": { "x": 150, "y": 195 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "ellipse", "cx": 120, "cy": 105, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "ellipse", "cx": 120, "cy": 195, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },
    
    { "type": "line", "from": { "x": 120, "y": 105 }, "to": { "x": 120, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 120, "y": 230 }, "to": { "x": 180, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "rect", "x": 180, "y": 80, "width": 70, "height": 50, "label": "XOR", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 6 },
    { "type": "rect", "x": 180, "y": 205, "width": 70, "height": 50, "label": "AND", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 6 },
    
    { "type": "line", "from": { "x": 150, "y": 105 }, "to": { "x": 180, "y": 95 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 150, "y": 195 }, "to": { "x": 180, "y": 115 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 150, "y": 105 }, "to": { "x": 180, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 120, "y": 230 }, "to": { "x": 180, "y": 240 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "line", "from": { "x": 250, "y": 105 }, "to": { "x": 340, "y": 105 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 250, "y": 230 }, "to": { "x": 340, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "text", "x": 355, "y": 110, "content": "S", "fontSize": 16, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 355, "y": 235, "content": "C", "fontSize": 16, "color": "#10b981", "fontWeight": "bold" },
    
    { "type": "text", "x": 220, "y": 275, "content": "S = A ⊕ B       C = A · B", "fontSize": 12, "color": "#78716c" },
    
    { "type": "rect", "x": 450, "y": 20, "width": 360, "height": 280, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 14 },
    { "type": "text", "x": 630, "y": 50, "content": "Símbolo em bloco", "fontSize": 14, "color": "#5b21b6", "fontWeight": "bold" },
    
    { "type": "rect", "x": 530, "y": 100, "width": 120, "height": 120, "label": "", "fill": "#fff", "stroke": "#8b5cf6", "strokeWidth": 3, "rounded": 10 },
    { "type": "text", "x": 590, "y": 165, "content": "HA", "fontSize": 24, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 490, "y": 135 }, "to": { "x": 530, "y": 135 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 470, "y": 140, "content": "A", "fontSize": 14, "color": "#57534e" },
    { "type": "line", "from": { "x": 490, "y": 185 }, "to": { "x": 530, "y": 185 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 470, "y": 190, "content": "B", "fontSize": 14, "color": "#57534e" },
    
    { "type": "line", "from": { "x": 650, "y": 135 }, "to": { "x": 700, "y": 135 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 720, "y": 140, "content": "S", "fontSize": 14, "color": "#57534e" },
    { "type": "line", "from": { "x": 650, "y": 185 }, "to": { "x": 700, "y": 185 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 720, "y": 190, "content": "C", "fontSize": 14, "color": "#57534e" },
    
    { "type": "text", "x": 630, "y": 265, "content": "HA = Half-Adder", "fontSize": 13, "color": "#78716c" }
  ]
}
```

> [!nota] **Por que "half"?** Porque ele só soma dois bits de entrada. Não considera um carry que pode vir de uma soma anterior. Para isso, precisamos do full-adder.

---

## Full-Adder: Somador Completo

O **full-adder** soma dois bits **mais** um carry de entrada (Cin). Ele produz a soma e um carry de saída (Cout).

| A | B | Cin | Soma | Cout |
|---|---|-----|------|------|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

```diagram
{
  "title": "Full-Adder com dois Half-Adders",
  "width": 840,
  "height": 300,
  "elements": [
    { "type": "rect", "x": 30, "y": 20, "width": 780, "height": 260, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 420, "y": 50, "content": "Full-Adder = 2 Half-Adders + 1 OR", "fontSize": 15, "color": "#57534e", "fontWeight": "bold" },
    
    { "type": "text", "x": 70, "y": 120, "content": "A", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 70, "y": 160, "content": "B", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 70, "y": 230, "content": "Cin", "fontSize": 14, "color": "#10b981", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 95, "y": 115 }, "to": { "x": 160, "y": 115 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 95, "y": 155 }, "to": { "x": 160, "y": 155 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 95, "y": 225 }, "to": { "x": 280, "y": 225 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "rect", "x": 160, "y": 95, "width": 90, "height": 80, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 205, "y": 140, "content": "HA", "fontSize": 18, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 250, "y": 115 }, "to": { "x": 310, "y": 115 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 280, "y": 115 }, "to": { "x": 280, "y": 185 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "line", "from": { "x": 250, "y": 155 }, "to": { "x": 320, "y": 155 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 320, "y": 155 }, "to": { "x": 320, "y": 240 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 320, "y": 240 }, "to": { "x": 520, "y": 240 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "text", "x": 280, "y": 100, "content": "S1", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 295, "y": 155, "content": "C1", "fontSize": 11, "color": "#78716c" },
    
    { "type": "rect", "x": 350, "y": 165, "width": 90, "height": 80, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 395, "y": 210, "content": "HA", "fontSize": 18, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 280, "y": 185 }, "to": { "x": 350, "y": 185 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 280, "y": 225 }, "to": { "x": 350, "y": 225 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "line", "from": { "x": 440, "y": 185 }, "to": { "x": 720, "y": 185 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 440, "y": 225 }, "to": { "x": 520, "y": 225 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "text", "x": 460, "y": 175, "content": "S2", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 460, "y": 220, "content": "C2", "fontSize": 11, "color": "#78716c" },
    
    { "type": "rect", "x": 520, "y": 215, "width": 70, "height": 50, "label": "OR", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 6 },
    
    { "type": "line", "from": { "x": 590, "y": 240 }, "to": { "x": 720, "y": 240 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "text", "x": 750, "y": 190, "content": "S", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 750, "y": 245, "content": "Cout", "fontSize": 14, "color": "#10b981", "fontWeight": "bold" },
    
    { "type": "text", "x": 420, "y": 260, "content": "Cout = C1 OR C2 (carry aparece se qualquer HA gerar)", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" }
  ]
}
```

### Encadeando para números maiores

Para somar números de N bits, encadeamos N full-adders, passando o carry de um para o próximo:

```diagram
{
  "title": "Somador de 4 bits (Ripple Carry Adder)",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "Somador de 4 bits", "fontSize": 16, "color": "#57534e", "fontWeight": "bold" },
    
    { "type": "text", "x": 80, "y": 70, "content": "A₀ B₀", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 240, "y": 70, "content": "A₁ B₁", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 400, "y": 70, "content": "A₂ B₂", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 560, "y": 70, "content": "A₃ B₃", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 85, "y": 80 }, "to": { "x": 85, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 245, "y": 80 }, "to": { "x": 245, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 405, "y": 80 }, "to": { "x": 405, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 565, "y": 80 }, "to": { "x": 565, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "rect", "x": 50, "y": 100, "width": 80, "height": 70, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 90, "y": 140, "content": "FA", "fontSize": 16, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "rect", "x": 210, "y": 100, "width": 80, "height": 70, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 250, "y": 140, "content": "FA", "fontSize": 16, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "rect", "x": 370, "y": 100, "width": 80, "height": 70, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 410, "y": 140, "content": "FA", "fontSize": 16, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "rect", "x": 530, "y": 100, "width": 80, "height": 70, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 570, "y": 140, "content": "FA", "fontSize": 16, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 130, "y": 135 }, "to": { "x": 210, "y": 135 }, "stroke": "#10b981", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 290, "y": 135 }, "to": { "x": 370, "y": 135 }, "stroke": "#10b981", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 450, "y": 135 }, "to": { "x": 530, "y": 135 }, "stroke": "#10b981", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 610, "y": 135 }, "to": { "x": 700, "y": 135 }, "stroke": "#10b981", "strokeWidth": 2, "dashed": true },
    
    { "type": "text", "x": 155, "y": 125, "content": "C₀", "fontSize": 10, "color": "#10b981" },
    { "type": "text", "x": 315, "y": 125, "content": "C₁", "fontSize": 10, "color": "#10b981" },
    { "type": "text", "x": 475, "y": 125, "content": "C₂", "fontSize": 10, "color": "#10b981" },
    { "type": "text", "x": 650, "y": 125, "content": "Cout", "fontSize": 10, "color": "#10b981" },
    
    { "type": "text", "x": 15, "y": 140, "content": "0", "fontSize": 12, "color": "#78716c" },
    { "type": "line", "from": { "x": 30, "y": 135 }, "to": { "x": 50, "y": 135 }, "stroke": "#78716c", "strokeWidth": 1 },
    
    { "type": "line", "from": { "x": 90, "y": 170 }, "to": { "x": 90, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 250, "y": 170 }, "to": { "x": 250, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 410, "y": 170 }, "to": { "x": 410, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 570, "y": 170 }, "to": { "x": 570, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 700, "y": 135 }, "to": { "x": 700, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "text", "x": 90, "y": 245, "content": "S₀", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 250, "y": 245, "content": "S₁", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 410, "y": 245, "content": "S₂", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 570, "y": 245, "content": "S₃", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 700, "y": 245, "content": "S₄", "fontSize": 14, "color": "#10b981", "fontWeight": "bold" },
    
    { "type": "text", "x": 420, "y": 270, "content": "O carry \"ondula\" da direita para a esquerda (ripple)", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" }
  ]
}
```

> [!dica] O nome "ripple carry" vem do fato que o carry se propaga sequencialmente, como uma ondulação. É simples, mas lento para números grandes.

---

## Multiplexador (MUX): O Seletor

Um **multiplexador** seleciona uma entre várias entradas e a passa para a saída. É como um switch controlado por sinais.

Um MUX de 2 entradas (2:1) usa 1 bit de seleção:

```diagram
{
  "title": "MUX 2:1",
  "width": 840,
  "height": 300,
  "elements": [
    { "type": "rect", "x": 30, "y": 20, "width": 400, "height": 260, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 230, "y": 50, "content": "Funcionamento", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },
    
    { "type": "text", "x": 100, "y": 95, "content": "I₀", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 100, "y": 145, "content": "I₁", "fontSize": 14, "color": "#8b5cf6", "fontWeight": "bold" },
    { "type": "text", "x": 100, "y": 195, "content": "S", "fontSize": 14, "color": "#f59e0b", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 120, "y": 90 }, "to": { "x": 180, "y": 90 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 120, "y": 140 }, "to": { "x": 180, "y": 140 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 120, "y": 190 }, "to": { "x": 230, "y": 190 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 230, "y": 190 }, "to": { "x": 230, "y": 155 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    
    { "type": "rect", "x": 180, "y": 70, "width": 100, "height": 100, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 0 },
    { "type": "line", "from": { "x": 180, "y": 70 }, "to": { "x": 280, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 180, "y": 170 }, "to": { "x": 280, "y": 145 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    
    { "type": "text", "x": 230, "y": 125, "content": "MUX", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 280, "y": 120 }, "to": { "x": 340, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 360, "y": 125, "content": "Y", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },
    
    { "type": "text", "x": 230, "y": 240, "content": "Se S=0 → Y=I₀", "fontSize": 13, "color": "#3b82f6" },
    { "type": "text", "x": 230, "y": 265, "content": "Se S=1 → Y=I₁", "fontSize": 13, "color": "#8b5cf6" },
    
    { "type": "rect", "x": 460, "y": 20, "width": 350, "height": 260, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 635, "y": 50, "content": "Circuito com portas", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    
    { "type": "text", "x": 490, "y": 100, "content": "I₀", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 490, "y": 160, "content": "I₁", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 490, "y": 220, "content": "S", "fontSize": 13, "color": "#57534e" },
    
    { "type": "line", "from": { "x": 510, "y": 95 }, "to": { "x": 560, "y": 95 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 510, "y": 155 }, "to": { "x": 560, "y": 155 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "line", "from": { "x": 510, "y": 215 }, "to": { "x": 530, "y": 215 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "ellipse", "cx": 540, "cy": 215, "rx": 6, "ry": 6, "fill": "#fef3c7", "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 546, "y": 215 }, "to": { "x": 560, "y": 215 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "ellipse", "cx": 530, "cy": 155, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "line", "from": { "x": 530, "y": 155 }, "to": { "x": 530, "y": 215 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "line", "from": { "x": 560, "y": 215 }, "to": { "x": 560, "y": 110 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "rect", "x": 590, "y": 80, "width": 50, "height": 40, "label": "AND", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 4 },
    { "type": "rect", "x": 590, "y": 140, "width": 50, "height": 40, "label": "AND", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 4 },
    
    { "type": "line", "from": { "x": 560, "y": 95 }, "to": { "x": 590, "y": 90 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 560, "y": 110 }, "to": { "x": 590, "y": 110 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "line", "from": { "x": 560, "y": 155 }, "to": { "x": 590, "y": 150 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 530, "y": 170 }, "to": { "x": 590, "y": 170 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "line", "from": { "x": 640, "y": 100 }, "to": { "x": 680, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 640, "y": 160 }, "to": { "x": 680, "y": 160 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "line", "from": { "x": 680, "y": 100 }, "to": { "x": 680, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 680, "y": 160 }, "to": { "x": 680, "y": 140 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "rect", "x": 700, "y": 115, "width": 40, "height": 30, "label": "OR", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 4 },
    
    { "type": "line", "from": { "x": 680, "y": 130 }, "to": { "x": 700, "y": 130 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 740, "y": 130 }, "to": { "x": 780, "y": 130 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "text", "x": 780, "y": 135, "content": "Y", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },
    
    { "type": "text", "x": 635, "y": 260, "content": "Y = I₀·S' + I₁·S", "fontSize": 12, "color": "#78716c" }
  ]
}
```

### Por que MUX é importante?

O MUX é um dos blocos mais versáteis:

- **Seleção de dados**: escolhe qual registrador enviar ao processador
- **Implementação de funções**: qualquer função booleana pode ser implementada com MUX
- **Roteamento de sinais**: direciona dados pelo caminho correto
- **Memória ROM**: cada combinação de seleção pode representar uma palavra armazenada

> [!nota] Um MUX 4:1 usa 2 bits de seleção. Um MUX 8:1 usa 3 bits. Em geral, MUX 2ⁿ:1 usa n bits de seleção.

---

## Decodificador: Ativando uma linha

Um **decodificador** faz o inverso do MUX: recebe um código binário e ativa exatamente uma saída.

```diagram
{
  "title": "Decodificador 2:4",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 60, "y": 30, "width": 300, "height": 220, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 14 },
    { "type": "text", "x": 210, "y": 60, "content": "Decodificador 2:4", "fontSize": 14, "color": "#5b21b6", "fontWeight": "bold" },
    
    { "type": "text", "x": 100, "y": 120, "content": "A₀", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 100, "y": 160, "content": "A₁", "fontSize": 13, "color": "#57534e" },
    
    { "type": "line", "from": { "x": 125, "y": 115 }, "to": { "x": 165, "y": 115 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 125, "y": 155 }, "to": { "x": 165, "y": 155 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "rect", "x": 165, "y": 80, "width": 90, "height": 130, "label": "", "fill": "#fff", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 210, "y": 150, "content": "DEC", "fontSize": 16, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 255, "y": 95 }, "to": { "x": 315, "y": 95 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 255, "y": 120 }, "to": { "x": 315, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 255, "y": 145 }, "to": { "x": 315, "y": 145 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 255, "y": 170 }, "to": { "x": 315, "y": 170 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "text", "x": 325, "y": 100, "content": "Y₀", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 325, "y": 125, "content": "Y₁", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 325, "y": 150, "content": "Y₂", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 325, "y": 175, "content": "Y₃", "fontSize": 13, "color": "#57534e" },
    
    { "type": "rect", "x": 420, "y": 30, "width": 380, "height": 220, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 610, "y": 60, "content": "Tabela de funcionamento", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },
    
    { "type": "text", "x": 475, "y": 95, "content": "A₁", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 525, "y": 95, "content": "A₀", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 590, "y": 95, "content": "Y₃ Y₂ Y₁ Y₀", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 715, "y": 95, "content": "Ativa", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 450, "y": 110 }, "to": { "x": 770, "y": 110 }, "stroke": "#d6d3d1", "strokeWidth": 1 },
    
    { "type": "text", "x": 478, "y": 135, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 528, "y": 135, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 600, "y": 135, "content": "0 0 0 1", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 715, "y": 135, "content": "Y₀", "fontSize": 13, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "text", "x": 478, "y": 160, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 528, "y": 160, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 600, "y": 160, "content": "0 0 1 0", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 715, "y": 160, "content": "Y₁", "fontSize": 13, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "text", "x": 478, "y": 185, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 528, "y": 185, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 600, "y": 185, "content": "0 1 0 0", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 715, "y": 185, "content": "Y₂", "fontSize": 13, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "text", "x": 478, "y": 210, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 528, "y": 210, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 600, "y": 210, "content": "1 0 0 0", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 715, "y": 210, "content": "Y₃", "fontSize": 13, "color": "#8b5cf6", "fontWeight": "bold" }
  ]
}
```

Decodificadores são usados para:
- **Seleção de memória**: cada endereço ativa uma célula específica
- **Displays de 7 segmentos**: converte binário para sinais do display
- **Decodificação de instruções**: identifica qual operação executar

---

## Recapitulando

| Circuito | Entradas | Saídas | Função |
|----------|----------|--------|--------|
| **Half-Adder** | 2 bits | S, C | Soma dois bits |
| **Full-Adder** | 3 bits (A, B, Cin) | S, Cout | Soma com carry de entrada |
| **MUX 2:1** | 2 dados + 1 seleção | 1 dado | Seleciona uma entrada |
| **Decoder 2:4** | 2 bits | 4 linhas | Ativa uma saída por código |

---

## Exercícios de Fixação

1. **Half-Adder:** Qual seria a tabela-verdade de um half-adder se as entradas fossem chamadas X e Y? Escreva as expressões para S e C.

2. **Full-Adder:** Se A=1, B=1, Cin=1, quais são os valores de Soma e Cout? Explique o raciocínio.

3. **Ripple Carry:** Por que o somador ripple carry é "lento" para números de muitos bits? O que poderia melhorar isso?

4. **MUX como função:** Mostre como um MUX 4:1 pode implementar a função $F(A,B) = A \oplus B$ (XOR), conectando corretamente as entradas de dados.

5. **Decodificador:** Quantas saídas teria um decodificador com 3 bits de entrada? E com 4 bits?

6. **Projeto:** Combine um decodificador 2:4 com quatro ANDs e um OR para criar um MUX 4:1. Desenhe o circuito.
