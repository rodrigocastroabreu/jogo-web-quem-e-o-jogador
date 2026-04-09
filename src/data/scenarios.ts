import { Scenario } from '../types';

export const scenarios: Scenario[] = [
  {
    id: 'dilema-prisioneiro',
    difficulty: 'easy',
    concept: 'Dilema do Prisioneiro',
    description: 'Dois suspeitos, Carlos e Ana, são presos e interrogados em salas separadas. Cada um pode confessar ou permanecer em silêncio. Se ambos ficarem em silêncio, pegam 1 ano. Se um confessar e o outro não, o que confessou fica livre e o outro pega 5 anos. Se ambos confessarem, pegam 3 anos cada.',
    context: 'Quem são os JOGADORES neste cenário?',
    options: [
      { id: 'carlos', label: 'Apenas Carlos' },
      { id: 'ana', label: 'Apenas Ana' },
      { id: 'carlos_ana', label: 'Carlos e Ana' },
      { id: 'todos', label: 'Carlos, Ana e o delegado' },
    ],
    correctIds: ['carlos_ana'],
    explanation: 'Carlos e Ana são os jogadores porque ambos tomam decisões estratégicas: confessar ou ficar em silêncio. O resultado depende diretamente das escolhas que cada um faz.',
    wrongExplanations: {
      carlos: 'Carlos toma decisões, mas Ana também é essencial no dilema.',
      ana: 'Ana toma decisões, mas Carlos também é essencial no dilema.',
      todos: 'O delegado não toma decisões estratégicas no jogo entre os suspeitos.',
    },
    correctExplanations: {
      carlos_ana: 'Correto! Ambos são jogadores porque suas decisões interdependentes criam o dilema.',
    },
  },
  {
    id: 'leilao-simples',
    difficulty: 'easy',
    concept: 'Teoria dos Leilões',
    description: 'Um quadro valioso está sendo leiloado. Maria, João e Roberto fazem lances para adquirir a obra. O leiloeiro anuncia cada lance e quem der o maior valor leva o quadro.',
    context: 'Quem são os JOGADORES neste leilão?',
    options: [
      { id: 'maria', label: 'Apenas Maria' },
      { id: 'joao', label: 'Apenas João' },
      { id: 'roberto', label: 'Apenas Roberto' },
      { id: 'maria_joao_roberto', label: 'Maria, João e Roberto' },
      { id: 'todos', label: 'Maria, João, Roberto e o leiloeiro' },
    ],
    correctIds: ['maria_joao_roberto'],
    explanation: 'Maria, João e Roberto são os jogadores porque cada um decide quanto ofertar, considerando o que os outros podem dar. O resultado depende das escolhas estratégicas de cada um.',
    wrongExplanations: {
      maria: 'Maria decide, mas João e Roberto também são essenciais.',
      joao: 'João decide, mas Maria e Roberto também são essenciais.',
      roberto: 'Roberto decide, mas Maria e João também são essenciais.',
      todos: 'O leiloeiro facilita o processo, mas não toma decisões estratégicas.',
    },
    correctExplanations: {
      maria_joao_roberto: 'Certo! Todos os três tomam decisões interdependentes no leilão.',
    },
  },
  {
    id: 'guerra-precos',
    difficulty: 'easy',
    concept: 'Concorrência de Preços',
    description: 'Dois supermercados, SuperMais e BomPreço, são vizinhos e vendem os mesmos produtos. Cada semana, cada gerente decide se mantém o preço atual ou faz uma promoção. Se ambos fizerem promoção, os lucros caem. Se apenas um fizer, ele atrai mais clientes.',
    context: 'Quem são os JOGADORES neste cenário de concorrência?',
    options: [
      { id: 'supermais', label: 'Apenas SuperMais' },
      { id: 'bompreco', label: 'Apenas BomPreço' },
      { id: 'supermais_bompreco', label: 'SuperMais e BomPreço' },
      { id: 'todos', label: 'SuperMais, BomPreço e os clientes' },
    ],
    correctIds: ['supermais_bompreco'],
    explanation: 'SuperMais e BomPreço são os jogadores porque ambos tomam decisões estratégicas de precificação, considerando o que o concorrente pode fazer. O lucro de cada um depende das escolhas combinadas.',
    wrongExplanations: {
      supermais: 'SuperMais decide, mas BomPreço também é essencial.',
      bompreco: 'BomPreço decide, mas SuperMais também é essencial.',
      todos: 'Os clientes respondem aos preços, mas não decidem estrategicamente.',
    },
    correctExplanations: {
      supermais_bompreco: 'Correto! Ambos estrategizam suas decisões de preços.',
    },
  },
  {
    id: 'votacao-comite',
    difficulty: 'medium',
    concept: 'Votação Estratégica',
    description: 'Um comitê com 5 membros deve votar sobre a aprovação de um projeto. Cada membro tem preferências e pode votar sinceramente ou estrategicamente (votar diferente do que prefere para influenciar o resultado final). O presidente do comitê apenas organiza a reunião mas não vota.',
    context: 'Quem são os JOGADORES neste processo de votação?',
    options: [
      { id: 'presidente', label: 'Apenas o presidente' },
      { id: 'alguns_membros', label: 'Apenas alguns membros' },
      { id: 'todos_membros', label: 'Todos os 5 membros votantes' },
      { id: 'todos', label: 'Membros, presidente e empresa' },
    ],
    correctIds: ['todos_membros'],
    explanation: 'Os 5 membros votantes são os jogadores porque tomam decisões (votos) que afetam o resultado coletivo. Podem votar estrategicamente para maximizar seus interesses.',
    wrongExplanations: {
      presidente: 'O presidente organiza, mas não vota.',
      alguns_membros: 'Nem todos os membros participam ativamente no jogo estratégico.',
      todos: 'A empresa propôs o projeto, mas não vota.',
    },
    correctExplanations: {
      todos_membros: 'Perfeito! Cada membro pondera os votos dos outros.',
    },
  },
  {
    id: 'negociacao-salario',
    difficulty: 'medium',
    concept: 'Barganha',
    description: 'Laura quer um aumento salarial. Ela negocia com seu gerente direto, Paulo. O RH fixou uma faixa salarial permitida. Paulo pode aprovar até 15% de aumento sem precisar de aprovação superior. Acima disso, precisa de autorização do diretor, que está fora do país.',
    context: 'Quem são os JOGADORES nesta negociação?',
    options: [
      { id: 'laura', label: 'Apenas Laura' },
      { id: 'paulo', label: 'Apenas Paulo' },
      { id: 'laura_paulo', label: 'Laura e Paulo' },
      { id: 'todos', label: 'Laura, Paulo e o RH' },
    ],
    correctIds: ['laura_paulo'],
    explanation: 'Laura e Paulo são os jogadores ativos: ambos tomam decisões estratégicas na negociação. Laura decide quanto pedir; Paulo decide quanto oferecer.',
    wrongExplanations: {
      laura: 'Laura decide, mas Paulo também é essencial.',
      paulo: 'Paulo decide, mas Laura também é essencial.',
      todos: 'O RH define regras, mas não negocia diretamente.',
    },
    correctExplanations: {
      laura_paulo: 'Certo! Ambos estrategizam na negociação salarial.',
    },
  },
  {
    id: 'corrida-armamentos',
    difficulty: 'medium',
    concept: 'Jogo de Segurança',
    description: 'Dois países vizinhos, Aldoria e Brantia, decidem independentemente quanto investir em defesa militar. Se Aldoria investe muito e Brantia pouco, Aldoria fica dominante. Analistas militares de cada país recomendam estratégias. A ONU monitora e pode impor sanções se o gasto ultrapassar certos limites.',
    context: 'Quem são os JOGADORES nesta corrida armamentista?',
    options: [
      { id: 'aldoria', label: 'Apenas Aldoria' },
      { id: 'brantia', label: 'Apenas Brantia' },
      { id: 'aldoria_brantia', label: 'Aldoria e Brantia' },
      { id: 'todos', label: 'Aldoria, Brantia e a ONU' },
    ],
    correctIds: ['aldoria_brantia'],
    explanation: 'Aldoria e Brantia são os jogadores porque ambos tomam decisões estratégicas de investimento em defesa. O nível de segurança de cada um depende do que ambos decidem gastar.',
    wrongExplanations: {
      aldoria: 'Aldoria decide, mas Brantia também é essencial.',
      brantia: 'Brantia decide, mas Aldoria também é essencial.',
      todos: 'A ONU impõe restrições, mas não decide investimentos.',
    },
    correctExplanations: {
      aldoria_brantia: 'Correto! Ambos estrategizam seus investimentos militares.',
    },
  },
  {
    id: 'mercado-trabalho',
    difficulty: 'hard',
    concept: 'Sinalização de Mercado',
    description: 'Três candidatos se inscrevem para uma vaga de emprego. Cada candidato decide se investe em um diploma universitário caro (que serve como sinal de competência) ou não. A empresa contratante observa apenas o diploma, não a competência real. Um coach de carreira orienta os candidatos sobre como se apresentar.',
    context: 'Quem são os JOGADORES neste jogo de sinalização?',
    options: [
      { id: 'candidatos', label: 'Apenas os candidatos' },
      { id: 'empresa', label: 'Apenas a empresa' },
      { id: 'candidatos_empresa', label: 'Candidatos e empresa' },
      { id: 'todos', label: 'Candidatos, empresa e coach' },
    ],
    correctIds: ['candidatos_empresa'],
    explanation: 'Candidatos e empresa são jogadores: candidatos decidem se investem no sinal; empresa decide política de contratação baseada no sinal observado.',
    wrongExplanations: {
      candidatos: 'Candidatos decidem, mas empresa também é essencial.',
      empresa: 'Empresa decide, mas candidatos também são essenciais.',
      todos: 'O coach aconselha, mas não toma decisões estratégicas.',
    },
    correctExplanations: {
      candidatos_empresa: 'Correto! Ambos agem estrategicamente em resposta um ao outro.',
    },
  },
  {
    id: 'tragedia-comuns',
    difficulty: 'hard',
    concept: 'Tragédia dos Comuns',
    description: 'Cinco pescadores compartilham um lago com estoque limitado de peixes. Cada um decide diariamente quanto pescar. Se pescarem demais coletivamente, o estoque colapsa e todos perdem. Um fiscal ambiental monitora mas só pode multar se houver prova de excesso individual. O governo definiu uma cota máxima por pescador.',
    context: 'Quem são os JOGADORES neste dilema de recursos compartilhados?',
    options: [
      { id: 'alguns_pescadores', label: 'Apenas alguns pescadores' },
      { id: 'todos_pescadores', label: 'Todos os cinco pescadores' },
      { id: 'fiscal', label: 'Apenas o fiscal' },
      { id: 'todos', label: 'Pescadores, fiscal e governo' },
    ],
    correctIds: ['todos_pescadores'],
    explanation: 'Os cinco pescadores são os jogadores. Cada um decide quanto pescar, sabendo que os outros fazem o mesmo. O resultado coletivo depende das escolhas combinadas.',
    wrongExplanations: {
      alguns_pescadores: 'Nem todos participam ativamente.',
      fiscal: 'O fiscal aplica regras, mas não pesca.',
      todos: 'Governo define cotas, mas não pesca.',
    },
    correctExplanations: {
      todos_pescadores: 'Excelente! Cada pescador pondera as ações dos outros.',
    },
  },
  {
    id: 'equilibrio-nash',
    difficulty: 'hard',
    concept: 'Equilíbrio de Nash',
    description: 'Duas empresas de tecnologia, TechAlpha e DigiCore, desenvolvem produtos concorrentes. Cada uma escolhe entre estratégia "Premium" (produto caro e sofisticado) ou "Popular" (produto barato e acessível). Uma consultoria analisa o mercado para ambas. Consumidores de três perfis diferentes avaliarão os produtos.',
    context: 'Quem são os JOGADORES neste jogo de estratégia empresarial?',
    options: [
      { id: 'techalpha', label: 'Apenas TechAlpha' },
      { id: 'digicore', label: 'Apenas DigiCore' },
      { id: 'techalpha_digicore', label: 'TechAlpha e DigiCore' },
      { id: 'todos', label: 'TechAlpha, DigiCore e consultoria' },
    ],
    correctIds: ['techalpha_digicore'],
    explanation: 'TechAlpha e DigiCore são os jogadores porque ambas decidem estratégias de posicionamento considerando o que a concorrente vai fazer. O lucro depende da combinação de estratégias.',
    wrongExplanations: {
      techalpha: 'TechAlpha decide, mas DigiCore também é essencial.',
      digicore: 'DigiCore decide, mas TechAlpha também é essencial.',
      todos: 'A consultoria recomenda, mas não decide estratégias.',
    },
    correctExplanations: {
      techalpha_digicore: 'Certo! Ambas antecipam as respostas uma da outra.',
    },
  },
  {
    id: 'jogo-ultimatum',
    difficulty: 'medium',
    concept: 'Jogo do Ultimato',
    description: 'Pedro recebe R$100 para dividir com Sofia. Pedro propõe como dividir o dinheiro. Se Sofia aceitar, ambos ficam com suas partes. Se Sofia recusar, nenhum dos dois recebe nada. Um árbitro garante que as regras sejam cumpridas. Um observador externo registra as decisões para pesquisa.',
    context: 'Quem são os JOGADORES no Jogo do Ultimato?',
    options: [
      { id: 'pedro', label: 'Apenas Pedro' },
      { id: 'sofia', label: 'Apenas Sofia' },
      { id: 'pedro_sofia', label: 'Pedro e Sofia' },
      { id: 'todos', label: 'Pedro, Sofia e o árbitro' },
    ],
    correctIds: ['pedro_sofia'],
    explanation: 'Pedro e Sofia são os jogadores. Pedro decide como propor a divisão; Sofia decide se aceita. Ambas as decisões são estratégicas e interdependentes.',
    wrongExplanations: {
      pedro: 'Pedro decide, mas Sofia também é essencial.',
      sofia: 'Sofia decide, mas Pedro também é essencial.',
      todos: 'O árbitro garante regras, mas não decide divisões.',
    },
    correctExplanations: {
      pedro_sofia: 'Correto! Ambos estrategizam suas decisões.',
    },
  },
  {
    id: 'coordenacao-trafego',
    difficulty: 'easy',
    concept: 'Jogo de Coordenação',
    description: 'Dois carros chegam simultaneamente a uma rotatória sem sinalização. Cada motorista deve decidir: entrar imediatamente ou ceder a passagem. Se ambos entrarem ao mesmo tempo, colidem. Se ambos cederem, ficam parados. O carro precisa chegar ao destino.',
    context: 'Quem são os JOGADORES neste jogo de trânsito?',
    options: [
      { id: 'motorista1', label: 'Apenas o motorista 1' },
      { id: 'motorista2', label: 'Apenas o motorista 2' },
      { id: 'motorista1_motorista2', label: 'Motorista 1 e motorista 2' },
      { id: 'todos', label: 'Motoristas e prefeitura' },
    ],
    correctIds: ['motorista1_motorista2'],
    explanation: 'Os dois motoristas são os jogadores! Ambos tomam decisões em tempo real sobre quando entrar na rotatória, criando um jogo de coordenação.',
    wrongExplanations: {
      motorista1: 'Motorista 1 decide, mas motorista 2 também é essencial.',
      motorista2: 'Motorista 2 decide, mas motorista 1 também é essencial.',
      todos: 'A prefeitura não colocou sinal, mas não decide em tempo real.',
    },
    correctExplanations: {
      motorista1_motorista2: 'Certo! Ambos raciocinam estrategicamente para evitar colisão.',
    },
  },
  {
    id: 'mercado-seguros',
    difficulty: 'hard',
    concept: 'Informação Assimétrica',
    description: 'Uma seguradora oferece planos de saúde. Cada cliente sabe seu próprio nível de risco de saúde, mas a seguradora não. Os clientes decidem qual plano contratar. A seguradora define os preços dos planos. Um médico emite atestados de saúde, mas os clientes podem omitir condições pré-existentes.',
    context: 'Quem são os JOGADORES neste mercado com informação assimétrica?',
    options: [
      { id: 'clientes', label: 'Apenas os clientes' },
      { id: 'seguradora', label: 'Apenas a seguradora' },
      { id: 'clientes_seguradora', label: 'Clientes e seguradora' },
      { id: 'todos', label: 'Clientes, seguradora e médico' },
    ],
    correctIds: ['clientes_seguradora'],
    explanation: 'Clientes e seguradora são os jogadores: clientes decidem qual plano contratar e que informações revelar; seguradora precifica planos sem conhecer riscos reais.',
    wrongExplanations: {
      clientes: 'Clientes decidem, mas seguradora também é essencial.',
      seguradora: 'Seguradora decide, mas clientes também são essenciais.',
      todos: 'O médico certifica, mas não decide planos ou preços.',
    },
    correctExplanations: {
      clientes_seguradora: 'Correto! Ambos agem com informação assimétrica.',
    },
  },
];

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
