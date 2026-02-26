---
title: Introdução à Data Warehouse
description: "O que é um Data Warehouse, por que ele existe e como ele resolve o problema de analisar grandes volumes de dados."
duration: 1 aula
---

# Introdução à Data Warehouse

Na aula anterior, vimos que dados brutos espalhados em vários sistemas não servem para responder perguntas de negócio. Alguém precisa coletar, limpar e organizar tudo em um lugar central.

Nesta aula, vamos entender **o que é esse lugar central**, **por que ele precisa existir** e **como ele funciona**. Vamos construir a ideia passo a passo.

---

## O ponto de partida: o banco de dados do dia a dia

Você provavelmente já ouviu falar de **banco de dados**. É onde aplicativos guardam suas informações: cadastro de clientes, produtos, pedidos, pagamentos.

Quando você faz um pedido no iFood, o app registra no banco de dados:

- Qual restaurante
- Quais itens
- Endereço de entrega
- Horário
- Valor
- Forma de pagamento

Esse tipo de banco é projetado para **operações rápidas e pontuais**: registrar um pedido, atualizar um estoque, cadastrar um usuário. Cada operação mexe com **poucos registros de cada vez**.

Até aqui, tudo funciona bem. O problema começa quando alguém quer fazer **perguntas sobre o negócio como um todo**.

---

## O problema: perguntas que o banco do dia a dia não consegue responder bem

Imagine que o gerente do iFood pergunta:

> _"Qual tipo de comida teve mais pedidos nos fins de semana, nos últimos 12 meses, por cidade?"_

Para responder isso, o banco de dados teria que:

1. Ler **milhões** de pedidos de um ano inteiro
2. Cruzar com dados de restaurantes (tipo de comida)
3. Cruzar com dados de endereços (cidade)
4. Filtrar apenas sábados e domingos
5. Agrupar e somar tudo

Isso é **completamente diferente** de registrar um pedido. E causa dois problemas sérios:

```diagram
{
  "title": "Por que não usar o banco do dia a dia para análise?",
  "width": 820,
  "height": 240,
  "elements": [
    { "type": "rect", "x": 30, "y": 30, "width": 360, "height": 175, "label": "", "fill": "#fef2f2", "stroke": "#ef4444", "rounded": 14 },
    { "type": "text", "x": 210, "y": 60, "content": "Problema 1: Performance", "fontSize": 15, "color": "#991b1b", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 92, "content": "A consulta pesada disputa recursos com", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 112, "content": "as operações normais. O banco fica lento", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 132, "content": "para TODOS os usuários.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 170, "content": "O app pode travar por causa de um relatório.", "fontSize": 11, "color": "#ef4444", "fontStyle": "italic" },

    { "type": "rect", "x": 430, "y": 30, "width": 360, "height": 175, "label": "", "fill": "#fef2f2", "stroke": "#ef4444", "rounded": 14 },
    { "type": "text", "x": 610, "y": 60, "content": "Problema 2: Estrutura", "fontSize": 15, "color": "#991b1b", "fontWeight": "bold" },
    { "type": "text", "x": 610, "y": 92, "content": "O banco é organizado para GRAVAR rápido,", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 112, "content": "não para LER grandes volumes. As tabelas", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 132, "content": "são divididas (normalizadas) de um jeito", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 152, "content": "que dificulta consultas analíticas.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 185, "content": "Precisa de muitos JOINs para juntar tudo.", "fontSize": 11, "color": "#ef4444", "fontStyle": "italic" }
  ]
}
```

> [!atencao] Isso já aconteceu (e ainda acontece) em muitas empresas: alguém roda um relatório pesado no banco de produção e o sistema inteiro fica lento ou até sai do ar. Clientes não conseguem fazer pedidos porque alguém quis um relatório.

---

## A solução: separar os dois mundos

A ideia é simples: **não misture o banco que serve o app com o banco que serve análises**. São dois trabalhos completamente diferentes, então devem ser feitos por bancos diferentes.

|                      | Banco do dia a dia                           | Banco para análise                                                   |
| -------------------- | -------------------------------------------- | -------------------------------------------------------------------- |
| **Serve quem?**      | O aplicativo e os usuários finais            | Analistas, gestores, relatórios                                      |
| **Tipo de operação** | Cadastrar, atualizar, deletar registros      | Consultar, agrupar, comparar grandes volumes                         |
| **Otimizado para**   | Escrita rápida de poucos registros           | Leitura rápida de muitos registros                                   |
| **Dados**            | Apenas o estado atual ("estoque agora é 42") | Histórico completo ("estoque era 50 em janeiro, 38 em fevereiro...") |

Esse banco separado, projetado especificamente para análise, tem um nome: **Data Warehouse** (em português, "armazém de dados").

> [!dica] **Analogia:** Pense em um supermercado. As **prateleiras da loja** (banco do dia a dia) são organizadas para o cliente pegar os produtos rápido. O **depósito nos fundos** (Data Warehouse) é organizado de forma diferente — por categorias, volumes, datas de validade — para o gerente saber o que tem, o que falta e o que está encalhado. São dois ambientes com propósitos diferentes.

---

## O que é um Data Warehouse?

Agora podemos definir com clareza:

Um **Data Warehouse** é um banco de dados projetado para armazenar dados de forma organizada, com **histórico**, para que gestores e analistas possam consultar e tomar decisões.

O conceito foi formalizado nos anos 1990 por **Bill Inmon**, considerado o "pai do Data Warehouse". Ele definiu quatro características que todo DW precisa ter:

```diagram
{
  "title": "As 4 características de um Data Warehouse",
  "width": 820,
  "height": 360,
  "elements": [
    { "type": "rect", "x": 25, "y": 20, "width": 370, "height": 145, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 210, "y": 50, "content": "1. Orientado a assuntos", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 82, "content": "Os dados são organizados por TEMAS que", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 102, "content": "importam para o negócio: vendas, clientes,", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 122, "content": "produtos — e não por sistema de origem.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 148, "content": "\"Quero ver tudo sobre vendas, não importa de qual sistema veio.\"", "fontSize": 10, "color": "#3b82f6", "fontStyle": "italic" },

    { "type": "rect", "x": 425, "y": 20, "width": 370, "height": 145, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 610, "y": 50, "content": "2. Integrado", "fontSize": 15, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 610, "y": 82, "content": "Dados de fontes diferentes são UNIFICADOS.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 102, "content": "Se um sistema usa \"SP\" e outro \"São Paulo\",", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 122, "content": "no DW tudo vira um padrão só.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 148, "content": "\"Uma única versão da verdade.\"", "fontSize": 10, "color": "#10b981", "fontStyle": "italic" },

    { "type": "rect", "x": 25, "y": 195, "width": 370, "height": 145, "label": "", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 14 },
    { "type": "text", "x": 210, "y": 225, "content": "3. Não volátil", "fontSize": 15, "color": "#9d174d", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 257, "content": "Dados, uma vez armazenados, NÃO SÃO", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 277, "content": "alterados nem apagados. Só entram dados", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 297, "content": "novos — os antigos permanecem intactos.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 323, "content": "\"O passado nunca muda.\"", "fontSize": 10, "color": "#ec4899", "fontStyle": "italic" },

    { "type": "rect", "x": 425, "y": 195, "width": 370, "height": 145, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 610, "y": 225, "content": "4. Variante no tempo", "fontSize": 15, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 610, "y": 257, "content": "Cada dado tem uma MARCA DE TEMPO.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 277, "content": "É possível saber como as coisas estavam", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 297, "content": "em qualquer momento do passado.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 323, "content": "\"Qual era o preço deste produto em março?\"", "fontSize": 10, "color": "#f59e0b", "fontStyle": "italic" }
  ]
}
```

Vamos entender cada uma com mais detalhe.

---

### Orientado a assuntos

No banco do dia a dia, os dados são organizados por **sistema**: "tabela do sistema de vendas", "tabela do sistema de RH", "tabela do sistema financeiro".

No Data Warehouse, os dados são reorganizados por **assunto de negócio**: "tudo sobre vendas" (não importa de qual sistema veio), "tudo sobre clientes", "tudo sobre produtos".

> [!dica] É como a diferença entre organizar livros **por editora** (sistema de origem) e organizar **por assunto** (ficção, história, ciência). Para quem quer estudar, a organização por assunto é muito mais útil.

---

### Integrado

Empresas usam vários sistemas diferentes, e cada um pode representar a mesma coisa de forma diferente:

| Sistema A          | Sistema B              | Data Warehouse (padronizado)   |
| ------------------ | ---------------------- | ------------------------------ |
| Sexo: "M" / "F"    | Gênero: "Masc" / "Fem" | Sexo: "Masculino" / "Feminino" |
| Estado: "SP"       | Estado: "São Paulo"    | Estado: "SP"                   |
| Data: "15/02/2026" | Data: "2026-02-15"     | Data: "2026-02-15"             |
| Moeda: R$ 10,50    | Moeda: 10.50 BRL       | Moeda: 10.50 (BRL)             |

O Data Warehouse **padroniza tudo** antes de armazenar. Assim, quando alguém consulta, não precisa se preocupar com diferenças entre sistemas.

---

### Não volátil

No banco do dia a dia, dados **mudam o tempo todo**: o estoque é atualizado, o endereço do cliente é corrigido, um pedido é cancelado. O dado antigo é substituído pelo novo.

No Data Warehouse, **nada é alterado nem apagado**. Se o cliente mudou de endereço, o DW guarda tanto o endereço antigo quanto o novo, cada um com sua data. Isso permite análises históricas.

---

### Variante no tempo

No banco do dia a dia, normalmente você vê apenas o **estado atual**: "o estoque do produto X é 42 unidades". Não sabe se ontem era 50, ou se na semana passada era 100.

No Data Warehouse, cada registro tem uma **referência de tempo**: "em 01/01 o estoque era 100, em 15/01 era 75, em 01/02 era 42". Isso permite responder perguntas como:

- _"As vendas estão crescendo ou caindo?"_
- _"Qual foi o melhor mês do ano?"_
- _"O preço subiu quanto desde janeiro?"_

---

## Como os dados chegam no Data Warehouse?

Os dados não aparecem magicamente no DW. Eles precisam ser **extraídos** dos sistemas de origem, **transformados** (limpos e padronizados) e **carregados** no Data Warehouse.

Esse processo é chamado de **ETL**: **E**xtract (Extrair), **T**ransform (Transformar), **L**oad (Carregar).

```diagram
{
  "title": "O processo ETL — de forma simples",
  "width": 820,
  "height": 250,
  "elements": [
    { "type": "rect", "x": 30, "y": 50, "width": 155, "height": 140, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12 },
    { "type": "text", "x": 107, "y": 78, "content": "EXTRAIR", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 107, "y": 105, "content": "Pegar os dados dos", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 107, "y": 125, "content": "sistemas de origem", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 107, "y": 155, "content": "(bancos, planilhas,", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 107, "y": 173, "content": "arquivos, APIs...)", "fontSize": 11, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 195, "y": 120 }, "to": { "x": 260, "y": 120 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 260, "y": 50, "width": 270, "height": 140, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 12 },
    { "type": "text", "x": 395, "y": 78, "content": "TRANSFORMAR", "fontSize": 14, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 395, "y": 105, "content": "Limpar erros, padronizar formatos,", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 395, "y": 125, "content": "corrigir inconsistências, unificar", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 395, "y": 145, "content": "dados de fontes diferentes.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 395, "y": 175, "content": "\"SP\" e \"São Paulo\" viram \"SP\".", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" },

    { "type": "arrow", "from": { "x": 540, "y": 120 }, "to": { "x": 600, "y": 120 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 600, "y": 50, "width": 185, "height": 140, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 692, "y": 78, "content": "CARREGAR", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 692, "y": 105, "content": "Colocar os dados já", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 692, "y": 125, "content": "organizados dentro do", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 692, "y": 145, "content": "Data Warehouse.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 692, "y": 175, "content": "Pronto para consulta!", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" }
  ]
}
```

> [!nota] O processo de ETL geralmente roda de forma **automática e periódica** — por exemplo, toda noite às 2h da manhã, quando poucos usuários estão usando os sistemas. Assim, todo dia pela manhã o Data Warehouse está atualizado com os dados do dia anterior.

---

## Para que serve um Data Warehouse na prática?

Com um DW funcionando, gestores e analistas conseguem responder perguntas que antes eram impossíveis ou demoradas demais:

| Setor          | Pergunta que o DW ajuda a responder                                               |
| -------------- | --------------------------------------------------------------------------------- |
| **Varejo**     | "Qual produto vendeu mais no Natal, por filial?"                                  |
| **Saúde**      | "Qual doença mais internou pacientes nos últimos 3 anos, por região?"             |
| **Educação**   | "Qual disciplina tem mais reprovações? Em qual período?"                          |
| **Financeiro** | "Quantos clientes atrasaram o pagamento este mês vs. o mesmo mês do ano passado?" |
| **E-commerce** | "Qual campanha de marketing gerou mais vendas?"                                   |

Perceba: todas essas perguntas envolvem **grandes volumes de dados**, **cruzamento de informações** e **comparação ao longo do tempo**. É exatamente para isso que o Data Warehouse foi criado.

---

## Resumo visual: o fluxo completo

```diagram
{
  "title": "O fluxo completo: dos sistemas ao Data Warehouse",
  "width": 820,
  "height": 300,
  "elements": [
    { "type": "rect", "x": 25, "y": 40, "width": 150, "height": 220, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12 },
    { "type": "text", "x": 100, "y": 68, "content": "Sistemas do", "fontSize": 13, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 100, "y": 88, "content": "dia a dia", "fontSize": 13, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 100, "y": 120, "content": "Sistema de vendas", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 100, "y": 142, "content": "Sistema de RH", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 100, "y": 164, "content": "Sistema financeiro", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 100, "y": 186, "content": "Planilhas", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 100, "y": 218, "content": "Cada um com seu", "fontSize": 10, "color": "#a8a29e", "fontStyle": "italic" },
    { "type": "text", "x": 100, "y": 236, "content": "formato e padrão", "fontSize": 10, "color": "#a8a29e", "fontStyle": "italic" },

    { "type": "arrow", "from": { "x": 185, "y": 150 }, "to": { "x": 240, "y": 150 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 240, "y": 70, "width": 120, "height": 160, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 12 },
    { "type": "text", "x": 300, "y": 100, "content": "ETL", "fontSize": 18, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 300, "y": 130, "content": "Extrair", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 300, "y": 152, "content": "Transformar", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 300, "y": 174, "content": "Carregar", "fontSize": 11, "color": "#57534e" },

    { "type": "arrow", "from": { "x": 370, "y": 150 }, "to": { "x": 420, "y": 150 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 420, "y": 45, "width": 180, "height": 210, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 510, "y": 75, "content": "DATA", "fontSize": 20, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 510, "y": 100, "content": "WAREHOUSE", "fontSize": 20, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 510, "y": 135, "content": "Dados organizados", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 510, "y": 155, "content": "Histórico preservado", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 510, "y": 175, "content": "Tudo padronizado", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 510, "y": 195, "content": "Otimizado para leitura", "fontSize": 11, "color": "#57534e" },

    { "type": "arrow", "from": { "x": 610, "y": 150 }, "to": { "x": 660, "y": 150 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 660, "y": 70, "width": 130, "height": 160, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 725, "y": 100, "content": "Quem consulta", "fontSize": 13, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 725, "y": 132, "content": "Analistas", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 725, "y": 154, "content": "Gestores", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 725, "y": 176, "content": "Dashboards", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 725, "y": 198, "content": "Relatórios", "fontSize": 11, "color": "#57534e" }
  ]
}
```

---

## Recapitulando

| Conceito                 | Descrição                                                         |
| ------------------------ | ----------------------------------------------------------------- |
| **Banco do dia a dia**   | Otimizado para operações rápidas (cadastrar, atualizar, deletar)  |
| **Data Warehouse**       | Banco separado, otimizado para consultas analíticas com histórico |
| **Por que separar?**     | Consultas pesadas no banco de produção podem derrubar o sistema   |
| **Orientado a assuntos** | Dados organizados por tema de negócio, não por sistema de origem  |
| **Integrado**            | Dados de várias fontes unificados com um padrão só                |
| **Não volátil**          | Dados armazenados não são alterados nem apagados                  |
| **Variante no tempo**    | Cada dado tem referência temporal, permitindo análises históricas |
| **ETL**                  | Processo de Extrair, Transformar e Carregar dados no DW           |

---

## Exercícios de Fixação

1. Explique com suas próprias palavras: por que **não é uma boa ideia** rodar consultas analíticas pesadas diretamente no banco de dados que serve o aplicativo?

2. O que é um **Data Warehouse**? Defina sem usar termos técnicos — como se estivesse explicando para alguém que nunca ouviu falar disso.

3. Explique cada uma das 4 características de um Data Warehouse (orientado a assuntos, integrado, não volátil, variante no tempo) usando o exemplo de uma **rede de escolas** que quer analisar o desempenho dos alunos.

4. Uma empresa tem três sistemas: um de vendas (que registra "São Paulo"), um de logística (que registra "SP") e um de marketing (que registra "SAO PAULO"). Como o Data Warehouse resolve esse problema?

5. O que significa a sigla **ETL**? Descreva cada etapa com um exemplo prático.
