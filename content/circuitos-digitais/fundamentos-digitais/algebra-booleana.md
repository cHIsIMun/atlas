---
title: Álgebra Booleana
description: "As operações lógicas que fundamentam todos os circuitos digitais: AND, OR, NOT e as leis de De Morgan."
duration: 1 aula
---

# Álgebra Booleana

Agora que sabemos que circuitos digitais trabalham com apenas 0 e 1, surge a pergunta: **como fazer operações com esses valores?** Não dá para usar as operações matemáticas tradicionais — precisamos de uma matemática própria para o mundo binário.

Essa matemática existe, e se chama **Álgebra Booleana**.

---

## George Boole e a lógica como matemática

Em 1854, o matemático inglês **George Boole** publicou "An Investigation of the Laws of Thought" — uma obra que formalizou a lógica como um sistema algébrico. Na época, ninguém imaginava que aquilo seria útil para máquinas.

Quase 100 anos depois, em 1937, **Claude Shannon** demonstrou em sua tese de mestrado que a álgebra de Boole descrevia perfeitamente o comportamento de circuitos elétricos com interruptores. Nascia ali a base teórica de toda a eletrônica digital moderna.

> [!nota] Toda vez que o seu celular processa uma foto, reproduz um áudio ou envia uma mensagem, por dentro são apenas operações booleanas — bilhões delas por segundo.

---

## Variáveis Booleanas

Na álgebra comum, variáveis podem assumir infinitos valores (1, 2, 3.14, -7...). Na álgebra booleana, uma variável só pode ser:

| Valor | Significados equivalentes     |
| ----- | ----------------------------- |
| **0** | Falso, LOW, desligado, não    |
| **1** | Verdadeiro, HIGH, ligado, sim |

Usamos letras como A, B, C para representar variáveis booleanas.

---

## As três operações fundamentais

Toda a lógica digital é construída sobre apenas **três operações básicas**:

```diagram
{
  "title": "As três operações fundamentais",
  "width": 820,
  "height": 310,
  "elements": [
    { "type": "rect", "x": 20, "y": 20, "width": 250, "height": 265, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 145, "y": 52, "content": "AND (E)", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 145, "y": 82, "content": "Símbolo: A · B", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 110, "content": "Resultado é 1 somente", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 130, "content": "quando AMBOS são 1.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 168, "content": "0 · 0 = 0", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 145, "y": 190, "content": "0 · 1 = 0", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 145, "y": 212, "content": "1 · 0 = 0", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 145, "y": 234, "content": "1 · 1 = 1", "fontSize": 13, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 145, "y": 268, "content": "Como multiplicação!", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" },

    { "type": "rect", "x": 285, "y": 20, "width": 250, "height": 265, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 410, "y": 52, "content": "OR (OU)", "fontSize": 18, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 410, "y": 82, "content": "Símbolo: A + B", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 410, "y": 110, "content": "Resultado é 1 quando", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 410, "y": 130, "content": "PELO MENOS UM é 1.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 410, "y": 168, "content": "0 + 0 = 0", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 410, "y": 190, "content": "0 + 1 = 1", "fontSize": 13, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 410, "y": 212, "content": "1 + 0 = 1", "fontSize": 13, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 410, "y": 234, "content": "1 + 1 = 1", "fontSize": 13, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 410, "y": 268, "content": "Diferente de soma normal!", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" },

    { "type": "rect", "x": 550, "y": 20, "width": 250, "height": 265, "label": "", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 14 },
    { "type": "text", "x": 675, "y": 52, "content": "NOT (NÃO)", "fontSize": 18, "color": "#9d174d", "fontWeight": "bold" },
    { "type": "text", "x": 675, "y": 82, "content": "Símbolo: A' ou Ā", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 675, "y": 110, "content": "Inverte o valor.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 675, "y": 130, "content": "0 vira 1. 1 vira 0.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 675, "y": 185, "content": "0' = 1", "fontSize": 13, "color": "#ec4899", "fontWeight": "bold" },
    { "type": "text", "x": 675, "y": 212, "content": "1' = 0", "fontSize": 13, "color": "#ec4899", "fontWeight": "bold" },
    { "type": "text", "x": 675, "y": 268, "content": "Operação unária (1 entrada).", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" }
  ]
}
```

> [!dica] **Analogia com interruptores:** Imagine dois interruptores (A e B) ligados em série — a lâmpada só acende se **ambos** estiverem ligados (AND). Agora imagine em paralelo — a lâmpada acende se **qualquer um** estiver ligado (OR). O NOT é um interruptor invertido: quando você aperta, desliga; quando solta, liga.

---

## Tabela-verdade

A **tabela-verdade** é a ferramenta principal da álgebra booleana. Ela lista **todas as combinações possíveis** de entradas e o resultado correspondente.

Para 2 variáveis (A e B), existem $2^2 = 4$ combinações:

| A   | B   | A AND B | A OR B | NOT A |
| --- | --- | ------- | ------ | ----- |
| 0   | 0   | 0       | 0      | 1     |
| 0   | 1   | 0       | 1      | 1     |
| 1   | 0   | 0       | 1      | 0     |
| 1   | 1   | 1       | 1      | 0     |

> [!atencao] Para $n$ variáveis, a tabela-verdade tem $2^n$ linhas. Com 3 variáveis: 8 linhas. Com 4: 16. Com 10: 1024. As tabelas crescem rapidamente!

---

## Propriedades da Álgebra Booleana

Assim como a álgebra comum tem propriedades (comutativa, associativa...), a álgebra booleana também tem. Essas propriedades permitem **simplificar expressões**:

### Propriedades básicas

| Propriedade      | AND        | OR         |
| ---------------- | ---------- | ---------- |
| **Identidade**   | A · 1 = A  | A + 0 = A  |
| **Nulidade**     | A · 0 = 0  | A + 1 = 1  |
| **Idempotência** | A · A = A  | A + A = A  |
| **Complemento**  | A · A' = 0 | A + A' = 1 |
| **Involução**    | (A')' = A  | (A')' = A  |

### Propriedades com duas variáveis

| Propriedade      | AND                       | OR                          |
| ---------------- | ------------------------- | --------------------------- |
| **Comutativa**   | A · B = B · A             | A + B = B + A               |
| **Associativa**  | (A · B) · C = A · (B · C) | (A + B) + C = A + (B + C)   |
| **Distributiva** | A · (B + C) = A·B + A·C   | A + (B · C) = (A+B) · (A+C) |
| **Absorção**     | A · (A + B) = A           | A + (A · B) = A             |

> [!nota] A distributiva do OR sobre o AND pode parecer estranha — ela não funciona assim na álgebra comum! Mas na booleana, ambas as direções funcionam.

---

## Leis de De Morgan

As leis mais poderosas da álgebra booleana foram formuladas por **Augustus De Morgan**. Elas permitem transformar AND em OR (e vice-versa):

```diagram
{
  "title": "Leis de De Morgan",
  "width": 800,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 340, "height": 170, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 14 },
    { "type": "text", "x": 210, "y": 55, "content": "Primeira Lei", "fontSize": 15, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 90, "content": "(A · B)' = A' + B'", "fontSize": 20, "color": "#6d28d9", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 125, "content": "\"O complemento do AND", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 145, "content": "é o OR dos complementos\"", "fontSize": 12, "color": "#57534e" },

    { "type": "rect", "x": 420, "y": 20, "width": 340, "height": 170, "label": "", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 14 },
    { "type": "text", "x": 590, "y": 55, "content": "Segunda Lei", "fontSize": 15, "color": "#9d174d", "fontWeight": "bold" },
    { "type": "text", "x": 590, "y": 90, "content": "(A + B)' = A' · B'", "fontSize": 20, "color": "#db2777", "fontWeight": "bold" },
    { "type": "text", "x": 590, "y": 125, "content": "\"O complemento do OR", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 590, "y": 145, "content": "é o AND dos complementos\"", "fontSize": 12, "color": "#57534e" }
  ]
}
```

> [!dica] **Truque para lembrar:** para aplicar De Morgan, faça três coisas: (1) **quebre a barra** (troque complemento geral por individual), (2) **troque a operação** (AND vira OR, OR vira AND), (3) **complemente cada termo**.

**Verificando a primeira lei com tabela-verdade:**

| A   | B   | A·B | (A·B)' | A'  | B'  | A'+B' |
| --- | --- | --- | ------ | --- | --- | ----- |
| 0   | 0   | 0   | **1**  | 1   | 1   | **1** |
| 0   | 1   | 0   | **1**  | 1   | 0   | **1** |
| 1   | 0   | 0   | **1**  | 0   | 1   | **1** |
| 1   | 1   | 1   | **0**  | 0   | 0   | **0** |

As colunas $(A \cdot B)'$ e $A' + B'$ são idênticas — a lei está comprovada!

---

## Simplificação de Expressões

A grande utilidade dessas propriedades é **simplificar circuitos**. Menos operações = menos portas lógicas = circuito mais barato, rápido e eficiente.

**Exemplo: simplificar $F = A \cdot B + A \cdot B'$**

$$
F = A \cdot B + A \cdot B'
$$

Fatorando A (distributiva):

$$
F = A \cdot (B + B')
$$

Pela propriedade do complemento, $B + B' = 1$:

$$
F = A \cdot 1 = A
$$

Ou seja, a expressão inteira se reduz a simplesmente **A**! Isso significa que o valor de B **não importa** — o resultado depende apenas de A.

> [!atencao] Isso tem impacto direto no hardware: em vez de usar duas portas AND e uma porta OR, basta um fio direto. Menos componentes, menos custo, menos consumo de energia.

---

## Precedência dos Operadores

Assim como na matemática, as operações booleanas têm uma ordem de precedência:

1. **NOT** (maior prioridade) — avaliado primeiro
2. **AND** — avaliado em seguida
3. **OR** (menor prioridade) — avaliado por último

**Exemplo:** $A + B \cdot C'$ é interpretado como $A + (B \cdot (C'))$

Na dúvida, use **parênteses** para deixar explícita a ordem desejada.

---

## Recapitulando

| Conceito              | Descrição                                 |
| --------------------- | ----------------------------------------- |
| **Variável booleana** | Só pode ser 0 ou 1                        |
| **AND (·)**           | Resultado 1 só quando ambos são 1         |
| **OR (+)**            | Resultado 1 quando pelo menos um é 1      |
| **NOT (')**           | Inverte: 0 vira 1, 1 vira 0               |
| **Tabela-verdade**    | Lista todas as combinações possíveis      |
| **De Morgan**         | (A·B)' = A'+B' e (A+B)' = A'·B'           |
| **Simplificação**     | Usar propriedades para reduzir expressões |
| **Precedência**       | NOT > AND > OR                            |

---

## Exercícios de Fixação

1. Construa a tabela-verdade para a expressão $F = A \cdot B + C$, sendo A, B e C variáveis booleanas (8 linhas).

2. Simplifique as expressões usando as propriedades:
   - a) $F = A + A \cdot B$
   - b) $F = (A + B) \cdot (A + B')$
   - c) $F = A' \cdot B' + A' \cdot B$

3. Aplique as leis de De Morgan para encontrar o complemento de:
   - a) $F = A \cdot B \cdot C$
   - b) $F = A + B \cdot C$

4. Verifique, usando tabela-verdade, que $A + A \cdot B = A$ (propriedade da absorção).

5. Um sistema de alarme dispara ($F = 1$) quando o sensor de porta está ativado ($A = 1$) **E** o sistema está armado ($B = 1$), **OU** quando o botão de pânico é pressionado ($C = 1$). Escreva a expressão booleana de $F$ e monte a tabela-verdade.
