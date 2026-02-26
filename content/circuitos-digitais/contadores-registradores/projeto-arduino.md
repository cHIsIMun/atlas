---
title: "Projeto: Sistema de Temporização com Arduino"
description: "Integrando flip-flops, registradores e contadores em um sistema real de cronometragem."
duration: 1 aula
---

# Projeto: Sistema de Temporização com Arduino

Hora de colocar em prática tudo que aprendemos! Vamos construir um sistema de temporização que combina contadores, registradores e controle de LEDs — primeiro entendendo os CIs dedicados, depois implementando com Arduino.

---

## Objetivo do Projeto

Construir um **cronômetro digital** com display de 4 dígitos que:

- Conta segundos e décimos de segundo
- Pode ser iniciado, pausado e resetado
- Usa registradores de deslocamento para controlar LEDs/displays

```diagram
{
  "title": "Visão geral do projeto",
  "width": 840,
  "height": 250,
  "elements": [
    { "type": "rect", "x": 100, "y": 40, "width": 640, "height": 180, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "strokeWidth": 2, "rounded": 14 },
    { "type": "text", "x": 420, "y": 70, "content": "Sistema de Cronômetro Digital", "fontSize": 16, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 140, "y": 100, "width": 100, "height": 60, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 190, "y": 125, "content": "Botões", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 190, "y": 145, "content": "START/STOP", "fontSize": 10, "color": "#57534e" },

    { "type": "line", "from": { "x": 240, "y": 130 }, "to": { "x": 300, "y": 130 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 300, "y": 90, "width": 120, "height": 80, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 360, "y": 115, "content": "Arduino", "fontSize": 12, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 360, "y": 135, "content": "Nano/Uno", "fontSize": 12, "color": "#5b21b6" },
    { "type": "text", "x": 360, "y": 155, "content": "(Controle)", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 420, "y": 130 }, "to": { "x": 480, "y": 130 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 480, "y": 90, "width": 120, "height": 80, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 540, "y": 115, "content": "74HC595", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 540, "y": 135, "content": "Shift Register", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 540, "y": 155, "content": "(em cascata)", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 600, "y": 130 }, "to": { "x": 650, "y": 130 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 650, "y": 100, "width": 70, "height": 60, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 685, "y": 125, "content": "Display", "fontSize": 11, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 685, "y": 145, "content": "7-seg", "fontSize": 11, "color": "#065f46" },

    { "type": "text", "x": 420, "y": 200, "content": "Apenas 3 pinos do Arduino → controlam 4 dígitos!", "fontSize": 12, "color": "#8b5cf6", "fontStyle": "italic" }
  ]
}
```

---

## Parte 1: Conhecendo o 74HC595

O 74HC595 é um **registrador de deslocamento** com saída paralela. É perfeito para expandir as saídas do Arduino!

```diagram
{
  "title": "Pinagem do 74HC595",
  "width": 840,
  "height": 340,
  "elements": [
    { "type": "rect", "x": 300, "y": 40, "width": 240, "height": 260, "label": "", "fill": "#1e293b", "stroke": "#334155", "strokeWidth": 3, "rounded": 10 },

    { "type": "ellipse", "cx": 420, "cy": 65, "rx": 15, "ry": 8, "fill": "#475569", "stroke": "#475569" },

    { "type": "text", "x": 260, "y": 90, "content": "Q1 ←", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 260, "y": 120, "content": "Q2 ←", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 260, "y": 150, "content": "Q3 ←", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 260, "y": 180, "content": "Q4 ←", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 260, "y": 210, "content": "Q5 ←", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 260, "y": 240, "content": "Q6 ←", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 260, "y": 270, "content": "Q7 ←", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 247, "y": 300, "content": "GND ←", "fontSize": 12, "color": "#78716c" },

    { "type": "text", "x": 570, "y": 90, "content": "→ VCC", "fontSize": 12, "color": "#ef4444" },
    { "type": "text", "x": 570, "y": 120, "content": "→ Q0", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 570, "y": 150, "content": "→ DS (data)", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 570, "y": 180, "content": "→ OE (enable)", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 570, "y": 210, "content": "→ STCP (latch)", "fontSize": 12, "color": "#f59e0b", "fontWeight": "bold" },
    { "type": "text", "x": 570, "y": 240, "content": "→ SHCP (clock)", "fontSize": 12, "color": "#8b5cf6", "fontWeight": "bold" },
    { "type": "text", "x": 570, "y": 270, "content": "→ MR (reset)", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 570, "y": 300, "content": "→ Q7' (cascata)", "fontSize": 12, "color": "#10b981" },

    { "type": "text", "x": 420, "y": 170, "content": "74HC595", "fontSize": 14, "color": "#f1f5f9", "fontWeight": "bold" },

    { "type": "text", "x": 130, "y": 90, "content": "1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 130, "y": 120, "content": "2", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 130, "y": 150, "content": "3", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 130, "y": 180, "content": "4", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 130, "y": 210, "content": "5", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 130, "y": 240, "content": "6", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 130, "y": 270, "content": "7", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 130, "y": 300, "content": "8", "fontSize": 10, "color": "#78716c" },

    { "type": "text", "x": 700, "y": 90, "content": "16", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 120, "content": "15", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 150, "content": "14", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 180, "content": "13", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 210, "content": "12", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 240, "content": "11", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 270, "content": "10", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 300, "content": "9", "fontSize": 10, "color": "#78716c" }
  ]
}
```

### Funcionamento Básico

```diagram
{
  "title": "Como o 74HC595 funciona",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "Três sinais: DATA, CLOCK e LATCH", "fontSize": 15, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 60, "y": 60, "width": 720, "height": 200, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },

    { "type": "text", "x": 100, "y": 90, "content": "CLOCK (SHCP)", "fontSize": 11, "color": "#8b5cf6", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 100, "y": 110 }, "to": { "x": 700, "y": 110 }, "stroke": "#e5e7eb", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 140, "y": 130 }, "to": { "x": 140, "y": 110 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 130 }, "to": { "x": 220, "y": 110 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 300, "y": 130 }, "to": { "x": 300, "y": 110 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 130 }, "to": { "x": 380, "y": 110 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 460, "y": 130 }, "to": { "x": 460, "y": 110 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 540, "y": 130 }, "to": { "x": 540, "y": 110 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 620, "y": 130 }, "to": { "x": 620, "y": 110 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 700, "y": 130 }, "to": { "x": 700, "y": 110 }, "stroke": "#8b5cf6", "strokeWidth": 2 },

    { "type": "text", "x": 100, "y": 145, "content": "DATA (DS)", "fontSize": 11, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 100, "y": 165 }, "to": { "x": 180, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 180, "y": 165 }, "to": { "x": 180, "y": 155 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 180, "y": 155 }, "to": { "x": 260, "y": 155 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 260, "y": 155 }, "to": { "x": 260, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 260, "y": 165 }, "to": { "x": 340, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 340, "y": 165 }, "to": { "x": 340, "y": 155 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 340, "y": 155 }, "to": { "x": 500, "y": 155 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 155 }, "to": { "x": 500, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 165 }, "to": { "x": 580, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 580, "y": 165 }, "to": { "x": 580, "y": 155 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 580, "y": 155 }, "to": { "x": 660, "y": 155 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 660, "y": 155 }, "to": { "x": 660, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 660, "y": 165 }, "to": { "x": 740, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "text", "x": 150, "y": 178, "content": "0", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 215, "y": 178, "content": "1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 275, "y": 178, "content": "0", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 395, "y": 178, "content": "1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 475, "y": 178, "content": "0", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 540, "y": 178, "content": "1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 620, "y": 178, "content": "1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 178, "content": "0", "fontSize": 10, "color": "#78716c" },

    { "type": "text", "x": 100, "y": 205, "content": "LATCH (STCP)", "fontSize": 11, "color": "#f59e0b", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 100, "y": 225 }, "to": { "x": 720, "y": 225 }, "stroke": "#e5e7eb", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 720, "y": 240 }, "to": { "x": 720, "y": 225 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "text", "x": 730, "y": 245, "content": "↑", "fontSize": 14, "color": "#f59e0b" },
    { "type": "text", "x": 730, "y": 185, "content": "Transfere!", "fontSize": 10, "color": "#f59e0b", "fontStyle": "italic" }
  ]
}
```

> [!importante] O LATCH transfere todos os bits do registrador interno para as saídas de uma vez — evitando "cintilação" durante o deslocamento.

---

## Parte 2: Lista de Materiais

| Quantidade | Componente              | Observação                  |
| ---------- | ----------------------- | --------------------------- |
| 1          | Arduino Uno/Nano        | Microcontrolador            |
| 2          | 74HC595                 | Registrador de deslocamento |
| 1          | Display 7-seg 4 dígitos | Cátodo comum                |
| 4          | Resistor 220Ω           | Para segmentos              |
| 4          | Transistor BC547        | Para multiplexação          |
| 4          | Resistor 1kΩ            | Base dos transistores       |
| 2          | Push button             | START/STOP e RESET          |
| 2          | Resistor 10kΩ           | Pull-down dos botões        |
| 1          | Protoboard              | Para montagem               |
| -          | Jumpers                 | Conexões                    |

---

## Parte 3: Conexões

```diagram
{
  "title": "Esquema de conexões Arduino + 74HC595",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 60, "y": 60, "width": 140, "height": 200, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 130, "y": 90, "content": "Arduino", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 130, "y": 115, "content": "Uno", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "text", "x": 165, "y": 150, "content": "D11 →", "fontSize": 10, "color": "#3b82f6" },
    { "type": "text", "x": 165, "y": 175, "content": "D12 →", "fontSize": 10, "color": "#8b5cf6" },
    { "type": "text", "x": 165, "y": 200, "content": "D8 →", "fontSize": 10, "color": "#f59e0b" },
    { "type": "text", "x": 100, "y": 240, "content": "D2, D3 → botões", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 200, "y": 145 }, "to": { "x": 280, "y": 145 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 200, "y": 170 }, "to": { "x": 280, "y": 170 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 200, "y": 195 }, "to": { "x": 280, "y": 195 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "rect", "x": 280, "y": 80, "width": 120, "height": 160, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 340, "y": 105, "content": "74HC595", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 340, "y": 125, "content": "#1", "fontSize": 11, "color": "#92400e" },
    { "type": "text", "x": 340, "y": 155, "content": "Q0-Q7", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 340, "y": 175, "content": "segmentos", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 340, "y": 220, "content": "Q7' →", "fontSize": 10, "color": "#10b981" },

    { "type": "line", "from": { "x": 380, "y": 215 }, "to": { "x": 440, "y": 215 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "rect", "x": 440, "y": 80, "width": 120, "height": 160, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 500, "y": 105, "content": "74HC595", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 500, "y": 125, "content": "#2", "fontSize": 11, "color": "#92400e" },
    { "type": "text", "x": 500, "y": 155, "content": "Q0-Q3", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 500, "y": 175, "content": "seleção", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 500, "y": 195, "content": "dígito", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 400, "y": 145 }, "to": { "x": 620, "y": 145 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 560, "y": 155 }, "to": { "x": 620, "y": 155 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 620, "y": 100, "width": 150, "height": 120, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 695, "y": 130, "content": "Display", "fontSize": 12, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 695, "y": 150, "content": "7-seg", "fontSize": 12, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 695, "y": 175, "content": "88:88", "fontSize": 20, "color": "#10b981", "fontWeight": "bold" },

    { "type": "text", "x": 420, "y": 280, "content": "CLK e LATCH são compartilhados (em paralelo)", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" },
    { "type": "text", "x": 420, "y": 300, "content": "DATA passa em cascata: Arduino → 595#1 → 595#2", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" }
  ]
}
```

### Conexões detalhadas:

**Arduino → 74HC595 #1:**

- D11 → DS (Data)
- D12 → SHCP (Clock)
- D8 → STCP (Latch)
- VCC → VCC, MR
- GND → GND, OE

**74HC595 #1 → #2:**

- Q7' (#1) → DS (#2)
- SHCP em paralelo
- STCP em paralelo

---

## Parte 4: Código Comentado

```cpp
// Pinos do Arduino
const int DATA_PIN = 11;   // DS do 74HC595
const int CLOCK_PIN = 12;  // SHCP
const int LATCH_PIN = 8;   // STCP

const int START_BTN = 2;   // Botão start/stop
const int RESET_BTN = 3;   // Botão reset

// Padrões dos segmentos para dígitos 0-9
// Ordem: DP G F E D C B A (para cátodo comum)
const byte DIGITS[] = {
  0b00111111,  // 0
  0b00000110,  // 1
  0b01011011,  // 2
  0b01001111,  // 3
  0b01100110,  // 4
  0b01101101,  // 5
  0b01111101,  // 6
  0b00000111,  // 7
  0b01111111,  // 8
  0b01101111   // 9
};

// Padrões de seleção de dígito (um bit por transistor)
const byte DIGIT_SELECT[] = {
  0b00000001,  // Dígito 0 (décimos)
  0b00000010,  // Dígito 1 (segundos unidade)
  0b00000100,  // Dígito 2 (segundos dezena)
  0b00001000   // Dígito 3 (minutos unidade)
};

// Variáveis do cronômetro
volatile unsigned long tempoDecimos = 0;
volatile bool rodando = false;
unsigned long ultimoUpdate = 0;

void setup() {
  pinMode(DATA_PIN, OUTPUT);
  pinMode(CLOCK_PIN, OUTPUT);
  pinMode(LATCH_PIN, OUTPUT);
  pinMode(START_BTN, INPUT);
  pinMode(RESET_BTN, INPUT);

  // Interrupção para start/stop
  attachInterrupt(digitalPinToInterrupt(START_BTN),
                  toggleCronometro, RISING);
}

void loop() {
  // Atualiza contador a cada 100ms
  if (rodando && millis() - ultimoUpdate >= 100) {
    tempoDecimos++;
    ultimoUpdate = millis();
  }

  // Verifica reset
  if (digitalRead(RESET_BTN) == HIGH) {
    tempoDecimos = 0;
    rodando = false;
  }

  // Atualiza display (multiplexação)
  atualizarDisplay();
}

void toggleCronometro() {
  rodando = !rodando;
  ultimoUpdate = millis();
}

void atualizarDisplay() {
  // Separa os dígitos
  int decimos = tempoDecimos % 10;
  int segUnidade = (tempoDecimos / 10) % 10;
  int segDezena = (tempoDecimos / 100) % 6;
  int minUnidade = (tempoDecimos / 600) % 10;

  int digitos[] = {decimos, segUnidade, segDezena, minUnidade};

  // Multiplexação: mostra um dígito de cada vez muito rápido
  for (int i = 0; i < 4; i++) {
    enviarDados(DIGITS[digitos[i]], DIGIT_SELECT[i]);
    delayMicroseconds(2500);  // 2.5ms por dígito
  }
}

void enviarDados(byte segmentos, byte digito) {
  // Desativa saídas durante transição
  digitalWrite(LATCH_PIN, LOW);

  // Envia primeiro o byte do dígito (vai para o 2º 595)
  // Depois o byte dos segmentos (vai para o 1º 595)
  shiftOut(DATA_PIN, CLOCK_PIN, MSBFIRST, digito);
  shiftOut(DATA_PIN, CLOCK_PIN, MSBFIRST, segmentos);

  // Ativa saídas (latch)
  digitalWrite(LATCH_PIN, HIGH);
}
```

> [!nota] A função `shiftOut()` do Arduino faz exatamente o que o 74HC595 espera: envia bit a bit com clock!

---

## Parte 5: Entendendo a Multiplexação

Por que não acendemos todos os dígitos ao mesmo tempo?

```diagram
{
  "title": "Multiplexação de Display",
  "width": 840,
  "height": 260,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "Persistência visual: 4 dígitos parecem acesos juntos!", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 100, "y": 60, "width": 150, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 175, "y": 95, "content": "8", "fontSize": 36, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 175, "y": 130, "content": "0-2.5ms", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 270, "y": 60, "width": 150, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 345, "y": 95, "content": "4", "fontSize": 36, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 345, "y": 130, "content": "2.5-5ms", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 440, "y": 60, "width": 150, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 515, "y": 95, "content": ":", "fontSize": 36, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 515, "y": 130, "content": "5-7.5ms", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 610, "y": 60, "width": 150, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 685, "y": 95, "content": "2", "fontSize": 36, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 685, "y": 130, "content": "7.5-10ms", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 100, "y": 170 }, "to": { "x": 760, "y": 170 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 420, "y": 195, "content": "Ciclo completo: 10ms = 100Hz de refresh", "fontSize": 12, "color": "#8b5cf6" },
    { "type": "text", "x": 420, "y": 220, "content": "Olho humano vê: 84.2 (todos juntos!)", "fontSize": 14, "color": "#10b981", "fontWeight": "bold" }
  ]
}
```

A taxa de 100Hz é rápida o suficiente para parecer contínua, mas lenta o suficiente para o Arduino processar.

---

## Parte 6: Expansões Sugeridas

Depois de dominar o básico, experimente:

```diagram
{
  "title": "Ideias para expandir",
  "width": 840,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 60, "y": 40, "width": 220, "height": 130, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12 },
    { "type": "text", "x": 170, "y": 70, "content": "🎵 Alarme", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 170, "y": 100, "content": "Adicione buzzer que", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 170, "y": 120, "content": "toca quando tempo", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 170, "y": 140, "content": "programado acaba", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 310, "y": 40, "width": 220, "height": 130, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 420, "y": 70, "content": "⏱️ Volta (Lap)", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 100, "content": "Armazene tempos", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 120, "content": "parciais em array", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 140, "content": "e exiba depois", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 560, "y": 40, "width": 220, "height": 130, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12 },
    { "type": "text", "x": 670, "y": 70, "content": "📟 Relógio", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 670, "y": 100, "content": "Adicione RTC", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 670, "y": 120, "content": "(DS1307) para", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 670, "y": 140, "content": "relógio de verdade", "fontSize": 11, "color": "#57534e" }
  ]
}
```

---

## Recapitulando

| Conceito                        | Aplicação no Projeto               |
| ------------------------------- | ---------------------------------- |
| **Registrador de deslocamento** | 74HC595 expande saídas do Arduino  |
| **Cascata**                     | Q7' conecta registradores em série |
| **Latch**                       | Atualiza saídas sem cintilação     |
| **Multiplexação**               | 4 dígitos com poucos pinos         |
| **Contagem**                    | Software simula contador BCD       |

---

## Exercícios de Fixação

1. **Análise:** Quantos pinos do Arduino seriam necessários para controlar o display diretamente (sem shift registers)?

2. **Modificação:** Altere o código para que o cronômetro mostre centésimos de segundo em vez de décimos.

3. **Hardware:** Desenhe o esquema de como ficaria a conexão se usássemos 3 shift registers em cascata.

4. **Desafio:** Modifique o projeto para funcionar como timer regressivo: o usuário define um tempo inicial e ele conta até zero.

5. **Projeto extra:** Use os conceitos aprendidos para criar um "LED chaser" (efeito de LEDs correndo) com 16 LEDs controlados por 2 shift registers.

6. **Reflexão:** Por que usamos transistores para selecionar os dígitos em vez de conectar os cátodos direto ao shift register?
