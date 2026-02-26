---
title: "O Ciclo de Instrução"
description: "Como a CPU executa instruções passo a passo — o coração de todo processador moderno."
duration: 1 aula
---

# O Ciclo de Instrução

Nas aulas anteriores, vimos os componentes do modelo de Von Neumann e entendemos que instruções e dados ficam na mesma memória. Agora vamos ver **como a CPU realmente executa essas instruções**, passo a passo.

---

## A pergunta fundamental

Se você parar para pensar, a CPU é uma máquina incrivelmente simples (em conceito) e absurdamente complexa (em implementação).

A pergunta fundamental é: **como uma máquina de silício consegue "obedecer" instruções?**

A resposta está em um processo repetitivo chamado **ciclo de instrução** (ou ciclo de máquina, ou ciclo fetch-decode-execute).

```diagram
{
  "title": "O ciclo de instrução — visão geral",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 120, "y": 75, "width": 190, "height": 110, "label": "FETCH", "sublabel": "(Buscar)", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 14, "fontSize": 20, "fontWeight": "bold" },
    { "type": "text", "x": 215, "y": 170, "content": "Ler a próxima instrução", "fontSize": 12, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 315, "y": 130 }, "to": { "x": 355, "y": 130 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 325, "y": 75, "width": 190, "height": 110, "label": "DECODE", "sublabel": "(Decodificar)", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 14, "fontSize": 20, "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 170, "content": "Entender o que fazer", "fontSize": 12, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 520, "y": 130 }, "to": { "x": 560, "y": 130 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 530, "y": 75, "width": 190, "height": 110, "label": "EXECUTE", "sublabel": "(Executar)", "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2, "rounded": 14, "fontSize": 20, "fontWeight": "bold" },
    { "type": "text", "x": 625, "y": 170, "content": "Realizar a operação", "fontSize": 12, "color": "#78716c" },

    { "type": "line", "from": { "x": 625, "y": 190 }, "to": { "x": 625, "y": 235 }, "stroke": "#a8a29e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 625, "y": 235 }, "to": { "x": 215, "y": 235 }, "stroke": "#a8a29e", "strokeWidth": 2 },
    { "type": "arrow", "from": { "x": 215, "y": 235 }, "to": { "x": 215, "y": 190 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "text", "x": 420, "y": 270, "content": "O ciclo se repete BILHÕES de vezes por segundo", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 300, "content": "Um processador de 3 GHz executa 3 bilhões de ciclos por segundo", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" }
  ]
}
```

Esse ciclo de três etapas — **buscar, decodificar, executar** — é o que todo processador faz, desde o chip mais simples de um microondas até o processador mais potente de um supercomputador.

---

## Etapa 1: FETCH (Buscar)

A primeira etapa é **buscar a próxima instrução na memória**.

### O que acontece:

1. A **UC** (Unidade de Controle) consulta o registrador **PC** (Program Counter), que contém o endereço da próxima instrução.
2. Esse endereço é colocado no **barramento de endereço**.
3. A memória recebe o sinal de "leitura" pelo **barramento de controle**.
4. A memória coloca o conteúdo daquele endereço no **barramento de dados**.
5. A instrução é armazenada no registrador **IR** (Instruction Register).
6. O **PC é incrementado** para apontar para a próxima instrução.

```diagram
{
  "title": "Etapa FETCH em detalhes",
  "width": 820,
  "height": 380,
  "elements": [
    { "type": "rect", "x": 30, "y": 30, "width": 280, "height": 320, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 170, "y": 55, "content": "CPU", "fontSize": 16, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "rect", "x": 55, "y": 80, "width": 100, "height": 50, "label": "PC", "sublabel": "0x0042", "fill": "#bfdbfe", "stroke": "#60a5fa", "rounded": 8, "fontSize": 12 },
    { "type": "rect", "x": 180, "y": 80, "width": 100, "height": 50, "label": "IR", "sublabel": "(vazio)", "fill": "#bfdbfe", "stroke": "#60a5fa", "rounded": 8, "fontSize": 12 },

    { "type": "rect", "x": 55, "y": 160, "width": 225, "height": 60, "label": "UNIDADE DE CONTROLE", "fill": "#93c5fd", "stroke": "#3b82f6", "rounded": 10, "fontSize": 12, "fontWeight": "bold" },
    { "type": "text", "x": 170, "y": 205, "content": "Coordena a busca", "fontSize": 10, "color": "#1e40af" },

    { "type": "text", "x": 130, "y": 265, "content": "1. Lê PC → 0x0042", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 130, "y": 290, "content": "2. Envia endereço para memória", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 130, "y": 315, "content": "3. Recebe instrução → IR", "fontSize": 12, "color": "#57534e", "align": "left" },

    { "type": "arrow", "from": { "x": 315, "y": 190 }, "to": { "x": 380, "y": 190 }, "stroke": "#f59e0b", "strokeWidth": 2, "bidirectional": true },
    { "type": "text", "x": 347, "y": 175, "content": "BUS", "fontSize": 10, "color": "#b45309" },

    { "type": "rect", "x": 385, "y": 30, "width": 400, "height": 320, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 585, "y": 55, "content": "MEMÓRIA", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },

    { "type": "rect", "x": 420, "y": 85, "width": 330, "height": 35, "label": "", "fill": "#bbf7d0", "stroke": "#4ade80", "rounded": 6 },
    { "type": "text", "x": 440, "y": 108, "content": "0x0040", "fontSize": 11, "color": "#78716c", "align": "left" },
    { "type": "text", "x": 585, "y": 108, "content": "ADD R1, R2", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 420, "y": 125, "width": 330, "height": 35, "label": "", "fill": "#bbf7d0", "stroke": "#4ade80", "rounded": 6 },
    { "type": "text", "x": 440, "y": 148, "content": "0x0041", "fontSize": 11, "color": "#78716c", "align": "left" },
    { "type": "text", "x": 585, "y": 148, "content": "MOV R3, 10", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 420, "y": 165, "width": 330, "height": 35, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2, "rounded": 6 },
    { "type": "text", "x": 440, "y": 188, "content": "0x0042", "fontSize": 11, "color": "#92400e", "fontWeight": "bold", "align": "left" },
    { "type": "text", "x": 585, "y": 188, "content": "SUB R1, R3 ← ESTA!", "fontSize": 11, "color": "#92400e", "fontWeight": "bold" },

    { "type": "rect", "x": 420, "y": 205, "width": 330, "height": 35, "label": "", "fill": "#bbf7d0", "stroke": "#4ade80", "rounded": 6 },
    { "type": "text", "x": 440, "y": 228, "content": "0x0043", "fontSize": 11, "color": "#78716c", "align": "left" },
    { "type": "text", "x": 585, "y": 228, "content": "JMP 0x0050", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 420, "y": 245, "width": 330, "height": 35, "label": "", "fill": "#bbf7d0", "stroke": "#4ade80", "rounded": 6 },
    { "type": "text", "x": 440, "y": 268, "content": "0x0044", "fontSize": 11, "color": "#78716c", "align": "left" },
    { "type": "text", "x": 585, "y": 268, "content": "LOAD R2, [100]", "fontSize": 11, "color": "#57534e" },

    { "type": "text", "x": 585, "y": 320, "content": "A instrução em 0x0042 será buscada", "fontSize": 11, "color": "#065f46", "fontStyle": "italic" }
  ]
}
```

> [!nota] **O PC é como um marcador de livro:** ele sempre aponta para "onde estamos" no programa. Após ler cada instrução, ele avança automaticamente.

---

## Etapa 2: DECODE (Decodificar)

Agora que a instrução está no registrador **IR**, a UC precisa **entender o que ela significa**.

### O que acontece:

1. A UC examina os bits da instrução.
2. Identifica o **opcode** (código de operação) — que diz qual operação será feita.
3. Identifica os **operandos** — que dizem com quais dados a operação será feita.
4. Prepara os circuitos necessários para a execução.

### Anatomia de uma instrução

Uma instrução típica tem dois componentes principais:

```diagram
{
  "title": "Anatomia de uma instrução de máquina",
  "width": 840,
  "height": 300,
  "elements": [
    { "type": "rect", "x": 170, "y": 30, "width": 500, "height": 85, "label": "", "fill": "#f5f5f4", "stroke": "#78716c", "rounded": 8 },
    { "type": "text", "x": 420, "y": 60, "content": "Instrução completa (ex: 16 bits)", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 95, "content": "1001 0001 0010 1010", "fontSize": 20, "color": "#1c1917", "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 290, "y": 120 }, "to": { "x": 290, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "arrow", "from": { "x": 550, "y": 120 }, "to": { "x": 550, "y": 165 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "rect", "x": 165, "y": 170, "width": 250, "height": 100, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12 },
    { "type": "text", "x": 290, "y": 200, "content": "OPCODE (4 bits)", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 290, "y": 230, "content": "1001 = SUB", "fontSize": 15, "color": "#57534e" },
    { "type": "text", "x": 290, "y": 258, "content": "\"Qual operação?\"", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" },

    { "type": "rect", "x": 425, "y": 170, "width": 250, "height": 100, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 550, "y": 200, "content": "OPERANDOS (12 bits)", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 550, "y": 230, "content": "0001 = R1, 0010 1010 = R3", "fontSize": 15, "color": "#57534e" },
    { "type": "text", "x": 550, "y": 258, "content": "\"Com quais dados?\"", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" }
  ]
}
```

### Exemplos de opcodes

Cada processador define seu próprio conjunto de instruções (ISA — Instruction Set Architecture). Mas algumas operações são universais:

| Opcode (exemplo) | Nome  | O que faz                                |
| ---------------- | ----- | ---------------------------------------- |
| 0000             | NOP   | Não faz nada (espera um ciclo)           |
| 0001             | LOAD  | Carrega dado da memória para registrador |
| 0010             | STORE | Salva dado do registrador na memória     |
| 0011             | ADD   | Soma dois valores                        |
| 0100             | SUB   | Subtrai dois valores                     |
| 0101             | MUL   | Multiplica dois valores                  |
| 0110             | AND   | Operação lógica AND                      |
| 0111             | OR    | Operação lógica OR                       |
| 1000             | JMP   | Salta para outro endereço                |
| 1001             | JZ    | Salta se o resultado for zero            |

---

## Etapa 3: EXECUTE (Executar)

Finalmente, a CPU **executa a operação** decodificada.

### O que acontece depende da instrução:

- **Operação aritmética/lógica**: A ULA recebe os operandos e produz o resultado.
- **Acesso à memória**: O endereço é enviado à memória, que lê ou escreve dados.
- **Salto (jump)**: O PC é modificado para apontar para outro endereço.
- **Entrada/Saída**: Dados são transferidos de/para dispositivos.

```diagram
{
  "title": "Tipos de execução",
  "width": 840,
  "height": 360,
  "elements": [
    { "type": "rect", "x": 30, "y": 30, "width": 385, "height": 145, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 222, "y": 60, "content": "Instrução Aritmética (ex: ADD R1, R2)", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 55, "y": 100, "content": "1. UC envia R1 e R2 para a ULA", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 55, "y": 130, "content": "2. ULA calcula R1 + R2", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 55, "y": 160, "content": "3. Resultado volta para R1 (ou outro destino)", "fontSize": 13, "color": "#57534e", "align": "left" },

    { "type": "rect", "x": 425, "y": 30, "width": 385, "height": 145, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 617, "y": 60, "content": "Instrução de Memória (ex: LOAD R1, [100])", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 450, "y": 100, "content": "1. UC coloca 100 no barramento de endereço", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 450, "y": 130, "content": "2. Memória retorna o valor do endereço 100", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 450, "y": 160, "content": "3. Valor é armazenado em R1", "fontSize": 13, "color": "#57534e", "align": "left" },

    { "type": "rect", "x": 30, "y": 195, "width": 385, "height": 145, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 222, "y": 225, "content": "Instrução de Salto (ex: JMP 0x0100)", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 55, "y": 265, "content": "1. UC carrega 0x0100 no PC", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 55, "y": 295, "content": "2. Próximo FETCH buscará a instrução em 0x0100", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 55, "y": 325, "content": "3. O programa \"pula\" para outro lugar", "fontSize": 13, "color": "#57534e", "align": "left" },

    { "type": "rect", "x": 425, "y": 195, "width": 385, "height": 145, "label": "", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 14 },
    { "type": "text", "x": 617, "y": 225, "content": "Instrução Condicional (ex: JZ 0x0200)", "fontSize": 14, "color": "#9d174d", "fontWeight": "bold" },
    { "type": "text", "x": 450, "y": 265, "content": "1. UC verifica o flag ZERO", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 450, "y": 295, "content": "2. Se ZERO=1, carrega 0x0200 no PC", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 450, "y": 325, "content": "3. Se ZERO=0, continua normalmente", "fontSize": 13, "color": "#57534e", "align": "left" }
  ]
}
```

---

## Um exemplo completo

Vamos acompanhar a execução de uma instrução do início ao fim.

**Cenário:** O programa quer somar dois números (7 e 5) e guardar o resultado.

**Estado inicial:**

- PC = 0x0010
- R1 = 7
- R2 = 5
- R3 = 0 (vazio)

**Instrução em 0x0010:** `ADD R3, R1, R2` (some R1 + R2 e coloque em R3)

```diagram
{
  "title": "Exemplo completo: ADD R3, R1, R2",
  "width": 820,
  "height": 460,
  "elements": [
    { "type": "text", "x": 410, "y": 25, "content": "Somando 7 + 5 = 12", "fontSize": 16, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 30, "y": 50, "width": 250, "height": 380, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 155, "y": 75, "content": "FETCH", "fontSize": 16, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "text", "x": 55, "y": 110, "content": "PC = 0x0010", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "arrow", "from": { "x": 140, "y": 120 }, "to": { "x": 140, "y": 145 }, "stroke": "#a8a29e" },
    { "type": "text", "x": 55, "y": 165, "content": "Endereço 0x0010 enviado", "fontSize": 11, "color": "#78716c", "align": "left" },
    { "type": "text", "x": 55, "y": 185, "content": "para a memória", "fontSize": 11, "color": "#78716c", "align": "left" },
    { "type": "arrow", "from": { "x": 140, "y": 195 }, "to": { "x": 140, "y": 220 }, "stroke": "#a8a29e" },
    { "type": "text", "x": 55, "y": 240, "content": "Memória retorna:", "fontSize": 11, "color": "#78716c", "align": "left" },
    { "type": "rect", "x": 55, "y": 255, "width": 200, "height": 30, "label": "ADD R3, R1, R2", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 6, "fontSize": 11 },
    { "type": "arrow", "from": { "x": 140, "y": 295 }, "to": { "x": 140, "y": 320 }, "stroke": "#a8a29e" },
    { "type": "text", "x": 55, "y": 340, "content": "Instrução → IR", "fontSize": 11, "color": "#78716c", "align": "left" },
    { "type": "text", "x": 55, "y": 365, "content": "PC incrementado:", "fontSize": 11, "color": "#78716c", "align": "left" },
    { "type": "text", "x": 55, "y": 385, "content": "PC = 0x0011", "fontSize": 12, "color": "#059669", "fontWeight": "bold", "align": "left" },

    { "type": "rect", "x": 295, "y": 50, "width": 230, "height": 380, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 410, "y": 75, "content": "DECODE", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },

    { "type": "text", "x": 320, "y": 110, "content": "IR = ADD R3, R1, R2", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "arrow", "from": { "x": 410, "y": 120 }, "to": { "x": 410, "y": 145 }, "stroke": "#a8a29e" },
    { "type": "text", "x": 320, "y": 165, "content": "UC identifica:", "fontSize": 11, "color": "#78716c", "align": "left" },
    { "type": "text", "x": 320, "y": 195, "content": "• Opcode: ADD (soma)", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 320, "y": 220, "content": "• Destino: R3", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 320, "y": 245, "content": "• Fonte 1: R1 (valor: 7)", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 320, "y": 270, "content": "• Fonte 2: R2 (valor: 5)", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "arrow", "from": { "x": 410, "y": 285 }, "to": { "x": 410, "y": 310 }, "stroke": "#a8a29e" },
    { "type": "text", "x": 320, "y": 330, "content": "UC prepara:", "fontSize": 11, "color": "#78716c", "align": "left" },
    { "type": "text", "x": 320, "y": 355, "content": "• Enviar 7 e 5 para ULA", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 320, "y": 380, "content": "• Selecionar operação ADD", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 320, "y": 405, "content": "• Preparar R3 para receber", "fontSize": 12, "color": "#57534e", "align": "left" },

    { "type": "rect", "x": 540, "y": 50, "width": 250, "height": 380, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 665, "y": 75, "content": "EXECUTE", "fontSize": 16, "color": "#92400e", "fontWeight": "bold" },

    { "type": "text", "x": 565, "y": 110, "content": "ULA recebe:", "fontSize": 11, "color": "#78716c", "align": "left" },
    { "type": "text", "x": 565, "y": 135, "content": "• Operando A: 7", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 565, "y": 160, "content": "• Operando B: 5", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 565, "y": 185, "content": "• Operação: ADD", "fontSize": 12, "color": "#57534e", "align": "left" },

    { "type": "rect", "x": 565, "y": 210, "width": 200, "height": 50, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 8 },
    { "type": "text", "x": 665, "y": 230, "content": "ULA calcula:", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 665, "y": 250, "content": "7 + 5 = 12", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 665, "y": 265 }, "to": { "x": 665, "y": 295 }, "stroke": "#a8a29e" },

    { "type": "text", "x": 565, "y": 315, "content": "Resultado 12 armazenado:", "fontSize": 11, "color": "#78716c", "align": "left" },
    { "type": "rect", "x": 565, "y": 330, "width": 200, "height": 35, "label": "R3 = 12", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 8, "fontSize": 14, "fontWeight": "bold" },

    { "type": "text", "x": 665, "y": 400, "content": "Flags atualizados:", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 665, "y": 420, "content": "ZERO=0, NEG=0", "fontSize": 11, "color": "#57534e" }
  ]
}
```

**Estado final:**

- PC = 0x0011 (pronto para a próxima instrução)
- R1 = 7 (inalterado)
- R2 = 5 (inalterado)
- R3 = 12 ✓

---

## E depois? O ciclo recomeça!

Após completar a execução, a CPU não para — ela imediatamente começa um novo ciclo:

1. **FETCH**: Busca a instrução em 0x0011 (o novo valor do PC)
2. **DECODE**: Decodifica
3. **EXECUTE**: Executa

E assim por diante, bilhões de vezes por segundo.

> [!atencao] **O computador nunca para:** Mesmo quando você não está fazendo nada, o processador continua executando ciclos — ele roda processos do sistema operacional, verificações de hardware, timers, etc. O "nada" que você vê é milhões de instruções por segundo nos bastidores.

---

## O papel do clock

Cada etapa do ciclo é sincronizada por um **sinal de clock** — um pulso elétrico que acontece milhões (ou bilhões) de vezes por segundo.

| Frequência do clock | Ciclos por segundo | Exemplo de processador   |
| ------------------- | ------------------ | ------------------------ |
| 1 MHz               | 1 milhão           | Computadores dos anos 80 |
| 100 MHz             | 100 milhões        | Pentium original (1993)  |
| 1 GHz               | 1 bilhão           | Pentium III (1999)       |
| 3 GHz               | 3 bilhões          | Processadores modernos   |
| 5 GHz               | 5 bilhões          | CPUs de alto desempenho  |

> [!dica] Um processador de 3 GHz completa 3 bilhões de ciclos de clock por segundo. Mas isso não significa 3 bilhões de instruções — algumas instruções levam mais de um ciclo para completar.

---

## Recapitulando

| Etapa       | O que acontece                                         |
| ----------- | ------------------------------------------------------ |
| **FETCH**   | CPU lê a próxima instrução da memória usando o PC      |
| **DECODE**  | UC interpreta o opcode e identifica os operandos       |
| **EXECUTE** | ULA/UC executa a operação e armazena o resultado       |
| **Repete**  | O ciclo recomeça imediatamente com a próxima instrução |

| Conceito     | Descrição                                         |
| ------------ | ------------------------------------------------- |
| **PC**       | Program Counter — aponta para a próxima instrução |
| **IR**       | Instruction Register — guarda a instrução atual   |
| **Opcode**   | Código que identifica qual operação executar      |
| **Operando** | Dados sobre os quais a operação será executada    |
| **Clock**    | Pulso que sincroniza as etapas do ciclo           |

---

## Exercícios de Fixação

1. Desenhe (ou descreva em texto) o ciclo FETCH-DECODE-EXECUTE. Explique cada etapa com suas próprias palavras.

2. O que acontece com o registrador PC durante o ciclo de instrução? Por que ele é essencial para o funcionamento do computador?

3. Dada a instrução `SUB R2, R1` (subtraia R1 de R2 e armazene em R2), descreva passo a passo o que acontece em cada etapa do ciclo.

4. Um processador de 2 GHz executa quantos ciclos de clock por segundo? Se cada instrução levasse exatamente 1 ciclo, quantas instruções seriam executadas em 1 minuto?

5. Pesquise: o que é "pipeline" em processadores? Como ele se relaciona com o ciclo de instrução e por que melhora o desempenho?
