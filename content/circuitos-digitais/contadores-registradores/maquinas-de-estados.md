---
title: "Máquinas de Estados Finitos"
description: "Controlando sequências e comportamentos — quando circuitos precisam 'lembrar' onde estão para decidir o que fazer."
duration: 1 aula
---

# Máquinas de Estados Finitos

Até agora vimos circuitos que contam ou armazenam dados. Mas como projetar um sistema que reage diferentemente dependendo do **histórico** de entradas? A resposta está nas **Máquinas de Estados Finitos** (FSM - Finite State Machines).

---

## O que é uma FSM?

Uma FSM é um modelo matemático para sistemas que podem estar em um número finito de **estados**. A qualquer momento:

- O sistema está em exatamente **um** estado
- Entradas causam **transições** para outros estados
- A saída depende do estado atual (e possivelmente das entradas)

```diagram
{
  "title": "Exemplo: Semáforo simplificado",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "FSM de um Semáforo", "fontSize": 16, "color": "#57534e", "fontWeight": "bold" },

    { "type": "ellipse", "cx": 150, "cy": 150, "rx": 60, "ry": 45, "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "text", "x": 150, "y": 155, "content": "VERDE", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },

    { "type": "ellipse", "cx": 420, "cy": 150, "rx": 60, "ry": 45, "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 3 },
    { "type": "text", "x": 420, "y": 155, "content": "AMARELO", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },

    { "type": "ellipse", "cx": 690, "cy": 150, "rx": 60, "ry": 45, "fill": "#fee2e2", "stroke": "#ef4444", "strokeWidth": 3 },
    { "type": "text", "x": 690, "y": 155, "content": "VERMELHO", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 210, "y": 140 }, "to": { "x": 360, "y": 140 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 285, "y": 130, "content": "30s", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 340, "y": 140, "content": "→", "fontSize": 16, "color": "#57534e" },

    { "type": "line", "from": { "x": 480, "y": 140 }, "to": { "x": 630, "y": 140 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 555, "y": 130, "content": "5s", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 610, "y": 140, "content": "→", "fontSize": 16, "color": "#57534e" },

    { "type": "line", "from": { "x": 690, "y": 195 }, "to": { "x": 690, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 690, "y": 230 }, "to": { "x": 150, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 150, "y": 230 }, "to": { "x": 150, "y": 195 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 420, "y": 250, "content": "45s", "fontSize": 11, "color": "#78716c" },

    { "type": "line", "from": { "x": 70, "y": 150 }, "to": { "x": 90, "y": 150 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 55, "y": 155, "content": "→", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 50, "y": 175, "content": "início", "fontSize": 10, "color": "#78716c" }
  ]
}
```

O semáforo tem 3 estados. A transição entre eles é determinada por um timer. Este é um exemplo de FSM!

---

## Componentes de uma FSM

```diagram
{
  "title": "Anatomia de uma FSM",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 100, "y": 40, "width": 640, "height": 250, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "strokeWidth": 2, "rounded": 14 },
    { "type": "text", "x": 420, "y": 70, "content": "Estrutura de uma FSM em Hardware", "fontSize": 15, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 280, "y": 100, "width": 140, "height": 80, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 350, "y": 130, "content": "Registrador", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 350, "y": 150, "content": "de Estado", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 350, "y": 172, "content": "(flip-flops)", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 140, "y": 200, "width": 140, "height": 60, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 210, "y": 225, "content": "Lógica de", "fontSize": 12, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 245, "content": "Próximo Estado", "fontSize": 12, "color": "#5b21b6", "fontWeight": "bold" },

    { "type": "rect", "x": 420, "y": 200, "width": 140, "height": 60, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 490, "y": 225, "content": "Lógica de", "fontSize": 12, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 490, "y": 245, "content": "Saída", "fontSize": 12, "color": "#065f46", "fontWeight": "bold" },

    { "type": "text", "x": 60, "y": 145, "content": "Entradas", "fontSize": 12, "color": "#57534e" },
    { "type": "line", "from": { "x": 60, "y": 150 }, "to": { "x": 100, "y": 150 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 100, "y": 150 }, "to": { "x": 100, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 100, "y": 230 }, "to": { "x": 140, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 280, "y": 230 }, "to": { "x": 350, "y": 230 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 350, "y": 230 }, "to": { "x": 350, "y": 180 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "text", "x": 295, "y": 220, "content": "próx", "fontSize": 10, "color": "#8b5cf6" },

    { "type": "line", "from": { "x": 350, "y": 180 }, "to": { "x": 350, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 420, "y": 140 }, "to": { "x": 650, "y": 140 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 650, "cy": 140, "rx": 5, "ry": 5, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "line", "from": { "x": 650, "y": 140 }, "to": { "x": 650, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 650, "y": 230 }, "to": { "x": 560, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 650, "y": 140 }, "to": { "x": 700, "y": 140 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 665, "y": 130, "content": "estado", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 665, "y": 145, "content": "atual", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 490, "y": 200 }, "to": { "x": 490, "y": 140 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 560, "y": 230 }, "to": { "x": 700, "y": 230 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "text", "x": 720, "y": 235, "content": "Saídas", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 210, "y": 200 }, "to": { "x": 210, "y": 170 }, "stroke": "#78716c", "strokeWidth": 1, "dashed": true },
    { "type": "line", "from": { "x": 210, "y": 170 }, "to": { "x": 280, "y": 155 }, "stroke": "#78716c", "strokeWidth": 1, "dashed": true },
    { "type": "text", "x": 230, "y": 165, "content": "CLK", "fontSize": 9, "color": "#78716c" }
  ]
}
```

1. **Registrador de Estado**: Flip-flops que armazenam o estado atual
2. **Lógica de Próximo Estado**: Circuito combinacional que calcula o próximo estado baseado no estado atual e nas entradas
3. **Lógica de Saída**: Circuito combinacional que gera as saídas

---

## Tipos de FSM: Moore vs Mealy

Existem duas arquiteturas clássicas:

```diagram
{
  "title": "Moore vs Mealy",
  "width": 840,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 40, "y": 30, "width": 370, "height": 200, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 225, "y": 60, "content": "MOORE", "fontSize": 16, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 225, "y": 95, "content": "Saída = f(estado atual)", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 225, "y": 130, "content": "Saídas associadas aos ESTADOS", "fontSize": 12, "color": "#3b82f6" },
    { "type": "text", "x": 225, "y": 165, "content": "✓ Mais estável (saída não depende de entrada)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 225, "y": 185, "content": "✓ Mais fácil de debugar", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 225, "y": 205, "content": "✗ Pode precisar de mais estados", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 430, "y": 30, "width": 370, "height": 200, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 615, "y": 60, "content": "MEALY", "fontSize": 16, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 615, "y": 95, "content": "Saída = f(estado, entrada)", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 615, "y": 130, "content": "Saídas associadas às TRANSIÇÕES", "fontSize": 12, "color": "#f59e0b" },
    { "type": "text", "x": 615, "y": 165, "content": "✓ Geralmente menos estados", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 615, "y": 185, "content": "✓ Resposta mais rápida", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 615, "y": 205, "content": "✗ Saída pode ter glitches", "fontSize": 11, "color": "#78716c" }
  ]
}
```

---

## Exemplo Prático: Detector de Sequência

Vamos projetar uma FSM que detecta a sequência **"101"** em uma entrada serial:

### Passo 1: Diagrama de Estados

```diagram
{
  "title": "Detector de sequência 101 (Moore)",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "FSM: Detecta '101' na entrada", "fontSize": 15, "color": "#57534e", "fontWeight": "bold" },

    { "type": "ellipse", "cx": 140, "cy": 170, "rx": 50, "ry": 40, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 140, "y": 165, "content": "S0", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 140, "y": 185, "content": "out=0", "fontSize": 10, "color": "#78716c" },

    { "type": "ellipse", "cx": 320, "cy": 170, "rx": 50, "ry": 40, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 320, "y": 165, "content": "S1", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 320, "y": 185, "content": "out=0", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 320, "y": 135, "content": "viu '1'", "fontSize": 9, "color": "#78716c", "fontStyle": "italic" },

    { "type": "ellipse", "cx": 500, "cy": 170, "rx": 50, "ry": 40, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 500, "y": 165, "content": "S2", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 500, "y": 185, "content": "out=0", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 500, "y": 135, "content": "viu '10'", "fontSize": 9, "color": "#78716c", "fontStyle": "italic" },

    { "type": "ellipse", "cx": 680, "cy": 170, "rx": 50, "ry": 40, "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "text", "x": 680, "y": 165, "content": "S3", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 680, "y": 185, "content": "out=1", "fontSize": 10, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 680, "y": 135, "content": "viu '101'!", "fontSize": 9, "color": "#10b981", "fontStyle": "italic" },

    { "type": "line", "from": { "x": 60, "y": 170 }, "to": { "x": 90, "y": 170 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 55, "y": 175, "content": "→", "fontSize": 12, "color": "#57534e" },

    { "type": "line", "from": { "x": 190, "y": 160 }, "to": { "x": 270, "y": 160 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 230, "y": 150, "content": "1", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 370, "y": 160 }, "to": { "x": 450, "y": 160 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 410, "y": 150, "content": "0", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 550, "y": 160 }, "to": { "x": 630, "y": 160 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 590, "y": 150, "content": "1", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 140, "y": 210 }, "to": { "x": 140, "y": 250 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 140, "y": 250 }, "to": { "x": 110, "y": 250 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 110, "y": 250 }, "to": { "x": 110, "y": 190 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 110, "y": 190 }, "to": { "x": 95, "y": 175 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "text", "x": 100, "y": 260, "content": "0", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 320, "y": 210 }, "to": { "x": 320, "y": 270 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 320, "y": 270 }, "to": { "x": 350, "y": 270 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 350, "y": 270 }, "to": { "x": 350, "y": 200 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 350, "y": 200 }, "to": { "x": 365, "y": 185 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "text", "x": 355, "y": 280, "content": "1", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 500, "y": 210 }, "to": { "x": 500, "y": 280 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 500, "y": 280 }, "to": { "x": 140, "y": 280 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 140, "y": 280 }, "to": { "x": 140, "y": 215 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "text", "x": 320, "y": 295, "content": "0", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 680, "y": 210 }, "to": { "x": 680, "y": 290 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 680, "y": 290 }, "to": { "x": 500, "y": 290 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 500, "y": 290 }, "to": { "x": 500, "y": 215 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "text", "x": 590, "y": 305, "content": "0", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 705, "y": 135 }, "to": { "x": 705, "y": 100 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 705, "y": 100 }, "to": { "x": 320, "y": 100 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 320, "y": 100 }, "to": { "x": 320, "y": 130 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "text", "x": 510, "y": 95, "content": "1 (continua com '1' já visto)", "fontSize": 10, "color": "#78716c" }
  ]
}
```

### Passo 2: Tabela de Transições

| Estado Atual | Entrada | Próximo Estado | Saída |
| ------------ | ------- | -------------- | ----- |
| S0           | 0       | S0             | 0     |
| S0           | 1       | S1             | 0     |
| S1           | 0       | S2             | 0     |
| S1           | 1       | S1             | 0     |
| S2           | 0       | S0             | 0     |
| S2           | 1       | S3             | 0     |
| S3           | 0       | S2             | 1     |
| S3           | 1       | S1             | 1     |

### Passo 3: Codificação dos Estados

Com 4 estados, precisamos de 2 bits:

- S0 = 00
- S1 = 01
- S2 = 10
- S3 = 11

### Passo 4: Derivar as Equações

Com a tabela de transições e a codificação, usamos mapas de Karnaugh ou simplificação booleana para obter:

- **Q1_próx** = Q0·X + Q1·Q0'·X'
- **Q0_próx** = X
- **Saída** = Q1·Q0

> [!nota] Este processo sistemático transforma qualquer comportamento descrito como FSM em circuito digital real!

---

## Implementando a FSM em Hardware

```diagram
{
  "title": "Circuito do Detector de Sequência",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 80, "y": 40, "width": 680, "height": 210, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },

    { "type": "text", "x": 50, "y": 130, "content": "X", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 65, "y": 125 }, "to": { "x": 110, "y": 125 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "rect", "x": 110, "y": 90, "width": 150, "height": 100, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 185, "y": 130, "content": "Lógica de", "fontSize": 12, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 185, "y": 150, "content": "Próximo Estado", "fontSize": 12, "color": "#5b21b6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 260, "y": 130 }, "to": { "x": 320, "y": 130 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 260, "y": 150 }, "to": { "x": 320, "y": 150 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 320, "y": 100, "width": 100, "height": 80, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 370, "y": 130, "content": "D Q", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 370, "y": 150, "content": "D Q", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 370, "y": 175, "content": "CLK", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 420, "y": 130 }, "to": { "x": 550, "y": 130 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 420, "y": 150 }, "to": { "x": 550, "y": 150 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "text", "x": 460, "y": 125, "content": "Q1", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 460, "y": 165, "content": "Q0", "fontSize": 11, "color": "#57534e" },

    { "type": "ellipse", "cx": 550, "cy": 140, "rx": 5, "ry": 5, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "line", "from": { "x": 550, "y": 140 }, "to": { "x": 550, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 550, "y": 220 }, "to": { "x": 185, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 185, "y": 220 }, "to": { "x": 185, "y": 190 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 580, "y": 110, "width": 100, "height": 60, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 630, "y": 135, "content": "Lógica", "fontSize": 12, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 630, "y": 155, "content": "de Saída", "fontSize": 12, "color": "#065f46", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 680, "y": 140 }, "to": { "x": 730, "y": 140 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "text", "x": 740, "y": 145, "content": "Y", "fontSize": 14, "color": "#10b981", "fontWeight": "bold" },

    { "type": "text", "x": 630, "y": 200, "content": "Y = Q1 · Q0", "fontSize": 12, "color": "#065f46" }
  ]
}
```

---

## Aplicações de FSMs

### 1. Controladores de Protocolo

UART, SPI, I2C — todos usam FSMs para controlar a comunicação.

### 2. Interfaces de Usuário

Menus, navegação, detecção de gestos (duplo clique, swipe).

### 3. Controladores de Motor

Sequências de acionamento para motores de passo.

### 4. Unidade de Controle da CPU

A parte do processador que decodifica e executa instruções é uma FSM!

### 5. Reconhecimento de Padrões

Detectores de sequência, parsers, validadores.

---

## Dicas de Projeto de FSMs

```diagram
{
  "title": "Boas práticas em FSMs",
  "width": 840,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 40, "y": 30, "width": 240, "height": 160, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 160, "y": 60, "content": "✓ Sempre defina", "fontSize": 13, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 160, "y": 90, "content": "Estado inicial (reset)", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 160, "y": 115, "content": "Transições para", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 160, "y": 135, "content": "TODAS as entradas", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 160, "y": 160, "content": "Estado de erro/default", "fontSize": 12, "color": "#57534e" },

    { "type": "rect", "x": 300, "y": 30, "width": 240, "height": 160, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12 },
    { "type": "text", "x": 420, "y": 60, "content": "⚠ Cuidado com", "fontSize": 13, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 90, "content": "Estados inalcançáveis", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 115, "content": "Estados sem saída", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 140, "content": "Condições de corrida", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 165, "content": "Metaestabilidade", "fontSize": 12, "color": "#57534e" },

    { "type": "rect", "x": 560, "y": 30, "width": 240, "height": 160, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12 },
    { "type": "text", "x": 680, "y": 60, "content": "💡 Simplifique", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 680, "y": 90, "content": "Minimize estados", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 680, "y": 115, "content": "Use codificação one-hot", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 680, "y": 140, "content": "para FPGAs", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 680, "y": 165, "content": "Documente bem!", "fontSize": 12, "color": "#57534e" }
  ]
}
```

> [!dica] **One-hot encoding**: cada estado usa um flip-flop próprio (S0=0001, S1=0010, S2=0100, S3=1000). Mais flip-flops, mas lógica mais simples — ideal para FPGAs.

---

## Recapitulando

| Conceito        | Descrição                             |
| --------------- | ------------------------------------- |
| **Estado**      | Condição atual do sistema             |
| **Transição**   | Mudança de estado causada por entrada |
| **Moore**       | Saída depende só do estado            |
| **Mealy**       | Saída depende do estado e entrada     |
| **Codificação** | Representação binária dos estados     |

---

## Exercícios de Fixação

1. **Projeto básico:** Desenhe o diagrama de estados para um detector de sequência "110".

2. **Moore vs Mealy:** Converta o detector de "101" para uma máquina Mealy. Quantos estados você precisa?

3. **Semáforo:** Projete uma FSM para um semáforo com botão de pedestre. Quando o botão é pressionado, o semáforo deve ir para vermelho após completar o ciclo atual.

4. **Codificação:** Para uma FSM com 5 estados, quantos flip-flops são necessários com codificação binária? E com one-hot?

5. **Implementação:** Dada a FSM do detector de "101", escreva as equações booleanas para Q1_próx e Q0_próx.

6. **Análise:** Uma FSM tem o seguinte comportamento: em S0 vai para S1 com entrada 0, em S1 vai para S2 com entrada 1, em S2 vai para S0 com entrada 0 ou para S1 com entrada 1, saída=1 apenas em S2. Que sequência essa FSM detecta?
