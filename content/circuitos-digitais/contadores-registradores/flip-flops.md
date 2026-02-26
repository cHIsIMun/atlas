---
title: "Flip-Flops: A Memória de 1 Bit"
description: "De circuitos que esquecem para circuitos que lembram — entenda como um flip-flop armazena informação."
duration: 1 aula
---

# Flip-Flops: A Memória de 1 Bit

Até agora, todos os circuitos que vimos eram **combinacionais**: a saída dependia apenas das entradas atuais. Mas como um computador "lembra" de algo? Como ele armazena dados?

A resposta está nos **flip-flops** — os elementos básicos de memória.

---

## O Problema: Circuitos que Esquecem

Um circuito combinacional não tem memória. Se você muda as entradas, a saída muda imediatamente. Quando você remove as entradas, não sobra nenhuma "lembrança" do estado anterior.

Mas pense em situações reais:

- Um botão de ligar/desligar: você aperta uma vez e o estado **permanece**
- Um placar de jogo: o número não desaparece entre os pontos
- Um computador: ele precisa lembrar dos dados enquanto processa

```diagram
{
  "title": "Combinacional vs Sequencial",
  "width": 840,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 40, "y": 30, "width": 360, "height": 160, "label": "", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 14 },
    { "type": "text", "x": 220, "y": 60, "content": "COMBINACIONAL", "fontSize": 14, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "text", "x": 220, "y": 95, "content": "Entradas → Saídas", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 125, "content": "Sem memória", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 220, "y": 155, "content": "Remove entrada → perde informação", "fontSize": 12, "color": "#ef4444" },

    { "type": "rect", "x": 440, "y": 30, "width": 360, "height": 160, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 620, "y": 60, "content": "SEQUENCIAL", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 620, "y": 95, "content": "Entradas + Estado → Saídas", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 125, "content": "Com memória (flip-flops)", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 620, "y": 155, "content": "Remove entrada → mantém estado", "fontSize": 12, "color": "#10b981" }
  ]
}
```

---

## A Solução: Realimentação

O truque para criar memória é a **realimentação**: conectar a saída de volta à entrada. Assim, o circuito "se sustenta" — mantém seu estado.

### O Latch SR (Set-Reset)

O circuito mais simples com memória é o **latch SR**, feito com apenas duas portas NOR:

```diagram
{
  "title": "Latch SR com portas NOR",
  "width": 840,
  "height": 340,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 420, "height": 300, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 250, "y": 50, "content": "Circuito do Latch SR", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 70, "y": 120, "content": "R", "fontSize": 16, "color": "#ef4444", "fontWeight": "bold" },
    { "type": "text", "x": 70, "y": 220, "content": "S", "fontSize": 16, "color": "#10b981", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 90, "y": 115 }, "to": { "x": 140, "y": 115 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 90, "y": 215 }, "to": { "x": 140, "y": 215 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "rect", "x": 140, "y": 95, "width": 80, "height": 50, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 6 },
    { "type": "text", "x": 180, "y": 125, "content": "NOR", "fontSize": 13, "color": "#8b5cf6", "fontWeight": "bold" },

    { "type": "rect", "x": 140, "y": 195, "width": 80, "height": 50, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 6 },
    { "type": "text", "x": 180, "y": 225, "content": "NOR", "fontSize": 13, "color": "#8b5cf6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 220, "y": 120 }, "to": { "x": 280, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 220 }, "to": { "x": 280, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 280, "cy": 120, "rx": 5, "ry": 5, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "ellipse", "cx": 280, "cy": 220, "rx": 5, "ry": 5, "fill": "#57534e", "stroke": "#57534e" },

    { "type": "line", "from": { "x": 280, "y": 120 }, "to": { "x": 380, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 280, "y": 220 }, "to": { "x": 380, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "text", "x": 400, "y": 125, "content": "Q", "fontSize": 16, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 400, "y": 225, "content": "Q'", "fontSize": 16, "color": "#78716c", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 280, "y": 120 }, "to": { "x": 280, "y": 170 }, "stroke": "#f59e0b", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 280, "y": 170 }, "to": { "x": 120, "y": 170 }, "stroke": "#f59e0b", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 120, "y": 170 }, "to": { "x": 120, "y": 230 }, "stroke": "#f59e0b", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 120, "y": 230 }, "to": { "x": 140, "y": 230 }, "stroke": "#f59e0b", "strokeWidth": 2, "dashed": true },

    { "type": "line", "from": { "x": 280, "y": 220 }, "to": { "x": 280, "y": 180 }, "stroke": "#f59e0b", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 280, "y": 180 }, "to": { "x": 130, "y": 180 }, "stroke": "#f59e0b", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 130, "y": 180 }, "to": { "x": 130, "y": 105 }, "stroke": "#f59e0b", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 130, "y": 105 }, "to": { "x": 140, "y": 105 }, "stroke": "#f59e0b", "strokeWidth": 2, "dashed": true },

    { "type": "text", "x": 250, "y": 290, "content": "Linhas tracejadas = realimentação", "fontSize": 11, "color": "#f59e0b", "fontStyle": "italic" },

    { "type": "rect", "x": 490, "y": 20, "width": 320, "height": 300, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 650, "y": 50, "content": "Tabela de Operação", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "text", "x": 530, "y": 90, "content": "S", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 580, "y": 90, "content": "R", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 650, "y": 90, "content": "Q (próx)", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 750, "y": 90, "content": "Ação", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 510, "y": 105 }, "to": { "x": 790, "y": 105 }, "stroke": "#93c5fd", "strokeWidth": 1 },

    { "type": "text", "x": 530, "y": 135, "content": "0", "fontSize": 14, "color": "#78716c" },
    { "type": "text", "x": 580, "y": 135, "content": "0", "fontSize": 14, "color": "#78716c" },
    { "type": "text", "x": 650, "y": 135, "content": "Q", "fontSize": 14, "color": "#3b82f6" },
    { "type": "text", "x": 750, "y": 135, "content": "Mantém", "fontSize": 12, "color": "#78716c" },

    { "type": "text", "x": 530, "y": 170, "content": "1", "fontSize": 14, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 580, "y": 170, "content": "0", "fontSize": 14, "color": "#78716c" },
    { "type": "text", "x": 650, "y": 170, "content": "1", "fontSize": 14, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 750, "y": 170, "content": "Set", "fontSize": 12, "color": "#10b981" },

    { "type": "text", "x": 530, "y": 205, "content": "0", "fontSize": 14, "color": "#78716c" },
    { "type": "text", "x": 580, "y": 205, "content": "1", "fontSize": 14, "color": "#ef4444", "fontWeight": "bold" },
    { "type": "text", "x": 650, "y": 205, "content": "0", "fontSize": 14, "color": "#ef4444", "fontWeight": "bold" },
    { "type": "text", "x": 750, "y": 205, "content": "Reset", "fontSize": 12, "color": "#ef4444" },

    { "type": "text", "x": 530, "y": 240, "content": "1", "fontSize": 14, "color": "#78716c" },
    { "type": "text", "x": 580, "y": 240, "content": "1", "fontSize": 14, "color": "#78716c" },
    { "type": "text", "x": 650, "y": 240, "content": "?", "fontSize": 14, "color": "#f59e0b", "fontWeight": "bold" },
    { "type": "text", "x": 750, "y": 240, "content": "Proibido!", "fontSize": 12, "color": "#f59e0b" },

    { "type": "text", "x": 650, "y": 290, "content": "S=R=1 causa estado indefinido", "fontSize": 10, "color": "#f59e0b", "fontStyle": "italic" }
  ]
}
```

**Como funciona:**

- **S=1, R=0**: "Set" — força Q para 1
- **S=0, R=1**: "Reset" — força Q para 0
- **S=0, R=0**: "Mantém" — Q permanece no valor anterior
- **S=1, R=1**: Estado proibido (inválido)

> [!atencao] O estado S=R=1 é proibido porque força ambas as saídas para 0, violando a regra de que Q e Q' devem ser complementares.

---

## Do Latch ao Flip-Flop: Adicionando Controle

O latch SR tem um problema: ele responde **imediatamente** a qualquer mudança em S ou R. Em sistemas síncronos, queremos que as mudanças aconteçam apenas em momentos específicos.

Solução: adicionar um sinal de **clock** (relógio).

### Latch SR com Enable

```diagram
{
  "title": "Latch SR com Enable (Gated Latch)",
  "width": 840,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 60, "y": 30, "width": 380, "height": 160, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },

    { "type": "text", "x": 100, "y": 80, "content": "S", "fontSize": 14, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 100, "y": 130, "content": "E", "fontSize": 14, "color": "#f59e0b", "fontWeight": "bold" },
    { "type": "text", "x": 100, "y": 160, "content": "R", "fontSize": 14, "color": "#ef4444", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 120, "y": 75 }, "to": { "x": 160, "y": 75 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 120, "y": 125 }, "to": { "x": 180, "y": 125 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 120, "y": 155 }, "to": { "x": 160, "y": 155 }, "stroke": "#ef4444", "strokeWidth": 2 },

    { "type": "rect", "x": 160, "y": 60, "width": 50, "height": 40, "label": "AND", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 4 },
    { "type": "rect", "x": 160, "y": 140, "width": 50, "height": 40, "label": "AND", "fill": "#fee2e2", "stroke": "#ef4444", "strokeWidth": 2, "rounded": 4 },

    { "type": "ellipse", "cx": 180, "cy": 125, "rx": 4, "ry": 4, "fill": "#f59e0b", "stroke": "#f59e0b" },
    { "type": "line", "from": { "x": 180, "y": 100 }, "to": { "x": 180, "y": 140 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 210, "y": 80 }, "to": { "x": 260, "y": 80 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 210, "y": 160 }, "to": { "x": 260, "y": 160 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 260, "y": 60, "width": 120, "height": 120, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 320, "y": 125, "content": "SR\nLatch", "fontSize": 14, "color": "#8b5cf6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 380, "y": 100 }, "to": { "x": 420, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 425, "y": 105, "content": "Q", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },

    { "type": "rect", "x": 490, "y": 30, "width": 310, "height": 160, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 645, "y": 60, "content": "Enable = controle de momento", "fontSize": 13, "color": "#92400e", "fontWeight": "bold" },

    { "type": "text", "x": 645, "y": 100, "content": "E = 0: Latch ignora S e R", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 645, "y": 130, "content": "E = 1: Latch responde a S e R", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 645, "y": 170, "content": "Mudanças só ocorrem quando E=1", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" }
  ]
}
```

---

## Flip-Flop D: O Mais Usado

O **Flip-Flop D** (Data ou Delay) resolve o problema do estado proibido do SR: ele tem apenas uma entrada de dados.

```diagram
{
  "title": "Flip-Flop D",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 50, "y": 30, "width": 320, "height": 220, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 210, "y": 60, "content": "Símbolo do Flip-Flop D", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "rect", "x": 130, "y": 90, "width": 120, "height": 130, "label": "", "fill": "#fff", "stroke": "#3b82f6", "strokeWidth": 3, "rounded": 8 },

    { "type": "text", "x": 105, "y": 130, "content": "D", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 90, "y": 125 }, "to": { "x": 130, "y": 125 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 130, "y": 185 }, "to": { "x": 145, "y": 195 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 145, "y": 195 }, "to": { "x": 130, "y": 205 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 90, "y": 195 }, "to": { "x": 130, "y": 195 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 95, "y": 215, "content": "CLK", "fontSize": 11, "color": "#78716c" },

    { "type": "line", "from": { "x": 250, "y": 125 }, "to": { "x": 300, "y": 125 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 275, "y": 115, "content": "Q", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 250, "y": 175 }, "to": { "x": 300, "y": 175 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 275, "y": 165, "content": "Q'", "fontSize": 14, "color": "#78716c" },

    { "type": "text", "x": 190, "y": 155, "content": "D", "fontSize": 18, "color": "#3b82f6", "fontWeight": "bold" },

    { "type": "rect", "x": 410, "y": 30, "width": 390, "height": 220, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 605, "y": 60, "content": "Funcionamento", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 605, "y": 105, "content": "Na borda de subida do clock:", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 605, "y": 140, "content": "Q ← D", "fontSize": 18, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 605, "y": 175, "content": "O valor de D é \"capturado\" em Q", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 605, "y": 210, "content": "Entre bordas, Q mantém seu valor", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 605, "y": 235, "content": "D pode mudar à vontade — não afeta Q", "fontSize": 12, "color": "#78716c" }
  ]
}
```

O triângulo na entrada de clock indica que é **sensível à borda** (edge-triggered): a captura acontece apenas no instante da transição 0→1 do clock.

### Diagrama Temporal

```diagram
{
  "title": "Comportamento temporal do Flip-Flop D",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "text", "x": 60, "y": 40, "content": "CLK", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 60, "y": 110, "content": "D", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 60, "y": 180, "content": "Q", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 100, "y": 50 }, "to": { "x": 150, "y": 50 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 150, "y": 50 }, "to": { "x": 150, "y": 20 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 150, "y": 20 }, "to": { "x": 250, "y": 20 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 250, "y": 20 }, "to": { "x": 250, "y": 50 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 250, "y": 50 }, "to": { "x": 350, "y": 50 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 350, "y": 50 }, "to": { "x": 350, "y": 20 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 350, "y": 20 }, "to": { "x": 450, "y": 20 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 450, "y": 20 }, "to": { "x": 450, "y": 50 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 450, "y": 50 }, "to": { "x": 550, "y": 50 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 550, "y": 50 }, "to": { "x": 550, "y": 20 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 550, "y": 20 }, "to": { "x": 650, "y": 20 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 650, "y": 20 }, "to": { "x": 650, "y": 50 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 650, "y": 50 }, "to": { "x": 750, "y": 50 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 100, "y": 120 }, "to": { "x": 200, "y": 120 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 200, "y": 120 }, "to": { "x": 200, "y": 90 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 200, "y": 90 }, "to": { "x": 400, "y": 90 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 400, "y": 90 }, "to": { "x": 400, "y": 120 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 400, "y": 120 }, "to": { "x": 500, "y": 120 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 120 }, "to": { "x": 500, "y": 90 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 90 }, "to": { "x": 750, "y": 90 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 100, "y": 190 }, "to": { "x": 350, "y": 190 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 350, "y": 190 }, "to": { "x": 350, "y": 160 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 350, "y": 160 }, "to": { "x": 450, "y": 160 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 450, "y": 160 }, "to": { "x": 450, "y": 190 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 450, "y": 190 }, "to": { "x": 550, "y": 190 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 550, "y": 190 }, "to": { "x": 550, "y": 160 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 550, "y": 160 }, "to": { "x": 750, "y": 160 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 150, "y": 55 }, "to": { "x": 150, "y": 200 }, "stroke": "#f59e0b", "strokeWidth": 1, "dashed": true },
    { "type": "line", "from": { "x": 350, "y": 55 }, "to": { "x": 350, "y": 200 }, "stroke": "#f59e0b", "strokeWidth": 1, "dashed": true },
    { "type": "line", "from": { "x": 550, "y": 55 }, "to": { "x": 550, "y": 200 }, "stroke": "#f59e0b", "strokeWidth": 1, "dashed": true },

    { "type": "text", "x": 150, "y": 220, "content": "↑", "fontSize": 14, "color": "#f59e0b" },
    { "type": "text", "x": 350, "y": 220, "content": "↑", "fontSize": 14, "color": "#f59e0b" },
    { "type": "text", "x": 550, "y": 220, "content": "↑", "fontSize": 14, "color": "#f59e0b" },

    { "type": "text", "x": 150, "y": 250, "content": "D=0", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 150, "y": 265, "content": "Q←0", "fontSize": 10, "color": "#10b981" },

    { "type": "text", "x": 350, "y": 250, "content": "D=1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 350, "y": 265, "content": "Q←1", "fontSize": 10, "color": "#10b981" },

    { "type": "text", "x": 550, "y": 250, "content": "D=1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 550, "y": 265, "content": "Q←1", "fontSize": 10, "color": "#10b981" }
  ]
}
```

> [!nota] Observe que Q só muda nas bordas de subida do clock (linhas tracejadas). Mesmo D mudando no meio do ciclo, Q permanece estável.

---

## Flip-Flop JK: O Mais Versátil

O **Flip-Flop JK** é como um SR melhorado: quando J=K=1 (que seria proibido no SR), ele **inverte** o estado — o chamado **toggle**.

| J   | K   | Q (próximo) | Ação             |
| --- | --- | ----------- | ---------------- |
| 0   | 0   | Q           | Mantém           |
| 0   | 1   | 0           | Reset            |
| 1   | 0   | 1           | Set              |
| 1   | 1   | Q'          | Toggle (inverte) |

```diagram
{
  "title": "Flip-Flop JK",
  "width": 840,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 60, "y": 30, "width": 280, "height": 140, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 14 },
    { "type": "text", "x": 200, "y": 60, "content": "Símbolo do Flip-Flop JK", "fontSize": 14, "color": "#5b21b6", "fontWeight": "bold" },

    { "type": "rect", "x": 140, "y": 80, "width": 100, "height": 70, "label": "", "fill": "#fff", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 6 },
    { "type": "text", "x": 190, "y": 120, "content": "JK", "fontSize": 16, "color": "#8b5cf6", "fontWeight": "bold" },

    { "type": "text", "x": 110, "y": 100, "content": "J", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 110, "y": 140, "content": "K", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 265, "y": 100, "content": "Q", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 265, "y": 140, "content": "Q'", "fontSize": 12, "color": "#78716c" },

    { "type": "rect", "x": 380, "y": 30, "width": 420, "height": 140, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 590, "y": 60, "content": "Aplicações do Toggle (J=K=1)", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },

    { "type": "text", "x": 590, "y": 100, "content": "• Divisor de frequência por 2", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 590, "y": 125, "content": "• Base para contadores", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 590, "y": 150, "content": "• Geração de formas de onda", "fontSize": 13, "color": "#57534e" }
  ]
}
```

---

## Flip-Flop T: O Toggler

O **Flip-Flop T** (Toggle) é uma simplificação do JK para quando você só precisa do toggle:

| T   | Q (próximo) | Ação    |
| --- | ----------- | ------- |
| 0   | Q           | Mantém  |
| 1   | Q'          | Inverte |

É simplesmente um JK com J=K=T. Muito usado em contadores!

---

## Comparação dos Flip-Flops

```diagram
{
  "title": "Resumo: Tipos de Flip-Flops",
  "width": 840,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 30, "y": 30, "width": 185, "height": 200, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12 },
    { "type": "text", "x": 122, "y": 60, "content": "D (Data)", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 122, "y": 95, "content": "Q ← D", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 122, "y": 130, "content": "O mais usado", "fontSize": 12, "color": "#3b82f6" },
    { "type": "text", "x": 122, "y": 160, "content": "Registradores", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 122, "y": 180, "content": "Memória", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 122, "y": 200, "content": "Pipeline", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 235, "y": 30, "width": 185, "height": 200, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 12 },
    { "type": "text", "x": 327, "y": 60, "content": "JK", "fontSize": 15, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 327, "y": 95, "content": "Set/Reset/Toggle", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 327, "y": 130, "content": "Mais versátil", "fontSize": 12, "color": "#8b5cf6" },
    { "type": "text", "x": 327, "y": 160, "content": "Contadores", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 327, "y": 180, "content": "Sequenciadores", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 327, "y": 200, "content": "FSMs", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 440, "y": 30, "width": 185, "height": 200, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 532, "y": 60, "content": "T (Toggle)", "fontSize": 15, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 532, "y": 95, "content": "Q ← Q' se T=1", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 532, "y": 130, "content": "Divisor freq.", "fontSize": 12, "color": "#10b981" },
    { "type": "text", "x": 532, "y": 160, "content": "Contadores", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 532, "y": 180, "content": "Divisores", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 532, "y": 200, "content": "Prescalers", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 645, "y": 30, "width": 165, "height": 200, "label": "", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 12 },
    { "type": "text", "x": 727, "y": 60, "content": "SR", "fontSize": 15, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "text", "x": 727, "y": 95, "content": "Set/Reset", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 727, "y": 130, "content": "Básico", "fontSize": 12, "color": "#ef4444" },
    { "type": "text", "x": 727, "y": 160, "content": "Estado proibido", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 727, "y": 180, "content": "Usado em latches", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 727, "y": 200, "content": "simples", "fontSize": 11, "color": "#78716c" }
  ]
}
```

---

## Recapitulando

| Conceito          | Descrição                                   |
| ----------------- | ------------------------------------------- |
| **Realimentação** | Conectar saída à entrada para manter estado |
| **Latch**         | Sensível ao nível (enquanto enable=1)       |
| **Flip-Flop**     | Sensível à borda (momento da transição)     |
| **D**             | Armazena o dado na borda do clock           |
| **JK**            | Set, Reset, ou Toggle                       |
| **T**             | Inverte ou mantém                           |

---

## Exercícios de Fixação

1. **Latch SR:** Se um latch SR está em Q=0 e aplicamos S=1, R=0 por um instante e depois voltamos para S=0, R=0, qual será o valor de Q?

2. **Flip-Flop D:** Um FF-D tem clock de 1 MHz. Quantas bordas de subida ocorrem por segundo? A cada borda, o que acontece com Q?

3. **Toggle:** Um FF-T com T=1 recebe um clock de 1 kHz. Qual é a frequência do sinal em Q? Desenhe o diagrama temporal.

4. **JK vs D:** Por que o FF-D é mais usado em registradores modernos, enquanto o JK era popular em contadores antigos?

5. **Projeto:** Desenhe um circuito que use um FF-D para criar um "botão de alternância": cada vez que o botão é pressionado, a saída alterna entre ligado e desligado.
