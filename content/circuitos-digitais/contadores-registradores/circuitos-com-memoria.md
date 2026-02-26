---
title: "Circuitos com Memória"
description: "De combinacional para sequencial — quando circuitos precisam lembrar do passado para decidir o futuro."
duration: 1 aula
---

# Circuitos com Memória

Até agora estudamos circuitos **combinacionais**: a saída depende apenas das entradas atuais. Mas e quando o circuito precisa "lembrar" de algo? Bem-vindos aos circuitos **sequenciais**!

---

## O Problema: Circuitos Sem Memória

Imagine um interruptor de luz comum. Quando você pressiona:

- **Liga** se estava desligado
- **Desliga** se estava ligado

Como fazer isso com um circuito lógico puro?

```diagram
{
  "title": "O dilema: como saber o estado anterior?",
  "width": 840,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 80, "y": 40, "width": 680, "height": 150, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },

    { "type": "text", "x": 180, "y": 80, "content": "Botão", "fontSize": 12, "color": "#57534e" },
    { "type": "rect", "x": 140, "y": 95, "width": 80, "height": 50, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 180, "y": 125, "content": "1", "fontSize": 20, "color": "#3b82f6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 220, "y": 120 }, "to": { "x": 300, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 300, "y": 85, "width": 120, "height": 70, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 360, "y": 115, "content": "???", "fontSize": 18, "color": "#8b5cf6", "fontWeight": "bold" },
    { "type": "text", "x": 360, "y": 140, "content": "lógica?", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 420, "y": 120 }, "to": { "x": 500, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "text", "x": 580, "y": 80, "content": "Lâmpada", "fontSize": 12, "color": "#57534e" },
    { "type": "ellipse", "cx": 580, "cy": 120, "rx": 35, "ry": 35, "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "text", "x": 580, "y": 125, "content": "?", "fontSize": 24, "color": "#f59e0b", "fontWeight": "bold" },

    { "type": "text", "x": 420, "y": 180, "content": "Preciso saber se estava ON ou OFF!", "fontSize": 12, "color": "#ef4444", "fontStyle": "italic" }
  ]
}
```

Uma porta lógica simples não consegue fazer isso — ela não tem "memória" do estado anterior!

---

## A Solução: Realimentação

O truque é conectar a **saída de volta na entrada**. Isso cria um ciclo que pode manter um valor:

```diagram
{
  "title": "O conceito de realimentação (feedback)",
  "width": 840,
  "height": 260,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "Realimentação: a saída influencia a entrada", "fontSize": 15, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 200, "y": 80, "width": 440, "height": 150, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },

    { "type": "rect", "x": 320, "y": 110, "width": 100, "height": 60, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 370, "y": 145, "content": "Lógica", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "text", "x": 250, "y": 140, "content": "entrada →", "fontSize": 11, "color": "#57534e" },
    { "type": "line", "from": { "x": 250, "y": 145 }, "to": { "x": 320, "y": 145 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 420, "y": 140 }, "to": { "x": 550, "y": 140 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 560, "y": 145, "content": "→ saída (Q)", "fontSize": 11, "color": "#57534e" },

    { "type": "ellipse", "cx": 550, "cy": 140, "rx": 5, "ry": 5, "fill": "#10b981", "stroke": "#10b981" },
    { "type": "line", "from": { "x": 550, "y": 140 }, "to": { "x": 550, "y": 195 }, "stroke": "#10b981", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 550, "y": 195 }, "to": { "x": 280, "y": 195 }, "stroke": "#10b981", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 280, "y": 195 }, "to": { "x": 280, "y": 150 }, "stroke": "#10b981", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 280, "y": 150 }, "to": { "x": 320, "y": 150 }, "stroke": "#10b981", "strokeWidth": 2, "dashed": true },

    { "type": "text", "x": 415, "y": 205, "content": "feedback", "fontSize": 11, "color": "#10b981", "fontStyle": "italic" }
  ]
}
```

---

## Combinacional vs Sequencial

```diagram
{
  "title": "Dois tipos fundamentais de circuitos",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 60, "y": 40, "width": 340, "height": 210, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 14 },
    { "type": "text", "x": 230, "y": 75, "content": "COMBINACIONAL", "fontSize": 16, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "text", "x": 230, "y": 110, "content": "Saída = f(entradas atuais)", "fontSize": 13, "color": "#57534e" },

    { "type": "text", "x": 230, "y": 150, "content": "✓ Sem memória", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 230, "y": 175, "content": "✓ Resposta instantânea", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 230, "y": 200, "content": "Ex: somadores, MUX,", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 230, "y": 220, "content": "decodificadores", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 440, "y": 40, "width": 340, "height": 210, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 14 },
    { "type": "text", "x": 610, "y": 75, "content": "SEQUENCIAL", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },

    { "type": "text", "x": 610, "y": 110, "content": "Saída = f(entradas + estado)", "fontSize": 13, "color": "#57534e" },

    { "type": "text", "x": 610, "y": 150, "content": "✓ Com memória", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 175, "content": "✓ Depende do histórico", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 200, "content": "Ex: flip-flops, contadores,", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 610, "y": 220, "content": "registradores, memória", "fontSize": 11, "color": "#78716c" }
  ]
}
```

---

## O Latch SR: Primeiro Circuito com Memória

O elemento mais simples que pode armazenar 1 bit é o **latch SR** (Set-Reset):

```diagram
{
  "title": "Latch SR com portas NOR",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 100, "y": 40, "width": 640, "height": 250, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },

    { "type": "text", "x": 70, "y": 115, "content": "S", "fontSize": 16, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 55, "y": 135, "content": "(Set)", "fontSize": 10, "color": "#78716c" },
    { "type": "line", "from": { "x": 85, "y": 110 }, "to": { "x": 220, "y": 110 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "text", "x": 70, "y": 215, "content": "R", "fontSize": 16, "color": "#ef4444", "fontWeight": "bold" },
    { "type": "text", "x": 50, "y": 235, "content": "(Reset)", "fontSize": 10, "color": "#78716c" },
    { "type": "line", "from": { "x": 85, "y": 210 }, "to": { "x": 220, "y": 210 }, "stroke": "#ef4444", "strokeWidth": 2 },

    { "type": "rect", "x": 280, "y": 85, "width": 100, "height": 50, "label": "", "fill": "#e5e7eb", "stroke": "#57534e", "strokeWidth": 2, "rounded": 6 },
    { "type": "text", "x": 330, "y": 115, "content": "NOR", "fontSize": 14, "color": "#374151", "fontWeight": "bold" },

    { "type": "rect", "x": 280, "y": 185, "width": 100, "height": 50, "label": "", "fill": "#e5e7eb", "stroke": "#57534e", "strokeWidth": 2, "rounded": 6 },
    { "type": "text", "x": 330, "y": 215, "content": "NOR", "fontSize": 14, "color": "#374151", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 220, "y": 110 }, "to": { "x": 280, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 210 }, "to": { "x": 280, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 380, "y": 110 }, "to": { "x": 500, "y": 110 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 210 }, "to": { "x": 500, "y": 210 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "text", "x": 510, "y": 115, "content": "Q", "fontSize": 16, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 510, "y": 215, "content": "Q'", "fontSize": 16, "color": "#78716c", "fontWeight": "bold" },

    { "type": "ellipse", "cx": 450, "cy": 110, "rx": 5, "ry": 5, "fill": "#8b5cf6", "stroke": "#8b5cf6" },
    { "type": "line", "from": { "x": 450, "y": 110 }, "to": { "x": 450, "y": 160 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 450, "y": 160 }, "to": { "x": 250, "y": 160 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 250, "y": 160 }, "to": { "x": 250, "y": 200 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 250, "y": 200 }, "to": { "x": 280, "y": 200 }, "stroke": "#8b5cf6", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 440, "cy": 210, "rx": 5, "ry": 5, "fill": "#8b5cf6", "stroke": "#8b5cf6" },
    { "type": "line", "from": { "x": 440, "y": 210 }, "to": { "x": 440, "y": 260 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 440, "y": 260 }, "to": { "x": 240, "y": 260 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 240, "y": 260 }, "to": { "x": 240, "y": 120 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 240, "y": 120 }, "to": { "x": 280, "y": 120 }, "stroke": "#8b5cf6", "strokeWidth": 2 },

    { "type": "text", "x": 600, "y": 130, "content": "Realimentação", "fontSize": 11, "color": "#8b5cf6" },
    { "type": "text", "x": 600, "y": 150, "content": "cruzada!", "fontSize": 11, "color": "#8b5cf6" },

    { "type": "rect", "x": 560, "y": 180, "width": 160, "height": 80, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 8 },
    { "type": "text", "x": 640, "y": 205, "content": "Q e Q' são", "fontSize": 11, "color": "#92400e" },
    { "type": "text", "x": 640, "y": 225, "content": "sempre opostos", "fontSize": 11, "color": "#92400e" },
    { "type": "text", "x": 640, "y": 245, "content": "(complementares)", "fontSize": 10, "color": "#78716c" }
  ]
}
```

### Funcionamento do Latch SR

| S   | R   | Q (próximo) | Ação                             |
| --- | --- | ----------- | -------------------------------- |
| 0   | 0   | Q (mantém)  | **Memória** — guarda o valor     |
| 1   | 0   | 1           | **Set** — força Q = 1            |
| 0   | 1   | 0           | **Reset** — força Q = 0          |
| 1   | 1   | ❌          | **Proibido** — estado indefinido |

> [!importante] O estado S=R=1 é proibido porque tenta forçar Q=0 e Q=1 simultaneamente — uma contradição!

---

## Por Que Precisamos de Clock?

O latch SR responde **imediatamente** a qualquer mudança nas entradas. Isso pode causar problemas:

```diagram
{
  "title": "Problema: sensibilidade instantânea",
  "width": 840,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 100, "y": 40, "width": 640, "height": 130, "label": "", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 14 },

    { "type": "text", "x": 150, "y": 80, "content": "Se S mudar várias vezes...", "fontSize": 12, "color": "#b91c1c" },

    { "type": "line", "from": { "x": 180, "y": 100 }, "to": { "x": 200, "y": 100 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 200, "y": 100 }, "to": { "x": 200, "y": 130 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 200, "y": 130 }, "to": { "x": 230, "y": 130 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 230, "y": 130 }, "to": { "x": 230, "y": 100 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 230, "y": 100 }, "to": { "x": 260, "y": 100 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 260, "y": 100 }, "to": { "x": 260, "y": 130 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 260, "y": 130 }, "to": { "x": 290, "y": 130 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 290, "y": 130 }, "to": { "x": 290, "y": 100 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 290, "y": 100 }, "to": { "x": 340, "y": 100 }, "stroke": "#ef4444", "strokeWidth": 2 },

    { "type": "text", "x": 420, "y": 90, "content": "→", "fontSize": 20, "color": "#57534e" },

    { "type": "text", "x": 550, "y": 80, "content": "...Q muda a cada vez!", "fontSize": 12, "color": "#b91c1c" },

    { "type": "line", "from": { "x": 480, "y": 100 }, "to": { "x": 500, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 100 }, "to": { "x": 500, "y": 130 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 130 }, "to": { "x": 530, "y": 130 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 530, "y": 130 }, "to": { "x": 530, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 530, "y": 100 }, "to": { "x": 560, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 560, "y": 100 }, "to": { "x": 560, "y": 130 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 560, "y": 130 }, "to": { "x": 590, "y": 130 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 590, "y": 130 }, "to": { "x": 590, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 590, "y": 100 }, "to": { "x": 640, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "text", "x": 420, "y": 150, "content": "Ruído, glitches e bouncing causam caos!", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" }
  ]
}
```

A solução? Adicionar um sinal de **clock** que diz quando o circuito pode mudar:

```diagram
{
  "title": "Solução: controle por clock",
  "width": 840,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 100, "y": 40, "width": 640, "height": 130, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },

    { "type": "text", "x": 220, "y": 80, "content": "Entradas", "fontSize": 12, "color": "#065f46" },
    { "type": "line", "from": { "x": 180, "y": 100 }, "to": { "x": 200, "y": 100 }, "stroke": "#78716c", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 200, "y": 100 }, "to": { "x": 200, "y": 130 }, "stroke": "#78716c", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 200, "y": 130 }, "to": { "x": 230, "y": 130 }, "stroke": "#78716c", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 230, "y": 130 }, "to": { "x": 230, "y": 100 }, "stroke": "#78716c", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 230, "y": 100 }, "to": { "x": 290, "y": 100 }, "stroke": "#78716c", "strokeWidth": 2 },

    { "type": "text", "x": 390, "y": 80, "content": "Clock ↑", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 350, "y": 130 }, "to": { "x": 370, "y": 130 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 370, "y": 130 }, "to": { "x": 370, "y": 100 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 370, "y": 100 }, "to": { "x": 390, "y": 100 }, "stroke": "#10b981", "strokeWidth": 3 },

    { "type": "text", "x": 420, "y": 115, "content": "→", "fontSize": 20, "color": "#57534e" },

    { "type": "text", "x": 570, "y": 80, "content": "Saída Q", "fontSize": 12, "color": "#3b82f6" },
    { "type": "line", "from": { "x": 480, "y": 130 }, "to": { "x": 550, "y": 130 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 550, "y": 130 }, "to": { "x": 550, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 550, "y": 100 }, "to": { "x": 640, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "text", "x": 420, "y": 155, "content": "Q só muda na borda do clock!", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" }
  ]
}
```

Essa é a ideia fundamental dos **flip-flops**, que veremos na próxima aula!

---

## Aplicações de Circuitos Sequenciais

```diagram
{
  "title": "Onde usamos circuitos com memória?",
  "width": 840,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 60, "y": 40, "width": 170, "height": 150, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12 },
    { "type": "text", "x": 145, "y": 75, "content": "💾 Memória", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 145, "y": 105, "content": "RAM, Cache,", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 125, "content": "Registradores", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 145, "content": "da CPU", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 250, "y": 40, "width": 170, "height": 150, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 335, "y": 75, "content": "🔢 Contadores", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 335, "y": 105, "content": "Timers, clocks,", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 335, "y": 125, "content": "divisores de", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 335, "y": 145, "content": "frequência", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 440, "y": 40, "width": 170, "height": 150, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12 },
    { "type": "text", "x": 525, "y": 75, "content": "🔀 Shift Reg.", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 525, "y": 105, "content": "Comunicação", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 525, "y": 125, "content": "serial, buffers,", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 525, "y": 145, "content": "delays", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 630, "y": 40, "width": 170, "height": 150, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 12 },
    { "type": "text", "x": 715, "y": 75, "content": "🎮 FSM", "fontSize": 14, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 715, "y": 105, "content": "Máquinas de", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 715, "y": 125, "content": "estado, controle,", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 715, "y": 145, "content": "protocolos", "fontSize": 11, "color": "#57534e" }
  ]
}
```

---

## Recapitulando

| Conceito          | Descrição                                     |
| ----------------- | --------------------------------------------- |
| **Combinacional** | Saída depende só das entradas atuais          |
| **Sequencial**    | Saída depende das entradas + estado anterior  |
| **Realimentação** | Conectar saída de volta na entrada            |
| **Latch SR**      | Elemento de memória básico de 1 bit           |
| **Clock**         | Sinal que controla quando o circuito atualiza |

---

## Exercícios de Fixação

1. **Classificação:** Identifique se cada circuito é combinacional ou sequencial:
   - Somador de 4 bits
   - Contador de 0 a 9
   - Multiplexador 4:1
   - Registrador de 8 bits

2. **Latch SR:** Se um latch SR está com Q=1 e aplicamos S=0, R=0, o que acontece com Q?

3. **Análise:** Por que a entrada S=R=1 é proibida no latch SR com portas NOR?

4. **Projeto:** Desenhe um circuito com portas NAND que funcione como latch SR. Qual é a combinação proibida neste caso?

5. **Reflexão:** Por que os computadores precisam de um sinal de clock? O que aconteceria se não houvesse clock?
