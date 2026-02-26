---
title: Introdução à Engenharia Inteligente de Dados
description: "O que são dados, por que eles importam e o que faz um engenheiro de dados — explicado do zero."
duration: 1 aula
---

# Introdução à Engenharia Inteligente de Dados

Você já parou para pensar no que acontece **por trás** de coisas simples do seu dia a dia?

- Quando o Spotify recomenda uma música, **como ele sabe** do que você gosta?
- Quando o iFood mostra "Pedidos frequentes", **de onde vem** essa informação?
- Quando uma loja manda um e-mail dizendo "sentimos sua falta", **como ela sabe** que faz tempo que você não compra?

A resposta para tudo isso é a mesma: **dados**. E alguém precisa **organizar** esses dados para que tudo funcione. É exatamente isso que vamos aprender nesta disciplina.

---

## Começando do começo: o que são dados?

Dados são **registros de coisas que acontecem**. Simples assim.

Toda vez que algo acontece no mundo — uma venda, um clique, uma leitura de sensor, uma mensagem enviada — é possível **registrar** esse acontecimento. Esse registro é um dado.

| Acontecimento                    | Dado gerado                                             |
| -------------------------------- | ------------------------------------------------------- |
| Você compra um café              | Data, hora, valor, forma de pagamento, loja             |
| Você assiste um vídeo no YouTube | Qual vídeo, quanto tempo assistiu, se pausou, se curtiu |
| Um sensor mede a temperatura     | Valor da temperatura, hora da medição, local            |
| Você pede um Uber                | Origem, destino, horário, preço, motorista, nota        |

Perceba: cada acontecimento gera **vários dados de uma vez**. Agora imagine isso acontecendo **milhões de vezes por dia**, em **milhares de sistemas diferentes**. É um volume gigantesco.

> [!dica] **Analogia:** Pense em dados como **ingredientes de cozinha**. Um tomate sozinho não é uma refeição. Farinha sozinha não é um bolo. Mas quando alguém organiza os ingredientes certos, na ordem certa, com a técnica certa, o resultado é um prato completo. Dados funcionam igual: sozinhos não dizem nada — precisam ser **organizados e combinados** para gerar algo útil.

---

## Dados brutos não servem para nada

Aqui está o ponto mais importante desta aula: **ter dados não significa ter informação**.

Imagine que você é dono de uma rede de lojas. Seus sistemas registram todas as vendas — milhões de linhas em planilhas e bancos de dados. Você quer responder uma pergunta simples:

> _"Qual produto vendeu mais no Natal do ano passado, em cada filial?"_

Parece fácil, mas os dados estão:

- Espalhados em **sistemas diferentes** (uma planilha aqui, um banco de dados ali)
- Em **formatos diferentes** (um sistema usa "São Paulo", outro usa "SP", outro usa "01")
- **Sem conexão** entre si (o sistema de vendas não conversa com o sistema de estoque)
- Com **erros** (datas em branco, valores negativos, registros duplicados)

Antes de responder qualquer pergunta, alguém precisa **coletar, limpar, organizar e juntar** esses dados. É aí que entra a Engenharia de Dados.

```diagram
{
  "title": "Do dado bruto à informação útil",
  "width": 820,
  "height": 240,
  "elements": [
    { "type": "rect", "x": 30, "y": 40, "width": 170, "height": 100, "label": "Dados brutos", "sublabel": "Espalhados e bagunçados", "fill": "#fef2f2", "stroke": "#ef4444", "rounded": 12, "fontSize": 13, "fontWeight": "bold" },
    { "type": "text", "x": 115, "y": 170, "content": "Vendas em 3 sistemas,", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 115, "y": 190, "content": "formatos diferentes, erros...", "fontSize": 11, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 210, "y": 90 }, "to": { "x": 270, "y": 90 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 270, "y": 30, "width": 280, "height": 120, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 14 },
    { "type": "text", "x": 410, "y": 58, "content": "Alguém organiza tudo", "fontSize": 14, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 410, "y": 88, "content": "Coleta, limpa, padroniza,", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 410, "y": 108, "content": "junta e disponibiliza.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 410, "y": 135, "content": "Esse alguém é o engenheiro de dados.", "fontSize": 11, "color": "#8b5cf6", "fontStyle": "italic" },

    { "type": "arrow", "from": { "x": 560, "y": 90 }, "to": { "x": 620, "y": 90 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 620, "y": 40, "width": 170, "height": 100, "label": "Informação útil", "sublabel": "Pronta para decisão", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12, "fontSize": 13, "fontWeight": "bold" },
    { "type": "text", "x": 705, "y": 170, "content": "\"O produto X vendeu 40%", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 705, "y": 190, "content": "mais na filial Centro.\"", "fontSize": 11, "color": "#78716c" }
  ]
}
```

---

## O que é Engenharia de Dados, afinal?

Agora que entendemos o problema, fica fácil definir:

**Engenharia de Dados** é a área responsável por construir e manter os **caminhos** que levam os dados desde onde eles nascem (sistemas, aplicativos, sensores) até onde eles precisam estar para serem úteis (relatórios, gráficos, previsões).

Pense em três etapas simples:

1. **Coletar** — Pegar os dados de onde eles estão (bancos de dados, planilhas, sistemas)
2. **Organizar** — Limpar erros, padronizar formatos, juntar informações de fontes diferentes
3. **Disponibilizar** — Colocar os dados organizados em um lugar onde analistas e gestores possam consultar

> [!dica] **Analogia:** Imagine uma cidade sem encanamento. A água existe (nos rios, na chuva), mas não chega na sua casa. O engenheiro que projeta a rede de água — captação, tratamento, tubulação, distribuição — é equivalente ao **engenheiro de dados**. Ele não bebe a água (quem bebe é você). Ele garante que ela **chegue limpa na sua torneira**.

---

## Quem faz o quê no mundo dos dados?

Existe mais de uma profissão que trabalha com dados. É fácil confundir. Veja a diferença com uma analogia simples:

```diagram
{
  "title": "Quem faz o quê?",
  "width": 820,
  "height": 300,
  "elements": [
    { "type": "rect", "x": 25, "y": 20, "width": 370, "height": 120, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 14 },
    { "type": "text", "x": 210, "y": 50, "content": "Engenheiro de Dados", "fontSize": 15, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 78, "content": "Constrói a ESTRADA.", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 100, "content": "Coleta, limpa, organiza e entrega os dados.", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 210, "y": 125, "content": "\"Como levar esses dados de A até B?\"", "fontSize": 11, "color": "#8b5cf6", "fontStyle": "italic" },

    { "type": "rect", "x": 425, "y": 20, "width": 370, "height": 120, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 610, "y": 50, "content": "Analista de Dados", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 610, "y": 78, "content": "Dirige o CARRO na estrada.", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 100, "content": "Consulta, analisa e cria relatórios.", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 610, "y": 125, "content": "\"O que esses dados nos dizem?\"", "fontSize": 11, "color": "#3b82f6", "fontStyle": "italic" },

    { "type": "rect", "x": 25, "y": 170, "width": 370, "height": 120, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 210, "y": 200, "content": "Cientista de Dados", "fontSize": 15, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 228, "content": "Constrói um GPS preditivo.", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 250, "content": "Cria modelos que aprendem e preveem.", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 210, "y": 275, "content": "\"O que vai acontecer no futuro?\"", "fontSize": 11, "color": "#10b981", "fontStyle": "italic" },

    { "type": "rect", "x": 425, "y": 170, "width": 370, "height": 120, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 610, "y": 200, "content": "Analista de BI", "fontSize": 15, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 610, "y": 228, "content": "Constrói o PAINEL do carro.", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 250, "content": "Cria dashboards e indicadores visuais.", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 610, "y": 275, "content": "\"Como mostrar isso de forma clara?\"", "fontSize": 11, "color": "#f59e0b", "fontStyle": "italic" }
  ]
}
```

O ponto é: **sem o engenheiro de dados, nenhuma das outras funções consegue trabalhar**. Se os dados não chegam organizados, o analista não tem o que analisar, o cientista não tem o que modelar e o BI não tem o que exibir.

---

## Um exemplo do mundo real

Vamos ver como isso funciona na prática com um exemplo simples.

Imagine uma rede de farmácias com 50 lojas. Cada loja tem seu próprio sistema de vendas. A diretoria quer um relatório mensal respondendo:

- Qual loja vendeu mais?
- Qual medicamento tem mais saída?
- As vendas estão crescendo ou caindo comparado ao mês anterior?

**Sem engenharia de dados**, alguém teria que:

1. Entrar no sistema de cada uma das 50 lojas
2. Exportar os dados manualmente (provavelmente em Excel)
3. Copiar e colar tudo em uma planilha gigante
4. Resolver diferenças (uma loja registra "Dipirona 500mg", outra registra "DIPIRONA 500 MG", outra "dipirona500mg")
5. Fazer as contas na mão
6. Repetir tudo no mês seguinte

**Com engenharia de dados**, um sistema automatizado faz tudo isso sozinho, todo dia, sem erro. Os dados das 50 lojas são coletados, padronizados e armazenados em um lugar central — e qualquer pessoa autorizada pode consultar.

> [!nota] Esse "lugar central" onde os dados ficam organizados para análise tem um nome: **Data Warehouse**. É exatamente o que vamos estudar na próxima aula.

---

## O que veremos nesta disciplina

Ao longo do semestre, vamos construir esse conhecimento tijolo por tijolo:

| Ordem | Tema                      | Pergunta que vamos responder                                           |
| ----- | ------------------------- | ---------------------------------------------------------------------- |
| 1     | O que é um Data Warehouse | Onde guardar dados organizados para análise?                           |
| 2     | Modelagem Dimensional     | Como organizar os dados de um jeito que facilite perguntas de negócio? |
| 3     | Processos de carga (ETL)  | Como levar os dados da origem até o destino de forma automática?       |
| 4     | Qualidade de dados        | Como garantir que os dados estão corretos e confiáveis?                |
| 5     | Arquiteturas modernas     | Quais são as soluções mais recentes do mercado?                        |

Cada tema vai ser construído sobre o anterior. Não vamos pular etapas.

---

## Recapitulando

| Conceito                  | Descrição                                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| **Dado**                  | Registro de algo que aconteceu (uma venda, um clique, uma medição)                                 |
| **Informação**            | Dados organizados que respondem a uma pergunta                                                     |
| **Engenharia de Dados**   | Área que coleta, organiza e disponibiliza dados para análise                                       |
| **Engenheiro de Dados**   | Quem constrói os caminhos que levam os dados de onde nascem até onde precisam estar                |
| **Diferença das funções** | Engenheiro constrói a estrada; Analista dirige o carro; Cientista prevê o caminho; BI faz o painel |

---

## Exercícios de Fixação

1. Com suas próprias palavras, explique: o que é um **dado**? E o que é uma **informação**? Dê um exemplo de cada.

2. Cite três situações do seu dia a dia em que dados são gerados sem que você perceba.

3. Uma rede de restaurantes tem 20 filiais, cada uma com seu próprio sistema de pedidos. A diretoria quer saber: _"Qual prato é mais pedido em cada região?"_. Descreva, passo a passo, os problemas que alguém teria para responder essa pergunta **sem** um sistema organizado de dados.

4. Qual a diferença entre o trabalho de um **engenheiro de dados** e o de um **analista de dados**? Use a analogia da estrada e do carro.

5. Por que dizemos que dados brutos, sozinhos, **não têm valor**? O que precisa acontecer para que eles se tornem úteis?
