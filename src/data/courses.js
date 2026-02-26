import { Cpu, CircuitBoard, BrainCircuit } from "lucide-react";

export const courses = [
  {
    id: "arquitetura-organizacao",
    title: "Arquitetura e Organização de Computadores",
    shortTitle: "Arq. e Org. de Comp.",
    icon: Cpu,
    color: "blue",
    colorClasses: {
      text: "text-blue-600",
      bg: "bg-blue-600",
      bgLight: "bg-blue-50",
      border: "border-blue-600",
      borderLight: "border-blue-200",
      hover: "hover:bg-blue-700",
      ring: "ring-blue-500",
      gradient: "from-blue-600 to-blue-700",
    },
    description:
      "Estudo fundamental do funcionamento interno dos computadores — o que é arquitetura, o que é organização, como as máquinas evoluíram e quais peças formam o computador que você usa todos os dias.",
    objectives: [
      "Distinguir Arquitetura de Organização de computadores",
      "Compreender a evolução histórica das máquinas de computação",
      "Identificar os componentes fundamentais de um computador",
      "Entender como hardware e software se relacionam",
    ],
    modules: [
      {
        id: 1,
        slug: "introducao-aoc",
        title: "Introdução à Arquitetura e Organização de Computadores",
        description:
          "O que é Arquitetura? O que é Organização? Como os computadores evoluíram e quais são suas peças fundamentais.",
        duration: "3 aulas",
        status: "available",
        submodules: [
          {
            id: 1,
            slug: "introducao-aoc/arquitetura-vs-organizacao",
            title: "Arquitetura vs Organização",
          },
          {
            id: 2,
            slug: "introducao-aoc/evolucao-do-computador",
            title: "A Evolução do Computador",
          },
          {
            id: 3,
            slug: "introducao-aoc/arquitetura-von-neumann",
            title: "A Arquitetura de Von Neumann",
          },
          {
            id: 4,
            slug: "introducao-aoc/componentes-fundamentais",
            title: "As Peças do Computador",
          },
        ],
      },
      {
        id: 2,
        slug: "arquitetura-von-neumann",
        title: "Arquitetura de Von Neumann",
        description:
          "Um mergulho profundo no modelo que define todos os computadores modernos — do problema que o motivou ao ciclo de instrução que roda bilhões de vezes por segundo.",
        duration: "4 aulas",
        status: "available",
        submodules: [
          {
            id: 1,
            slug: "arquitetura-von-neumann/o-problema-do-eniac",
            title: "O Problema do ENIAC",
          },
          {
            id: 2,
            slug: "arquitetura-von-neumann/a-grande-ideia",
            title: "A Grande Ideia: Programa Armazenado",
          },
          {
            id: 3,
            slug: "arquitetura-von-neumann/anatomia-do-modelo",
            title: "Anatomia do Modelo",
          },
          {
            id: 4,
            slug: "arquitetura-von-neumann/ciclo-de-instrucao",
            title: "O Ciclo de Instrução",
          },
          {
            id: 5,
            slug: "arquitetura-von-neumann/limitacoes-e-evolucoes",
            title: "Limitações e Evoluções",
          },
        ],
      },
      {
        id: 3,
        slug: "componentes-do-computador",
        title: "Componentes do Computador",
        description:
          "Conceituação e funcionamento dos componentes básicos — CPU, memória, armazenamento, dispositivos de E/S e barramentos.",
        duration: "1 aula",
        status: "available",
        submodules: [
          {
            id: 1,
            slug: "componentes-do-computador/introducao",
            title: "O Computador por Dentro",
          },
        ],
      },
    ],
  },
  {
    id: "circuitos-digitais",
    title: "Circuitos Digitais",
    shortTitle: "Circuitos Digitais",
    icon: CircuitBoard,
    color: "emerald",
    colorClasses: {
      text: "text-emerald-600",
      bg: "bg-emerald-600",
      bgLight: "bg-emerald-50",
      border: "border-emerald-600",
      borderLight: "border-emerald-200",
      hover: "hover:bg-emerald-700",
      ring: "ring-emerald-500",
      gradient: "from-emerald-600 to-emerald-700",
    },
    description:
      "Fundamentos de lógica booleana, portas lógicas, circuitos combinacionais e sequenciais, aritmética digital e projetos com Arduino.",
    objectives: [
      "Compreender os conceitos fundamentais de sistemas e circuitos digitais",
      "Compreender a representação de circuitos lógicos e operações de aritmética digital",
      "Compreender os fundamentos de programação com Arduino",
      "Projetar e executar projetos de eletrônica com Arduino",
    ],
    modules: [
      {
        id: 1,
        slug: "fundamentos-digitais",
        title: "Fundamentos de Eletrônica Digital",
        description:
          "Do mundo analógico ao digital — sistemas de numeração, álgebra booleana e as bases da lógica digital.",
        duration: "2 aulas",
        status: "available",
        submodules: [
          {
            id: 1,
            slug: "fundamentos-digitais/analogico-vs-digital",
            title: "Analógico vs Digital",
          },
          {
            id: 2,
            slug: "fundamentos-digitais/sistemas-de-numeracao",
            title: "Sistemas de Numeração",
          },
          {
            id: 3,
            slug: "fundamentos-digitais/algebra-booleana",
            title: "Álgebra Booleana",
          },
        ],
      },
      {
        id: 2,
        slug: "portas-logicas",
        title: "Portas Lógicas e Circuitos",
        description:
          "Das operações booleanas aos circuitos físicos — AND, OR, NOT, NAND, NOR, XOR e como combiná-los.",
        duration: "4 aulas",
        status: "available",
        submodules: [
          {
            id: 1,
            slug: "portas-logicas/da-teoria-ao-circuito",
            title: "Da Teoria ao Circuito",
          },
          {
            id: 2,
            slug: "portas-logicas/portas-basicas",
            title: "Portas Básicas: AND, OR, NOT",
          },
          {
            id: 3,
            slug: "portas-logicas/portas-compostas",
            title: "Portas Compostas: NAND, NOR, XOR, XNOR",
          },
          {
            id: 4,
            slug: "portas-logicas/circuitos-combinacionais",
            title: "Montando Circuitos Combinacionais",
          },
          {
            id: 5,
            slug: "portas-logicas/projeto-pratico",
            title: "Projeto Prático: Somador de 4 Bits",
          },
        ],
      },
      {
        id: 3,
        slug: "contadores-registradores",
        title: "Contadores e Registradores",
        description:
          "Circuitos que lembram: flip-flops, registradores e contadores — a base da memória digital.",
        duration: "4 aulas",
        status: "available",
        submodules: [
          {
            id: 1,
            slug: "contadores-registradores/circuitos-com-memoria",
            title: "Circuitos com Memória",
          },
          {
            id: 2,
            slug: "contadores-registradores/flip-flops",
            title: "Flip-Flops: A Unidade de Memória",
          },
          {
            id: 3,
            slug: "contadores-registradores/registradores",
            title: "Registradores",
          },
          {
            id: 4,
            slug: "contadores-registradores/contadores",
            title: "Contadores",
          },
          {
            id: 5,
            slug: "contadores-registradores/maquinas-de-estados",
            title: "Máquinas de Estados Finitos",
          },
          {
            id: 6,
            slug: "contadores-registradores/projeto-arduino",
            title: "Projeto: Sistema de Temporização com Arduino",
          },
        ],
      },
      {
        id: 4,
        slug: "circuitos-combinacionais",
        title: "Circuitos Combinacionais",
        description: "Multiplexadores, decodificadores e somadores",
        duration: "3 aulas",
        status: "coming-soon",
      },
    ],
  },
  {
    id: "engenharia-dados",
    title: "Engenharia Inteligente de Dados",
    shortTitle: "Eng. de Dados",
    icon: BrainCircuit,
    color: "violet",
    colorClasses: {
      text: "text-violet-600",
      bg: "bg-violet-600",
      bgLight: "bg-violet-50",
      border: "border-violet-600",
      borderLight: "border-violet-200",
      hover: "hover:bg-violet-700",
      ring: "ring-violet-500",
      gradient: "from-violet-600 to-violet-700",
    },
    description:
      "Conceitos de Data Warehouse, modelagem dimensional, processos de ETL/ELT, Data Lakes e técnicas inteligentes para transformação, integração e análise de dados em larga escala.",
    objectives: [
      "Compreender os fundamentos da Engenharia de Dados e seu papel nas organizações",
      "Entender os conceitos, características e aplicações de Data Warehouses",
      "Aplicar técnicas de ETL/ELT para integração de dados",
      "Diferenciar arquiteturas de dados modernas (Data Lake, Lakehouse, Data Mesh)",
    ],
    modules: [
      {
        id: 1,
        slug: "introducao-engenharia-dados",
        title: "Introdução à Engenharia de Dados",
        description:
          "O que é Engenharia de Dados, qual o papel do engenheiro de dados e uma introdução ao universo de Data Warehouses.",
        duration: "2 aulas",
        status: "available",
        submodules: [
          {
            id: 1,
            slug: "introducao-engenharia-dados/visao-geral",
            title: "Introdução à Engenharia Inteligente de Dados",
          },
          {
            id: 2,
            slug: "introducao-engenharia-dados/introducao-data-warehouse",
            title: "Introdução à Data Warehouse",
          },
        ],
      },
      {
        id: 2,
        slug: "data-warehouse",
        title: "Data Warehouse",
        description:
          "Os 4 atributos de Inmon, arquitetura em camadas, modelagem dimensional, fatos, dimensões e esquemas estrela.",
        duration: "2 aulas",
        status: "available",
        submodules: [
          {
            id: 1,
            slug: "data-warehouse/atributos-e-arquitetura",
            title: "Atributos e Arquitetura do Data Warehouse",
          },
          {
            id: 2,
            slug: "data-warehouse/modelagem-dimensional",
            title: "Modelagem Dimensional",
          },
        ],
      },
      {
        id: 3,
        slug: "etl-elt",
        title: "ETL e ELT",
        description: "Processos de extração, transformação e carga de dados",
        duration: "3 aulas",
        status: "coming-soon",
      },
    ],
  },
];

// Helper para encontrar curso por ID
export const getCourseById = (id) => courses.find((c) => c.id === id);

// Helper para encontrar módulo (incluindo submódulos)
export const getModuleBySlug = (courseId, moduleSlug) => {
  const course = getCourseById(courseId);
  if (!course) return null;

  // Primeiro busca nos módulos principais
  const mainModule = course.modules.find((m) => m.slug === moduleSlug);
  if (mainModule) return mainModule;

  // Se não encontrou, busca nos submódulos
  for (const module of course.modules) {
    if (module.submodules) {
      const submodule = module.submodules.find((sm) => sm.slug === moduleSlug);
      if (submodule) {
        return {
          ...submodule,
          parentModule: module,
          duration: module.duration,
          status: module.status,
        };
      }
    }
  }

  return null;
};
