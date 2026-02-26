const n={"arquitetura-organizacao":{"arquitetura-von-neumann/a-grande-ideia":{title:"A Grande Ideia: Programa Armazenado",description:"A proposta revolucionária de Von Neumann que transformou computadores em máquinas de propósito geral.",duration:"1 aula",order:999,category:"arquitetura-von-neumann",content:`# A Grande Ideia: Programa Armazenado

Na aula anterior, vimos que o ENIAC tinha um problema sério: trocar de programa significava reconectar milhares de fios. Dados ficavam na memória, mas instruções ficavam na estrutura física da máquina.

Agora vamos entender a solução proposta por Von Neumann — uma ideia aparentemente simples que mudou tudo.

---

## O documento que mudou a história

Em junho de 1945, **John von Neumann** escreveu o _"First Draft of a Report on the EDVAC"_. Era um rascunho técnico, com 101 páginas, descrevendo como deveria funcionar o EDVAC — o sucessor planejado do ENIAC.

O documento não tinha nome de autores na capa (apenas Von Neumann aparecia), o que gerou controvérsias históricas sobre créditos. Mas o conteúdo era revolucionário.

\`\`\`diagram
{
  "title": "O First Draft de Von Neumann (1945)",
  "width": 840,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 195, "y": 25, "width": 450, "height": 210, "label": "", "fill": "#f5f5f4", "stroke": "#78716c", "rounded": 8 },
    { "type": "text", "x": 420, "y": 65, "content": "First Draft of a Report on the EDVAC", "fontSize": 17, "color": "#1c1917", "fontWeight": "bold", "fontStyle": "italic" },
    { "type": "text", "x": 420, "y": 100, "content": "John von Neumann", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 130, "content": "30 de junho de 1945", "fontSize": 13, "color": "#78716c" },

    { "type": "text", "x": 420, "y": 175, "content": "Ideia central:", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 420, "y": 205, "content": "Armazenar o programa na memória,", "fontSize": 15, "color": "#059669", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 230, "content": "junto com os dados.", "fontSize": 15, "color": "#059669", "fontWeight": "bold" }
  ]
}
\`\`\`

> [!nota] **Controvérsia histórica:** Os engenheiros J. Presper Eckert e John Mauchly, que projetaram o ENIAC, alegaram que a ideia do programa armazenado já estava sendo discutida pela equipe antes de Von Neumann entrar no projeto. A verdade é que foi um trabalho colaborativo, mas o documento de Von Neumann foi o primeiro a formalizar e publicar a ideia.

---

## A ideia em uma frase

Se tivéssemos que resumir a proposta de Von Neumann em uma única frase, seria:

> **"E se o programa fosse apenas mais um tipo de dado, armazenado na mesma memória?"**

Parece óbvio hoje. Mas em 1945, era uma mudança de paradigma.

Até então, a lógica era:

- **Dados** = informação que a máquina processa (números, valores)
- **Programa** = estrutura que define COMO processar (fiação, chaves)

Von Neumann propôs tratar ambos da mesma forma:

- **Dados** = sequências de bits na memória
- **Programa** = sequências de bits na memória (que a CPU interpreta como instruções)

\`\`\`diagram
{
  "title": "A mudança de paradigma",
  "width": 840,
  "height": 380,
  "elements": [
    { "type": "rect", "x": 30, "y": 30, "width": 380, "height": 310, "label": "", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 16 },
    { "type": "text", "x": 220, "y": 65, "content": "ANTES de Von Neumann", "fontSize": 16, "color": "#991b1b", "fontWeight": "bold" },

    { "type": "rect", "x": 60, "y": 100, "width": 140, "height": 90, "label": "MEMÓRIA", "sublabel": "Dados", "fill": "#fecaca", "stroke": "#f87171", "rounded": 10, "fontSize": 13 },
    { "type": "rect", "x": 240, "y": 100, "width": 140, "height": 90, "label": "HARDWARE", "sublabel": "Programa", "fill": "#fecaca", "stroke": "#f87171", "rounded": 10, "fontSize": 13 },

    { "type": "text", "x": 220, "y": 230, "content": "Naturezas diferentes:", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 260, "content": "Dado é eletrônico,", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 220, "y": 285, "content": "programa é físico (fios).", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 220, "y": 320, "content": "Trocar programa = trabalho manual", "fontSize": 12, "color": "#dc2626", "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 420, "y": 190 }, "to": { "x": 460, "y": 190 }, "stroke": "#10b981", "strokeWidth": 3 },

    { "type": "rect", "x": 430, "y": 30, "width": 380, "height": 310, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 16 },
    { "type": "text", "x": 620, "y": 65, "content": "DEPOIS de Von Neumann", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },

    { "type": "rect", "x": 480, "y": 100, "width": 280, "height": 90, "label": "MEMÓRIA", "sublabel": "Dados + Programa", "fill": "#a7f3d0", "stroke": "#34d399", "rounded": 10, "fontSize": 13 },

    { "type": "text", "x": 620, "y": 230, "content": "Mesma natureza:", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 260, "content": "Dado e programa são ambos", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 620, "y": 285, "content": "sequências de bits.", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 620, "y": 320, "content": "Trocar programa = carregar da memória", "fontSize": 12, "color": "#059669", "fontWeight": "bold" }
  ]
}
\`\`\`

---

## Por que isso é tão poderoso?

A ideia do **programa armazenado** (_stored-program concept_) trouxe várias consequências revolucionárias:

### 1. Troca instantânea de programas

Não é mais preciso desmontar a máquina. Para executar um programa diferente, basta carregar novas instruções na memória — um processo que leva frações de segundo.

\`\`\`diagram
{
  "title": "Troca de programa: antes vs. depois",
  "width": 840,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 30, "y": 30, "width": 380, "height": 150, "label": "", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 14 },
    { "type": "text", "x": 220, "y": 65, "content": "ENIAC", "fontSize": 17, "color": "#991b1b", "fontWeight": "bold" },
    { "type": "text", "x": 220, "y": 105, "content": "Desligar → Reconectar fios → Testar → Religar", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 150, "content": "⏱️ DIAS ou SEMANAS", "fontSize": 16, "color": "#dc2626", "fontWeight": "bold" },

    { "type": "rect", "x": 430, "y": 30, "width": 380, "height": 150, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 620, "y": 65, "content": "Von Neumann", "fontSize": 17, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 620, "y": 105, "content": "Carregar programa da memória secundária", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 150, "content": "⏱️ SEGUNDOS ou MILISSEGUNDOS", "fontSize": 16, "color": "#059669", "fontWeight": "bold" }
  ]
}
\`\`\`

### 2. Programas podem modificar a si mesmos

Como instruções são apenas dados na memória, um programa pode **ler e alterar suas próprias instruções** durante a execução. Isso permitiu técnicas avançadas de programação (embora também tenha criado riscos de segurança).

### 3. Programas podem gerar outros programas

Um programa pode criar novos programas e salvá-los na memória. Isso é a base de **compiladores** — programas que traduzem código escrito por humanos em código que a máquina entende.

### 4. A máquina se torna verdadeiramente de propósito geral

O mesmo hardware pode ser calculadora, editor de texto, navegador de internet, reprodutor de música — tudo depende de qual programa está carregado na memória. A máquina deixa de ser especializada e se torna **universal**.

\`\`\`diagram
{
  "title": "O computador de propósito geral",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 270, "y": 20, "width": 300, "height": 75, "label": "HARDWARE", "sublabel": "(sempre o mesmo)", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12, "fontSize": 15, "fontWeight": "bold" },

    { "type": "line", "from": { "x": 340, "y": 95 }, "to": { "x": 340, "y": 120 }, "stroke": "#a8a29e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 340, "y": 120 }, "to": { "x": 160, "y": 120 }, "stroke": "#a8a29e", "strokeWidth": 2 },
    { "type": "arrow", "from": { "x": 160, "y": 120 }, "to": { "x": 160, "y": 155 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "arrow", "from": { "x": 420, "y": 95 }, "to": { "x": 420, "y": 155 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 500, "y": 95 }, "to": { "x": 500, "y": 120 }, "stroke": "#a8a29e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 120 }, "to": { "x": 680, "y": 120 }, "stroke": "#a8a29e", "strokeWidth": 2 },
    { "type": "arrow", "from": { "x": 680, "y": 120 }, "to": { "x": 680, "y": 155 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 55, "y": 160, "width": 210, "height": 65, "label": "Programa A", "sublabel": "Calculadora", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 10, "fontSize": 13 },
    { "type": "rect", "x": 315, "y": 160, "width": 210, "height": 65, "label": "Programa B", "sublabel": "Jogo", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10, "fontSize": 13 },
    { "type": "rect", "x": 575, "y": 160, "width": 210, "height": 65, "label": "Programa C", "sublabel": "Editor de texto", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 10, "fontSize": 13 },

    { "type": "text", "x": 420, "y": 255, "content": "O mesmo computador pode ser qualquer coisa — basta trocar o software.", "fontSize": 13, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

> [!dica] **Pense no seu celular:** O hardware é o mesmo desde que você comprou. Mas você instalou dezenas de aplicativos diferentes — cada um é um "programa" que transforma o mesmo hardware em ferramentas completamente distintas. Isso só é possível por causa do modelo de programa armazenado.

---

## A distinção fundamental: onde está a "inteligência"?

Uma forma de entender a revolução é perguntar: **onde está a lógica que define o que a máquina faz?**

| Modelo      | Onde está a lógica?        | Consequência                         |
| ----------- | -------------------------- | ------------------------------------ |
| ENIAC       | Na estrutura física (fios) | Máquina especializada, difícil mudar |
| Von Neumann | Na memória (software)      | Máquina universal, fácil reprogramar |

No ENIAC, a "inteligência" estava soldada na máquina. No modelo de Von Neumann, a "inteligência" é fluida — pode ser trocada, atualizada, corrigida, sem tocar no hardware.

> [!atencao] **Isso explica por que atualizações de software funcionam:** Quando você atualiza o sistema operacional do seu computador ou o app do banco no celular, o hardware não muda. Apenas novas instruções são carregadas na memória, substituindo as antigas.

---

## A unificação de dados e instruções

Uma consequência filosófica interessante: se dados e instruções são ambos sequências de bits na memória, **a fronteira entre eles é arbitrária**.

Para a memória, não existe diferença entre:

- O número \`01000001\` (que representa o valor 65)
- A instrução \`01000001\` (que poderia ser "mover dado para registrador A")

Quem decide se uma sequência de bits é dado ou instrução é **o contexto** — especificamente, se a CPU está no modo de "buscar instrução" ou "buscar dado".

\`\`\`diagram
{
  "title": "Dados e instruções são bits idênticos",
  "width": 840,
  "height": 240,
  "elements": [
    { "type": "rect", "x": 220, "y": 25, "width": 400, "height": 65, "label": "01001000 01100101 01101100 01101100 01101111", "fill": "#f5f5f4", "stroke": "#57534e", "rounded": 8, "fontSize": 14 },

    { "type": "line", "from": { "x": 320, "y": 95 }, "to": { "x": 320, "y": 115 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 320, "y": 115 }, "to": { "x": 170, "y": 115 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "arrow", "from": { "x": 170, "y": 115 }, "to": { "x": 170, "y": 140 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 520, "y": 95 }, "to": { "x": 520, "y": 115 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 520, "y": 115 }, "to": { "x": 670, "y": 115 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "arrow", "from": { "x": 670, "y": 115 }, "to": { "x": 670, "y": 140 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "rect", "x": 45, "y": 145, "width": 250, "height": 80, "label": "Se interpretado como TEXTO:", "sublabel": "\\"Hello\\"", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 10, "fontSize": 13 },
    { "type": "rect", "x": 545, "y": 145, "width": 250, "height": 80, "label": "Se interpretado como CÓDIGO:", "sublabel": "Instruções de máquina", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 10, "fontSize": 13 },

    { "type": "text", "x": 420, "y": 145, "content": "São os mesmos bits!", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

Essa unificação é elegante, mas também traz riscos. Se um programa malicioso conseguir fazer a CPU interpretar **dados** como se fossem **instruções**, ele pode executar código arbitrário. É a base de muitos ataques de segurança, como buffer overflow.

---

## O nascimento do software

A palavra "software" nem existia em 1945. Mas é exatamente o que Von Neumann criou: a ideia de que a parte "maleável" do computador (_soft_) poderia ser separada da parte física (_hard_).

| Termo    | Origem          | Significado                                   |
| -------- | --------------- | --------------------------------------------- |
| Hardware | _hard_ + _ware_ | Os componentes físicos, rígidos, da máquina   |
| Software | _soft_ + _ware_ | Os programas, flexíveis, que rodam na máquina |

O modelo de Von Neumann é o que **permite que software exista como conceito separado**. Antes dele, não fazia sentido falar em "instalar um programa" — o programa ERA a máquina.

> [!nota] **Curiosidade:** A palavra "software" foi usada pela primeira vez em 1958, pelo estatístico John Tukey, em um artigo na revista American Mathematical Monthly.

---

## Um resumo visual do conceito

\`\`\`diagram
{
  "title": "O conceito de programa armazenado",
  "width": 820,
  "height": 400,
  "elements": [
    { "type": "rect", "x": 260, "y": 20, "width": 300, "height": 80, "label": "CPU", "sublabel": "Unidade Central de Processamento", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 14, "fontSize": 14, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 410, "y": 105 }, "to": { "x": 410, "y": 145 }, "stroke": "#f59e0b", "strokeWidth": 3, "bidirectional": true },
    { "type": "text", "x": 470, "y": 130, "content": "busca instrução", "fontSize": 11, "color": "#b45309" },

    { "type": "rect", "x": 160, "y": 150, "width": 500, "height": 200, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 14 },
    { "type": "text", "x": 410, "y": 175, "content": "MEMÓRIA PRINCIPAL", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },

    { "type": "rect", "x": 190, "y": 200, "width": 200, "height": 110, "label": "PROGRAMA", "sublabel": "(instruções)", "fill": "#a7f3d0", "stroke": "#34d399", "rounded": 10, "fontSize": 13, "fontWeight": "bold" },
    { "type": "text", "x": 290, "y": 275, "content": "Endereço 0000", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 290, "y": 292, "content": "Endereço 0001", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 290, "y": 309, "content": "...", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 430, "y": 200, "width": 200, "height": 110, "label": "DADOS", "sublabel": "(valores)", "fill": "#bbf7d0", "stroke": "#4ade80", "rounded": 10, "fontSize": 13, "fontWeight": "bold" },
    { "type": "text", "x": 530, "y": 275, "content": "Endereço 1000", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 530, "y": 292, "content": "Endereço 1001", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 530, "y": 309, "content": "...", "fontSize": 10, "color": "#78716c" },

    { "type": "text", "x": 410, "y": 380, "content": "Ambos são sequências de bits. A CPU sabe qual é qual pelo endereço.", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

---

## O impacto histórico

A ideia do programa armazenado não foi apenas uma melhoria técnica — foi uma **mudança de categoria**. O computador deixou de ser uma calculadora sofisticada e passou a ser uma **máquina universal de processamento de informação**.

Tudo que fazemos com computadores hoje — navegar na internet, jogar videogame, editar vídeos, treinar inteligência artificial — depende fundamentalmente dessa ideia de 1945.

\`\`\`diagram
{
  "title": "O legado do programa armazenado",
  "width": 820,
  "height": 180,
  "elements": [
    { "type": "rect", "x": 30, "y": 30, "width": 160, "height": 100, "label": "1945", "sublabel": "Von Neumann propõe", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12, "fontSize": 16, "fontWeight": "bold" },
    { "type": "arrow", "from": { "x": 200, "y": 80 }, "to": { "x": 250, "y": 80 }, "stroke": "#a8a29e" },
    { "type": "rect", "x": 260, "y": 30, "width": 160, "height": 100, "label": "1949", "sublabel": "Primeiros PCs", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12, "fontSize": 16, "fontWeight": "bold" },
    { "type": "arrow", "from": { "x": 430, "y": 80 }, "to": { "x": 480, "y": 80 }, "stroke": "#a8a29e" },
    { "type": "rect", "x": 490, "y": 30, "width": 160, "height": 100, "label": "1980+", "sublabel": "Revolução do software", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12, "fontSize": 16, "fontWeight": "bold" },
    { "type": "arrow", "from": { "x": 660, "y": 80 }, "to": { "x": 710, "y": 80 }, "stroke": "#a8a29e" },
    { "type": "rect", "x": 720, "y": 30, "width": 80, "height": 100, "label": "Hoje", "sublabel": "Bilhões de dispositivos", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 12, "fontSize": 16, "fontWeight": "bold" }
  ]
}
\`\`\`

> [!dica] Na próxima aula, vamos ver como Von Neumann organizou os **componentes físicos** do computador para implementar essa ideia — CPU, memória, entrada, saída e os barramentos que conectam tudo.

---

## Recapitulando

| Conceito                   | Descrição                                                               |
| -------------------------- | ----------------------------------------------------------------------- |
| **First Draft (1945)**     | Documento de Von Neumann que formalizou o modelo do programa armazenado |
| **Programa armazenado**    | Instruções ficam na memória, junto com os dados                         |
| **Unificação**             | Dados e instruções são ambos sequências de bits                         |
| **Troca instantânea**      | Mudar de programa é carregar novos bits, não reconectar fios            |
| **Propósito geral**        | O mesmo hardware pode executar qualquer software                        |
| **Software como conceito** | Surge a distinção clara entre hardware (físico) e software (lógico)     |

---

## Exercícios de Fixação

1. Explique com suas palavras o que significa "programa armazenado" e por que essa ideia foi revolucionária.

2. No seu celular, você pode alternar entre calculadora, navegador e jogo instantaneamente. Como isso seria se o celular funcionasse como o ENIAC?

3. Dê um exemplo de como "programas podem modificar a si mesmos" poderia ser útil. Dê outro exemplo de como isso poderia ser perigoso.

4. Por que a mesma sequência de bits pode ser interpretada como dado OU como instrução? Quem/o que decide?

5. Pesquise: o que é um "compilador"? Como ele se relaciona com o conceito de programa armazenado?`,headings:[{level:2,text:"O documento que mudou a história",id:"o-documento-que-mudou-a-história"},{level:2,text:"A ideia em uma frase",id:"a-ideia-em-uma-frase"},{level:2,text:"Por que isso é tão poderoso?",id:"por-que-isso-é-tão-poderoso"},{level:3,text:"1. Troca instantânea de programas",id:"1-troca-instantânea-de-programas"},{level:3,text:"2. Programas podem modificar a si mesmos",id:"2-programas-podem-modificar-a-si-mesmos"},{level:3,text:"3. Programas podem gerar outros programas",id:"3-programas-podem-gerar-outros-programas"},{level:3,text:"4. A máquina se torna verdadeiramente de propósito geral",id:"4-a-máquina-se-torna-verdadeiramente-de-propósito-geral"},{level:2,text:'A distinção fundamental: onde está a "inteligência"?',id:"a-distinção-fundamental-onde-está-a-inteligência"},{level:2,text:"A unificação de dados e instruções",id:"a-unificação-de-dados-e-instruções"},{level:2,text:"O nascimento do software",id:"o-nascimento-do-software"},{level:2,text:"Um resumo visual do conceito",id:"um-resumo-visual-do-conceito"},{level:2,text:"O impacto histórico",id:"o-impacto-histórico"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"arquitetura-von-neumann/anatomia-do-modelo":{title:"Anatomia do Modelo",description:"Os cinco componentes fundamentais da arquitetura de Von Neumann e como eles se conectam.",duration:"1 aula",order:999,category:"arquitetura-von-neumann",content:`# Anatomia do Modelo

Nas aulas anteriores, entendemos o **problema** (ENIAC era inflexível) e a **solução conceitual** (programa armazenado na memória). Agora vamos ver como Von Neumann organizou os **componentes físicos** para implementar essa ideia.

---

## Visão geral: os cinco blocos

Von Neumann dividiu o computador em **cinco unidades funcionais** distintas, conectadas por canais de comunicação. Toda a complexidade de um computador moderno — com bilhões de transistores — ainda pode ser mapeada para esses cinco blocos.

\`\`\`diagram
{
  "title": "Os 5 componentes da Arquitetura de Von Neumann",
  "width": 840,
  "height": 540,
  "elements": [
    { "type": "rect", "x": 20, "y": 15, "width": 800, "height": 510, "label": "", "fill": "#fafaf9", "stroke": "#d6d3d1", "rounded": 16 },

    { "type": "rect", "x": 270, "y": 40, "width": 300, "height": 130, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 14 },
    { "type": "text", "x": 420, "y": 68, "content": "UNIDADE CENTRAL DE PROCESSAMENTO", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 92, "content": "(CPU)", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "rect", "x": 290, "y": 108, "width": 115, "height": 50, "label": "UC", "sublabel": "Unid. Controle", "fill": "#bfdbfe", "stroke": "#60a5fa", "rounded": 8, "fontSize": 12 },
    { "type": "rect", "x": 435, "y": 108, "width": 115, "height": 50, "label": "ULA", "sublabel": "Unid. Lógica Arit.", "fill": "#bfdbfe", "stroke": "#60a5fa", "rounded": 8, "fontSize": 12 },

    { "type": "line", "from": { "x": 100, "y": 230 }, "to": { "x": 740, "y": 230 }, "stroke": "#f59e0b", "strokeWidth": 6 },
    { "type": "line", "from": { "x": 100, "y": 245 }, "to": { "x": 740, "y": 245 }, "stroke": "#f59e0b", "strokeWidth": 6 },
    { "type": "text", "x": 420, "y": 275, "content": "BARRAMENTO DO SISTEMA", "fontSize": 13, "color": "#b45309", "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 420, "y": 175 }, "to": { "x": 420, "y": 225 }, "stroke": "#f59e0b", "strokeWidth": 2, "bidirectional": true },

    { "type": "arrow", "from": { "x": 170, "y": 255 }, "to": { "x": 170, "y": 310 }, "stroke": "#f59e0b", "strokeWidth": 2, "bidirectional": true },
    { "type": "arrow", "from": { "x": 420, "y": 255 }, "to": { "x": 420, "y": 310 }, "stroke": "#f59e0b", "strokeWidth": 2, "bidirectional": true },
    { "type": "arrow", "from": { "x": 670, "y": 255 }, "to": { "x": 670, "y": 310 }, "stroke": "#f59e0b", "strokeWidth": 2, "bidirectional": true },

    { "type": "rect", "x": 50, "y": 315, "width": 240, "height": 110, "label": "MEMÓRIA PRINCIPAL", "sublabel": "Dados + Instruções", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 14, "fontSize": 14, "fontWeight": "bold" },

    { "type": "rect", "x": 300, "y": 315, "width": 240, "height": 110, "label": "ENTRADA", "sublabel": "Teclado, Mouse, Sensor", "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2, "rounded": 14, "fontSize": 14, "fontWeight": "bold" },

    { "type": "rect", "x": 550, "y": 315, "width": 240, "height": 110, "label": "SAÍDA", "sublabel": "Monitor, Impressora, Alto-falante", "fill": "#fce7f3", "stroke": "#ec4899", "strokeWidth": 2, "rounded": 14, "fontSize": 14, "fontWeight": "bold" },

    { "type": "text", "x": 420, "y": 460, "content": "1. CPU  •  2. Memória  •  3. Entrada  •  4. Saída  •  5. Barramento", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 495, "content": "Qualquer computador — do smartphone ao supercomputador — segue este modelo.", "fontSize": 13, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

Vamos entender cada componente em detalhes.

---

## 1. CPU — Unidade Central de Processamento

A **CPU** (_Central Processing Unit_) é o "cérebro" do computador. É onde as instruções são executadas e os cálculos são feitos.

Von Neumann dividiu a CPU em duas partes:

### Unidade de Controle (UC)

A UC é o "maestro" que coordena tudo. Ela:

- **Busca** a próxima instrução na memória
- **Decodifica** o que a instrução significa
- **Comanda** os outros componentes para executar a operação

A UC não faz contas — ela apenas **dirige o tráfego** de dados e sinais dentro do computador.

### Unidade Lógica e Aritmética (ULA)

A ULA é a "calculadora" dentro da CPU. Ela realiza:

- **Operações aritméticas**: soma, subtração, multiplicação, divisão
- **Operações lógicas**: AND, OR, NOT, comparações

Quando a UC decodifica uma instrução que envolve cálculo, ela envia os dados para a ULA, que processa e devolve o resultado.

\`\`\`diagram
{
  "title": "Dentro da CPU",
  "width": 840,
  "height": 340,
  "elements": [
    { "type": "rect", "x": 120, "y": 20, "width": 600, "height": 300, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 16 },
    { "type": "text", "x": 420, "y": 55, "content": "CPU — Unidade Central de Processamento", "fontSize": 16, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "rect", "x": 150, "y": 85, "width": 260, "height": 200, "label": "", "fill": "#bfdbfe", "stroke": "#60a5fa", "rounded": 12 },
    { "type": "text", "x": 280, "y": 115, "content": "UNIDADE DE CONTROLE (UC)", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 175, "y": 155, "content": "• Busca instruções", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 175, "y": 185, "content": "• Decodifica operações", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 175, "y": 215, "content": "• Envia sinais de controle", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 175, "y": 245, "content": "• Coordena o fluxo de dados", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 280, "y": 275, "content": "O \\"maestro\\"", "fontSize": 12, "color": "#3b82f6", "fontStyle": "italic" },

    { "type": "rect", "x": 440, "y": 85, "width": 260, "height": 200, "label": "", "fill": "#bfdbfe", "stroke": "#60a5fa", "rounded": 12 },
    { "type": "text", "x": 570, "y": 115, "content": "ULA (Unid. Lógica e Aritmética)", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 465, "y": 155, "content": "• Soma, subtração", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 465, "y": 185, "content": "• Multiplicação, divisão", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 465, "y": 215, "content": "• AND, OR, NOT, XOR", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 465, "y": 245, "content": "• Comparações (>, <, =)", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 570, "y": 275, "content": "A \\"calculadora\\"", "fontSize": 12, "color": "#3b82f6", "fontStyle": "italic" },

    { "type": "arrow", "from": { "x": 415, "y": 185 }, "to": { "x": 435, "y": 185 }, "stroke": "#3b82f6", "strokeWidth": 2, "bidirectional": true }
  ]
}
\`\`\`

### Registradores

Além da UC e ULA, a CPU contém **registradores** — pequenas memórias ultra-rápidas que guardam dados temporários durante o processamento. Os mais importantes são:

| Registrador                       | Função                                        |
| --------------------------------- | --------------------------------------------- |
| **PC** (Program Counter)          | Guarda o endereço da próxima instrução        |
| **IR** (Instruction Register)     | Guarda a instrução sendo executada atualmente |
| **ACC** (Accumulator)             | Guarda resultados de operações da ULA         |
| **MAR** (Memory Address Register) | Guarda endereços de memória a acessar         |
| **MBR** (Memory Buffer Register)  | Guarda dados lidos/escritos na memória        |

> [!dica] Na próxima aula, veremos como esses registradores trabalham juntos no **ciclo de instrução**.

---

## 2. Memória Principal

A **memória principal** (ou memória RAM, nos computadores modernos) é onde ficam armazenados os **dados e as instruções** que a CPU precisa acessar rapidamente.

### Características fundamentais

- **Armazenamento de programa e dados**: Esta é a essência de Von Neumann — ambos compartilham a mesma memória.
- **Acesso por endereço**: Cada posição de memória tem um endereço numérico único.
- **Volátil**: Os dados se perdem quando o computador é desligado.

\`\`\`diagram
{
  "title": "A Memória Principal",
  "width": 820,
  "height": 340,
  "elements": [
    { "type": "rect", "x": 210, "y": 20, "width": 400, "height": 300, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 14 },
    { "type": "text", "x": 410, "y": 50, "content": "MEMÓRIA PRINCIPAL", "fontSize": 15, "color": "#065f46", "fontWeight": "bold" },

    { "type": "text", "x": 250, "y": 90, "content": "Endereço", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 410, "y": 90, "content": "Conteúdo", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 550, "y": 90, "content": "Tipo", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 230, "y": 105, "width": 360, "height": 30, "label": "", "fill": "#a7f3d0", "stroke": "#34d399", "rounded": 4 },
    { "type": "text", "x": 250, "y": 125, "content": "0000", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 410, "y": 125, "content": "10110001 00001010", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 550, "y": 125, "content": "Instrução", "fontSize": 11, "color": "#059669" },

    { "type": "rect", "x": 230, "y": 140, "width": 360, "height": 30, "label": "", "fill": "#bbf7d0", "stroke": "#4ade80", "rounded": 4 },
    { "type": "text", "x": 250, "y": 160, "content": "0001", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 410, "y": 160, "content": "00100011 00000101", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 550, "y": 160, "content": "Instrução", "fontSize": 11, "color": "#059669" },

    { "type": "rect", "x": 230, "y": 175, "width": 360, "height": 30, "label": "", "fill": "#a7f3d0", "stroke": "#34d399", "rounded": 4 },
    { "type": "text", "x": 250, "y": 195, "content": "0002", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 410, "y": 195, "content": "01110000 00001000", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 550, "y": 195, "content": "Instrução", "fontSize": 11, "color": "#059669" },

    { "type": "text", "x": 410, "y": 225, "content": "...", "fontSize": 14, "color": "#78716c" },

    { "type": "rect", "x": 230, "y": 240, "width": 360, "height": 30, "label": "", "fill": "#fef3c7", "stroke": "#fbbf24", "rounded": 4 },
    { "type": "text", "x": 250, "y": 260, "content": "1000", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 410, "y": 260, "content": "00000000 00101010", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 550, "y": 260, "content": "Dado (42)", "fontSize": 11, "color": "#b45309" },

    { "type": "rect", "x": 230, "y": 275, "width": 360, "height": 30, "label": "", "fill": "#fef9c3", "stroke": "#facc15", "rounded": 4 },
    { "type": "text", "x": 250, "y": 295, "content": "1001", "fontSize": 12, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 410, "y": 295, "content": "00000000 00010001", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 550, "y": 295, "content": "Dado (17)", "fontSize": 11, "color": "#b45309" }
  ]
}
\`\`\`

> [!atencao] **Observação importante:** Para a memória, não há diferença entre "instrução" e "dado" — ambos são sequências de bits. A distinção existe apenas no contexto de uso pela CPU.

---

## 3. Dispositivos de Entrada

Os **dispositivos de entrada** permitem que informações do mundo externo entrem no computador. Exemplos:

| Dispositivo      | Tipo de entrada                    |
| ---------------- | ---------------------------------- |
| Teclado          | Texto e comandos                   |
| Mouse            | Posição e cliques                  |
| Microfone        | Som (convertido em dados digitais) |
| Câmera           | Imagem (convertida em pixels)      |
| Sensor           | Temperatura, pressão, movimento    |
| Scanner          | Imagem de documento                |
| Leitor de código | Dados de código de barras/QR       |

No modelo de Von Neumann, os dados de entrada são transferidos para a **memória principal**, onde ficam disponíveis para a CPU processar.

---

## 4. Dispositivos de Saída

Os **dispositivos de saída** permitem que o computador comunique resultados ao mundo externo. Exemplos:

| Dispositivo  | Tipo de saída              |
| ------------ | -------------------------- |
| Monitor      | Imagem visual              |
| Impressora   | Documento físico           |
| Alto-falante | Som                        |
| LED/Display  | Indicadores visuais        |
| Atuador      | Movimento mecânico (robôs) |
| Projetor     | Imagem ampliada            |

No modelo de Von Neumann, a CPU processa os dados e os transfere para a **memória principal**, de onde os dispositivos de saída os leem para apresentar.

---

## 5. Barramento (Bus)

O **barramento** é o sistema de comunicação que conecta todos os componentes. É como uma "rodovia de dados" por onde trafegam informações.

Na arquitetura clássica de Von Neumann, existem três tipos de barramento:

\`\`\`diagram
{
  "title": "Os três barramentos",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 30, "y": 35, "width": 250, "height": 205, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 155, "y": 65, "content": "Barramento de Dados", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 155, "y": 105, "content": "Transporta os DADOS", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 155, "y": 130, "content": "que estão sendo lidos", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 155, "y": 155, "content": "ou escritos.", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 155, "y": 195, "content": "Bidirecional: ↔", "fontSize": 12, "color": "#3b82f6" },
    { "type": "text", "x": 155, "y": 220, "content": "Largura: 32 ou 64 bits (típico)", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 295, "y": 35, "width": 250, "height": 205, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 420, "y": 65, "content": "Barramento de Endereço", "fontSize": 15, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 105, "content": "Transporta o ENDEREÇO", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 130, "content": "de memória que será", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 155, "content": "acessado.", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 195, "content": "Unidirecional: →", "fontSize": 12, "color": "#10b981" },
    { "type": "text", "x": 420, "y": 220, "content": "Largura: define RAM máxima", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 560, "y": 35, "width": 250, "height": 205, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 685, "y": 65, "content": "Barramento de Controle", "fontSize": 15, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 685, "y": 105, "content": "Transporta SINAIS", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 685, "y": 130, "content": "de controle: ler, escrever,", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 685, "y": 155, "content": "interrupções, clock.", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 685, "y": 195, "content": "Bidirecional: ↔", "fontSize": 12, "color": "#f59e0b" },
    { "type": "text", "x": 685, "y": 220, "content": "Vários sinais individuais", "fontSize": 11, "color": "#78716c" }
  ]
}
\`\`\`

> [!nota] **Largura do barramento:** Um barramento de 32 bits pode transferir 32 bits de uma vez. Um de 64 bits transfere o dobro. Isso afeta diretamente a velocidade do computador.

---

## O fluxo de dados no modelo

Vamos ver como os dados fluem entre os componentes em uma operação típica:

\`\`\`diagram
{
  "title": "Fluxo de dados: executando uma instrução",
  "width": 820,
  "height": 400,
  "elements": [
    { "type": "text", "x": 410, "y": 25, "content": "Exemplo: somar dois números e mostrar o resultado", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 30, "y": 55, "width": 170, "height": 60, "label": "1. Buscar instrução", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 10, "fontSize": 12, "fontWeight": "bold" },
    { "type": "text", "x": 115, "y": 100, "content": "CPU lê da memória", "fontSize": 10, "color": "#78716c" },
    { "type": "arrow", "from": { "x": 205, "y": 85 }, "to": { "x": 235, "y": 85 }, "stroke": "#a8a29e" },

    { "type": "rect", "x": 240, "y": 55, "width": 170, "height": 60, "label": "2. Decodificar", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 10, "fontSize": 12, "fontWeight": "bold" },
    { "type": "text", "x": 325, "y": 100, "content": "UC entende a instrução", "fontSize": 10, "color": "#78716c" },
    { "type": "arrow", "from": { "x": 415, "y": 85 }, "to": { "x": 445, "y": 85 }, "stroke": "#a8a29e" },

    { "type": "rect", "x": 450, "y": 55, "width": 170, "height": 60, "label": "3. Buscar dados", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10, "fontSize": 12, "fontWeight": "bold" },
    { "type": "text", "x": 535, "y": 100, "content": "CPU lê operandos", "fontSize": 10, "color": "#78716c" },
    { "type": "arrow", "from": { "x": 625, "y": 85 }, "to": { "x": 655, "y": 85 }, "stroke": "#a8a29e" },

    { "type": "rect", "x": 660, "y": 55, "width": 130, "height": 60, "label": "4. Calcular", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 10, "fontSize": 12, "fontWeight": "bold" },
    { "type": "text", "x": 725, "y": 100, "content": "ULA soma", "fontSize": 10, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 725, "y": 120 }, "to": { "x": 725, "y": 155 }, "stroke": "#a8a29e" },

    { "type": "rect", "x": 450, "y": 160, "width": 320, "height": 60, "label": "5. Armazenar resultado", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 10, "fontSize": 12, "fontWeight": "bold" },
    { "type": "text", "x": 610, "y": 205, "content": "CPU escreve na memória", "fontSize": 10, "color": "#78716c" },
    { "type": "arrow", "from": { "x": 445, "y": 190 }, "to": { "x": 415, "y": 190 }, "stroke": "#a8a29e" },

    { "type": "rect", "x": 180, "y": 160, "width": 230, "height": 60, "label": "6. Enviar para saída", "fill": "#ccfbf1", "stroke": "#14b8a6", "rounded": 10, "fontSize": 12, "fontWeight": "bold" },
    { "type": "text", "x": 295, "y": 205, "content": "Monitor mostra o resultado", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 110, "y": 270, "width": 600, "height": 100, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 12 },
    { "type": "text", "x": 410, "y": 295, "content": "Diagrama de fluxo simplificado", "fontSize": 12, "color": "#78716c" },

    { "type": "rect", "x": 140, "y": 310, "width": 80, "height": 40, "label": "ENTRADA", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 6, "fontSize": 10 },
    { "type": "arrow", "from": { "x": 225, "y": 330 }, "to": { "x": 265, "y": 330 }, "stroke": "#a8a29e" },
    { "type": "rect", "x": 270, "y": 310, "width": 80, "height": 40, "label": "MEMÓRIA", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 6, "fontSize": 10 },
    { "type": "arrow", "from": { "x": 355, "y": 330 }, "to": { "x": 395, "y": 330 }, "stroke": "#a8a29e", "bidirectional": true },
    { "type": "rect", "x": 400, "y": 310, "width": 80, "height": 40, "label": "CPU", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 6, "fontSize": 10 },
    { "type": "arrow", "from": { "x": 485, "y": 330 }, "to": { "x": 525, "y": 330 }, "stroke": "#a8a29e", "bidirectional": true },
    { "type": "rect", "x": 530, "y": 310, "width": 80, "height": 40, "label": "MEMÓRIA", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 6, "fontSize": 10 },
    { "type": "arrow", "from": { "x": 615, "y": 330 }, "to": { "x": 655, "y": 330 }, "stroke": "#a8a29e" },
    { "type": "rect", "x": 660, "y": 310, "width": 80, "height": 40, "label": "SAÍDA", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 6, "fontSize": 10 }
  ]
}
\`\`\`

---

## Uma analogia: a cozinha de um restaurante

Para fixar a ideia, pense em uma cozinha profissional:

| Componente de Von Neumann | Equivalente na cozinha                 |
| ------------------------- | -------------------------------------- |
| **CPU**                   | O chef de cozinha                      |
| **UC**                    | O chef lendo a receita e dando ordens  |
| **ULA**                   | As mãos do chef cortando e misturando  |
| **Memória**               | A bancada com ingredientes e receitas  |
| **Entrada**               | Os pedidos chegando dos garçons        |
| **Saída**                 | Os pratos prontos saindo para as mesas |
| **Barramento**            | O espaço de circulação entre as áreas  |

> [!dica] O chef (CPU) não pode cozinhar diretamente na geladeira (memória secundária) — ele precisa primeiro trazer os ingredientes para a bancada (memória principal), trabalhar neles, e depois enviar o prato pronto (saída).

---

## Relacionando com computadores reais

Vamos mapear os conceitos para hardware que você conhece:

| Conceito de Von Neumann | No seu computador                   |
| ----------------------- | ----------------------------------- |
| CPU                     | Processador Intel, AMD, Apple M1/M2 |
| Memória Principal       | RAM (4GB, 8GB, 16GB, etc.)          |
| Entrada                 | Teclado, mouse, touchpad, microfone |
| Saída                   | Monitor, alto-falantes, impressora  |
| Barramento              | Chipset, barramentos PCIe, USB      |

E no seu **smartphone**:

| Conceito de Von Neumann | No seu celular                     |
| ----------------------- | ---------------------------------- |
| CPU                     | SoC (Snapdragon, Apple A-series)   |
| Memória Principal       | RAM (6GB, 8GB, 12GB)               |
| Entrada                 | Touchscreen, câmera, GPS, sensores |
| Saída                   | Tela, alto-falante, vibração       |
| Barramento              | Circuitos internos do SoC          |

---

## Recapitulando

| Componente     | Função                                            |
| -------------- | ------------------------------------------------- |
| **CPU**        | Processa instruções e dados                       |
| **UC**         | Busca, decodifica instruções e coordena operações |
| **ULA**        | Executa operações aritméticas e lógicas           |
| **Memória**    | Armazena programa e dados (volátil)               |
| **Entrada**    | Recebe informações do mundo externo               |
| **Saída**      | Envia resultados para o mundo externo             |
| **Barramento** | Conecta componentes (dados, endereços, controle)  |

---

## Exercícios de Fixação

1. Liste os cinco blocos funcionais da arquitetura de Von Neumann e descreva a função de cada um em uma frase.

2. Qual é a diferença entre a Unidade de Controle (UC) e a Unidade Lógica e Aritmética (ULA)? Dê um exemplo de tarefa que cada uma executa.

3. No modelo de Von Neumann, dados e instruções ficam na mesma memória. Cite uma vantagem e uma possível desvantagem dessa escolha.

4. Identifique no seu computador ou celular exemplos concretos de cada um dos cinco componentes.

5. Explique por que o barramento pode ser um "gargalo" no desempenho do computador. O que acontece quando a CPU é muito mais rápida que o barramento?`,headings:[{level:2,text:"Visão geral: os cinco blocos",id:"visão-geral-os-cinco-blocos"},{level:2,text:"1. CPU — Unidade Central de Processamento",id:"1-cpu--unidade-central-de-processamento"},{level:3,text:"Unidade de Controle (UC)",id:"unidade-de-controle-uc"},{level:3,text:"Unidade Lógica e Aritmética (ULA)",id:"unidade-lógica-e-aritmética-ula"},{level:3,text:"Registradores",id:"registradores"},{level:2,text:"2. Memória Principal",id:"2-memória-principal"},{level:3,text:"Características fundamentais",id:"características-fundamentais"},{level:2,text:"3. Dispositivos de Entrada",id:"3-dispositivos-de-entrada"},{level:2,text:"4. Dispositivos de Saída",id:"4-dispositivos-de-saída"},{level:2,text:"5. Barramento (Bus)",id:"5-barramento-bus"},{level:2,text:"O fluxo de dados no modelo",id:"o-fluxo-de-dados-no-modelo"},{level:2,text:"Uma analogia: a cozinha de um restaurante",id:"uma-analogia-a-cozinha-de-um-restaurante"},{level:2,text:"Relacionando com computadores reais",id:"relacionando-com-computadores-reais"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"arquitetura-von-neumann/ciclo-de-instrucao":{title:"O Ciclo de Instrução",description:"Como a CPU executa instruções passo a passo — o coração de todo processador moderno.",duration:"1 aula",order:999,category:"arquitetura-von-neumann",content:`# O Ciclo de Instrução

Nas aulas anteriores, vimos os componentes do modelo de Von Neumann e entendemos que instruções e dados ficam na mesma memória. Agora vamos ver **como a CPU realmente executa essas instruções**, passo a passo.

---

## A pergunta fundamental

Se você parar para pensar, a CPU é uma máquina incrivelmente simples (em conceito) e absurdamente complexa (em implementação).

A pergunta fundamental é: **como uma máquina de silício consegue "obedecer" instruções?**

A resposta está em um processo repetitivo chamado **ciclo de instrução** (ou ciclo de máquina, ou ciclo fetch-decode-execute).

\`\`\`diagram
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
\`\`\`

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

\`\`\`diagram
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
\`\`\`

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

\`\`\`diagram
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
    { "type": "text", "x": 290, "y": 258, "content": "\\"Qual operação?\\"", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" },

    { "type": "rect", "x": 425, "y": 170, "width": 250, "height": 100, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 550, "y": 200, "content": "OPERANDOS (12 bits)", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 550, "y": 230, "content": "0001 = R1, 0010 1010 = R3", "fontSize": 15, "color": "#57534e" },
    { "type": "text", "x": 550, "y": 258, "content": "\\"Com quais dados?\\"", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

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

\`\`\`diagram
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
    { "type": "text", "x": 55, "y": 325, "content": "3. O programa \\"pula\\" para outro lugar", "fontSize": 13, "color": "#57534e", "align": "left" },

    { "type": "rect", "x": 425, "y": 195, "width": 385, "height": 145, "label": "", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 14 },
    { "type": "text", "x": 617, "y": 225, "content": "Instrução Condicional (ex: JZ 0x0200)", "fontSize": 14, "color": "#9d174d", "fontWeight": "bold" },
    { "type": "text", "x": 450, "y": 265, "content": "1. UC verifica o flag ZERO", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 450, "y": 295, "content": "2. Se ZERO=1, carrega 0x0200 no PC", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 450, "y": 325, "content": "3. Se ZERO=0, continua normalmente", "fontSize": 13, "color": "#57534e", "align": "left" }
  ]
}
\`\`\`

---

## Um exemplo completo

Vamos acompanhar a execução de uma instrução do início ao fim.

**Cenário:** O programa quer somar dois números (7 e 5) e guardar o resultado.

**Estado inicial:**

- PC = 0x0010
- R1 = 7
- R2 = 5
- R3 = 0 (vazio)

**Instrução em 0x0010:** \`ADD R3, R1, R2\` (some R1 + R2 e coloque em R3)

\`\`\`diagram
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
\`\`\`

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

3. Dada a instrução \`SUB R2, R1\` (subtraia R1 de R2 e armazene em R2), descreva passo a passo o que acontece em cada etapa do ciclo.

4. Um processador de 2 GHz executa quantos ciclos de clock por segundo? Se cada instrução levasse exatamente 1 ciclo, quantas instruções seriam executadas em 1 minuto?

5. Pesquise: o que é "pipeline" em processadores? Como ele se relaciona com o ciclo de instrução e por que melhora o desempenho?`,headings:[{level:2,text:"A pergunta fundamental",id:"a-pergunta-fundamental"},{level:2,text:"Etapa 1: FETCH (Buscar)",id:"etapa-1-fetch-buscar"},{level:3,text:"O que acontece:",id:"o-que-acontece"},{level:2,text:"Etapa 2: DECODE (Decodificar)",id:"etapa-2-decode-decodificar"},{level:3,text:"O que acontece:",id:"o-que-acontece-1"},{level:3,text:"Anatomia de uma instrução",id:"anatomia-de-uma-instrução"},{level:3,text:"Exemplos de opcodes",id:"exemplos-de-opcodes"},{level:2,text:"Etapa 3: EXECUTE (Executar)",id:"etapa-3-execute-executar"},{level:3,text:"O que acontece depende da instrução:",id:"o-que-acontece-depende-da-instrução"},{level:2,text:"Um exemplo completo",id:"um-exemplo-completo"},{level:2,text:"E depois? O ciclo recomeça!",id:"e-depois-o-ciclo-recomeça"},{level:2,text:"O papel do clock",id:"o-papel-do-clock"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"arquitetura-von-neumann/limitacoes-e-evolucoes":{title:"Limitações e Evoluções",description:"O gargalo de Von Neumann, arquiteturas alternativas e como os computadores modernos superam as limitações originais.",duration:"1 aula",order:999,category:"arquitetura-von-neumann",content:`# Limitações e Evoluções

Nas aulas anteriores, exploramos a arquitetura de Von Neumann em detalhes — desde o problema que ela resolve até o ciclo de instrução que executa bilhões de vezes por segundo. Agora vamos ver o outro lado: **as limitações desse modelo** e como engenheiros desenvolveram soluções ao longo de 80 anos.

---

## O gargalo de Von Neumann

A arquitetura de Von Neumann tem uma característica elegante: dados e instruções compartilham a **mesma memória** e o **mesmo barramento**. Mas essa simplicidade esconde um problema sério.

\`\`\`diagram
{
  "title": "O gargalo de Von Neumann",
  "width": 840,
  "height": 340,
  "elements": [
    { "type": "rect", "x": 270, "y": 30, "width": 300, "height": 90, "label": "CPU", "sublabel": "Muito rápida", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 14, "fontSize": 18, "fontWeight": "bold" },

    { "type": "rect", "x": 345, "y": 150, "width": 150, "height": 45, "label": "BARRAMENTO", "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2, "rounded": 8, "fontSize": 13 },

    { "type": "arrow", "from": { "x": 420, "y": 125 }, "to": { "x": 420, "y": 145 }, "stroke": "#f59e0b", "strokeWidth": 2, "bidirectional": true },

    { "type": "rect", "x": 270, "y": 225, "width": 300, "height": 90, "label": "MEMÓRIA", "sublabel": "Mais lenta", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 14, "fontSize": 18, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 420, "y": 200 }, "to": { "x": 420, "y": 220 }, "stroke": "#f59e0b", "strokeWidth": 2, "bidirectional": true },

    { "type": "rect", "x": 600, "y": 130, "width": 210, "height": 95, "label": "", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 12 },
    { "type": "text", "x": 705, "y": 160, "content": "PROBLEMA", "fontSize": 14, "color": "#991b1b", "fontWeight": "bold" },
    { "type": "text", "x": 705, "y": 190, "content": "A CPU espera", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 705, "y": 215, "content": "a memória responder", "fontSize": 13, "color": "#57534e" }
  ]
}
\`\`\`

### O problema em números

A CPU moderna é **extremamente rápida** — pode realizar bilhões de operações por segundo. Mas a memória RAM é **muito mais lenta** — cerca de 100 vezes mais lenta que a CPU.

| Componente        | Tempo de acesso típico |
| ----------------- | ---------------------- |
| Registrador (CPU) | ~1 nanosegundo         |
| Cache L1          | ~2-4 nanosegundos      |
| Cache L2          | ~10-20 nanosegundos    |
| Cache L3          | ~30-50 nanosegundos    |
| RAM               | ~100 nanosegundos      |
| SSD               | ~100 microssegundos    |
| HD                | ~10 milissegundos      |

> [!atencao] **A analogia do tempo:** Se um acesso ao registrador levasse 1 segundo no mundo humano, um acesso à RAM levaria quase 2 minutos, e um acesso ao HD levaria mais de **3 meses**.

### Por que isso é um "gargalo"?

No modelo de Von Neumann:

- A CPU precisa **buscar instruções** da memória
- A CPU precisa **buscar dados** da memória
- Ambos usam o **mesmo barramento**
- A CPU não pode fazer as duas coisas **ao mesmo tempo**

Enquanto espera a memória responder, a CPU fica ociosa — desperdiçando ciclos de processamento que poderiam estar fazendo trabalho útil.

\`\`\`diagram
{
  "title": "O tempo perdido esperando a memória",
  "width": 840,
  "height": 240,
  "elements": [
    { "type": "text", "x": 420, "y": 28, "content": "Linha do tempo de um ciclo (simplificado)", "fontSize": 15, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 40, "y": 55, "width": 90, "height": 50, "label": "Fetch", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 6, "fontSize": 12 },
    { "type": "rect", "x": 135, "y": 55, "width": 170, "height": 50, "label": "Esperando...", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 6, "fontSize": 12 },
    { "type": "rect", "x": 310, "y": 55, "width": 80, "height": 50, "label": "Decode", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 6, "fontSize": 12 },
    { "type": "rect", "x": 395, "y": 55, "width": 80, "height": 50, "label": "Execute", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 6, "fontSize": 12 },
    { "type": "rect", "x": 480, "y": 55, "width": 90, "height": 50, "label": "Store", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 6, "fontSize": 12 },
    { "type": "rect", "x": 575, "y": 55, "width": 220, "height": 50, "label": "Esperando memória...", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 6, "fontSize": 12 },

    { "type": "text", "x": 420, "y": 135, "content": "Legenda:", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 220, "y": 155, "width": 80, "height": 20, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 4 },
    { "type": "text", "x": 340, "y": 168, "content": "Trabalhando", "fontSize": 12, "color": "#059669" },

    { "type": "rect", "x": 420, "y": 155, "width": 80, "height": 20, "label": "", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 4 },
    { "type": "text", "x": 540, "y": 168, "content": "Esperando", "fontSize": 12, "color": "#dc2626" },

    { "type": "text", "x": 420, "y": 210, "content": "Grande parte do tempo a CPU fica ociosa, esperando a memória responder.", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

---

## Soluções para o gargalo

Os engenheiros de computação não aceitaram esse problema passivamente. Ao longo de décadas, desenvolveram várias técnicas para minimizar o gargalo.

### 1. Memória Cache

A solução mais importante: colocar uma **memória pequena e ultra-rápida** entre a CPU e a RAM. Essa memória é chamada de **cache**.

\`\`\`diagram
{
  "title": "Hierarquia de memória com cache",
  "width": 840,
  "height": 360,
  "elements": [
    { "type": "rect", "x": 320, "y": 25, "width": 200, "height": 65, "label": "CPU", "sublabel": "Registradores", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 12, "fontSize": 15, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 420, "y": 95 }, "to": { "x": 420, "y": 120 }, "stroke": "#a8a29e", "bidirectional": true },

    { "type": "rect", "x": 295, "y": 125, "width": 250, "height": 50, "label": "Cache L1", "sublabel": "~32KB, ~2ns", "fill": "#bfdbfe", "stroke": "#60a5fa", "rounded": 10, "fontSize": 13 },

    { "type": "arrow", "from": { "x": 420, "y": 180 }, "to": { "x": 420, "y": 200 }, "stroke": "#a8a29e", "bidirectional": true },

    { "type": "rect", "x": 270, "y": 205, "width": 300, "height": 50, "label": "Cache L2", "sublabel": "~256KB, ~15ns", "fill": "#93c5fd", "stroke": "#3b82f6", "rounded": 10, "fontSize": 13 },

    { "type": "arrow", "from": { "x": 420, "y": 260 }, "to": { "x": 420, "y": 280 }, "stroke": "#a8a29e", "bidirectional": true },

    { "type": "rect", "x": 220, "y": 285, "width": 400, "height": 50, "label": "RAM (Memória Principal)", "sublabel": "8-64GB, ~100ns", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 10, "fontSize": 13 },

    { "type": "text", "x": 680, "y": 150, "content": "Mais rápido", "fontSize": 12, "color": "#1e40af" },
    { "type": "text", "x": 680, "y": 175, "content": "Menor", "fontSize": 12, "color": "#1e40af" },
    { "type": "arrow", "from": { "x": 720, "y": 190 }, "to": { "x": 720, "y": 290 }, "stroke": "#78716c" },
    { "type": "text", "x": 680, "y": 305, "content": "Mais lento", "fontSize": 12, "color": "#065f46" },
    { "type": "text", "x": 680, "y": 330, "content": "Maior", "fontSize": 12, "color": "#065f46" }
  ]
}
\`\`\`

**Como funciona:**

- A CPU primeiro procura o dado no cache L1 (ultra-rápido)
- Se não encontrar (**cache miss**), procura no L2
- Se não encontrar, vai na RAM (lento)
- Quando encontra, copia para o cache para acessos futuros

> [!dica] **Por que funciona?** Programas tendem a acessar os mesmos dados repetidamente (**localidade temporal**) e dados próximos na memória (**localidade espacial**). O cache explora esses padrões.

### 2. Pipeline (Linha de montagem)

Em vez de esperar uma instrução terminar para começar a próxima, a CPU trabalha em **várias instruções simultaneamente**, em estágios diferentes.

\`\`\`diagram
{
  "title": "Pipeline: processamento em linha de montagem",
  "width": 840,
  "height": 420,
  "elements": [
    { "type": "text", "x": 420, "y": 25, "content": "Sem pipeline (sequencial)", "fontSize": 16, "color": "#991b1b", "fontWeight": "bold" },

    { "type": "text", "x": 70, "y": 55, "content": "Ciclo:", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 130, "y": 55, "content": "1", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 200, "y": 55, "content": "2", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 270, "y": 55, "content": "3", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 340, "y": 55, "content": "4", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 410, "y": 55, "content": "5", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 480, "y": 55, "content": "6", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 550, "y": 55, "content": "7", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 620, "y": 55, "content": "8", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 690, "y": 55, "content": "9", "fontSize": 11, "color": "#78716c" },

    { "type": "text", "x": 50, "y": 85, "content": "I1:", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },
    { "type": "rect", "x": 100, "y": 68, "width": 65, "height": 32, "label": "F", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 4, "fontSize": 12 },
    { "type": "rect", "x": 170, "y": 68, "width": 65, "height": 32, "label": "D", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 4, "fontSize": 12 },
    { "type": "rect", "x": 240, "y": 68, "width": 65, "height": 32, "label": "E", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 4, "fontSize": 12 },

    { "type": "text", "x": 50, "y": 120, "content": "I2:", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },
    { "type": "rect", "x": 310, "y": 103, "width": 65, "height": 32, "label": "F", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 4, "fontSize": 12 },
    { "type": "rect", "x": 380, "y": 103, "width": 65, "height": 32, "label": "D", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 4, "fontSize": 12 },
    { "type": "rect", "x": 450, "y": 103, "width": 65, "height": 32, "label": "E", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 4, "fontSize": 12 },

    { "type": "text", "x": 50, "y": 155, "content": "I3:", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },
    { "type": "rect", "x": 520, "y": 138, "width": 65, "height": 32, "label": "F", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 4, "fontSize": 12 },
    { "type": "rect", "x": 590, "y": 138, "width": 65, "height": 32, "label": "D", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 4, "fontSize": 12 },
    { "type": "rect", "x": 660, "y": 138, "width": 65, "height": 32, "label": "E", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 4, "fontSize": 12 },

    { "type": "text", "x": 770, "y": 115, "content": "9 ciclos", "fontSize": 13, "color": "#991b1b", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 70, "y": 195 }, "to": { "x": 770, "y": 195 }, "stroke": "#d6d3d1", "strokeWidth": 1, "dashed": true },

    { "type": "text", "x": 420, "y": 220, "content": "Com pipeline (sobreposição)", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },

    { "type": "text", "x": 70, "y": 250, "content": "Ciclo:", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 130, "y": 250, "content": "1", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 200, "y": 250, "content": "2", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 270, "y": 250, "content": "3", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 340, "y": 250, "content": "4", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 410, "y": 250, "content": "5", "fontSize": 11, "color": "#78716c" },

    { "type": "text", "x": 50, "y": 280, "content": "I1:", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },
    { "type": "rect", "x": 100, "y": 263, "width": 65, "height": 32, "label": "F", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 4, "fontSize": 12 },
    { "type": "rect", "x": 170, "y": 263, "width": 65, "height": 32, "label": "D", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 4, "fontSize": 12 },
    { "type": "rect", "x": 240, "y": 263, "width": 65, "height": 32, "label": "E", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 4, "fontSize": 12 },

    { "type": "text", "x": 50, "y": 315, "content": "I2:", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },
    { "type": "rect", "x": 170, "y": 298, "width": 65, "height": 32, "label": "F", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 4, "fontSize": 12 },
    { "type": "rect", "x": 240, "y": 298, "width": 65, "height": 32, "label": "D", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 4, "fontSize": 12 },
    { "type": "rect", "x": 310, "y": 298, "width": 65, "height": 32, "label": "E", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 4, "fontSize": 12 },

    { "type": "text", "x": 50, "y": 350, "content": "I3:", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },
    { "type": "rect", "x": 240, "y": 333, "width": 65, "height": 32, "label": "F", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 4, "fontSize": 12 },
    { "type": "rect", "x": 310, "y": 333, "width": 65, "height": 32, "label": "D", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 4, "fontSize": 12 },
    { "type": "rect", "x": 380, "y": 333, "width": 65, "height": 32, "label": "E", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 4, "fontSize": 12 },

    { "type": "text", "x": 770, "y": 310, "content": "5 ciclos", "fontSize": 13, "color": "#065f46", "fontWeight": "bold" },

    { "type": "rect", "x": 530, "y": 280, "width": 180, "height": 70, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 10 },
    { "type": "text", "x": 620, "y": 305, "content": "Quase 2x", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 620, "y": 330, "content": "mais rápido!", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },

    { "type": "text", "x": 420, "y": 400, "content": "F = Fetch (buscar)  •  D = Decode (decodificar)  •  E = Execute (executar)", "fontSize": 12, "color": "#78716c" }
  ]
}
\`\`\`

> [!nota] **Analogia da lavanderia:** Sem pipeline, você lava, seca e dobra uma roupa antes de começar a próxima. Com pipeline, enquanto uma está secando, outra está lavando — você sobrepõe as etapas.

### 3. Múltiplos Núcleos (Multi-core)

Em vez de um único processador tentando fazer tudo, os computadores modernos têm **vários processadores (núcleos)** trabalhando em paralelo.

\`\`\`diagram
{
  "title": "Processador multi-core",
  "width": 840,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 120, "y": 30, "width": 600, "height": 195, "label": "", "fill": "#f5f5f4", "stroke": "#78716c", "rounded": 14 },
    { "type": "text", "x": 420, "y": 60, "content": "Processador Moderno (ex: Intel Core i7)", "fontSize": 15, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 150, "y": 85, "width": 130, "height": 120, "label": "Core 1", "sublabel": "CPU completa", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 10, "fontSize": 13, "fontWeight": "bold" },
    { "type": "rect", "x": 295, "y": 85, "width": 130, "height": 120, "label": "Core 2", "sublabel": "CPU completa", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 10, "fontSize": 13, "fontWeight": "bold" },
    { "type": "rect", "x": 440, "y": 85, "width": 130, "height": 120, "label": "Core 3", "sublabel": "CPU completa", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 10, "fontSize": 13, "fontWeight": "bold" },
    { "type": "rect", "x": 585, "y": 85, "width": 130, "height": 120, "label": "Core 4", "sublabel": "CPU completa", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 10, "fontSize": 13, "fontWeight": "bold" },

    { "type": "text", "x": 420, "y": 245, "content": "Cada núcleo pode executar um programa diferente simultaneamente", "fontSize": 13, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

| Ano  | Processador típico     | Núcleos |
| ---- | ---------------------- | ------- |
| 1995 | Pentium                | 1       |
| 2006 | Core 2 Duo             | 2       |
| 2010 | Core i7                | 4       |
| 2020 | Ryzen 9                | 12-16   |
| 2024 | Apple M3 Max / Ryzen 9 | 12-16+  |

---

## Arquiteturas alternativas

A arquitetura de Von Neumann não é a única possível. Existem modelos alternativos projetados para evitar suas limitações.

### Arquitetura Harvard

Na **Arquitetura Harvard**, instruções e dados ficam em **memórias separadas**, com **barramentos separados**.

\`\`\`diagram
{
  "title": "Von Neumann vs Harvard",
  "width": 840,
  "height": 340,
  "elements": [
    { "type": "rect", "x": 30, "y": 30, "width": 385, "height": 280, "label": "", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 16 },
    { "type": "text", "x": 222, "y": 60, "content": "Von Neumann", "fontSize": 18, "color": "#991b1b", "fontWeight": "bold" },

    { "type": "rect", "x": 147, "y": 85, "width": 150, "height": 55, "label": "CPU", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 10, "fontSize": 14, "fontWeight": "bold" },

    { "type": "rect", "x": 177, "y": 160, "width": 90, "height": 28, "label": "1 barramento", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 6, "fontSize": 11 },
    { "type": "arrow", "from": { "x": 222, "y": 145 }, "to": { "x": 222, "y": 155 }, "stroke": "#f59e0b", "bidirectional": true },
    { "type": "arrow", "from": { "x": 222, "y": 193 }, "to": { "x": 222, "y": 210 }, "stroke": "#f59e0b", "bidirectional": true },

    { "type": "rect", "x": 97, "y": 215, "width": 250, "height": 80, "label": "Memória Única", "sublabel": "Dados + Instruções", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 10, "fontSize": 13, "fontWeight": "bold" },

    { "type": "rect", "x": 425, "y": 30, "width": 385, "height": 280, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 16 },
    { "type": "text", "x": 617, "y": 60, "content": "Harvard", "fontSize": 18, "color": "#065f46", "fontWeight": "bold" },

    { "type": "rect", "x": 542, "y": 85, "width": 150, "height": 55, "label": "CPU", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 10, "fontSize": 14, "fontWeight": "bold" },

    { "type": "rect", "x": 460, "y": 160, "width": 75, "height": 28, "label": "Bus Inst", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 6, "fontSize": 10 },
    { "type": "rect", "x": 700, "y": 160, "width": 75, "height": 28, "label": "Bus Data", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 6, "fontSize": 10 },

    { "type": "line", "from": { "x": 567, "y": 145 }, "to": { "x": 498, "y": 145 }, "stroke": "#f59e0b" },
    { "type": "arrow", "from": { "x": 498, "y": 145 }, "to": { "x": 498, "y": 155 }, "stroke": "#f59e0b" },
    { "type": "line", "from": { "x": 667, "y": 145 }, "to": { "x": 738, "y": 145 }, "stroke": "#f59e0b" },
    { "type": "arrow", "from": { "x": 738, "y": 145 }, "to": { "x": 738, "y": 155 }, "stroke": "#f59e0b" },
    { "type": "arrow", "from": { "x": 498, "y": 193 }, "to": { "x": 498, "y": 210 }, "stroke": "#f59e0b", "bidirectional": true },
    { "type": "arrow", "from": { "x": 738, "y": 193 }, "to": { "x": 738, "y": 210 }, "stroke": "#f59e0b", "bidirectional": true },

    { "type": "rect", "x": 450, "y": 215, "width": 115, "height": 80, "label": "Mem Inst", "sublabel": "Instruções", "fill": "#a7f3d0", "stroke": "#34d399", "rounded": 10, "fontSize": 12 },
    { "type": "rect", "x": 670, "y": 215, "width": 115, "height": 80, "label": "Mem Data", "sublabel": "Dados", "fill": "#bbf7d0", "stroke": "#4ade80", "rounded": 10, "fontSize": 12 }
  ]
}
\`\`\`

**Vantagens de Harvard:**

- CPU pode buscar instrução e dado **ao mesmo tempo** (sem gargalo)
- Maior segurança — não dá para executar dados como código acidentalmente

**Desvantagens:**

- Hardware mais complexo e caro
- Menos flexível — memória de instrução não pode virar memória de dados

> [!nota] **Onde é usada:** Microcontroladores (Arduino, PIC, AVR) usam arquitetura Harvard. É ideal para sistemas embarcados com tarefas bem definidas.

### Harvard Modificada

Os processadores modernos (Intel, AMD, ARM) usam um **híbrido**: a nível de cache, comportam-se como Harvard (caches separados para instruções e dados), mas a nível de RAM, comportam-se como Von Neumann (memória unificada).

\`\`\`diagram
{
  "title": "Harvard Modificada (processadores modernos)",
  "width": 840,
  "height": 400,
  "elements": [
    { "type": "rect", "x": 320, "y": 20, "width": 200, "height": 50, "label": "CPU", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 12, "fontSize": 15, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 370, "y": 75 }, "to": { "x": 370, "y": 95 }, "stroke": "#3b82f6", "bidirectional": true },
    { "type": "arrow", "from": { "x": 470, "y": 75 }, "to": { "x": 470, "y": 95 }, "stroke": "#10b981", "bidirectional": true },

    { "type": "rect", "x": 270, "y": 100, "width": 130, "height": 55, "label": "Cache L1-I", "sublabel": "Instruções", "fill": "#bfdbfe", "stroke": "#60a5fa", "rounded": 10, "fontSize": 12 },
    { "type": "rect", "x": 440, "y": 100, "width": 130, "height": 55, "label": "Cache L1-D", "sublabel": "Dados", "fill": "#a7f3d0", "stroke": "#34d399", "rounded": 10, "fontSize": 12 },

    { "type": "rect", "x": 600, "y": 85, "width": 130, "height": 85, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 10 },
    { "type": "text", "x": 665, "y": 110, "content": "HARVARD", "fontSize": 11, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 665, "y": 130, "content": "Caches separados", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 665, "y": 150, "content": "= acesso paralelo", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 200, "y": 175 }, "to": { "x": 640, "y": 175 }, "stroke": "#a78bfa", "strokeWidth": 2, "dashed": true },

    { "type": "arrow", "from": { "x": 335, "y": 160 }, "to": { "x": 335, "y": 195 }, "stroke": "#a78bfa", "bidirectional": true },
    { "type": "arrow", "from": { "x": 505, "y": 160 }, "to": { "x": 505, "y": 195 }, "stroke": "#a78bfa", "bidirectional": true },

    { "type": "rect", "x": 270, "y": 200, "width": 300, "height": 50, "label": "Cache L2 / L3 (Unificado)", "fill": "#ddd6fe", "stroke": "#a78bfa", "rounded": 10, "fontSize": 13 },

    { "type": "arrow", "from": { "x": 420, "y": 255 }, "to": { "x": 420, "y": 285 }, "stroke": "#78716c", "bidirectional": true },

    { "type": "rect", "x": 220, "y": 290, "width": 400, "height": 55, "label": "RAM (Memória Principal)", "sublabel": "Dados + Instruções juntos", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 10, "fontSize": 13, "fontWeight": "bold" },

    { "type": "rect", "x": 600, "y": 200, "width": 130, "height": 145, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 10 },
    { "type": "text", "x": 665, "y": 230, "content": "VON NEUMANN", "fontSize": 11, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 665, "y": 255, "content": "Memória unificada", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 665, "y": 275, "content": "= flexibilidade", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 665, "y": 295, "content": "= programas podem", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 665, "y": 315, "content": "  modificar-se", "fontSize": 10, "color": "#78716c" },

    { "type": "text", "x": 420, "y": 375, "content": "O melhor dos dois mundos: velocidade no cache, flexibilidade na RAM", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

Isso combina o **melhor dos dois mundos**: velocidade de Harvard onde mais importa (cache) e flexibilidade de Von Neumann na memória principal.

---

## Outras evoluções importantes

### Previsão de desvio (Branch Prediction)

Quando o programa tem um \`if\`, a CPU não sabe qual caminho seguir até executar a condição. Para evitar parar o pipeline, processadores modernos **adivinham** o resultado e começam a executar antecipadamente.

\`\`\`diagram
{
  "title": "Branch Prediction",
  "width": 840,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 30, "y": 30, "width": 260, "height": 155, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 160, "y": 60, "content": "Código com IF", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 55, "y": 95, "content": "if (x > 10)", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 55, "y": 120, "content": "    faz_algo();", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 55, "y": 145, "content": "else", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 55, "y": 170, "content": "    faz_outra_coisa();", "fontSize": 13, "color": "#57534e", "align": "left" },

    { "type": "arrow", "from": { "x": 300, "y": 108 }, "to": { "x": 340, "y": 108 }, "stroke": "#a8a29e" },

    { "type": "rect", "x": 350, "y": 30, "width": 230, "height": 155, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 465, "y": 60, "content": "CPU prevê", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 375, "y": 95, "content": "\\"Provavelmente x > 10\\"", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 375, "y": 125, "content": "Começa a executar", "fontSize": 13, "color": "#57534e", "align": "left" },
    { "type": "text", "x": 375, "y": 155, "content": "faz_algo() antecipadamente", "fontSize": 13, "color": "#57534e", "align": "left" },

    { "type": "arrow", "from": { "x": 590, "y": 108 }, "to": { "x": 630, "y": 108 }, "stroke": "#a8a29e" },

    { "type": "rect", "x": 640, "y": 30, "width": 175, "height": 155, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 727, "y": 60, "content": "Resultado", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 665, "y": 100, "content": "✓ Acertou: continua", "fontSize": 13, "color": "#059669", "align": "left" },
    { "type": "text", "x": 665, "y": 135, "content": "✗ Errou: descarta e", "fontSize": 13, "color": "#dc2626", "align": "left" },
    { "type": "text", "x": 665, "y": 160, "content": "   recomeça", "fontSize": 13, "color": "#dc2626", "align": "left" }
  ]
}
\`\`\`

Processadores modernos acertam a previsão em **90-99%** dos casos!

### Execução Fora de Ordem (Out-of-Order Execution)

Se uma instrução está esperando um dado da memória, a CPU não fica parada — ela executa **outras instruções** que estão prontas, e depois coloca os resultados na ordem correta.

### Hyperthreading / SMT

Cada núcleo físico pode simular **dois núcleos lógicos**, aproveitando momentos de ociosidade para processar outra thread.

---

## O legado de Von Neumann

Apesar de todas as otimizações, a **essência do modelo de Von Neumann permanece**:

1. ✓ Programa armazenado na memória
2. ✓ Execução sequencial de instruções
3. ✓ Dados e instruções como sequências de bits
4. ✓ CPU buscando, decodificando e executando

As inovações (cache, pipeline, multi-core) são **otimizações** que não mudam o modelo fundamental — apenas tentam esconder suas limitações.

\`\`\`diagram
{
  "title": "80 anos de evolução",
  "width": 840,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 35, "y": 45, "width": 155, "height": 110, "label": "1945", "sublabel": "Von Neumann", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12, "fontSize": 16, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 195, "y": 100 }, "to": { "x": 235, "y": 100 }, "stroke": "#a8a29e" },

    { "type": "rect", "x": 240, "y": 45, "width": 155, "height": 110, "label": "1980s", "sublabel": "Cache + Pipeline", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12, "fontSize": 16, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 400, "y": 100 }, "to": { "x": 440, "y": 100 }, "stroke": "#a8a29e" },

    { "type": "rect", "x": 445, "y": 45, "width": 155, "height": 110, "label": "2000s", "sublabel": "Multi-core", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12, "fontSize": 16, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 605, "y": 100 }, "to": { "x": 645, "y": 100 }, "stroke": "#a8a29e" },

    { "type": "rect", "x": 650, "y": 45, "width": 155, "height": 110, "label": "2020s", "sublabel": "Aceleradores (GPU, TPU)", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 12, "fontSize": 16, "fontWeight": "bold" },

    { "type": "text", "x": 420, "y": 180, "content": "O modelo base continua o mesmo — as otimizações é que evoluíram", "fontSize": 13, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

> [!dica] **O futuro:** Computadores quânticos e neuromórficos representam modelos fundamentalmente diferentes. Mas, por enquanto, o modelo de Von Neumann continua sendo a base de praticamente todos os computadores do mundo.

---

## Recapitulando

| Conceito                   | Descrição                                                    |
| -------------------------- | ------------------------------------------------------------ |
| **Gargalo de Von Neumann** | CPU espera memória; dados e instruções disputam o barramento |
| **Cache**                  | Memória pequena e rápida que guarda dados frequentes         |
| **Pipeline**               | Sobreposição de etapas — várias instruções em progresso      |
| **Multi-core**             | Vários processadores em paralelo                             |
| **Arquitetura Harvard**    | Memórias separadas para dados e instruções                   |
| **Harvard Modificada**     | Harvard no cache, Von Neumann na RAM — o melhor dos dois     |
| **Branch Prediction**      | CPU adivinha o resultado de condicionais                     |

---

## Exercícios de Fixação

1. Explique com suas palavras o que é o "gargalo de Von Neumann" e por que ele é um problema.

2. Como a memória cache ajuda a minimizar o gargalo? Por que não usamos apenas cache (sem RAM)?

3. Desenhe (ou descreva) a diferença entre as arquiteturas Von Neumann e Harvard. Cite uma vantagem de cada uma.

4. O que é pipeline? Use a analogia da lavanderia para explicar como ele melhora o desempenho.

5. Pesquise: o que são processadores neuromórficos? Em que eles diferem fundamentalmente do modelo de Von Neumann?

6. Um processador moderno tem cache L1 de instruções e cache L1 de dados separados. Isso é mais parecido com Von Neumann ou Harvard? Por quê?`,headings:[{level:2,text:"O gargalo de Von Neumann",id:"o-gargalo-de-von-neumann"},{level:3,text:"O problema em números",id:"o-problema-em-números"},{level:3,text:'Por que isso é um "gargalo"?',id:"por-que-isso-é-um-gargalo"},{level:2,text:"Soluções para o gargalo",id:"soluções-para-o-gargalo"},{level:3,text:"1. Memória Cache",id:"1-memória-cache"},{level:3,text:"2. Pipeline (Linha de montagem)",id:"2-pipeline-linha-de-montagem"},{level:3,text:"3. Múltiplos Núcleos (Multi-core)",id:"3-múltiplos-núcleos-multi-core"},{level:2,text:"Arquiteturas alternativas",id:"arquiteturas-alternativas"},{level:3,text:"Arquitetura Harvard",id:"arquitetura-harvard"},{level:3,text:"Harvard Modificada",id:"harvard-modificada"},{level:2,text:"Outras evoluções importantes",id:"outras-evoluções-importantes"},{level:3,text:"Previsão de desvio (Branch Prediction)",id:"previsão-de-desvio-branch-prediction"},{level:3,text:"Execução Fora de Ordem (Out-of-Order Execution)",id:"execução-fora-de-ordem-out-of-order-execution"},{level:3,text:"Hyperthreading / SMT",id:"hyperthreading--smt"},{level:2,text:"O legado de Von Neumann",id:"o-legado-de-von-neumann"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"arquitetura-von-neumann/o-problema-do-eniac":{title:"O Problema do ENIAC",description:"Por que o computador mais poderoso de 1946 tinha uma falha fundamental — e como isso motivou uma revolução na computação.",duration:"1 aula",order:999,category:"arquitetura-von-neumann",content:`# O Problema do ENIAC

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

\`\`\`diagram
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
\`\`\`

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

5. O que você acha que motivou Von Neumann a se interessar pelo problema do ENIAC? Que tipo de trabalho ele fazia em Los Alamos que poderia se beneficiar de computadores flexíveis?`,headings:[{level:2,text:"Além dos números: o que significava operar o ENIAC",id:"além-dos-números-o-que-significava-operar-o-eniac"},{level:2,text:"O ritual de programação",id:"o-ritual-de-programação"},{level:2,text:"As mulheres por trás da máquina",id:"as-mulheres-por-trás-da-máquina"},{level:2,text:"A raiz do problema",id:"a-raiz-do-problema"},{level:2,text:"Por que isso importava tanto?",id:"por-que-isso-importava-tanto"},{level:2,text:"O cenário em 1944-1945",id:"o-cenário-em-1944-1945"},{level:2,text:"O que vem a seguir",id:"o-que-vem-a-seguir"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"componentes-do-computador/introducao":{title:"Introdução: O Computador por Dentro",description:"Uma visão geral dos componentes do computador e por que entender o hardware importa na prática.",duration:"1 aula",order:999,category:"componentes-do-computador",content:`# O Computador por Dentro

Você usa um computador todos os dias — talvez um laptop, um celular ou até mesmo um videogame. Mas você já se perguntou **o que tem dentro** dessa máquina que parece fazer "mágica"?

Nesta aula, vamos abrir o capô do computador juntos.

---

## Por que aprender sobre componentes?

Existe um ditado que diz: *"Para dirigir, não precisa saber como o motor funciona."* E é verdade — você pode usar o computador sem saber o que tem dentro dele.

Mas imagine as vantagens de entender:

- **Resolver problemas sozinho** — quando o computador fica lento, você sabe o que verificar
- **Tomar decisões de compra** — entender as especificações técnicas na hora de comprar um PC ou celular
- **Programar melhor** — escrever código que aproveita bem a memória e o processador
- **Carreira** — conhecimento de hardware é fundamental para várias áreas de TI

> [!dica] **Reflect:** Pense no seu computador ou celular atual. Quais especificações você conhece? Processador, memória, armazenamento?

---

## A visão geral: o computador é um sistema

Um computador é formado por peças que trabalham juntas. Podemos pensar nele como uma pequena cidade:

\`\`\`diagram
{
  "title": "O computador como uma cidade",
  "width": 800,
  "height": 480,
  "elements": [
    { "type": "rect", "x": 280, "y": 30, "width": 240, "height": 80, "label": "CPU", "sublabel": "O cérebro que processa tudo", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 12, "fontSize": 16, "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 150, "y": 160 }, "to": { "x": 650, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 3 },
    { "type": "text", "x": 400, "y": 180, "content": "BARRAMENTOS (as estradas)", "fontSize": 11, "color": "#b45309", "fontWeight": "bold" },

    { "type": "rect", "x": 50, "y": 200, "width": 200, "height": 90, "label": "MEMÓRIA (RAM)", "sublabel": "A mesa de trabalho", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12, "fontSize": 14 },
    { "type": "rect", "x": 300, "y": 200, "width": 200, "height": 90, "label": "ARMAZENAMENTO", "sublabel": "A estante de arquivos", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12, "fontSize": 14 },
    { "type": "rect", "x": 550, "y": 200, "width": 200, "height": 90, "label": "DISPOSITIVOS E/S", "sublabel": "As portas de entrada/saída", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12, "fontSize": 14 },

    { "type": "rect", "x": 50, "y": 340, "width": 700, "height": 80, "label": "PLACA-MÃE", "sublabel": "A cidade inteira — onde tudo está conectado", "fill": "#f3f4f6", "stroke": "#6b7280", "rounded": 12, "fontSize": 14 },

    { "type": "text", "x": 400, "y": 450, "content": "Cada parte tem uma função específica — vamos explorar cada uma em detalhe.", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

---

## As partes que vamos explorar

Ao longo deste módulo, vamos estudar cada componente em detalhe:

| Componente | O que faz | Analogia |
| ---------- | --------- | -------- |
| **CPU** | Executa instruções e processa dados | O cérebro |
| **Memória RAM** | Armazena dados temporários enquanto usa | A mesa de trabalho |
| **Armazenamento** | Guarda dados permanentemente | A estante de arquivos |
| **Dispositivos de E/S** | Permite interação (teclado, mouse, monitor) | As janelas e portas |
| **Barramentos** | Conecta tudo e permite comunicação | As estradas |

---

## Na prática: o que você tem no seu computador?

Vamos fazer um exercício prático. Se você está usando um computador agora:

**Windows:**
1. Clique com botão direito no menu Iniciar
2. Selecione "Gerenciador de Dispositivos"
3. Veja os componentes detectados

**macOS:**
1. Clique no menu Apple
2. Selecione "Sobre este Mac"
3. Veja Processador, Memória, etc.

**Linux:**
1. Abra o terminal
2. Digite \`lshw\` ou \`neofetch\`

> [!desafio] **Sua vez:** Anote as especificações do seu computador: processador, quantidade de RAM, tipo de armazenamento. Isso vai ajudar a conectar a teoria com a prática!

---

## O que vem depois

Agora que temos uma visão geral, vamos mergulhar em cada componente. O próximo passo é entender o **processador (CPU)** — o cérebro do computador.`,headings:[{level:2,text:"Por que aprender sobre componentes?",id:"por-que-aprender-sobre-componentes"},{level:2,text:"A visão geral: o computador é um sistema",id:"a-visão-geral-o-computador-é-um-sistema"},{level:2,text:"As partes que vamos explorar",id:"as-partes-que-vamos-explorar"},{level:2,text:"Na prática: o que você tem no seu computador?",id:"na-prática-o-que-você-tem-no-seu-computador"},{level:2,text:"O que vem depois",id:"o-que-vem-depois"}]},"introducao-aoc/arquitetura-von-neumann":{title:"A Arquitetura de Von Neumann",description:"Como o ENIAC revelou um problema fundamental e Von Neumann propôs a solução que define os computadores até hoje.",duration:"1 aula",order:999,category:"introducao-aoc",content:`# A Arquitetura de Von Neumann

Na aula anterior, vimos que o ENIAC foi um marco — o primeiro computador eletrônico de grande escala. Mas ele tinha um problema sério. Tão sério que motivou uma das ideias mais importantes da história da computação.

---

## O problema do ENIAC

O ENIAC era poderoso para sua época: 5.000 somas por segundo, algo inimaginável antes de 1946. Mas tinha uma falha fundamental na forma como era **programado**.

\`\`\`diagram
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
\`\`\`

O ENIAC executava cálculos em **segundos**, mas trocar o programa levava **dias**. Imagine uma calculadora que faz contas instantaneamente, mas que precisa ser desmontada e remontada toda vez que você quer mudar de operação. Era impraticável.

> [!nota] **O cerne do problema:** No ENIAC, o programa era hardware — cabos e chaves. Para mudar o que a máquina fazia, era preciso mudar fisicamente a máquina. Dados ficavam na memória, mas instruções ficavam na fiação.

---

## A grande ideia de Von Neumann

Em 1945, o matemático húngaro-americano **John von Neumann** publicou o documento _"First Draft of a Report on the EDVAC"_, que propunha uma solução elegante:

**E se o programa fosse armazenado na memória, junto com os dados?**

Essa ideia, aparentemente simples, mudou tudo. É o conceito de **programa armazenado** (_stored-program computer_).

\`\`\`diagram
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
\`\`\`

> [!dica] **Analogia:** Imagine dois tipos de rádio. O antigo é como o ENIAC: para mudar de estação, você precisa abrir o rádio e trocar os fios internos. O rádio moderno é como Von Neumann propôs: você simplesmente gira o dial — a "instrução" de qual estação sintonizar já está no mesmo sistema que processa o som.

---

## O modelo proposto

Von Neumann organizou o computador em **cinco blocos funcionais**: uma unidade de processamento (CPU), uma memória que guarda dados **e** instruções, dispositivos de entrada, dispositivos de saída e barramentos conectando tudo.

\`\`\`diagram
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
\`\`\`

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

\`\`\`diagram
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
\`\`\`

---

## Por que isso importa até hoje?

A arquitetura de Von Neumann foi proposta em 1945 e **todo computador que você usa hoje** — seu notebook, celular, smartwatch, o servidor que hospeda seus sites — segue os mesmos princípios fundamentais.

\`\`\`diagram
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
\`\`\`

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

5. A Arquitetura Harvard separa memória de dados e memória de instruções. Que vantagem isso traz sobre Von Neumann? Por que mesmo assim a maioria dos computadores usa Von Neumann?`,headings:[{level:2,text:"O problema do ENIAC",id:"o-problema-do-eniac"},{level:2,text:"A grande ideia de Von Neumann",id:"a-grande-ideia-de-von-neumann"},{level:2,text:"O modelo proposto",id:"o-modelo-proposto"},{level:2,text:"Os princípios fundamentais",id:"os-princípios-fundamentais"},{level:3,text:"1. Programa armazenado na memória",id:"1-programa-armazenado-na-memória"},{level:3,text:"2. Execução sequencial",id:"2-execução-sequencial"},{level:3,text:"3. Memória endereçável",id:"3-memória-endereçável"},{level:3,text:"4. Dados em binário",id:"4-dados-em-binário"},{level:2,text:"De onde veio o EDVAC",id:"de-onde-veio-o-edvac"},{level:2,text:"Por que isso importa até hoje?",id:"por-que-isso-importa-até-hoje"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"introducao-aoc/arquitetura-vs-organizacao":{title:"Arquitetura vs Organização",description:"Qual a diferença entre Arquitetura e Organização de computadores? Entenda essa distinção fundamental.",duration:"1 aula",order:999,category:"introducao-aoc",content:`# Arquitetura vs Organização

Você usa um computador todos os dias. Abre o navegador, escuta música, joga, programa. Mas já parou para pensar: **o que acontece lá dentro quando você clica em algo?**

Nesta primeira parte, vamos entender a diferença mais fundamental da disciplina.

---

## Duas palavras, dois significados

Essas duas palavras aparecem sempre juntas no nome da disciplina, mas significam coisas **diferentes**. Entender essa diferença é o primeiro passo para pensar como um engenheiro de computação.

### O que é Arquitetura?

Arquitetura é tudo aquilo que o **programador precisa saber** para escrever programas que funcionem na máquina. São as regras do jogo.

Por exemplo:

- Quais instruções o processador entende? (\`ADD\`, \`MOV\`, \`JUMP\`...)
- Quantos bits tem uma "palavra" de dados? (32 bits? 64 bits?)
- Como o programa acessa a memória?
- Quais registradores estão disponíveis?

> [!dica] **Pense assim:** A arquitetura é o **manual do usuário** do processador. É o "contrato" entre quem projeta o hardware e quem escreve o software.

### O que é Organização?

Organização é **como o hardware implementa** aquela arquitetura por dentro. São as decisões de engenharia.

Por exemplo:

- Qual a velocidade do clock?
- Quantos estágios tem o pipeline?
- Qual o tamanho da memória cache?
- Como os circuitos internos são conectados?

> [!dica] **Pense assim:** A organização é o **manual do mecânico**. É o que está por baixo do capô.

---

## A analogia do carro

Essa é a forma mais simples de entender:

\`\`\`diagram
{
  "title": "Arquitetura vs Organização — A analogia do carro",
  "width": 800,
  "height": 430,
  "elements": [
    { "type": "bracket", "x": 20, "y": 20, "width": 360, "height": 390, "label": "ARQUITETURA", "stroke": "#3b82f6", "fill": "#eff6ff", "dashed": false },
    { "type": "bracket", "x": 420, "y": 20, "width": 360, "height": 390, "label": "ORGANIZAÇÃO", "stroke": "#10b981", "fill": "#ecfdf5", "dashed": false },

    { "type": "text", "x": 200, "y": 58, "content": "O que o motorista vê", "fontSize": 12, "color": "#3b82f6", "fontStyle": "italic" },
    { "type": "text", "x": 600, "y": 58, "content": "O que o mecânico vê", "fontSize": 12, "color": "#10b981", "fontStyle": "italic" },

    { "type": "rect", "x": 50, "y": 80, "width": 300, "height": 44, "label": "Volante", "fill": "#dbeafe", "stroke": "#93c5fd", "rounded": 8, "fontSize": 14, "fontWeight": "normal" },
    { "type": "rect", "x": 450, "y": 80, "width": 300, "height": 44, "label": "Sistema de direção hidráulica", "fill": "#d1fae5", "stroke": "#6ee7b7", "rounded": 8, "fontSize": 14, "fontWeight": "normal" },

    { "type": "rect", "x": 50, "y": 142, "width": 300, "height": 44, "label": "Pedal do acelerador", "fill": "#dbeafe", "stroke": "#93c5fd", "rounded": 8, "fontSize": 14, "fontWeight": "normal" },
    { "type": "rect", "x": 450, "y": 142, "width": 300, "height": 44, "label": "Motor + injeção eletrônica", "fill": "#d1fae5", "stroke": "#6ee7b7", "rounded": 8, "fontSize": 14, "fontWeight": "normal" },

    { "type": "rect", "x": 50, "y": 204, "width": 300, "height": 44, "label": "Painel de instrumentos", "fill": "#dbeafe", "stroke": "#93c5fd", "rounded": 8, "fontSize": 14, "fontWeight": "normal" },
    { "type": "rect", "x": 450, "y": 204, "width": 300, "height": 44, "label": "Sensores e fiação elétrica", "fill": "#d1fae5", "stroke": "#6ee7b7", "rounded": 8, "fontSize": 14, "fontWeight": "normal" },

    { "type": "rect", "x": 50, "y": 266, "width": 300, "height": 44, "label": "Câmbio (1ª, 2ª, 3ª...)", "fill": "#dbeafe", "stroke": "#93c5fd", "rounded": 8, "fontSize": 14, "fontWeight": "normal" },
    { "type": "rect", "x": 450, "y": 266, "width": 300, "height": 44, "label": "Engrenagens e eixos", "fill": "#d1fae5", "stroke": "#6ee7b7", "rounded": 8, "fontSize": 14, "fontWeight": "normal" },

    { "type": "rect", "x": 50, "y": 328, "width": 300, "height": 44, "label": "Chave de ignição", "fill": "#dbeafe", "stroke": "#93c5fd", "rounded": 8, "fontSize": 14, "fontWeight": "normal" },
    { "type": "rect", "x": 450, "y": 328, "width": 300, "height": 44, "label": "Sistema de partida", "fill": "#d1fae5", "stroke": "#6ee7b7", "rounded": 8, "fontSize": 14, "fontWeight": "normal" },

    { "type": "arrow", "from": { "x": 355, "y": 102 }, "to": { "x": 445, "y": 102 }, "stroke": "#a8a29e", "dashed": true },
    { "type": "arrow", "from": { "x": 355, "y": 164 }, "to": { "x": 445, "y": 164 }, "stroke": "#a8a29e", "dashed": true },
    { "type": "arrow", "from": { "x": 355, "y": 226 }, "to": { "x": 445, "y": 226 }, "stroke": "#a8a29e", "dashed": true },
    { "type": "arrow", "from": { "x": 355, "y": 288 }, "to": { "x": 445, "y": 288 }, "stroke": "#a8a29e", "dashed": true },
    { "type": "arrow", "from": { "x": 355, "y": 350 }, "to": { "x": 445, "y": 350 }, "stroke": "#a8a29e", "dashed": true }
  ]
}
\`\`\`

O motorista **não precisa saber** como o motor funciona para dirigir. Ele só precisa conhecer a interface: volante, pedais, marchas.

Da mesma forma, o programador **não precisa saber** se o processador tem 14 ou 20 estágios de pipeline. Ele só precisa saber quais instruções usar.

---

## Por que isso importa?

Porque dois processadores podem ter a **mesma arquitetura** mas **organizações completamente diferentes**.

| Processador          | Arquitetura | Clock   | Núcleos | Cache L3 |
| -------------------- | ----------- | ------- | ------- | -------- |
| Intel Core i5-13400  | x86-64      | 4.6 GHz | 10      | 20 MB    |
| Intel Core i9-14900K | x86-64      | 6.0 GHz | 24      | 36 MB    |
| AMD Ryzen 5 7600     | x86-64      | 5.1 GHz | 6       | 32 MB    |

Todos entendem as **mesmas instruções** (arquitetura x86-64). Mas por dentro são máquinas muito diferentes (organização). Um programa compilado para x86-64 roda em **qualquer um** deles.

\`\`\`diagram
{
  "title": "Mesma arquitetura, organizações diferentes",
  "width": 750,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 225, "y": 15, "width": 300, "height": 44, "label": "Arquitetura x86-64", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 20, "fontSize": 15, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 295, "y": 64 }, "to": { "x": 140, "y": 100 }, "stroke": "#a8a29e" },
    { "type": "arrow", "from": { "x": 375, "y": 64 }, "to": { "x": 375, "y": 100 }, "stroke": "#a8a29e" },
    { "type": "arrow", "from": { "x": 455, "y": 64 }, "to": { "x": 610, "y": 100 }, "stroke": "#a8a29e" },

    { "type": "rect", "x": 40, "y": 105, "width": 200, "height": 65, "label": "Core i5-13400", "sublabel": "10 núcleos · 4.6 GHz", "fill": "#f0fdf4", "stroke": "#22c55e", "rounded": 10 },
    { "type": "rect", "x": 275, "y": 105, "width": 200, "height": 65, "label": "Core i9-14900K", "sublabel": "24 núcleos · 6.0 GHz", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "rect", "x": 510, "y": 105, "width": 200, "height": 65, "label": "Ryzen 5 7600", "sublabel": "6 núcleos · 5.1 GHz", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 10 },

    { "type": "text", "x": 140, "y": 198, "content": "Organização A", "fontSize": 11, "color": "#22c55e", "fontWeight": "600" },
    { "type": "text", "x": 375, "y": 198, "content": "Organização B", "fontSize": 11, "color": "#f59e0b", "fontWeight": "600" },
    { "type": "text", "x": 610, "y": 198, "content": "Organização C", "fontSize": 11, "color": "#ec4899", "fontWeight": "600" },

    { "type": "text", "x": 375, "y": 248, "content": "O mesmo programa roda em todos — a arquitetura é a mesma!", "fontSize": 13, "color": "#57534e", "fontStyle": "italic", "maxWidth": 500 }
  ]
}
\`\`\`

> [!nota] **Resumindo:**
>
> - **Arquitetura** = O QUE a máquina faz (visão do programador)
> - **Organização** = COMO a máquina faz (visão do engenheiro)

---

## Exercícios de Fixação

1. Com suas próprias palavras, explique a diferença entre **Arquitetura** e **Organização** de computadores. Crie uma analogia diferente da do carro.

2. Um Intel Core i7 e um Intel Core i3 da mesma geração compartilham a mesma arquitetura (x86-64), mas têm organizações diferentes. Cite pelo menos **três diferenças** de organização entre eles.`,headings:[{level:2,text:"Duas palavras, dois significados",id:"duas-palavras-dois-significados"},{level:3,text:"O que é Arquitetura?",id:"o-que-é-arquitetura"},{level:3,text:"O que é Organização?",id:"o-que-é-organização"},{level:2,text:"A analogia do carro",id:"a-analogia-do-carro"},{level:2,text:"Por que isso importa?",id:"por-que-isso-importa"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"introducao-aoc/componentes-fundamentais":{title:"As Peças do Computador",description:"Conheça os cinco componentes fundamentais de todo computador: CPU, RAM, armazenamento, E/S e barramentos.",duration:"1 aula",order:999,category:"introducao-aoc",content:`# As Peças do Computador

Agora que entendemos a diferença entre arquitetura e organização, vimos como os computadores evoluíram e conhecemos o modelo de Von Neumann, vamos olhar para **dentro** de um computador moderno e conhecer cada componente em detalhe.

---

## A visão geral

Todo computador — do seu celular ao supercomputador mais potente do mundo — é composto por estas peças fundamentais:

\`\`\`diagram
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
\`\`\`

Vamos entender cada peça.

---

## O Processador (CPU)

É o **cérebro** do computador. Ele faz três coisas:

1. **Busca** instruções na memória
2. **Entende** o que cada instrução pede (decodifica)
3. **Executa** a operação (calcula, compara, move dados)

Dentro dele, existem três partes principais:

\`\`\`diagram
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
\`\`\`

> [!dica] **Analogia completa:** Imagine uma cozinha. A UC é o **chef** — lê a receita e diz o que cada pessoa deve fazer. A ULA é o **cozinheiro** — corta, mistura, tempera. Os registradores são a **bancada** — onde ficam os ingredientes que estão sendo usados naquele momento.

### O ciclo Busca-Decodifica-Executa

A CPU não faz tudo de uma vez. Ela trabalha em um **loop infinito** de três passos, repetido bilhões de vezes por segundo:

\`\`\`diagram
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
\`\`\`

**Exemplo concreto:** Imagine que a instrução na memória diz \`ADD R1, R2, R3\` (some o valor de R2 com R3 e guarde em R1):

1. **Buscar:** A UC vai até o endereço indicado pelo PC e traz \`ADD R1, R2, R3\`
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

\`\`\`diagram
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
\`\`\`

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

\`\`\`diagram
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
\`\`\`

---

## O Barramento

É o **sistema de estradas** que conecta tudo. Sem ele, as peças não conversam.

Existem três tipos de barramento:

\`\`\`diagram
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
    { "type": "text", "x": 385, "y": 152, "content": "\\"Qual gaveta?\\"", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" },
    { "type": "text", "x": 385, "y": 198, "content": "Analogia:", "fontSize": 11, "color": "#78716c", "fontWeight": "600" },
    { "type": "text", "x": 385, "y": 220, "content": "Os endereços", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" },

    { "type": "rect", "x": 525, "y": 20, "width": 220, "height": 250, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 635, "y": 48, "content": "Barr. de CONTROLE", "fontSize": 13, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 635, "y": 78, "content": "Sinais de coordenação", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 635, "y": 98, "content": "entre os componentes", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 635, "y": 126, "content": "\\"Ler ou escrever?\\"", "fontSize": 11, "color": "#10b981", "fontWeight": "600" },
    { "type": "text", "x": 635, "y": 152, "content": "\\"Pronto?\\" / \\"Espere\\"", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" },
    { "type": "text", "x": 635, "y": 198, "content": "Analogia:", "fontSize": 11, "color": "#78716c", "fontWeight": "600" },
    { "type": "text", "x": 635, "y": 220, "content": "Os semáforos", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

---

## Juntando Tudo: Como Funciona na Prática

Vamos acompanhar o que acontece quando você **digita a letra "A" no teclado**:

\`\`\`diagram
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
\`\`\`

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

5. Desenhe a **hierarquia de memória** de um computador moderno, da mais rápida para a mais lenta. Para cada nível, indique: velocidade aproximada, capacidade típica e se é volátil ou não.`,headings:[{level:2,text:"A visão geral",id:"a-visão-geral"},{level:2,text:"O Processador (CPU)",id:"o-processador-cpu"},{level:3,text:"O ciclo Busca-Decodifica-Executa",id:"o-ciclo-busca-decodifica-executa"},{level:2,text:"A Memória Principal (RAM)",id:"a-memória-principal-ram"},{level:2,text:"A Memória Secundária (Armazenamento)",id:"a-memória-secundária-armazenamento"},{level:2,text:"A Hierarquia de Memória",id:"a-hierarquia-de-memória"},{level:2,text:"Dispositivos de Entrada e Saída",id:"dispositivos-de-entrada-e-saída"},{level:2,text:"O Barramento",id:"o-barramento"},{level:2,text:"Juntando Tudo: Como Funciona na Prática",id:"juntando-tudo-como-funciona-na-prática"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"introducao-aoc/evolucao-do-computador":{title:"A Evolução do Computador",description:"De máquinas mecânicas a microprocessadores — como chegamos ao computador moderno em 4 gerações.",duration:"1 aula",order:999,category:"introducao-aoc",content:`# De Onde Viemos: A Evolução do Computador

Computadores não surgiram do nada. Foram **séculos** de ideias, protótipos e descobertas. Vamos percorrer essa linha do tempo para entender como chegamos ao notebook na sua mesa.

---

## As origens: máquinas de calcular

Muito antes da eletricidade, humanos já tentavam construir máquinas para fazer contas.

\`\`\`diagram
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
\`\`\`

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

\`\`\`diagram
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
\`\`\`

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

\`\`\`diagram
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
\`\`\`

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

3. Se a tendência de 80 anos continuar, como você imagina que será o computador daqui a 20 anos? Que tipo de "5ª geração" poderia surgir?`,headings:[{level:2,text:"As origens: máquinas de calcular",id:"as-origens-máquinas-de-calcular"},{level:2,text:"As quatro gerações dos computadores eletrônicos",id:"as-quatro-gerações-dos-computadores-eletrônicos"},{level:3,text:"1ª Geração — Válvulas termiônicas (1940–1956)",id:"1ª-geração--válvulas-termiônicas-19401956"},{level:3,text:"2ª Geração — Transistores (1956–1964)",id:"2ª-geração--transistores-19561964"},{level:3,text:"3ª Geração — Circuitos Integrados (1964–1971)",id:"3ª-geração--circuitos-integrados-19641971"},{level:3,text:"4ª Geração — Microprocessadores (1971–hoje)",id:"4ª-geração--microprocessadores-1971hoje"},{level:2,text:"Linha do tempo visual",id:"linha-do-tempo-visual"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]}},"circuitos-digitais":{"contadores-registradores/circuitos-com-memoria":{title:"Circuitos com Memória",description:"De combinacional para sequencial — quando circuitos precisam lembrar do passado para decidir o futuro.",duration:"1 aula",order:999,category:"contadores-registradores",content:`# Circuitos com Memória

Até agora estudamos circuitos **combinacionais**: a saída depende apenas das entradas atuais. Mas e quando o circuito precisa "lembrar" de algo? Bem-vindos aos circuitos **sequenciais**!

---

## O Problema: Circuitos Sem Memória

Imagine um interruptor de luz comum. Quando você pressiona:

- **Liga** se estava desligado
- **Desliga** se estava ligado

Como fazer isso com um circuito lógico puro?

\`\`\`diagram
{
  "title": "O dilema: como saber o estado anterior?",
  "width": 840,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 80, "y": 40, "width": 680, "height": 150, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },

    { "type": "text", "x": 180, "y": 80, "content": "Botão", "fontSize": 12, "color": "#57534e" },
    { "type": "rect", "x": 140, "y": 95, "width": 80, "height": 50, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 180, "y": 125, "content": "1", "fontSize": 20, "color": "#3b82f6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 220, "y": 120 }, "to": { "x": 300, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 300, "y": 85, "width": 120, "height": 70, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 360, "y": 115, "content": "???", "fontSize": 18, "color": "#8b5cf6", "fontWeight": "bold" },
    { "type": "text", "x": 360, "y": 140, "content": "lógica?", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 420, "y": 120 }, "to": { "x": 500, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "text", "x": 580, "y": 80, "content": "Lâmpada", "fontSize": 12, "color": "#57534e" },
    { "type": "ellipse", "cx": 580, "cy": 120, "rx": 35, "ry": 35, "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "text", "x": 580, "y": 125, "content": "?", "fontSize": 24, "color": "#f59e0b", "fontWeight": "bold" },

    { "type": "text", "x": 420, "y": 180, "content": "Preciso saber se estava ON ou OFF!", "fontSize": 12, "color": "#ef4444", "fontStyle": "italic" }
  ]
}
\`\`\`

Uma porta lógica simples não consegue fazer isso — ela não tem "memória" do estado anterior!

---

## A Solução: Realimentação

O truque é conectar a **saída de volta na entrada**. Isso cria um ciclo que pode manter um valor:

\`\`\`diagram
{
  "title": "O conceito de realimentação (feedback)",
  "width": 840,
  "height": 260,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "Realimentação: a saída influencia a entrada", "fontSize": 15, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 200, "y": 80, "width": 440, "height": 150, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },

    { "type": "rect", "x": 320, "y": 110, "width": 100, "height": 60, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 370, "y": 145, "content": "Lógica", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "text", "x": 250, "y": 140, "content": "entrada →", "fontSize": 11, "color": "#57534e" },
    { "type": "line", "from": { "x": 250, "y": 145 }, "to": { "x": 320, "y": 145 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 420, "y": 140 }, "to": { "x": 550, "y": 140 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 560, "y": 145, "content": "→ saída (Q)", "fontSize": 11, "color": "#57534e" },

    { "type": "ellipse", "cx": 550, "cy": 140, "rx": 5, "ry": 5, "fill": "#10b981", "stroke": "#10b981" },
    { "type": "line", "from": { "x": 550, "y": 140 }, "to": { "x": 550, "y": 195 }, "stroke": "#10b981", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 550, "y": 195 }, "to": { "x": 280, "y": 195 }, "stroke": "#10b981", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 280, "y": 195 }, "to": { "x": 280, "y": 150 }, "stroke": "#10b981", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 280, "y": 150 }, "to": { "x": 320, "y": 150 }, "stroke": "#10b981", "strokeWidth": 2, "dashed": true },

    { "type": "text", "x": 415, "y": 205, "content": "feedback", "fontSize": 11, "color": "#10b981", "fontStyle": "italic" }
  ]
}
\`\`\`

---

## Combinacional vs Sequencial

\`\`\`diagram
{
  "title": "Dois tipos fundamentais de circuitos",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 60, "y": 40, "width": 340, "height": 210, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 14 },
    { "type": "text", "x": 230, "y": 75, "content": "COMBINACIONAL", "fontSize": 16, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "text", "x": 230, "y": 110, "content": "Saída = f(entradas atuais)", "fontSize": 13, "color": "#57534e" },

    { "type": "text", "x": 230, "y": 150, "content": "✓ Sem memória", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 230, "y": 175, "content": "✓ Resposta instantânea", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 230, "y": 200, "content": "Ex: somadores, MUX,", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 230, "y": 220, "content": "decodificadores", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 440, "y": 40, "width": 340, "height": 210, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 14 },
    { "type": "text", "x": 610, "y": 75, "content": "SEQUENCIAL", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },

    { "type": "text", "x": 610, "y": 110, "content": "Saída = f(entradas + estado)", "fontSize": 13, "color": "#57534e" },

    { "type": "text", "x": 610, "y": 150, "content": "✓ Com memória", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 175, "content": "✓ Depende do histórico", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 200, "content": "Ex: flip-flops, contadores,", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 610, "y": 220, "content": "registradores, memória", "fontSize": 11, "color": "#78716c" }
  ]
}
\`\`\`

---

## O Latch SR: Primeiro Circuito com Memória

O elemento mais simples que pode armazenar 1 bit é o **latch SR** (Set-Reset):

\`\`\`diagram
{
  "title": "Latch SR com portas NOR",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 100, "y": 40, "width": 640, "height": 250, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },

    { "type": "text", "x": 70, "y": 115, "content": "S", "fontSize": 16, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 55, "y": 135, "content": "(Set)", "fontSize": 10, "color": "#78716c" },
    { "type": "line", "from": { "x": 85, "y": 110 }, "to": { "x": 220, "y": 110 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "text", "x": 70, "y": 215, "content": "R", "fontSize": 16, "color": "#ef4444", "fontWeight": "bold" },
    { "type": "text", "x": 50, "y": 235, "content": "(Reset)", "fontSize": 10, "color": "#78716c" },
    { "type": "line", "from": { "x": 85, "y": 210 }, "to": { "x": 220, "y": 210 }, "stroke": "#ef4444", "strokeWidth": 2 },

    { "type": "rect", "x": 280, "y": 85, "width": 100, "height": 50, "label": "", "fill": "#e5e7eb", "stroke": "#57534e", "strokeWidth": 2, "rounded": 6 },
    { "type": "text", "x": 330, "y": 115, "content": "NOR", "fontSize": 14, "color": "#374151", "fontWeight": "bold" },

    { "type": "rect", "x": 280, "y": 185, "width": 100, "height": 50, "label": "", "fill": "#e5e7eb", "stroke": "#57534e", "strokeWidth": 2, "rounded": 6 },
    { "type": "text", "x": 330, "y": 215, "content": "NOR", "fontSize": 14, "color": "#374151", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 220, "y": 110 }, "to": { "x": 280, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 210 }, "to": { "x": 280, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 380, "y": 110 }, "to": { "x": 500, "y": 110 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 210 }, "to": { "x": 500, "y": 210 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "text", "x": 510, "y": 115, "content": "Q", "fontSize": 16, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 510, "y": 215, "content": "Q'", "fontSize": 16, "color": "#78716c", "fontWeight": "bold" },

    { "type": "ellipse", "cx": 450, "cy": 110, "rx": 5, "ry": 5, "fill": "#8b5cf6", "stroke": "#8b5cf6" },
    { "type": "line", "from": { "x": 450, "y": 110 }, "to": { "x": 450, "y": 160 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 450, "y": 160 }, "to": { "x": 250, "y": 160 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 250, "y": 160 }, "to": { "x": 250, "y": 200 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 250, "y": 200 }, "to": { "x": 280, "y": 200 }, "stroke": "#8b5cf6", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 440, "cy": 210, "rx": 5, "ry": 5, "fill": "#8b5cf6", "stroke": "#8b5cf6" },
    { "type": "line", "from": { "x": 440, "y": 210 }, "to": { "x": 440, "y": 260 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 440, "y": 260 }, "to": { "x": 240, "y": 260 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 240, "y": 260 }, "to": { "x": 240, "y": 120 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 240, "y": 120 }, "to": { "x": 280, "y": 120 }, "stroke": "#8b5cf6", "strokeWidth": 2 },

    { "type": "text", "x": 600, "y": 130, "content": "Realimentação", "fontSize": 11, "color": "#8b5cf6" },
    { "type": "text", "x": 600, "y": 150, "content": "cruzada!", "fontSize": 11, "color": "#8b5cf6" },

    { "type": "rect", "x": 560, "y": 180, "width": 160, "height": 80, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 8 },
    { "type": "text", "x": 640, "y": 205, "content": "Q e Q' são", "fontSize": 11, "color": "#92400e" },
    { "type": "text", "x": 640, "y": 225, "content": "sempre opostos", "fontSize": 11, "color": "#92400e" },
    { "type": "text", "x": 640, "y": 245, "content": "(complementares)", "fontSize": 10, "color": "#78716c" }
  ]
}
\`\`\`

### Funcionamento do Latch SR

| S   | R   | Q (próximo) | Ação                             |
| --- | --- | ----------- | -------------------------------- |
| 0   | 0   | Q (mantém)  | **Memória** — guarda o valor     |
| 1   | 0   | 1           | **Set** — força Q = 1            |
| 0   | 1   | 0           | **Reset** — força Q = 0          |
| 1   | 1   | ❌          | **Proibido** — estado indefinido |

> [!importante] O estado S=R=1 é proibido porque tenta forçar Q=0 e Q=1 simultaneamente — uma contradição!

---

## Por Que Precisamos de Clock?

O latch SR responde **imediatamente** a qualquer mudança nas entradas. Isso pode causar problemas:

\`\`\`diagram
{
  "title": "Problema: sensibilidade instantânea",
  "width": 840,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 100, "y": 40, "width": 640, "height": 130, "label": "", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 14 },

    { "type": "text", "x": 150, "y": 80, "content": "Se S mudar várias vezes...", "fontSize": 12, "color": "#b91c1c" },

    { "type": "line", "from": { "x": 180, "y": 100 }, "to": { "x": 200, "y": 100 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 200, "y": 100 }, "to": { "x": 200, "y": 130 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 200, "y": 130 }, "to": { "x": 230, "y": 130 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 230, "y": 130 }, "to": { "x": 230, "y": 100 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 230, "y": 100 }, "to": { "x": 260, "y": 100 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 260, "y": 100 }, "to": { "x": 260, "y": 130 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 260, "y": 130 }, "to": { "x": 290, "y": 130 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 290, "y": 130 }, "to": { "x": 290, "y": 100 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 290, "y": 100 }, "to": { "x": 340, "y": 100 }, "stroke": "#ef4444", "strokeWidth": 2 },

    { "type": "text", "x": 420, "y": 90, "content": "→", "fontSize": 20, "color": "#57534e" },

    { "type": "text", "x": 550, "y": 80, "content": "...Q muda a cada vez!", "fontSize": 12, "color": "#b91c1c" },

    { "type": "line", "from": { "x": 480, "y": 100 }, "to": { "x": 500, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 100 }, "to": { "x": 500, "y": 130 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 130 }, "to": { "x": 530, "y": 130 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 530, "y": 130 }, "to": { "x": 530, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 530, "y": 100 }, "to": { "x": 560, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 560, "y": 100 }, "to": { "x": 560, "y": 130 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 560, "y": 130 }, "to": { "x": 590, "y": 130 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 590, "y": 130 }, "to": { "x": 590, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 590, "y": 100 }, "to": { "x": 640, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "text", "x": 420, "y": 150, "content": "Ruído, glitches e bouncing causam caos!", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

A solução? Adicionar um sinal de **clock** que diz quando o circuito pode mudar:

\`\`\`diagram
{
  "title": "Solução: controle por clock",
  "width": 840,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 100, "y": 40, "width": 640, "height": 130, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },

    { "type": "text", "x": 220, "y": 80, "content": "Entradas", "fontSize": 12, "color": "#065f46" },
    { "type": "line", "from": { "x": 180, "y": 100 }, "to": { "x": 200, "y": 100 }, "stroke": "#78716c", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 200, "y": 100 }, "to": { "x": 200, "y": 130 }, "stroke": "#78716c", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 200, "y": 130 }, "to": { "x": 230, "y": 130 }, "stroke": "#78716c", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 230, "y": 130 }, "to": { "x": 230, "y": 100 }, "stroke": "#78716c", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 230, "y": 100 }, "to": { "x": 290, "y": 100 }, "stroke": "#78716c", "strokeWidth": 2 },

    { "type": "text", "x": 390, "y": 80, "content": "Clock ↑", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 350, "y": 130 }, "to": { "x": 370, "y": 130 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 370, "y": 130 }, "to": { "x": 370, "y": 100 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 370, "y": 100 }, "to": { "x": 390, "y": 100 }, "stroke": "#10b981", "strokeWidth": 3 },

    { "type": "text", "x": 420, "y": 115, "content": "→", "fontSize": 20, "color": "#57534e" },

    { "type": "text", "x": 570, "y": 80, "content": "Saída Q", "fontSize": 12, "color": "#3b82f6" },
    { "type": "line", "from": { "x": 480, "y": 130 }, "to": { "x": 550, "y": 130 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 550, "y": 130 }, "to": { "x": 550, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 550, "y": 100 }, "to": { "x": 640, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "text", "x": 420, "y": 155, "content": "Q só muda na borda do clock!", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" }
  ]
}
\`\`\`

Essa é a ideia fundamental dos **flip-flops**, que veremos na próxima aula!

---

## Aplicações de Circuitos Sequenciais

\`\`\`diagram
{
  "title": "Onde usamos circuitos com memória?",
  "width": 840,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 60, "y": 40, "width": 170, "height": 150, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12 },
    { "type": "text", "x": 145, "y": 75, "content": "💾 Memória", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 145, "y": 105, "content": "RAM, Cache,", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 125, "content": "Registradores", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 145, "content": "da CPU", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 250, "y": 40, "width": 170, "height": 150, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 335, "y": 75, "content": "🔢 Contadores", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 335, "y": 105, "content": "Timers, clocks,", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 335, "y": 125, "content": "divisores de", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 335, "y": 145, "content": "frequência", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 440, "y": 40, "width": 170, "height": 150, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12 },
    { "type": "text", "x": 525, "y": 75, "content": "🔀 Shift Reg.", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 525, "y": 105, "content": "Comunicação", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 525, "y": 125, "content": "serial, buffers,", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 525, "y": 145, "content": "delays", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 630, "y": 40, "width": 170, "height": 150, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 12 },
    { "type": "text", "x": 715, "y": 75, "content": "🎮 FSM", "fontSize": 14, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 715, "y": 105, "content": "Máquinas de", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 715, "y": 125, "content": "estado, controle,", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 715, "y": 145, "content": "protocolos", "fontSize": 11, "color": "#57534e" }
  ]
}
\`\`\`

---

## Recapitulando

| Conceito          | Descrição                                     |
| ----------------- | --------------------------------------------- |
| **Combinacional** | Saída depende só das entradas atuais          |
| **Sequencial**    | Saída depende das entradas + estado anterior  |
| **Realimentação** | Conectar saída de volta na entrada            |
| **Latch SR**      | Elemento de memória básico de 1 bit           |
| **Clock**         | Sinal que controla quando o circuito atualiza |

---

## Exercícios de Fixação

1. **Classificação:** Identifique se cada circuito é combinacional ou sequencial:
   - Somador de 4 bits
   - Contador de 0 a 9
   - Multiplexador 4:1
   - Registrador de 8 bits

2. **Latch SR:** Se um latch SR está com Q=1 e aplicamos S=0, R=0, o que acontece com Q?

3. **Análise:** Por que a entrada S=R=1 é proibida no latch SR com portas NOR?

4. **Projeto:** Desenhe um circuito com portas NAND que funcione como latch SR. Qual é a combinação proibida neste caso?

5. **Reflexão:** Por que os computadores precisam de um sinal de clock? O que aconteceria se não houvesse clock?`,headings:[{level:2,text:"O Problema: Circuitos Sem Memória",id:"o-problema-circuitos-sem-memória"},{level:2,text:"A Solução: Realimentação",id:"a-solução-realimentação"},{level:2,text:"Combinacional vs Sequencial",id:"combinacional-vs-sequencial"},{level:2,text:"O Latch SR: Primeiro Circuito com Memória",id:"o-latch-sr-primeiro-circuito-com-memória"},{level:3,text:"Funcionamento do Latch SR",id:"funcionamento-do-latch-sr"},{level:2,text:"Por Que Precisamos de Clock?",id:"por-que-precisamos-de-clock"},{level:2,text:"Aplicações de Circuitos Sequenciais",id:"aplicações-de-circuitos-sequenciais"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"contadores-registradores/contadores":{title:"Contadores: Sequências e Temporização",description:"De 0 a N e de volta — como flip-flops conectados criam contadores que são a base de relógios, timers e endereçamento.",duration:"1 aula",order:999,category:"contadores-registradores",content:`# Contadores: Sequências e Temporização

Contadores são circuitos que passam por uma **sequência de estados** a cada pulso de clock. Eles estão em todo lugar: relógios digitais, timers, endereçamento de memória, geradores de frequência, e muito mais.

---

## O Conceito Básico

Um **contador** é um registrador especial que:

- Incrementa (ou decrementa) seu valor a cada pulso de clock
- Volta ao início quando atinge o limite (overflow)
- Pode ser controlado (enable, reset, direção)

\`\`\`diagram
{
  "title": "Conceito de contador",
  "width": 840,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 60, "y": 40, "width": 720, "height": 130, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 420, "y": 70, "content": "Contador de 3 bits: sequência de estados", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "ellipse", "cx": 120, "cy": 120, "rx": 30, "ry": 25, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 120, "y": 125, "content": "000", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 150, "y": 120 }, "to": { "x": 180, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 210, "cy": 120, "rx": 30, "ry": 25, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 210, "y": 125, "content": "001", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 240, "y": 120 }, "to": { "x": 270, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 300, "cy": 120, "rx": 30, "ry": 25, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 300, "y": 125, "content": "010", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 330, "y": 120 }, "to": { "x": 360, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 390, "cy": 120, "rx": 30, "ry": 25, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 390, "y": 125, "content": "011", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 420, "y": 120 }, "to": { "x": 450, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 480, "cy": 120, "rx": 30, "ry": 25, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 480, "y": 125, "content": "100", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 510, "y": 120 }, "to": { "x": 540, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "text", "x": 550, "y": 125, "content": "...", "fontSize": 14, "color": "#78716c" },

    { "type": "line", "from": { "x": 570, "y": 120 }, "to": { "x": 600, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 630, "cy": 120, "rx": 30, "ry": 25, "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "text", "x": 630, "y": 125, "content": "111", "fontSize": 13, "color": "#92400e", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 660, "y": 120 }, "to": { "x": 720, "y": 120 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 720, "y": 120 }, "to": { "x": 720, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 720, "y": 160 }, "to": { "x": 90, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 90, "y": 160 }, "to": { "x": 90, "y": 120 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 90, "y": 120 }, "to": { "x": 90, "y": 120 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "text", "x": 400, "y": 175, "content": "Overflow → volta ao início", "fontSize": 11, "color": "#f59e0b", "fontStyle": "italic" }
  ]
}
\`\`\`

---

## Contador Assíncrono (Ripple Counter)

O contador mais simples é o **assíncrono** ou **ripple counter**: cada flip-flop recebe como clock a saída do flip-flop anterior.

\`\`\`diagram
{
  "title": "Contador Assíncrono de 4 bits",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "Ripple Counter (Assíncrono)", "fontSize": 16, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 60, "y": 110, "content": "CLK", "fontSize": 13, "color": "#f59e0b", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 90, "y": 105 }, "to": { "x": 130, "y": 105 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "rect", "x": 130, "y": 70, "width": 90, "height": 90, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 175, "y": 100, "content": "T", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 175, "y": 125, "content": "Q₀", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 90, "content": "T=1", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 220, "y": 105 }, "to": { "x": 280, "y": 105 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "ellipse", "cx": 250, "cy": 105, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "line", "from": { "x": 250, "y": 105 }, "to": { "x": 250, "y": 195 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 280, "y": 70, "width": 90, "height": 90, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 325, "y": 100, "content": "T", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 325, "y": 125, "content": "Q₁", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 295, "y": 90, "content": "T=1", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 370, "y": 105 }, "to": { "x": 430, "y": 105 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "ellipse", "cx": 400, "cy": 105, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "line", "from": { "x": 400, "y": 105 }, "to": { "x": 400, "y": 195 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 430, "y": 70, "width": 90, "height": 90, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 475, "y": 100, "content": "T", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 475, "y": 125, "content": "Q₂", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 445, "y": 90, "content": "T=1", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 520, "y": 105 }, "to": { "x": 580, "y": 105 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "ellipse", "cx": 550, "cy": 105, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "line", "from": { "x": 550, "y": 105 }, "to": { "x": 550, "y": 195 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 580, "y": 70, "width": 90, "height": 90, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 625, "y": 100, "content": "T", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 625, "y": 125, "content": "Q₃", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 595, "y": 90, "content": "T=1", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 670, "y": 105 }, "to": { "x": 720, "y": 105 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "ellipse", "cx": 700, "cy": 105, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "line", "from": { "x": 700, "y": 105 }, "to": { "x": 700, "y": 195 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "text", "x": 720, "y": 110, "content": "(overflow)", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 130, "y": 195 }, "to": { "x": 720, "y": 195 }, "stroke": "#10b981", "strokeWidth": 1, "dashed": true },
    { "type": "text", "x": 175, "y": 215, "content": "Q₀", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 325, "y": 215, "content": "Q₁", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 475, "y": 215, "content": "Q₂", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 625, "y": 215, "content": "Q₃", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },

    { "type": "rect", "x": 130, "y": 240, "width": 590, "height": 60, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 425, "y": 265, "content": "Simples mas lento: cada FF espera o anterior mudar", "fontSize": 13, "color": "#92400e" },
    { "type": "text", "x": 425, "y": 290, "content": "O atraso \\"ondula\\" (ripple) pelos flip-flops", "fontSize": 12, "color": "#78716c" }
  ]
}
\`\`\`

**Funcionamento:**

- Cada FF-T com T=1 inverte a cada borda de descida de seu clock
- Q₀ inverte a cada clock principal
- Q₁ inverte quando Q₀ vai de 1→0
- Q₂ inverte quando Q₁ vai de 1→0
- E assim por diante...

> [!atencao] **Problema do Ripple:** O atraso se acumula! Para N bits, o pior caso é N × (atraso de um FF). Para contadores rápidos, isso é inaceitável.

---

## Contador Síncrono

No contador **síncrono**, todos os flip-flops recebem o mesmo clock. Lógica adicional determina quando cada um deve inverter.

\`\`\`diagram
{
  "title": "Contador Síncrono de 4 bits",
  "width": 840,
  "height": 340,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "Contador Síncrono", "fontSize": 16, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 120, "y": 80, "width": 80, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 160, "y": 105, "content": "T", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 160, "y": 130, "content": "Q₀", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 130, "y": 90, "content": "T=1", "fontSize": 9, "color": "#10b981" },

    { "type": "rect", "x": 270, "y": 80, "width": 80, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 310, "y": 105, "content": "T", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 310, "y": 130, "content": "Q₁", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 420, "y": 80, "width": 80, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 460, "y": 105, "content": "T", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 460, "y": 130, "content": "Q₂", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 570, "y": 80, "width": 80, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 610, "y": 105, "content": "T", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 610, "y": 130, "content": "Q₃", "fontSize": 11, "color": "#57534e" },

    { "type": "line", "from": { "x": 60, "y": 200 }, "to": { "x": 700, "y": 200 }, "stroke": "#f59e0b", "strokeWidth": 3 },
    { "type": "text", "x": 40, "y": 205, "content": "CLK", "fontSize": 11, "color": "#f59e0b", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 160, "y": 200 }, "to": { "x": 160, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 310, "y": 200 }, "to": { "x": 310, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 460, "y": 200 }, "to": { "x": 460, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 610, "y": 200 }, "to": { "x": 610, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "rect", "x": 215, "y": 60, "width": 40, "height": 30, "label": "AND", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 4 },
    { "type": "line", "from": { "x": 200, "y": 120 }, "to": { "x": 200, "y": 50 }, "stroke": "#57534e", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 200, "y": 50 }, "to": { "x": 215, "y": 70 }, "stroke": "#57534e", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 255, "y": 75 }, "to": { "x": 270, "y": 95 }, "stroke": "#57534e", "strokeWidth": 1 },

    { "type": "rect", "x": 365, "y": 50, "width": 40, "height": 30, "label": "AND", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 4 },
    { "type": "line", "from": { "x": 350, "y": 120 }, "to": { "x": 350, "y": 40 }, "stroke": "#57534e", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 350, "y": 40 }, "to": { "x": 365, "y": 60 }, "stroke": "#57534e", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 405, "y": 65 }, "to": { "x": 420, "y": 95 }, "stroke": "#57534e", "strokeWidth": 1 },

    { "type": "rect", "x": 515, "y": 40, "width": 40, "height": 30, "label": "AND", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 4 },
    { "type": "line", "from": { "x": 500, "y": 120 }, "to": { "x": 500, "y": 30 }, "stroke": "#57534e", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 500, "y": 30 }, "to": { "x": 515, "y": 50 }, "stroke": "#57534e", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 555, "y": 55 }, "to": { "x": 570, "y": 95 }, "stroke": "#57534e", "strokeWidth": 1 },

    { "type": "text", "x": 235, "y": 245, "content": "T₁ = Q₀", "fontSize": 11, "color": "#8b5cf6" },
    { "type": "text", "x": 385, "y": 245, "content": "T₂ = Q₀·Q₁", "fontSize": 11, "color": "#8b5cf6" },
    { "type": "text", "x": 535, "y": 245, "content": "T₃ = Q₀·Q₁·Q₂", "fontSize": 11, "color": "#8b5cf6" },

    { "type": "rect", "x": 120, "y": 270, "width": 600, "height": 50, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 10 },
    { "type": "text", "x": 420, "y": 300, "content": "Todos mudam no mesmo instante → mais rápido, mas mais lógica", "fontSize": 12, "color": "#065f46" }
  ]
}
\`\`\`

**Regra de toggle:**

- Q₀ sempre inverte (T₀ = 1)
- Q₁ inverte quando Q₀ = 1
- Q₂ inverte quando Q₀ = 1 E Q₁ = 1
- Qₙ inverte quando todos os anteriores = 1

---

## Contador Up/Down

Um contador **up/down** pode contar para cima ou para baixo, controlado por um sinal de direção:

\`\`\`diagram
{
  "title": "Contador Up/Down",
  "width": 840,
  "height": 240,
  "elements": [
    { "type": "rect", "x": 200, "y": 30, "width": 440, "height": 180, "label": "", "fill": "#fff", "stroke": "#3b82f6", "strokeWidth": 3, "rounded": 12 },

    { "type": "text", "x": 420, "y": 65, "content": "CONTADOR UP/DOWN", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 90, "content": "4 bits", "fontSize": 12, "color": "#3b82f6" },

    { "type": "text", "x": 120, "y": 90, "content": "UP/DOWN̅", "fontSize": 12, "color": "#8b5cf6", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 175, "y": 85 }, "to": { "x": 200, "y": 85 }, "stroke": "#8b5cf6", "strokeWidth": 2 },

    { "type": "text", "x": 135, "y": 125, "content": "ENABLE", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 175, "y": 120 }, "to": { "x": 200, "y": 120 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "text", "x": 140, "y": 160, "content": "RESET", "fontSize": 12, "color": "#ef4444", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 175, "y": 155 }, "to": { "x": 200, "y": 155 }, "stroke": "#ef4444", "strokeWidth": 2 },

    { "type": "text", "x": 160, "y": 195, "content": "CLK", "fontSize": 12, "color": "#f59e0b", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 180, "y": 190 }, "to": { "x": 200, "y": 190 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 640, "y": 110 }, "to": { "x": 700, "y": 110 }, "stroke": "#57534e", "strokeWidth": 4 },
    { "type": "text", "x": 665, "y": 100, "content": "4", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 720, "y": 115, "content": "Q[3:0]", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 300, "y": 125, "content": "UP/DOWN̅ = 1 → incrementa", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 300, "y": 145, "content": "UP/DOWN̅ = 0 → decrementa", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 300, "y": 175, "content": "ENABLE = 1 → conta", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 300, "y": 195, "content": "RESET = 1 → Q ← 0000", "fontSize": 11, "color": "#57534e" }
  ]
}
\`\`\`

---

## Contador Módulo-N

Nem sempre queremos contar até 2ⁿ-1. Um contador **módulo-N** conta de 0 a N-1 e depois volta a 0.

**Exemplo: Contador módulo-10 (década)**
Conta: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, ...

\`\`\`diagram
{
  "title": "Contador Módulo-10 (Década)",
  "width": 840,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 60, "y": 30, "width": 720, "height": 90, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 420, "y": 60, "content": "Sequência: 0000 → 0001 → ... → 1001 → 0000", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 90, "content": "Quando atinge 1010 (10), reseta imediatamente para 0000", "fontSize": 12, "color": "#57534e" },

    { "type": "rect", "x": 150, "y": 140, "width": 540, "height": 100, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 420, "y": 170, "content": "Implementação típica:", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 200, "content": "Detecta Q₃·Q₁ = 1 (padrão de 1010) e gera RESET", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 225, "content": "Ou usa contador com preset para carregar 0 quando detecta 10", "fontSize": 11, "color": "#78716c" }
  ]
}
\`\`\`

> [!dica] **Uso comum:** Displays de 7 segmentos para dígitos decimais, relógios (módulo-60 para segundos/minutos, módulo-12 ou 24 para horas).

---

## Comparação: Assíncrono vs Síncrono

| Característica   | Assíncrono (Ripple)             | Síncrono                      |
| ---------------- | ------------------------------- | ----------------------------- |
| **Clock**        | Em cascata                      | Comum a todos                 |
| **Velocidade**   | Lento (atraso acumula)          | Rápido                        |
| **Complexidade** | Simples                         | Mais portas                   |
| **Glitches**     | Pode ter estados intermediários | Transição limpa               |
| **Uso típico**   | Divisores de frequência         | Contadores de propósito geral |

---

## Aplicações de Contadores

### 1. Divisor de Frequência

Cada bit divide a frequência por 2:

- Q₀: f/2
- Q₁: f/4
- Q₂: f/8
- Qₙ: f/2^(n+1)

### 2. Endereçamento de Memória

Um contador gera sequencialmente os endereços para ler/escrever memória.

### 3. Timer/Delay

Conta pulsos de clock até um valor, gerando um sinal após tempo determinado.

### 4. PWM (Modulação por Largura de Pulso)

Compara o contador com um valor para gerar pulsos de largura variável.

### 5. Sequenciador

Ativa diferentes linhas em sequência (máquinas de estado).

---

## Diagrama Temporal

\`\`\`diagram
{
  "title": "Formas de onda de um contador de 3 bits",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "text", "x": 50, "y": 40, "content": "CLK", "fontSize": 11, "color": "#f59e0b", "fontWeight": "bold" },
    { "type": "text", "x": 50, "y": 90, "content": "Q₀", "fontSize": 11, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 50, "y": 140, "content": "Q₁", "fontSize": 11, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 50, "y": 190, "content": "Q₂", "fontSize": 11, "color": "#8b5cf6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 80, "y": 45 }, "to": { "x": 100, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 100, "y": 45 }, "to": { "x": 100, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 100, "y": 25 }, "to": { "x": 140, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 140, "y": 25 }, "to": { "x": 140, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 140, "y": 45 }, "to": { "x": 180, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 180, "y": 45 }, "to": { "x": 180, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 180, "y": 25 }, "to": { "x": 220, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 25 }, "to": { "x": 220, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 45 }, "to": { "x": 260, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 260, "y": 45 }, "to": { "x": 260, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 260, "y": 25 }, "to": { "x": 300, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 300, "y": 25 }, "to": { "x": 300, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 300, "y": 45 }, "to": { "x": 340, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 340, "y": 45 }, "to": { "x": 340, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 340, "y": 25 }, "to": { "x": 380, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 25 }, "to": { "x": 380, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 45 }, "to": { "x": 420, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 420, "y": 45 }, "to": { "x": 420, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 420, "y": 25 }, "to": { "x": 460, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 460, "y": 25 }, "to": { "x": 460, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 460, "y": 45 }, "to": { "x": 500, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 45 }, "to": { "x": 500, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 25 }, "to": { "x": 540, "y": 25 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 540, "y": 25 }, "to": { "x": 540, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 540, "y": 45 }, "to": { "x": 580, "y": 45 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 80, "y": 95 }, "to": { "x": 140, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 140, "y": 95 }, "to": { "x": 140, "y": 75 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 140, "y": 75 }, "to": { "x": 220, "y": 75 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 75 }, "to": { "x": 220, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 95 }, "to": { "x": 300, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 300, "y": 95 }, "to": { "x": 300, "y": 75 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 300, "y": 75 }, "to": { "x": 380, "y": 75 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 75 }, "to": { "x": 380, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 95 }, "to": { "x": 460, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 460, "y": 95 }, "to": { "x": 460, "y": 75 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 460, "y": 75 }, "to": { "x": 540, "y": 75 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 540, "y": 75 }, "to": { "x": 540, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 540, "y": 95 }, "to": { "x": 580, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 80, "y": 145 }, "to": { "x": 220, "y": 145 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 145 }, "to": { "x": 220, "y": 125 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 125 }, "to": { "x": 380, "y": 125 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 125 }, "to": { "x": 380, "y": 145 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 145 }, "to": { "x": 540, "y": 145 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 540, "y": 145 }, "to": { "x": 540, "y": 125 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 540, "y": 125 }, "to": { "x": 580, "y": 125 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 80, "y": 195 }, "to": { "x": 380, "y": 195 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 195 }, "to": { "x": 380, "y": 175 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 175 }, "to": { "x": 580, "y": 175 }, "stroke": "#8b5cf6", "strokeWidth": 2 },

    { "type": "text", "x": 110, "y": 230, "content": "0", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 160, "y": 230, "content": "1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 240, "y": 230, "content": "2", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 320, "y": 230, "content": "3", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 400, "y": 230, "content": "4", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 480, "y": 230, "content": "5", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 560, "y": 230, "content": "6", "fontSize": 10, "color": "#78716c" },

    { "type": "text", "x": 650, "y": 90, "content": "Q₀: f/2", "fontSize": 11, "color": "#3b82f6" },
    { "type": "text", "x": 650, "y": 140, "content": "Q₁: f/4", "fontSize": 11, "color": "#10b981" },
    { "type": "text", "x": 650, "y": 190, "content": "Q₂: f/8", "fontSize": 11, "color": "#8b5cf6" }
  ]
}
\`\`\`

---

## Recapitulando

| Tipo           | Descrição        | Uso                |
| -------------- | ---------------- | ------------------ |
| **Assíncrono** | Clock em cascata | Divisores simples  |
| **Síncrono**   | Clock comum      | Contadores rápidos |
| **Up/Down**    | Bidirecional     | Encoders, posição  |
| **Módulo-N**   | Conta até N-1    | Displays, relógios |
| **Ring**       | Um bit circula   | Sequenciadores     |

---

## Exercícios de Fixação

1. **Contagem:** Um contador de 4 bits síncrono está em 1011. Qual é o próximo estado? E após mais 5 pulsos?

2. **Divisão:** Você precisa de um clock de 1 kHz a partir de um cristal de 32.768 kHz. Quantos bits precisa o contador divisor?

3. **Módulo:** Projete a lógica de reset para um contador módulo-6 (conta 0-5).

4. **Timer:** Um contador de 16 bits opera com clock de 1 MHz. Qual é o tempo máximo que ele pode medir antes de fazer overflow?

5. **Ripple vs Síncrono:** Se cada flip-flop tem atraso de 10 ns, qual é o pior caso de atraso para um ripple counter de 8 bits estabilizar?

6. **Up/Down:** Desenhe o diagrama temporal de um contador de 2 bits que conta: UP por 3 pulsos, depois DOWN por 2 pulsos.`,headings:[{level:2,text:"O Conceito Básico",id:"o-conceito-básico"},{level:2,text:"Contador Assíncrono (Ripple Counter)",id:"contador-assíncrono-ripple-counter"},{level:2,text:"Contador Síncrono",id:"contador-síncrono"},{level:2,text:"Contador Up/Down",id:"contador-updown"},{level:2,text:"Contador Módulo-N",id:"contador-módulo-n"},{level:2,text:"Comparação: Assíncrono vs Síncrono",id:"comparação-assíncrono-vs-síncrono"},{level:2,text:"Aplicações de Contadores",id:"aplicações-de-contadores"},{level:3,text:"1. Divisor de Frequência",id:"1-divisor-de-frequência"},{level:3,text:"2. Endereçamento de Memória",id:"2-endereçamento-de-memória"},{level:3,text:"3. Timer/Delay",id:"3-timerdelay"},{level:3,text:"4. PWM (Modulação por Largura de Pulso)",id:"4-pwm-modulação-por-largura-de-pulso"},{level:3,text:"5. Sequenciador",id:"5-sequenciador"},{level:2,text:"Diagrama Temporal",id:"diagrama-temporal"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"contadores-registradores/flip-flops":{title:"Flip-Flops: A Memória de 1 Bit",description:"De circuitos que esquecem para circuitos que lembram — entenda como um flip-flop armazena informação.",duration:"1 aula",order:999,category:"contadores-registradores",content:`# Flip-Flops: A Memória de 1 Bit

Até agora, todos os circuitos que vimos eram **combinacionais**: a saída dependia apenas das entradas atuais. Mas como um computador "lembra" de algo? Como ele armazena dados?

A resposta está nos **flip-flops** — os elementos básicos de memória.

---

## O Problema: Circuitos que Esquecem

Um circuito combinacional não tem memória. Se você muda as entradas, a saída muda imediatamente. Quando você remove as entradas, não sobra nenhuma "lembrança" do estado anterior.

Mas pense em situações reais:

- Um botão de ligar/desligar: você aperta uma vez e o estado **permanece**
- Um placar de jogo: o número não desaparece entre os pontos
- Um computador: ele precisa lembrar dos dados enquanto processa

\`\`\`diagram
{
  "title": "Combinacional vs Sequencial",
  "width": 840,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 40, "y": 30, "width": 360, "height": 160, "label": "", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 14 },
    { "type": "text", "x": 220, "y": 60, "content": "COMBINACIONAL", "fontSize": 14, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "text", "x": 220, "y": 95, "content": "Entradas → Saídas", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 125, "content": "Sem memória", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 220, "y": 155, "content": "Remove entrada → perde informação", "fontSize": 12, "color": "#ef4444" },

    { "type": "rect", "x": 440, "y": 30, "width": 360, "height": 160, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 620, "y": 60, "content": "SEQUENCIAL", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 620, "y": 95, "content": "Entradas + Estado → Saídas", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 125, "content": "Com memória (flip-flops)", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 620, "y": 155, "content": "Remove entrada → mantém estado", "fontSize": 12, "color": "#10b981" }
  ]
}
\`\`\`

---

## A Solução: Realimentação

O truque para criar memória é a **realimentação**: conectar a saída de volta à entrada. Assim, o circuito "se sustenta" — mantém seu estado.

### O Latch SR (Set-Reset)

O circuito mais simples com memória é o **latch SR**, feito com apenas duas portas NOR:

\`\`\`diagram
{
  "title": "Latch SR com portas NOR",
  "width": 840,
  "height": 340,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 420, "height": 300, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 250, "y": 50, "content": "Circuito do Latch SR", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 70, "y": 120, "content": "R", "fontSize": 16, "color": "#ef4444", "fontWeight": "bold" },
    { "type": "text", "x": 70, "y": 220, "content": "S", "fontSize": 16, "color": "#10b981", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 90, "y": 115 }, "to": { "x": 140, "y": 115 }, "stroke": "#ef4444", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 90, "y": 215 }, "to": { "x": 140, "y": 215 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "rect", "x": 140, "y": 95, "width": 80, "height": 50, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 6 },
    { "type": "text", "x": 180, "y": 125, "content": "NOR", "fontSize": 13, "color": "#8b5cf6", "fontWeight": "bold" },

    { "type": "rect", "x": 140, "y": 195, "width": 80, "height": 50, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 6 },
    { "type": "text", "x": 180, "y": 225, "content": "NOR", "fontSize": 13, "color": "#8b5cf6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 220, "y": 120 }, "to": { "x": 280, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 220 }, "to": { "x": 280, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 280, "cy": 120, "rx": 5, "ry": 5, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "ellipse", "cx": 280, "cy": 220, "rx": 5, "ry": 5, "fill": "#57534e", "stroke": "#57534e" },

    { "type": "line", "from": { "x": 280, "y": 120 }, "to": { "x": 380, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 280, "y": 220 }, "to": { "x": 380, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "text", "x": 400, "y": 125, "content": "Q", "fontSize": 16, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 400, "y": 225, "content": "Q'", "fontSize": 16, "color": "#78716c", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 280, "y": 120 }, "to": { "x": 280, "y": 170 }, "stroke": "#f59e0b", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 280, "y": 170 }, "to": { "x": 120, "y": 170 }, "stroke": "#f59e0b", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 120, "y": 170 }, "to": { "x": 120, "y": 230 }, "stroke": "#f59e0b", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 120, "y": 230 }, "to": { "x": 140, "y": 230 }, "stroke": "#f59e0b", "strokeWidth": 2, "dashed": true },

    { "type": "line", "from": { "x": 280, "y": 220 }, "to": { "x": 280, "y": 180 }, "stroke": "#f59e0b", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 280, "y": 180 }, "to": { "x": 130, "y": 180 }, "stroke": "#f59e0b", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 130, "y": 180 }, "to": { "x": 130, "y": 105 }, "stroke": "#f59e0b", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 130, "y": 105 }, "to": { "x": 140, "y": 105 }, "stroke": "#f59e0b", "strokeWidth": 2, "dashed": true },

    { "type": "text", "x": 250, "y": 290, "content": "Linhas tracejadas = realimentação", "fontSize": 11, "color": "#f59e0b", "fontStyle": "italic" },

    { "type": "rect", "x": 490, "y": 20, "width": 320, "height": 300, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 650, "y": 50, "content": "Tabela de Operação", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "text", "x": 530, "y": 90, "content": "S", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 580, "y": 90, "content": "R", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 650, "y": 90, "content": "Q (próx)", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 750, "y": 90, "content": "Ação", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 510, "y": 105 }, "to": { "x": 790, "y": 105 }, "stroke": "#93c5fd", "strokeWidth": 1 },

    { "type": "text", "x": 530, "y": 135, "content": "0", "fontSize": 14, "color": "#78716c" },
    { "type": "text", "x": 580, "y": 135, "content": "0", "fontSize": 14, "color": "#78716c" },
    { "type": "text", "x": 650, "y": 135, "content": "Q", "fontSize": 14, "color": "#3b82f6" },
    { "type": "text", "x": 750, "y": 135, "content": "Mantém", "fontSize": 12, "color": "#78716c" },

    { "type": "text", "x": 530, "y": 170, "content": "1", "fontSize": 14, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 580, "y": 170, "content": "0", "fontSize": 14, "color": "#78716c" },
    { "type": "text", "x": 650, "y": 170, "content": "1", "fontSize": 14, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 750, "y": 170, "content": "Set", "fontSize": 12, "color": "#10b981" },

    { "type": "text", "x": 530, "y": 205, "content": "0", "fontSize": 14, "color": "#78716c" },
    { "type": "text", "x": 580, "y": 205, "content": "1", "fontSize": 14, "color": "#ef4444", "fontWeight": "bold" },
    { "type": "text", "x": 650, "y": 205, "content": "0", "fontSize": 14, "color": "#ef4444", "fontWeight": "bold" },
    { "type": "text", "x": 750, "y": 205, "content": "Reset", "fontSize": 12, "color": "#ef4444" },

    { "type": "text", "x": 530, "y": 240, "content": "1", "fontSize": 14, "color": "#78716c" },
    { "type": "text", "x": 580, "y": 240, "content": "1", "fontSize": 14, "color": "#78716c" },
    { "type": "text", "x": 650, "y": 240, "content": "?", "fontSize": 14, "color": "#f59e0b", "fontWeight": "bold" },
    { "type": "text", "x": 750, "y": 240, "content": "Proibido!", "fontSize": 12, "color": "#f59e0b" },

    { "type": "text", "x": 650, "y": 290, "content": "S=R=1 causa estado indefinido", "fontSize": 10, "color": "#f59e0b", "fontStyle": "italic" }
  ]
}
\`\`\`

**Como funciona:**

- **S=1, R=0**: "Set" — força Q para 1
- **S=0, R=1**: "Reset" — força Q para 0
- **S=0, R=0**: "Mantém" — Q permanece no valor anterior
- **S=1, R=1**: Estado proibido (inválido)

> [!atencao] O estado S=R=1 é proibido porque força ambas as saídas para 0, violando a regra de que Q e Q' devem ser complementares.

---

## Do Latch ao Flip-Flop: Adicionando Controle

O latch SR tem um problema: ele responde **imediatamente** a qualquer mudança em S ou R. Em sistemas síncronos, queremos que as mudanças aconteçam apenas em momentos específicos.

Solução: adicionar um sinal de **clock** (relógio).

### Latch SR com Enable

\`\`\`diagram
{
  "title": "Latch SR com Enable (Gated Latch)",
  "width": 840,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 60, "y": 30, "width": 380, "height": 160, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },

    { "type": "text", "x": 100, "y": 80, "content": "S", "fontSize": 14, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 100, "y": 130, "content": "E", "fontSize": 14, "color": "#f59e0b", "fontWeight": "bold" },
    { "type": "text", "x": 100, "y": 160, "content": "R", "fontSize": 14, "color": "#ef4444", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 120, "y": 75 }, "to": { "x": 160, "y": 75 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 120, "y": 125 }, "to": { "x": 180, "y": 125 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 120, "y": 155 }, "to": { "x": 160, "y": 155 }, "stroke": "#ef4444", "strokeWidth": 2 },

    { "type": "rect", "x": 160, "y": 60, "width": 50, "height": 40, "label": "AND", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 4 },
    { "type": "rect", "x": 160, "y": 140, "width": 50, "height": 40, "label": "AND", "fill": "#fee2e2", "stroke": "#ef4444", "strokeWidth": 2, "rounded": 4 },

    { "type": "ellipse", "cx": 180, "cy": 125, "rx": 4, "ry": 4, "fill": "#f59e0b", "stroke": "#f59e0b" },
    { "type": "line", "from": { "x": 180, "y": 100 }, "to": { "x": 180, "y": 140 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 210, "y": 80 }, "to": { "x": 260, "y": 80 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 210, "y": 160 }, "to": { "x": 260, "y": 160 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 260, "y": 60, "width": 120, "height": 120, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 320, "y": 125, "content": "SR\\nLatch", "fontSize": 14, "color": "#8b5cf6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 380, "y": 100 }, "to": { "x": 420, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 425, "y": 105, "content": "Q", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },

    { "type": "rect", "x": 490, "y": 30, "width": 310, "height": 160, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 645, "y": 60, "content": "Enable = controle de momento", "fontSize": 13, "color": "#92400e", "fontWeight": "bold" },

    { "type": "text", "x": 645, "y": 100, "content": "E = 0: Latch ignora S e R", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 645, "y": 130, "content": "E = 1: Latch responde a S e R", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 645, "y": 170, "content": "Mudanças só ocorrem quando E=1", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

---

## Flip-Flop D: O Mais Usado

O **Flip-Flop D** (Data ou Delay) resolve o problema do estado proibido do SR: ele tem apenas uma entrada de dados.

\`\`\`diagram
{
  "title": "Flip-Flop D",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 50, "y": 30, "width": 320, "height": 220, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 210, "y": 60, "content": "Símbolo do Flip-Flop D", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "rect", "x": 130, "y": 90, "width": 120, "height": 130, "label": "", "fill": "#fff", "stroke": "#3b82f6", "strokeWidth": 3, "rounded": 8 },

    { "type": "text", "x": 105, "y": 130, "content": "D", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 90, "y": 125 }, "to": { "x": 130, "y": 125 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 130, "y": 185 }, "to": { "x": 145, "y": 195 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 145, "y": 195 }, "to": { "x": 130, "y": 205 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 90, "y": 195 }, "to": { "x": 130, "y": 195 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 95, "y": 215, "content": "CLK", "fontSize": 11, "color": "#78716c" },

    { "type": "line", "from": { "x": 250, "y": 125 }, "to": { "x": 300, "y": 125 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 275, "y": 115, "content": "Q", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 250, "y": 175 }, "to": { "x": 300, "y": 175 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 275, "y": 165, "content": "Q'", "fontSize": 14, "color": "#78716c" },

    { "type": "text", "x": 190, "y": 155, "content": "D", "fontSize": 18, "color": "#3b82f6", "fontWeight": "bold" },

    { "type": "rect", "x": 410, "y": 30, "width": 390, "height": 220, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 605, "y": 60, "content": "Funcionamento", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 605, "y": 105, "content": "Na borda de subida do clock:", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 605, "y": 140, "content": "Q ← D", "fontSize": 18, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 605, "y": 175, "content": "O valor de D é \\"capturado\\" em Q", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 605, "y": 210, "content": "Entre bordas, Q mantém seu valor", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 605, "y": 235, "content": "D pode mudar à vontade — não afeta Q", "fontSize": 12, "color": "#78716c" }
  ]
}
\`\`\`

O triângulo na entrada de clock indica que é **sensível à borda** (edge-triggered): a captura acontece apenas no instante da transição 0→1 do clock.

### Diagrama Temporal

\`\`\`diagram
{
  "title": "Comportamento temporal do Flip-Flop D",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "text", "x": 60, "y": 40, "content": "CLK", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 60, "y": 110, "content": "D", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 60, "y": 180, "content": "Q", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 100, "y": 50 }, "to": { "x": 150, "y": 50 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 150, "y": 50 }, "to": { "x": 150, "y": 20 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 150, "y": 20 }, "to": { "x": 250, "y": 20 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 250, "y": 20 }, "to": { "x": 250, "y": 50 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 250, "y": 50 }, "to": { "x": 350, "y": 50 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 350, "y": 50 }, "to": { "x": 350, "y": 20 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 350, "y": 20 }, "to": { "x": 450, "y": 20 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 450, "y": 20 }, "to": { "x": 450, "y": 50 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 450, "y": 50 }, "to": { "x": 550, "y": 50 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 550, "y": 50 }, "to": { "x": 550, "y": 20 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 550, "y": 20 }, "to": { "x": 650, "y": 20 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 650, "y": 20 }, "to": { "x": 650, "y": 50 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 650, "y": 50 }, "to": { "x": 750, "y": 50 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 100, "y": 120 }, "to": { "x": 200, "y": 120 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 200, "y": 120 }, "to": { "x": 200, "y": 90 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 200, "y": 90 }, "to": { "x": 400, "y": 90 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 400, "y": 90 }, "to": { "x": 400, "y": 120 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 400, "y": 120 }, "to": { "x": 500, "y": 120 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 120 }, "to": { "x": 500, "y": 90 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 90 }, "to": { "x": 750, "y": 90 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 100, "y": 190 }, "to": { "x": 350, "y": 190 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 350, "y": 190 }, "to": { "x": 350, "y": 160 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 350, "y": 160 }, "to": { "x": 450, "y": 160 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 450, "y": 160 }, "to": { "x": 450, "y": 190 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 450, "y": 190 }, "to": { "x": 550, "y": 190 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 550, "y": 190 }, "to": { "x": 550, "y": 160 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 550, "y": 160 }, "to": { "x": 750, "y": 160 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 150, "y": 55 }, "to": { "x": 150, "y": 200 }, "stroke": "#f59e0b", "strokeWidth": 1, "dashed": true },
    { "type": "line", "from": { "x": 350, "y": 55 }, "to": { "x": 350, "y": 200 }, "stroke": "#f59e0b", "strokeWidth": 1, "dashed": true },
    { "type": "line", "from": { "x": 550, "y": 55 }, "to": { "x": 550, "y": 200 }, "stroke": "#f59e0b", "strokeWidth": 1, "dashed": true },

    { "type": "text", "x": 150, "y": 220, "content": "↑", "fontSize": 14, "color": "#f59e0b" },
    { "type": "text", "x": 350, "y": 220, "content": "↑", "fontSize": 14, "color": "#f59e0b" },
    { "type": "text", "x": 550, "y": 220, "content": "↑", "fontSize": 14, "color": "#f59e0b" },

    { "type": "text", "x": 150, "y": 250, "content": "D=0", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 150, "y": 265, "content": "Q←0", "fontSize": 10, "color": "#10b981" },

    { "type": "text", "x": 350, "y": 250, "content": "D=1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 350, "y": 265, "content": "Q←1", "fontSize": 10, "color": "#10b981" },

    { "type": "text", "x": 550, "y": 250, "content": "D=1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 550, "y": 265, "content": "Q←1", "fontSize": 10, "color": "#10b981" }
  ]
}
\`\`\`

> [!nota] Observe que Q só muda nas bordas de subida do clock (linhas tracejadas). Mesmo D mudando no meio do ciclo, Q permanece estável.

---

## Flip-Flop JK: O Mais Versátil

O **Flip-Flop JK** é como um SR melhorado: quando J=K=1 (que seria proibido no SR), ele **inverte** o estado — o chamado **toggle**.

| J   | K   | Q (próximo) | Ação             |
| --- | --- | ----------- | ---------------- |
| 0   | 0   | Q           | Mantém           |
| 0   | 1   | 0           | Reset            |
| 1   | 0   | 1           | Set              |
| 1   | 1   | Q'          | Toggle (inverte) |

\`\`\`diagram
{
  "title": "Flip-Flop JK",
  "width": 840,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 60, "y": 30, "width": 280, "height": 140, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 14 },
    { "type": "text", "x": 200, "y": 60, "content": "Símbolo do Flip-Flop JK", "fontSize": 14, "color": "#5b21b6", "fontWeight": "bold" },

    { "type": "rect", "x": 140, "y": 80, "width": 100, "height": 70, "label": "", "fill": "#fff", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 6 },
    { "type": "text", "x": 190, "y": 120, "content": "JK", "fontSize": 16, "color": "#8b5cf6", "fontWeight": "bold" },

    { "type": "text", "x": 110, "y": 100, "content": "J", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 110, "y": 140, "content": "K", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 265, "y": 100, "content": "Q", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 265, "y": 140, "content": "Q'", "fontSize": 12, "color": "#78716c" },

    { "type": "rect", "x": 380, "y": 30, "width": 420, "height": 140, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 590, "y": 60, "content": "Aplicações do Toggle (J=K=1)", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },

    { "type": "text", "x": 590, "y": 100, "content": "• Divisor de frequência por 2", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 590, "y": 125, "content": "• Base para contadores", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 590, "y": 150, "content": "• Geração de formas de onda", "fontSize": 13, "color": "#57534e" }
  ]
}
\`\`\`

---

## Flip-Flop T: O Toggler

O **Flip-Flop T** (Toggle) é uma simplificação do JK para quando você só precisa do toggle:

| T   | Q (próximo) | Ação    |
| --- | ----------- | ------- |
| 0   | Q           | Mantém  |
| 1   | Q'          | Inverte |

É simplesmente um JK com J=K=T. Muito usado em contadores!

---

## Comparação dos Flip-Flops

\`\`\`diagram
{
  "title": "Resumo: Tipos de Flip-Flops",
  "width": 840,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 30, "y": 30, "width": 185, "height": 200, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12 },
    { "type": "text", "x": 122, "y": 60, "content": "D (Data)", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 122, "y": 95, "content": "Q ← D", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 122, "y": 130, "content": "O mais usado", "fontSize": 12, "color": "#3b82f6" },
    { "type": "text", "x": 122, "y": 160, "content": "Registradores", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 122, "y": 180, "content": "Memória", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 122, "y": 200, "content": "Pipeline", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 235, "y": 30, "width": 185, "height": 200, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 12 },
    { "type": "text", "x": 327, "y": 60, "content": "JK", "fontSize": 15, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 327, "y": 95, "content": "Set/Reset/Toggle", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 327, "y": 130, "content": "Mais versátil", "fontSize": 12, "color": "#8b5cf6" },
    { "type": "text", "x": 327, "y": 160, "content": "Contadores", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 327, "y": 180, "content": "Sequenciadores", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 327, "y": 200, "content": "FSMs", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 440, "y": 30, "width": 185, "height": 200, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 532, "y": 60, "content": "T (Toggle)", "fontSize": 15, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 532, "y": 95, "content": "Q ← Q' se T=1", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 532, "y": 130, "content": "Divisor freq.", "fontSize": 12, "color": "#10b981" },
    { "type": "text", "x": 532, "y": 160, "content": "Contadores", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 532, "y": 180, "content": "Divisores", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 532, "y": 200, "content": "Prescalers", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 645, "y": 30, "width": 165, "height": 200, "label": "", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 12 },
    { "type": "text", "x": 727, "y": 60, "content": "SR", "fontSize": 15, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "text", "x": 727, "y": 95, "content": "Set/Reset", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 727, "y": 130, "content": "Básico", "fontSize": 12, "color": "#ef4444" },
    { "type": "text", "x": 727, "y": 160, "content": "Estado proibido", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 727, "y": 180, "content": "Usado em latches", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 727, "y": 200, "content": "simples", "fontSize": 11, "color": "#78716c" }
  ]
}
\`\`\`

---

## Recapitulando

| Conceito          | Descrição                                   |
| ----------------- | ------------------------------------------- |
| **Realimentação** | Conectar saída à entrada para manter estado |
| **Latch**         | Sensível ao nível (enquanto enable=1)       |
| **Flip-Flop**     | Sensível à borda (momento da transição)     |
| **D**             | Armazena o dado na borda do clock           |
| **JK**            | Set, Reset, ou Toggle                       |
| **T**             | Inverte ou mantém                           |

---

## Exercícios de Fixação

1. **Latch SR:** Se um latch SR está em Q=0 e aplicamos S=1, R=0 por um instante e depois voltamos para S=0, R=0, qual será o valor de Q?

2. **Flip-Flop D:** Um FF-D tem clock de 1 MHz. Quantas bordas de subida ocorrem por segundo? A cada borda, o que acontece com Q?

3. **Toggle:** Um FF-T com T=1 recebe um clock de 1 kHz. Qual é a frequência do sinal em Q? Desenhe o diagrama temporal.

4. **JK vs D:** Por que o FF-D é mais usado em registradores modernos, enquanto o JK era popular em contadores antigos?

5. **Projeto:** Desenhe um circuito que use um FF-D para criar um "botão de alternância": cada vez que o botão é pressionado, a saída alterna entre ligado e desligado.`,headings:[{level:2,text:"O Problema: Circuitos que Esquecem",id:"o-problema-circuitos-que-esquecem"},{level:2,text:"A Solução: Realimentação",id:"a-solução-realimentação"},{level:3,text:"O Latch SR (Set-Reset)",id:"o-latch-sr-set-reset"},{level:2,text:"Do Latch ao Flip-Flop: Adicionando Controle",id:"do-latch-ao-flip-flop-adicionando-controle"},{level:3,text:"Latch SR com Enable",id:"latch-sr-com-enable"},{level:2,text:"Flip-Flop D: O Mais Usado",id:"flip-flop-d-o-mais-usado"},{level:3,text:"Diagrama Temporal",id:"diagrama-temporal"},{level:2,text:"Flip-Flop JK: O Mais Versátil",id:"flip-flop-jk-o-mais-versátil"},{level:2,text:"Flip-Flop T: O Toggler",id:"flip-flop-t-o-toggler"},{level:2,text:"Comparação dos Flip-Flops",id:"comparação-dos-flip-flops"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"contadores-registradores/maquinas-de-estados":{title:"Máquinas de Estados Finitos",description:"Controlando sequências e comportamentos — quando circuitos precisam 'lembrar' onde estão para decidir o que fazer.",duration:"1 aula",order:999,category:"contadores-registradores",content:`# Máquinas de Estados Finitos

Até agora vimos circuitos que contam ou armazenam dados. Mas como projetar um sistema que reage diferentemente dependendo do **histórico** de entradas? A resposta está nas **Máquinas de Estados Finitos** (FSM - Finite State Machines).

---

## O que é uma FSM?

Uma FSM é um modelo matemático para sistemas que podem estar em um número finito de **estados**. A qualquer momento:

- O sistema está em exatamente **um** estado
- Entradas causam **transições** para outros estados
- A saída depende do estado atual (e possivelmente das entradas)

\`\`\`diagram
{
  "title": "Exemplo: Semáforo simplificado",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "FSM de um Semáforo", "fontSize": 16, "color": "#57534e", "fontWeight": "bold" },

    { "type": "ellipse", "cx": 150, "cy": 150, "rx": 60, "ry": 45, "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "text", "x": 150, "y": 155, "content": "VERDE", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },

    { "type": "ellipse", "cx": 420, "cy": 150, "rx": 60, "ry": 45, "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 3 },
    { "type": "text", "x": 420, "y": 155, "content": "AMARELO", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },

    { "type": "ellipse", "cx": 690, "cy": 150, "rx": 60, "ry": 45, "fill": "#fee2e2", "stroke": "#ef4444", "strokeWidth": 3 },
    { "type": "text", "x": 690, "y": 155, "content": "VERMELHO", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 210, "y": 140 }, "to": { "x": 360, "y": 140 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 285, "y": 130, "content": "30s", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 340, "y": 140, "content": "→", "fontSize": 16, "color": "#57534e" },

    { "type": "line", "from": { "x": 480, "y": 140 }, "to": { "x": 630, "y": 140 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 555, "y": 130, "content": "5s", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 610, "y": 140, "content": "→", "fontSize": 16, "color": "#57534e" },

    { "type": "line", "from": { "x": 690, "y": 195 }, "to": { "x": 690, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 690, "y": 230 }, "to": { "x": 150, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 150, "y": 230 }, "to": { "x": 150, "y": 195 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 420, "y": 250, "content": "45s", "fontSize": 11, "color": "#78716c" },

    { "type": "line", "from": { "x": 70, "y": 150 }, "to": { "x": 90, "y": 150 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 55, "y": 155, "content": "→", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 50, "y": 175, "content": "início", "fontSize": 10, "color": "#78716c" }
  ]
}
\`\`\`

O semáforo tem 3 estados. A transição entre eles é determinada por um timer. Este é um exemplo de FSM!

---

## Componentes de uma FSM

\`\`\`diagram
{
  "title": "Anatomia de uma FSM",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 100, "y": 40, "width": 640, "height": 250, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "strokeWidth": 2, "rounded": 14 },
    { "type": "text", "x": 420, "y": 70, "content": "Estrutura de uma FSM em Hardware", "fontSize": 15, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 280, "y": 100, "width": 140, "height": 80, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 350, "y": 130, "content": "Registrador", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 350, "y": 150, "content": "de Estado", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 350, "y": 172, "content": "(flip-flops)", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 140, "y": 200, "width": 140, "height": 60, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 210, "y": 225, "content": "Lógica de", "fontSize": 12, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 245, "content": "Próximo Estado", "fontSize": 12, "color": "#5b21b6", "fontWeight": "bold" },

    { "type": "rect", "x": 420, "y": 200, "width": 140, "height": 60, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 490, "y": 225, "content": "Lógica de", "fontSize": 12, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 490, "y": 245, "content": "Saída", "fontSize": 12, "color": "#065f46", "fontWeight": "bold" },

    { "type": "text", "x": 60, "y": 145, "content": "Entradas", "fontSize": 12, "color": "#57534e" },
    { "type": "line", "from": { "x": 60, "y": 150 }, "to": { "x": 100, "y": 150 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 100, "y": 150 }, "to": { "x": 100, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 100, "y": 230 }, "to": { "x": 140, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 280, "y": 230 }, "to": { "x": 350, "y": 230 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 350, "y": 230 }, "to": { "x": 350, "y": 180 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "text", "x": 295, "y": 220, "content": "próx", "fontSize": 10, "color": "#8b5cf6" },

    { "type": "line", "from": { "x": 350, "y": 180 }, "to": { "x": 350, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 420, "y": 140 }, "to": { "x": 650, "y": 140 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 650, "cy": 140, "rx": 5, "ry": 5, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "line", "from": { "x": 650, "y": 140 }, "to": { "x": 650, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 650, "y": 230 }, "to": { "x": 560, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 650, "y": 140 }, "to": { "x": 700, "y": 140 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 665, "y": 130, "content": "estado", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 665, "y": 145, "content": "atual", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 490, "y": 200 }, "to": { "x": 490, "y": 140 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 560, "y": 230 }, "to": { "x": 700, "y": 230 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "text", "x": 720, "y": 235, "content": "Saídas", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 210, "y": 200 }, "to": { "x": 210, "y": 170 }, "stroke": "#78716c", "strokeWidth": 1, "dashed": true },
    { "type": "line", "from": { "x": 210, "y": 170 }, "to": { "x": 280, "y": 155 }, "stroke": "#78716c", "strokeWidth": 1, "dashed": true },
    { "type": "text", "x": 230, "y": 165, "content": "CLK", "fontSize": 9, "color": "#78716c" }
  ]
}
\`\`\`

1. **Registrador de Estado**: Flip-flops que armazenam o estado atual
2. **Lógica de Próximo Estado**: Circuito combinacional que calcula o próximo estado baseado no estado atual e nas entradas
3. **Lógica de Saída**: Circuito combinacional que gera as saídas

---

## Tipos de FSM: Moore vs Mealy

Existem duas arquiteturas clássicas:

\`\`\`diagram
{
  "title": "Moore vs Mealy",
  "width": 840,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 40, "y": 30, "width": 370, "height": 200, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 225, "y": 60, "content": "MOORE", "fontSize": 16, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 225, "y": 95, "content": "Saída = f(estado atual)", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 225, "y": 130, "content": "Saídas associadas aos ESTADOS", "fontSize": 12, "color": "#3b82f6" },
    { "type": "text", "x": 225, "y": 165, "content": "✓ Mais estável (saída não depende de entrada)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 225, "y": 185, "content": "✓ Mais fácil de debugar", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 225, "y": 205, "content": "✗ Pode precisar de mais estados", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 430, "y": 30, "width": 370, "height": 200, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 615, "y": 60, "content": "MEALY", "fontSize": 16, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 615, "y": 95, "content": "Saída = f(estado, entrada)", "fontSize": 14, "color": "#57534e" },
    { "type": "text", "x": 615, "y": 130, "content": "Saídas associadas às TRANSIÇÕES", "fontSize": 12, "color": "#f59e0b" },
    { "type": "text", "x": 615, "y": 165, "content": "✓ Geralmente menos estados", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 615, "y": 185, "content": "✓ Resposta mais rápida", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 615, "y": 205, "content": "✗ Saída pode ter glitches", "fontSize": 11, "color": "#78716c" }
  ]
}
\`\`\`

---

## Exemplo Prático: Detector de Sequência

Vamos projetar uma FSM que detecta a sequência **"101"** em uma entrada serial:

### Passo 1: Diagrama de Estados

\`\`\`diagram
{
  "title": "Detector de sequência 101 (Moore)",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "FSM: Detecta '101' na entrada", "fontSize": 15, "color": "#57534e", "fontWeight": "bold" },

    { "type": "ellipse", "cx": 140, "cy": 170, "rx": 50, "ry": 40, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 140, "y": 165, "content": "S0", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 140, "y": 185, "content": "out=0", "fontSize": 10, "color": "#78716c" },

    { "type": "ellipse", "cx": 320, "cy": 170, "rx": 50, "ry": 40, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 320, "y": 165, "content": "S1", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 320, "y": 185, "content": "out=0", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 320, "y": 135, "content": "viu '1'", "fontSize": 9, "color": "#78716c", "fontStyle": "italic" },

    { "type": "ellipse", "cx": 500, "cy": 170, "rx": 50, "ry": 40, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "text", "x": 500, "y": 165, "content": "S2", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 500, "y": 185, "content": "out=0", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 500, "y": 135, "content": "viu '10'", "fontSize": 9, "color": "#78716c", "fontStyle": "italic" },

    { "type": "ellipse", "cx": 680, "cy": 170, "rx": 50, "ry": 40, "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "text", "x": 680, "y": 165, "content": "S3", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 680, "y": 185, "content": "out=1", "fontSize": 10, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 680, "y": 135, "content": "viu '101'!", "fontSize": 9, "color": "#10b981", "fontStyle": "italic" },

    { "type": "line", "from": { "x": 60, "y": 170 }, "to": { "x": 90, "y": 170 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 55, "y": 175, "content": "→", "fontSize": 12, "color": "#57534e" },

    { "type": "line", "from": { "x": 190, "y": 160 }, "to": { "x": 270, "y": 160 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 230, "y": 150, "content": "1", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 370, "y": 160 }, "to": { "x": 450, "y": 160 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 410, "y": 150, "content": "0", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 550, "y": 160 }, "to": { "x": 630, "y": 160 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 590, "y": 150, "content": "1", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 140, "y": 210 }, "to": { "x": 140, "y": 250 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 140, "y": 250 }, "to": { "x": 110, "y": 250 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 110, "y": 250 }, "to": { "x": 110, "y": 190 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 110, "y": 190 }, "to": { "x": 95, "y": 175 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "text", "x": 100, "y": 260, "content": "0", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 320, "y": 210 }, "to": { "x": 320, "y": 270 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 320, "y": 270 }, "to": { "x": 350, "y": 270 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 350, "y": 270 }, "to": { "x": 350, "y": 200 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 350, "y": 200 }, "to": { "x": 365, "y": 185 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "text", "x": 355, "y": 280, "content": "1", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 500, "y": 210 }, "to": { "x": 500, "y": 280 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 500, "y": 280 }, "to": { "x": 140, "y": 280 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 140, "y": 280 }, "to": { "x": 140, "y": 215 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "text", "x": 320, "y": 295, "content": "0", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 680, "y": 210 }, "to": { "x": 680, "y": 290 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 680, "y": 290 }, "to": { "x": 500, "y": 290 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 500, "y": 290 }, "to": { "x": 500, "y": 215 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "text", "x": 590, "y": 305, "content": "0", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 705, "y": 135 }, "to": { "x": 705, "y": 100 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 705, "y": 100 }, "to": { "x": 320, "y": 100 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 320, "y": 100 }, "to": { "x": 320, "y": 130 }, "stroke": "#78716c", "strokeWidth": 1 },
    { "type": "text", "x": 510, "y": 95, "content": "1 (continua com '1' já visto)", "fontSize": 10, "color": "#78716c" }
  ]
}
\`\`\`

### Passo 2: Tabela de Transições

| Estado Atual | Entrada | Próximo Estado | Saída |
| ------------ | ------- | -------------- | ----- |
| S0           | 0       | S0             | 0     |
| S0           | 1       | S1             | 0     |
| S1           | 0       | S2             | 0     |
| S1           | 1       | S1             | 0     |
| S2           | 0       | S0             | 0     |
| S2           | 1       | S3             | 0     |
| S3           | 0       | S2             | 1     |
| S3           | 1       | S1             | 1     |

### Passo 3: Codificação dos Estados

Com 4 estados, precisamos de 2 bits:

- S0 = 00
- S1 = 01
- S2 = 10
- S3 = 11

### Passo 4: Derivar as Equações

Com a tabela de transições e a codificação, usamos mapas de Karnaugh ou simplificação booleana para obter:

- **Q1_próx** = Q0·X + Q1·Q0'·X'
- **Q0_próx** = X
- **Saída** = Q1·Q0

> [!nota] Este processo sistemático transforma qualquer comportamento descrito como FSM em circuito digital real!

---

## Implementando a FSM em Hardware

\`\`\`diagram
{
  "title": "Circuito do Detector de Sequência",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 80, "y": 40, "width": 680, "height": 210, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },

    { "type": "text", "x": 50, "y": 130, "content": "X", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 65, "y": 125 }, "to": { "x": 110, "y": 125 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "rect", "x": 110, "y": 90, "width": 150, "height": 100, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 185, "y": 130, "content": "Lógica de", "fontSize": 12, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 185, "y": 150, "content": "Próximo Estado", "fontSize": 12, "color": "#5b21b6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 260, "y": 130 }, "to": { "x": 320, "y": 130 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 260, "y": 150 }, "to": { "x": 320, "y": 150 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 320, "y": 100, "width": 100, "height": 80, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 370, "y": 130, "content": "D Q", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 370, "y": 150, "content": "D Q", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 370, "y": 175, "content": "CLK", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 420, "y": 130 }, "to": { "x": 550, "y": 130 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 420, "y": 150 }, "to": { "x": 550, "y": 150 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "text", "x": 460, "y": 125, "content": "Q1", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 460, "y": 165, "content": "Q0", "fontSize": 11, "color": "#57534e" },

    { "type": "ellipse", "cx": 550, "cy": 140, "rx": 5, "ry": 5, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "line", "from": { "x": 550, "y": 140 }, "to": { "x": 550, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 550, "y": 220 }, "to": { "x": 185, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 185, "y": 220 }, "to": { "x": 185, "y": 190 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 580, "y": 110, "width": 100, "height": 60, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 630, "y": 135, "content": "Lógica", "fontSize": 12, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 630, "y": 155, "content": "de Saída", "fontSize": 12, "color": "#065f46", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 680, "y": 140 }, "to": { "x": 730, "y": 140 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "text", "x": 740, "y": 145, "content": "Y", "fontSize": 14, "color": "#10b981", "fontWeight": "bold" },

    { "type": "text", "x": 630, "y": 200, "content": "Y = Q1 · Q0", "fontSize": 12, "color": "#065f46" }
  ]
}
\`\`\`

---

## Aplicações de FSMs

### 1. Controladores de Protocolo

UART, SPI, I2C — todos usam FSMs para controlar a comunicação.

### 2. Interfaces de Usuário

Menus, navegação, detecção de gestos (duplo clique, swipe).

### 3. Controladores de Motor

Sequências de acionamento para motores de passo.

### 4. Unidade de Controle da CPU

A parte do processador que decodifica e executa instruções é uma FSM!

### 5. Reconhecimento de Padrões

Detectores de sequência, parsers, validadores.

---

## Dicas de Projeto de FSMs

\`\`\`diagram
{
  "title": "Boas práticas em FSMs",
  "width": 840,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 40, "y": 30, "width": 240, "height": 160, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 160, "y": 60, "content": "✓ Sempre defina", "fontSize": 13, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 160, "y": 90, "content": "Estado inicial (reset)", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 160, "y": 115, "content": "Transições para", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 160, "y": 135, "content": "TODAS as entradas", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 160, "y": 160, "content": "Estado de erro/default", "fontSize": 12, "color": "#57534e" },

    { "type": "rect", "x": 300, "y": 30, "width": 240, "height": 160, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12 },
    { "type": "text", "x": 420, "y": 60, "content": "⚠ Cuidado com", "fontSize": 13, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 90, "content": "Estados inalcançáveis", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 115, "content": "Estados sem saída", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 140, "content": "Condições de corrida", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 165, "content": "Metaestabilidade", "fontSize": 12, "color": "#57534e" },

    { "type": "rect", "x": 560, "y": 30, "width": 240, "height": 160, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12 },
    { "type": "text", "x": 680, "y": 60, "content": "💡 Simplifique", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 680, "y": 90, "content": "Minimize estados", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 680, "y": 115, "content": "Use codificação one-hot", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 680, "y": 140, "content": "para FPGAs", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 680, "y": 165, "content": "Documente bem!", "fontSize": 12, "color": "#57534e" }
  ]
}
\`\`\`

> [!dica] **One-hot encoding**: cada estado usa um flip-flop próprio (S0=0001, S1=0010, S2=0100, S3=1000). Mais flip-flops, mas lógica mais simples — ideal para FPGAs.

---

## Recapitulando

| Conceito        | Descrição                             |
| --------------- | ------------------------------------- |
| **Estado**      | Condição atual do sistema             |
| **Transição**   | Mudança de estado causada por entrada |
| **Moore**       | Saída depende só do estado            |
| **Mealy**       | Saída depende do estado e entrada     |
| **Codificação** | Representação binária dos estados     |

---

## Exercícios de Fixação

1. **Projeto básico:** Desenhe o diagrama de estados para um detector de sequência "110".

2. **Moore vs Mealy:** Converta o detector de "101" para uma máquina Mealy. Quantos estados você precisa?

3. **Semáforo:** Projete uma FSM para um semáforo com botão de pedestre. Quando o botão é pressionado, o semáforo deve ir para vermelho após completar o ciclo atual.

4. **Codificação:** Para uma FSM com 5 estados, quantos flip-flops são necessários com codificação binária? E com one-hot?

5. **Implementação:** Dada a FSM do detector de "101", escreva as equações booleanas para Q1_próx e Q0_próx.

6. **Análise:** Uma FSM tem o seguinte comportamento: em S0 vai para S1 com entrada 0, em S1 vai para S2 com entrada 1, em S2 vai para S0 com entrada 0 ou para S1 com entrada 1, saída=1 apenas em S2. Que sequência essa FSM detecta?`,headings:[{level:2,text:"O que é uma FSM?",id:"o-que-é-uma-fsm"},{level:2,text:"Componentes de uma FSM",id:"componentes-de-uma-fsm"},{level:2,text:"Tipos de FSM: Moore vs Mealy",id:"tipos-de-fsm-moore-vs-mealy"},{level:2,text:"Exemplo Prático: Detector de Sequência",id:"exemplo-prático-detector-de-sequência"},{level:3,text:"Passo 1: Diagrama de Estados",id:"passo-1-diagrama-de-estados"},{level:3,text:"Passo 2: Tabela de Transições",id:"passo-2-tabela-de-transições"},{level:3,text:"Passo 3: Codificação dos Estados",id:"passo-3-codificação-dos-estados"},{level:3,text:"Passo 4: Derivar as Equações",id:"passo-4-derivar-as-equações"},{level:2,text:"Implementando a FSM em Hardware",id:"implementando-a-fsm-em-hardware"},{level:2,text:"Aplicações de FSMs",id:"aplicações-de-fsms"},{level:3,text:"1. Controladores de Protocolo",id:"1-controladores-de-protocolo"},{level:3,text:"2. Interfaces de Usuário",id:"2-interfaces-de-usuário"},{level:3,text:"3. Controladores de Motor",id:"3-controladores-de-motor"},{level:3,text:"4. Unidade de Controle da CPU",id:"4-unidade-de-controle-da-cpu"},{level:3,text:"5. Reconhecimento de Padrões",id:"5-reconhecimento-de-padrões"},{level:2,text:"Dicas de Projeto de FSMs",id:"dicas-de-projeto-de-fsms"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"contadores-registradores/projeto-arduino":{title:"Projeto: Sistema de Temporização com Arduino",description:"Integrando flip-flops, registradores e contadores em um sistema real de cronometragem.",duration:"1 aula",order:999,category:"contadores-registradores",content:`# Projeto: Sistema de Temporização com Arduino

Hora de colocar em prática tudo que aprendemos! Vamos construir um sistema de temporização que combina contadores, registradores e controle de LEDs — primeiro entendendo os CIs dedicados, depois implementando com Arduino.

---

## Objetivo do Projeto

Construir um **cronômetro digital** com display de 4 dígitos que:

- Conta segundos e décimos de segundo
- Pode ser iniciado, pausado e resetado
- Usa registradores de deslocamento para controlar LEDs/displays

\`\`\`diagram
{
  "title": "Visão geral do projeto",
  "width": 840,
  "height": 250,
  "elements": [
    { "type": "rect", "x": 100, "y": 40, "width": 640, "height": 180, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "strokeWidth": 2, "rounded": 14 },
    { "type": "text", "x": 420, "y": 70, "content": "Sistema de Cronômetro Digital", "fontSize": 16, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 140, "y": 100, "width": 100, "height": 60, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 190, "y": 125, "content": "Botões", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 190, "y": 145, "content": "START/STOP", "fontSize": 10, "color": "#57534e" },

    { "type": "line", "from": { "x": 240, "y": 130 }, "to": { "x": 300, "y": 130 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 300, "y": 90, "width": 120, "height": 80, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 360, "y": 115, "content": "Arduino", "fontSize": 12, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 360, "y": 135, "content": "Nano/Uno", "fontSize": 12, "color": "#5b21b6" },
    { "type": "text", "x": 360, "y": 155, "content": "(Controle)", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 420, "y": 130 }, "to": { "x": 480, "y": 130 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 480, "y": 90, "width": 120, "height": 80, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 540, "y": 115, "content": "74HC595", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 540, "y": 135, "content": "Shift Register", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 540, "y": 155, "content": "(em cascata)", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 600, "y": 130 }, "to": { "x": 650, "y": 130 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 650, "y": 100, "width": 70, "height": 60, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 685, "y": 125, "content": "Display", "fontSize": 11, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 685, "y": 145, "content": "7-seg", "fontSize": 11, "color": "#065f46" },

    { "type": "text", "x": 420, "y": 200, "content": "Apenas 3 pinos do Arduino → controlam 4 dígitos!", "fontSize": 12, "color": "#8b5cf6", "fontStyle": "italic" }
  ]
}
\`\`\`

---

## Parte 1: Conhecendo o 74HC595

O 74HC595 é um **registrador de deslocamento** com saída paralela. É perfeito para expandir as saídas do Arduino!

\`\`\`diagram
{
  "title": "Pinagem do 74HC595",
  "width": 840,
  "height": 340,
  "elements": [
    { "type": "rect", "x": 300, "y": 40, "width": 240, "height": 260, "label": "", "fill": "#1e293b", "stroke": "#334155", "strokeWidth": 3, "rounded": 10 },

    { "type": "ellipse", "cx": 420, "cy": 65, "rx": 15, "ry": 8, "fill": "#475569", "stroke": "#475569" },

    { "type": "text", "x": 260, "y": 90, "content": "Q1 ←", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 260, "y": 120, "content": "Q2 ←", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 260, "y": 150, "content": "Q3 ←", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 260, "y": 180, "content": "Q4 ←", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 260, "y": 210, "content": "Q5 ←", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 260, "y": 240, "content": "Q6 ←", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 260, "y": 270, "content": "Q7 ←", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 247, "y": 300, "content": "GND ←", "fontSize": 12, "color": "#78716c" },

    { "type": "text", "x": 570, "y": 90, "content": "→ VCC", "fontSize": 12, "color": "#ef4444" },
    { "type": "text", "x": 570, "y": 120, "content": "→ Q0", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 570, "y": 150, "content": "→ DS (data)", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 570, "y": 180, "content": "→ OE (enable)", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 570, "y": 210, "content": "→ STCP (latch)", "fontSize": 12, "color": "#f59e0b", "fontWeight": "bold" },
    { "type": "text", "x": 570, "y": 240, "content": "→ SHCP (clock)", "fontSize": 12, "color": "#8b5cf6", "fontWeight": "bold" },
    { "type": "text", "x": 570, "y": 270, "content": "→ MR (reset)", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 570, "y": 300, "content": "→ Q7' (cascata)", "fontSize": 12, "color": "#10b981" },

    { "type": "text", "x": 420, "y": 170, "content": "74HC595", "fontSize": 14, "color": "#f1f5f9", "fontWeight": "bold" },

    { "type": "text", "x": 130, "y": 90, "content": "1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 130, "y": 120, "content": "2", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 130, "y": 150, "content": "3", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 130, "y": 180, "content": "4", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 130, "y": 210, "content": "5", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 130, "y": 240, "content": "6", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 130, "y": 270, "content": "7", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 130, "y": 300, "content": "8", "fontSize": 10, "color": "#78716c" },

    { "type": "text", "x": 700, "y": 90, "content": "16", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 120, "content": "15", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 150, "content": "14", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 180, "content": "13", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 210, "content": "12", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 240, "content": "11", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 270, "content": "10", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 300, "content": "9", "fontSize": 10, "color": "#78716c" }
  ]
}
\`\`\`

### Funcionamento Básico

\`\`\`diagram
{
  "title": "Como o 74HC595 funciona",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "Três sinais: DATA, CLOCK e LATCH", "fontSize": 15, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 60, "y": 60, "width": 720, "height": 200, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },

    { "type": "text", "x": 100, "y": 90, "content": "CLOCK (SHCP)", "fontSize": 11, "color": "#8b5cf6", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 100, "y": 110 }, "to": { "x": 700, "y": 110 }, "stroke": "#e5e7eb", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 140, "y": 130 }, "to": { "x": 140, "y": 110 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 220, "y": 130 }, "to": { "x": 220, "y": 110 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 300, "y": 130 }, "to": { "x": 300, "y": 110 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 380, "y": 130 }, "to": { "x": 380, "y": 110 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 460, "y": 130 }, "to": { "x": 460, "y": 110 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 540, "y": 130 }, "to": { "x": 540, "y": 110 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 620, "y": 130 }, "to": { "x": 620, "y": 110 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 700, "y": 130 }, "to": { "x": 700, "y": 110 }, "stroke": "#8b5cf6", "strokeWidth": 2 },

    { "type": "text", "x": 100, "y": 145, "content": "DATA (DS)", "fontSize": 11, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 100, "y": 165 }, "to": { "x": 180, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 180, "y": 165 }, "to": { "x": 180, "y": 155 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 180, "y": 155 }, "to": { "x": 260, "y": 155 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 260, "y": 155 }, "to": { "x": 260, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 260, "y": 165 }, "to": { "x": 340, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 340, "y": 165 }, "to": { "x": 340, "y": 155 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 340, "y": 155 }, "to": { "x": 500, "y": 155 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 155 }, "to": { "x": 500, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 500, "y": 165 }, "to": { "x": 580, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 580, "y": 165 }, "to": { "x": 580, "y": 155 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 580, "y": 155 }, "to": { "x": 660, "y": 155 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 660, "y": 155 }, "to": { "x": 660, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 660, "y": 165 }, "to": { "x": 740, "y": 165 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "text", "x": 150, "y": 178, "content": "0", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 215, "y": 178, "content": "1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 275, "y": 178, "content": "0", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 395, "y": 178, "content": "1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 475, "y": 178, "content": "0", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 540, "y": 178, "content": "1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 620, "y": 178, "content": "1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 178, "content": "0", "fontSize": 10, "color": "#78716c" },

    { "type": "text", "x": 100, "y": 205, "content": "LATCH (STCP)", "fontSize": 11, "color": "#f59e0b", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 100, "y": 225 }, "to": { "x": 720, "y": 225 }, "stroke": "#e5e7eb", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 720, "y": 240 }, "to": { "x": 720, "y": 225 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "text", "x": 730, "y": 245, "content": "↑", "fontSize": 14, "color": "#f59e0b" },
    { "type": "text", "x": 730, "y": 185, "content": "Transfere!", "fontSize": 10, "color": "#f59e0b", "fontStyle": "italic" }
  ]
}
\`\`\`

> [!importante] O LATCH transfere todos os bits do registrador interno para as saídas de uma vez — evitando "cintilação" durante o deslocamento.

---

## Parte 2: Lista de Materiais

| Quantidade | Componente              | Observação                  |
| ---------- | ----------------------- | --------------------------- |
| 1          | Arduino Uno/Nano        | Microcontrolador            |
| 2          | 74HC595                 | Registrador de deslocamento |
| 1          | Display 7-seg 4 dígitos | Cátodo comum                |
| 4          | Resistor 220Ω           | Para segmentos              |
| 4          | Transistor BC547        | Para multiplexação          |
| 4          | Resistor 1kΩ            | Base dos transistores       |
| 2          | Push button             | START/STOP e RESET          |
| 2          | Resistor 10kΩ           | Pull-down dos botões        |
| 1          | Protoboard              | Para montagem               |
| -          | Jumpers                 | Conexões                    |

---

## Parte 3: Conexões

\`\`\`diagram
{
  "title": "Esquema de conexões Arduino + 74HC595",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 60, "y": 60, "width": 140, "height": 200, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 130, "y": 90, "content": "Arduino", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 130, "y": 115, "content": "Uno", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "text", "x": 165, "y": 150, "content": "D11 →", "fontSize": 10, "color": "#3b82f6" },
    { "type": "text", "x": 165, "y": 175, "content": "D12 →", "fontSize": 10, "color": "#8b5cf6" },
    { "type": "text", "x": 165, "y": 200, "content": "D8 →", "fontSize": 10, "color": "#f59e0b" },
    { "type": "text", "x": 100, "y": 240, "content": "D2, D3 → botões", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 200, "y": 145 }, "to": { "x": 280, "y": 145 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 200, "y": 170 }, "to": { "x": 280, "y": 170 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 200, "y": 195 }, "to": { "x": 280, "y": 195 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "rect", "x": 280, "y": 80, "width": 120, "height": 160, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 340, "y": 105, "content": "74HC595", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 340, "y": 125, "content": "#1", "fontSize": 11, "color": "#92400e" },
    { "type": "text", "x": 340, "y": 155, "content": "Q0-Q7", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 340, "y": 175, "content": "segmentos", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 340, "y": 220, "content": "Q7' →", "fontSize": 10, "color": "#10b981" },

    { "type": "line", "from": { "x": 380, "y": 215 }, "to": { "x": 440, "y": 215 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "rect", "x": 440, "y": 80, "width": 120, "height": 160, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 500, "y": 105, "content": "74HC595", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 500, "y": 125, "content": "#2", "fontSize": 11, "color": "#92400e" },
    { "type": "text", "x": 500, "y": 155, "content": "Q0-Q3", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 500, "y": 175, "content": "seleção", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 500, "y": 195, "content": "dígito", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 400, "y": 145 }, "to": { "x": 620, "y": 145 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 560, "y": 155 }, "to": { "x": 620, "y": 155 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 620, "y": 100, "width": 150, "height": 120, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 10 },
    { "type": "text", "x": 695, "y": 130, "content": "Display", "fontSize": 12, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 695, "y": 150, "content": "7-seg", "fontSize": 12, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 695, "y": 175, "content": "88:88", "fontSize": 20, "color": "#10b981", "fontWeight": "bold" },

    { "type": "text", "x": 420, "y": 280, "content": "CLK e LATCH são compartilhados (em paralelo)", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" },
    { "type": "text", "x": 420, "y": 300, "content": "DATA passa em cascata: Arduino → 595#1 → 595#2", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

### Conexões detalhadas:

**Arduino → 74HC595 #1:**

- D11 → DS (Data)
- D12 → SHCP (Clock)
- D8 → STCP (Latch)
- VCC → VCC, MR
- GND → GND, OE

**74HC595 #1 → #2:**

- Q7' (#1) → DS (#2)
- SHCP em paralelo
- STCP em paralelo

---

## Parte 4: Código Comentado

\`\`\`cpp
// Pinos do Arduino
const int DATA_PIN = 11;   // DS do 74HC595
const int CLOCK_PIN = 12;  // SHCP
const int LATCH_PIN = 8;   // STCP

const int START_BTN = 2;   // Botão start/stop
const int RESET_BTN = 3;   // Botão reset

// Padrões dos segmentos para dígitos 0-9
// Ordem: DP G F E D C B A (para cátodo comum)
const byte DIGITS[] = {
  0b00111111,  // 0
  0b00000110,  // 1
  0b01011011,  // 2
  0b01001111,  // 3
  0b01100110,  // 4
  0b01101101,  // 5
  0b01111101,  // 6
  0b00000111,  // 7
  0b01111111,  // 8
  0b01101111   // 9
};

// Padrões de seleção de dígito (um bit por transistor)
const byte DIGIT_SELECT[] = {
  0b00000001,  // Dígito 0 (décimos)
  0b00000010,  // Dígito 1 (segundos unidade)
  0b00000100,  // Dígito 2 (segundos dezena)
  0b00001000   // Dígito 3 (minutos unidade)
};

// Variáveis do cronômetro
volatile unsigned long tempoDecimos = 0;
volatile bool rodando = false;
unsigned long ultimoUpdate = 0;

void setup() {
  pinMode(DATA_PIN, OUTPUT);
  pinMode(CLOCK_PIN, OUTPUT);
  pinMode(LATCH_PIN, OUTPUT);
  pinMode(START_BTN, INPUT);
  pinMode(RESET_BTN, INPUT);

  // Interrupção para start/stop
  attachInterrupt(digitalPinToInterrupt(START_BTN),
                  toggleCronometro, RISING);
}

void loop() {
  // Atualiza contador a cada 100ms
  if (rodando && millis() - ultimoUpdate >= 100) {
    tempoDecimos++;
    ultimoUpdate = millis();
  }

  // Verifica reset
  if (digitalRead(RESET_BTN) == HIGH) {
    tempoDecimos = 0;
    rodando = false;
  }

  // Atualiza display (multiplexação)
  atualizarDisplay();
}

void toggleCronometro() {
  rodando = !rodando;
  ultimoUpdate = millis();
}

void atualizarDisplay() {
  // Separa os dígitos
  int decimos = tempoDecimos % 10;
  int segUnidade = (tempoDecimos / 10) % 10;
  int segDezena = (tempoDecimos / 100) % 6;
  int minUnidade = (tempoDecimos / 600) % 10;

  int digitos[] = {decimos, segUnidade, segDezena, minUnidade};

  // Multiplexação: mostra um dígito de cada vez muito rápido
  for (int i = 0; i < 4; i++) {
    enviarDados(DIGITS[digitos[i]], DIGIT_SELECT[i]);
    delayMicroseconds(2500);  // 2.5ms por dígito
  }
}

void enviarDados(byte segmentos, byte digito) {
  // Desativa saídas durante transição
  digitalWrite(LATCH_PIN, LOW);

  // Envia primeiro o byte do dígito (vai para o 2º 595)
  // Depois o byte dos segmentos (vai para o 1º 595)
  shiftOut(DATA_PIN, CLOCK_PIN, MSBFIRST, digito);
  shiftOut(DATA_PIN, CLOCK_PIN, MSBFIRST, segmentos);

  // Ativa saídas (latch)
  digitalWrite(LATCH_PIN, HIGH);
}
\`\`\`

> [!nota] A função \`shiftOut()\` do Arduino faz exatamente o que o 74HC595 espera: envia bit a bit com clock!

---

## Parte 5: Entendendo a Multiplexação

Por que não acendemos todos os dígitos ao mesmo tempo?

\`\`\`diagram
{
  "title": "Multiplexação de Display",
  "width": 840,
  "height": 260,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "Persistência visual: 4 dígitos parecem acesos juntos!", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 100, "y": 60, "width": 150, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 175, "y": 95, "content": "8", "fontSize": 36, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 175, "y": 130, "content": "0-2.5ms", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 270, "y": 60, "width": 150, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 345, "y": 95, "content": "4", "fontSize": 36, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 345, "y": 130, "content": "2.5-5ms", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 440, "y": 60, "width": 150, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 515, "y": 95, "content": ":", "fontSize": 36, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 515, "y": 130, "content": "5-7.5ms", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 610, "y": 60, "width": 150, "height": 80, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 685, "y": 95, "content": "2", "fontSize": 36, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 685, "y": 130, "content": "7.5-10ms", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 100, "y": 170 }, "to": { "x": 760, "y": 170 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 420, "y": 195, "content": "Ciclo completo: 10ms = 100Hz de refresh", "fontSize": 12, "color": "#8b5cf6" },
    { "type": "text", "x": 420, "y": 220, "content": "Olho humano vê: 84.2 (todos juntos!)", "fontSize": 14, "color": "#10b981", "fontWeight": "bold" }
  ]
}
\`\`\`

A taxa de 100Hz é rápida o suficiente para parecer contínua, mas lenta o suficiente para o Arduino processar.

---

## Parte 6: Expansões Sugeridas

Depois de dominar o básico, experimente:

\`\`\`diagram
{
  "title": "Ideias para expandir",
  "width": 840,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 60, "y": 40, "width": 220, "height": 130, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12 },
    { "type": "text", "x": 170, "y": 70, "content": "🎵 Alarme", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 170, "y": 100, "content": "Adicione buzzer que", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 170, "y": 120, "content": "toca quando tempo", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 170, "y": 140, "content": "programado acaba", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 310, "y": 40, "width": 220, "height": 130, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 420, "y": 70, "content": "⏱️ Volta (Lap)", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 100, "content": "Armazene tempos", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 120, "content": "parciais em array", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 140, "content": "e exiba depois", "fontSize": 11, "color": "#57534e" },

    { "type": "rect", "x": 560, "y": 40, "width": 220, "height": 130, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12 },
    { "type": "text", "x": 670, "y": 70, "content": "📟 Relógio", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 670, "y": 100, "content": "Adicione RTC", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 670, "y": 120, "content": "(DS1307) para", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 670, "y": 140, "content": "relógio de verdade", "fontSize": 11, "color": "#57534e" }
  ]
}
\`\`\`

---

## Recapitulando

| Conceito                        | Aplicação no Projeto               |
| ------------------------------- | ---------------------------------- |
| **Registrador de deslocamento** | 74HC595 expande saídas do Arduino  |
| **Cascata**                     | Q7' conecta registradores em série |
| **Latch**                       | Atualiza saídas sem cintilação     |
| **Multiplexação**               | 4 dígitos com poucos pinos         |
| **Contagem**                    | Software simula contador BCD       |

---

## Exercícios de Fixação

1. **Análise:** Quantos pinos do Arduino seriam necessários para controlar o display diretamente (sem shift registers)?

2. **Modificação:** Altere o código para que o cronômetro mostre centésimos de segundo em vez de décimos.

3. **Hardware:** Desenhe o esquema de como ficaria a conexão se usássemos 3 shift registers em cascata.

4. **Desafio:** Modifique o projeto para funcionar como timer regressivo: o usuário define um tempo inicial e ele conta até zero.

5. **Projeto extra:** Use os conceitos aprendidos para criar um "LED chaser" (efeito de LEDs correndo) com 16 LEDs controlados por 2 shift registers.

6. **Reflexão:** Por que usamos transistores para selecionar os dígitos em vez de conectar os cátodos direto ao shift register?`,headings:[{level:2,text:"Objetivo do Projeto",id:"objetivo-do-projeto"},{level:2,text:"Parte 1: Conhecendo o 74HC595",id:"parte-1-conhecendo-o-74hc595"},{level:3,text:"Funcionamento Básico",id:"funcionamento-básico"},{level:2,text:"Parte 2: Lista de Materiais",id:"parte-2-lista-de-materiais"},{level:2,text:"Parte 3: Conexões",id:"parte-3-conexões"},{level:3,text:"Conexões detalhadas:",id:"conexões-detalhadas"},{level:2,text:"Parte 4: Código Comentado",id:"parte-4-código-comentado"},{level:2,text:"Parte 5: Entendendo a Multiplexação",id:"parte-5-entendendo-a-multiplexação"},{level:2,text:"Parte 6: Expansões Sugeridas",id:"parte-6-expansões-sugeridas"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"contadores-registradores/registradores":{title:"Registradores: Armazenando Dados",description:"De um bit para N bits — como flip-flops se tornam registradores que guardam bytes, palavras e dados estruturados.",duration:"1 aula",order:999,category:"contadores-registradores",content:`# Registradores: Armazenando Dados

Um flip-flop armazena 1 bit. Mas para guardar um byte (8 bits), uma palavra (32 ou 64 bits), ou qualquer dado útil, precisamos de **registradores**: conjuntos organizados de flip-flops trabalhando em paralelo.

---

## O que é um Registrador?

Um **registrador** é um grupo de flip-flops (geralmente D) que:

- Compartilham o mesmo sinal de clock
- Armazenam múltiplos bits simultaneamente
- Podem ter funcionalidades adicionais (clear, enable, load)

\`\`\`diagram
{
  "title": "Registrador de 4 bits",
  "width": 840,
  "height": 260,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "Registrador Paralelo de 4 bits", "fontSize": 16, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 135, "y": 70, "content": "D₀", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 275, "y": 70, "content": "D₁", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 415, "y": 70, "content": "D₂", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 555, "y": 70, "content": "D₃", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 140, "y": 80 }, "to": { "x": 140, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 280, "y": 80 }, "to": { "x": 280, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 420, "y": 80 }, "to": { "x": 420, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 560, "y": 80 }, "to": { "x": 560, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "rect", "x": 100, "y": 100, "width": 80, "height": 80, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 140, "y": 145, "content": "D", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "rect", "x": 240, "y": 100, "width": 80, "height": 80, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 280, "y": 145, "content": "D", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "rect", "x": 380, "y": 100, "width": 80, "height": 80, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 420, "y": 145, "content": "D", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "rect", "x": 520, "y": 100, "width": 80, "height": 80, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 560, "y": 145, "content": "D", "fontSize": 18, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 60, "y": 160 }, "to": { "x": 100, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 180, "y": 160 }, "to": { "x": 240, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 320, "y": 160 }, "to": { "x": 380, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 460, "y": 160 }, "to": { "x": 520, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 600, "y": 160 }, "to": { "x": 660, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 60, "y": 160 }, "to": { "x": 60, "y": 200 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 60, "y": 200 }, "to": { "x": 660, "y": 200 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 660, "y": 200 }, "to": { "x": 660, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "text", "x": 360, "y": 230, "content": "CLK (comum a todos)", "fontSize": 12, "color": "#f59e0b" },

    { "type": "line", "from": { "x": 140, "y": 180 }, "to": { "x": 140, "y": 220 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 280, "y": 180 }, "to": { "x": 280, "y": 220 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 420, "y": 180 }, "to": { "x": 420, "y": 220 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 560, "y": 180 }, "to": { "x": 560, "y": 220 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "text", "x": 135, "y": 245, "content": "Q₀", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 275, "y": 245, "content": "Q₁", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 415, "y": 245, "content": "Q₂", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 555, "y": 245, "content": "Q₃", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },

    { "type": "rect", "x": 700, "y": 90, "width": 110, "height": 100, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 10 },
    { "type": "text", "x": 755, "y": 120, "content": "Na borda:", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 755, "y": 145, "content": "Q₀ ← D₀", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 755, "y": 165, "content": "Q₁ ← D₁", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 755, "y": 185, "content": "...", "fontSize": 12, "color": "#78716c" }
  ]
}
\`\`\`

---

## Tipos de Registradores

### 1. Registrador Paralelo (PIPO)

**Parallel-In, Parallel-Out**: os dados entram e saem todos de uma vez.

É o tipo mais simples e mais usado. Cada flip-flop recebe seu bit correspondente na borda do clock.

**Aplicações:**

- Armazenamento temporário de dados
- Registradores da CPU (AX, BX, etc.)
- Buffers de E/S

### 2. Registrador de Deslocamento (Shift Register)

Os dados **se movem** entre os flip-flops a cada pulso de clock. Existem várias variantes:

\`\`\`diagram
{
  "title": "Shift Register - dados se deslocam",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "Registrador de Deslocamento à Direita", "fontSize": 15, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 60, "y": 105, "content": "D_in", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 90, "y": 100 }, "to": { "x": 130, "y": 100 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "rect", "x": 130, "y": 70, "width": 80, "height": 70, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 170, "y": 110, "content": "D₀", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 210, "y": 100 }, "to": { "x": 280, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 245, "y": 90, "content": "→", "fontSize": 16, "color": "#f59e0b" },

    { "type": "rect", "x": 280, "y": 70, "width": 80, "height": 70, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 320, "y": 110, "content": "D₁", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 360, "y": 100 }, "to": { "x": 430, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 395, "y": 90, "content": "→", "fontSize": 16, "color": "#f59e0b" },

    { "type": "rect", "x": 430, "y": 70, "width": 80, "height": 70, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 470, "y": 110, "content": "D₂", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 510, "y": 100 }, "to": { "x": 580, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 545, "y": 90, "content": "→", "fontSize": 16, "color": "#f59e0b" },

    { "type": "rect", "x": 580, "y": 70, "width": 80, "height": 70, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 620, "y": 110, "content": "D₃", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 660, "y": 100 }, "to": { "x": 720, "y": 100 }, "stroke": "#10b981", "strokeWidth": 2 },
    { "type": "text", "x": 740, "y": 105, "content": "D_out", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 400, "y": 170 }, "to": { "x": 400, "y": 200 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "text", "x": 400, "y": 220, "content": "CLK", "fontSize": 12, "color": "#f59e0b" },

    { "type": "rect", "x": 100, "y": 240, "width": 640, "height": 30, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 8 },
    { "type": "text", "x": 420, "y": 260, "content": "A cada pulso: D₃←D₂, D₂←D₁, D₁←D₀, D₀←D_in", "fontSize": 12, "color": "#92400e" }
  ]
}
\`\`\`

**Variantes de Shift Register:**

| Sigla | Nome                      | Entrada | Saída  | Uso típico                |
| ----- | ------------------------- | ------- | ------ | ------------------------- |
| SISO  | Serial-In, Serial-Out     | 1 bit   | 1 bit  | Linhas de delay           |
| SIPO  | Serial-In, Parallel-Out   | 1 bit   | N bits | Conversão serial→paralela |
| PISO  | Parallel-In, Serial-Out   | N bits  | 1 bit  | Conversão paralela→serial |
| PIPO  | Parallel-In, Parallel-Out | N bits  | N bits | Armazenamento             |

---

## Conversão Serial ↔ Paralela

Uma das aplicações mais importantes dos shift registers é converter entre transmissão **serial** (um bit por vez) e **paralela** (todos os bits de uma vez).

\`\`\`diagram
{
  "title": "Conversão Serial → Paralela (SIPO)",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 760, "height": 130, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 420, "y": 50, "content": "Exemplo: recebendo o byte 10110100", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 80, "y": 90, "content": "Clock 1:", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 160, "y": 90, "content": "[ 0 ][ ? ][ ? ][ ? ][ ? ][ ? ][ ? ][ ? ]", "fontSize": 13, "color": "#57534e" },

    { "type": "text", "x": 80, "y": 115, "content": "Clock 8:", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 160, "y": 115, "content": "[ 1 ][ 0 ][ 1 ][ 1 ][ 0 ][ 1 ][ 0 ][ 0 ]", "fontSize": 13, "color": "#3b82f6", "fontWeight": "bold" },

    { "type": "text", "x": 500, "y": 115, "content": "← Byte completo!", "fontSize": 12, "color": "#10b981" },

    { "type": "rect", "x": 40, "y": 170, "width": 360, "height": 130, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 220, "y": 200, "content": "SIPO (Serial → Paralela)", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 220, "y": 235, "content": "Receptor UART", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 260, "content": "Leitor de sensores seriais", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 285, "content": "Interface SPI (MISO)", "fontSize": 13, "color": "#57534e" },

    { "type": "rect", "x": 440, "y": 170, "width": 360, "height": 130, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 620, "y": 200, "content": "PISO (Paralela → Serial)", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 620, "y": 235, "content": "Transmissor UART", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 260, "content": "LEDs endereçáveis (WS2812)", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 285, "content": "Interface SPI (MOSI)", "fontSize": 13, "color": "#57534e" }
  ]
}
\`\`\`

> [!nota] **Por que serial?** Usar menos fios! Um cabo USB, por exemplo, envia dados serialmente em vez de ter 8+ fios para transmissão paralela. O shift register faz a conversão nas pontas.

---

## Registrador com Controles

Registradores práticos têm sinais de controle adicionais:

\`\`\`diagram
{
  "title": "Registrador com controles completos",
  "width": 840,
  "height": 300,
  "elements": [
    { "type": "rect", "x": 250, "y": 40, "width": 340, "height": 220, "label": "", "fill": "#fff", "stroke": "#3b82f6", "strokeWidth": 3, "rounded": 12 },

    { "type": "text", "x": 420, "y": 75, "content": "REGISTRADOR 8 bits", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "text", "x": 130, "y": 100, "content": "D[7:0]", "fontSize": 13, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 170, "y": 95 }, "to": { "x": 250, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 4 },
    { "type": "text", "x": 200, "y": 90, "content": "8", "fontSize": 10, "color": "#3b82f6" },

    { "type": "text", "x": 130, "y": 145, "content": "LOAD", "fontSize": 12, "color": "#10b981", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 170, "y": 140 }, "to": { "x": 250, "y": 140 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "text", "x": 130, "y": 175, "content": "CLR", "fontSize": 12, "color": "#ef4444", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 160, "y": 170 }, "to": { "x": 250, "y": 170 }, "stroke": "#ef4444", "strokeWidth": 2 },

    { "type": "text", "x": 130, "y": 205, "content": "CLK", "fontSize": 12, "color": "#f59e0b", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 160, "y": 200 }, "to": { "x": 250, "y": 200 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 250, "y": 195 }, "to": { "x": 265, "y": 205 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 265, "y": 205 }, "to": { "x": 250, "y": 215 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 590, "y": 95 }, "to": { "x": 680, "y": 95 }, "stroke": "#57534e", "strokeWidth": 4 },
    { "type": "text", "x": 630, "y": 90, "content": "8", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 700, "y": 100, "content": "Q[7:0]", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 60, "y": 250, "width": 720, "height": 40, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 8 },
    { "type": "text", "x": 420, "y": 275, "content": "LOAD=1: carrega D[7:0]    |    CLR=1: zera Q    |    Sem sinais: mantém Q", "fontSize": 11, "color": "#57534e" }
  ]
}
\`\`\`

**Sinais típicos:**

| Sinal                  | Função                                            |
| ---------------------- | ------------------------------------------------- |
| **LOAD** (LE)          | Habilita carregamento: Q ← D na próxima borda     |
| **CLR** (Clear)        | Zera o registrador: Q ← 0 (geralmente assíncrono) |
| **OE** (Output Enable) | Habilita saídas (para barramento tri-state)       |
| **CLK**                | Clock: define quando as operações acontecem       |

---

## Registradores na CPU

Dentro de uma CPU, os registradores são organizados em um **banco de registradores** (register file):

\`\`\`diagram
{
  "title": "Banco de Registradores (simplificado)",
  "width": 840,
  "height": 340,
  "elements": [
    { "type": "rect", "x": 200, "y": 30, "width": 440, "height": 280, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 14 },
    { "type": "text", "x": 420, "y": 60, "content": "REGISTER FILE", "fontSize": 16, "color": "#5b21b6", "fontWeight": "bold" },

    { "type": "rect", "x": 250, "y": 85, "width": 340, "height": 35, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 6 },
    { "type": "text", "x": 280, "y": 107, "content": "R0", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 107, "content": "00000000 00000000 00000000 00000000", "fontSize": 10, "color": "#57534e" },

    { "type": "rect", "x": 250, "y": 125, "width": 340, "height": 35, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 6 },
    { "type": "text", "x": 280, "y": 147, "content": "R1", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 147, "content": "00000000 00000000 00000000 00001010", "fontSize": 10, "color": "#57534e" },

    { "type": "rect", "x": 250, "y": 165, "width": 340, "height": 35, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 6 },
    { "type": "text", "x": 280, "y": 187, "content": "R2", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 187, "content": "11111111 11111111 11111111 11111111", "fontSize": 10, "color": "#57534e" },

    { "type": "text", "x": 420, "y": 215, "content": "...", "fontSize": 14, "color": "#78716c" },

    { "type": "rect", "x": 250, "y": 230, "width": 340, "height": 35, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 6 },
    { "type": "text", "x": 280, "y": 252, "content": "R15", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 252, "content": "00000000 00000000 00000001 00000000", "fontSize": 10, "color": "#57534e" },

    { "type": "text", "x": 130, "y": 180, "content": "Dados\\nentrada", "fontSize": 11, "color": "#3b82f6" },
    { "type": "line", "from": { "x": 160, "y": 160 }, "to": { "x": 200, "y": 160 }, "stroke": "#3b82f6", "strokeWidth": 3 },

    { "type": "text", "x": 100, "y": 240, "content": "Seleção\\nescrita", "fontSize": 11, "color": "#10b981" },
    { "type": "line", "from": { "x": 160, "y": 235 }, "to": { "x": 200, "y": 235 }, "stroke": "#10b981", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 640, "y": 140 }, "to": { "x": 700, "y": 140 }, "stroke": "#57534e", "strokeWidth": 3 },
    { "type": "text", "x": 710, "y": 145, "content": "Porta A", "fontSize": 11, "color": "#57534e" },

    { "type": "line", "from": { "x": 640, "y": 200 }, "to": { "x": 700, "y": 200 }, "stroke": "#57534e", "strokeWidth": 3 },
    { "type": "text", "x": 710, "y": 205, "content": "Porta B", "fontSize": 11, "color": "#57534e" },

    { "type": "text", "x": 420, "y": 330, "content": "Múltiplas portas de leitura permitem ler 2+ registradores simultaneamente", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

> [!dica] CPUs modernas têm dezenas de registradores visíveis ao programador e centenas de registradores internos para renomeação e pipeline.

---

## Aplicações Práticas

### 1. Buffer de Dados

Armazena dados temporariamente enquanto aguarda processamento.

### 2. Registrador de Status (Flags)

Guarda bits individuais: Zero, Carry, Overflow, Negative, etc.

### 3. Shift Register para LEDs

Controla múltiplos LEDs com poucos pinos do microcontrolador (74HC595).

### 4. UART

Registradores de deslocamento convertem dados paralelos do processador em transmissão serial e vice-versa.

### 5. Pipeline

Registradores entre estágios do pipeline guardam dados parciais de instruções em execução.

---

## Recapitulando

| Tipo     | Entrada  | Saída    | Uso Principal       |
| -------- | -------- | -------- | ------------------- |
| **PIPO** | Paralela | Paralela | Armazenamento       |
| **SIPO** | Serial   | Paralela | Recepção serial     |
| **PISO** | Paralela | Serial   | Transmissão serial  |
| **SISO** | Serial   | Serial   | Delay, memória FIFO |

---

## Exercícios de Fixação

1. **Registrador paralelo:** Um registrador de 8 bits tem D = 10110011 e recebe um pulso de clock com LOAD=1. Qual é o novo valor de Q?

2. **Shift register:** Um SIPO de 4 bits começa em 0000. A entrada serial recebe: 1, 0, 1, 1 (nessa ordem, um por clock). Qual é o estado final?

3. **UART:** Uma UART opera a 9600 baud (bits por segundo). Quanto tempo leva para transmitir um byte completo (8 bits + start + stop = 10 bits)?

4. **Conversão:** Você precisa controlar 24 LEDs usando um microcontrolador com apenas 3 pinos disponíveis. Como shift registers podem ajudar?

5. **Pipeline:** Por que registradores entre estágios de pipeline são essenciais para o funcionamento correto do processador?

6. **Projeto:** Desenhe um circuito que use um registrador de 8 bits com LOAD para armazenar o resultado de uma operação apenas quando um sinal "DONE" é ativado.`,headings:[{level:2,text:"O que é um Registrador?",id:"o-que-é-um-registrador"},{level:2,text:"Tipos de Registradores",id:"tipos-de-registradores"},{level:3,text:"1. Registrador Paralelo (PIPO)",id:"1-registrador-paralelo-pipo"},{level:3,text:"2. Registrador de Deslocamento (Shift Register)",id:"2-registrador-de-deslocamento-shift-register"},{level:2,text:"Conversão Serial ↔ Paralela",id:"conversão-serial--paralela"},{level:2,text:"Registrador com Controles",id:"registrador-com-controles"},{level:2,text:"Registradores na CPU",id:"registradores-na-cpu"},{level:2,text:"Aplicações Práticas",id:"aplicações-práticas"},{level:3,text:"1. Buffer de Dados",id:"1-buffer-de-dados"},{level:3,text:"2. Registrador de Status (Flags)",id:"2-registrador-de-status-flags"},{level:3,text:"3. Shift Register para LEDs",id:"3-shift-register-para-leds"},{level:3,text:"4. UART",id:"4-uart"},{level:3,text:"5. Pipeline",id:"5-pipeline"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"fundamentos-digitais/algebra-booleana":{title:"Álgebra Booleana",description:"As operações lógicas que fundamentam todos os circuitos digitais: AND, OR, NOT e as leis de De Morgan.",duration:"1 aula",order:999,category:"fundamentos-digitais",content:`# Álgebra Booleana

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

\`\`\`diagram
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
\`\`\`

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

\`\`\`diagram
{
  "title": "Leis de De Morgan",
  "width": 800,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 340, "height": 170, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 14 },
    { "type": "text", "x": 210, "y": 55, "content": "Primeira Lei", "fontSize": 15, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 90, "content": "(A · B)' = A' + B'", "fontSize": 20, "color": "#6d28d9", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 125, "content": "\\"O complemento do AND", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 145, "content": "é o OR dos complementos\\"", "fontSize": 12, "color": "#57534e" },

    { "type": "rect", "x": 420, "y": 20, "width": 340, "height": 170, "label": "", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 14 },
    { "type": "text", "x": 590, "y": 55, "content": "Segunda Lei", "fontSize": 15, "color": "#9d174d", "fontWeight": "bold" },
    { "type": "text", "x": 590, "y": 90, "content": "(A + B)' = A' · B'", "fontSize": 20, "color": "#db2777", "fontWeight": "bold" },
    { "type": "text", "x": 590, "y": 125, "content": "\\"O complemento do OR", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 590, "y": 145, "content": "é o AND dos complementos\\"", "fontSize": 12, "color": "#57534e" }
  ]
}
\`\`\`

> [!dica] **Truque para lembrar:** para aplicar De Morgan, faça três coisas: (1) **quebre a barra** (troque complemento geral por individual), (2) **troque a operação** (AND vira OR, OR vira AND), (3) **complemente cada termo**.

**Verificando a primeira lei com tabela-verdade:**

| A   | B   | A·B | (A·B)' | A'  | B'  | A'+B' |
| --- | --- | --- | ------ | --- | --- | ----- |
| 0   | 0   | 0   | **1**  | 1   | 1   | **1** |
| 0   | 1   | 0   | **1**  | 1   | 0   | **1** |
| 1   | 0   | 0   | **1**  | 0   | 1   | **1** |
| 1   | 1   | 1   | **0**  | 0   | 0   | **0** |

As colunas $(A \\cdot B)'$ e $A' + B'$ são idênticas — a lei está comprovada!

---

## Simplificação de Expressões

A grande utilidade dessas propriedades é **simplificar circuitos**. Menos operações = menos portas lógicas = circuito mais barato, rápido e eficiente.

**Exemplo: simplificar $F = A \\cdot B + A \\cdot B'$**

$$
F = A \\cdot B + A \\cdot B'
$$

Fatorando A (distributiva):

$$
F = A \\cdot (B + B')
$$

Pela propriedade do complemento, $B + B' = 1$:

$$
F = A \\cdot 1 = A
$$

Ou seja, a expressão inteira se reduz a simplesmente **A**! Isso significa que o valor de B **não importa** — o resultado depende apenas de A.

> [!atencao] Isso tem impacto direto no hardware: em vez de usar duas portas AND e uma porta OR, basta um fio direto. Menos componentes, menos custo, menos consumo de energia.

---

## Precedência dos Operadores

Assim como na matemática, as operações booleanas têm uma ordem de precedência:

1. **NOT** (maior prioridade) — avaliado primeiro
2. **AND** — avaliado em seguida
3. **OR** (menor prioridade) — avaliado por último

**Exemplo:** $A + B \\cdot C'$ é interpretado como $A + (B \\cdot (C'))$

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

1. Construa a tabela-verdade para a expressão $F = A \\cdot B + C$, sendo A, B e C variáveis booleanas (8 linhas).

2. Simplifique as expressões usando as propriedades:
   - a) $F = A + A \\cdot B$
   - b) $F = (A + B) \\cdot (A + B')$
   - c) $F = A' \\cdot B' + A' \\cdot B$

3. Aplique as leis de De Morgan para encontrar o complemento de:
   - a) $F = A \\cdot B \\cdot C$
   - b) $F = A + B \\cdot C$

4. Verifique, usando tabela-verdade, que $A + A \\cdot B = A$ (propriedade da absorção).

5. Um sistema de alarme dispara ($F = 1$) quando o sensor de porta está ativado ($A = 1$) **E** o sistema está armado ($B = 1$), **OU** quando o botão de pânico é pressionado ($C = 1$). Escreva a expressão booleana de $F$ e monte a tabela-verdade.`,headings:[{level:2,text:"George Boole e a lógica como matemática",id:"george-boole-e-a-lógica-como-matemática"},{level:2,text:"Variáveis Booleanas",id:"variáveis-booleanas"},{level:2,text:"As três operações fundamentais",id:"as-três-operações-fundamentais"},{level:2,text:"Tabela-verdade",id:"tabela-verdade"},{level:2,text:"Propriedades da Álgebra Booleana",id:"propriedades-da-álgebra-booleana"},{level:3,text:"Propriedades básicas",id:"propriedades-básicas"},{level:3,text:"Propriedades com duas variáveis",id:"propriedades-com-duas-variáveis"},{level:2,text:"Leis de De Morgan",id:"leis-de-de-morgan"},{level:2,text:"Simplificação de Expressões",id:"simplificação-de-expressões"},{level:2,text:"Precedência dos Operadores",id:"precedência-dos-operadores"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"fundamentos-digitais/analogico-vs-digital":{title:"Analógico vs Digital",description:"O que diferencia o mundo analógico do digital? Entenda os dois tipos de sinal e por que o digital venceu.",duration:"1 aula",order:999,category:"fundamentos-digitais",content:`# Analógico vs Digital

Antes de falar de portas lógicas, circuitos e Arduino, precisamos entender uma distinção fundamental: a diferença entre sinais **analógicos** e **digitais**. Essa diferença é a base de tudo que veremos nesta disciplina.

---

## O mundo é analógico

O mundo real é **contínuo**. A temperatura não pula de 20°C para 21°C — ela passa por 20,1°C, 20,01°C, 20,001°C... infinitos valores intermediários. O mesmo vale para som, luz, pressão, velocidade.

Um sinal **analógico** representa essa variação contínua. Ele pode assumir **qualquer valor** dentro de uma faixa.

\`\`\`diagram
{
  "title": "Sinal Analógico vs Sinal Digital",
  "width": 820,
  "height": 340,
  "elements": [
    { "type": "rect", "x": 25, "y": 20, "width": 370, "height": 295, "label": "", "fill": "#eff6ff", "stroke": "#3b82f6", "rounded": 16 },
    { "type": "text", "x": 210, "y": 48, "content": "Sinal ANALÓGICO", "fontSize": 16, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 75, "content": "Variação contínua e suave", "fontSize": 12, "color": "#57534e" },

    { "type": "line", "from": { "x": 65, "y": 260 }, "to": { "x": 360, "y": 260 }, "stroke": "#a8a29e", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 65, "y": 110 }, "to": { "x": 65, "y": 260 }, "stroke": "#a8a29e", "strokeWidth": 1 },
    { "type": "text", "x": 50, "y": 108, "content": "V", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 365, "y": 265, "content": "t", "fontSize": 10, "color": "#78716c" },

    { "type": "polyline", "points": [
      { "x": 65, "y": 185 }, { "x": 100, "y": 140 }, { "x": 135, "y": 195 },
      { "x": 170, "y": 130 }, { "x": 205, "y": 200 }, { "x": 240, "y": 120 },
      { "x": 275, "y": 190 }, { "x": 310, "y": 145 }, { "x": 345, "y": 175 }
    ], "stroke": "#3b82f6", "strokeWidth": 3, "fill": "none" },

    { "type": "text", "x": 210, "y": 290, "content": "Infinitos valores possíveis", "fontSize": 11, "color": "#3b82f6", "fontStyle": "italic" },

    { "type": "rect", "x": 425, "y": 20, "width": 370, "height": 295, "label": "", "fill": "#ecfdf5", "stroke": "#10b981", "rounded": 16 },
    { "type": "text", "x": 610, "y": 48, "content": "Sinal DIGITAL", "fontSize": 16, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 610, "y": 75, "content": "Apenas dois estados", "fontSize": 12, "color": "#57534e" },

    { "type": "line", "from": { "x": 465, "y": 260 }, "to": { "x": 760, "y": 260 }, "stroke": "#a8a29e", "strokeWidth": 1 },
    { "type": "line", "from": { "x": 465, "y": 110 }, "to": { "x": 465, "y": 260 }, "stroke": "#a8a29e", "strokeWidth": 1 },
    { "type": "text", "x": 450, "y": 108, "content": "V", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 765, "y": 265, "content": "t", "fontSize": 10, "color": "#78716c" },

    { "type": "text", "x": 445, "y": 132, "content": "1", "fontSize": 10, "color": "#10b981", "fontWeight": "bold" },
    { "type": "text", "x": 445, "y": 255, "content": "0", "fontSize": 10, "color": "#10b981", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 465, "y": 135 }, "to": { "x": 530, "y": 135 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 530, "y": 135 }, "to": { "x": 530, "y": 245 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 530, "y": 245 }, "to": { "x": 580, "y": 245 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 580, "y": 245 }, "to": { "x": 580, "y": 135 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 580, "y": 135 }, "to": { "x": 660, "y": 135 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 660, "y": 135 }, "to": { "x": 660, "y": 245 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 660, "y": 245 }, "to": { "x": 700, "y": 245 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 700, "y": 245 }, "to": { "x": 700, "y": 135 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "line", "from": { "x": 700, "y": 135 }, "to": { "x": 750, "y": 135 }, "stroke": "#10b981", "strokeWidth": 3 },

    { "type": "text", "x": 610, "y": 290, "content": "Só dois: ALTO (1) ou BAIXO (0)", "fontSize": 11, "color": "#10b981", "fontStyle": "italic" }
  ]
}
\`\`\`

Exemplos de sinais analógicos:

- A onda sonora da sua voz
- A tensão que sai de uma tomada (127V alternados)
- O ponteiro de um relógio clássico
- Um termômetro de mercúrio

---

## O mundo digital: apenas 0 e 1

Um sinal **digital** é o oposto: ele só pode ter um número **finito** de valores. Na prática, os circuitos digitais usam apenas **dois estados**:

| Estado       | Tensão típica | Significado               |
| ------------ | ------------- | ------------------------- |
| **0** (LOW)  | 0V            | Desligado / Falso / Não   |
| **1** (HIGH) | 3,3V ou 5V    | Ligado / Verdadeiro / Sim |

É como um interruptor de luz: ou está **ligado**, ou está **desligado**. Não existe "meio ligado".

> [!dica] **Analogia:** Um relógio de ponteiros (analógico) mostra o tempo de forma contínua — o ponteiro passa por todos os pontos intermediários. Um relógio digital mostra apenas números discretos: 14:35, 14:36 — nunca "14:35 e meio".

---

## Por que o digital venceu?

Se o mundo real é analógico, por que os computadores são digitais? Porque sinais digitais têm **vantagens enormes**:

\`\`\`diagram
{
  "title": "Por que usar digital?",
  "width": 820,
  "height": 310,
  "elements": [
    { "type": "rect", "x": 25, "y": 20, "width": 240, "height": 265, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 145, "y": 50, "content": "Resistência a ruído", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 145, "y": 82, "content": "Se o sinal é \\"quase 5V\\",", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 102, "content": "o circuito entende como 1.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 132, "content": "Pequenas interferências", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 152, "content": "não corrompem o dado.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 145, "y": 195, "content": "No analógico, qualquer", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" },
    { "type": "text", "x": 145, "y": 215, "content": "ruído vira distorção.", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" },

    { "type": "rect", "x": 290, "y": 20, "width": 240, "height": 265, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 410, "y": 50, "content": "Cópia perfeita", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 410, "y": 82, "content": "Copiar 0s e 1s é exato.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 410, "y": 102, "content": "Não perde qualidade.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 410, "y": 140, "content": "Um MP3 copiado 1000x", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 410, "y": 160, "content": "é idêntico ao original.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 410, "y": 200, "content": "Uma fita K7 copiada 10x", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" },
    { "type": "text", "x": 410, "y": 220, "content": "já fica irreconhecível.", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" },

    { "type": "rect", "x": 555, "y": 20, "width": 240, "height": 265, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 675, "y": 50, "content": "Lógica e processamento", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 675, "y": 82, "content": "Com 0 e 1 podemos", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 675, "y": 102, "content": "construir toda a lógica", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 675, "y": 122, "content": "necessária para computar.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 675, "y": 162, "content": "Somar, comparar, decidir", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 675, "y": 182, "content": "— tudo com 0s e 1s.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 675, "y": 222, "content": "É a base da Álgebra", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" },
    { "type": "text", "x": 675, "y": 242, "content": "Booleana (veremos a seguir).", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" }
  ]
}
\`\`\`

---

## O bit: a menor unidade de informação

Cada 0 ou 1 é chamado de **bit** (_binary digit_ — dígito binário). É a menor quantidade de informação possível: uma escolha entre duas opções.

Com mais bits, representamos mais coisas:

| Bits       | Combinações possíveis | Exemplo                      |
| ---------- | --------------------- | ---------------------------- |
| 1          | 2 (0, 1)              | Ligado/Desligado             |
| 2          | 4 (00, 01, 10, 11)    | 4 direções                   |
| 4          | 16                    | Um dígito hexadecimal        |
| 8 (1 byte) | 256                   | Um caractere (letra, número) |
| 16         | 65.536                | Uma cor no modo "High Color" |
| 32         | ~4 bilhões            | Um endereço IPv4             |

> [!nota] **Agrupamentos comuns:** 8 bits = 1 **byte**. 1024 bytes = 1 **kilobyte** (KB). 1024 KB = 1 **megabyte** (MB). E assim por diante: GB, TB, PB.

---

## Do analógico ao digital: conversão

Na prática, precisamos **converter** sinais analógicos do mundo real para digital (e vice-versa). É isso que sensores e atuadores fazem.

\`\`\`diagram
{
  "title": "Conversão Analógico-Digital",
  "width": 800,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 30, "y": 50, "width": 170, "height": 80, "label": "Mundo Real", "sublabel": "(Analógico)", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12, "fontSize": 14, "fontWeight": "bold" },
    { "type": "text", "x": 115, "y": 160, "content": "Temperatura, som,", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 115, "y": 180, "content": "luz, pressão...", "fontSize": 11, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 210, "y": 90 }, "to": { "x": 270, "y": 90 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 270, "y": 50, "width": 120, "height": 80, "label": "Sensor", "sublabel": "(ADC)", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 12, "fontSize": 13 },
    { "type": "text", "x": 330, "y": 160, "content": "Converte analógico", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 330, "y": 180, "content": "para digital", "fontSize": 11, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 400, "y": 90 }, "to": { "x": 440, "y": 90 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 440, "y": 35, "width": 140, "height": 110, "label": "Processamento", "sublabel": "Digital (0s e 1s)", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12, "fontSize": 13, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 590, "y": 90 }, "to": { "x": 630, "y": 90 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 630, "y": 50, "width": 140, "height": 80, "label": "Atuador", "sublabel": "(DAC)", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 12, "fontSize": 13 },
    { "type": "text", "x": 700, "y": 160, "content": "Converte digital", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 700, "y": 180, "content": "para analógico", "fontSize": 11, "color": "#78716c" },

    { "type": "text", "x": 400, "y": 230, "content": "ADC = Analog-to-Digital Converter  |  DAC = Digital-to-Analog Converter", "fontSize": 11, "color": "#a8a29e", "fontStyle": "italic" }
  ]
}
\`\`\`

> [!dica] **No Arduino**, essa conversão já existe embutida. Quando você usa \`analogRead()\`, o Arduino converte um sinal analógico (0V a 5V) em um número digital (0 a 1023). Quando usa \`analogWrite()\`, ele faz o caminho inverso (via PWM).

---

## Recapitulando

| Conceito    | Analógico                              | Digital                     |
| ----------- | -------------------------------------- | --------------------------- |
| **Valores** | Infinitos (contínuos)                  | Apenas dois (0 e 1)         |
| **Ruído**   | Sensível a interferências              | Resistente a interferências |
| **Cópia**   | Perde qualidade a cada cópia           | Cópia perfeita sempre       |
| **Exemplo** | Vinil, fita K7, termômetro de mercúrio | CD, MP3, relógio digital    |
| **Unidade** | Depende da grandeza (Volts, °C...)     | Bit (0 ou 1)                |

---

## Exercícios de Fixação

1. Classifique cada item como **analógico** ou **digital**:
   - a) A velocidade marcada no velocímetro de ponteiro de um carro
   - b) A contagem de "curtidas" em uma postagem
   - c) A onda sonora da sua voz antes de chegar ao microfone
   - d) A música armazenada no seu celular

2. Um sensor de temperatura lê 23,7°C do ambiente. Explique o que precisa acontecer para esse valor ser processado por um circuito digital.

3. Com 3 bits, quantas combinações diferentes são possíveis? Liste todas.

4. Por que dizemos que sinais digitais são mais **resistentes a ruído** do que analógicos? Dê um exemplo prático.`,headings:[{level:2,text:"O mundo é analógico",id:"o-mundo-é-analógico"},{level:2,text:"O mundo digital: apenas 0 e 1",id:"o-mundo-digital-apenas-0-e-1"},{level:2,text:"Por que o digital venceu?",id:"por-que-o-digital-venceu"},{level:2,text:"O bit: a menor unidade de informação",id:"o-bit-a-menor-unidade-de-informação"},{level:2,text:"Do analógico ao digital: conversão",id:"do-analógico-ao-digital-conversão"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"fundamentos-digitais/sistemas-de-numeracao":{title:"Sistemas de Numeração",description:"Decimal, binário, octal e hexadecimal — como converter entre bases e por que cada uma existe.",duration:"1 aula",order:999,category:"fundamentos-digitais",content:`# Sistemas de Numeração

Na aula anterior vimos que o mundo digital trabalha com apenas dois valores: 0 e 1. Mas como representar números maiores? Textos? Cores? É aqui que entram os **sistemas de numeração** — a forma como organizamos e contamos números usando diferentes bases.

---

## O que é uma "base"?

Um sistema de numeração é definido pela sua **base**, que indica quantos símbolos diferentes ele usa.

\`\`\`diagram
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
\`\`\`

> [!dica] **Por que temos tantas bases?** Nós humanos pensamos em base 10 (provavelmente porque temos 10 dedos). Mas o computador só entende base 2. As bases 8 e 16 existem como "atalhos" para escrever números binários de forma mais compacta.

---

## Notação posicional

Todos esses sistemas funcionam com **notação posicional**: o valor de cada dígito depende da sua **posição**.

No decimal, já fazemos isso naturalmente:

$$
347_{10} = 3 \\times 10^2 + 4 \\times 10^1 + 7 \\times 10^0 = 300 + 40 + 7
$$

No binário, é a mesma lógica, mas com potências de 2:

$$
1011_{2} = 1 \\times 2^3 + 0 \\times 2^2 + 1 \\times 2^1 + 1 \\times 2^0 = 8 + 0 + 2 + 1 = 11_{10}
$$

> [!nota] A notação $N_b$ indica a base. Por exemplo, $1011_2$ é "1011 em base 2" e $11_{10}$ é "11 em base 10".

---

## Conversão: Binário para Decimal

Para converter de binário para decimal, basta **somar as potências de 2** onde há um bit 1:

\`\`\`diagram
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
\`\`\`

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

1. Separe em grupos de 4 bits (da direita para a esquerda): \`1010\` | \`1111\`
2. Converta cada grupo: \`1010\` = A, \`1111\` = F
3. Resultado: $10101111_2 = \\text{AF}_{16}$

> [!nota] Na programação, o prefixo \`0x\` indica hexadecimal. Por exemplo, \`0xFF\` = 255 em decimal. Você verá isso muito em cores CSS (\`#FF5733\`), endereços de memória e registradores.

---

## Octal: menos usado, mas ainda presente

O sistema **octal (base 8)** funciona de forma semelhante, mas cada dígito corresponde a **3 bits**.

**Exemplo: $110101_2$ para octal**

1. Separe em grupos de 3 bits: \`110\` | \`101\`
2. Converta cada grupo: \`110\` = 6, \`101\` = 5
3. Resultado: $110101_2 = 65_8$

> [!nota] O octal era mais popular em computadores antigos de 12, 24 ou 36 bits (divisíveis por 3). Hoje é raro, mas ainda aparece em permissões de arquivo Unix/Linux: \`chmod 755\` usa octal!

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

\`\`\`
    1 1      ← carry (vai-um)
    1 0 1 1
  + 0 1 1 0
  ---------
  1 0 0 0 1
\`\`\`

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
| **Hexadecimal**        | Cada dígito = 4 bits. Prefixo \`0x\` na programação        |
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
   - c) $\\text{B4}_{16}$

3. Converta para hexadecimal:
   - a) $11001010_2$
   - b) $255_{10}$

4. Resolva as somas binárias e confira convertendo para decimal:
   - a) $1010_2 + 0101_2$
   - b) $1111_2 + 0001_2$

5. O código de cor CSS \`#1A2B3C\` está em hexadecimal. Qual é o valor decimal de cada componente (R, G, B)?`,headings:[{level:2,text:'O que é uma "base"?',id:"o-que-é-uma-base"},{level:2,text:"Notação posicional",id:"notação-posicional"},{level:2,text:"Conversão: Binário para Decimal",id:"conversão-binário-para-decimal"},{level:2,text:"Conversão: Decimal para Binário",id:"conversão-decimal-para-binário"},{level:2,text:"Hexadecimal: o atalho favorito dos programadores",id:"hexadecimal-o-atalho-favorito-dos-programadores"},{level:2,text:"Octal: menos usado, mas ainda presente",id:"octal-menos-usado-mas-ainda-presente"},{level:2,text:"Aritmética Binária: Adição",id:"aritmética-binária-adição"},{level:2,text:"Tabela de Referência Rápida",id:"tabela-de-referência-rápida"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"portas-logicas/circuitos-combinacionais":{title:"Circuitos Combinacionais: Primeiros Passos",description:"Construindo blocos funcionais com portas lógicas — do half-adder ao multiplexador, seus primeiros circuitos combinacionais.",duration:"1 aula",order:999,category:"portas-logicas",content:`# Circuitos Combinacionais: Primeiros Passos

Até agora estudamos portas individuais. Agora vamos **combiná-las** para criar blocos funcionais úteis. Estes são os **circuitos combinacionais**: a saída depende apenas das entradas atuais.

---

## O que são Circuitos Combinacionais?

Em um circuito **combinacional**, a saída é determinada exclusivamente pela combinação atual das entradas. Não há memória, não há estado anterior — mude as entradas e a saída responde imediatamente.

\`\`\`diagram
{
  "title": "Circuito combinacional vs sequencial",
  "width": 840,
  "height": 240,
  "elements": [
    { "type": "rect", "x": 30, "y": 30, "width": 360, "height": 180, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 210, "y": 60, "content": "COMBINACIONAL", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 100, "content": "Saída = f(entradas atuais)", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 135, "content": "Sem memória", "fontSize": 13, "color": "#3b82f6" },
    { "type": "text", "x": 210, "y": 170, "content": "Ex: somadores, decoders, MUX", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" },
    
    { "type": "rect", "x": 450, "y": 30, "width": 360, "height": 180, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 630, "y": 60, "content": "SEQUENCIAL", "fontSize": 15, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 630, "y": 100, "content": "Saída = f(entradas + estado)", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 630, "y": 135, "content": "Com memória (flip-flops)", "fontSize": 13, "color": "#f59e0b" },
    { "type": "text", "x": 630, "y": 170, "content": "Ex: contadores, registradores", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

Nesta aula vamos focar nos combinacionais. Os sequenciais serão o tema do próximo módulo!

---

## Half-Adder: Seu Primeiro Somador

O **half-adder** (meio-somador) soma dois bits e produz dois resultados:
- **Soma (S)**: o bit resultado
- **Carry (C)**: o "vai um" para a próxima posição

Analise a soma binária:

| A | B | A + B (decimal) | C (carry) | S (soma) |
|---|---|-----------------|-----------|----------|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 2 | 1 | 0 |

Olhe a coluna **S**: é exatamente um **XOR**!  
Olhe a coluna **C**: é exatamente um **AND**!

\`\`\`diagram
{
  "title": "Half-Adder: circuito e símbolo",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 30, "y": 20, "width": 380, "height": 280, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 220, "y": 50, "content": "Circuito interno", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },
    
    { "type": "text", "x": 70, "y": 110, "content": "A", "fontSize": 16, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 70, "y": 200, "content": "B", "fontSize": 16, "color": "#3b82f6", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 90, "y": 105 }, "to": { "x": 150, "y": 105 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 90, "y": 195 }, "to": { "x": 150, "y": 195 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "ellipse", "cx": 120, "cy": 105, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "ellipse", "cx": 120, "cy": 195, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },
    
    { "type": "line", "from": { "x": 120, "y": 105 }, "to": { "x": 120, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 120, "y": 230 }, "to": { "x": 180, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "rect", "x": 180, "y": 80, "width": 70, "height": 50, "label": "XOR", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 6 },
    { "type": "rect", "x": 180, "y": 205, "width": 70, "height": 50, "label": "AND", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 6 },
    
    { "type": "line", "from": { "x": 150, "y": 105 }, "to": { "x": 180, "y": 95 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 150, "y": 195 }, "to": { "x": 180, "y": 115 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 150, "y": 105 }, "to": { "x": 180, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 120, "y": 230 }, "to": { "x": 180, "y": 240 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "line", "from": { "x": 250, "y": 105 }, "to": { "x": 340, "y": 105 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 250, "y": 230 }, "to": { "x": 340, "y": 230 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "text", "x": 355, "y": 110, "content": "S", "fontSize": 16, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 355, "y": 235, "content": "C", "fontSize": 16, "color": "#10b981", "fontWeight": "bold" },
    
    { "type": "text", "x": 220, "y": 275, "content": "S = A ⊕ B       C = A · B", "fontSize": 12, "color": "#78716c" },
    
    { "type": "rect", "x": 450, "y": 20, "width": 360, "height": 280, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 14 },
    { "type": "text", "x": 630, "y": 50, "content": "Símbolo em bloco", "fontSize": 14, "color": "#5b21b6", "fontWeight": "bold" },
    
    { "type": "rect", "x": 530, "y": 100, "width": 120, "height": 120, "label": "", "fill": "#fff", "stroke": "#8b5cf6", "strokeWidth": 3, "rounded": 10 },
    { "type": "text", "x": 590, "y": 165, "content": "HA", "fontSize": 24, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 490, "y": 135 }, "to": { "x": 530, "y": 135 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 470, "y": 140, "content": "A", "fontSize": 14, "color": "#57534e" },
    { "type": "line", "from": { "x": 490, "y": 185 }, "to": { "x": 530, "y": 185 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 470, "y": 190, "content": "B", "fontSize": 14, "color": "#57534e" },
    
    { "type": "line", "from": { "x": 650, "y": 135 }, "to": { "x": 700, "y": 135 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 720, "y": 140, "content": "S", "fontSize": 14, "color": "#57534e" },
    { "type": "line", "from": { "x": 650, "y": 185 }, "to": { "x": 700, "y": 185 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 720, "y": 190, "content": "C", "fontSize": 14, "color": "#57534e" },
    
    { "type": "text", "x": 630, "y": 265, "content": "HA = Half-Adder", "fontSize": 13, "color": "#78716c" }
  ]
}
\`\`\`

> [!nota] **Por que "half"?** Porque ele só soma dois bits de entrada. Não considera um carry que pode vir de uma soma anterior. Para isso, precisamos do full-adder.

---

## Full-Adder: Somador Completo

O **full-adder** soma dois bits **mais** um carry de entrada (Cin). Ele produz a soma e um carry de saída (Cout).

| A | B | Cin | Soma | Cout |
|---|---|-----|------|------|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

\`\`\`diagram
{
  "title": "Full-Adder com dois Half-Adders",
  "width": 840,
  "height": 300,
  "elements": [
    { "type": "rect", "x": 30, "y": 20, "width": 780, "height": 260, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 420, "y": 50, "content": "Full-Adder = 2 Half-Adders + 1 OR", "fontSize": 15, "color": "#57534e", "fontWeight": "bold" },
    
    { "type": "text", "x": 70, "y": 120, "content": "A", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 70, "y": 160, "content": "B", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 70, "y": 230, "content": "Cin", "fontSize": 14, "color": "#10b981", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 95, "y": 115 }, "to": { "x": 160, "y": 115 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 95, "y": 155 }, "to": { "x": 160, "y": 155 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 95, "y": 225 }, "to": { "x": 280, "y": 225 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "rect", "x": 160, "y": 95, "width": 90, "height": 80, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 205, "y": 140, "content": "HA", "fontSize": 18, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 250, "y": 115 }, "to": { "x": 310, "y": 115 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 280, "y": 115 }, "to": { "x": 280, "y": 185 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "line", "from": { "x": 250, "y": 155 }, "to": { "x": 320, "y": 155 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 320, "y": 155 }, "to": { "x": 320, "y": 240 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 320, "y": 240 }, "to": { "x": 520, "y": 240 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "text", "x": 280, "y": 100, "content": "S1", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 295, "y": 155, "content": "C1", "fontSize": 11, "color": "#78716c" },
    
    { "type": "rect", "x": 350, "y": 165, "width": 90, "height": 80, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 395, "y": 210, "content": "HA", "fontSize": 18, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 280, "y": 185 }, "to": { "x": 350, "y": 185 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 280, "y": 225 }, "to": { "x": 350, "y": 225 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "line", "from": { "x": 440, "y": 185 }, "to": { "x": 720, "y": 185 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 440, "y": 225 }, "to": { "x": 520, "y": 225 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "text", "x": 460, "y": 175, "content": "S2", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 460, "y": 220, "content": "C2", "fontSize": 11, "color": "#78716c" },
    
    { "type": "rect", "x": 520, "y": 215, "width": 70, "height": 50, "label": "OR", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 6 },
    
    { "type": "line", "from": { "x": 590, "y": 240 }, "to": { "x": 720, "y": 240 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "text", "x": 750, "y": 190, "content": "S", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 750, "y": 245, "content": "Cout", "fontSize": 14, "color": "#10b981", "fontWeight": "bold" },
    
    { "type": "text", "x": 420, "y": 260, "content": "Cout = C1 OR C2 (carry aparece se qualquer HA gerar)", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

### Encadeando para números maiores

Para somar números de N bits, encadeamos N full-adders, passando o carry de um para o próximo:

\`\`\`diagram
{
  "title": "Somador de 4 bits (Ripple Carry Adder)",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "text", "x": 420, "y": 30, "content": "Somador de 4 bits", "fontSize": 16, "color": "#57534e", "fontWeight": "bold" },
    
    { "type": "text", "x": 80, "y": 70, "content": "A₀ B₀", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 240, "y": 70, "content": "A₁ B₁", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 400, "y": 70, "content": "A₂ B₂", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 560, "y": 70, "content": "A₃ B₃", "fontSize": 12, "color": "#3b82f6", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 85, "y": 80 }, "to": { "x": 85, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 245, "y": 80 }, "to": { "x": 245, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 405, "y": 80 }, "to": { "x": 405, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 565, "y": 80 }, "to": { "x": 565, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "rect", "x": 50, "y": 100, "width": 80, "height": 70, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 90, "y": 140, "content": "FA", "fontSize": 16, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "rect", "x": 210, "y": 100, "width": 80, "height": 70, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 250, "y": 140, "content": "FA", "fontSize": 16, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "rect", "x": 370, "y": 100, "width": 80, "height": 70, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 410, "y": 140, "content": "FA", "fontSize": 16, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "rect", "x": 530, "y": 100, "width": 80, "height": 70, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 570, "y": 140, "content": "FA", "fontSize": 16, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 130, "y": 135 }, "to": { "x": 210, "y": 135 }, "stroke": "#10b981", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 290, "y": 135 }, "to": { "x": 370, "y": 135 }, "stroke": "#10b981", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 450, "y": 135 }, "to": { "x": 530, "y": 135 }, "stroke": "#10b981", "strokeWidth": 2, "dashed": true },
    { "type": "line", "from": { "x": 610, "y": 135 }, "to": { "x": 700, "y": 135 }, "stroke": "#10b981", "strokeWidth": 2, "dashed": true },
    
    { "type": "text", "x": 155, "y": 125, "content": "C₀", "fontSize": 10, "color": "#10b981" },
    { "type": "text", "x": 315, "y": 125, "content": "C₁", "fontSize": 10, "color": "#10b981" },
    { "type": "text", "x": 475, "y": 125, "content": "C₂", "fontSize": 10, "color": "#10b981" },
    { "type": "text", "x": 650, "y": 125, "content": "Cout", "fontSize": 10, "color": "#10b981" },
    
    { "type": "text", "x": 15, "y": 140, "content": "0", "fontSize": 12, "color": "#78716c" },
    { "type": "line", "from": { "x": 30, "y": 135 }, "to": { "x": 50, "y": 135 }, "stroke": "#78716c", "strokeWidth": 1 },
    
    { "type": "line", "from": { "x": 90, "y": 170 }, "to": { "x": 90, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 250, "y": 170 }, "to": { "x": 250, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 410, "y": 170 }, "to": { "x": 410, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 570, "y": 170 }, "to": { "x": 570, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 700, "y": 135 }, "to": { "x": 700, "y": 220 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "text", "x": 90, "y": 245, "content": "S₀", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 250, "y": 245, "content": "S₁", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 410, "y": 245, "content": "S₂", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 570, "y": 245, "content": "S₃", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 700, "y": 245, "content": "S₄", "fontSize": 14, "color": "#10b981", "fontWeight": "bold" },
    
    { "type": "text", "x": 420, "y": 270, "content": "O carry \\"ondula\\" da direita para a esquerda (ripple)", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

> [!dica] O nome "ripple carry" vem do fato que o carry se propaga sequencialmente, como uma ondulação. É simples, mas lento para números grandes.

---

## Multiplexador (MUX): O Seletor

Um **multiplexador** seleciona uma entre várias entradas e a passa para a saída. É como um switch controlado por sinais.

Um MUX de 2 entradas (2:1) usa 1 bit de seleção:

\`\`\`diagram
{
  "title": "MUX 2:1",
  "width": 840,
  "height": 300,
  "elements": [
    { "type": "rect", "x": 30, "y": 20, "width": 400, "height": 260, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 230, "y": 50, "content": "Funcionamento", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },
    
    { "type": "text", "x": 100, "y": 95, "content": "I₀", "fontSize": 14, "color": "#3b82f6", "fontWeight": "bold" },
    { "type": "text", "x": 100, "y": 145, "content": "I₁", "fontSize": 14, "color": "#8b5cf6", "fontWeight": "bold" },
    { "type": "text", "x": 100, "y": 195, "content": "S", "fontSize": 14, "color": "#f59e0b", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 120, "y": 90 }, "to": { "x": 180, "y": 90 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 120, "y": 140 }, "to": { "x": 180, "y": 140 }, "stroke": "#8b5cf6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 120, "y": 190 }, "to": { "x": 230, "y": 190 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 230, "y": 190 }, "to": { "x": 230, "y": 155 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    
    { "type": "rect", "x": 180, "y": 70, "width": 100, "height": 100, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 0 },
    { "type": "line", "from": { "x": 180, "y": 70 }, "to": { "x": 280, "y": 95 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 180, "y": 170 }, "to": { "x": 280, "y": 145 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    
    { "type": "text", "x": 230, "y": 125, "content": "MUX", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 280, "y": 120 }, "to": { "x": 340, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "text", "x": 360, "y": 125, "content": "Y", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },
    
    { "type": "text", "x": 230, "y": 240, "content": "Se S=0 → Y=I₀", "fontSize": 13, "color": "#3b82f6" },
    { "type": "text", "x": 230, "y": 265, "content": "Se S=1 → Y=I₁", "fontSize": 13, "color": "#8b5cf6" },
    
    { "type": "rect", "x": 460, "y": 20, "width": 350, "height": 260, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 635, "y": 50, "content": "Circuito com portas", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    
    { "type": "text", "x": 490, "y": 100, "content": "I₀", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 490, "y": 160, "content": "I₁", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 490, "y": 220, "content": "S", "fontSize": 13, "color": "#57534e" },
    
    { "type": "line", "from": { "x": 510, "y": 95 }, "to": { "x": 560, "y": 95 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 510, "y": 155 }, "to": { "x": 560, "y": 155 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "line", "from": { "x": 510, "y": 215 }, "to": { "x": 530, "y": 215 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "ellipse", "cx": 540, "cy": 215, "rx": 6, "ry": 6, "fill": "#fef3c7", "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 546, "y": 215 }, "to": { "x": 560, "y": 215 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "ellipse", "cx": 530, "cy": 155, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "line", "from": { "x": 530, "y": 155 }, "to": { "x": 530, "y": 215 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "line", "from": { "x": 560, "y": 215 }, "to": { "x": 560, "y": 110 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "rect", "x": 590, "y": 80, "width": 50, "height": 40, "label": "AND", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 4 },
    { "type": "rect", "x": 590, "y": 140, "width": 50, "height": 40, "label": "AND", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 2, "rounded": 4 },
    
    { "type": "line", "from": { "x": 560, "y": 95 }, "to": { "x": 590, "y": 90 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 560, "y": 110 }, "to": { "x": 590, "y": 110 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "line", "from": { "x": 560, "y": 155 }, "to": { "x": 590, "y": 150 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 530, "y": 170 }, "to": { "x": 590, "y": 170 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "line", "from": { "x": 640, "y": 100 }, "to": { "x": 680, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 640, "y": 160 }, "to": { "x": 680, "y": 160 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "line", "from": { "x": 680, "y": 100 }, "to": { "x": 680, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 680, "y": 160 }, "to": { "x": 680, "y": 140 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "rect", "x": 700, "y": 115, "width": 40, "height": 30, "label": "OR", "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 2, "rounded": 4 },
    
    { "type": "line", "from": { "x": 680, "y": 130 }, "to": { "x": 700, "y": 130 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 740, "y": 130 }, "to": { "x": 780, "y": 130 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "text", "x": 780, "y": 135, "content": "Y", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },
    
    { "type": "text", "x": 635, "y": 260, "content": "Y = I₀·S' + I₁·S", "fontSize": 12, "color": "#78716c" }
  ]
}
\`\`\`

### Por que MUX é importante?

O MUX é um dos blocos mais versáteis:

- **Seleção de dados**: escolhe qual registrador enviar ao processador
- **Implementação de funções**: qualquer função booleana pode ser implementada com MUX
- **Roteamento de sinais**: direciona dados pelo caminho correto
- **Memória ROM**: cada combinação de seleção pode representar uma palavra armazenada

> [!nota] Um MUX 4:1 usa 2 bits de seleção. Um MUX 8:1 usa 3 bits. Em geral, MUX 2ⁿ:1 usa n bits de seleção.

---

## Decodificador: Ativando uma linha

Um **decodificador** faz o inverso do MUX: recebe um código binário e ativa exatamente uma saída.

\`\`\`diagram
{
  "title": "Decodificador 2:4",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 60, "y": 30, "width": 300, "height": 220, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 14 },
    { "type": "text", "x": 210, "y": 60, "content": "Decodificador 2:4", "fontSize": 14, "color": "#5b21b6", "fontWeight": "bold" },
    
    { "type": "text", "x": 100, "y": 120, "content": "A₀", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 100, "y": 160, "content": "A₁", "fontSize": 13, "color": "#57534e" },
    
    { "type": "line", "from": { "x": 125, "y": 115 }, "to": { "x": 165, "y": 115 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 125, "y": 155 }, "to": { "x": 165, "y": 155 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "rect", "x": 165, "y": 80, "width": 90, "height": 130, "label": "", "fill": "#fff", "stroke": "#8b5cf6", "strokeWidth": 2, "rounded": 8 },
    { "type": "text", "x": 210, "y": 150, "content": "DEC", "fontSize": 16, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 255, "y": 95 }, "to": { "x": 315, "y": 95 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 255, "y": 120 }, "to": { "x": 315, "y": 120 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 255, "y": 145 }, "to": { "x": 315, "y": 145 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 255, "y": 170 }, "to": { "x": 315, "y": 170 }, "stroke": "#57534e", "strokeWidth": 2 },
    
    { "type": "text", "x": 325, "y": 100, "content": "Y₀", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 325, "y": 125, "content": "Y₁", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 325, "y": 150, "content": "Y₂", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 325, "y": 175, "content": "Y₃", "fontSize": 13, "color": "#57534e" },
    
    { "type": "rect", "x": 420, "y": 30, "width": 380, "height": 220, "label": "", "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 610, "y": 60, "content": "Tabela de funcionamento", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },
    
    { "type": "text", "x": 475, "y": 95, "content": "A₁", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 525, "y": 95, "content": "A₀", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 590, "y": 95, "content": "Y₃ Y₂ Y₁ Y₀", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 715, "y": 95, "content": "Ativa", "fontSize": 12, "color": "#57534e", "fontWeight": "bold" },
    
    { "type": "line", "from": { "x": 450, "y": 110 }, "to": { "x": 770, "y": 110 }, "stroke": "#d6d3d1", "strokeWidth": 1 },
    
    { "type": "text", "x": 478, "y": 135, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 528, "y": 135, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 600, "y": 135, "content": "0 0 0 1", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 715, "y": 135, "content": "Y₀", "fontSize": 13, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "text", "x": 478, "y": 160, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 528, "y": 160, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 600, "y": 160, "content": "0 0 1 0", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 715, "y": 160, "content": "Y₁", "fontSize": 13, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "text", "x": 478, "y": 185, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 528, "y": 185, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 600, "y": 185, "content": "0 1 0 0", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 715, "y": 185, "content": "Y₂", "fontSize": 13, "color": "#8b5cf6", "fontWeight": "bold" },
    
    { "type": "text", "x": 478, "y": 210, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 528, "y": 210, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "text", "x": 600, "y": 210, "content": "1 0 0 0", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 715, "y": 210, "content": "Y₃", "fontSize": 13, "color": "#8b5cf6", "fontWeight": "bold" }
  ]
}
\`\`\`

Decodificadores são usados para:
- **Seleção de memória**: cada endereço ativa uma célula específica
- **Displays de 7 segmentos**: converte binário para sinais do display
- **Decodificação de instruções**: identifica qual operação executar

---

## Recapitulando

| Circuito | Entradas | Saídas | Função |
|----------|----------|--------|--------|
| **Half-Adder** | 2 bits | S, C | Soma dois bits |
| **Full-Adder** | 3 bits (A, B, Cin) | S, Cout | Soma com carry de entrada |
| **MUX 2:1** | 2 dados + 1 seleção | 1 dado | Seleciona uma entrada |
| **Decoder 2:4** | 2 bits | 4 linhas | Ativa uma saída por código |

---

## Exercícios de Fixação

1. **Half-Adder:** Qual seria a tabela-verdade de um half-adder se as entradas fossem chamadas X e Y? Escreva as expressões para S e C.

2. **Full-Adder:** Se A=1, B=1, Cin=1, quais são os valores de Soma e Cout? Explique o raciocínio.

3. **Ripple Carry:** Por que o somador ripple carry é "lento" para números de muitos bits? O que poderia melhorar isso?

4. **MUX como função:** Mostre como um MUX 4:1 pode implementar a função $F(A,B) = A \\oplus B$ (XOR), conectando corretamente as entradas de dados.

5. **Decodificador:** Quantas saídas teria um decodificador com 3 bits de entrada? E com 4 bits?

6. **Projeto:** Combine um decodificador 2:4 com quatro ANDs e um OR para criar um MUX 4:1. Desenhe o circuito.`,headings:[{level:2,text:"O que são Circuitos Combinacionais?",id:"o-que-são-circuitos-combinacionais"},{level:2,text:"Half-Adder: Seu Primeiro Somador",id:"half-adder-seu-primeiro-somador"},{level:2,text:"Full-Adder: Somador Completo",id:"full-adder-somador-completo"},{level:3,text:"Encadeando para números maiores",id:"encadeando-para-números-maiores"},{level:2,text:"Multiplexador (MUX): O Seletor",id:"multiplexador-mux-o-seletor"},{level:3,text:"Por que MUX é importante?",id:"por-que-mux-é-importante"},{level:2,text:"Decodificador: Ativando uma linha",id:"decodificador-ativando-uma-linha"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"portas-logicas/da-teoria-ao-circuito":{title:"Da Teoria ao Circuito",description:"Como as operações booleanas abstratas se tornam circuitos físicos que processam informação.",duration:"1 aula",order:999,category:"portas-logicas",content:`# Da Teoria ao Circuito

Na aula anterior, você aprendeu álgebra booleana — uma matemática elegante com apenas dois valores (0 e 1) e três operações fundamentais (AND, OR, NOT). Mas aquilo era abstração pura: símbolos no papel.

Agora vamos dar um salto: como essas operações abstratas se tornam **circuitos físicos** que realmente processam informação?

---

## O grande insight de Shannon

Em 1937, um jovem engenheiro de 21 anos chamado **Claude Shannon** estava fazendo seu mestrado no MIT. Sua tese fez uma conexão brilhante:

> **Circuitos elétricos com interruptores se comportam exatamente como a álgebra booleana.**

Pense em um interruptor simples:

- **Fechado** (conduz eletricidade) → representa **1**
- **Aberto** (não conduz) → representa **0**

Shannon percebeu que, combinando interruptores de formas específicas, você podia implementar fisicamente as operações AND, OR e NOT.

\`\`\`diagram
{
  "title": "A ponte de Shannon",
  "width": 840,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 80, "y": 50, "width": 200, "height": 100, "label": "Álgebra Booleana", "sublabel": "Teoria matemática", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14, "fontSize": 14, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 285, "y": 100 }, "to": { "x": 345, "y": 100 }, "stroke": "#10b981", "strokeWidth": 3 },
    { "type": "text", "x": 315, "y": 75, "content": "Shannon", "fontSize": 12, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 315, "y": 130, "content": "1937", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 350, "y": 50, "width": 200, "height": 100, "label": "Circuitos Elétricos", "sublabel": "Implementação física", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14, "fontSize": 14, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 555, "y": 100 }, "to": { "x": 615, "y": 100 }, "stroke": "#8b5cf6", "strokeWidth": 3 },

    { "type": "rect", "x": 620, "y": 50, "width": 200, "height": 100, "label": "Computadores", "sublabel": "Processamento digital", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 14, "fontSize": 14, "fontWeight": "bold" }
  ]
}
\`\`\`

Essa tese — considerada uma das mais importantes do século XX — abriu caminho para toda a eletrônica digital moderna.

---

## De interruptores a transistores

Nos primeiros computadores, as operações lógicas eram feitas com **relés** (interruptores eletromagnéticos) e depois com **válvulas** (tubos de vácuo). O ENIAC tinha 17 mil válvulas!

A revolução veio com o **transistor**, inventado em 1947. Um transistor é como um interruptor microscópico:

- Sem corrente na base → não conduz (0)
- Com corrente na base → conduz (1)

\`\`\`diagram
{
  "title": "Evolução dos componentes",
  "width": 840,
  "height": 240,
  "elements": [
    { "type": "rect", "x": 60, "y": 40, "width": 200, "height": 140, "label": "Relé", "sublabel": "1930s-40s", "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 12, "fontSize": 15, "fontWeight": "bold" },
    { "type": "text", "x": 160, "y": 125, "content": "Lento, grande", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 160, "y": 145, "content": "mecânico, barulhento", "fontSize": 11, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 270, "y": 110 }, "to": { "x": 310, "y": 110 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 320, "y": 40, "width": 200, "height": 140, "label": "Válvula", "sublabel": "1940s-50s", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12, "fontSize": 15, "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 125, "content": "Mais rápido, mas", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 420, "y": 145, "content": "quente, queima fácil", "fontSize": 11, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 530, "y": 110 }, "to": { "x": 570, "y": 110 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 580, "y": 40, "width": 200, "height": 140, "label": "Transistor", "sublabel": "1950s-hoje", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12, "fontSize": 15, "fontWeight": "bold" },
    { "type": "text", "x": 680, "y": 125, "content": "Pequeno, rápido", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 680, "y": 145, "content": "eficiente, barato", "fontSize": 11, "color": "#78716c" },

    { "type": "text", "x": 420, "y": 215, "content": "Um chip moderno tem bilhões de transistores em poucos centímetros", "fontSize": 12, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

> [!nota] **Escala atual:** Um processador moderno como o Apple M3 tem cerca de **25 bilhões de transistores**. Cada um deles funciona como um interruptor microscópico implementando operações booleanas.

---

## O que é uma Porta Lógica?

Uma **porta lógica** é um circuito eletrônico que implementa uma operação booleana. Ela recebe uma ou mais entradas (0 ou 1) e produz uma saída (0 ou 1) seguindo regras específicas.

Internamente, uma porta lógica é construída com transistores organizados de formas específicas. Mas para quem projeta circuitos digitais, não é preciso entender os transistores — trabalhamos no nível de **abstração** das portas.

\`\`\`diagram
{
  "title": "Níveis de abstração",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 220, "y": 20, "width": 400, "height": 60, "label": "Programa / Software", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 10, "fontSize": 14, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 420, "y": 85 }, "to": { "x": 420, "y": 100 }, "stroke": "#a8a29e" },

    { "type": "rect", "x": 220, "y": 105, "width": 400, "height": 60, "label": "Portas Lógicas", "sublabel": "← Nosso foco agora", "fill": "#d1fae5", "stroke": "#10b981", "strokeWidth": 3, "rounded": 10, "fontSize": 14, "fontWeight": "bold" },

    { "type": "arrow", "from": { "x": 420, "y": 170 }, "to": { "x": 420, "y": 185 }, "stroke": "#a8a29e" },

    { "type": "rect", "x": 220, "y": 190, "width": 400, "height": 60, "label": "Transistores / Eletrônica", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10, "fontSize": 14, "fontWeight": "bold" },

    { "type": "text", "x": 680, "y": 50, "content": "Alto nível", "fontSize": 12, "color": "#8b5cf6" },
    { "type": "text", "x": 680, "y": 220, "content": "Baixo nível", "fontSize": 12, "color": "#f59e0b" },
    { "type": "arrow", "from": { "x": 680, "y": 65 }, "to": { "x": 680, "y": 205 }, "stroke": "#d6d3d1" }
  ]
}
\`\`\`

---

## Simbologia das portas

Cada porta lógica tem um **símbolo gráfico** padronizado que usamos em diagramas de circuitos. Existem dois padrões principais:

| Padrão        | Origem         | Característica                     |
| ------------- | -------------- | ---------------------------------- |
| **ANSI/IEEE** | Estados Unidos | Formas distintivas para cada porta |
| **IEC**       | Internacional  | Retângulos com símbolos internos   |

Neste curso, usaremos principalmente o padrão **ANSI/IEEE** por ser mais visual e intuitivo.

---

## Por que estudar portas lógicas?

Você pode se perguntar: se os computadores já existem e funcionam, por que estudar isso?

**1. Entender o que acontece "por baixo"**
Quando você escreve \`if (a && b)\` em uma linguagem de programação, isso eventualmente vira uma operação AND em hardware. Entender essa conexão desmistifica o computador.

**2. Projetar hardware**
Se você quiser criar sistemas embarcados, trabalhar com FPGAs, ou entender como processadores são projetados, precisa dominar portas lógicas.

**3. Otimização**
Circuitos mais simples são mais rápidos e consomem menos energia. Saber simplificar expressões booleanas tem impacto direto no mundo real.

**4. Debug de baixo nível**
Às vezes, problemas de software têm raiz em comportamentos de hardware. Entender a lógica digital ajuda a diagnosticar esses casos.

---

## Características importantes

Antes de estudarmos cada porta, alguns conceitos que se aplicam a todas:

### Entradas e Saídas

- **Entradas (inputs):** Os valores que a porta recebe (podem ser 1, 2, 3 ou mais)
- **Saída (output):** O resultado da operação (geralmente 1 saída)

### Propagation Delay

Nenhum circuito é instantâneo. O **delay de propagação** é o tempo que a saída leva para reagir após uma mudança na entrada. Em portas modernas, isso é medido em **nanossegundos** ou até **picossegundos**.

### Fan-in e Fan-out

- **Fan-in:** Quantas entradas a porta aceita
- **Fan-out:** Quantas outras portas podem ser conectadas à saída

---

## O que vem a seguir

Nas próximas aulas, vamos estudar cada porta em detalhes:

1. **Portas básicas:** AND, OR, NOT — as três fundamentais
2. **Portas compostas:** NAND, NOR, XOR, XNOR — combinações poderosas
3. **Circuitos combinacionais:** Como conectar portas para criar funções complexas

> [!dica] **Prepare-se:** A partir de agora, você vai pensar em termos de 0s e 1s fluindo por circuitos. É uma nova forma de enxergar o mundo — e é assim que toda a tecnologia digital funciona.

---

## Recapitulando

| Conceito               | Descrição                                                          |
| ---------------------- | ------------------------------------------------------------------ |
| **Insight de Shannon** | Álgebra booleana descreve o comportamento de circuitos elétricos   |
| **Porta lógica**       | Circuito que implementa uma operação booleana                      |
| **Transistor**         | Componente básico que funciona como interruptor eletrônico         |
| **Abstração**          | Trabalhamos no nível de portas, sem nos preocupar com transistores |
| **Simbologia**         | Cada porta tem um símbolo gráfico padronizado (ANSI/IEEE ou IEC)   |

---

## Exercícios de Fixação

1. **Reflexão histórica:** Por que a tese de Shannon (1937) é considerada uma das mais importantes do século XX? O que ela permitiu que não era possível antes?

2. **Evolução tecnológica:** Ordene do mais antigo ao mais recente: transistor, válvula, relé. Para cada um, cite uma vantagem sobre o anterior.

3. **Abstração:** Um programador que escreve \`if (a && b)\` precisa saber como uma porta AND é construída com transistores? Justifique usando o conceito de níveis de abstração.

4. **Escala:** Se um processador moderno tem 25 bilhões de transistores, e uma porta AND simples usa aproximadamente 6 transistores, quantas portas AND "caberiam" nesse processador? (Não é uma conta real — apenas para dar noção de escala)

5. **Pesquisa:** O que é um FPGA? Como ele se relaciona com o estudo de portas lógicas?`,headings:[{level:2,text:"O grande insight de Shannon",id:"o-grande-insight-de-shannon"},{level:2,text:"De interruptores a transistores",id:"de-interruptores-a-transistores"},{level:2,text:"O que é uma Porta Lógica?",id:"o-que-é-uma-porta-lógica"},{level:2,text:"Simbologia das portas",id:"simbologia-das-portas"},{level:2,text:"Por que estudar portas lógicas?",id:"por-que-estudar-portas-lógicas"},{level:2,text:"Características importantes",id:"características-importantes"},{level:3,text:"Entradas e Saídas",id:"entradas-e-saídas"},{level:3,text:"Propagation Delay",id:"propagation-delay"},{level:3,text:"Fan-in e Fan-out",id:"fan-in-e-fan-out"},{level:2,text:"O que vem a seguir",id:"o-que-vem-a-seguir"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"portas-logicas/portas-basicas":{title:"Portas Básicas: AND, OR, NOT",description:"As três portas fundamentais que são a base de toda a lógica digital — símbolos, tabelas-verdade e comportamento.",duration:"1 aula",order:999,category:"portas-logicas",content:`# Portas Básicas: AND, OR, NOT

Toda a eletrônica digital — de calculadoras a supercomputadores — é construída a partir de apenas **três operações fundamentais**. Nesta aula, vamos conhecer as portas que implementam essas operações: AND, OR e NOT.

---

## A Porta NOT (Inversor)

Vamos começar pela mais simples. A porta **NOT** tem apenas **uma entrada** e faz uma coisa: **inverte** o valor.

- Entra 0 → sai 1
- Entra 1 → sai 0

\`\`\`diagram
{
  "title": "Porta NOT (Inversor)",
  "width": 800,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 360, "height": 180, "fill": "#fdf2f8", "stroke": "#fbcfe8", "rounded": 14 },
    { "type": "text", "x": 220, "y": 50, "content": "Símbolo da Porta NOT", "fontSize": 14, "color": "#9d174d", "fontWeight": "bold" },

    { "type": "gate", "x": 140, "y": 85, "width": 70, "height": 50, "gateType": "not", "fill": "#fce7f3", "stroke": "#db2777", "inputs": ["A"], "outputs": ["A'"] },

    { "type": "rect", "x": 420, "y": 20, "width": 340, "height": 180, "fill": "#f5f5f4", "stroke": "#e5e5e5", "rounded": 14 },
    { "type": "text", "x": 590, "y": 50, "content": "Tabela-Verdade", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 470, "y": 75, "width": 80, "height": 35, "fill": "#fce7f3", "stroke": "#f9a8d4", "rounded": 4 },
    { "type": "text", "x": 510, "y": 98, "content": "A", "fontSize": 13, "color": "#9d174d", "fontWeight": "bold" },

    { "type": "rect", "x": 560, "y": 75, "width": 150, "height": 35, "fill": "#fce7f3", "stroke": "#f9a8d4", "rounded": 4 },
    { "type": "text", "x": 635, "y": 98, "content": "Saída (NOT A)", "fontSize": 13, "color": "#9d174d", "fontWeight": "bold" },

    { "type": "rect", "x": 470, "y": 110, "width": 80, "height": 30, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 510, "y": 130, "content": "0", "fontSize": 14, "color": "#78716c" },
    { "type": "rect", "x": 560, "y": 110, "width": 150, "height": 30, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 635, "y": 130, "content": "1", "fontSize": 14, "color": "#db2777", "fontWeight": "bold" },

    { "type": "rect", "x": 470, "y": 140, "width": 80, "height": 30, "fill": "#fafafa", "stroke": "#e5e5e5" },
    { "type": "text", "x": 510, "y": 160, "content": "1", "fontSize": 14, "color": "#78716c" },
    { "type": "rect", "x": 560, "y": 140, "width": 150, "height": 30, "fill": "#fafafa", "stroke": "#e5e5e5" },
    { "type": "text", "x": 635, "y": 160, "content": "0", "fontSize": 14, "color": "#db2777", "fontWeight": "bold" }
  ]
}
\`\`\`

> [!dica] **Analogia:** Pense em um interruptor "invertido" — quando você pressiona (1), a luz apaga (0). Quando solta (0), a luz acende (1).

### Notações para NOT

A operação NOT pode ser escrita de várias formas:

| Notação        | Exemplo        | Significado |
| -------------- | -------------- | ----------- |
| Barra superior | $\\overline{A}$ | NOT A       |
| Apóstrofo      | A'             | NOT A       |
| Símbolo ¬      | ¬A             | NOT A       |

---

## A Porta AND

A porta **AND** implementa a operação "E" lógico. A saída é 1 **somente** quando **todas** as entradas são 1.

\`\`\`diagram
{
  "title": "Porta AND (2 entradas)",
  "width": 800,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 360, "height": 220, "fill": "#eff6ff", "stroke": "#bfdbfe", "rounded": 14 },
    { "type": "text", "x": 220, "y": 50, "content": "Símbolo da Porta AND", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "gate", "x": 140, "y": 80, "width": 80, "height": 60, "gateType": "and", "fill": "#dbeafe", "stroke": "#2563eb", "inputs": ["A", "B"], "outputs": ["A·B"], "label": "AND" },

    { "type": "rect", "x": 420, "y": 20, "width": 340, "height": 220, "fill": "#f5f5f4", "stroke": "#e5e5e5", "rounded": 14 },
    { "type": "text", "x": 590, "y": 50, "content": "Tabela-Verdade", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 75, "width": 50, "height": 30, "fill": "#dbeafe", "stroke": "#93c5fd", "rounded": 4 },
    { "type": "text", "x": 475, "y": 95, "content": "A", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 75, "width": 50, "height": 30, "fill": "#dbeafe", "stroke": "#93c5fd", "rounded": 4 },
    { "type": "text", "x": 535, "y": 95, "content": "B", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 75, "width": 140, "height": 30, "fill": "#dbeafe", "stroke": "#93c5fd", "rounded": 4 },
    { "type": "text", "x": 640, "y": 95, "content": "Saída (A·B)", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 105, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 475, "y": 123, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 105, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 535, "y": 123, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 105, "width": 140, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 640, "y": 123, "content": "0", "fontSize": 13, "color": "#ef4444", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 133, "width": 50, "height": 28, "fill": "#fafafa", "stroke": "#e5e5e5" },
    { "type": "text", "x": 475, "y": 151, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 133, "width": 50, "height": 28, "fill": "#fafafa", "stroke": "#e5e5e5" },
    { "type": "text", "x": 535, "y": 151, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 133, "width": 140, "height": 28, "fill": "#fafafa", "stroke": "#e5e5e5" },
    { "type": "text", "x": 640, "y": 151, "content": "0", "fontSize": 13, "color": "#ef4444", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 161, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 475, "y": 179, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 161, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 535, "y": 179, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 161, "width": 140, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 640, "y": 179, "content": "0", "fontSize": 13, "color": "#ef4444", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 189, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 207, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 189, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 207, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 189, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 207, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" }
  ]
}
\`\`\`

> [!nota] **Observe:** A saída só é 1 quando A **E** B são 1. Basta uma entrada ser 0 para a saída ser 0.

### Analogia do AND

Pense em dois interruptores **em série** numa lâmpada:

\`\`\`diagram
{
  "title": "Analogia: Interruptores em Série",
  "width": 800,
  "height": 180,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 720, "height": 140, "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 400, "y": 50, "content": "AND = Interruptores em série (ambos precisam estar fechados)", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 100, "y": 100, "content": "🔌", "fontSize": 24, "color": "#57534e" },
    { "type": "line", "from": { "x": 130, "y": 100 }, "to": { "x": 200, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 200, "y": 85, "width": 80, "height": 30, "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 6 },
    { "type": "text", "x": 240, "y": 105, "content": "A", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 280, "y": 100 }, "to": { "x": 340, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "rect", "x": 340, "y": 85, "width": 80, "height": 30, "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 6 },
    { "type": "text", "x": 380, "y": 105, "content": "B", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },

    { "type": "line", "from": { "x": 420, "y": 100 }, "to": { "x": 500, "y": 100 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 540, "cy": 100, "rx": 25, "ry": 25, "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "text", "x": 540, "y": 105, "content": "💡", "fontSize": 18, "color": "#78716c" },

    { "type": "text", "x": 620, "y": 105, "content": "Só acende se A e B\\nestiverem fechados", "fontSize": 11, "color": "#78716c" }
  ]
}
\`\`\`

### Notações para AND

| Notação       | Exemplo | Significado |
| ------------- | ------- | ----------- |
| Ponto         | A · B   | A AND B     |
| Multiplicação | A × B   | A AND B     |
| Justaposição  | AB      | A AND B     |
| Símbolo ∧     | A ∧ B   | A AND B     |

---

## A Porta OR

A porta **OR** implementa a operação "OU" lógico. A saída é 1 quando **pelo menos uma** entrada é 1.

\`\`\`diagram
{
  "title": "Porta OR (2 entradas)",
  "width": 800,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 360, "height": 220, "fill": "#f0fdf4", "stroke": "#bbf7d0", "rounded": 14 },
    { "type": "text", "x": 220, "y": 50, "content": "Símbolo da Porta OR", "fontSize": 14, "color": "#166534", "fontWeight": "bold" },

    { "type": "gate", "x": 140, "y": 80, "width": 80, "height": 60, "gateType": "or", "fill": "#dcfce7", "stroke": "#22c55e", "inputs": ["A", "B"], "outputs": ["A+B"], "label": "OR" },

    { "type": "rect", "x": 420, "y": 20, "width": 340, "height": 220, "fill": "#f5f5f4", "stroke": "#e5e5e5", "rounded": 14 },
    { "type": "text", "x": 590, "y": 50, "content": "Tabela-Verdade", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 75, "width": 50, "height": 30, "fill": "#dcfce7", "stroke": "#86efac", "rounded": 4 },
    { "type": "text", "x": 475, "y": 95, "content": "A", "fontSize": 12, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 75, "width": 50, "height": 30, "fill": "#dcfce7", "stroke": "#86efac", "rounded": 4 },
    { "type": "text", "x": 535, "y": 95, "content": "B", "fontSize": 12, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 75, "width": 140, "height": 30, "fill": "#dcfce7", "stroke": "#86efac", "rounded": 4 },
    { "type": "text", "x": 640, "y": 95, "content": "Saída (A+B)", "fontSize": 12, "color": "#166534", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 105, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 123, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 105, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 123, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 105, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 123, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 133, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 475, "y": 151, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 133, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 535, "y": 151, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 133, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 151, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 161, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 475, "y": 179, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 161, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 535, "y": 179, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 161, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 179, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 189, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 475, "y": 207, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 189, "width": 50, "height": 28, "fill": "#fff", "stroke": "#e5e5e5" },
    { "type": "text", "x": 535, "y": 207, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 189, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 207, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" }
  ]
}
\`\`\`

> [!nota] **Observe:** A saída só é 0 quando **ambas** entradas são 0. Basta uma ser 1 para a saída ser 1.

### Analogia do OR

Pense em dois interruptores **em paralelo** numa lâmpada:

\`\`\`diagram
{
  "title": "Analogia: Interruptores em Paralelo",
  "width": 800,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 720, "height": 160, "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 14 },
    { "type": "text", "x": 400, "y": 50, "content": "OR = Interruptores em paralelo (qualquer um fechado acende)", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },

    { "type": "text", "x": 100, "y": 115, "content": "🔌", "fontSize": 24, "color": "#57534e" },
    { "type": "line", "from": { "x": 130, "y": 115 }, "to": { "x": 180, "y": 115 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 180, "cy": 115, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },

    { "type": "line", "from": { "x": 180, "y": 115 }, "to": { "x": 180, "y": 85 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 180, "y": 85 }, "to": { "x": 220, "y": 85 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "rect", "x": 220, "y": 70, "width": 80, "height": 30, "fill": "#dcfce7", "stroke": "#22c55e", "rounded": 6 },
    { "type": "text", "x": 260, "y": 90, "content": "A", "fontSize": 14, "color": "#166534", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 300, "y": 85 }, "to": { "x": 360, "y": 85 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "line", "from": { "x": 180, "y": 115 }, "to": { "x": 180, "y": 145 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 180, "y": 145 }, "to": { "x": 220, "y": 145 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "rect", "x": 220, "y": 130, "width": 80, "height": 30, "fill": "#dcfce7", "stroke": "#22c55e", "rounded": 6 },
    { "type": "text", "x": 260, "y": 150, "content": "B", "fontSize": 14, "color": "#166534", "fontWeight": "bold" },
    { "type": "line", "from": { "x": 300, "y": 145 }, "to": { "x": 360, "y": 145 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 360, "cy": 115, "rx": 4, "ry": 4, "fill": "#57534e", "stroke": "#57534e" },
    { "type": "line", "from": { "x": 360, "y": 85 }, "to": { "x": 360, "y": 145 }, "stroke": "#57534e", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 360, "y": 115 }, "to": { "x": 430, "y": 115 }, "stroke": "#57534e", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 470, "cy": 115, "rx": 25, "ry": 25, "fill": "#fef3c7", "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "text", "x": 470, "y": 120, "content": "💡", "fontSize": 18, "color": "#78716c" },

    { "type": "text", "x": 570, "y": 115, "content": "Acende se A ou B\\n(ou ambos) estiverem\\nfechados", "fontSize": 11, "color": "#78716c" }
  ]
}
\`\`\`

### Notações para OR

| Notação   | Exemplo | Significado |
| --------- | ------- | ----------- |
| Soma      | A + B   | A OR B      |
| Símbolo ∨ | A ∨ B   | A OR B      |

---

## Comparativo das Três Portas Básicas

\`\`\`diagram
{
  "title": "Resumo: As Três Portas Fundamentais",
  "width": 800,
  "height": 300,
  "elements": [
    { "type": "rect", "x": 30, "y": 20, "width": 240, "height": 260, "fill": "#fdf2f8", "stroke": "#fbcfe8", "rounded": 14 },
    { "type": "text", "x": 150, "y": 50, "content": "NOT (Inversor)", "fontSize": 15, "color": "#9d174d", "fontWeight": "bold" },
    { "type": "gate", "x": 85, "y": 70, "width": 60, "height": 40, "gateType": "not", "fill": "#fce7f3", "stroke": "#db2777", "inputs": ["A"], "outputs": [""], "inputLabels": true, "outputLabels": false },
    { "type": "text", "x": 150, "y": 150, "content": "Inverte o sinal", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 150, "y": 175, "content": "0 → 1", "fontSize": 13, "color": "#db2777", "fontWeight": "bold" },
    { "type": "text", "x": 150, "y": 195, "content": "1 → 0", "fontSize": 13, "color": "#db2777", "fontWeight": "bold" },
    { "type": "text", "x": 150, "y": 230, "content": "Expressão: A' ou ¬A", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 150, "y": 255, "content": "1 entrada, 1 saída", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 280, "y": 20, "width": 240, "height": 260, "fill": "#eff6ff", "stroke": "#bfdbfe", "rounded": 14 },
    { "type": "text", "x": 400, "y": 50, "content": "AND", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "gate", "x": 330, "y": 65, "width": 70, "height": 50, "gateType": "and", "fill": "#dbeafe", "stroke": "#2563eb", "inputs": ["A", "B"], "outputs": [""], "inputLabels": true, "outputLabels": false },
    { "type": "text", "x": 400, "y": 150, "content": "Todos precisam ser 1", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 400, "y": 175, "content": "0 AND ? = 0", "fontSize": 13, "color": "#2563eb" },
    { "type": "text", "x": 400, "y": 195, "content": "1 AND 1 = 1", "fontSize": 13, "color": "#2563eb", "fontWeight": "bold" },
    { "type": "text", "x": 400, "y": 230, "content": "Expressão: A·B ou AB", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 400, "y": 255, "content": "Em série", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 530, "y": 20, "width": 240, "height": 260, "fill": "#f0fdf4", "stroke": "#bbf7d0", "rounded": 14 },
    { "type": "text", "x": 650, "y": 50, "content": "OR", "fontSize": 15, "color": "#166534", "fontWeight": "bold" },
    { "type": "gate", "x": 580, "y": 65, "width": 70, "height": 50, "gateType": "or", "fill": "#dcfce7", "stroke": "#22c55e", "inputs": ["A", "B"], "outputs": [""], "inputLabels": true, "outputLabels": false },
    { "type": "text", "x": 650, "y": 150, "content": "Pelo menos um = 1", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 650, "y": 175, "content": "1 OR ? = 1", "fontSize": 13, "color": "#22c55e", "fontWeight": "bold" },
    { "type": "text", "x": 650, "y": 195, "content": "0 OR 0 = 0", "fontSize": 13, "color": "#22c55e" },
    { "type": "text", "x": 650, "y": 230, "content": "Expressão: A+B", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 650, "y": 255, "content": "Em paralelo", "fontSize": 11, "color": "#78716c" }
  ]
}
\`\`\`

---

## Por que Apenas Três?

Com apenas **NOT**, **AND** e **OR**, você pode implementar **qualquer** função lógica possível. Este é um resultado fundamental da matemática chamado **completude funcional**.

Isso significa que todo circuito digital — do mais simples ao mais complexo — pode ser construído combinando essas três portas básicas!

> [!nota] **Curiosidade:** Na prática, veremos que podemos simplificar ainda mais. Uma única porta (como NAND ou NOR) também é "funcionalmente completa" — mas isso é assunto para a próxima aula!

---

## Exercícios de Fixação

1. **Tabela NOT:** Uma porta NOT recebe os valores 1, 0, 1, 0, 1 em sequência. Qual é a sequência de saída?

2. **Tabela AND:** Complete: 1 AND 0 = **_; 1 AND 1 = _**; 0 AND 0 = \\_\\_\\_

3. **Tabela OR:** Complete: 1 OR 0 = **_; 0 OR 0 = _**; 0 OR 1 = \\_\\_\\_

4. **Análise de circuito:** Se A=1 e B=0, qual é a saída de:
   - NOT A = ?
   - A AND B = ?
   - A OR B = ?

5. **Expressão para texto:** "A luz acende se a chave A **E** a chave B estiverem ligadas". Qual porta representa isso?

6. **Expressão para texto:** "O alarme toca se a porta A **OU** a porta B forem abertas". Qual porta representa isso?`,headings:[{level:2,text:"A Porta NOT (Inversor)",id:"a-porta-not-inversor"},{level:3,text:"Notações para NOT",id:"notações-para-not"},{level:2,text:"A Porta AND",id:"a-porta-and"},{level:3,text:"Analogia do AND",id:"analogia-do-and"},{level:3,text:"Notações para AND",id:"notações-para-and"},{level:2,text:"A Porta OR",id:"a-porta-or"},{level:3,text:"Analogia do OR",id:"analogia-do-or"},{level:3,text:"Notações para OR",id:"notações-para-or"},{level:2,text:"Comparativo das Três Portas Básicas",id:"comparativo-das-três-portas-básicas"},{level:2,text:"Por que Apenas Três?",id:"por-que-apenas-três"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"portas-logicas/portas-compostas":{title:"Portas Compostas: NAND, NOR, XOR, XNOR",description:"Expandindo o arsenal — portas derivadas que simplificam projetos e revelam propriedades surpreendentes.",duration:"1 aula",order:999,category:"portas-logicas",content:`# Portas Compostas: NAND, NOR, XOR, XNOR

As três portas básicas (AND, OR, NOT) são suficientes para construir qualquer circuito. Mas na prática, usamos também portas **compostas** que combinam operações — elas simplificam projetos e, como veremos, têm propriedades muito interessantes.

---

## Porta NAND (NOT + AND)

A porta **NAND** é simplesmente uma AND seguida de uma inversão. O nome vem de "**N**ot **AND**".

A saída é 0 **apenas** quando todas as entradas são 1. Em todos os outros casos, a saída é 1.

\`\`\`diagram
{
  "title": "Porta NAND",
  "width": 800,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 360, "height": 240, "fill": "#fff7ed", "stroke": "#fed7aa", "rounded": 14 },
    { "type": "text", "x": 220, "y": 50, "content": "Símbolo da Porta NAND", "fontSize": 14, "color": "#c2410c", "fontWeight": "bold" },

    { "type": "gate", "x": 140, "y": 80, "width": 80, "height": 60, "gateType": "nand", "fill": "#ffedd5", "stroke": "#ea580c", "inputs": ["A", "B"], "outputs": ["(A·B)'"], "label": "NAND" },

    { "type": "text", "x": 220, "y": 195, "content": "NAND = AND + NOT", "fontSize": 12, "color": "#c2410c" },
    { "type": "text", "x": 220, "y": 220, "content": "○ indica inversão", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 420, "y": 20, "width": 340, "height": 240, "fill": "#f5f5f4", "stroke": "#e5e5e5", "rounded": 14 },
    { "type": "text", "x": 590, "y": 50, "content": "Tabela-Verdade", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 75, "width": 50, "height": 30, "fill": "#ffedd5", "stroke": "#fdba74", "rounded": 4 },
    { "type": "text", "x": 475, "y": 95, "content": "A", "fontSize": 12, "color": "#c2410c", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 75, "width": 50, "height": 30, "fill": "#ffedd5", "stroke": "#fdba74", "rounded": 4 },
    { "type": "text", "x": 535, "y": 95, "content": "B", "fontSize": 12, "color": "#c2410c", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 75, "width": 140, "height": 30, "fill": "#ffedd5", "stroke": "#fdba74", "rounded": 4 },
    { "type": "text", "x": 640, "y": 95, "content": "Saída NAND", "fontSize": 12, "color": "#c2410c", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 105, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 123, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 105, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 123, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 105, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 123, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 133, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 151, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 133, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 151, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 133, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 151, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 161, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 179, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 161, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 179, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 161, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 179, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 189, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 207, "content": "1", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 189, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 207, "content": "1", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 189, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 207, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },

    { "type": "text", "x": 590, "y": 245, "content": "Inverso da AND!", "fontSize": 11, "color": "#ea580c", "fontStyle": "italic" }
  ]
}
\`\`\`

> [!nota] Compare com a AND: onde AND dá 1, NAND dá 0, e vice-versa. NAND é literalmente NOT(AND).

---

## Porta NOR (NOT + OR)

A porta **NOR** é uma OR seguida de uma inversão. O nome vem de "**N**ot **OR**".

A saída é 1 **apenas** quando todas as entradas são 0. Qualquer entrada 1 faz a saída ser 0.

\`\`\`diagram
{
  "title": "Porta NOR",
  "width": 800,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 360, "height": 240, "fill": "#faf5ff", "stroke": "#e9d5ff", "rounded": 14 },
    { "type": "text", "x": 220, "y": 50, "content": "Símbolo da Porta NOR", "fontSize": 14, "color": "#7e22ce", "fontWeight": "bold" },

    { "type": "gate", "x": 140, "y": 80, "width": 80, "height": 60, "gateType": "nor", "fill": "#f3e8ff", "stroke": "#a855f7", "inputs": ["A", "B"], "outputs": ["(A+B)'"], "label": "NOR" },

    { "type": "text", "x": 220, "y": 195, "content": "NOR = OR + NOT", "fontSize": 12, "color": "#7e22ce" },
    { "type": "text", "x": 220, "y": 220, "content": "○ indica inversão", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 420, "y": 20, "width": 340, "height": 240, "fill": "#f5f5f4", "stroke": "#e5e5e5", "rounded": 14 },
    { "type": "text", "x": 590, "y": 50, "content": "Tabela-Verdade", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 75, "width": 50, "height": 30, "fill": "#f3e8ff", "stroke": "#d8b4fe", "rounded": 4 },
    { "type": "text", "x": 475, "y": 95, "content": "A", "fontSize": 12, "color": "#7e22ce", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 75, "width": 50, "height": 30, "fill": "#f3e8ff", "stroke": "#d8b4fe", "rounded": 4 },
    { "type": "text", "x": 535, "y": 95, "content": "B", "fontSize": 12, "color": "#7e22ce", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 75, "width": 140, "height": 30, "fill": "#f3e8ff", "stroke": "#d8b4fe", "rounded": 4 },
    { "type": "text", "x": 640, "y": 95, "content": "Saída NOR", "fontSize": 12, "color": "#7e22ce", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 105, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 123, "content": "0", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 105, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 123, "content": "0", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 105, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 123, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 133, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 151, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 133, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 151, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 133, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 151, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 161, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 179, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 161, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 179, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 161, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 179, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 189, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 207, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 189, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 207, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 189, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 207, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },

    { "type": "text", "x": 590, "y": 245, "content": "Inverso da OR!", "fontSize": 11, "color": "#a855f7", "fontStyle": "italic" }
  ]
}
\`\`\`

---

## A Universalidade de NAND e NOR

Aqui está um fato surpreendente: tanto NAND quanto NOR são **portas universais**. Isso significa que você pode construir **qualquer circuito lógico** usando apenas um tipo de porta!

\`\`\`diagram
{
  "title": "NAND como Porta Universal",
  "width": 800,
  "height": 300,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 720, "height": 260, "fill": "#fff7ed", "stroke": "#fed7aa", "rounded": 14 },
    { "type": "text", "x": 400, "y": 50, "content": "Construindo todas as portas básicas apenas com NAND", "fontSize": 14, "color": "#c2410c", "fontWeight": "bold" },

    { "type": "rect", "x": 60, "y": 80, "width": 200, "height": 90, "fill": "#fdf2f8", "stroke": "#f9a8d4", "rounded": 10 },
    { "type": "text", "x": 160, "y": 100, "content": "NOT com NAND", "fontSize": 12, "color": "#9d174d", "fontWeight": "bold" },
    { "type": "gate", "x": 95, "y": 115, "width": 60, "height": 40, "gateType": "nand", "fill": "#ffedd5", "stroke": "#ea580c", "inputs": ["A", "A"], "outputs": ["A'"], "inputLabels": true, "outputLabels": true },

    { "type": "rect", "x": 300, "y": 80, "width": 200, "height": 90, "fill": "#eff6ff", "stroke": "#93c5fd", "rounded": 10 },
    { "type": "text", "x": 400, "y": 100, "content": "AND com 2 NANDs", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 400, "y": 145, "content": "NAND → NAND", "fontSize": 11, "color": "#3b82f6" },
    { "type": "text", "x": 400, "y": 165, "content": "(inverte 2x = AND)", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 540, "y": 80, "width": 200, "height": 90, "fill": "#f0fdf4", "stroke": "#86efac", "rounded": 10 },
    { "type": "text", "x": 640, "y": 100, "content": "OR com 3 NANDs", "fontSize": 12, "color": "#166534", "fontWeight": "bold" },
    { "type": "text", "x": 640, "y": 145, "content": "De Morgan:", "fontSize": 11, "color": "#22c55e" },
    { "type": "text", "x": 640, "y": 165, "content": "A+B = (A'·B')'", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 150, "y": 190, "width": 500, "height": 70, "fill": "#f5f5f4", "stroke": "#d6d3d1", "rounded": 10 },
    { "type": "text", "x": 400, "y": 215, "content": "💡 Consequência prática:", "fontSize": 13, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 400, "y": 240, "content": "Fábricas podem produzir apenas chips NAND e construir qualquer circuito!", "fontSize": 12, "color": "#78716c" }
  ]
}
\`\`\`

> [!dica] **Por que isso importa?** Na fabricação de chips, é mais barato produzir apenas um tipo de porta. Com NAND (ou NOR), você tem toda a lógica que precisa!

---

## Porta XOR (OU Exclusivo)

A porta **XOR** (exclusive OR) é diferente das anteriores. A saída é 1 quando as entradas são **diferentes**.

\`\`\`diagram
{
  "title": "Porta XOR",
  "width": 800,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 360, "height": 240, "fill": "#fefce8", "stroke": "#fef08a", "rounded": 14 },
    { "type": "text", "x": 220, "y": 50, "content": "Símbolo da Porta XOR", "fontSize": 14, "color": "#a16207", "fontWeight": "bold" },

    { "type": "gate", "x": 140, "y": 80, "width": 80, "height": 60, "gateType": "xor", "fill": "#fef9c3", "stroke": "#eab308", "inputs": ["A", "B"], "outputs": ["A⊕B"], "label": "XOR" },

    { "type": "text", "x": 220, "y": 195, "content": "XOR = OU Exclusivo", "fontSize": 12, "color": "#a16207" },
    { "type": "text", "x": 220, "y": 220, "content": "\\"Um ou outro, mas não ambos\\"", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 420, "y": 20, "width": 340, "height": 240, "fill": "#f5f5f4", "stroke": "#e5e5e5", "rounded": 14 },
    { "type": "text", "x": 590, "y": 50, "content": "Tabela-Verdade", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 75, "width": 50, "height": 30, "fill": "#fef9c3", "stroke": "#fde047", "rounded": 4 },
    { "type": "text", "x": 475, "y": 95, "content": "A", "fontSize": 12, "color": "#a16207", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 75, "width": 50, "height": 30, "fill": "#fef9c3", "stroke": "#fde047", "rounded": 4 },
    { "type": "text", "x": 535, "y": 95, "content": "B", "fontSize": 12, "color": "#a16207", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 75, "width": 140, "height": 30, "fill": "#fef9c3", "stroke": "#fde047", "rounded": 4 },
    { "type": "text", "x": 640, "y": 95, "content": "Saída XOR", "fontSize": 12, "color": "#a16207", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 105, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 123, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 105, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 123, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 105, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 123, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "text", "x": 720, "y": 123, "content": "iguais", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 450, "y": 133, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 151, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 133, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 151, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 133, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 151, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "text", "x": 720, "y": 151, "content": "diferentes", "fontSize": 10, "color": "#22c55e" },

    { "type": "rect", "x": 450, "y": 161, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 179, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 161, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 179, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 161, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 179, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "text", "x": 720, "y": 179, "content": "diferentes", "fontSize": 10, "color": "#22c55e" },

    { "type": "rect", "x": 450, "y": 189, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 207, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 189, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 207, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 189, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 207, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "text", "x": 720, "y": 207, "content": "iguais", "fontSize": 10, "color": "#78716c" }
  ]
}
\`\`\`

### Aplicações do XOR

O XOR é especialmente útil para:

- **Comparação de bits**: XOR = 1 indica que os bits são diferentes
- **Soma binária**: A ⊕ B é o bit de soma (sem carry)
- **Criptografia**: XOR com uma chave inverte/restaura dados
- **Detecção de erro**: Paridade (XOR de todos os bits)

---

## Porta XNOR (NOT + XOR)

A porta **XNOR** é o inverso do XOR. A saída é 1 quando as entradas são **iguais**.

\`\`\`diagram
{
  "title": "Porta XNOR (Coincidência)",
  "width": 800,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 40, "y": 20, "width": 360, "height": 240, "fill": "#ecfdf5", "stroke": "#a7f3d0", "rounded": 14 },
    { "type": "text", "x": 220, "y": 50, "content": "Símbolo da Porta XNOR", "fontSize": 14, "color": "#047857", "fontWeight": "bold" },

    { "type": "gate", "x": 140, "y": 80, "width": 80, "height": 60, "gateType": "xnor", "fill": "#d1fae5", "stroke": "#10b981", "inputs": ["A", "B"], "outputs": ["A⊙B"], "label": "XNOR" },

    { "type": "text", "x": 220, "y": 195, "content": "XNOR = XOR + NOT", "fontSize": 12, "color": "#047857" },
    { "type": "text", "x": 220, "y": 220, "content": "\\"Coincidência\\" ou \\"Igualdade\\"", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 420, "y": 20, "width": 340, "height": 240, "fill": "#f5f5f4", "stroke": "#e5e5e5", "rounded": 14 },
    { "type": "text", "x": 590, "y": 50, "content": "Tabela-Verdade", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 75, "width": 50, "height": 30, "fill": "#d1fae5", "stroke": "#6ee7b7", "rounded": 4 },
    { "type": "text", "x": 475, "y": 95, "content": "A", "fontSize": 12, "color": "#047857", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 75, "width": 50, "height": 30, "fill": "#d1fae5", "stroke": "#6ee7b7", "rounded": 4 },
    { "type": "text", "x": 535, "y": 95, "content": "B", "fontSize": 12, "color": "#047857", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 75, "width": 140, "height": 30, "fill": "#d1fae5", "stroke": "#6ee7b7", "rounded": 4 },
    { "type": "text", "x": 640, "y": 95, "content": "Saída XNOR", "fontSize": 12, "color": "#047857", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 105, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 123, "content": "0", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 105, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 123, "content": "0", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 105, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 123, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "text", "x": 720, "y": 123, "content": "iguais ✓", "fontSize": 10, "color": "#22c55e" },

    { "type": "rect", "x": 450, "y": 133, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 151, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 133, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 151, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 133, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 151, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 161, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 475, "y": 179, "content": "1", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 510, "y": 161, "width": 50, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 535, "y": 179, "content": "0", "fontSize": 13, "color": "#78716c" },
    { "type": "rect", "x": 570, "y": 161, "width": 140, "height": 28, "fill": "#fee2e2", "stroke": "#fca5a5" },
    { "type": "text", "x": 640, "y": 179, "content": "0", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },

    { "type": "rect", "x": 450, "y": 189, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 475, "y": 207, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 510, "y": 189, "width": 50, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 535, "y": 207, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "rect", "x": 570, "y": 189, "width": 140, "height": 28, "fill": "#dcfce7", "stroke": "#86efac" },
    { "type": "text", "x": 640, "y": 207, "content": "1", "fontSize": 13, "color": "#166534", "fontWeight": "bold" },
    { "type": "text", "x": 720, "y": 207, "content": "iguais ✓", "fontSize": 10, "color": "#22c55e" }
  ]
}
\`\`\`

> [!dica] XNOR é também chamado de porta de **coincidência** ou **igualdade** — ideal para comparar se dois bits são iguais.

---

## Comparativo das Portas Compostas

\`\`\`diagram
{
  "title": "Resumo: Portas Compostas",
  "width": 800,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 20, "y": 20, "width": 185, "height": 240, "fill": "#fff7ed", "stroke": "#fed7aa", "rounded": 14 },
    { "type": "text", "x": 112, "y": 50, "content": "NAND", "fontSize": 15, "color": "#c2410c", "fontWeight": "bold" },
    { "type": "gate", "x": 52, "y": 65, "width": 60, "height": 45, "gateType": "nand", "fill": "#ffedd5", "stroke": "#ea580c", "inputs": ["", ""], "outputs": [""], "inputLabels": false, "outputLabels": false },
    { "type": "text", "x": 112, "y": 150, "content": "NOT(A AND B)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 112, "y": 175, "content": "1 só se não forem", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 112, "y": 195, "content": "ambos 1", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 112, "y": 230, "content": "⭐ Universal!", "fontSize": 11, "color": "#ea580c", "fontWeight": "bold" },

    { "type": "rect", "x": 215, "y": 20, "width": 185, "height": 240, "fill": "#faf5ff", "stroke": "#e9d5ff", "rounded": 14 },
    { "type": "text", "x": 307, "y": 50, "content": "NOR", "fontSize": 15, "color": "#7e22ce", "fontWeight": "bold" },
    { "type": "gate", "x": 247, "y": 65, "width": 60, "height": 45, "gateType": "nor", "fill": "#f3e8ff", "stroke": "#a855f7", "inputs": ["", ""], "outputs": [""], "inputLabels": false, "outputLabels": false },
    { "type": "text", "x": 307, "y": 150, "content": "NOT(A OR B)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 307, "y": 175, "content": "1 só se ambos", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 307, "y": 195, "content": "forem 0", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 307, "y": 230, "content": "⭐ Universal!", "fontSize": 11, "color": "#a855f7", "fontWeight": "bold" },

    { "type": "rect", "x": 410, "y": 20, "width": 185, "height": 240, "fill": "#fefce8", "stroke": "#fef08a", "rounded": 14 },
    { "type": "text", "x": 502, "y": 50, "content": "XOR", "fontSize": 15, "color": "#a16207", "fontWeight": "bold" },
    { "type": "gate", "x": 442, "y": 65, "width": 60, "height": 45, "gateType": "xor", "fill": "#fef9c3", "stroke": "#eab308", "inputs": ["", ""], "outputs": [""], "inputLabels": false, "outputLabels": false },
    { "type": "text", "x": 502, "y": 150, "content": "OU Exclusivo", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 502, "y": 175, "content": "1 se diferentes", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 502, "y": 195, "content": "0 se iguais", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 502, "y": 230, "content": "Soma, Paridade", "fontSize": 11, "color": "#eab308" },

    { "type": "rect", "x": 605, "y": 20, "width": 175, "height": 240, "fill": "#ecfdf5", "stroke": "#a7f3d0", "rounded": 14 },
    { "type": "text", "x": 692, "y": 50, "content": "XNOR", "fontSize": 15, "color": "#047857", "fontWeight": "bold" },
    { "type": "gate", "x": 632, "y": 65, "width": 60, "height": 45, "gateType": "xnor", "fill": "#d1fae5", "stroke": "#10b981", "inputs": ["", ""], "outputs": [""], "inputLabels": false, "outputLabels": false },
    { "type": "text", "x": 692, "y": 150, "content": "Coincidência", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 692, "y": 175, "content": "1 se iguais", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 692, "y": 195, "content": "0 se diferentes", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 692, "y": 230, "content": "Comparação", "fontSize": 11, "color": "#10b981" }
  ]
}
\`\`\`

---

## Exercícios de Fixação

1. **Tabela NAND:** Complete: 1 NAND 0 = **_; 0 NAND 0 = _**; 1 NAND 1 = \\_\\_\\_

2. **Tabela NOR:** Complete: 0 NOR 1 = **_; 0 NOR 0 = _**; 1 NOR 1 = \\_\\_\\_

3. **Detector de diferença:** Qual porta indica quando dois bits são diferentes?

4. **Detector de igualdade:** Qual porta indica quando dois bits são iguais?

5. **Inversão:** Usando apenas NAND, como você faria um NOT? (Dica: conecte as duas entradas)

6. **Relação:** Se A=0 e B=1, calcule:
   - A NAND B = ?
   - A NOR B = ?
   - A XOR B = ?
   - A XNOR B = ?`,headings:[{level:2,text:"Porta NAND (NOT + AND)",id:"porta-nand-not--and"},{level:2,text:"Porta NOR (NOT + OR)",id:"porta-nor-not--or"},{level:2,text:"A Universalidade de NAND e NOR",id:"a-universalidade-de-nand-e-nor"},{level:2,text:"Porta XOR (OU Exclusivo)",id:"porta-xor-ou-exclusivo"},{level:3,text:"Aplicações do XOR",id:"aplicações-do-xor"},{level:2,text:"Porta XNOR (NOT + XOR)",id:"porta-xnor-not--xor"},{level:2,text:"Comparativo das Portas Compostas",id:"comparativo-das-portas-compostas"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"portas-logicas/projeto-pratico":{title:"Projeto Prático: Construindo um Somador",description:"Mão na massa! Vamos projetar, simular e entender um somador binário de 4 bits do zero.",duration:"2 aulas",order:999,category:"portas-logicas",content:`# Projeto Prático: Construindo um Somador

Hora de aplicar tudo que aprendemos! Neste projeto, vamos projetar um somador binário de 4 bits — o mesmo tipo de circuito que está dentro de todo processador.

---

## O Desafio

Construir um circuito que:

- Receba dois números de 4 bits: **A** (A₃A₂A₁A₀) e **B** (B₃B₂B₁B₀)
- Produza a **soma S** de 5 bits (S₄S₃S₂S₁S₀)
- O bit S₄ indica **overflow** (resultado > 15)

Por exemplo: 7 + 5 = 12 em decimal, ou 0111 + 0101 = 01100 em binário.

\`\`\`diagram
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
\`\`\`

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

- $S = A \\oplus B \\oplus C_{in}$
- $C_{out} = (A \\cdot B) + (C_{in} \\cdot (A \\oplus B))$

> [!dica] Lembre-se: um Full-Adder pode ser construído com dois Half-Adders e uma porta OR.

---

## Passo 2: Encadear os Full-Adders

Para o somador de 4 bits, conectamos 4 Full-Adders em cascata:

\`\`\`diagram
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
\`\`\`

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

\`\`\`diagram
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
\`\`\`

> [!dica] Use a função de **simulação passo a passo** do Logisim para ver exatamente como o sinal se propaga através do circuito.
}
\`\`\`

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

\`\`\`diagram
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
\`\`\`

Você deu o primeiro passo no mundo do projeto de hardware digital. Parabéns! 🎉

---

## Checklist do Projeto

- [ ] Entendi como funciona um Full-Adder
- [ ] Desenhei/simulei o somador de 4 bits
- [ ] Testei pelo menos 5 casos diferentes
- [ ] Verifiquei o comportamento do overflow
- [ ] (Bônus) Implementei a subtração
- [ ] (Bônus) Expandi para 8 bits`,headings:[{level:2,text:"O Desafio",id:"o-desafio"},{level:2,text:"Passo 1: Revisar o Full-Adder",id:"passo-1-revisar-o-full-adder"},{level:2,text:"Passo 2: Encadear os Full-Adders",id:"passo-2-encadear-os-full-adders"},{level:2,text:"Passo 3: Exemplo de Cálculo",id:"passo-3-exemplo-de-cálculo"},{level:2,text:"Passo 4: Simulando no Logisim",id:"passo-4-simulando-no-logisim"},{level:3,text:"Estratégia de Construção",id:"estratégia-de-construção"},{level:3,text:"O que Observar na Simulação",id:"o-que-observar-na-simulação"},{level:2,text:"Passo 5: Testando Exaustivamente",id:"passo-5-testando-exaustivamente"},{level:2,text:"Desafios Extras",id:"desafios-extras"},{level:3,text:"Desafio 1: Subtração",id:"desafio-1-subtração"},{level:3,text:"Desafio 2: Detector de Overflow (Números com Sinal)",id:"desafio-2-detector-de-overflow-números-com-sinal"},{level:3,text:"Desafio 3: Somador de 8 bits",id:"desafio-3-somador-de-8-bits"},{level:2,text:"Reflexão Final",id:"reflexão-final"},{level:2,text:"Checklist do Projeto",id:"checklist-do-projeto"}]}},"engenharia-dados":{"data-warehouse/atributos-e-arquitetura":{title:"Data Warehouse: Atributos e Arquitetura",description:"Os fundamentos de um Data Warehouse — características essenciais, arquitetura em camadas e como os dados fluem do operacional ao analítico.",duration:"1 aula",order:999,category:"data-warehouse",content:`# Data Warehouse: Atributos e Arquitetura

Você já ouviu que "dados são o novo petróleo". Mas assim como petróleo bruto precisa ser refinado, dados brutos precisam ser organizados e transformados para gerar valor. O **Data Warehouse** é essa refinaria de dados.

---

## O que é um Data Warehouse?

Um **Data Warehouse (DW)** é um repositório central de dados integrados de múltiplas fontes, projetado especificamente para **análise e tomada de decisão**.

Diferente de bancos de dados operacionais (que registram transações do dia a dia), o DW é otimizado para **consultas analíticas** — perguntas como "Qual foi o crescimento de vendas por região nos últimos 3 anos?".

\`\`\`diagram
{
  "title": "Banco Operacional vs Data Warehouse",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 40, "y": 40, "width": 360, "height": 200, "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 220, "y": 75, "content": "Banco Operacional (OLTP)", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 220, "y": 110, "content": "• Transações do dia a dia", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 135, "content": "• INSERT, UPDATE, DELETE frequentes", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 160, "content": "• Dados atuais (estado presente)", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 185, "content": "• Consultas simples e rápidas", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 210, "content": "• Normalizado (3FN)", "fontSize": 12, "color": "#57534e" },

    { "type": "rect", "x": 440, "y": 40, "width": 360, "height": 200, "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 14 },
    { "type": "text", "x": 620, "y": 75, "content": "Data Warehouse (OLAP)", "fontSize": 15, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 620, "y": 110, "content": "• Análise e relatórios", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 135, "content": "• SELECT intensivo (leitura)", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 160, "content": "• Dados históricos (evolução)", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 185, "content": "• Consultas complexas e agregadas", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 210, "content": "• Desnormalizado (Star/Snowflake)", "fontSize": 12, "color": "#57534e" }
  ]
}
\`\`\`

---

## Os 4 Atributos Fundamentais (Bill Inmon)

Bill Inmon, considerado o "pai do Data Warehouse", definiu 4 características essenciais que todo DW deve ter:

\`\`\`diagram
{
  "title": "Os 4 Atributos do Data Warehouse",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 40, "y": 40, "width": 380, "height": 120, "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12 },
    { "type": "text", "x": 230, "y": 70, "content": "1. Orientado por Assunto", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 230, "y": 100, "content": "Organizado por temas de negócio", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 230, "y": 125, "content": "Ex: Vendas, Clientes, Produtos, Finanças", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 440, "y": 40, "width": 360, "height": 120, "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 620, "y": 70, "content": "2. Integrado", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 620, "y": 100, "content": "Dados de múltiplas fontes unificados", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 125, "content": "Padrões consistentes (formato, unidades)", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 40, "y": 180, "width": 380, "height": 120, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12 },
    { "type": "text", "x": 230, "y": 210, "content": "3. Não Volátil", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 230, "y": 240, "content": "Dados são carregados e consultados", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 230, "y": 265, "content": "Não há UPDATE/DELETE de registros", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 440, "y": 180, "width": 360, "height": 120, "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 12 },
    { "type": "text", "x": 620, "y": 210, "content": "4. Variante no Tempo", "fontSize": 14, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 620, "y": 240, "content": "Mantém histórico dos dados", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 265, "content": "Permite análise de tendências e evolução", "fontSize": 11, "color": "#78716c" }
  ]
}
\`\`\`

### 1. Orientado por Assunto

O DW é organizado em torno de **áreas de negócio** (assuntos), não de processos ou aplicações.

| Sistema Operacional | Data Warehouse |
|---------------------|----------------|
| Sistema de Pedidos | Assunto: Vendas |
| Sistema de RH | Assunto: Funcionários |
| Sistema Financeiro | Assunto: Finanças |
| CRM | Assunto: Clientes |

### 2. Integrado

Dados vêm de **múltiplas fontes** com formatos diferentes. O DW unifica tudo:

- **Gênero:** "M/F" vs "Masculino/Feminino" vs "1/2" → padronizado
- **Moeda:** Dólar, Euro, Real → convertido para uma moeda base
- **Data:** "DD/MM/YYYY" vs "YYYY-MM-DD" → formato único

### 3. Não Volátil

Uma vez que os dados entram no DW, eles **não são alterados**:

- Não há \`UPDATE\` para corrigir registros antigos
- Novos dados são **adicionados**, não substituídos
- Isso garante consistência para análises históricas

### 4. Variante no Tempo

O DW guarda a **história** dos dados:

- Todo registro tem uma referência temporal (data/timestamp)
- Permite comparar "como era" vs "como é"
- Análises de tendência, sazonalidade, crescimento

---

## Arquitetura de um Data Warehouse

A arquitetura de um DW define como os dados fluem das fontes até os usuários finais.

### Arquitetura em Camadas

\`\`\`diagram
{
  "title": "Arquitetura em Camadas do Data Warehouse",
  "width": 840,
  "height": 420,
  "elements": [
    { "type": "text", "x": 420, "y": 25, "content": "Fluxo de Dados no Data Warehouse", "fontSize": 16, "color": "#1c1917", "fontWeight": "bold" },

    { "type": "rect", "x": 40, "y": 60, "width": 140, "height": 320, "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 12 },
    { "type": "text", "x": 110, "y": 90, "content": "FONTES", "fontSize": 13, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "rect", "x": 55, "y": 110, "width": 110, "height": 50, "fill": "#fff", "stroke": "#fca5a5", "rounded": 6 },
    { "type": "text", "x": 110, "y": 140, "content": "ERP", "fontSize": 11, "color": "#57534e" },
    { "type": "rect", "x": 55, "y": 170, "width": 110, "height": 50, "fill": "#fff", "stroke": "#fca5a5", "rounded": 6 },
    { "type": "text", "x": 110, "y": 200, "content": "CRM", "fontSize": 11, "color": "#57534e" },
    { "type": "rect", "x": 55, "y": 230, "width": 110, "height": 50, "fill": "#fff", "stroke": "#fca5a5", "rounded": 6 },
    { "type": "text", "x": 110, "y": 260, "content": "Planilhas", "fontSize": 11, "color": "#57534e" },
    { "type": "rect", "x": 55, "y": 290, "width": 110, "height": 50, "fill": "#fff", "stroke": "#fca5a5", "rounded": 6 },
    { "type": "text", "x": 110, "y": 320, "content": "APIs", "fontSize": 11, "color": "#57534e" },

    { "type": "arrow", "from": { "x": 185, "y": 220 }, "to": { "x": 225, "y": 220 }, "stroke": "#78716c", "strokeWidth": 2 },

    { "type": "rect", "x": 230, "y": 60, "width": 140, "height": 320, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12 },
    { "type": "text", "x": 300, "y": 90, "content": "STAGING", "fontSize": 13, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 300, "y": 120, "content": "Área de", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 300, "y": 140, "content": "Preparação", "fontSize": 11, "color": "#57534e" },
    { "type": "rect", "x": 245, "y": 160, "width": 110, "height": 80, "fill": "#fff", "stroke": "#fcd34d", "rounded": 6 },
    { "type": "text", "x": 300, "y": 190, "content": "ETL/ELT", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 300, "y": 215, "content": "Extract", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 300, "y": 230, "content": "Transform", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 300, "y": 275, "content": "Limpeza", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 300, "y": 295, "content": "Validação", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 300, "y": 315, "content": "Padronização", "fontSize": 11, "color": "#57534e" },

    { "type": "arrow", "from": { "x": 375, "y": 220 }, "to": { "x": 415, "y": 220 }, "stroke": "#78716c", "strokeWidth": 2 },

    { "type": "rect", "x": 420, "y": 60, "width": 180, "height": 320, "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 12 },
    { "type": "text", "x": 510, "y": 90, "content": "DATA WAREHOUSE", "fontSize": 13, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "rect", "x": 435, "y": 115, "width": 150, "height": 70, "fill": "#eff6ff", "stroke": "#93c5fd", "rounded": 6 },
    { "type": "text", "x": 510, "y": 140, "content": "Tabelas Fato", "fontSize": 11, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 510, "y": 160, "content": "Métricas, medidas", "fontSize": 10, "color": "#78716c" },
    { "type": "rect", "x": 435, "y": 195, "width": 150, "height": 70, "fill": "#eff6ff", "stroke": "#93c5fd", "rounded": 6 },
    { "type": "text", "x": 510, "y": 220, "content": "Tabelas Dimensão", "fontSize": 11, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 510, "y": 240, "content": "Contexto, atributos", "fontSize": 10, "color": "#78716c" },
    { "type": "rect", "x": 435, "y": 275, "width": 150, "height": 50, "fill": "#eff6ff", "stroke": "#93c5fd", "rounded": 6 },
    { "type": "text", "x": 510, "y": 300, "content": "Data Marts", "fontSize": 11, "color": "#1e40af" },
    { "type": "text", "x": 510, "y": 350, "content": "Modelo Dimensional", "fontSize": 10, "color": "#3b82f6", "fontStyle": "italic" },

    { "type": "arrow", "from": { "x": 605, "y": 220 }, "to": { "x": 645, "y": 220 }, "stroke": "#78716c", "strokeWidth": 2 },

    { "type": "rect", "x": 650, "y": 60, "width": 150, "height": 320, "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 725, "y": 90, "content": "CONSUMO", "fontSize": 13, "color": "#065f46", "fontWeight": "bold" },
    { "type": "rect", "x": 665, "y": 115, "width": 120, "height": 50, "fill": "#fff", "stroke": "#86efac", "rounded": 6 },
    { "type": "text", "x": 725, "y": 145, "content": "BI / Dashboards", "fontSize": 11, "color": "#57534e" },
    { "type": "rect", "x": 665, "y": 175, "width": 120, "height": 50, "fill": "#fff", "stroke": "#86efac", "rounded": 6 },
    { "type": "text", "x": 725, "y": 205, "content": "Relatórios", "fontSize": 11, "color": "#57534e" },
    { "type": "rect", "x": 665, "y": 235, "width": 120, "height": 50, "fill": "#fff", "stroke": "#86efac", "rounded": 6 },
    { "type": "text", "x": 725, "y": 265, "content": "Data Science", "fontSize": 11, "color": "#57534e" },
    { "type": "rect", "x": 665, "y": 295, "width": 120, "height": 50, "fill": "#fff", "stroke": "#86efac", "rounded": 6 },
    { "type": "text", "x": 725, "y": 325, "content": "Ad-hoc Queries", "fontSize": 11, "color": "#57534e" }
  ]
}
\`\`\`

### Descrição das Camadas

| Camada | Função | Características |
|--------|--------|-----------------|
| **Fontes** | Origem dos dados | Sistemas operacionais, APIs, arquivos |
| **Staging** | Área de preparação | Temporária, dados brutos em processamento |
| **Data Warehouse** | Armazenamento central | Modelo dimensional, dados históricos |
| **Consumo** | Acesso pelos usuários | BI, relatórios, análises |

---

## Camada de Staging (Área de Preparação)

A **Staging Area** é uma zona intermediária onde os dados são processados antes de entrar no DW:

\`\`\`diagram
{
  "title": "O que acontece na Staging Area",
  "width": 840,
  "height": 220,
  "elements": [
    { "type": "rect", "x": 40, "y": 40, "width": 180, "height": 140, "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 10 },
    { "type": "text", "x": 130, "y": 70, "content": "Extração", "fontSize": 14, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "text", "x": 130, "y": 100, "content": "Cópia dos dados", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 130, "y": 120, "content": "das fontes", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 130, "y": 150, "content": "Full ou Incremental", "fontSize": 10, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 230, "y": 110 }, "to": { "x": 270, "y": 110 }, "stroke": "#78716c", "strokeWidth": 2 },

    { "type": "rect", "x": 280, "y": 40, "width": 180, "height": 140, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 370, "y": 70, "content": "Transformação", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 370, "y": 100, "content": "Limpeza, conversão", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 370, "y": 120, "content": "padronização", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 370, "y": 150, "content": "Regras de negócio", "fontSize": 10, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 470, "y": 110 }, "to": { "x": 510, "y": 110 }, "stroke": "#78716c", "strokeWidth": 2 },

    { "type": "rect", "x": 520, "y": 40, "width": 180, "height": 140, "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 10 },
    { "type": "text", "x": 610, "y": 70, "content": "Carga", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 610, "y": 100, "content": "Inserção no DW", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 120, "content": "em formato final", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 150, "content": "Modelo dimensional", "fontSize": 10, "color": "#78716c" },

    { "type": "arrow", "from": { "x": 710, "y": 110 }, "to": { "x": 750, "y": 110 }, "stroke": "#78716c", "strokeWidth": 2 },

    { "type": "ellipse", "cx": 780, "cy": 110, "rx": 30, "ry": 30, "fill": "#d1fae5", "stroke": "#10b981" },
    { "type": "text", "x": 780, "y": 115, "content": "DW", "fontSize": 12, "color": "#065f46", "fontWeight": "bold" }
  ]
}
\`\`\`

**Por que usar Staging?**
- Não impacta os sistemas de origem durante o processamento
- Permite validação e correção antes da carga final
- Facilita reprocessamento em caso de erros
- Isola a complexidade do ETL

---

## Data Marts

Um **Data Mart** é um subconjunto do Data Warehouse focado em uma **área específica** do negócio:

\`\`\`diagram
{
  "title": "Data Warehouse vs Data Marts",
  "width": 840,
  "height": 280,
  "elements": [
    { "type": "rect", "x": 250, "y": 40, "width": 340, "height": 100, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 3, "rounded": 12 },
    { "type": "text", "x": 420, "y": 80, "content": "DATA WAREHOUSE", "fontSize": 16, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 110, "content": "Repositório central integrado", "fontSize": 12, "color": "#57534e" },

    { "type": "line", "from": { "x": 320, "y": 140 }, "to": { "x": 180, "y": 180 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 420, "y": 140 }, "to": { "x": 420, "y": 180 }, "stroke": "#3b82f6", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 520, "y": 140 }, "to": { "x": 660, "y": 180 }, "stroke": "#3b82f6", "strokeWidth": 2 },

    { "type": "rect", "x": 60, "y": 185, "width": 180, "height": 80, "fill": "#d1fae5", "stroke": "#10b981", "rounded": 10 },
    { "type": "text", "x": 150, "y": 215, "content": "DM Vendas", "fontSize": 13, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 150, "y": 240, "content": "Equipe comercial", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 300, "y": 185, "width": 180, "height": 80, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 390, "y": 215, "content": "DM Finanças", "fontSize": 13, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 390, "y": 240, "content": "Controladoria", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 540, "y": 185, "width": 180, "height": 80, "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 10 },
    { "type": "text", "x": 630, "y": 215, "content": "DM Marketing", "fontSize": 13, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 630, "y": 240, "content": "Campanhas", "fontSize": 11, "color": "#78716c" }
  ]
}
\`\`\`

**Vantagens dos Data Marts:**
- Performance otimizada para consultas específicas
- Dados relevantes para cada departamento
- Menor complexidade para usuários finais
- Pode ter modelagem própria (ex: agregações)

---

## Abordagens de Construção

Existem duas filosofias principais para construir um DW:

### Top-Down (Inmon)

Constrói primeiro o **Data Warehouse central**, depois deriva os Data Marts:

\`\`\`
Fontes → DW Corporativo → Data Marts departamentais
\`\`\`

**Vantagens:** Visão integrada, dados consistentes
**Desvantagens:** Projeto maior, mais tempo para entregar valor

### Bottom-Up (Kimball)

Constrói primeiro os **Data Marts**, que juntos formam o DW:

\`\`\`
Fontes → Data Marts independentes → (formam o) DW
\`\`\`

**Vantagens:** Entrega rápida de valor, iterativo
**Desvantagens:** Risco de inconsistência entre marts

> [!nota] Na prática, muitas organizações usam uma **abordagem híbrida**, combinando elementos de ambas as filosofias.

---

## Metadados: Dados sobre Dados

**Metadados** são informações sobre os dados armazenados no DW:

| Tipo | Exemplos |
|------|----------|
| **Técnicos** | Tipos de dados, tamanho, origem, transformações aplicadas |
| **Negócio** | Definições, regras, responsáveis, significado |
| **Operacionais** | Data de carga, frequência, logs de execução |

Os metadados são essenciais para:
- Documentar o que cada dado significa
- Rastrear a origem dos dados (linhagem)
- Facilitar manutenção e evolução do DW

---

## Recapitulando

| Conceito | Descrição |
|----------|-----------|
| **OLTP vs OLAP** | Operacional (transações) vs Analítico (consultas) |
| **4 Atributos** | Orientado por assunto, Integrado, Não volátil, Variante no tempo |
| **Staging** | Área de preparação para ETL |
| **Data Mart** | Subconjunto do DW para área específica |
| **Metadados** | Informações sobre os dados |

---

## Exercícios de Fixação

1. **Atributos:** Para cada cenário, identifique qual atributo do DW está sendo violado:
   - a) Um DW que só guarda os dados do mês atual
   - b) Um DW onde cada sistema fonte usa um código diferente para "cliente"
   - c) Um DW organizado por sistema (ERP_dados, CRM_dados)

2. **Camadas:** Descreva o caminho que um registro de venda faz desde o sistema de PDV até aparecer em um dashboard de BI.

3. **Data Mart:** Uma empresa tem DW corporativo e quer criar um Data Mart para RH. Que tabelas/assuntos você incluiria?

4. **Comparação:** Compare as abordagens Top-Down e Bottom-Up. Qual seria mais adequada para uma startup vs uma grande corporação?

5. **Metadados:** Por que a linhagem de dados (saber de onde veio cada informação) é importante em um DW?`,headings:[{level:2,text:"O que é um Data Warehouse?",id:"o-que-é-um-data-warehouse"},{level:2,text:"Os 4 Atributos Fundamentais (Bill Inmon)",id:"os-4-atributos-fundamentais-bill-inmon"},{level:3,text:"1. Orientado por Assunto",id:"1-orientado-por-assunto"},{level:3,text:"2. Integrado",id:"2-integrado"},{level:3,text:"3. Não Volátil",id:"3-não-volátil"},{level:3,text:"4. Variante no Tempo",id:"4-variante-no-tempo"},{level:2,text:"Arquitetura de um Data Warehouse",id:"arquitetura-de-um-data-warehouse"},{level:3,text:"Arquitetura em Camadas",id:"arquitetura-em-camadas"},{level:3,text:"Descrição das Camadas",id:"descrição-das-camadas"},{level:2,text:"Camada de Staging (Área de Preparação)",id:"camada-de-staging-área-de-preparação"},{level:2,text:"Data Marts",id:"data-marts"},{level:2,text:"Abordagens de Construção",id:"abordagens-de-construção"},{level:3,text:"Top-Down (Inmon)",id:"top-down-inmon"},{level:3,text:"Bottom-Up (Kimball)",id:"bottom-up-kimball"},{level:2,text:"Metadados: Dados sobre Dados",id:"metadados-dados-sobre-dados"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"data-warehouse/modelagem-dimensional":{title:"Modelagem Dimensional",description:"A arte de organizar dados para análise — fatos, dimensões, esquemas estrela e floco de neve, e as técnicas que tornam o DW eficiente.",duration:"1 aula",order:999,category:"data-warehouse",content:`# Modelagem Dimensional

Se a arquitetura define **onde** os dados ficam, a modelagem dimensional define **como** eles são organizados. É a técnica que transforma dados normalizados em estruturas otimizadas para análise.

---

## Por que Modelagem Dimensional?

Bancos de dados operacionais usam **normalização** (3FN) para evitar redundância e garantir integridade. Mas isso gera muitas tabelas e JOINs complexos.

Para análise, precisamos de algo diferente:

\`\`\`diagram
{
  "title": "Normalizado vs Dimensional",
  "width": 840,
  "height": 260,
  "elements": [
    { "type": "rect", "x": 40, "y": 40, "width": 360, "height": 180, "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 14 },
    { "type": "text", "x": 220, "y": 75, "content": "Modelo Normalizado (3FN)", "fontSize": 14, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "text", "x": 220, "y": 105, "content": "• Muitas tabelas pequenas", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 130, "content": "• JOINs complexos (10+ tabelas)", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 155, "content": "• Otimizado para escrita", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 220, "y": 180, "content": "• Difícil para usuários de negócio", "fontSize": 12, "color": "#57534e" },

    { "type": "rect", "x": 440, "y": 40, "width": 360, "height": 180, "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 620, "y": 75, "content": "Modelo Dimensional", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 620, "y": 105, "content": "• Poucas tabelas maiores", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 130, "content": "• JOINs simples (fato + dimensões)", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 155, "content": "• Otimizado para leitura", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 620, "y": 180, "content": "• Intuitivo para análise", "fontSize": 12, "color": "#57534e" }
  ]
}
\`\`\`

---

## Os Dois Pilares: Fatos e Dimensões

A modelagem dimensional se baseia em dois tipos de tabelas:

\`\`\`diagram
{
  "title": "Tabelas Fato vs Tabelas Dimensão",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 40, "y": 40, "width": 380, "height": 240, "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 230, "y": 75, "content": "TABELA FATO", "fontSize": 16, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 230, "y": 105, "content": "O que aconteceu?", "fontSize": 13, "color": "#3b82f6", "fontStyle": "italic" },
    { "type": "text", "x": 230, "y": 140, "content": "• Métricas numéricas (valores)", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 230, "y": 165, "content": "• Quantidade, valor, preço, custo", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 230, "y": 190, "content": "• Chaves estrangeiras para dimensões", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 230, "y": 215, "content": "• Geralmente a maior tabela", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 230, "y": 250, "content": "Ex: fato_vendas, fato_pedidos", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 460, "y": 40, "width": 340, "height": 240, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 630, "y": 75, "content": "TABELA DIMENSÃO", "fontSize": 16, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 630, "y": 105, "content": "Quem, onde, quando, o quê?", "fontSize": 13, "color": "#f59e0b", "fontStyle": "italic" },
    { "type": "text", "x": 630, "y": 140, "content": "• Atributos descritivos", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 630, "y": 165, "content": "• Nome, categoria, região, data", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 630, "y": 190, "content": "• Contexto para os fatos", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 630, "y": 215, "content": "• Base para filtros e agrupamentos", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 630, "y": 250, "content": "Ex: dim_cliente, dim_produto, dim_tempo", "fontSize": 11, "color": "#78716c" }
  ]
}
\`\`\`

### Exemplo Prático

Imagine uma análise: "Total de vendas por região e categoria de produto no último trimestre"

| Elemento da Pergunta | Tipo | Tabela |
|---------------------|------|--------|
| "Total de vendas" | **Fato** (métrica) | fato_vendas.valor_total |
| "por região" | **Dimensão** | dim_loja.regiao |
| "categoria de produto" | **Dimensão** | dim_produto.categoria |
| "último trimestre" | **Dimensão** | dim_tempo.trimestre |

---

## Tipos de Fatos

Nem todos os fatos são iguais. Existem três tipos principais:

### 1. Fatos Aditivos

Podem ser **somados** em qualquer dimensão:

\`\`\`
Exemplo: valor_venda, quantidade_vendida, custo
Soma por tempo: ✓
Soma por loja: ✓
Soma por produto: ✓
\`\`\`

### 2. Fatos Semi-Aditivos

Podem ser somados em **algumas** dimensões:

\`\`\`
Exemplo: saldo_conta, estoque_atual
Soma por tempo: ✗ (não faz sentido somar saldos de dias diferentes)
Soma por filial: ✓ (saldo total de todas as filiais)
\`\`\`

### 3. Fatos Não-Aditivos

**Não podem** ser somados (usar médias, máximos, etc.):

\`\`\`
Exemplo: percentual_margem, temperatura, taxa_conversao
Soma: ✗
Média: ✓
\`\`\`

\`\`\`diagram
{
  "title": "Tipos de Fatos",
  "width": 840,
  "height": 180,
  "elements": [
    { "type": "rect", "x": 40, "y": 40, "width": 240, "height": 110, "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 160, "y": 70, "content": "Aditivo", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 160, "y": 95, "content": "Soma em todas dimensões", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 160, "y": 120, "content": "Ex: valor, quantidade", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 300, "y": 40, "width": 240, "height": 110, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 12 },
    { "type": "text", "x": 420, "y": 70, "content": "Semi-Aditivo", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 95, "content": "Soma em algumas dimensões", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 120, "content": "Ex: saldo, estoque", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 560, "y": 40, "width": 240, "height": 110, "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 12 },
    { "type": "text", "x": 680, "y": 70, "content": "Não-Aditivo", "fontSize": 14, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "text", "x": 680, "y": 95, "content": "Não pode somar", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 680, "y": 120, "content": "Ex: margem %, temperatura", "fontSize": 11, "color": "#78716c" }
  ]
}
\`\`\`

---

## Esquema Estrela (Star Schema)

O **Star Schema** é o modelo dimensional mais comum. A tabela fato fica no centro, cercada pelas dimensões — formando uma "estrela".

\`\`\`diagram
{
  "title": "Star Schema - Vendas",
  "width": 840,
  "height": 450,
  "elements": [
    { "type": "rect", "x": 300, "y": 160, "width": 240, "height": 140, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 3, "rounded": 12 },
    { "type": "text", "x": 420, "y": 190, "content": "FATO_VENDAS", "fontSize": 14, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 420, "y": 215, "content": "sk_tempo (FK)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 233, "content": "sk_produto (FK)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 251, "content": "sk_cliente (FK)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 269, "content": "sk_loja (FK)", "fontSize": 11, "color": "#57534e" },
    { "type": "text", "x": 420, "y": 287, "content": "quantidade, valor, desconto", "fontSize": 10, "color": "#3b82f6" },

    { "type": "rect", "x": 60, "y": 20, "width": 180, "height": 120, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 150, "y": 50, "content": "DIM_TEMPO", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 150, "y": 75, "content": "sk_tempo (PK)", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 150, "y": 93, "content": "data, dia, mês, ano", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 150, "y": 111, "content": "trimestre, semestre", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 600, "y": 20, "width": 180, "height": 120, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 690, "y": 50, "content": "DIM_PRODUTO", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 690, "y": 75, "content": "sk_produto (PK)", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 690, "y": 93, "content": "nome, categoria", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 690, "y": 111, "content": "marca, fornecedor", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 60, "y": 320, "width": 180, "height": 110, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 150, "y": 350, "content": "DIM_CLIENTE", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 150, "y": 375, "content": "sk_cliente (PK)", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 150, "y": 393, "content": "nome, cidade, estado", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 150, "y": 411, "content": "segmento", "fontSize": 10, "color": "#78716c" },

    { "type": "rect", "x": 600, "y": 320, "width": 180, "height": 110, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 690, "y": 350, "content": "DIM_LOJA", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 690, "y": 375, "content": "sk_loja (PK)", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 690, "y": 393, "content": "nome, cidade, região", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 690, "y": 411, "content": "gerente, tipo", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 240, "y": 100 }, "to": { "x": 300, "y": 190 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 600, "y": 100 }, "to": { "x": 540, "y": 190 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 240, "y": 360 }, "to": { "x": 300, "y": 270 }, "stroke": "#f59e0b", "strokeWidth": 2 },
    { "type": "line", "from": { "x": 600, "y": 360 }, "to": { "x": 540, "y": 270 }, "stroke": "#f59e0b", "strokeWidth": 2 }
  ]
}
\`\`\`

**Características do Star Schema:**
- Dimensões **desnormalizadas** (todos os atributos em uma tabela)
- JOINs simples (sempre fato → dimensão)
- Excelente performance para consultas analíticas
- Fácil de entender para usuários de negócio

---

## Esquema Floco de Neve (Snowflake Schema)

O **Snowflake Schema** normaliza as dimensões, criando sub-dimensões:

\`\`\`diagram
{
  "title": "Snowflake Schema - Dimensão Produto normalizada",
  "width": 840,
  "height": 320,
  "elements": [
    { "type": "rect", "x": 40, "y": 110, "width": 180, "height": 100, "fill": "#dbeafe", "stroke": "#3b82f6", "strokeWidth": 3, "rounded": 10 },
    { "type": "text", "x": 130, "y": 140, "content": "FATO_VENDAS", "fontSize": 12, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 130, "y": 165, "content": "sk_produto (FK)", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 130, "y": 185, "content": "métricas...", "fontSize": 10, "color": "#78716c" },

    { "type": "line", "from": { "x": 220, "y": 160 }, "to": { "x": 280, "y": 160 }, "stroke": "#f59e0b", "strokeWidth": 2 },

    { "type": "rect", "x": 280, "y": 100, "width": 160, "height": 120, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 360, "y": 130, "content": "DIM_PRODUTO", "fontSize": 12, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 360, "y": 155, "content": "sk_produto (PK)", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 360, "y": 173, "content": "nome", "fontSize": 10, "color": "#78716c" },
    { "type": "text", "x": 360, "y": 191, "content": "sk_categoria (FK)", "fontSize": 10, "color": "#57534e" },
    { "type": "text", "x": 360, "y": 209, "content": "sk_marca (FK)", "fontSize": 10, "color": "#57534e" },

    { "type": "line", "from": { "x": 440, "y": 130 }, "to": { "x": 520, "y": 80 }, "stroke": "#a8a29e", "strokeWidth": 1.5 },
    { "type": "line", "from": { "x": 440, "y": 190 }, "to": { "x": 520, "y": 240 }, "stroke": "#a8a29e", "strokeWidth": 1.5 },

    { "type": "rect", "x": 520, "y": 30, "width": 140, "height": 90, "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 8 },
    { "type": "text", "x": 590, "y": 55, "content": "DIM_CATEGORIA", "fontSize": 11, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 590, "y": 78, "content": "sk_categoria (PK)", "fontSize": 9, "color": "#57534e" },
    { "type": "text", "x": 590, "y": 96, "content": "nome, departamento", "fontSize": 9, "color": "#78716c" },

    { "type": "rect", "x": 520, "y": 200, "width": 140, "height": 90, "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 8 },
    { "type": "text", "x": 590, "y": 225, "content": "DIM_MARCA", "fontSize": 11, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 590, "y": 248, "content": "sk_marca (PK)", "fontSize": 9, "color": "#57534e" },
    { "type": "text", "x": 590, "y": 266, "content": "nome, país", "fontSize": 9, "color": "#78716c" },

    { "type": "line", "from": { "x": 660, "y": 75 }, "to": { "x": 720, "y": 75 }, "stroke": "#a8a29e", "strokeWidth": 1.5 },

    { "type": "rect", "x": 720, "y": 40, "width": 100, "height": 70, "fill": "#d1fae5", "stroke": "#10b981", "rounded": 8 },
    { "type": "text", "x": 770, "y": 65, "content": "DIM_DEPTO", "fontSize": 10, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 770, "y": 88, "content": "sk, nome", "fontSize": 9, "color": "#78716c" }
  ]
}
\`\`\`

**Star vs Snowflake:**

| Aspecto | Star Schema | Snowflake Schema |
|---------|-------------|------------------|
| Dimensões | Desnormalizadas | Normalizadas |
| JOINs | Menos (mais simples) | Mais (mais complexos) |
| Espaço | Mais redundância | Menos redundância |
| Performance | Geralmente melhor | Pode ser pior |
| Manutenção | Mais fácil | Mais complexa |

> [!dica] Na prática, o **Star Schema** é preferido na maioria dos casos. O Snowflake é usado quando há dimensões muito grandes com atributos que mudam frequentemente.

---

## Dimensões Especiais

### Dimensão Tempo

Praticamente **todo** DW tem uma dimensão tempo. Ela é especial porque:
- É pré-populada (todos os dias dos próximos N anos)
- Contém atributos derivados (dia da semana, feriado, etc.)

\`\`\`sql
-- Exemplo de DIM_TEMPO
sk_tempo      -- Surrogate Key (YYYYMMDD)
data          -- 2024-03-15
dia           -- 15
mes           -- 3
ano           -- 2024
trimestre     -- 1
semestre      -- 1
dia_semana    -- Sexta-feira
eh_feriado    -- N
eh_fim_semana -- N
\`\`\`

### Dimensão Degenerada

Uma dimensão **degenerada** não tem tabela própria — fica na tabela fato.

\`\`\`
Exemplo: número do pedido, número da nota fiscal

Não faz sentido criar uma tabela DIM_PEDIDO só com sk e número.
O número fica diretamente na FATO_VENDAS.
\`\`\`

### Dimensão Junk (Lixo)

Agrupa **flags e indicadores** pequenos que não merecem dimensões próprias:

\`\`\`
Em vez de:
- dim_tipo_pagamento (2 valores)
- dim_canal_venda (3 valores)
- dim_promocao (S/N)

Criar:
- dim_junk com todas as combinações possíveis
\`\`\`

---

## Slowly Changing Dimensions (SCD)

O que acontece quando um atributo de dimensão **muda**? Por exemplo, um cliente muda de cidade.

### Tipo 0: Manter Original
Não atualiza. Mantém o valor original para sempre.

### Tipo 1: Sobrescrever
Atualiza o valor. Perde o histórico.

\`\`\`
Antes: João, São Paulo
Depois: João, Rio de Janeiro
(perdeu-se a informação que ele morou em SP)
\`\`\`

### Tipo 2: Criar Nova Linha
Adiciona nova linha com nova surrogate key. Mantém histórico completo.

\`\`\`
sk=1: João, São Paulo, 2020-01-01, 2024-02-28 (inativo)
sk=2: João, Rio de Janeiro, 2024-03-01, NULL (ativo)
\`\`\`

### Tipo 3: Adicionar Coluna
Guarda valor atual e anterior em colunas separadas.

\`\`\`
João, cidade_atual=RJ, cidade_anterior=SP
\`\`\`

\`\`\`diagram
{
  "title": "Comparação dos tipos de SCD",
  "width": 840,
  "height": 200,
  "elements": [
    { "type": "rect", "x": 40, "y": 40, "width": 180, "height": 130, "fill": "#fee2e2", "stroke": "#ef4444", "rounded": 10 },
    { "type": "text", "x": 130, "y": 70, "content": "Tipo 1", "fontSize": 14, "color": "#b91c1c", "fontWeight": "bold" },
    { "type": "text", "x": 130, "y": 95, "content": "Sobrescreve", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 130, "y": 120, "content": "Sem histórico", "fontSize": 11, "color": "#ef4444" },
    { "type": "text", "x": 130, "y": 145, "content": "Simples", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 250, "y": 40, "width": 180, "height": 130, "fill": "#d1fae5", "stroke": "#10b981", "rounded": 10 },
    { "type": "text", "x": 340, "y": 70, "content": "Tipo 2", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 340, "y": 95, "content": "Nova linha", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 340, "y": 120, "content": "Histórico completo", "fontSize": 11, "color": "#10b981" },
    { "type": "text", "x": 340, "y": 145, "content": "Mais usado", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 460, "y": 40, "width": 180, "height": 130, "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 10 },
    { "type": "text", "x": 550, "y": 70, "content": "Tipo 3", "fontSize": 14, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 550, "y": 95, "content": "Coluna extra", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 550, "y": 120, "content": "Histórico limitado", "fontSize": 11, "color": "#f59e0b" },
    { "type": "text", "x": 550, "y": 145, "content": "Apenas 1 mudança", "fontSize": 11, "color": "#78716c" },

    { "type": "rect", "x": 670, "y": 40, "width": 130, "height": 130, "fill": "#e5e5e5", "stroke": "#a8a29e", "rounded": 10 },
    { "type": "text", "x": 735, "y": 70, "content": "Tipo 0", "fontSize": 14, "color": "#57534e", "fontWeight": "bold" },
    { "type": "text", "x": 735, "y": 95, "content": "Não muda", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 735, "y": 120, "content": "Valor original", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 735, "y": 145, "content": "fixo", "fontSize": 11, "color": "#78716c" }
  ]
}
\`\`\`

---

## Granularidade

A **granularidade** define o nível de detalhe da tabela fato. É uma das decisões mais importantes!

| Granularidade | Exemplo | Registros | Análise |
|---------------|---------|-----------|---------|
| Alta (detalhe) | Uma linha por item vendido | Muitos | Qualquer agregação |
| Média | Uma linha por venda | Médio | Por venda ou acima |
| Baixa (agregada) | Uma linha por dia/loja | Poucos | Apenas agregado |

> [!atencao] **Regra de ouro:** Comece com a **maior granularidade possível**. É fácil agregar dados detalhados, mas impossível detalhar dados já agregados.

---

## Recapitulando

| Conceito | Descrição |
|----------|-----------|
| **Tabela Fato** | Métricas numéricas (o que aconteceu) |
| **Tabela Dimensão** | Atributos descritivos (contexto) |
| **Star Schema** | Fato central + dimensões desnormalizadas |
| **Snowflake** | Star com dimensões normalizadas |
| **SCD** | Estratégias para mudanças em dimensões |
| **Granularidade** | Nível de detalhe da tabela fato |

---

## Exercícios de Fixação

1. **Classificação:** Para cada item, diga se é Fato ou Dimensão:
   - a) Valor do frete
   - b) Nome do vendedor
   - c) Quantidade em estoque
   - d) Categoria do produto
   - e) Data da venda

2. **Tipos de Fato:** Classifique como Aditivo, Semi-Aditivo ou Não-Aditivo:
   - a) Número de funcionários
   - b) Receita total
   - c) Taxa de conversão (%)
   - d) Saldo da conta

3. **SCD:** Uma empresa quer rastrear o histórico de cargos dos funcionários. Qual tipo de SCD é mais adequado? Por quê?

4. **Modelagem:** Desenhe um Star Schema para um sistema de biblioteca (empréstimos de livros). Identifique fato e dimensões.

5. **Granularidade:** Um e-commerce registra vendas. Qual granularidade você escolheria: por item, por pedido, ou por dia? Justifique.`,headings:[{level:2,text:"Por que Modelagem Dimensional?",id:"por-que-modelagem-dimensional"},{level:2,text:"Os Dois Pilares: Fatos e Dimensões",id:"os-dois-pilares-fatos-e-dimensões"},{level:3,text:"Exemplo Prático",id:"exemplo-prático"},{level:2,text:"Tipos de Fatos",id:"tipos-de-fatos"},{level:3,text:"1. Fatos Aditivos",id:"1-fatos-aditivos"},{level:3,text:"2. Fatos Semi-Aditivos",id:"2-fatos-semi-aditivos"},{level:3,text:"3. Fatos Não-Aditivos",id:"3-fatos-não-aditivos"},{level:2,text:"Esquema Estrela (Star Schema)",id:"esquema-estrela-star-schema"},{level:2,text:"Esquema Floco de Neve (Snowflake Schema)",id:"esquema-floco-de-neve-snowflake-schema"},{level:2,text:"Dimensões Especiais",id:"dimensões-especiais"},{level:3,text:"Dimensão Tempo",id:"dimensão-tempo"},{level:3,text:"Dimensão Degenerada",id:"dimensão-degenerada"},{level:3,text:"Dimensão Junk (Lixo)",id:"dimensão-junk-lixo"},{level:2,text:"Slowly Changing Dimensions (SCD)",id:"slowly-changing-dimensions-scd"},{level:3,text:"Tipo 0: Manter Original",id:"tipo-0-manter-original"},{level:3,text:"Tipo 1: Sobrescrever",id:"tipo-1-sobrescrever"},{level:3,text:"Tipo 2: Criar Nova Linha",id:"tipo-2-criar-nova-linha"},{level:3,text:"Tipo 3: Adicionar Coluna",id:"tipo-3-adicionar-coluna"},{level:2,text:"Granularidade",id:"granularidade"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"introducao-engenharia-dados/introducao-data-warehouse":{title:"Introdução à Data Warehouse",description:"O que é um Data Warehouse, por que ele existe e como ele resolve o problema de analisar grandes volumes de dados.",duration:"1 aula",order:999,category:"introducao-engenharia-dados",content:`# Introdução à Data Warehouse

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

\`\`\`diagram
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
\`\`\`

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

\`\`\`diagram
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
    { "type": "text", "x": 210, "y": 148, "content": "\\"Quero ver tudo sobre vendas, não importa de qual sistema veio.\\"", "fontSize": 10, "color": "#3b82f6", "fontStyle": "italic" },

    { "type": "rect", "x": 425, "y": 20, "width": 370, "height": 145, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 610, "y": 50, "content": "2. Integrado", "fontSize": 15, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 610, "y": 82, "content": "Dados de fontes diferentes são UNIFICADOS.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 102, "content": "Se um sistema usa \\"SP\\" e outro \\"São Paulo\\",", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 122, "content": "no DW tudo vira um padrão só.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 148, "content": "\\"Uma única versão da verdade.\\"", "fontSize": 10, "color": "#10b981", "fontStyle": "italic" },

    { "type": "rect", "x": 25, "y": 195, "width": 370, "height": 145, "label": "", "fill": "#fce7f3", "stroke": "#ec4899", "rounded": 14 },
    { "type": "text", "x": 210, "y": 225, "content": "3. Não volátil", "fontSize": 15, "color": "#9d174d", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 257, "content": "Dados, uma vez armazenados, NÃO SÃO", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 277, "content": "alterados nem apagados. Só entram dados", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 297, "content": "novos — os antigos permanecem intactos.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 323, "content": "\\"O passado nunca muda.\\"", "fontSize": 10, "color": "#ec4899", "fontStyle": "italic" },

    { "type": "rect", "x": 425, "y": 195, "width": 370, "height": 145, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 610, "y": 225, "content": "4. Variante no tempo", "fontSize": 15, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 610, "y": 257, "content": "Cada dado tem uma MARCA DE TEMPO.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 277, "content": "É possível saber como as coisas estavam", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 297, "content": "em qualquer momento do passado.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 323, "content": "\\"Qual era o preço deste produto em março?\\"", "fontSize": 10, "color": "#f59e0b", "fontStyle": "italic" }
  ]
}
\`\`\`

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

\`\`\`diagram
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
    { "type": "text", "x": 395, "y": 175, "content": "\\"SP\\" e \\"São Paulo\\" viram \\"SP\\".", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" },

    { "type": "arrow", "from": { "x": 540, "y": 120 }, "to": { "x": 600, "y": 120 }, "stroke": "#a8a29e", "strokeWidth": 2 },

    { "type": "rect", "x": 600, "y": 50, "width": 185, "height": 140, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 12 },
    { "type": "text", "x": 692, "y": 78, "content": "CARREGAR", "fontSize": 14, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 692, "y": 105, "content": "Colocar os dados já", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 692, "y": 125, "content": "organizados dentro do", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 692, "y": 145, "content": "Data Warehouse.", "fontSize": 12, "color": "#57534e" },
    { "type": "text", "x": 692, "y": 175, "content": "Pronto para consulta!", "fontSize": 11, "color": "#78716c", "fontStyle": "italic" }
  ]
}
\`\`\`

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

\`\`\`diagram
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
\`\`\`

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

5. O que significa a sigla **ETL**? Descreva cada etapa com um exemplo prático.`,headings:[{level:2,text:"O ponto de partida: o banco de dados do dia a dia",id:"o-ponto-de-partida-o-banco-de-dados-do-dia-a-dia"},{level:2,text:"O problema: perguntas que o banco do dia a dia não consegue responder bem",id:"o-problema-perguntas-que-o-banco-do-dia-a-dia-não-consegue-responder-bem"},{level:2,text:"A solução: separar os dois mundos",id:"a-solução-separar-os-dois-mundos"},{level:2,text:"O que é um Data Warehouse?",id:"o-que-é-um-data-warehouse"},{level:3,text:"Orientado a assuntos",id:"orientado-a-assuntos"},{level:3,text:"Integrado",id:"integrado"},{level:3,text:"Não volátil",id:"não-volátil"},{level:3,text:"Variante no tempo",id:"variante-no-tempo"},{level:2,text:"Como os dados chegam no Data Warehouse?",id:"como-os-dados-chegam-no-data-warehouse"},{level:2,text:"Para que serve um Data Warehouse na prática?",id:"para-que-serve-um-data-warehouse-na-prática"},{level:2,text:"Resumo visual: o fluxo completo",id:"resumo-visual-o-fluxo-completo"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]},"introducao-engenharia-dados/visao-geral":{title:"Introdução à Engenharia Inteligente de Dados",description:"O que são dados, por que eles importam e o que faz um engenheiro de dados — explicado do zero.",duration:"1 aula",order:999,category:"introducao-engenharia-dados",content:`# Introdução à Engenharia Inteligente de Dados

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

\`\`\`diagram
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
    { "type": "text", "x": 705, "y": 170, "content": "\\"O produto X vendeu 40%", "fontSize": 11, "color": "#78716c" },
    { "type": "text", "x": 705, "y": 190, "content": "mais na filial Centro.\\"", "fontSize": 11, "color": "#78716c" }
  ]
}
\`\`\`

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

\`\`\`diagram
{
  "title": "Quem faz o quê?",
  "width": 820,
  "height": 300,
  "elements": [
    { "type": "rect", "x": 25, "y": 20, "width": 370, "height": 120, "label": "", "fill": "#ede9fe", "stroke": "#8b5cf6", "rounded": 14 },
    { "type": "text", "x": 210, "y": 50, "content": "Engenheiro de Dados", "fontSize": 15, "color": "#5b21b6", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 78, "content": "Constrói a ESTRADA.", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 100, "content": "Coleta, limpa, organiza e entrega os dados.", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 210, "y": 125, "content": "\\"Como levar esses dados de A até B?\\"", "fontSize": 11, "color": "#8b5cf6", "fontStyle": "italic" },

    { "type": "rect", "x": 425, "y": 20, "width": 370, "height": 120, "label": "", "fill": "#dbeafe", "stroke": "#3b82f6", "rounded": 14 },
    { "type": "text", "x": 610, "y": 50, "content": "Analista de Dados", "fontSize": 15, "color": "#1e40af", "fontWeight": "bold" },
    { "type": "text", "x": 610, "y": 78, "content": "Dirige o CARRO na estrada.", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 100, "content": "Consulta, analisa e cria relatórios.", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 610, "y": 125, "content": "\\"O que esses dados nos dizem?\\"", "fontSize": 11, "color": "#3b82f6", "fontStyle": "italic" },

    { "type": "rect", "x": 25, "y": 170, "width": 370, "height": 120, "label": "", "fill": "#d1fae5", "stroke": "#10b981", "rounded": 14 },
    { "type": "text", "x": 210, "y": 200, "content": "Cientista de Dados", "fontSize": 15, "color": "#065f46", "fontWeight": "bold" },
    { "type": "text", "x": 210, "y": 228, "content": "Constrói um GPS preditivo.", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 210, "y": 250, "content": "Cria modelos que aprendem e preveem.", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 210, "y": 275, "content": "\\"O que vai acontecer no futuro?\\"", "fontSize": 11, "color": "#10b981", "fontStyle": "italic" },

    { "type": "rect", "x": 425, "y": 170, "width": 370, "height": 120, "label": "", "fill": "#fef3c7", "stroke": "#f59e0b", "rounded": 14 },
    { "type": "text", "x": 610, "y": 200, "content": "Analista de BI", "fontSize": 15, "color": "#92400e", "fontWeight": "bold" },
    { "type": "text", "x": 610, "y": 228, "content": "Constrói o PAINEL do carro.", "fontSize": 13, "color": "#57534e" },
    { "type": "text", "x": 610, "y": 250, "content": "Cria dashboards e indicadores visuais.", "fontSize": 12, "color": "#78716c" },
    { "type": "text", "x": 610, "y": 275, "content": "\\"Como mostrar isso de forma clara?\\"", "fontSize": 11, "color": "#f59e0b", "fontStyle": "italic" }
  ]
}
\`\`\`

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

5. Por que dizemos que dados brutos, sozinhos, **não têm valor**? O que precisa acontecer para que eles se tornem úteis?`,headings:[{level:2,text:"Começando do começo: o que são dados?",id:"começando-do-começo-o-que-são-dados"},{level:2,text:"Dados brutos não servem para nada",id:"dados-brutos-não-servem-para-nada"},{level:2,text:"O que é Engenharia de Dados, afinal?",id:"o-que-é-engenharia-de-dados-afinal"},{level:2,text:"Quem faz o quê no mundo dos dados?",id:"quem-faz-o-quê-no-mundo-dos-dados"},{level:2,text:"Um exemplo do mundo real",id:"um-exemplo-do-mundo-real"},{level:2,text:"O que veremos nesta disciplina",id:"o-que-veremos-nesta-disciplina"},{level:2,text:"Recapitulando",id:"recapitulando"},{level:2,text:"Exercícios de Fixação",id:"exercícios-de-fixação"}]}}},a=(e,t)=>n[e]?.[t]?.content||null,r=(e,t)=>{const o=n[e]?.[t];return o?{title:o.title,description:o.description,duration:o.duration,headings:o.headings||[]}:null},i=(e,t)=>n[e]?.[t]?.headings||[];export{n as generatedContent,a as getContent,i as getHeadings,r as getModuleInfo};
