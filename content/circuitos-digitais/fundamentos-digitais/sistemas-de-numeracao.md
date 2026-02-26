---
title: Sistemas de Numeração
description: "Decimal, binário, octal e hexadecimal — como converter entre bases e por que cada uma existe."
duration: 1 aula
---

# Sistemas de Numeração

Na aula anterior vimos que o mundo digital trabalha com apenas dois valores: 0 e 1. Mas como representar números maiores? Textos? Cores? É aqui que entram os **sistemas de numeração** — a forma como organizamos e contamos números usando diferentes bases.

---

## O que é uma "base"?

Um sistema de numeração é definido pela sua **base**, que indica quantos símbolos diferentes ele usa.

```diagram
{
  "title": "As quatro bases mais usadas na computação",
  "width": 820,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 20, "y": 20, "width": 185, "height": 215, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 112, "y": 50, "content": "Decimal (Base 10)", "fontSize": 13, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 112, "y": 80, "content": "Símbolos: 0 a 9", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 112, "y": 108, "content": "O sistema que usamos", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 112, "y": 128, "content": "no dia a dia.", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 112, "y": 165, "content": "Ex: 42, 255, 1024", "fontSize": 12, "color": "#b45309", "fontWeight": "bold" },

    { "type": "rect", "x": 220, "y": 20, "width": 185, "height": 215, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 312, "y": 50, "content": "Binário (Base 2)", "fontSize": 13, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 312, "y": 80, "content": "Símbolos: 0 e 1", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 312, "y": 108, "content": "A língua nativa dos", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 312, "y": 128, "content": "circuitos digitais.", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 312, "y": 165, "content": "Ex: 101010, 11111111", "fontSize": 12, "color": "#059669", "fontWeight": "bold" },

    { "type": "rect", "x": 420, "y": 20, "width": 185, "height": 215, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 512, "y": 50, "content": "Octal (Base 8)", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 512, "y": 80, "content": "Símbolos: 0 a 7", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 512, "y": 108, "content": "Atalho para binário:", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 512, "y": 128, "content": "cada dígito = 3 bits.", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 512, "y": 165, "content": "Ex: 52, 377, 2000", "fontSize": 12, "color": "#2563eb", "fontWeight": "bold" },

    { "type": "rect", "x": 620, "y": 20, "width": 185, "height": 215, "label": "", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 14 },
    { "type": "text", "x": 712, "y": 50, "content": "Hexadecimal (Base 16)", "fontSize": 13, "color": "#9d174d", "fontWeight": "bold" },
    { "type": "text", "x": 712, "y": 80, "content": "Símbolos: 0-9 e A-F", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 712, "y": 108, "content": "Atalho para binário:", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 712, "y": 128, "content": "cada dígito = 4 bits.", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 712, "y": 165, "content": "Ex: 2A, FF, 400", "fontSize": 12, "color": "#db2777", "fontWeight": "bold" }
  ]
}
```

> [!dica] **Por que temos tantas bases?** Nós humanos pensamos em base 10 (provavelmente porque temos 10 dedos). Mas o computador só entende base 2. As bases 8 e 16 existem como "atalhos" para escrever números binários de forma mais compacta.

---

## Notação posicional

Todos esses sistemas funcionam com **notação posicional**: o valor de cada dígito depende da sua **posição**.

No decimal, já fazemos isso naturalmente:

$$
347_{10} = 3 \times 10^2 + 4 \times 10^1 + 7 \times 10^0 = 300 + 40 + 7
$$

No binário, é a mesma lógica, mas com potências de 2:

$$
1011_{2} = 1 \times 2^3 + 0 \times 2^2 + 1 \times 2^1 + 1 \times 2^0 = 8 + 0 + 2 + 1 = 11_{10}
$$

> [!nota] A notação $N_b$ indica a base. Por exemplo, $1011_2$ é "1011 em base 2" e $11_{10}$ é "11 em base 10".

---

## Conversão: Binário para Decimal

Para converter de binário para decimal, basta **somar as potências de 2** onde há um bit 1:

```diagram
{
  "title": "Convertendo 10110₂ para decimal",
  "width": 800,
  "height": 250,
  "elements": [
    { "type": "rect", "x": 40, "y": 15, "width": 720, "height": 210, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },

    { "type": "text", "x": 140, "y": 50, "content": "1", "fontSize": 32, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 260, "y": 50, "content": "0", "fontSize": 32, "color": "#a8a29e", "fontWeight": "bold" },
    { "type": "text", "x": 380, "y": 50, "content": "1", "fontSize": 32, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 500, "y": 50, "content": "1", "fontSize": 32, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 620, "y": 50, "content": "0", "fontSize": 32, "color": "#a8a29e", "fontWeight": "bold" },

    { "type": "text", "x": 140, "y": 95, "content": "2⁴ = 16", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 260, "y": 95, "content": "2³ = 8", "fontSize": 13, "color": "#a8a29e" },
    { "type": "text", "x": 380, "y": 95, "content": "2² = 4", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 500, "y": 95, "content": "2¹ = 2", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 95, "content": "2⁰ = 1", "fontSize": 13, "color": "#a8a29e" },

    { "type": "text", "x": 140, "y": 130, "content": "16", "fontSize": 15, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 200, "y": 130, "content": "+", "fontSize": 15, "color": "#57534e" },
    { "type": "text", "x": 260, "y": 130, "content": "0", "fontSize": 15, "color": "#a8a29e" },
    { "type": "text", "x": 320, "y": 130, "content": "+", "fontSize": 15, "color": "#57534e" },
    { "type": "text", "x": 380, "y": 130, "content": "4", "fontSize": 15, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 440, "y": 130, "content": "+", "fontSize": 15, "color": "#57534e" },
    { "type": "text", "x": 500, "y": 130, "content": "2", "fontSize": 15, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 560, "y": 130, "content": "+", "fontSize": 15, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 130, "content": "0", "fontSize": 15, "color": "#a8a29e" },

    { "type": "line", "from": { "x": 120, "y": 155 }, "to": { "x": 680, "y": 155 }, "stroke": "#d6d3d1", "strokeWidth": 2 },
    { "type": "text", "x": 400, "y": 190, "content": "= 22 (decimal)", "fontSize": 20, "color": "#1e40af", "fontWeight": "bold" }
  ]
}
```

Portanto: $10110_2 = 22_{10}$

---

## Conversão: Decimal para Binário

Para converter de decimal para binário, usamos **divisões sucessivas por 2**, guardando os **restos** de baixo para cima:

**Exemplo: converter $25_{10}$ para binário**

| Divisão | Quociente | Resto |
| ------- | --------- | ----- |
| 25 ÷ 2  | 12        | **1** |
| 12 ÷ 2  | 6         | **0** |
| 6 ÷ 2   | 3         | **0** |
| 3 ÷ 2   | 1         | **1** |
| 1 ÷ 2   | 0         | **1** |

Lendo os restos **de baixo para cima**: $25_{10} = 11001_2$

> [!dica] **Truque rápido:** memorize as potências de 2 (1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024). Com a prática, você converte mentalmente sem fazer as divisões.

---

## Hexadecimal: o atalho favorito dos programadores

O sistema **hexadecimal (base 16)** usa os dígitos 0-9 e as letras A-F:

| Decimal | Binário | Hexadecimal |
| ------- | ------- | ----------- |
| 0       | 0000    | 0           |
| 1       | 0001    | 1           |
| 2       | 0010    | 2           |
| 3       | 0011    | 3           |
| 4       | 0100    | 4           |
| 5       | 0101    | 5           |
| 6       | 0110    | 6           |
| 7       | 0111    | 7           |
| 8       | 1000    | 8           |
| 9       | 1001    | 9           |
| 10      | 1010    | A           |
| 11      | 1011    | B           |
| 12      | 1100    | C           |
| 13      | 1101    | D           |
| 14      | 1110    | E           |
| 15      | 1111    | F           |

Cada dígito hexadecimal corresponde a **exatamente 4 bits**. Isso torna a conversão trivial:

**Exemplo: $10101111_2$ para hexadecimal**

1. Separe em grupos de 4 bits (da direita para a esquerda): `1010` | `1111`
2. Converta cada grupo: `1010` = A, `1111` = F
3. Resultado: $10101111_2 = \text{AF}_{16}$

> [!nota] Na programação, o prefixo `0x` indica hexadecimal. Por exemplo, `0xFF` = 255 em decimal. Você verá isso muito em cores CSS (`#FF5733`), endereços de memória e registradores.

---

## Octal: menos usado, mas ainda presente

O sistema **octal (base 8)** funciona de forma semelhante, mas cada dígito corresponde a **3 bits**.

**Exemplo: $110101_2$ para octal**

1. Separe em grupos de 3 bits: `110` | `101`
2. Converta cada grupo: `110` = 6, `101` = 5
3. Resultado: $110101_2 = 65_8$

> [!nota] O octal era mais popular em computadores antigos de 12, 24 ou 36 bits (divisíveis por 3). Hoje é raro, mas ainda aparece em permissões de arquivo Unix/Linux: `chmod 755` usa octal!

---

## Aritmética Binária: Adição

A adição binária segue as mesmas regras da decimal, mas com apenas dois dígitos:

| A   | B   | Soma | Carry (vai-um) |
| --- | --- | ---- | -------------- |
| 0   | 0   | 0    | 0              |
| 0   | 1   | 1    | 0              |
| 1   | 0   | 1    | 0              |
| 1   | 1   | 0    | **1**          |

**Exemplo: $1011_2 + 0110_2$**

```
    1 1      ← carry (vai-um)
    1 0 1 1
  + 0 1 1 0
  ---------
  1 0 0 0 1
```

Conferindo: $11 + 6 = 17$ — e $10001_2 = 16 + 1 = 17$. Correto!

> [!atencao] **Overflow!** Se o resultado precisar de mais bits do que o espaço disponível, temos um _overflow_. Com 4 bits, o maior número é $1111_2 = 15$. Se somarmos $15 + 1$, o resultado ($10000_2 = 16$) precisa de 5 bits — e o quinto bit "transborda".

---

## Tabela de Referência Rápida

| Decimal | Binário  | Octal | Hexadecimal |
| ------- | -------- | ----- | ----------- |
| 0       | 0000     | 0     | 0           |
| 5       | 0101     | 5     | 5           |
| 10      | 1010     | 12    | A           |
| 15      | 1111     | 17    | F           |
| 16      | 10000    | 20    | 10          |
| 42      | 101010   | 52    | 2A          |
| 100     | 1100100  | 144   | 64          |
| 255     | 11111111 | 377   | FF          |

---

## Recapitulando

| Conceito               | Descrição                                                |
| ---------------------- | -------------------------------------------------------- |
| **Base**               | Quantidade de símbolos de um sistema (10, 2, 8, 16)      |
| **Notação posicional** | O valor do dígito depende da posição                     |
| **Binário → Decimal**  | Somar potências de 2 onde o bit é 1                      |
| **Decimal → Binário**  | Divisões sucessivas por 2, ler restos de baixo para cima |
| **Hexadecimal**        | Cada dígito = 4 bits. Prefixo `0x` na programação        |
| **Octal**              | Cada dígito = 3 bits. Usado em permissões Unix           |
| **Adição binária**     | 1 + 1 = 0 com carry (vai-um)                             |
| **Overflow**           | Quando o resultado excede o número de bits disponíveis   |

---

## Exercícios de Fixação

1. Converta para decimal:
   - a) $1101_2$
   - b) $100000_2$
   - c) $3F_{16}$
   - d) $77_8$

2. Converta para binário:
   - a) $50_{10}$
   - b) $200_{10}$
   - c) $\text{B4}_{16}$

3. Converta para hexadecimal:
   - a) $11001010_2$
   - b) $255_{10}$

4. Resolva as somas binárias e confira convertendo para decimal:
   - a) $1010_2 + 0101_2$
   - b) $1111_2 + 0001_2$

5. O código de cor CSS `#1A2B3C` está em hexadecimal. Qual é o valor decimal de cada componente (R, G, B)?
