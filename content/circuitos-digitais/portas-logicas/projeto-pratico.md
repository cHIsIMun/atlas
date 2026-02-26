---
title: "Projeto Prático: Construindo um Somador"
description: "Mão na massa! Vamos projetar, simular e entender um somador binário de 4 bits do zero."
duration: 2 aulas
---

# Projeto Prático: Construindo um Somador

Hora de aplicar tudo que aprendemos! Neste projeto, vamos projetar um somador binário de 4 bits — o mesmo tipo de circuito que está dentro de todo processador.

---

## O Desafio

Construir um circuito que:

- Receba dois números de 4 bits: **A** (A₃A₂A₁A₀) e **B** (B₃B₂B₁B₀)
- Produza a **soma S** de 5 bits (S₄S₃S₂S₁S₀)
- O bit S₄ indica **overflow** (resultado > 15)

Por exemplo: 7 + 5 = 12 em decimal, ou 0111 + 0101 = 01100 em binário.

```diagram
{
  "title": "Visão geral do projeto",
  "width": 840,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 60, "y": 40, "width": 150, "height": 120, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 12 },
    { "type": "text", "x": 135, "y": 80, "content": "4 bits", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 135, "y": 105, "content": "A₃ A₂ A₁ A₀", "fontSize": 12, "color": "#3b82f6" },
    { "type": "text", "x": 135, "y": 130, "content": "(número A)", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 60, "y": 180, "width": 150, "height": 0, "label": "", "fill": "none", "stroke": "none" },

    { "type": "rect", "x": 260, "y": 40, "width": 150, "height": 120, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 12 },
    { "type": "text", "x": 335, "y": 80, "content": "4 bits", "fontSize": 14, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 335, "y": 105, "content": "B₃ B₂ B₁ B₀", "fontSize": 12, "color": "#8b5cf6" },
    { "type": "text", "x": 335, "y": 130, "content": "(número B)", "fontSize": 11, "color": "#78716c" },

    { "type": "line", "from": { "x": 210, "y": 100 }, "to": { "x": 260, "y": 100 }, "stroke": "#78716c", "strokeWidth": 1, "dashed": true },

    { "type": "line", "from": { "x": 410, "y": 100 }, "to": { "x": 480, "y": 100 }, "stroke": "#57534e", "strokeWidth": 3 },
    { "type": "text", "x": 445, "y": 85, "content": "+", "fontSize": 20, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 480, "y": 30, "width": 180, "height": 140, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 3, "rounded": 12 },
    { "type": "text", "x": 570, "y": 65, "content": "SOMADOR", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 570, "y": 90, "content": "4 bits", "fontSize": 14, "color": "#10b981" },
    { "type": "text", "x": 570, "y": 125, "content": "4 Full-Adders", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 570, "y": 145, "content": "encadeados", "fontSize": 12, "color": "#78716c" },

    { "type": "line", "from": { "x": 660, "y": 100 }, "to": { "x": 730, "y": 100 }, "stroke": "#57534e", "strokeWidth": 3 },

    { "type": "rect", "x": 730, "y": 40, "width": 80, "height": 120, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2, "rounded": 12 },
    { "type": "text", "x": 770, "y": 80, "content": "5 bits", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 770, "y": 105, "content": "S₄...S₀", "fontSize": 12, "color": "#f59e0b" },
    { "type": "text", "x": 770, "y": 130, "content": "(soma)", "fontSize": 11, "color": "#78716c" }
  ]
}
```

---

## Passo 1: Revisar o Full-Adder

Cada bit do somador precisa de um Full-Adder. Vamos relembrar:

| Entrada | Descrição                       |
| ------- | ------------------------------- |
| A       | Bit do primeiro número          |
| B       | Bit do segundo número           |
| Cin     | Carry vindo da posição anterior |

| Saída | Descrição                    |
| ----- | ---------------------------- |
| S     | Bit da soma nesta posição    |
| Cout  | Carry para a próxima posição |

**Expressões:**

- $S = A \oplus B \oplus C_{in}$
- $C_{out} = (A \cdot B) + (C_{in} \cdot (A \oplus B))$

> [!dica] Lembre-se: um Full-Adder pode ser construído com dois Half-Adders e uma porta OR.

---

## Passo 2: Encadear os Full-Adders

Para o somador de 4 bits, conectamos 4 Full-Adders em cascata:

```diagram
{
  "title": "Arquitetura do Somador 4-bits",
  "width": 840,
  "height": 380,
  "elements": [
    { "type": "text", "x": 420, "y": 25, "content": "Somador Ripple Carry de 4 bits", "fontSize": 16, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 115, "y": 60, "content": "Bit 0 (LSB)", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 275, "y": 60, "content": "Bit 1", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 435, "y": 60, "content": "Bit 2", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 595, "y": 60, "content": "Bit 3 (MSB)", "fontSize": 11, "color": "#78716c" },

    { "type": "text", "x": 95, "y": 95, "content": "A₀", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 135, "y": 95, "content": "B₀", "fontSize": 12, "color": "#8b5cf6", "fontWeight": "bold" },
    { "type": "text", "x": 255, "y": 95, "content": "A₁", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 295, "y": 95, "content": "B₁", "fontSize": 12, "color": "#8b5cf6", "fontWeight": "bold" },
    { "type": "text", "x": 415, "y": 95, "content": "A₂", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 455, "y": 95, "content": "B₂", "fontSize": 12, "color": "#8b5cf6", "fontWeight": "bold" },
    { "type": "text", "x": 575, "y": 95, "content": "A₃", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 615, "y": 95, "content": "B₃", "fontSize": 12, "color": "#8b5cf6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 100, "y": 105 }, "to": { "x": 100, "y": 130 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 140, "y": 105 }, "to": { "x": 140, "y": 130 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 260, "y": 105 }, "to": { "x": 260, "y": 130 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 300, "y": 105 }, "to": { "x": 300, "y": 130 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 420, "y": 105 }, "to": { "x": 420, "y": 130 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 460, "y": 105 }, "to": { "x": 460, "y": 130 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 580, "y": 105 }, "to": { "x": 580, "y": 130 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 620, "y": 105 }, "to": { "x": 620, "y": 130 }, "stroke": "#8b5cf6", "strokeWidth": 2 },

    { "type": "rect", "x": 70, "y": 130, "width": 100, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 120, "y": 175, "content": "FA₀", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },

    { "type": "rect", "x": 230, "y": 130, "width": 100, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 280, "y": 175, "content": "FA₁", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },

    { "type": "rect", "x": 390, "y": 130, "width": 100, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 440, "y": 175, "content": "FA₂", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },

    { "type": "rect", "x": 550, "y": 130, "width": 100, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 600, "y": 175, "content": "FA₃", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },

    { "type": "text", "x": 35, "y": 175, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "line", "from": { "x": 50, "y": 170 }, "to": { "x": 70, "y": 170 }, "stroke": "#78716c", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 170, "y": 170 }, "to": { "x": 230, "y": 170 }, "stroke": "#f59e0b", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 330, "y": 170 }, "to": { "x": 390, "y": 170 }, "stroke": "#f59e0b", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 490, "y": 170 }, "to": { "x": 550, "y": 170 }, "stroke": "#f59e0b", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 650, "y": 170 }, "to": { "x": 730, "y": 170 }, "stroke": "#f59e0b", "strokeWidth": 3 },

    { "type": "text", "x": 195, "y": 160, "content": "C₀", "fontSize": 10, "color": "#f59e0b" },
    { "type": "text", "x": 355, "y": 160, "content": "C₁", "fontSize": 10, "color": "#f59e0b" },
    { "type": "text", "x": 515, "y": 160, "content": "C₂", "fontSize": 10, "color": "#f59e0b" },
    { "type": "text", "x": 685, "y": 160, "content": "C₃", "fontSize": 10, "color": "#f59e0b" },

    { "type": "line", "from": { "x": 120, "y": 210 }, "to": { "x": 120, "y": 270 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 280, "y": 210 }, "to": { "x": 280, "y": 270 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 440, "y": 210 }, "to": { "x": 440, "y": 270 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 600, "y": 210 }, "to": { "x": 600, "y": 270 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 730, "y": 170 }, "to": { "x": 730, "y": 270 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 120, "cy": 290, "rx": 20, "ry": 20, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 120, "y": 295, "content": "S₀", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "ellipse", "cx": 280, "cy": 290, "rx": 20, "ry": 20, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 280, "y": 295, "content": "S₁", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "ellipse", "cx": 440, "cy": 290, "rx": 20, "ry": 20, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 440, "y": 295, "content": "S₂", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "ellipse", "cx": 600, "cy": 290, "rx": 20, "ry": 20, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 600, "y": 295, "content": "S₃", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "ellipse", "cx": 730, "cy": 290, "rx": 20, "ry": 20, "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "text", "x": 730, "y": 295, "content": "S₄", "fontSize": 13, "color": "#92400e", "fontWeight": "bold" },

    { "type": "text", "x": 730, "y": 340, "content": "Overflow", "fontSize": 11, "color": "#f59e0b", "fontStyle": "italic" },

    { "type": "rect", "x": 100, "y": 350, "width": 540, "height": 25, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 6 },
    { "type": "text", "x": 370, "y": 368, "content": "Resultado: S₄ S₃ S₂ S₁ S₀ (5 bits)", "fontSize": 12, "color": "#57534e" }
  ]
}
```

---

## Passo 3: Exemplo de Cálculo

Vamos calcular **7 + 5** (binário: 0111 + 0101):

| Posição | A   | B   | Cin | S   | Cout | Cálculo     |
| ------- | --- | --- | --- | --- | ---- | ----------- |
| Bit 0   | 1   | 1   | 0   | 0   | 1    | 1+1+0 = 10₂ |
| Bit 1   | 1   | 0   | 1   | 0   | 1    | 1+0+1 = 10₂ |
| Bit 2   | 1   | 1   | 1   | 1   | 1    | 1+1+1 = 11₂ |
| Bit 3   | 0   | 0   | 1   | 1   | 0    | 0+0+1 = 01₂ |

**Resultado:** S = 01100₂ = 12₁₀ ✓

> [!nota] Observe como o carry "ondula" da direita para a esquerda. Cada Full-Adder precisa esperar o carry do anterior para calcular seu resultado corretamente.

---

## Passo 4: Simulando no Logisim

O **Logisim** é um simulador de circuitos educacional que permite construir e testar circuitos digitais visualmente.

### Estratégia de Construção

A chave para projetos complexos é a **modularização**:

1. **Crie o Half-Adder** como um subcircuito (bloco reutilizável)
2. **Use dois Half-Adders** para montar o Full-Adder
3. **Conecte quatro Full-Adders** em cascata para o somador de 4 bits

Essa abordagem hierárquica reflete como engenheiros realmente projetam — componentes simples viram blocos para sistemas maiores.

### O que Observar na Simulação

```diagram
{
  "title": "Pontos importantes na simulação",
  "width": 840,
  "height": 180,
  "elements": [
    { "type": "rect", "x": 40, "y": 30, "width": 240, "height": 120, "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12 },
    { "type": "text", "x": 160, "y": 60, "content": "Propagação", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 160, "y": 90, "content": "O sinal 'ondula' pelos FAs", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 160, "y": 110, "content": "Cada estágio espera o anterior", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 160, "y": 130, "content": "Isso é o 'ripple carry'", "fontSize": 11, "color": "#3b82f6" },

    { "type": "rect", "x": 300, "y": 30, "width": 240, "height": 120, "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 420, "y": 60, "content": "Casos de Teste", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 90, "content": "0+0, 1+1, 15+1 (overflow)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 110, "content": "7+8=15, 8+8=16", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 130, "content": "Teste os extremos!", "fontSize": 11, "color": "#10b981" },

    { "type": "rect", "x": 560, "y": 30, "width": 240, "height": 120, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12 },
    { "type": "text", "x": 680, "y": 60, "content": "Verificação", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 680, "y": 90, "content": "5º bit = overflow (>15)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 680, "y": 110, "content": "Soma máxima: 15+15=30", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 680, "y": 130, "content": "Binário: 11110", "fontSize": 11, "color": "#f59e0b" }
  ]
}
```

> [!dica] Use a função de **simulação passo a passo** do Logisim para ver exatamente como o sinal se propaga através do circuito.
}
```

---

## Passo 5: Testando Exaustivamente

Seu somador deve funcionar para **todas** as combinações. Aqui estão casos importantes:

| Teste               | A (dec) | B (dec) | A (bin) | B (bin) | S esperado |
| ------------------- | ------- | ------- | ------- | ------- | ---------- |
| Zero                | 0       | 0       | 0000    | 0000    | 00000      |
| Um                  | 0       | 1       | 0000    | 0001    | 00001      |
| Simétrico           | 5       | 5       | 0101    | 0101    | 01010      |
| Máximo sem overflow | 8       | 7       | 1000    | 0111    | 01111      |
| Com overflow        | 15      | 1       | 1111    | 0001    | 10000      |
| Máximo              | 15      | 15      | 1111    | 1111    | 11110      |

---

## Desafios Extras

### Desafio 1: Subtração

Como você adaptaria o somador para fazer **subtração**?

**Dica:** A - B = A + (-B). Em complemento de 2, -B = NOT(B) + 1. Você pode usar o Cin do primeiro FA para adicionar esse +1!

### Desafio 2: Detector de Overflow (Números com Sinal)

Quando usamos números com sinal (complemento de 2), overflow ocorre em situações diferentes. Crie um circuito que detecte overflow em somas com sinal.

**Dica:** Overflow ocorre quando C₂ ≠ C₃ (carry entrando no bit de sinal ≠ carry saindo).

### Desafio 3: Somador de 8 bits

Expanda seu projeto para 8 bits. Quantos Full-Adders você precisa?

---

## Reflexão Final

Você acabou de projetar o mesmo tipo de circuito que está dentro de:

- Calculadoras
- CPUs de computadores
- Microcontroladores
- GPUs
- Processadores de smartphones

A diferença? Nos chips modernos, existem milhões (ou bilhões!) desses blocos, operando em paralelo, com otimizações como **Carry-Lookahead** que eliminam a espera do ripple.

```diagram
{
  "title": "Do projeto à realidade",
  "width": 840,
  "height": 160,
  "elements": [
    { "type": "rect", "x": 50, "y": 30, "width": 150, "height": 100, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 10 },
    { "type": "text", "x": 125, "y": 70, "content": "Seu projeto", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 125, "y": 95, "content": "4 bits, ~20 portas", "fontSize": 11, "color": "#57534e" },

    { "type": "line", "from": { "x": 200, "y": 80 }, "to": { "x": 270, "y": 80 }, "stroke": "#78716c", "strokeWidth": 2 },
    { "type": "text", "x": 235, "y": 70, "content": "→", "fontSize": 20, "color": "#78716c" },

    { "type": "rect", "x": 270, "y": 30, "width": 150, "height": 100, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 10 },
    { "type": "text", "x": 345, "y": 70, "content": "CPU simples", "fontSize": 13, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 345, "y": 95, "content": "32 bits, ~5000 portas", "fontSize": 11, "color": "#57534e" },

    { "type": "line", "from": { "x": 420, "y": 80 }, "to": { "x": 490, "y": 80 }, "stroke": "#78716c", "strokeWidth": 2 },
    { "type": "text", "x": 455, "y": 70, "content": "→", "fontSize": 20, "color": "#78716c" },

    { "type": "rect", "x": 490, "y": 30, "width": 150, "height": 100, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 565, "y": 70, "content": "CPU moderna", "fontSize": 13, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 565, "y": 95, "content": "64 bits, otimizado", "fontSize": 11, "color": "#57534e" },

    { "type": "line", "from": { "x": 640, "y": 80 }, "to": { "x": 710, "y": 80 }, "stroke": "#78716c", "strokeWidth": 2 },
    { "type": "text", "x": 675, "y": 70, "content": "→", "fontSize": 20, "color": "#78716c" },

    { "type": "rect", "x": 710, "y": 30, "width": 100, "height": 100, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 10 },
    { "type": "text", "x": 760, "y": 70, "content": "Chip real", "fontSize": 13, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 760, "y": 95, "content": "Bilhões!", "fontSize": 11, "color": "#57534e" }
  ]
}
```

Você deu o primeiro passo no mundo do projeto de hardware digital. Parabéns! 🎉

---

## Checklist do Projeto

- [ ] Entendi como funciona um Full-Adder
- [ ] Desenhei/simulei o somador de 4 bits
- [ ] Testei pelo menos 5 casos diferentes
- [ ] Verifiquei o comportamento do overflow
- [ ] (Bônus) Implementei a subtração
- [ ] (Bônus) Expandi para 8 bits
