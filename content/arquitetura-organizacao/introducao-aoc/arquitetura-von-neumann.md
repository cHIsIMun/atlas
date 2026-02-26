---
title: A Arquitetura de Von Neumann
description: "Como o ENIAC revelou um problema fundamental e Von Neumann propôs a solução que define os computadores até hoje."
duration: 1 aula
---

# A Arquitetura de Von Neumann

Na aula anterior, vimos que o ENIAC foi um marco — o primeiro computador eletrônico de grande escala. Mas ele tinha um problema sério. Tão sério que motivou uma das ideias mais importantes da história da computação.

---

## O problema do ENIAC

O ENIAC era poderoso para sua época: 5.000 somas por segundo, algo inimaginável antes de 1946. Mas tinha uma falha fundamental na forma como era **programado**.

```diagram
{
  "title": "Como o ENIAC era programado",
  "width": 820,
  "height": 400,
  "elements": [
    { "type": "rect", "x": 30, "y": 30, "width": 350, "height": 340, "label": "", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 16 },
    { "type": "text", "x": 205, "y": 60, "content": "ENIAC — Programação por fiação", "fontSize": 15, "color": "#991b1b", "fontWeight": "bold" },

    { "type": "text", "x": 55, "y": 100, "content": "O programa era a fiação fisica", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 55, "y": 130, "content": "Trocar de programa significava:", "fontSize": 13, "color": "#57534e", "align": "left" },

    { "type": "text", "x": 65, "y": 165, "content": "1. Desligar a máquina", "fontSize": 12, "color": "#78716c", "align": "left" },
    { "type": "text", "x": 65, "y": 192, "content": "2. Reconectar milhares de cabos", "fontSize": 12, "color": "#78716c", "align": "left" },
    { "type": "text", "x": 65, "y": 219, "content": "3. Reconfigurar chaves manuais", "fontSize": 12, "color": "#78716c", "align": "left" },
    { "type": "text", "x": 65, "y": 246, "content": "4. Testar tudo novamente", "fontSize": 12, "color": "#78716c", "align": "left" },

    { "type": "text", "x": 205, "y": 300, "content": "Tempo para trocar de programa:", "fontSize": 12, "color": "#991b1b" },
    { "type": "text", "x": 205, "y": 326, "content": "DIAS ou até SEMANAS", "fontSize": 16, "color": "#dc2626", "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 395, "y": 200 }, "to": { "x": 445, "y": 200 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 450, "y": 30, "width": 340, "height": 340, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 16 },
    { "type": "text", "x": 620, "y": 60, "content": "O problema fundamental", "fontSize": 15, "color": "#92400e", "fontWeight": "bold" },

    { "type": "text", "x": 475, "y": 105, "content": "O programa NÃO ficava", "fontSize": 14, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 475, "y": 130, "content": "na memória.", "fontSize": 14, "color": "#57534e", "align": "left" },

    { "type": "text", "x": 475, "y": 175, "content": "Ele era a própria estrutura", "fontSize": 13, "color": "#78716c", "align": "left" },
    { "type": "text", "x": 475, "y": 200, "content": "física da máquina.", "fontSize": 13, "color": "#78716c", "align": "left" },

    { "type": "text", "x": 475, "y": 248, "content": "Dados e instruções eram", "fontSize": 13, "color": "#78716c", "align": "left" },
    { "type": "text", "x": 475, "y": 273, "content": "tratados de formas", "fontSize": 13, "color": "#78716c", "align": "left" },
    { "type": "text", "x": 475, "y": 298, "content": "completamente separadas.", "fontSize": 13, "color": "#78716c", "align": "left" }
  ]
}
```

O ENIAC executava cálculos em **segundos**, mas trocar o programa levava **dias**. Imagine uma calculadora que faz contas instantaneamente, mas que precisa ser desmontada e remontada toda vez que você quer mudar de operação. Era impraticável.

> [!nota] **O cerne do problema:** No ENIAC, o programa era hardware — cabos e chaves. Para mudar o que a máquina fazia, era preciso mudar fisicamente a máquina. Dados ficavam na memória, mas instruções ficavam na fiação.

---

## A grande ideia de Von Neumann

Em 1945, o matemático húngaro-americano **John von Neumann** publicou o documento _"First Draft of a Report on the EDVAC"_, que propunha uma solução elegante:

**E se o programa fosse armazenado na memória, junto com os dados?**

Essa ideia, aparentemente simples, mudou tudo. É o conceito de **programa armazenado** (_stored-program computer_).

```diagram
{
  "title": "A proposta de Von Neumann",
  "width": 820,
  "height": 350,
  "elements": [
    { "type": "rect", "x": 30, "y": 30, "width": 350, "height": 280, "label": "", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 16 },
    { "type": "text", "x": 205, "y": 58, "content": "ANTES (ENIAC)", "fontSize": 14, "color": "#991b1b", "fontWeight": "bold" },

    { "type": "rect", "x": 60, "y": 85, "width": 130, "height": 70, "label": "Memória", "sublabel": "Só dados", "fill": "#fecaca", "stroke": "#f87171", "rounded": 10, "fontSize": 13 },
    { "type": "rect", "x": 220, "y": 85, "width": 130, "height": 70, "label": "Fiação", "sublabel": "O programa", "fill": "#fecaca", "stroke": "#f87171", "rounded": 10, "fontSize": 13 },

    { "type": "text", "x": 205, "y": 200, "content": "Dados e programa", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 205, "y": 222, "content": "SEPARADOS", "fontSize": 14, "color": "#dc2626", "fontWeight": "bold" },
    { "type": "text", "x": 205, "y": 252, "content": "Mudar programa = mudar hardware", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" },

    { "type": "arrow", "from": { "x": 395, "y": 170 }, "to": { "x": 455, "y": 170 }, "stroke": "#10b981", "strokeWidth": 3, "label": "solucao" },

    { "type": "rect", "x": 450, "y": 30, "width": 340, "height": 280, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 16 },
    { "type": "text", "x": 620, "y": 58, "content": "DEPOIS (Von Neumann)", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },

    { "type": "rect", "x": 500, "y": 85, "width": 240, "height": 100, "label": "Memória Única", "sublabel": "Dados + Programa juntos", "fill": "#a7f3d0", "stroke": "#34d399", "rounded": 10, "fontSize": 14 },

    { "type": "text", "x": 620, "y": 228, "content": "Dados e programa", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 620, "y": 250, "content": "JUNTOS na memória", "fontSize": 14, "color": "#059669", "fontWeight": "bold" },
    { "type": "text", "x": 620, "y": 280, "content": "Mudar programa = carregar da memória", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" }
  ]
}
```

> [!dica] **Analogia:** Imagine dois tipos de rádio. O antigo é como o ENIAC: para mudar de estação, você precisa abrir o rádio e trocar os fios internos. O rádio moderno é como Von Neumann propôs: você simplesmente gira o dial — a "instrução" de qual estação sintonizar já está no mesmo sistema que processa o som.

---

## O modelo proposto

Von Neumann organizou o computador em **cinco blocos funcionais**: uma unidade de processamento (CPU), uma memória que guarda dados **e** instruções, dispositivos de entrada, dispositivos de saída e barramentos conectando tudo.

```diagram
{
  "title": "A Arquitetura de Von Neumann",
  "width": 820,
  "height": 520,
  "elements": [
    { "type": "bracket", "x": 15, "y": 10, "width": 790, "height": 500, "label": "MODELO DE VON NEUMANN", "stroke": "#57534e", "dashed": false, "fill": "#fafaf9", "rounded": 16 },

    { "type": "rect", "x": 275, "y": 45, "width": 270, "height": 105, "label": "UNIDADE CENTRAL DE", "sublabel": "PROCESSAMENTO (CPU)", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 14, "fontSize": 14, "fontWeight": "bold" },

    { "type": "rect", "x": 290, "y": 65, "width": 115, "height": 35, "label": "UC", "fill": "#bfdbfe", "stroke": "#60a5fa", "rounded": 8, "fontSize": 12 },
    { "type": "rect", "x": 415, "y": 65, "width": 115, "height": 35, "label": "ULA", "fill": "#bfdbfe", "stroke": "#60a5fa", "rounded": 8, "fontSize": 12 },
    { "type": "text", "x": 410, "y": 135, "content": "Registradores", "fontSize": 11, "color": "#3b82f6" },

    { "type": "line", "from": { "x": 120, "y": 215 }, "to": { "x": 700, "y": 215 }, "stroke": "#f59e0b", "strokeWidth": 4 },
    { "type": "line", "from": { "x": 120, "y": 225 }, "to": { "x": 700, "y": 225 }, "stroke": "#f59e0b", "strokeWidth": 4 },
    { "type": "text", "x": 410, "y": 248, "content": "BARRAMENTO DO SISTEMA", "fontSize": 11, "color": "#b45309", "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 410, "y": 155 }, "to": { "x": 410, "y": 210 }, "stroke": "#f59e0b", "bidirectional": true },

    { "type": "arrow", "from": { "x": 160, "y": 230 }, "to": { "x": 160, "y": 290 }, "stroke": "#f59e0b", "bidirectional": true },
    { "type": "arrow", "from": { "x": 410, "y": 230 }, "to": { "x": 410, "y": 290 }, "stroke": "#f59e0b", "bidirectional": true },
    { "type": "arrow", "from": { "x": 660, "y": 230 }, "to": { "x": 660, "y": 290 }, "stroke": "#f59e0b", "bidirectional": true },

    { "type": "rect", "x": 55, "y": 295, "width": 210, "height": 120, "label": "MEMÓRIA", "sublabel": "Dados + Instruções", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 14, "fontSize": 14, "fontWeight": "bold" },
    { "type": "text", "x": 160, "y": 380, "content": "Programa armazenado", "fontSize": 11, "color": "#10b981", "fontStyle": "italic" },

    { "type": "rect", "x": 305, "y": 295, "width": 210, "height": 120, "label": "ENTRADA", "sublabel": "Teclado, Mouse", "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2, "rounded": 14, "fontSize": 14, "fontWeight": "bold" },

    { "type": "rect", "x": 555, "y": 295, "width": 210, "height": 120, "label": "SAÍDA", "sublabel": "Monitor, Impressora", "fill": "#fce7f3", "stroke": "#ec4899", "strokeWidth": 2, "rounded": 14, "fontSize": 14, "fontWeight": "bold" },

    { "type": "text", "x": 410, "y": 465, "content": "Todos os computadores modernos seguem este modelo", "fontSize": 13, "color": "#78716c", "fontStyle": "italic" }
  ]
}
```

O mais importante aqui não são os componentes em si — veremos cada um deles em detalhes na próxima aula. O que importa é a **ideia central**: a memória guarda tanto os dados quanto as instruções do programa. É isso que torna o computador uma máquina **de propósito geral**.

---

## Os princípios fundamentais

A arquitetura de Von Neumann se baseia em quatro princípios:

### 1. Programa armazenado na memória

O programa (as instruções) fica na **mesma memória** que os dados. Isso permite trocar de programa instantaneamente — basta carregar novas instruções na memória.

### 2. Execução sequencial

A CPU executa as instruções **uma por uma, em ordem**, seguindo um ciclo repetitivo: **buscar** a próxima instrução na memória, **decodificar** o que ela pede, e **executar** a operação. Esse ciclo se repete bilhões de vezes por segundo nos processadores modernos.

> [!dica] Na próxima aula, vamos ver esse ciclo (Fetch-Decode-Execute) em detalhes, com um diagrama e um exemplo prático de instrução.

### 3. Memória endereçável

Cada posição da memória tem um **endereço numérico** único, como casas em uma rua. A CPU usa esses endereços para encontrar dados e instruções.

### 4. Dados em binário

Tudo — instruções, números, texto, imagens — é representado em **binário** (0s e 1s). Para a memória, não há diferença entre um dado e uma instrução — ambos são sequências de bits.

> [!atencao] **O gargalo de Von Neumann:** Como dados e instruções compartilham a mesma memória e o mesmo barramento, a CPU às vezes precisa **esperar** — ela não pode buscar uma instrução e um dado ao mesmo tempo. Esse problema é chamado de _Von Neumann bottleneck_ e é estudado até hoje.

---

## De onde veio o EDVAC

O **EDVAC** (_Electronic Discrete Variable Automatic Computer_) foi o computador construído com base nas ideias de Von Neumann. Comparado ao ENIAC:

| Característica    | ENIAC              | EDVAC               |
| ----------------- | ------------------ | ------------------- |
| Programação       | Reconectando cabos | Programa na memória |
| Troca de programa | Dias / semanas     | Segundos            |
| Sistema numérico  | Decimal            | Binário             |
| Memória           | Apenas dados       | Dados + instruções  |
| Válvulas          | ~17.500            | ~3.500              |
| Peso              | ~30 toneladas      | ~8 toneladas        |

```diagram
{
  "title": "ENIAC vs EDVAC",
  "width": 780,
  "height": 300,
  "elements": [
    { "type": "rect", "x": 30, "y": 30, "width": 320, "height": 230, "label": "", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 16 },
    { "type": "text", "x": 190, "y": 60, "content": "ENIAC (1946)", "fontSize": 16, "color": "#991b1b", "fontWeight": "bold" },
    { "type": "text", "x": 60, "y": 100, "content": "17.468 válvulas", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 60, "y": 128, "content": "30 toneladas", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 60, "y": 156, "content": "Programa = fiação", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 60, "y": 184, "content": "Sistema decimal", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 60, "y": 218, "content": "Trocar programa: dias", "fontSize": 13, "color": "#dc2626", "fontWeight": "600", "align": "left" },

    { "type": "arrow", "from": { "x": 365, "y": 145 }, "to": { "x": 425, "y": 145 }, "stroke": "#10b981", "strokeWidth": 3 },

    { "type": "rect", "x": 430, "y": 30, "width": 320, "height": 230, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 16 },
    { "type": "text", "x": 590, "y": 60, "content": "EDVAC (1949)", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 460, "y": 100, "content": "~3.500 válvulas", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 460, "y": 128, "content": "~8 toneladas", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 460, "y": 156, "content": "Programa na memória", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 460, "y": 184, "content": "Sistema binário", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 460, "y": 218, "content": "Trocar programa: segundos", "fontSize": 13, "color": "#059669", "fontWeight": "600", "align": "left" }
  ]
}
```

---

## Por que isso importa até hoje?

A arquitetura de Von Neumann foi proposta em 1945 e **todo computador que você usa hoje** — seu notebook, celular, smartwatch, o servidor que hospeda seus sites — segue os mesmos princípios fundamentais.

```diagram
{
  "title": "O legado de Von Neumann",
  "width": 800,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 250, "y": 15, "width": 300, "height": 50, "label": "Modelo de Von Neumann (1945)", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 20, "fontSize": 14, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 260, "y": 70 }, "to": { "x": 110, "y": 108 }, "stroke": "#a8a29e" },
    { "type": "arrow", "from": { "x": 350, "y": 70 }, "to": { "x": 270, "y": 108 }, "stroke": "#a8a29e" },
    { "type": "arrow", "from": { "x": 450, "y": 70 }, "to": { "x": 520, "y": 108 }, "stroke": "#a8a29e" },
    { "type": "arrow", "from": { "x": 540, "y": 70 }, "to": { "x": 690, "y": 108 }, "stroke": "#a8a29e" },

    { "type": "rect", "x": 30, "y": 112, "width": 160, "height": 65, "label": "Computadores", "sublabel": "Desktop / Notebook", "fill": "#f0fdf4", "stroke": "#22c55e", "rounded": 10, "fontSize": 12 },
    { "type": "rect", "x": 210, "y": 112, "width": 160, "height": 65, "label": "Smartphones", "sublabel": "iPhone, Android", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10, "fontSize": 12 },
    { "type": "rect", "x": 440, "y": 112, "width": 160, "height": 65, "label": "Servidores", "sublabel": "Cloud, Data Centers", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 10, "fontSize": 12 },
    { "type": "rect", "x": 620, "y": 112, "width": 160, "height": 65, "label": "Embarcados", "sublabel": "IoT, Wearables", "fill": "#f5f3ff", "stroke": "#8b5cf6", "rounded": 10, "fontSize": 12 },

    { "type": "text", "x": 400, "y": 222, "content": "80 anos depois, o modelo fundamental continua o mesmo.", "fontSize": 13, "color": "#78716c", "fontStyle": "italic" },
    { "type": "text", "x": 400, "y": 250, "content": "Mudam a velocidade, o tamanho e a escala — mas a ideia é a mesma.", "fontSize": 12, "color": "#a8a29e", "fontStyle": "italic" }
  ]
}
```

> [!nota] **Curiosidade:** Existem arquiteturas **alternativas** a Von Neumann, como a **Arquitetura Harvard**, que separa a memória de dados da memória de instruções (usada em microcontroladores como o Arduino). Mas a esmagadora maioria dos computadores de uso geral segue Von Neumann.

---

## Recapitulando

| Conceito                    | Descrição                                           |
| --------------------------- | --------------------------------------------------- |
| **Problema do ENIAC**       | Programa era hardware (fiação) — trocar levava dias |
| **Proposta de Von Neumann** | Armazenar o programa na memória, junto com os dados |
| **Programa armazenado**     | Instruções e dados compartilham a mesma memória     |
| **Execução sequencial**     | Buscar, Decodificar, Executar — repetir             |
| **Gargalo de Von Neumann**  | Dados e instruções disputam o mesmo barramento      |
| **EDVAC**                   | Primeiro computador a implementar o modelo          |

---

## Exercícios de Fixação

1. Explique com suas palavras por que o ENIAC era considerado poderoso mas **impraticável** para uso geral.

2. Qual é a diferença fundamental entre a forma como o ENIAC e o EDVAC tratavam o programa? Por que isso foi revolucionário?

3. Descreva os quatro princípios da arquitetura de Von Neumann. Para cada um, dê um exemplo de como ele se manifesta no computador que você usa hoje.

4. O que é o "gargalo de Von Neumann"? Pesquise: qual solução moderna tenta minimizar esse problema? (Dica: pense em memória cache.)

5. A Arquitetura Harvard separa memória de dados e memória de instruções. Que vantagem isso traz sobre Von Neumann? Por que mesmo assim a maioria dos computadores usa Von Neumann?
