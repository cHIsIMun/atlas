---
title: O Problema do ENIAC
description: "Por que o computador mais poderoso de 1946 tinha uma falha fundamental — e como isso motivou uma revolução na computação."
duration: 1 aula
---

# O Problema do ENIAC

Na introdução, você conheceu o ENIAC: 17 mil válvulas, 30 toneladas, 5 mil somas por segundo. Uma máquina impressionante para 1946. Mas também viu que ela tinha um problema sério: **trocar de programa levava dias**.

Neste módulo, vamos entender esse problema em profundidade. Não apenas _o que_ acontecia, mas _por que_ acontecia — e como isso criou as condições para uma das ideias mais importantes da história da computação.

---

## Além dos números: o que significava operar o ENIAC

Os dados técnicos você já conhece. Mas números não contam a história completa. Para entender o problema de verdade, precisamos imaginar o que era **trabalhar** com essa máquina no dia a dia.

Pense em 1946. A Segunda Guerra acabou há pouco. O Exército americano precisa calcular tabelas de artilharia — milhares de trajetórias para diferentes condições de vento, ângulo e carga. Cada tabela exige centenas de horas de cálculo manual.

O ENIAC foi construído para resolver isso. E ele cumpria a promessa: cálculos que levavam 20 horas na mão eram feitos em 30 segundos.

Mas havia um detalhe que ninguém tinha antecipado completamente.

---

## O ritual de programação

Quando uma nova tarefa chegava, a equipe não podia simplesmente "digitar" um programa. Não existia tela, teclado, ou linguagem de programação. O ENIAC era uma **máquina de propósito específico disfarçada de propósito geral**.

O processo era mais ou menos assim:

1. **Análise matemática** — A equipe traduzia o problema em operações elementares (somas, multiplicações, comparações).

2. **Planejamento do circuito** — Cada operação precisava ser mapeada para uma unidade física do ENIAC. Qual acumulador faz essa soma? Onde armazenar o resultado intermediário?

3. **Reconexão física** — Com a máquina desligada, a equipe reconectava cabos entre as unidades. Eram milhares de conexões possíveis.

4. **Configuração de chaves** — Centenas de chaves rotativas definiam constantes, modos de operação e rotas de dados.

5. **Testes e depuração** — Erros significavam voltar aos passos anteriores. Um cabo no lugar errado podia invalidar horas de trabalho.

```diagram
{
  "title": "O tempo real de uma tarefa no ENIAC",
  "width": 780,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 40,  "y": 50, "width": 280, "height": 90, "label": "Preparação", "sublabel": "dias a semanas", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 12, "fontSize": 16, "fontWeight": "bold" },
    { "type": "rect", "x": 360, "y": 50, "width": 160, "height": 90, "label": "Execução", "sublabel": "segundos", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12, "fontSize": 16, "fontWeight": "bold" },
    { "type": "rect", "x": 560, "y": 50, "width": 180, "height": 90, "label": "Resultado", "sublabel": "útil, mas...", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12, "fontSize": 16, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 325, "y": 95 }, "to": { "x": 355, "y": 95 }, "stroke": "#a8a29e", "strokeWidth": 2 },
    { "type": "arrow", "from": { "x": 525, "y": 95 }, "to": { "x": 555, "y": 95 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "text", "x": 390, "y": 175, "content": "A maior parte do tempo era gasta antes de a máquina sequer ligar.", "fontSize": 13, "color": "#78716c", "fontStyle": "italic" }
  ]
}
```

---

## As mulheres por trás da máquina

Esse trabalho era feito por uma equipe de seis mulheres: **Kay McNulty**, **Betty Jennings**, **Betty Snyder**, **Marlyn Meltzer**, **Fran Bilas** e **Ruth Lichterman**.

Elas eram chamadas de "computadoras" — na época, _computer_ era um cargo, não uma máquina. Seu trabalho exigia conhecimento profundo de matemática, lógica e da própria estrutura física do ENIAC.

> [!nota] **Reconhecimento tardio:** Por décadas, essas mulheres foram apagadas da história. Fotos oficiais as mostravam ao lado da máquina, mas legendas as identificavam apenas como "modelos" ou "operadoras". Só nos anos 1980 seu papel como **as primeiras programadoras** começou a ser reconhecido.

O que elas faziam não era apenas conectar cabos. Era **traduzir pensamento abstrato em configuração física**. Era programação — só que sem a abstração que temos hoje.

---

## A raiz do problema

Por que o ENIAC funcionava assim? Não era incompetência dos engenheiros. Era uma **decisão de projeto** que parecia razoável na época.

O ENIAC foi projetado como uma **calculadora automática**. A ideia era: você configura a máquina para um tipo de cálculo, executa várias vezes com dados diferentes, e depois reconfigura para outra tarefa.

O problema é que "reconfigurar" significava **mudar a estrutura da máquina**.

Pense na diferença:

| Aspecto                      | ENIAC                     | O que queremos       |
| ---------------------------- | ------------------------- | -------------------- |
| O programa fica onde?        | Na fiação física          | Na memória           |
| Trocar programa significa... | Reconectar hardware       | Carregar novos dados |
| Tempo de troca               | Dias                      | Milissegundos        |
| Quem pode programar?         | Especialistas em hardware | Qualquer programador |

O ENIAC tratava **dados** e **instruções** como coisas fundamentalmente diferentes. Dados ficavam na memória eletrônica. Instruções ficavam nos cabos e chaves.

Essa separação era o problema.

---

## Por que isso importava tanto?

Você pode pensar: "Tudo bem, levava dias para trocar de programa, mas pelo menos funcionava."

O problema é que isso limitava **para que** o computador podia ser usado.

O ENIAC era viável para tarefas onde o mesmo cálculo era repetido milhares de vezes — como tabelas balísticas. O custo de dias de preparação se justificava pelo volume de cálculos.

Mas e se você quisesse usar o computador para tarefas variadas? E se hoje fosse cálculo de trajetória, amanhã previsão do tempo, depois análise estatística?

Com o ENIAC, cada nova tarefa era quase como construir uma nova máquina.

> [!atencao] **A limitação real:** O ENIAC era rápido para _executar_. Mas era lento para _adaptar_. E adaptação é o que torna um computador uma ferramenta universal.

---

## O cenário em 1944-1945

Enquanto o ENIAC ainda estava sendo construído, alguns pesquisadores já percebiam essa limitação. A equipe de engenheiros — Eckert e Mauchly — já discutia como o sucessor poderia ser diferente.

Foi nesse contexto que **John von Neumann** entrou em cena.

Von Neumann era um matemático húngaro-americano com reputação de gênio. Trabalhava em Los Alamos no Projeto Manhattan e tinha interesse em máquinas de cálculo para simulações de física nuclear.

Em 1944, ele visitou o projeto do ENIAC. Ficou impressionado com a velocidade. Mas também viu claramente o problema: a rigidez da programação tornava a máquina **poderosa, porém inflexível**.

Von Neumann se juntou às discussões sobre o sucessor do ENIAC — o **EDVAC**. E em junho de 1945, antes mesmo do ENIAC ser inaugurado oficialmente, ele escreveu um documento que mudaria tudo.

---

## O que vem a seguir

Nesta aula, você entendeu **o problema** em profundidade:

- O ENIAC tratava dados e instruções de formas completamente diferentes
- Isso tornava a reprogramação um processo físico, lento e trabalhoso
- A máquina era poderosa para executar, mas rígida para adaptar

Na próxima aula, vamos ver a **solução** que Von Neumann propôs. Uma ideia que, olhando hoje, parece óbvia — mas que em 1945 foi revolucionária.

> [!dica] **Prepare-se:** A ideia central cabe em uma frase. Mas suas consequências definem como todo computador funciona até hoje — do seu celular ao supercomputador mais poderoso do mundo.

---

## Recapitulando

| Conceito                 | Descrição                                                           |
| ------------------------ | ------------------------------------------------------------------- |
| **ENIAC**                | Primeiro computador eletrônico de grande escala (1946)              |
| **Programação do ENIAC** | Reconexão física de cabos e chaves — levava dias ou semanas         |
| **Problema fundamental** | O programa era hardware, não podia ser trocado rapidamente          |
| **Dados vs. Instruções** | Dados ficavam na memória; instruções ficavam na fiação física       |
| **Consequência**         | Máquina veloz para calcular, mas lentíssima para mudar de tarefa    |
| **Quem percebeu**        | Von Neumann e outros pesquisadores visitando o projeto em 1944-1945 |

---

## Exercícios de Fixação

1. O ENIAC conseguia fazer 5.000 somas por segundo em 1946. Por que, mesmo assim, ele era considerado **impraticável** para muitas aplicações?

2. Explique com suas palavras a diferença entre onde ficavam os **dados** e onde ficava o **programa** no ENIAC.

3. Use a analogia da caixa de música e do piano para explicar por que a forma de programação do ENIAC era limitante.

4. Pesquise: quem foram as seis programadoras originais do ENIAC? Escolha uma delas e escreva um parágrafo sobre sua contribuição.

5. O que você acha que motivou Von Neumann a se interessar pelo problema do ENIAC? Que tipo de trabalho ele fazia em Los Alamos que poderia se beneficiar de computadores flexíveis?
