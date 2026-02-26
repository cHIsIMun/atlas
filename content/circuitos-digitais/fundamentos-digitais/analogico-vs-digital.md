---
title: Analógico vs Digital
description: "O que diferencia o mundo analógico do digital? Entenda os dois tipos de sinal e por que o digital venceu."
duration: 1 aula
---

# Analógico vs Digital

Antes de falar de portas lógicas, circuitos e Arduino, precisamos entender uma distinção fundamental: a diferença entre sinais **analógicos** e **digitais**. Essa diferença é a base de tudo que veremos nesta disciplina.

---

## O mundo é analógico

O mundo real é **contínuo**. A temperatura não pula de 20°C para 21°C — ela passa por 20,1°C, 20,01°C, 20,001°C... infinitos valores intermediários. O mesmo vale para som, luz, pressão, velocidade.

Um sinal **analógico** representa essa variação contínua. Ele pode assumir **qualquer valor** dentro de uma faixa.

```diagram
{
  "title": "Sinal Analógico vs Sinal Digital",
  "width": 820,
  "height": 340,
  "elements": [
    { "type": "rect", "x": 25, "y": 20, "width": 370, "height": 295, "label": "", "fill": "#eff6ff", "stroke": "#3b82f6", "rounded": 16 },
    { "type": "text", "x": 210, "y": 48, "content": "Sinal ANALÓGICO", "fontSize": 16, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 75, "content": "Variação contínua e suave", "fontSize": 12, "color": "#57534e" },

    { "type": "line", "from": { "x": 65, "y": 260 }, "to": { "x": 360, "y": 260 }, "stroke": "#a8a29e", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 65, "y": 110 }, "to": { "x": 65, "y": 260 }, "stroke": "#a8a29e", "strokeWidth": 1 },
    { "type": "text", "x": 50, "y": 108, "content": "V", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 365, "y": 265, "content": "t", "fontSize": 10, "color": "#78716c" },

    { "type": "polyline", "points": [
      { "x": 65, "y": 185 }, { "x": 100, "y": 140 }, { "x": 135, "y": 195 },
      { "x": 170, "y": 130 }, { "x": 205, "y": 200 }, { "x": 240, "y": 120 },
      { "x": 275, "y": 190 }, { "x": 310, "y": 145 }, { "x": 345, "y": 175 }
    ], "stroke": "#3b82f6", "strokeWidth": 3, "fill": "none" },

    { "type": "text", "x": 210, "y": 290, "content": "Infinitos valores possíveis", "fontSize": 11, "color": "#3b82f6", "fontStyle": "italic" },

    { "type": "rect", "x": 425, "y": 20, "width": 370, "height": 295, "label": "", "fill": "#ecfdf5", "stroke": "#10b981", "rounded": 16 },
    { "type": "text", "x": 610, "y": 48, "content": "Sinal DIGITAL", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 610, "y": 75, "content": "Apenas dois estados", "fontSize": 12, "color": "#57534e" },

    { "type": "line", "from": { "x": 465, "y": 260 }, "to": { "x": 760, "y": 260 }, "stroke": "#a8a29e", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 465, "y": 110 }, "to": { "x": 465, "y": 260 }, "stroke": "#a8a29e", "strokeWidth": 1 },
    { "type": "text", "x": 450, "y": 108, "content": "V", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 765, "y": 265, "content": "t", "fontSize": 10, "color": "#78716c" },

    { "type": "text", "x": 445, "y": 132, "content": "1", "fontSize": 10, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 445, "y": 255, "content": "0", "fontSize": 10, "color": "#10b981", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 465, "y": 135 }, "to": { "x": 530, "y": 135 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 530, "y": 135 }, "to": { "x": 530, "y": 245 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 530, "y": 245 }, "to": { "x": 580, "y": 245 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 580, "y": 245 }, "to": { "x": 580, "y": 135 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 580, "y": 135 }, "to": { "x": 660, "y": 135 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 660, "y": 135 }, "to": { "x": 660, "y": 245 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 660, "y": 245 }, "to": { "x": 700, "y": 245 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 700, "y": 245 }, "to": { "x": 700, "y": 135 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 700, "y": 135 }, "to": { "x": 750, "y": 135 }, "stroke": "#10b981", "strokeWidth": 3 },

    { "type": "text", "x": 610, "y": 290, "content": "Só dois: ALTO (1) ou BAIXO (0)", "fontSize": 11, "color": "#10b981", "fontStyle": "italic" }
  ]
}
```

Exemplos de sinais analógicos:

- A onda sonora da sua voz
- A tensão que sai de uma tomada (127V alternados)
- O ponteiro de um relógio clássico
- Um termômetro de mercúrio

---

## O mundo digital: apenas 0 e 1

Um sinal **digital** é o oposto: ele só pode ter um número **finito** de valores. Na prática, os circuitos digitais usam apenas **dois estados**:

| Estado       | Tensão típica | Significado               |
| ------------ | ------------- | ------------------------- |
| **0** (LOW)  | 0V            | Desligado / Falso / Não   |
| **1** (HIGH) | 3,3V ou 5V    | Ligado / Verdadeiro / Sim |

É como um interruptor de luz: ou está **ligado**, ou está **desligado**. Não existe "meio ligado".

> [!dica] **Analogia:** Um relógio de ponteiros (analógico) mostra o tempo de forma contínua — o ponteiro passa por todos os pontos intermediários. Um relógio digital mostra apenas números discretos: 14:35, 14:36 — nunca "14:35 e meio".

---

## Por que o digital venceu?

Se o mundo real é analógico, por que os computadores são digitais? Porque sinais digitais têm **vantagens enormes**:

```diagram
{
  "title": "Por que usar digital?",
  "width": 820,
  "height": 310,
  "elements": [
    { "type": "rect", "x": 25, "y": 20, "width": 240, "height": 265, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 145, "y": 50, "content": "Resistência a ruído", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 145, "y": 82, "content": "Se o sinal é \"quase 5V\",", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 102, "content": "o circuito entende como 1.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 132, "content": "Pequenas interferências", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 152, "content": "não corrompem o dado.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 195, "content": "No analógico, qualquer", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" },
    { "type": "text", "x": 145, "y": 215, "content": "ruído vira distorção.", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" },

    { "type": "rect", "x": 290, "y": 20, "width": 240, "height": 265, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 410, "y": 50, "content": "Cópia perfeita", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 410, "y": 82, "content": "Copiar 0s e 1s é exato.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 410, "y": 102, "content": "Não perde qualidade.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 410, "y": 140, "content": "Um MP3 copiado 1000x", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 410, "y": 160, "content": "é idêntico ao original.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 410, "y": 200, "content": "Uma fita K7 copiada 10x", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" },
    { "type": "text", "x": 410, "y": 220, "content": "já fica irreconhecível.", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" },

    { "type": "rect", "x": 555, "y": 20, "width": 240, "height": 265, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 675, "y": 50, "content": "Lógica e processamento", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 675, "y": 82, "content": "Com 0 e 1 podemos", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 675, "y": 102, "content": "construir toda a lógica", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 675, "y": 122, "content": "necessária para computar.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 675, "y": 162, "content": "Somar, comparar, decidir", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 675, "y": 182, "content": "— tudo com 0s e 1s.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 675, "y": 222, "content": "É a base da Álgebra", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" },
    { "type": "text", "x": 675, "y": 242, "content": "Booleana (veremos a seguir).", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" }
  ]
}
```

---

## O bit: a menor unidade de informação

Cada 0 ou 1 é chamado de **bit** (_binary digit_ — dígito binário). É a menor quantidade de informação possível: uma escolha entre duas opções.

Com mais bits, representamos mais coisas:

| Bits       | Combinações possíveis | Exemplo                      |
| ---------- | --------------------- | ---------------------------- |
| 1          | 2 (0, 1)              | Ligado/Desligado             |
| 2          | 4 (00, 01, 10, 11)    | 4 direções                   |
| 4          | 16                    | Um dígito hexadecimal        |
| 8 (1 byte) | 256                   | Um caractere (letra, número) |
| 16         | 65.536                | Uma cor no modo "High Color" |
| 32         | ~4 bilhões            | Um endereço IPv4             |

> [!nota] **Agrupamentos comuns:** 8 bits = 1 **byte**. 1024 bytes = 1 **kilobyte** (KB). 1024 KB = 1 **megabyte** (MB). E assim por diante: GB, TB, PB.

---

## Do analógico ao digital: conversão

Na prática, precisamos **converter** sinais analógicos do mundo real para digital (e vice-versa). É isso que sensores e atuadores fazem.

```diagram
{
  "title": "Conversão Analógico-Digital",
  "width": 800,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 30, "y": 50, "width": 170, "height": 80, "label": "Mundo Real", "sublabel": "(Analógico)", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12, "fontSize": 14, "fontWeight": "bold" },
    { "type": "text", "x": 115, "y": 160, "content": "Temperatura, som,", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 115, "y": 180, "content": "luz, pressão...", "fontSize": 11, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 210, "y": 90 }, "to": { "x": 270, "y": 90 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 270, "y": 50, "width": 120, "height": 80, "label": "Sensor", "sublabel": "(ADC)", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 12, "fontSize": 13 },
    { "type": "text", "x": 330, "y": 160, "content": "Converte analógico", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 330, "y": 180, "content": "para digital", "fontSize": 11, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 400, "y": 90 }, "to": { "x": 440, "y": 90 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 440, "y": 35, "width": 140, "height": 110, "label": "Processamento", "sublabel": "Digital (0s e 1s)", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12, "fontSize": 13, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 590, "y": 90 }, "to": { "x": 630, "y": 90 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 630, "y": 50, "width": 140, "height": 80, "label": "Atuador", "sublabel": "(DAC)", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 12, "fontSize": 13 },
    { "type": "text", "x": 700, "y": 160, "content": "Converte digital", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 180, "content": "para analógico", "fontSize": 11, "color": "#78716c" },

    { "type": "text", "x": 400, "y": 230, "content": "ADC = Analog-to-Digital Converter  |  DAC = Digital-to-Analog Converter", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" }
  ]
}
```

> [!dica] **No Arduino**, essa conversão já existe embutida. Quando você usa `analogRead()`, o Arduino converte um sinal analógico (0V a 5V) em um número digital (0 a 1023). Quando usa `analogWrite()`, ele faz o caminho inverso (via PWM).

---

## Recapitulando

| Conceito    | Analógico                              | Digital                     |
| ----------- | -------------------------------------- | --------------------------- |
| **Valores** | Infinitos (contínuos)                  | Apenas dois (0 e 1)         |
| **Ruído**   | Sensível a interferências              | Resistente a interferências |
| **Cópia**   | Perde qualidade a cada cópia           | Cópia perfeita sempre       |
| **Exemplo** | Vinil, fita K7, termômetro de mercúrio | CD, MP3, relógio digital    |
| **Unidade** | Depende da grandeza (Volts, °C...)     | Bit (0 ou 1)                |

---

## Exercícios de Fixação

1. Classifique cada item como **analógico** ou **digital**:
   - a) A velocidade marcada no velocímetro de ponteiro de um carro
   - b) A contagem de "curtidas" em uma postagem
   - c) A onda sonora da sua voz antes de chegar ao microfone
   - d) A música armazenada no seu celular

2. Um sensor de temperatura lê 23,7°C do ambiente. Explique o que precisa acontecer para esse valor ser processado por um circuito digital.

3. Com 3 bits, quantas combinações diferentes são possíveis? Liste todas.

4. Por que dizemos que sinais digitais são mais **resistentes a ruído** do que analógicos? Dê um exemplo prático.
