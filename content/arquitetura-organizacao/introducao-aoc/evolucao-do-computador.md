---
title: A Evolução do Computador
description: "De máquinas mecânicas a microprocessadores — como chegamos ao computador moderno em 4 gerações."
duration: 1 aula
---

# De Onde Viemos: A Evolução do Computador

Computadores não surgiram do nada. Foram **séculos** de ideias, protótipos e descobertas. Vamos percorrer essa linha do tempo para entender como chegamos ao notebook na sua mesa.

---

## As origens: máquinas de calcular

Muito antes da eletricidade, humanos já tentavam construir máquinas para fazer contas.

```diagram
{
  "title": "As origens mecânicas da computação",
  "width": 750,
  "height": 310,
  "elements": [
    { "type": "rect", "x": 30, "y": 30, "width": 310, "height": 250, "label": "", "fill": "#fefce8", "stroke": "#eab308", "rounded": 16 },
    { "type": "text", "x": 185, "y": 58, "content": "1642 — Pascaline", "fontSize": 16, "color": "#854d0e", "fontWeight": "bold" },
    { "type": "text", "x": 185, "y": 84, "content": "Blaise Pascal", "fontSize": 12, "color": "#a16207", "fontStyle": "italic" },
    { "type": "text", "x": 185, "y": 120, "content": "Máquina mecânica de engrenagens", "fontSize": 12, "color": "#57534e", "maxWidth": 260 },
    { "type": "text", "x": 185, "y": 148, "content": "Fazia soma e subtração", "fontSize": 12, "color": "#57534e", "maxWidth": 260 },
    { "type": "text", "x": 185, "y": 176, "content": "Tamanho de uma caixa de sapatos", "fontSize": 12, "color": "#57534e", "maxWidth": 260 },

    { "type": "arrow", "from": { "x": 350, "y": 155 }, "to": { "x": 410, "y": 155 }, "stroke": "#d6d3d1", "strokeWidth": 2 },

    { "type": "rect", "x": 410, "y": 30, "width": 310, "height": 250, "label": "", "fill": "#faf5ff", "stroke": "#a855f7", "rounded": 16 },
    { "type": "text", "x": 565, "y": 58, "content": "1837 — Máquina Analítica", "fontSize": 16, "color": "#6b21a8", "fontWeight": "bold" },
    { "type": "text", "x": 565, "y": 84, "content": "Charles Babbage", "fontSize": 12, "color": "#7e22ce", "fontStyle": "italic" },
    { "type": "text", "x": 565, "y": 120, "content": "Nunca completamente construída", "fontSize": 12, "color": "#57534e", "maxWidth": 260 },
    { "type": "text", "x": 565, "y": 148, "content": "Já tinha os conceitos de:", "fontSize": 12, "color": "#57534e", "maxWidth": 260 },
    { "type": "text", "x": 565, "y": 178, "content": "Mill = ULA (cálculo)", "fontSize": 11, "color": "#78716c", "maxWidth": 260 },
    { "type": "text", "x": 565, "y": 200, "content": "Store = Memória", "fontSize": 11, "color": "#78716c", "maxWidth": 260 },
    { "type": "text", "x": 565, "y": 222, "content": "Cartões perfurados = Entrada", "fontSize": 11, "color": "#78716c", "maxWidth": 260 }
  ]
}
```

> [!dica] **Ada Lovelace**, colaboradora de Babbage, escreveu o que é considerado o **primeiro algoritmo** da história — instruções para a Máquina Analítica calcular os números de Bernoulli. Ela é reconhecida como a primeira programadora do mundo.

---

## As quatro gerações dos computadores eletrônicos

A partir dos anos 1940, os computadores se tornaram eletrônicos. Podemos agrupar essa evolução em **quatro gerações**, cada uma definida pela tecnologia base.

### 1ª Geração — Válvulas termiônicas (1940–1956)

A válvula termiônica funciona como um **interruptor eletrônico** — liga (1) ou desliga (0). Mas tinha problemas sérios: era grande (~5 cm), gerava muito calor, queimava frequentemente e consumia muita energia.

O **ENIAC** (1946) é o exemplo mais famoso:

- 17.468 válvulas
- 30 toneladas
- Ocupava uma sala de 167 m²
- Consumia 150 kW (energia para ~50 casas)
- Fazia 5.000 somas por segundo
- Programado reconectando cabos físicos

> [!atencao] Trocar de programa no ENIAC levava **dias**. Era preciso reconfigurar a fiação manualmente.

### 2ª Geração — Transistores (1956–1964)

O transistor, inventado em 1947, substituiu a válvula. Mesmo princípio (chaveamento liga/desliga), mas muito menor, mais durável e com baixo consumo.

```diagram
{
  "title": "Válvula vs Transistor",
  "width": 660,
  "height": 240,
  "elements": [
    { "type": "rect", "x": 40, "y": 30, "width": 220, "height": 175, "label": "", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 14 },
    { "type": "text", "x": 150, "y": 58, "content": "Válvula", "fontSize": 16, "color": "#991b1b", "fontWeight": "bold" },
    { "type": "text", "x": 150, "y": 92, "content": "Tamanho: ~5 cm", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 150, "y": 118, "content": "Alto consumo", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 150, "y": 144, "content": "Queima fácil", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 150, "y": 170, "content": "Cara", "fontSize": 13, "color": "#57534e" },

    { "type": "arrow", "from": { "x": 275, "y": 118 }, "to": { "x": 385, "y": 118 }, "stroke": "#10b981", "strokeWidth": 2, "label": "evolui" },

    { "type": "rect", "x": 400, "y": 30, "width": 220, "height": 175, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 510, "y": 58, "content": "Transistor", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 510, "y": 92, "content": "Tamanho: ~1 cm", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 510, "y": 118, "content": "Baixo consumo", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 510, "y": 144, "content": "Muito durável", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 510, "y": 170, "content": "Barata", "fontSize": 13, "color": "#57534e" }
  ]
}
```

Computadores ficaram menores (de salas para armários) e mais confiáveis. Surgiram as primeiras linguagens de programação: **FORTRAN** e **COBOL**.

### 3ª Geração — Circuitos Integrados (1964–1971)

A grande sacada: colocar **muitos transistores em um único chip** de silício. É o nascimento do **CI** (Circuito Integrado).

- Milhares de transistores em um chip do tamanho de uma unha
- Computadores ficaram acessíveis para empresas
- Surgem os **sistemas operacionais**
- O IBM System/360 criou o conceito de **família compatível** — mesmo software rodava em modelos diferentes

### 4ª Geração — Microprocessadores (1971–hoje)

Em 1971, a Intel colocou uma **CPU inteira** em um único chip: o **Intel 4004**. Nascia o microprocessador.

| Ano  | Processador  | Transistores   |
| ---- | ------------ | -------------- |
| 1971 | Intel 4004   | 2.300          |
| 1993 | Pentium      | 3.100.000      |
| 2012 | Core i7-3770 | 1.400.000.000  |
| 2024 | Apple M4     | 28.000.000.000 |

É a geração em que estamos. Dela surgiram:

- O computador pessoal (IBM PC, Macintosh)
- Os notebooks
- Os smartphones
- A internet

---

## Linha do tempo visual

```diagram
{
  "title": "Linha do tempo da computação",
  "width": 850,
  "height": 350,
  "elements": [
    { "type": "line", "from": { "x": 50, "y": 140 }, "to": { "x": 800, "y": 140 }, "stroke": "#d6d3d1", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 80, "cy": 140, "rx": 8, "ry": 8, "fill": "#fbbf24", "stroke": "#f59e0b" },
    { "type": "text", "x": 80, "y": 114, "content": "1642", "fontSize": 12, "color": "#78716c", "fontWeight": "bold" },
    { "type": "text", "x": 80, "y": 172, "content": "Pascaline", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 80, "y": 192, "content": "(mecânica)", "fontSize": 10, "color": "#a8a29e", "fontStyle": "italic" },

    { "type": "ellipse", "cx": 210, "cy": 140, "rx": 8, "ry": 8, "fill": "#a78bfa", "stroke": "#8b5cf6" },
    { "type": "text", "x": 210, "y": 114, "content": "1837", "fontSize": 12, "color": "#78716c", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 172, "content": "Babbage", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 192, "content": "(projeto)", "fontSize": 10, "color": "#a8a29e", "fontStyle": "italic" },

    { "type": "ellipse", "cx": 360, "cy": 140, "rx": 8, "ry": 8, "fill": "#f87171", "stroke": "#ef4444" },
    { "type": "text", "x": 360, "y": 114, "content": "1946", "fontSize": 12, "color": "#78716c", "fontWeight": "bold" },
    { "type": "text", "x": 360, "y": 172, "content": "ENIAC", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 360, "y": 192, "content": "1a GER - Válvulas", "fontSize": 10, "color": "#ef4444" },

    { "type": "ellipse", "cx": 500, "cy": 140, "rx": 8, "ry": 8, "fill": "#34d399", "stroke": "#10b981" },
    { "type": "text", "x": 500, "y": 114, "content": "1956", "fontSize": 12, "color": "#78716c", "fontWeight": "bold" },
    { "type": "text", "x": 500, "y": 172, "content": "Transistor", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 500, "y": 192, "content": "2a GER - Armário", "fontSize": 10, "color": "#10b981" },

    { "type": "ellipse", "cx": 640, "cy": 140, "rx": 8, "ry": 8, "fill": "#60a5fa", "stroke": "#3b82f6" },
    { "type": "text", "x": 640, "y": 114, "content": "1964", "fontSize": 12, "color": "#78716c", "fontWeight": "bold" },
    { "type": "text", "x": 640, "y": 172, "content": "CI (chip)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 640, "y": 192, "content": "3a GER - Mesa", "fontSize": 10, "color": "#3b82f6" },

    { "type": "ellipse", "cx": 770, "cy": 140, "rx": 8, "ry": 8, "fill": "#c084fc", "stroke": "#a855f7" },
    { "type": "text", "x": 770, "y": 114, "content": "1971", "fontSize": 12, "color": "#78716c", "fontWeight": "bold" },
    { "type": "text", "x": 770, "y": 172, "content": "Intel 4004", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 770, "y": 192, "content": "4a GER - Bolso", "fontSize": 10, "color": "#a855f7" },

    { "type": "rect", "x": 175, "y": 240, "width": 500, "height": 50, "label": "Cada geração: menor, mais rápido, mais barato", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 12, "fontSize": 14, "fontWeight": "600" },
    { "type": "text", "x": 425, "y": 318, "content": "150 kW  -->  ~1 kW  -->  ~100 W  -->  ~5 W", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" }
  ]
}
```

> [!nota] **Perceba o padrão:** a cada geração, os computadores ficam menores, mais rápidos, mais baratos e mais eficientes. Essa tendência se mantém há 80 anos.

---

## Exercícios de Fixação

1. Complete a tabela com a tecnologia base de cada geração:

   | Geração | Período | Tecnologia base | Tamanho típico |
   | ------- | ------- | --------------- | -------------- |
   | 1ª      | 1940-56 | ?               | ?              |
   | 2ª      | 1956-64 | ?               | ?              |
   | 3ª      | 1964-71 | ?               | ?              |
   | 4ª      | 1971+   | ?               | ?              |

2. Por que o conceito de "família compatível" do IBM System/360 foi tão revolucionário? Relacione com a distinção entre arquitetura e organização.

3. Se a tendência de 80 anos continuar, como você imagina que será o computador daqui a 20 anos? Que tipo de "5ª geração" poderia surgir?
