import { Scenario } from '../types';

export const scenarios: Scenario[] = [
  {
    id: 'dilema-prisioneiro',
    difficulty: 'easy',
    concept: 'Dilema do Prisioneiro',
    description: 'Dois suspeitos, Carlos e Ana, são presos e interrogados em salas separadas. Cada um pode confessar ou permanecer em silêncio. Se ambos ficarem em silêncio, pegam 1 ano. Se um confessar e o outro não, o que confessou fica livre e o outro pega 5 anos. Se ambos confessarem, pegam 3 anos cada.',
    context: 'Quem são os JOGADORES neste cenário?',
    options: [
      { id: 'carlos', label: 'Carlos (suspeito)', isPlayer: true },
      { id: 'ana', label: 'Ana (suspeita)', isPlayer: true },
      { id: 'delegado', label: 'O delegado que interroga', isPlayer: false },
      { id: 'juiz', label: 'O juiz que determina a pena', isPlayer: false },
    ],
    correctIds: ['carlos', 'ana'],
    explanation: 'Carlos e Ana são os jogadores porque são eles que tomam as decisões estratégicas: confessar ou ficar em silêncio. O resultado depende diretamente das escolhas que cada um faz.',
    wrongExplanations: {
      delegado: 'O delegado conduz o interrogatório, mas não toma decisões estratégicas que afetam os resultados do jogo entre os suspeitos.',
      juiz: 'O juiz aplica as penas já pré-determinadas pelas regras. Ele não decide entre as opções do jogo — os suspeitos é que decidem.',
    },
    correctExplanations: {
      carlos: 'Correto! Carlos decide se confessa ou fica em silêncio, e seu resultado depende também da decisão de Ana.',
      ana: 'Correto! Ana é uma jogadora porque toma uma decisão racional que afeta tanto ela quanto Carlos.',
    },
  },
  {
    id: 'leilao-simples',
    difficulty: 'easy',
    concept: 'Teoria dos Leilões',
    description: 'Um quadro valioso está sendo leiloado. Maria, João e Roberto fazem lances para adquirir a obra. O leiloeiro anuncia cada lance e quem der o maior valor leva o quadro.',
    context: 'Quem são os JOGADORES neste leilão?',
    options: [
      { id: 'maria', label: 'Maria (participante)', isPlayer: true },
      { id: 'joao', label: 'João (participante)', isPlayer: true },
      { id: 'roberto', label: 'Roberto (participante)', isPlayer: true },
      { id: 'leiloeiro', label: 'O leiloeiro', isPlayer: false },
      { id: 'quadro', label: 'O quadro a ser leiloado', isPlayer: false },
    ],
    correctIds: ['maria', 'joao', 'roberto'],
    explanation: 'Os três participantes são jogadores porque cada um decide quanto ofertar, considerando o que os outros podem dar. O resultado (quem ganha) depende das escolhas estratégicas de cada um.',
    wrongExplanations: {
      leiloeiro: 'O leiloeiro facilita o processo, mas não toma decisões estratégicas. Ele apenas anuncia os lances segundo regras fixas.',
      quadro: 'O quadro é o objeto em disputa — um recurso, não um agente. Objetos não tomam decisões!',
    },
    correctExplanations: {
      maria: 'Certo! Maria escolhe quanto oferecer pensando nos outros participantes.',
      joao: 'Certo! João decide seu lance estrategicamente para vencer sem pagar demais.',
      roberto: 'Certo! Roberto pondera seus recursos e o que imagina que os outros vão oferecer.',
    },
  },
  {
    id: 'guerra-precos',
    difficulty: 'easy',
    concept: 'Concorrência de Preços',
    description: 'Dois supermercados, SuperMais e BomPreço, são vizinhos e vendem os mesmos produtos. Cada semana, cada gerente decide se mantém o preço atual ou faz uma promoção. Se ambos fizerem promoção, os lucros caem. Se apenas um fizer, ele atrai mais clientes.',
    context: 'Quem são os JOGADORES neste cenário de concorrência?',
    options: [
      { id: 'supermais', label: 'Supermercado SuperMais', isPlayer: true },
      { id: 'bompreco', label: 'Supermercado BomPreço', isPlayer: true },
      { id: 'clientes', label: 'Os clientes que compram', isPlayer: false },
      { id: 'fornecedor', label: 'O fornecedor dos produtos', isPlayer: false },
    ],
    correctIds: ['supermais', 'bompreco'],
    explanation: 'Os dois supermercados são jogadores porque tomam decisões estratégicas de precificação, considerando o que o concorrente pode fazer. O lucro de cada um depende das escolhas combinadas.',
    wrongExplanations: {
      clientes: 'Os clientes respondem aos preços, mas não decidem estrategicamente como nos jogadores do jogo. Eles são externos à interação estratégica entre os mercados.',
      fornecedor: 'O fornecedor vende para os supermercados, mas não faz parte deste jogo específico de precificação entre concorrentes.',
    },
    correctExplanations: {
      supermais: 'Correto! O SuperMais decide sua estratégia de preços pensando no que o BomPreço vai fazer.',
      bompreco: 'Correto! O BomPreço também estrategiza, sabendo que sua decisão afeta e é afetada pelo SuperMais.',
    },
  },
  {
    id: 'votacao-comite',
    difficulty: 'medium',
    concept: 'Votação Estratégica',
    description: 'Um comitê com 5 membros deve votar sobre a aprovação de um projeto. Cada membro tem preferências e pode votar sinceramente ou estrategicamente (votar diferente do que prefere para influenciar o resultado final). O presidente do comitê apenas organiza a reunião mas não vota.',
    context: 'Quem são os JOGADORES neste processo de votação?',
    options: [
      { id: 'membros', label: 'Os 5 membros votantes', isPlayer: true },
      { id: 'presidente', label: 'O presidente do comitê (não vota)', isPlayer: false },
      { id: 'projeto', label: 'O projeto em análise', isPlayer: false },
      { id: 'empresa', label: 'A empresa que propôs o projeto', isPlayer: false },
    ],
    correctIds: ['membros'],
    explanation: 'Os 5 membros votantes são os jogadores porque tomam decisões (votos) que afetam o resultado coletivo. Podem votar estrategicamente para maximizar seus interesses, criando interdependência entre suas escolhas.',
    wrongExplanations: {
      presidente: 'O presidente organiza o processo mas não exerce poder de voto, portanto não é um jogador neste jogo de votação.',
      projeto: 'O projeto é o objeto da decisão, não um agente que toma decisões.',
      empresa: 'A empresa pode ter proposto o projeto, mas não participa do jogo de votação do comitê.',
    },
    correctExplanations: {
      membros: 'Perfeito! Cada membro pondera os votos dos outros para decidir sua própria estratégia de votação.',
    },
  },
  {
    id: 'negociacao-salario',
    difficulty: 'medium',
    concept: 'Barganha',
    description: 'Laura quer um aumento salarial. Ela negocia com seu gerente direto, Paulo. O RH fixou uma faixa salarial permitida. Paulo pode aprovar até 15% de aumento sem precisar de aprovação superior. Acima disso, precisa de autorização do diretor, que está fora do país.',
    context: 'Quem são os JOGADORES nesta negociação?',
    options: [
      { id: 'laura', label: 'Laura (funcionária)', isPlayer: true },
      { id: 'paulo', label: 'Paulo (gerente)', isPlayer: true },
      { id: 'rh', label: 'O departamento de RH', isPlayer: false },
      { id: 'diretor', label: 'O diretor (ausente)', isPlayer: false },
    ],
    correctIds: ['laura', 'paulo'],
    explanation: 'Laura e Paulo são os jogadores ativos: ambos tomam decisões estratégicas na negociação. Laura decide quanto pedir e quais argumentos usar; Paulo decide quanto oferecer dentro de suas restrições.',
    wrongExplanations: {
      rh: 'O RH define as regras (faixa salarial), mas não participa ativamente desta negociação específica. Ele age como árbitro/regulador, não como jogador.',
      diretor: 'O diretor está ausente e não participa diretamente desta negociação. Ele representa uma restrição externa para Paulo, não um jogador ativo.',
    },
    correctExplanations: {
      laura: 'Certo! Laura usa estratégia para obter o melhor aumento possível.',
      paulo: 'Certo! Paulo equilibra os interesses de Laura com os limites que tem.',
    },
  },
  {
    id: 'corrida-armamentos',
    difficulty: 'medium',
    concept: 'Jogo de Segurança',
    description: 'Dois países vizinhos, Aldoria e Brantia, decidem independentemente quanto investir em defesa militar. Se Aldoria investe muito e Brantia pouco, Aldoria fica dominante. Analistas militares de cada país recomendam estratégias. A ONU monitora e pode impor sanções se o gasto ultrapassar certos limites.',
    context: 'Quem são os JOGADORES nesta corrida armamentista?',
    options: [
      { id: 'aldoria', label: 'País Aldoria', isPlayer: true },
      { id: 'brantia', label: 'País Brantia', isPlayer: true },
      { id: 'analistas', label: 'Os analistas militares', isPlayer: false },
      { id: 'onu', label: 'A ONU (observadora)', isPlayer: false },
    ],
    correctIds: ['aldoria', 'brantia'],
    explanation: 'Aldoria e Brantia são os jogadores porque são eles que tomam as decisões estratégicas de investimento em defesa. O nível de segurança de cada um depende do que ambos decidem gastar.',
    wrongExplanations: {
      analistas: 'Os analistas fornecem informações e recomendações, mas as decisões finais são dos países. Conselheiros não são jogadores.',
      onu: 'A ONU impõe restrições externas (sanções), modificando as regras do jogo, mas não é um participante com stake na decisão de defesa de cada país.',
    },
    correctExplanations: {
      aldoria: 'Correto! Aldoria decide seu investimento levando em conta o que Brantia pode fazer.',
      brantia: 'Correto! Brantia também estrategiza, sabendo que Aldoria está fazendo o mesmo.',
    },
  },
  {
    id: 'mercado-trabalho',
    difficulty: 'hard',
    concept: 'Sinalização de Mercado',
    description: 'Três candidatos se inscrevem para uma vaga de emprego. Cada candidato decide se investe em um diploma universitário caro (que serve como sinal de competência) ou não. A empresa contratante observa apenas o diploma, não a competência real. Um coach de carreira orienta os candidatos sobre como se apresentar.',
    context: 'Quem são os JOGADORES neste jogo de sinalização?',
    options: [
      { id: 'candidatos', label: 'Os três candidatos', isPlayer: true },
      { id: 'empresa', label: 'A empresa contratante', isPlayer: true },
      { id: 'coach', label: 'O coach de carreira', isPlayer: false },
      { id: 'universidade', label: 'A universidade que emite diplomas', isPlayer: false },
    ],
    correctIds: ['candidatos', 'empresa'],
    explanation: 'Os candidatos e a empresa são jogadores em um jogo de sinalização. Os candidatos decidem se investem no sinal (diploma); a empresa decide sua política de contratação baseada no sinal observado. Cada parte age estrategicamente em resposta ao outro.',
    wrongExplanations: {
      coach: 'O coach aconselha, mas não toma as decisões estratégicas. Ele é um consultor externo ao jogo.',
      universidade: 'A universidade apenas emite diplomas seguindo critérios estabelecidos. Ela não participa do jogo estratégico entre candidatos e empresa.',
    },
    correctExplanations: {
      candidatos: 'Correto! Cada candidato decide estrategicamente se o custo do sinal (diploma) vale o benefício esperado.',
      empresa: 'Correto! A empresa decide sua política de interpretação dos sinais para maximizar a qualidade das contratações.',
    },
  },
  {
    id: 'tragedia-comuns',
    difficulty: 'hard',
    concept: 'Tragédia dos Comuns',
    description: 'Cinco pescadores compartilham um lago com estoque limitado de peixes. Cada um decide diariamente quanto pescar. Se pescarem demais coletivamente, o estoque colapsa e todos perdem. Um fiscal ambiental monitora mas só pode multar se houver prova de excesso individual. O governo definiu uma cota máxima por pescador.',
    context: 'Quem são os JOGADORES neste dilema de recursos compartilhados?',
    options: [
      { id: 'pescadores', label: 'Os cinco pescadores', isPlayer: true },
      { id: 'fiscal', label: 'O fiscal ambiental', isPlayer: false },
      { id: 'governo', label: 'O governo (definiu as cotas)', isPlayer: false },
      { id: 'peixes', label: 'Os peixes no lago', isPlayer: false },
    ],
    correctIds: ['pescadores'],
    explanation: 'Os cinco pescadores são os jogadores. Cada um decide quanto pescar, sabendo que os outros fazem o mesmo. O resultado coletivo (sobrevivência do estoque) depende das escolhas combinadas — um clássico dilema social.',
    wrongExplanations: {
      fiscal: 'O fiscal aplica as regras já estabelecidas. Ele não decide estrategicamente dentro do jogo de pesca — é um mecanismo de enforcement externo.',
      governo: 'O governo criou as regras (cotas) antes do jogo começar. Ele define o ambiente, não joga dentro dele neste contexto específico.',
      peixes: 'Os peixes são o recurso compartilhado, não agentes com capacidade de decisão estratégica.',
    },
    correctExplanations: {
      pescadores: 'Excelente! Cada pescador pondera: se todos forem gananciosos, todos perdem. Este é o coração da Tragédia dos Comuns.',
    },
  },
  {
    id: 'equilibrio-nash',
    difficulty: 'hard',
    concept: 'Equilíbrio de Nash',
    description: 'Duas empresas de tecnologia, TechAlpha e DigiCore, desenvolvem produtos concorrentes. Cada uma escolhe entre estratégia "Premium" (produto caro e sofisticado) ou "Popular" (produto barato e acessível). Uma consultoria analisa o mercado para ambas. Consumidores de três perfis diferentes avaliarão os produtos.',
    context: 'Quem são os JOGADORES neste jogo de estratégia empresarial?',
    options: [
      { id: 'techalpha', label: 'TechAlpha', isPlayer: true },
      { id: 'digicore', label: 'DigiCore', isPlayer: true },
      { id: 'consultoria', label: 'A consultoria de mercado', isPlayer: false },
      { id: 'consumidores', label: 'Os consumidores dos três perfis', isPlayer: false },
    ],
    correctIds: ['techalpha', 'digicore'],
    explanation: 'TechAlpha e DigiCore são os jogadores porque cada uma decide sua estratégia de posicionamento considerando o que a concorrente vai fazer. O lucro de cada uma depende da combinação de estratégias escolhidas — o objetivo é encontrar o Equilíbrio de Nash.',
    wrongExplanations: {
      consultoria: 'A consultoria analisa e recomenda, mas não é ela que decide a estratégia nem sofre as consequências. Consultores não são jogadores.',
      consumidores: 'Os consumidores respondem às estratégias das empresas, mas não estão tomando decisões estratégicas interdependentes entre si neste jogo específico de posicionamento.',
    },
    correctExplanations: {
      techalpha: 'Certo! TechAlpha escolhe sua estratégia antecipando a resposta da DigiCore.',
      digicore: 'Certo! DigiCore faz o mesmo — é esta interdependência que cria o jogo estratégico.',
    },
  },
  {
    id: 'jogo-ultimatum',
    difficulty: 'medium',
    concept: 'Jogo do Ultimato',
    description: 'Pedro recebe R$100 para dividir com Sofia. Pedro propõe como dividir o dinheiro. Se Sofia aceitar, ambos ficam com suas partes. Se Sofia recusar, nenhum dos dois recebe nada. Um árbitro garante que as regras sejam cumpridas. Um observador externo registra as decisões para pesquisa.',
    context: 'Quem são os JOGADORES no Jogo do Ultimato?',
    options: [
      { id: 'pedro', label: 'Pedro (o proponente)', isPlayer: true },
      { id: 'sofia', label: 'Sofia (a respondente)', isPlayer: true },
      { id: 'arbitro', label: 'O árbitro', isPlayer: false },
      { id: 'observador', label: 'O observador pesquisador', isPlayer: false },
    ],
    correctIds: ['pedro', 'sofia'],
    explanation: 'Pedro e Sofia são os jogadores. Pedro decide como dividir o dinheiro; Sofia decide se aceita ou rejeita a proposta. Ambas as decisões são estratégicas e interdependentes — Pedro deve antecipar o que Sofia aceitará.',
    wrongExplanations: {
      arbitro: 'O árbitro apenas garante o cumprimento das regras já estabelecidas. Ele não tem stake nem toma decisões estratégicas no jogo.',
      observador: 'O observador apenas registra o que acontece. Sua presença pode influenciar comportamentos, mas ele não é um jogador com decisões e payoffs.',
    },
    correctExplanations: {
      pedro: 'Correto! Pedro decide estrategicamente quanto oferecer para que Sofia aceite.',
      sofia: 'Correto! Sofia decide se aceita uma oferta possivelmente injusta ou rejeita para "punir" Pedro.',
    },
  },
  {
    id: 'coordenacao-trafego',
    difficulty: 'easy',
    concept: 'Jogo de Coordenação',
    description: 'Dois carros chegam simultaneamente a uma rotatória sem sinalização. Cada motorista deve decidir: entrar imediatamente ou ceder a passagem. Se ambos entrarem ao mesmo tempo, colidem. Se ambos cederem, ficam parados. O carro precisa chegar ao destino.',
    context: 'Quem são os JOGADORES neste jogo de trânsito?',
    options: [
      { id: 'motorista1', label: 'Motorista do primeiro carro', isPlayer: true },
      { id: 'motorista2', label: 'Motorista do segundo carro', isPlayer: true },
      { id: 'carro1', label: 'O primeiro carro (veículo)', isPlayer: false },
      { id: 'prefeitura', label: 'A prefeitura (que não colocou sinal)', isPlayer: false },
    ],
    correctIds: ['motorista1', 'motorista2'],
    explanation: 'Os dois motoristas são os jogadores! São eles que tomam decisões em tempo real. Cada um observa o outro e decide sua ação, criando um jogo de coordenação onde o resultado depende das escolhas simultâneas.',
    wrongExplanations: {
      carro1: 'O carro é apenas o meio de transporte — uma ferramenta. Quem toma a decisão estratégica é o motorista.',
      prefeitura: 'A prefeitura criou o contexto (falta de sinalização), mas não está presente no jogo. Ela não toma decisões dentro desta interação específica.',
    },
    correctExplanations: {
      motorista1: 'Certo! O motorista 1 tenta antecipar o que o motorista 2 vai fazer.',
      motorista2: 'Certo! O motorista 2 também raciocina estrategicamente para evitar colisão.',
    },
  },
  {
    id: 'mercado-seguros',
    difficulty: 'hard',
    concept: 'Informação Assimétrica',
    description: 'Uma seguradora oferece planos de saúde. Cada cliente sabe seu próprio nível de risco de saúde, mas a seguradora não. Os clientes decidem qual plano contratar. A seguradora define os preços dos planos. Um médico emite atestados de saúde, mas os clientes podem omitir condições pré-existentes.',
    context: 'Quem são os JOGADORES neste mercado com informação assimétrica?',
    options: [
      { id: 'clientes', label: 'Os clientes (segurados)', isPlayer: true },
      { id: 'seguradora', label: 'A seguradora', isPlayer: true },
      { id: 'medico', label: 'O médico que emite atestados', isPlayer: false },
      { id: 'governo', label: 'O governo que regula seguros', isPlayer: false },
    ],
    correctIds: ['clientes', 'seguradora'],
    explanation: 'Clientes e seguradora são os jogadores neste jogo de informação assimétrica. Os clientes escolhem planos estrategicamente (podem esconder doenças); a seguradora precisa precificar planos sem conhecer o risco real de cada cliente.',
    wrongExplanations: {
      medico: 'O médico certifica condições de saúde mas não toma decisões estratégicas sobre contratação ou precificação. Ele é um fornecedor de informação.',
      governo: 'O governo define as regras do setor de seguros, mas não é um jogador ativo neste jogo específico entre clientes e seguradora.',
    },
    correctExplanations: {
      clientes: 'Correto! Cada cliente decide estrategicamente que informações revelar e qual plano contratar.',
      seguradora: 'Correto! A seguradora tenta desenhar planos que incentivem os clientes a revelar seu verdadeiro risco.',
    },
  },
];

// Garantir que as alternativas corretas estejam sempre alinhadas com os jogadores definidos.
scenarios.forEach((scenario) => {
  const playerIds = scenario.options.filter((option) => option.isPlayer).map((option) => option.id);
  if (playerIds.length > 0) {
    scenario.correctIds = playerIds;
  }
});

export const getScenariosByDifficulty = (difficulty: 'easy' | 'medium' | 'hard') =>
  scenarios.filter((s) => s.difficulty === difficulty);

export const shuffleArray = <T>(arr: T[]): T[] => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
