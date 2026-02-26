---
title: "Contadores: Sequências e Temporização"
description: "De 0 a N e de volta — como flip-flops conectados criam contadores que são a base de relógios, timers e endereçamento."
duration: 1 aula
---

# Contadores: Sequências e Temporização

Contadores são circuitos que passam por uma **sequência de estados** a cada pulso de clock. Eles estão em todo lugar: relógios digitais, timers, endereçamento de memória, geradores de frequência, e muito mais.

---

## O Conceito Básico

Um **contador** é um registrador especial que:

- Incrementa (ou decrementa) seu valor a cada pulso de clock
- Volta ao início quando atinge o limite (overflow)
- Pode ser controlado (enable, reset, direção)

```diagram
{
  "title": "Conceito de contador",
  "width": 840,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 60, "y": 40, "width": 720, "height": 130, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 420, "y": 70, "content": "Contador de 3 bits: sequência de estados", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "ellipse", "cx": 120, "cy": 120, "rx": 30, "ry": 25, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 120, "y": 125, "content": "000", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 150, "y": 120 }, "to": { "x": 180, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 210, "cy": 120, "rx": 30, "ry": 25, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 210, "y": 125, "content": "001", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 240, "y": 120 }, "to": { "x": 270, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 300, "cy": 120, "rx": 30, "ry": 25, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 300, "y": 125, "content": "010", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 330, "y": 120 }, "to": { "x": 360, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 390, "cy": 120, "rx": 30, "ry": 25, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 390, "y": 125, "content": "011", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 420, "y": 120 }, "to": { "x": 450, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 480, "cy": 120, "rx": 30, "ry": 25, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 480, "y": 125, "content": "100", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 510, "y": 120 }, "to": { "x": 540, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "text", "x": 550, "y": 125, "content": "...", "fontSize": 14, "color": "#78716c" },

    { "type": "line", "from": { "x": 570, "y": 120 }, "to": { "x": 600, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 630, "cy": 120, "rx": 30, "ry": 25, "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "text", "x": 630, "y": 125, "content": "111", "fontSize": 13, "color": "#92400e", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 660, "y": 120 }, "to": { "x": 720, "y": 120 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 720, "y": 120 }, "to": { "x": 720, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 720, "y": 160 }, "to": { "x": 90, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 90, "y": 160 }, "to": { "x": 90, "y": 120 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 90, "y": 120 }, "to": { "x": 90, "y": 120 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "text", "x": 400, "y": 175, "content": "Overflow → volta ao início", "fontSize": 11, "color": "#f59e0b", "fontStyle": "italic" }
  ]
}
```

---

## Contador Assíncrono (Ripple Counter)

O contador mais simples é o **assíncrono** ou **ripple counter**: cada flip-flop recebe como clock a saída do flip-flop anterior.

```diagram
{
  "title": "Contador Assíncrono de 4 bits",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "Ripple Counter (Assíncrono)", "fontSize": 16, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 60, "y": 110, "content": "CLK", "fontSize": 13, "color": "#f59e0b", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 90, "y": 105 }, "to": { "x": 130, "y": 105 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "rect", "x": 130, "y": 70, "width": 90, "height": 90, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 175, "y": 100, "content": "T", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 175, "y": 125, "content": "Q₀", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 90, "content": "T=1", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 220, "y": 105 }, "to": { "x": 280, "y": 105 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "ellipse", "cx": 250, "cy": 105, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "line", "from": { "x": 250, "y": 105 }, "to": { "x": 250, "y": 195 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 280, "y": 70, "width": 90, "height": 90, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 325, "y": 100, "content": "T", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 325, "y": 125, "content": "Q₁", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 295, "y": 90, "content": "T=1", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 370, "y": 105 }, "to": { "x": 430, "y": 105 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "ellipse", "cx": 400, "cy": 105, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "line", "from": { "x": 400, "y": 105 }, "to": { "x": 400, "y": 195 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 430, "y": 70, "width": 90, "height": 90, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 475, "y": 100, "content": "T", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 475, "y": 125, "content": "Q₂", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 445, "y": 90, "content": "T=1", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 520, "y": 105 }, "to": { "x": 580, "y": 105 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "ellipse", "cx": 550, "cy": 105, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "line", "from": { "x": 550, "y": 105 }, "to": { "x": 550, "y": 195 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 580, "y": 70, "width": 90, "height": 90, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 625, "y": 100, "content": "T", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 625, "y": 125, "content": "Q₃", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 595, "y": 90, "content": "T=1", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 670, "y": 105 }, "to": { "x": 720, "y": 105 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "ellipse", "cx": 700, "cy": 105, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "line", "from": { "x": 700, "y": 105 }, "to": { "x": 700, "y": 195 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "text", "x": 720, "y": 110, "content": "(overflow)", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 130, "y": 195 }, "to": { "x": 720, "y": 195 }, "stroke": "#10b981", "strokeWidth": 1, "dashed": true },
    { "type": "text", "x": 175, "y": 215, "content": "Q₀", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 325, "y": 215, "content": "Q₁", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 475, "y": 215, "content": "Q₂", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 625, "y": 215, "content": "Q₃", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },

    { "type": "rect", "x": 130, "y": 240, "width": 590, "height": 60, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 425, "y": 265, "content": "Simples mas lento: cada FF espera o anterior mudar", "fontSize": 13, "color": "#92400e" },
    { "type": "text", "x": 425, "y": 290, "content": "O atraso \"ondula\" (ripple) pelos flip-flops", "fontSize": 12, "color": "#78716c" }
  ]
}
```

**Funcionamento:**

- Cada FF-T com T=1 inverte a cada borda de descida de seu clock
- Q₀ inverte a cada clock principal
- Q₁ inverte quando Q₀ vai de 1→0
- Q₂ inverte quando Q₁ vai de 1→0
- E assim por diante...

> [!atencao] **Problema do Ripple:** O atraso se acumula! Para N bits, o pior caso é N × (atraso de um FF). Para contadores rápidos, isso é inaceitável.

---

## Contador Síncrono

No contador **síncrono**, todos os flip-flops recebem o mesmo clock. Lógica adicional determina quando cada um deve inverter.

```diagram
{
  "title": "Contador Síncrono de 4 bits",
  "width": 840,
  "height": 340,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "Contador Síncrono", "fontSize": 16, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 120, "y": 80, "width": 80, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 160, "y": 105, "content": "T", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 160, "y": 130, "content": "Q₀", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 130, "y": 90, "content": "T=1", "fontSize": 9, "color": "#10b981" },

    { "type": "rect", "x": 270, "y": 80, "width": 80, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 310, "y": 105, "content": "T", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 310, "y": 130, "content": "Q₁", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 420, "y": 80, "width": 80, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 460, "y": 105, "content": "T", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 460, "y": 130, "content": "Q₂", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 570, "y": 80, "width": 80, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 610, "y": 105, "content": "T", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 610, "y": 130, "content": "Q₃", "fontSize": 11, "color": "#57534e" },

    { "type": "line", "from": { "x": 60, "y": 200 }, "to": { "x": 700, "y": 200 }, "stroke": "#f59e0b", "strokeWidth": 3 },
    { "type": "text", "x": 40, "y": 205, "content": "CLK", "fontSize": 11, "color": "#f59e0b", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 160, "y": 200 }, "to": { "x": 160, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 310, "y": 200 }, "to": { "x": 310, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 460, "y": 200 }, "to": { "x": 460, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 610, "y": 200 }, "to": { "x": 610, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "rect", "x": 215, "y": 60, "width": 40, "height": 30, "label": "AND", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 4 },
    { "type": "line", "from": { "x": 200, "y": 120 }, "to": { "x": 200, "y": 50 }, "stroke": "#57534e", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 200, "y": 50 }, "to": { "x": 215, "y": 70 }, "stroke": "#57534e", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 255, "y": 75 }, "to": { "x": 270, "y": 95 }, "stroke": "#57534e", "strokeWidth": 1 },

    { "type": "rect", "x": 365, "y": 50, "width": 40, "height": 30, "label": "AND", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 4 },
    { "type": "line", "from": { "x": 350, "y": 120 }, "to": { "x": 350, "y": 40 }, "stroke": "#57534e", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 350, "y": 40 }, "to": { "x": 365, "y": 60 }, "stroke": "#57534e", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 405, "y": 65 }, "to": { "x": 420, "y": 95 }, "stroke": "#57534e", "strokeWidth": 1 },

    { "type": "rect", "x": 515, "y": 40, "width": 40, "height": 30, "label": "AND", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 4 },
    { "type": "line", "from": { "x": 500, "y": 120 }, "to": { "x": 500, "y": 30 }, "stroke": "#57534e", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 500, "y": 30 }, "to": { "x": 515, "y": 50 }, "stroke": "#57534e", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 555, "y": 55 }, "to": { "x": 570, "y": 95 }, "stroke": "#57534e", "strokeWidth": 1 },

    { "type": "text", "x": 235, "y": 245, "content": "T₁ = Q₀", "fontSize": 11, "color": "#8b5cf6" },
    { "type": "text", "x": 385, "y": 245, "content": "T₂ = Q₀·Q₁", "fontSize": 11, "color": "#8b5cf6" },
    { "type": "text", "x": 535, "y": 245, "content": "T₃ = Q₀·Q₁·Q₂", "fontSize": 11, "color": "#8b5cf6" },

    { "type": "rect", "x": 120, "y": 270, "width": 600, "height": 50, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 10 },
    { "type": "text", "x": 420, "y": 300, "content": "Todos mudam no mesmo instante → mais rápido, mas mais lógica", "fontSize": 12, "color": "#065f46" }
  ]
}
```

**Regra de toggle:**

- Q₀ sempre inverte (T₀ = 1)
- Q₁ inverte quando Q₀ = 1
- Q₂ inverte quando Q₀ = 1 E Q₁ = 1
- Qₙ inverte quando todos os anteriores = 1

---

## Contador Up/Down

Um contador **up/down** pode contar para cima ou para baixo, controlado por um sinal de direção:

```diagram
{
  "title": "Contador Up/Down",
  "width": 840,
  "height": 240,
  "elements": [
    { "type": "rect", "x": 200, "y": 30, "width": 440, "height": 180, "label": "", "fill": "#fff", "stroke": "#3b82f6", "strokeWidth": 3, "rounded": 12 },

    { "type": "text", "x": 420, "y": 65, "content": "CONTADOR UP/DOWN", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 90, "content": "4 bits", "fontSize": 12, "color": "#3b82f6" },

    { "type": "text", "x": 120, "y": 90, "content": "UP/DOWN̅", "fontSize": 12, "color": "#8b5cf6", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 175, "y": 85 }, "to": { "x": 200, "y": 85 }, "stroke": "#8b5cf6", "strokeWidth": 2 },

    { "type": "text", "x": 135, "y": 125, "content": "ENABLE", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 175, "y": 120 }, "to": { "x": 200, "y": 120 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "text", "x": 140, "y": 160, "content": "RESET", "fontSize": 12, "color": "#ef4444", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 175, "y": 155 }, "to": { "x": 200, "y": 155 }, "stroke": "#ef4444", "strokeWidth": 2 },

    { "type": "text", "x": 160, "y": 195, "content": "CLK", "fontSize": 12, "color": "#f59e0b", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 180, "y": 190 }, "to": { "x": 200, "y": 190 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 640, "y": 110 }, "to": { "x": 700, "y": 110 }, "stroke": "#57534e", "strokeWidth": 4 },
    { "type": "text", "x": 665, "y": 100, "content": "4", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 720, "y": 115, "content": "Q[3:0]", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 300, "y": 125, "content": "UP/DOWN̅ = 1 → incrementa", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 300, "y": 145, "content": "UP/DOWN̅ = 0 → decrementa", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 300, "y": 175, "content": "ENABLE = 1 → conta", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 300, "y": 195, "content": "RESET = 1 → Q ← 0000", "fontSize": 11, "color": "#57534e" }
  ]
}
```

---

## Contador Módulo-N

Nem sempre queremos contar até 2ⁿ-1. Um contador **módulo-N** conta de 0 a N-1 e depois volta a 0.

**Exemplo: Contador módulo-10 (década)**
Conta: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, ...

```diagram
{
  "title": "Contador Módulo-10 (Década)",
  "width": 840,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 60, "y": 30, "width": 720, "height": 90, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 420, "y": 60, "content": "Sequência: 0000 → 0001 → ... → 1001 → 0000", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 90, "content": "Quando atinge 1010 (10), reseta imediatamente para 0000", "fontSize": 12, "color": "#57534e" },

    { "type": "rect", "x": 150, "y": 140, "width": 540, "height": 100, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 420, "y": 170, "content": "Implementação típica:", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 200, "content": "Detecta Q₃·Q₁ = 1 (padrão de 1010) e gera RESET", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 225, "content": "Ou usa contador com preset para carregar 0 quando detecta 10", "fontSize": 11, "color": "#78716c" }
  ]
}
```

> [!dica] **Uso comum:** Displays de 7 segmentos para dígitos decimais, relógios (módulo-60 para segundos/minutos, módulo-12 ou 24 para horas).

---

## Comparação: Assíncrono vs Síncrono

| Característica   | Assíncrono (Ripple)             | Síncrono                      |
| ---------------- | ------------------------------- | ----------------------------- |
| **Clock**        | Em cascata                      | Comum a todos                 |
| **Velocidade**   | Lento (atraso acumula)          | Rápido                        |
| **Complexidade** | Simples                         | Mais portas                   |
| **Glitches**     | Pode ter estados intermediários | Transição limpa               |
| **Uso típico**   | Divisores de frequência         | Contadores de propósito geral |

---

## Aplicações de Contadores

### 1. Divisor de Frequência

Cada bit divide a frequência por 2:

- Q₀: f/2
- Q₁: f/4
- Q₂: f/8
- Qₙ: f/2^(n+1)

### 2. Endereçamento de Memória

Um contador gera sequencialmente os endereços para ler/escrever memória.

### 3. Timer/Delay

Conta pulsos de clock até um valor, gerando um sinal após tempo determinado.

### 4. PWM (Modulação por Largura de Pulso)

Compara o contador com um valor para gerar pulsos de largura variável.

### 5. Sequenciador

Ativa diferentes linhas em sequência (máquinas de estado).

---

## Diagrama Temporal

```diagram
{
  "title": "Formas de onda de um contador de 3 bits",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "text", "x": 50, "y": 40, "content": "CLK", "fontSize": 11, "color": "#f59e0b", "fontWeight": "bold" },
    { "type": "text", "x": 50, "y": 90, "content": "Q₀", "fontSize": 11, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 50, "y": 140, "content": "Q₁", "fontSize": 11, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 50, "y": 190, "content": "Q₂", "fontSize": 11, "color": "#8b5cf6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 80, "y": 45 }, "to": { "x": 100, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 100, "y": 45 }, "to": { "x": 100, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 100, "y": 25 }, "to": { "x": 140, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 140, "y": 25 }, "to": { "x": 140, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 140, "y": 45 }, "to": { "x": 180, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 180, "y": 45 }, "to": { "x": 180, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 180, "y": 25 }, "to": { "x": 220, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 25 }, "to": { "x": 220, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 45 }, "to": { "x": 260, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 260, "y": 45 }, "to": { "x": 260, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 260, "y": 25 }, "to": { "x": 300, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 300, "y": 25 }, "to": { "x": 300, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 300, "y": 45 }, "to": { "x": 340, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 340, "y": 45 }, "to": { "x": 340, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 340, "y": 25 }, "to": { "x": 380, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 25 }, "to": { "x": 380, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 45 }, "to": { "x": 420, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 420, "y": 45 }, "to": { "x": 420, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 420, "y": 25 }, "to": { "x": 460, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 460, "y": 25 }, "to": { "x": 460, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 460, "y": 45 }, "to": { "x": 500, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 45 }, "to": { "x": 500, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 25 }, "to": { "x": 540, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 540, "y": 25 }, "to": { "x": 540, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 540, "y": 45 }, "to": { "x": 580, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 80, "y": 95 }, "to": { "x": 140, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 140, "y": 95 }, "to": { "x": 140, "y": 75 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 140, "y": 75 }, "to": { "x": 220, "y": 75 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 75 }, "to": { "x": 220, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 95 }, "to": { "x": 300, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 300, "y": 95 }, "to": { "x": 300, "y": 75 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 300, "y": 75 }, "to": { "x": 380, "y": 75 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 75 }, "to": { "x": 380, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 95 }, "to": { "x": 460, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 460, "y": 95 }, "to": { "x": 460, "y": 75 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 460, "y": 75 }, "to": { "x": 540, "y": 75 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 540, "y": 75 }, "to": { "x": 540, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 540, "y": 95 }, "to": { "x": 580, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 80, "y": 145 }, "to": { "x": 220, "y": 145 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 145 }, "to": { "x": 220, "y": 125 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 125 }, "to": { "x": 380, "y": 125 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 125 }, "to": { "x": 380, "y": 145 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 145 }, "to": { "x": 540, "y": 145 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 540, "y": 145 }, "to": { "x": 540, "y": 125 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 540, "y": 125 }, "to": { "x": 580, "y": 125 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 80, "y": 195 }, "to": { "x": 380, "y": 195 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 195 }, "to": { "x": 380, "y": 175 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 175 }, "to": { "x": 580, "y": 175 }, "stroke": "#8b5cf6", "strokeWidth": 2 },

    { "type": "text", "x": 110, "y": 230, "content": "0", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 160, "y": 230, "content": "1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 240, "y": 230, "content": "2", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 320, "y": 230, "content": "3", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 400, "y": 230, "content": "4", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 480, "y": 230, "content": "5", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 560, "y": 230, "content": "6", "fontSize": 10, "color": "#78716c" },

    { "type": "text", "x": 650, "y": 90, "content": "Q₀: f/2", "fontSize": 11, "color": "#3b82f6" },
    { "type": "text", "x": 650, "y": 140, "content": "Q₁: f/4", "fontSize": 11, "color": "#10b981" },
    { "type": "text", "x": 650, "y": 190, "content": "Q₂: f/8", "fontSize": 11, "color": "#8b5cf6" }
  ]
}
```

---

## Recapitulando

| Tipo           | Descrição        | Uso                |
| -------------- | ---------------- | ------------------ |
| **Assíncrono** | Clock em cascata | Divisores simples  |
| **Síncrono**   | Clock comum      | Contadores rápidos |
| **Up/Down**    | Bidirecional     | Encoders, posição  |
| **Módulo-N**   | Conta até N-1    | Displays, relógios |
| **Ring**       | Um bit circula   | Sequenciadores     |

---

## Exercícios de Fixação

1. **Contagem:** Um contador de 4 bits síncrono está em 1011. Qual é o próximo estado? E após mais 5 pulsos?

2. **Divisão:** Você precisa de um clock de 1 kHz a partir de um cristal de 32.768 kHz. Quantos bits precisa o contador divisor?

3. **Módulo:** Projete a lógica de reset para um contador módulo-6 (conta 0-5).

4. **Timer:** Um contador de 16 bits opera com clock de 1 MHz. Qual é o tempo máximo que ele pode medir antes de fazer overflow?

5. **Ripple vs Síncrono:** Se cada flip-flop tem atraso de 10 ns, qual é o pior caso de atraso para um ripple counter de 8 bits estabilizar?

6. **Up/Down:** Desenhe o diagrama temporal de um contador de 2 bits que conta: UP por 3 pulsos, depois DOWN por 2 pulsos.
