---
title: "Registradores: Armazenando Dados"
description: "De um bit para N bits — como flip-flops se tornam registradores que guardam bytes, palavras e dados estruturados."
duration: 1 aula
---

# Registradores: Armazenando Dados

Um flip-flop armazena 1 bit. Mas para guardar um byte (8 bits), uma palavra (32 ou 64 bits), ou qualquer dado útil, precisamos de **registradores**: conjuntos organizados de flip-flops trabalhando em paralelo.

---

## O que é um Registrador?

Um **registrador** é um grupo de flip-flops (geralmente D) que:

- Compartilham o mesmo sinal de clock
- Armazenam múltiplos bits simultaneamente
- Podem ter funcionalidades adicionais (clear, enable, load)

```diagram
{
  "title": "Registrador de 4 bits",
  "width": 840,
  "height": 260,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "Registrador Paralelo de 4 bits", "fontSize": 16, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 135, "y": 70, "content": "D₀", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 275, "y": 70, "content": "D₁", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 415, "y": 70, "content": "D₂", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 555, "y": 70, "content": "D₃", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 140, "y": 80 }, "to": { "x": 140, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 280, "y": 80 }, "to": { "x": 280, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 420, "y": 80 }, "to": { "x": 420, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 560, "y": 80 }, "to": { "x": 560, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "rect", "x": 100, "y": 100, "width": 80, "height": 80, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 140, "y": 145, "content": "D", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "rect", "x": 240, "y": 100, "width": 80, "height": 80, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 280, "y": 145, "content": "D", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "rect", "x": 380, "y": 100, "width": 80, "height": 80, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 420, "y": 145, "content": "D", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "rect", "x": 520, "y": 100, "width": 80, "height": 80, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 560, "y": 145, "content": "D", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 60, "y": 160 }, "to": { "x": 100, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 180, "y": 160 }, "to": { "x": 240, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 320, "y": 160 }, "to": { "x": 380, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 460, "y": 160 }, "to": { "x": 520, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 600, "y": 160 }, "to": { "x": 660, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 60, "y": 160 }, "to": { "x": 60, "y": 200 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 60, "y": 200 }, "to": { "x": 660, "y": 200 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 660, "y": 200 }, "to": { "x": 660, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "text", "x": 360, "y": 230, "content": "CLK (comum a todos)", "fontSize": 12, "color": "#f59e0b" },

    { "type": "line", "from": { "x": 140, "y": 180 }, "to": { "x": 140, "y": 220 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 280, "y": 180 }, "to": { "x": 280, "y": 220 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 420, "y": 180 }, "to": { "x": 420, "y": 220 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 560, "y": 180 }, "to": { "x": 560, "y": 220 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "text", "x": 135, "y": 245, "content": "Q₀", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 275, "y": 245, "content": "Q₁", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 415, "y": 245, "content": "Q₂", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 555, "y": 245, "content": "Q₃", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },

    { "type": "rect", "x": 700, "y": 90, "width": 110, "height": 100, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 10 },
    { "type": "text", "x": 755, "y": 120, "content": "Na borda:", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 755, "y": 145, "content": "Q₀ ← D₀", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 755, "y": 165, "content": "Q₁ ← D₁", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 755, "y": 185, "content": "...", "fontSize": 12, "color": "#78716c" }
  ]
}
```

---

## Tipos de Registradores

### 1. Registrador Paralelo (PIPO)

**Parallel-In, Parallel-Out**: os dados entram e saem todos de uma vez.

É o tipo mais simples e mais usado. Cada flip-flop recebe seu bit correspondente na borda do clock.

**Aplicações:**

- Armazenamento temporário de dados
- Registradores da CPU (AX, BX, etc.)
- Buffers de E/S

### 2. Registrador de Deslocamento (Shift Register)

Os dados **se movem** entre os flip-flops a cada pulso de clock. Existem várias variantes:

```diagram
{
  "title": "Shift Register - dados se deslocam",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "Registrador de Deslocamento à Direita", "fontSize": 15, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 60, "y": 105, "content": "D_in", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 90, "y": 100 }, "to": { "x": 130, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "rect", "x": 130, "y": 70, "width": 80, "height": 70, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 170, "y": 110, "content": "D₀", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 210, "y": 100 }, "to": { "x": 280, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 245, "y": 90, "content": "→", "fontSize": 16, "color": "#f59e0b" },

    { "type": "rect", "x": 280, "y": 70, "width": 80, "height": 70, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 320, "y": 110, "content": "D₁", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 360, "y": 100 }, "to": { "x": 430, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 395, "y": 90, "content": "→", "fontSize": 16, "color": "#f59e0b" },

    { "type": "rect", "x": 430, "y": 70, "width": 80, "height": 70, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 470, "y": 110, "content": "D₂", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 510, "y": 100 }, "to": { "x": 580, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 545, "y": 90, "content": "→", "fontSize": 16, "color": "#f59e0b" },

    { "type": "rect", "x": 580, "y": 70, "width": 80, "height": 70, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 620, "y": 110, "content": "D₃", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 660, "y": 100 }, "to": { "x": 720, "y": 100 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "text", "x": 740, "y": 105, "content": "D_out", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 400, "y": 170 }, "to": { "x": 400, "y": 200 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "text", "x": 400, "y": 220, "content": "CLK", "fontSize": 12, "color": "#f59e0b" },

    { "type": "rect", "x": 100, "y": 240, "width": 640, "height": 30, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 8 },
    { "type": "text", "x": 420, "y": 260, "content": "A cada pulso: D₃←D₂, D₂←D₁, D₁←D₀, D₀←D_in", "fontSize": 12, "color": "#92400e" }
  ]
}
```

**Variantes de Shift Register:**

| Sigla | Nome                      | Entrada | Saída  | Uso típico                |
| ----- | ------------------------- | ------- | ------ | ------------------------- |
| SISO  | Serial-In, Serial-Out     | 1 bit   | 1 bit  | Linhas de delay           |
| SIPO  | Serial-In, Parallel-Out   | 1 bit   | N bits | Conversão serial→paralela |
| PISO  | Parallel-In, Serial-Out   | N bits  | 1 bit  | Conversão paralela→serial |
| PIPO  | Parallel-In, Parallel-Out | N bits  | N bits | Armazenamento             |

---

## Conversão Serial ↔ Paralela

Uma das aplicações mais importantes dos shift registers é converter entre transmissão **serial** (um bit por vez) e **paralela** (todos os bits de uma vez).

```diagram
{
  "title": "Conversão Serial → Paralela (SIPO)",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 760, "height": 130, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 420, "y": 50, "content": "Exemplo: recebendo o byte 10110100", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 80, "y": 90, "content": "Clock 1:", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 160, "y": 90, "content": "[ 0 ][ ? ][ ? ][ ? ][ ? ][ ? ][ ? ][ ? ]", "fontSize": 13, "color": "#57534e" },

    { "type": "text", "x": 80, "y": 115, "content": "Clock 8:", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 160, "y": 115, "content": "[ 1 ][ 0 ][ 1 ][ 1 ][ 0 ][ 1 ][ 0 ][ 0 ]", "fontSize": 13, "color": "#3b82f6", "fontWeight": "bold" },

    { "type": "text", "x": 500, "y": 115, "content": "← Byte completo!", "fontSize": 12, "color": "#10b981" },

    { "type": "rect", "x": 40, "y": 170, "width": 360, "height": 130, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 220, "y": 200, "content": "SIPO (Serial → Paralela)", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 220, "y": 235, "content": "Receptor UART", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 260, "content": "Leitor de sensores seriais", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 285, "content": "Interface SPI (MISO)", "fontSize": 13, "color": "#57534e" },

    { "type": "rect", "x": 440, "y": 170, "width": 360, "height": 130, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 620, "y": 200, "content": "PISO (Paralela → Serial)", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 620, "y": 235, "content": "Transmissor UART", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 260, "content": "LEDs endereçáveis (WS2812)", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 285, "content": "Interface SPI (MOSI)", "fontSize": 13, "color": "#57534e" }
  ]
}
```

> [!nota] **Por que serial?** Usar menos fios! Um cabo USB, por exemplo, envia dados serialmente em vez de ter 8+ fios para transmissão paralela. O shift register faz a conversão nas pontas.

---

## Registrador com Controles

Registradores práticos têm sinais de controle adicionais:

```diagram
{
  "title": "Registrador com controles completos",
  "width": 840,
  "height": 300,
  "elements": [
    { "type": "rect", "x": 250, "y": 40, "width": 340, "height": 220, "label": "", "fill": "#fff", "stroke": "#3b82f6", "strokeWidth": 3, "rounded": 12 },

    { "type": "text", "x": 420, "y": 75, "content": "REGISTRADOR 8 bits", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "text", "x": 130, "y": 100, "content": "D[7:0]", "fontSize": 13, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 170, "y": 95 }, "to": { "x": 250, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 4 },
    { "type": "text", "x": 200, "y": 90, "content": "8", "fontSize": 10, "color": "#3b82f6" },

    { "type": "text", "x": 130, "y": 145, "content": "LOAD", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 170, "y": 140 }, "to": { "x": 250, "y": 140 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "text", "x": 130, "y": 175, "content": "CLR", "fontSize": 12, "color": "#ef4444", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 160, "y": 170 }, "to": { "x": 250, "y": 170 }, "stroke": "#ef4444", "strokeWidth": 2 },

    { "type": "text", "x": 130, "y": 205, "content": "CLK", "fontSize": 12, "color": "#f59e0b", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 160, "y": 200 }, "to": { "x": 250, "y": 200 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 250, "y": 195 }, "to": { "x": 265, "y": 205 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 265, "y": 205 }, "to": { "x": 250, "y": 215 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 590, "y": 95 }, "to": { "x": 680, "y": 95 }, "stroke": "#57534e", "strokeWidth": 4 },
    { "type": "text", "x": 630, "y": 90, "content": "8", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 700, "y": 100, "content": "Q[7:0]", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 60, "y": 250, "width": 720, "height": 40, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 8 },
    { "type": "text", "x": 420, "y": 275, "content": "LOAD=1: carrega D[7:0]    |    CLR=1: zera Q    |    Sem sinais: mantém Q", "fontSize": 11, "color": "#57534e" }
  ]
}
```

**Sinais típicos:**

| Sinal                  | Função                                            |
| ---------------------- | ------------------------------------------------- |
| **LOAD** (LE)          | Habilita carregamento: Q ← D na próxima borda     |
| **CLR** (Clear)        | Zera o registrador: Q ← 0 (geralmente assíncrono) |
| **OE** (Output Enable) | Habilita saídas (para barramento tri-state)       |
| **CLK**                | Clock: define quando as operações acontecem       |

---

## Registradores na CPU

Dentro de uma CPU, os registradores são organizados em um **banco de registradores** (register file):

```diagram
{
  "title": "Banco de Registradores (simplificado)",
  "width": 840,
  "height": 340,
  "elements": [
    { "type": "rect", "x": 200, "y": 30, "width": 440, "height": 280, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 14 },
    { "type": "text", "x": 420, "y": 60, "content": "REGISTER FILE", "fontSize": 16, "color": "#5b21b6", "fontWeight": "bold" },

    { "type": "rect", "x": 250, "y": 85, "width": 340, "height": 35, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 6 },
    { "type": "text", "x": 280, "y": 107, "content": "R0", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 107, "content": "00000000 00000000 00000000 00000000", "fontSize": 10, "color": "#57534e" },

    { "type": "rect", "x": 250, "y": 125, "width": 340, "height": 35, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 6 },
    { "type": "text", "x": 280, "y": 147, "content": "R1", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 147, "content": "00000000 00000000 00000000 00001010", "fontSize": 10, "color": "#57534e" },

    { "type": "rect", "x": 250, "y": 165, "width": 340, "height": 35, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 6 },
    { "type": "text", "x": 280, "y": 187, "content": "R2", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 187, "content": "11111111 11111111 11111111 11111111", "fontSize": 10, "color": "#57534e" },

    { "type": "text", "x": 420, "y": 215, "content": "...", "fontSize": 14, "color": "#78716c" },

    { "type": "rect", "x": 250, "y": 230, "width": 340, "height": 35, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 6 },
    { "type": "text", "x": 280, "y": 252, "content": "R15", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 252, "content": "00000000 00000000 00000001 00000000", "fontSize": 10, "color": "#57534e" },

    { "type": "text", "x": 130, "y": 180, "content": "Dados\nentrada", "fontSize": 11, "color": "#3b82f6" },
    { "type": "line", "from": { "x": 160, "y": 160 }, "to": { "x": 200, "y": 160 }, "stroke": "#3b82f6", "strokeWidth": 3 },

    { "type": "text", "x": 100, "y": 240, "content": "Seleção\nescrita", "fontSize": 11, "color": "#10b981" },
    { "type": "line", "from": { "x": 160, "y": 235 }, "to": { "x": 200, "y": 235 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 640, "y": 140 }, "to": { "x": 700, "y": 140 }, "stroke": "#57534e", "strokeWidth": 3 },
    { "type": "text", "x": 710, "y": 145, "content": "Porta A", "fontSize": 11, "color": "#57534e" },

    { "type": "line", "from": { "x": 640, "y": 200 }, "to": { "x": 700, "y": 200 }, "stroke": "#57534e", "strokeWidth": 3 },
    { "type": "text", "x": 710, "y": 205, "content": "Porta B", "fontSize": 11, "color": "#57534e" },

    { "type": "text", "x": 420, "y": 330, "content": "Múltiplas portas de leitura permitem ler 2+ registradores simultaneamente", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" }
  ]
}
```

> [!dica] CPUs modernas têm dezenas de registradores visíveis ao programador e centenas de registradores internos para renomeação e pipeline.

---

## Aplicações Práticas

### 1. Buffer de Dados

Armazena dados temporariamente enquanto aguarda processamento.

### 2. Registrador de Status (Flags)

Guarda bits individuais: Zero, Carry, Overflow, Negative, etc.

### 3. Shift Register para LEDs

Controla múltiplos LEDs com poucos pinos do microcontrolador (74HC595).

### 4. UART

Registradores de deslocamento convertem dados paralelos do processador em transmissão serial e vice-versa.

### 5. Pipeline

Registradores entre estágios do pipeline guardam dados parciais de instruções em execução.

---

## Recapitulando

| Tipo     | Entrada  | Saída    | Uso Principal       |
| -------- | -------- | -------- | ------------------- |
| **PIPO** | Paralela | Paralela | Armazenamento       |
| **SIPO** | Serial   | Paralela | Recepção serial     |
| **PISO** | Paralela | Serial   | Transmissão serial  |
| **SISO** | Serial   | Serial   | Delay, memória FIFO |

---

## Exercícios de Fixação

1. **Registrador paralelo:** Um registrador de 8 bits tem D = 10110011 e recebe um pulso de clock com LOAD=1. Qual é o novo valor de Q?

2. **Shift register:** Um SIPO de 4 bits começa em 0000. A entrada serial recebe: 1, 0, 1, 1 (nessa ordem, um por clock). Qual é o estado final?

3. **UART:** Uma UART opera a 9600 baud (bits por segundo). Quanto tempo leva para transmitir um byte completo (8 bits + start + stop = 10 bits)?

4. **Conversão:** Você precisa controlar 24 LEDs usando um microcontrolador com apenas 3 pinos disponíveis. Como shift registers podem ajudar?

5. **Pipeline:** Por que registradores entre estágios de pipeline são essenciais para o funcionamento correto do processador?

6. **Projeto:** Desenhe um circuito que use um registrador de 8 bits com LOAD para armazenar o resultado de uma operação apenas quando um sinal "DONE" é ativado.
