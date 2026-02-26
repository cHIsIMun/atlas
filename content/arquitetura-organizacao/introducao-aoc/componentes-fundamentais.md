---
title: As Peças do Computador
description: "Conheça os cinco componentes fundamentais de todo computador: CPU, RAM, armazenamento, E/S e barramentos."
duration: 1 aula
---

# As Peças do Computador

Agora que entendemos a diferença entre arquitetura e organização, vimos como os computadores evoluíram e conhecemos o modelo de Von Neumann, vamos olhar para **dentro** de um computador moderno e conhecer cada componente em detalhe.

---

## A visão geral

Todo computador — do seu celular ao supercomputador mais potente do mundo — é composto por estas peças fundamentais:

```diagram
{
  "title": "Visão geral dos componentes de um computador",
  "width": 820,
  "height": 560,
  "elements": [
    { "type": "bracket", "x": 15, "y": 10, "width": 790, "height": 540, "label": "COMPUTADOR", "stroke": "#57534e", "dashed": false, "fill": "#fafaf9", "rounded": 16 },

    { "type": "rect", "x": 240, "y": 50, "width": 340, "height": 100, "label": "PROCESSADOR (CPU)", "sublabel": "UC + ULA + Registradores", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 14, "fontSize": 16, "fontWeight": "bold" },

    { "type": "line", "from": { "x": 150, "y": 210 }, "to": { "x": 670, "y": 210 }, "stroke": "#f59e0b", "strokeWidth": 4 },
    { "type": "line", "from": { "x": 150, "y": 220 }, "to": { "x": 670, "y": 220 }, "stroke": "#f59e0b", "strokeWidth": 4 },
    { "type": "text", "x": 410, "y": 236, "content": "BARRAMENTO", "fontSize": 11, "color": "#b45309", "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 410, "y": 155 }, "to": { "x": 410, "y": 205 }, "stroke": "#f59e0b", "bidirectional": true },

    { "type": "arrow", "from": { "x": 180, "y": 225 }, "to": { "x": 180, "y": 290 }, "stroke": "#f59e0b", "bidirectional": true },
    { "type": "arrow", "from": { "x": 410, "y": 225 }, "to": { "x": 410, "y": 290 }, "stroke": "#f59e0b", "bidirectional": true },
    { "type": "arrow", "from": { "x": 640, "y": 225 }, "to": { "x": 640, "y": 290 }, "stroke": "#f59e0b", "bidirectional": true },

    { "type": "rect", "x": 55, "y": 295, "width": 210, "height": 105, "label": "MEMÓRIA", "sublabel": "PRINCIPAL (RAM)", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 14, "fontSize": 15, "fontWeight": "bold" },
    { "type": "text", "x": 160, "y": 435, "content": "Rápida", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 160, "y": 456, "content": "Temporária", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 305, "y": 295, "width": 210, "height": 105, "label": "MEMÓRIA", "sublabel": "SECUNDÁRIA (SSD/HD)", "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2, "rounded": 14, "fontSize": 15, "fontWeight": "bold" },
    { "type": "text", "x": 410, "y": 435, "content": "Grande", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 410, "y": 456, "content": "Permanente", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 555, "y": 295, "width": 210, "height": 105, "label": "DISPOSITIVOS", "sublabel": "DE E/S", "fill": "#fce7f3", "stroke": "#ec4899", "strokeWidth": 2, "rounded": 14, "fontSize": 15, "fontWeight": "bold" },
    { "type": "text", "x": 660, "y": 435, "content": "Teclado, Mouse", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 660, "y": 456, "content": "Monitor, Impressora", "fontSize": 11, "color": "#57534e" }
  ]
}
```

Vamos entender cada peça.

---

## O Processador (CPU)

É o **cérebro** do computador. Ele faz três coisas:

1. **Busca** instruções na memória
2. **Entende** o que cada instrução pede (decodifica)
3. **Executa** a operação (calcula, compara, move dados)

Dentro dele, existem três partes principais:

```diagram
{
  "title": "Estrutura interna da CPU",
  "width": 720,
  "height": 380,
  "elements": [
    { "type": "bracket", "x": 20, "y": 15, "width": 680, "height": 350, "label": "CPU", "stroke": "#3b82f6", "dashed": false, "fill": "#eff6ff", "rounded": 16 },

    { "type": "rect", "x": 50, "y": 55, "width": 280, "height": 130, "label": "Unidade de Controle (UC)", "sublabel": "O maestro", "fill": "#dbeafe", "stroke": "#60a5fa", "rounded": 12, "fontSize": 14 },
    { "type": "text", "x": 190, "y": 150, "content": "Coordena tudo. Diz quem faz", "fontSize": 11, "color": "#57534e", "maxWidth": 240 },
    { "type": "text", "x": 190, "y": 170, "content": "o que e quando.", "fontSize": 11, "color": "#57534e", "maxWidth": 240 },

    { "type": "rect", "x": 390, "y": 55, "width": 280, "height": 130, "label": "Unidade Lógica e Aritmética", "sublabel": "A calculadora (ULA)", "fill": "#d1fae5", "stroke": "#34d399", "rounded": 12, "fontSize": 14 },
    { "type": "text", "x": 530, "y": 150, "content": "Faz as contas: soma, subtrai,", "fontSize": 11, "color": "#57534e", "maxWidth": 240 },
    { "type": "text", "x": 530, "y": 170, "content": "compara, etc.", "fontSize": 11, "color": "#57534e", "maxWidth": 240 },

    { "type": "arrow", "from": { "x": 335, "y": 120 }, "to": { "x": 385, "y": 120 }, "stroke": "#a8a29e", "bidirectional": true },

    { "type": "rect", "x": 50, "y": 220, "width": 620, "height": 110, "label": "Registradores", "sublabel": "Memórias ultrarrápidas dentro da CPU", "fill": "#fef3c7", "stroke": "#fbbf24", "rounded": 12, "fontSize": 14 },
    { "type": "text", "x": 360, "y": 300, "content": "Poucos, mas com acesso imediato — como a mesa de trabalho.", "fontSize": 12, "color": "#78716c", "fontStyle": "italic", "maxWidth": 540 }
  ]
}
```

> [!dica] **Analogia completa:** Imagine uma cozinha. A UC é o **chef** — lê a receita e diz o que cada pessoa deve fazer. A ULA é o **cozinheiro** — corta, mistura, tempera. Os registradores são a **bancada** — onde ficam os ingredientes que estão sendo usados naquele momento.

### O ciclo Busca-Decodifica-Executa

A CPU não faz tudo de uma vez. Ela trabalha em um **loop infinito** de três passos, repetido bilhões de vezes por segundo:

```diagram
{
  "title": "O Ciclo de Instrução da CPU (Fetch-Decode-Execute)",
  "width": 800,
  "height": 380,
  "elements": [
    { "type": "rect", "x": 40, "y": 40, "width": 200, "height": 110, "label": "1. BUSCAR", "sublabel": "(Fetch)", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14, "fontSize": 16, "fontWeight": "bold" },
    { "type": "text", "x": 140, "y": 175, "content": "A UC usa o Contador de", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 140, "y": 195, "content": "Programa (PC) para ir até", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 140, "y": 215, "content": "a memória e trazer a", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 140, "y": 235, "content": "próxima instrução.", "fontSize": 11, "color": "#57534e" },

    { "type": "arrow", "from": { "x": 250, "y": 95 }, "to": { "x": 300, "y": 95 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 300, "y": 40, "width": 200, "height": 110, "label": "2. DECODIFICAR", "sublabel": "(Decode)", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14, "fontSize": 16, "fontWeight": "bold" },
    { "type": "text", "x": 400, "y": 175, "content": "A UC interpreta os bits da", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 400, "y": 195, "content": "instrução e descobre:", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 400, "y": 215, "content": "qual operação fazer e", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 400, "y": 235, "content": "com quais dados.", "fontSize": 11, "color": "#57534e" },

    { "type": "arrow", "from": { "x": 510, "y": 95 }, "to": { "x": 560, "y": 95 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 560, "y": 40, "width": 200, "height": 110, "label": "3. EXECUTAR", "sublabel": "(Execute)", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14, "fontSize": 16, "fontWeight": "bold" },
    { "type": "text", "x": 660, "y": 175, "content": "A ULA ou a UC realiza", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 660, "y": 195, "content": "a operação: soma, move", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 660, "y": 215, "content": "dado, compara valores,", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 660, "y": 235, "content": "ou salta para outra linha.", "fontSize": 11, "color": "#57534e" },

    { "type": "arrow", "from": { "x": 660, "y": 155 }, "to": { "x": 660, "y": 300 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 140, "y": 300 }, "to": { "x": 660, "y": 300 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "arrow", "from": { "x": 140, "y": 300 }, "to": { "x": 140, "y": 155 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "text", "x": 400, "y": 325, "content": "O PC incrementa e o ciclo recomeça", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" },

    { "type": "text", "x": 400, "y": 365, "content": "Um processador de 4 GHz repete esse ciclo 4 bilhões de vezes por segundo", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" }
  ]
}
```

**Exemplo concreto:** Imagine que a instrução na memória diz `ADD R1, R2, R3` (some o valor de R2 com R3 e guarde em R1):

1. **Buscar:** A UC vai até o endereço indicado pelo PC e traz `ADD R1, R2, R3`
2. **Decodificar:** A UC interpreta — "preciso somar R2 com R3 e guardar em R1"
3. **Executar:** A ULA soma os valores de R2 e R3 e coloca o resultado em R1

Depois, o PC avança para o próximo endereço e o ciclo recomeça.

> [!nota] **Por que isso importa?** Todo programa que você executa — navegar na internet, editar um documento, jogar — se resume a milhões dessas micro-operações acontecendo em sequência. Entender o ciclo é entender a essência de como um computador funciona.

---

## A Memória Principal (RAM)

A RAM (**Random Access Memory**) é onde ficam os programas e dados **enquanto estão em uso**.

Características essenciais:

- **Rápida:** o processador consegue ler dados em ~100 nanossegundos
- **Volátil:** quando o computador desliga, tudo que estava na RAM **desaparece**
- **Acesso direto:** qualquer posição pode ser lida instantaneamente (não precisa "rebobinar" como uma fita)

> [!dica] **Analogia:** A RAM é como uma **mesa de estudo**. Mesa grande = cabe muita coisa aberta ao mesmo tempo = mais RAM. Mesa pequena = precisa ficar trocando livros = pouca RAM. Quando desliga a luz, tudo que estava na mesa some.

---

## A Memória Secundária (Armazenamento)

É onde os dados ficam **guardados permanentemente**: seus arquivos, fotos, programas instalados, sistema operacional.

| Tipo | Velocidade   | Capacidade    | Volatilidade            |
| ---- | ------------ | ------------- | ----------------------- |
| SSD  | Muito rápido | 256 GB – 4 TB | Não-volátil (permanece) |
| HD   | Mais lento   | 1 – 20 TB     | Não-volátil (permanece) |

> [!dica] **Analogia:** O armazenamento é como uma **estante de livros**. Cabe muita coisa, mas para usar um livro você precisa pegá-lo da estante (armazenamento) e colocar na mesa (RAM). Quando desliga o computador, a estante continua intacta.

---

## A Hierarquia de Memória

Você deve ter percebido um padrão: registradores são ultrarrápidos mas cabem pouquíssimos dados. A RAM é rápida mas menor que o SSD. O SSD é grande mas mais lento que a RAM. Existe uma **relação inversa** entre velocidade e capacidade — e isso não é acidente.

Os computadores modernos organizam suas memórias em uma **pirâmide hierárquica**:

```diagram
{
  "title": "Hierarquia de Memória",
  "width": 820,
  "height": 500,
  "elements": [
    { "type": "rect", "x": 310, "y": 20, "width": 200, "height": 60, "label": "Registradores", "fill": "#fecaca", "stroke": "#ef4444", "rounded": 8, "fontSize": 14, "fontWeight": "bold" },
    { "type": "text", "x": 580, "y": 40, "content": "~1 ns", "fontSize": 12, "color": "#ef4444", "fontWeight": "600", "align": "left" },
    { "type": "text", "x": 580, "y": 60, "content": "~1 KB", "fontSize": 11, "color": "#78716c", "align": "left" },

    { "type": "arrow", "from": { "x": 410, "y": 85 }, "to": { "x": 410, "y": 105 }, "stroke": "#d6d3d1" },

    { "type": "rect", "x": 260, "y": 105, "width": 300, "height": 60, "label": "Cache L1 / L2 / L3", "fill": "#fed7aa", "stroke": "#f97316", "rounded": 8, "fontSize": 14, "fontWeight": "bold" },
    { "type": "text", "x": 580, "y": 125, "content": "~2-20 ns", "fontSize": 12, "color": "#f97316", "fontWeight": "600", "align": "left" },
    { "type": "text", "x": 580, "y": 145, "content": "KB a MB", "fontSize": 11, "color": "#78716c", "align": "left" },

    { "type": "arrow", "from": { "x": 410, "y": 170 }, "to": { "x": 410, "y": 190 }, "stroke": "#d6d3d1" },

    { "type": "rect", "x": 195, "y": 190, "width": 430, "height": 60, "label": "Memória Principal (RAM)", "fill": "#bbf7d0", "stroke": "#22c55e", "rounded": 8, "fontSize": 14, "fontWeight": "bold" },
    { "type": "text", "x": 645, "y": 210, "content": "~100 ns", "fontSize": 12, "color": "#22c55e", "fontWeight": "600", "align": "left" },
    { "type": "text", "x": 645, "y": 230, "content": "8-64 GB", "fontSize": 11, "color": "#78716c", "align": "left" },

    { "type": "arrow", "from": { "x": 410, "y": 255 }, "to": { "x": 410, "y": 275 }, "stroke": "#d6d3d1" },

    { "type": "rect", "x": 120, "y": 275, "width": 580, "height": 60, "label": "Armazenamento (SSD)", "fill": "#bfdbfe", "stroke": "#3b82f6", "rounded": 8, "fontSize": 14, "fontWeight": "bold" },
    { "type": "text", "x": 720, "y": 295, "content": "~0.1 ms", "fontSize": 12, "color": "#3b82f6", "fontWeight": "600", "align": "left" },
    { "type": "text", "x": 720, "y": 315, "content": "256 GB-4 TB", "fontSize": 11, "color": "#78716c", "align": "left" },

    { "type": "arrow", "from": { "x": 410, "y": 340 }, "to": { "x": 410, "y": 360 }, "stroke": "#d6d3d1" },

    { "type": "rect", "x": 50, "y": 360, "width": 720, "height": 60, "label": "Armazenamento em Rede / Nuvem", "fill": "#e9d5ff", "stroke": "#a855f7", "rounded": 8, "fontSize": 14, "fontWeight": "bold" },
    { "type": "text", "x": 35, "y": 395, "content": "~10 ms", "fontSize": 12, "color": "#a855f7", "fontWeight": "600", "align": "left" },
    { "type": "text", "x": 35, "y": 415, "content": "Ilimitado", "fontSize": 11, "color": "#78716c", "align": "left" },

    { "type": "text", "x": 105, "y": 460, "content": "Mais rápido, menor, mais caro", "fontSize": 12, "color": "#ef4444", "fontWeight": "600" },
    { "type": "arrow", "from": { "x": 310, "y": 460 }, "to": { "x": 510, "y": 460 }, "stroke": "#d6d3d1", "strokeWidth": 1 },
    { "type": "text", "x": 715, "y": 460, "content": "Mais lento, maior, mais barato", "fontSize": 12, "color": "#a855f7", "fontWeight": "600" }
  ]
}
```

A ideia é simples: a CPU trabalha **muito mais rápido** do que a memória consegue entregar dados. Para compensar isso, existem **camadas intermediárias** — as **caches** — que guardam cópias dos dados mais usados em memórias menores e mais rápidas.

| Nível         | Velocidade | Capacidade   | Onde fica                     |
| ------------- | ---------- | ------------ | ----------------------------- |
| Registradores | ~1 ns      | ~1 KB        | Dentro da CPU                 |
| Cache L1      | ~2 ns      | ~64 KB       | Dentro de cada núcleo         |
| Cache L2      | ~7 ns      | ~256 KB–1 MB | Dentro de cada núcleo         |
| Cache L3      | ~20 ns     | 8–36 MB      | Compartilhada entre núcleos   |
| RAM           | ~100 ns    | 8–64 GB      | Placa-mãe (pentes de memória) |
| SSD           | ~0,1 ms    | 256 GB–4 TB  | Conectado via barramento      |

> [!dica] **Analogia da hierarquia:** Imagine que você está estudando. Os **registradores** são a informação que está na sua cabeça neste segundo. A **cache** é a anotação que está na sua mão. A **RAM** é o livro aberto na mesa. O **SSD** é a mochila com os outros livros. A **nuvem** é a biblioteca da cidade. Quanto mais longe, mais demora — mas cabe mais coisa.

> [!nota] **Por que isso importa?** Quando você abre um programa, o computador copia partes dele do SSD para a RAM, e as partes mais usadas são copiadas para a cache automaticamente. Esse processo é invisível para o usuário, mas é o que faz seu computador parecer rápido.

---

## Dispositivos de Entrada e Saída

São tudo aquilo que permite o computador **receber** informação do mundo e **devolver** resultados.

```diagram
{
  "title": "Dispositivos de Entrada e Saída",
  "width": 750,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 30, "y": 20, "width": 190, "height": 275, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 125, "y": 50, "content": "ENTRADA", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 55, "y": 88, "content": "Teclado", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 55, "y": 114, "content": "Mouse", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 55, "y": 140, "content": "Microfone", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 55, "y": 166, "content": "Câmera", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 55, "y": 192, "content": "Scanner", "fontSize": 12, "color": "#57534e", "align": "left" },

    { "type": "arrow", "from": { "x": 230, "y": 110 }, "to": { "x": 290, "y": 110 }, "stroke": "#3b82f6" },

    { "type": "rect", "x": 280, "y": 65, "width": 190, "height": 90, "label": "COMPUTADOR", "fill": "#f5f5f4", "stroke": "#78716c", "rounded": 12, "fontSize": 14, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 475, "y": 110 }, "to": { "x": 530, "y": 110 }, "stroke": "#ec4899" },

    { "type": "rect", "x": 530, "y": 20, "width": 190, "height": 275, "label": "", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 14 },
    { "type": "text", "x": 625, "y": 50, "content": "SAÍDA", "fontSize": 14, "color": "#9d174d", "fontWeight": "bold" },
    { "type": "text", "x": 555, "y": 88, "content": "Monitor", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 555, "y": 114, "content": "Impressora", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 555, "y": 140, "content": "Alto-falante", "fontSize": 12, "color": "#57534e", "align": "left" },

    { "type": "rect", "x": 280, "y": 200, "width": 190, "height": 80, "label": "ENTRADA E SAÍDA", "sublabel": "Pendrive, Rede, Touch", "fill": "#f5f3ff", "stroke": "#8b5cf6", "rounded": 12, "fontSize": 12 },
    { "type": "arrow", "from": { "x": 230, "y": 240 }, "to": { "x": 275, "y": 240 }, "stroke": "#8b5cf6", "bidirectional": true },
    { "type": "arrow", "from": { "x": 475, "y": 240 }, "to": { "x": 525, "y": 240 }, "stroke": "#8b5cf6", "bidirectional": true }
  ]
}
```

---

## O Barramento

É o **sistema de estradas** que conecta tudo. Sem ele, as peças não conversam.

Existem três tipos de barramento:

```diagram
{
  "title": "Os três tipos de barramento",
  "width": 780,
  "height": 290,
  "elements": [
    { "type": "rect", "x": 25, "y": 20, "width": 220, "height": 250, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 135, "y": 48, "content": "Barramento de DADOS", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 135, "y": 78, "content": "Transporta os dados", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 135, "y": 98, "content": "de um lado para outro", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 135, "y": 126, "content": "Bidirecional", "fontSize": 11, "color": "#3b82f6", "fontWeight": "600" },
    { "type": "text", "x": 135, "y": 152, "content": "Largura: 64 bits", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 135, "y": 198, "content": "Analogia:", "fontSize": 11, "color": "#78716c", "fontWeight": "600" },
    { "type": "text", "x": 135, "y": 220, "content": "Os caminhões", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" },

    { "type": "rect", "x": 275, "y": 20, "width": 220, "height": 250, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 385, "y": 48, "content": "Barr. de ENDEREÇOS", "fontSize": 13, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 385, "y": 78, "content": "Indica ONDE ler ou", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 385, "y": 98, "content": "escrever na memória", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 385, "y": 126, "content": "Unidirecional", "fontSize": 11, "color": "#f59e0b", "fontWeight": "600" },
    { "type": "text", "x": 385, "y": 152, "content": "\"Qual gaveta?\"", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" },
    { "type": "text", "x": 385, "y": 198, "content": "Analogia:", "fontSize": 11, "color": "#78716c", "fontWeight": "600" },
    { "type": "text", "x": 385, "y": 220, "content": "Os endereços", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" },

    { "type": "rect", "x": 525, "y": 20, "width": 220, "height": 250, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 635, "y": 48, "content": "Barr. de CONTROLE", "fontSize": 13, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 635, "y": 78, "content": "Sinais de coordenação", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 635, "y": 98, "content": "entre os componentes", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 635, "y": 126, "content": "\"Ler ou escrever?\"", "fontSize": 11, "color": "#10b981", "fontWeight": "600" },
    { "type": "text", "x": 635, "y": 152, "content": "\"Pronto?\" / \"Espere\"", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" },
    { "type": "text", "x": 635, "y": 198, "content": "Analogia:", "fontSize": 11, "color": "#78716c", "fontWeight": "600" },
    { "type": "text", "x": 635, "y": 220, "content": "Os semáforos", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" }
  ]
}
```

---

## Juntando Tudo: Como Funciona na Prática

Vamos acompanhar o que acontece quando você **digita a letra "A" no teclado**:

```diagram
{
  "title": "O que acontece ao digitar a tecla 'A'",
  "width": 800,
  "height": 450,
  "elements": [
    { "type": "rect", "x": 30, "y": 60, "width": 155, "height": 65, "label": "Teclado", "sublabel": "(ENTRADA)", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 10, "fontSize": 13 },
    { "type": "rect", "x": 320, "y": 48, "width": 165, "height": 90, "label": "CPU", "sublabel": "UC + ULA", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 12, "fontSize": 15 },
    { "type": "rect", "x": 620, "y": 60, "width": 155, "height": 65, "label": "Memória", "sublabel": "(RAM)", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 10, "fontSize": 13 },
    { "type": "rect", "x": 320, "y": 210, "width": 165, "height": 65, "label": "Monitor", "sublabel": "(SAÍDA)", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 10, "fontSize": 13 },

    { "type": "arrow", "from": { "x": 190, "y": 85 }, "to": { "x": 315, "y": 85 }, "stroke": "#3b82f6", "strokeWidth": 2, "label": "passo 1-2" },
    { "type": "arrow", "from": { "x": 490, "y": 85 }, "to": { "x": 615, "y": 85 }, "stroke": "#10b981", "strokeWidth": 2, "label": "passo 4" },
    { "type": "arrow", "from": { "x": 402, "y": 143 }, "to": { "x": 402, "y": 205 }, "stroke": "#ec4899", "strokeWidth": 2, "label": "passo 6" },

    { "type": "line", "from": { "x": 30, "y": 325 }, "to": { "x": 770, "y": 325 }, "stroke": "#e7e5e4", "strokeWidth": 1 },

    { "type": "text", "x": 40, "y": 355, "content": "1. Você pressiona 'A'", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 40, "y": 378, "content": "2. Sinal viaja pelo barramento até a CPU", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 40, "y": 401, "content": "3. UC busca instrução de como tratar o dado", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 430, "y": 355, "content": "4. Código da tecla é salvo na RAM", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 430, "y": 378, "content": "5. Programa pede para mostrar na tela", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 430, "y": 401, "content": "6. Monitor exibe a letra 'A'", "fontSize": 12, "color": "#57534e", "align": "left" },

    { "type": "text", "x": 400, "y": 438, "content": "Tudo isso em nanossegundos — bilionésimos de segundo.", "fontSize": 12, "color": "#a8a29e", "fontStyle": "italic" }
  ]
}
```

---

## Recapitulando

Nesta aula, aprendemos os **componentes fundamentais** de todo computador, como a CPU executa instruções e como a memória se organiza:

| Componente                         | Função                                         | Analogia           |
| ---------------------------------- | ---------------------------------------------- | ------------------ |
| **CPU** (UC + ULA + Registradores) | Processa instruções (Busca-Decodifica-Executa) | Cérebro / Cozinha  |
| **Memória Principal** (RAM)        | Dados em uso                                   | Mesa de estudo     |
| **Cache** (L1, L2, L3)             | Cópia rápida dos dados mais usados             | Anotação na mão    |
| **Armazenamento** (SSD/HD)         | Dados permanentes                              | Estante de livros  |
| **Dispositivos de E/S**            | Comunicação com o mundo                        | Portas e janelas   |
| **Barramentos**                    | Conectam tudo                                  | Estradas da cidade |

---

## Exercícios de Fixação

1. Identifique se cada item é um componente de **Entrada**, **Saída** ou **Entrada/Saída**:
   - a) Webcam
   - b) Impressora
   - c) Tela touchscreen
   - d) Pendrive
   - e) Alto-falante

2. Descreva, passo a passo, o que acontece dentro do computador quando você **clica duas vezes em um arquivo .pdf** para abri-lo. Identifique quais componentes (CPU, RAM, armazenamento, E/S, barramento) participam de cada etapa.

3. Por que a RAM é chamada de "volátil"? Se a RAM é mais rápida, por que não usamos apenas RAM e descartamos o SSD?

4. Explique o ciclo **Busca-Decodifica-Executa** com suas próprias palavras. O que o Contador de Programa (PC) tem a ver com esse ciclo?

5. Desenhe a **hierarquia de memória** de um computador moderno, da mais rápida para a mais lenta. Para cada nível, indique: velocidade aproximada, capacidade típica e se é volátil ou não.
