// ════════════════════════════════════════
// DATA CONSTANTS
// ════════════════════════════════════════
const SK = "kaisui_v6"; // Incrementando a versão para evitar conflitos de estado antigo

const RANKS = [
  { min: 0, max: 0, name: "O Medroso" },
  { min: 1, max: 10, name: "The Apprentice" },
  { min: 11, max: 30, name: "The Nomad Coder" },
  { min: 31, max: 50, name: "High-Level Engineer" },
  { min: 51, max: 99, name: "Shadow Runner" },
  { min: 100, max: 999, name: "DEUS KAISUI" },
];

const DAILY_TASKS = [
  { id: 1, name: "Acordar 05:30 sem snooze", xp: 200, stat: "dis", icon: "⏰" },
  {
    id: 2,
    name: "Banho Gelado (Protocolo Criogênico)",
    xp: 150,
    stat: "dis",
    icon: "🧊",
  },
  {
    id: 3,
    name: "Planear 3 tarefas principais",
    xp: 100,
    stat: "dis",
    icon: "📋",
  },
  { id: 4, name: "Arrumar o Templo (Cama)", xp: 50, stat: "dis", icon: "🛏️" },
  { id: 5, name: "Código (1h Deep Work)", xp: 250, stat: "int", icon: "💻" },
  {
    id: 6,
    name: "Revisão Faculdade (30min)",
    xp: 150,
    stat: "int",
    icon: "🎓",
  },
  { id: 7, name: "Avançar Projeto SaaS/TCC", xp: 200, stat: "int", icon: "🏗️" },
  {
    id: 8,
    name: "Ler 1 página Bell Hooks (Reflexão)",
    xp: 100,
    stat: "int",
    icon: "📖",
  },
  {
    id: 9,
    name: "Estudo de Inglês Ativo (30min)",
    xp: 150,
    stat: "int",
    icon: "🇺🇸",
  },
  {
    id: 10,
    name: "Narrar o Dia em Inglês (10min)",
    xp: 120,
    stat: "cha",
    icon: "🗣️",
  },
  {
    id: 11,
    name: "Ler 1 página em inglês (Voz Alta)",
    xp: 80,
    stat: "cha",
    icon: "📚",
  },
  {
    id: 12,
    name: "Phone OS em Inglês (Check)",
    xp: 50,
    stat: "cha",
    icon: "📱",
  },
  { 

    id: 17,
    name: "Sem distrações (Redes Sociais/Tiktok)",
    xp: 150,
    stat: "for",
    icon: "🚫",
  },
  {
    id: 13,
    name: "Imersão (Podcast/Vídeo s/ Legenda)",
    xp: 100,
    stat: "dis",
    icon: "🎧",
  },
  {
    id: 14,
    name: "Treino (Gym ou Calistenia)",
    xp: 250,
    stat: "for",
    icon: "💪",
  },
  {
    id: 15,
    name: "Hidratação Alpha (3L Água)",
    xp: 100,
    stat: "for",
    icon: "💧",
  },
  {
    id: 16,
    name: "Alimentação Limpa (Zero Processados)",
    xp: 120,
    stat: "for",
    icon: "🥩",
  },
  {
    id: 18,
    name: "Fazer um Vídeo em português",
    xp: 100,
    stat: "dis",
    icon: "📹",
  },
  {
    id: 19,
    name: "Gravar Video em Inglês (2min)",
    xp: 80,
    stat: "int",
    icon: "🎥",
  },
  { id: 20, name: "Dormir antes das 22:30", xp: 150, stat: "dis", icon: "🌙" },
];

const BAD_HABITS = [
  { id: "b1", name: "Redes Sociais > 1h", xpL: 200, hpL: 20 },
  { id: "b2", name: "Acordei depois das 08h", xpL: 300, hpL: 30 },
  { id: "b3", name: "Saltei o treino", xpL: 250, hpL: 25 },
  { id: "b4", name: "Comida Junk", xpL: 150, hpL: 15 },
  { id: "b5", name: "Pornografia", xpL: 500, hpL: 50 },
  { id: "b6", name: "Álcool", xpL: 400, hpL: 40 },
  { id: "b7", name: "Procrastinei", xpL: 300, hpL: 30 },
];

const MISSIONS = [
  // --- EASY (IDs 1-35) ---
  {
    id: 1,
    name: "Acorde às 05h por 7 dias",
    tier: "easy",
    cat: "Disciplina",
    xp: 300,
    coins: 50,
    stat: "dis",
  },
  {
    id: 2,
    name: "1 módulo de inglês no Duolingo",
    tier: "easy",
    cat: "Inteligência",
    xp: 100,
    coins: 20,
    stat: "int",
  },
  {
    id: 3,
    name: "Leia 20 páginas técnicas",
    tier: "easy",
    cat: "Inteligência",
    xp: 150,
    coins: 25,
    stat: "int",
  },
  {
    id: 4,
    name: "100 push-ups em um dia",
    tier: "easy",
    cat: "Força",
    xp: 200,
    coins: 30,
    stat: "for",
  },
  {
    id: 5,
    name: "Medite 10 minutos",
    tier: "easy",
    cat: "Disciplina",
    xp: 100,
    coins: 15,
    stat: "dis",
  },
  {
    id: 6,
    name: "Escreva em inglês 15min",
    tier: "easy",
    cat: "Carisma",
    xp: 120,
    coins: 20,
    stat: "cha",
  },
  {
    id: 7,
    name: "3 problemas no LeetCode",
    tier: "easy",
    cat: "Coding",
    xp: 250,
    coins: 40,
    stat: "int",
  },
  {
    id: 8,
    name: "Palestra TED em inglês",
    tier: "easy",
    cat: "Inteligência",
    xp: 130,
    coins: 20,
    stat: "int",
  },
  {
    id: 9,
    name: "10.000 passos em um dia",
    tier: "easy",
    cat: "Força",
    xp: 150,
    coins: 25,
    stat: "for",
  },
  {
    id: 10,
    name: "3L de água por 5 dias",
    tier: "easy",
    cat: "Disciplina",
    xp: 180,
    coins: 30,
    stat: "dis",
  },
  {
    id: 34,
    name: "Banho gelado por 3 dias",
    tier: "easy",
    cat: "Disciplina",
    xp: 200,
    coins: 40,
    stat: "dis",
  },
  {
    id: 35,
    name: "Cozinhe sua própria refeição (Saudável)",
    tier: "easy",
    cat: "Disciplina",
    xp: 100,
    coins: 15,
    stat: "for",
  },

  // --- NORMAL (IDs 11-18 + 36-55) ---
  {
    id: 11,
    name: "Curso online de 4h+",
    tier: "normal",
    cat: "Inteligência",
    xp: 500,
    coins: 100,
    stat: "int",
  },
  {
    id: 12,
    name: "Projeto GitHub do zero",
    tier: "normal",
    cat: "Coding",
    xp: 600,
    coins: 120,
    stat: "int",
  },
  {
    id: 13,
    name: "Academia 20x em 1 mês",
    tier: "normal",
    cat: "Força",
    xp: 700,
    coins: 150,
    stat: "for",
  },
  {
    id: 14,
    name: "30 dias sem redes sociais",
    tier: "normal",
    cat: "Disciplina",
    xp: 800,
    coins: 200,
    stat: "dis",
  },
  {
    id: 15,
    name: "1000 push-ups em uma semana",
    tier: "normal",
    cat: "Força",
    xp: 600,
    coins: 130,
    stat: "for",
  },
  {
    id: 16,
    name: "Leia um livro inteiro em inglês",
    tier: "normal",
    cat: "Inteligência",
    xp: 700,
    coins: 150,
    stat: "int",
  },
  {
    id: 17,
    name: "Contribua em open-source",
    tier: "normal",
    cat: "Coding",
    xp: 650,
    coins: 140,
    stat: "int",
  },
  {
    id: 18,
    name: "1h conversa com nativo",
    tier: "normal",
    cat: "Carisma",
    xp: 550,
    coins: 110,
    stat: "cha",
  },
  {
    id: 36,
    name: "Aprenda 50 novas palavras em inglês",
    tier: "normal",
    cat: "Inteligência",
    xp: 400,
    coins: 80,
    stat: "int",
  },
  {
    id: 37,
    name: "Refatore um código antigo seu",
    tier: "normal",
    cat: "Coding",
    xp: 450,
    coins: 90,
    stat: "int",
  },
  {
    id: 38,
    name: "Jejum intermitente 16h por 7 dias",
    tier: "normal",
    cat: "Disciplina",
    xp: 600,
    coins: 120,
    stat: "dis",
  },
  {
    id: 39,
    name: "Corra 5km sem parar",
    tier: "normal",
    cat: "Força",
    xp: 500,
    coins: 100,
    stat: "for",
  },
  {
    id: 40,
    name: "Configure um ambiente Linux/Docker",
    tier: "normal",
    cat: "Coding",
    xp: 550,
    coins: 110,
    stat: "int",
  },
  {
    id: 41,
    name: "Escreva um artigo técnico (Medium/Dev.to)",
    tier: "normal",
    cat: "Carisma",
    xp: 600,
    coins: 120,
    stat: "cha",
  },
  {
    id: 42,
    name: "Crie um bot simples (Discord/Telegram)",
    tier: "normal",
    cat: "Coding",
    xp: 500,
    coins: 100,
    stat: "int",
  },
  {
    id: 43,
    name: "7 dias sem açúcar refinado",
    tier: "normal",
    cat: "Disciplina",
    xp: 500,
    coins: 100,
    stat: "dis",
  },
  {
    id: 44,
    name: "Assista um filme sem legendas",
    tier: "normal",
    cat: "Inteligência",
    xp: 450,
    coins: 90,
    stat: "int",
  },
  {
    id: 45,
    name: "Aprenda os fundamentos de TypeScript",
    tier: "normal",
    cat: "Coding",
    xp: 500,
    coins: 100,
    stat: "int",
  },
  {
    id: 46,
    name: "Faça 50 barras (Pull-ups) em um dia",
    tier: "normal",
    cat: "Força",
    xp: 600,
    coins: 120,
    stat: "for",
  },
  {
    id: 47,
    name: "Organize suas finanças em planilha",
    tier: "normal",
    cat: "Disciplina",
    xp: 400,
    coins: 80,
    stat: "dis",
  },
  {
    id: 48,
    name: "Faça um vídeo explicando um código",
    tier: "normal",
    cat: "Carisma",
    xp: 600,
    coins: 130,
    stat: "cha",
  },
  {
    id: 49,
    name: "Estude 2h por dia por 10 dias",
    tier: "normal",
    cat: "Disciplina",
    xp: 700,
    coins: 140,
    stat: "int",
  },
  {
    id: 50,
    name: "Participe de um meetup de tecnologia",
    tier: "normal",
    cat: "Carisma",
    xp: 500,
    coins: 100,
    stat: "cha",
  },

  // --- HARD (IDs 19-25 + 51-75) ---
  {
    id: 19,
    name: "Construa e publique um SaaS MVP",
    tier: "hard",
    cat: "Coding",
    xp: 2000,
    coins: 400,
    stat: "int",
  },
  {
    id: 20,
    name: "Entrevista técnica empresa gringa",
    tier: "hard",
    cat: "Carisma",
    xp: 1500,
    coins: 300,
    stat: "cha",
  },
  {
    id: 21,
    name: "Certificação AWS",
    tier: "hard",
    cat: "Inteligência",
    xp: 1800,
    coins: 350,
    stat: "int",
  },
  {
    id: 22,
    name: "Primeira viagem internacional solo",
    tier: "hard",
    cat: "Nômada",
    xp: 3000,
    coins: 600,
    stat: "cha",
  },
  {
    id: 23,
    name: "Muscle-up: 5 repetições",
    tier: "hard",
    cat: "Força",
    xp: 1500,
    coins: 300,
    stat: "for",
  },
  {
    id: 24,
    name: "90 dias sem álcool",
    tier: "hard",
    cat: "Disciplina",
    xp: 2500,
    coins: 500,
    stat: "dis",
  },
  {
    id: 25,
    name: "Palestra pública em inglês",
    tier: "hard",
    cat: "Carisma",
    xp: 1800,
    coins: 350,
    stat: "cha",
  },
  {
    id: 51,
    name: "Complete uma Maratona de Código (48h)",
    tier: "hard",
    cat: "Coding",
    xp: 2200,
    coins: 450,
    stat: "int",
  },
  {
    id: 52,
    name: "Aprenda uma nova linguagem (Rust/Go)",
    tier: "hard",
    cat: "Inteligência",
    xp: 1900,
    coins: 400,
    stat: "int",
  },
  {
    id: 53,
    name: "Consiga um freela internacional",
    tier: "hard",
    cat: "Nômada",
    xp: 2800,
    coins: 550,
    stat: "cha",
  },
  {
    id: 54,
    name: "Corra 21km (Meia Maratona)",
    tier: "hard",
    cat: "Força",
    xp: 2000,
    coins: 400,
    stat: "for",
  },
  {
    id: 55,
    name: "Mantenha a rotina 05h por 30 dias",
    tier: "hard",
    cat: "Disciplina",
    xp: 2500,
    coins: 500,
    stat: "dis",
  },
  {
    id: 56,
    name: "Crie um pacote NPM público",
    tier: "hard",
    cat: "Coding",
    xp: 1700,
    coins: 350,
    stat: "int",
  },
  {
    id: 57,
    name: "Fale 15min sobre Bell Hooks em inglês",
    tier: "hard",
    cat: "Carisma",
    xp: 2000,
    coins: 450,
    stat: "cha",
  },
  {
    id: 58,
    name: "Resolva 50 problemas Difíceis (LeetCode)",
    tier: "hard",
    cat: "Coding",
    xp: 2500,
    coins: 500,
    stat: "int",
  },
  {
    id: 59,
    name: "Elimine 5 maus hábitos por 30 dias",
    tier: "hard",
    cat: "Disciplina",
    xp: 2300,
    coins: 450,
    stat: "dis",
  },
  {
    id: 60,
    name: "L-Sit por 30 segundos",
    tier: "hard",
    cat: "Força",
    xp: 1600,
    coins: 320,
    stat: "for",
  },
  {
    id: 61,
    name: "Lance um App na Play/App Store",
    tier: "hard",
    cat: "Coding",
    xp: 2500,
    coins: 500,
    stat: "int",
  },
  {
    id: 62,
    name: "Leia 5 livros de filosofia/sociologia",
    tier: "hard",
    cat: "Inteligência",
    xp: 1800,
    coins: 350,
    stat: "int",
  },
  {
    id: 63,
    name: "Workshop técnico para 10+ pessoas",
    tier: "hard",
    cat: "Carisma",
    xp: 2000,
    coins: 400,
    stat: "cha",
  },
  {
    id: 64,
    name: "Invista R$ 5k em ativos globais",
    tier: "hard",
    cat: "Nômada",
    xp: 2200,
    coins: 450,
    stat: "dis",
  },
  {
    id: 65,
    name: "Aprenda a cozinhar 10 pratos de elite",
    tier: "hard",
    cat: "Disciplina",
    xp: 1500,
    coins: 300,
    stat: "for",
  },

  // --- EPIC (IDs 26-29 + 66-85) ---
  {
    id: 26,
    name: "Trabalhe remoto 1 mês no exterior",
    tier: "epic",
    cat: "Nômada",
    xp: 5000,
    coins: 1000,
    stat: "cha",
    req: 15,
  },
  {
    id: 27,
    name: "Emprego fullstack em empresa int.",
    tier: "epic",
    cat: "Coding",
    xp: 8000,
    coins: 1500,
    stat: "int",
    req: 20,
  },
  {
    id: 28,
    name: "Planche push-up",
    tier: "epic",
    cat: "Força",
    xp: 6000,
    coins: 1200,
    stat: "for",
    req: 25,
  },
  {
    id: 29,
    name: "Viaje para 5 países em 1 ano",
    tier: "epic",
    cat: "Nômada",
    xp: 7000,
    coins: 1400,
    stat: "cha",
    req: 20,
  },
  {
    id: 66,
    name: "Handstand push-up (3 reps)",
    tier: "epic",
    cat: "Força",
    xp: 5500,
    coins: 1100,
    stat: "for",
    req: 22,
  },
  {
    id: 67,
    name: "Crie um blog técnico com 10k+ visitas",
    tier: "epic",
    cat: "Carisma",
    xp: 6500,
    coins: 1300,
    stat: "cha",
    req: 18,
  },
  {
    id: 68,
    name: "Aprenda Japonês básico (N5)",
    tier: "epic",
    cat: "Inteligência",
    xp: 7000,
    coins: 1400,
    stat: "int",
    req: 20,
  },
  {
    id: 69,
    name: "Vire contribuidor core de um projeto OS",
    tier: "epic",
    cat: "Coding",
    xp: 7500,
    coins: 1500,
    stat: "int",
    req: 25,
  },
  {
    id: 70,
    name: "Fique 6 meses sem errar a rotina 05h",
    tier: "epic",
    cat: "Disciplina",
    xp: 8000,
    coins: 1600,
    stat: "dis",
    req: 30,
  },
  {
    id: 71,
    name: "Primeiro faturamento de USD 1k com SaaS",
    tier: "epic",
    cat: "Nômada",
    xp: 9000,
    coins: 1800,
    stat: "int",
    req: 28,
  },
  {
    id: 72,
    name: "Mestrado ou Especialização Internacional",
    tier: "epic",
    cat: "Inteligência",
    xp: 8500,
    coins: 1700,
    stat: "int",
    req: 30,
  },
  {
    id: 73,
    name: "Corra uma Ultra Maratona (50km)",
    tier: "epic",
    cat: "Força",
    xp: 10000,
    coins: 2000,
    stat: "for",
    req: 35,
  },
  {
    id: 74,
    name: "Dê uma palestra em um grande evento (JSConf)",
    tier: "epic",
    cat: "Carisma",
    xp: 7000,
    coins: 1400,
    stat: "cha",
    req: 25,
  },
  {
    id: 75,
    name: "Construa uma audiência de 10k no Twitter/LI",
    tier: "epic",
    cat: "Carisma",
    xp: 6000,
    coins: 1200,
    stat: "cha",
    req: 15,
  },

  // --- LEGENDARY (IDs 30-33 + 76-100) ---
  {
    id: 30,
    name: "Senior Engineer tier-1",
    tier: "legendary",
    cat: "Coding",
    xp: 20000,
    coins: 5000,
    stat: "int",
    req: 40,
  },
  {
    id: 31,
    name: "Nômade digital por 1 ano",
    tier: "legendary",
    cat: "Nômada",
    xp: 30000,
    coins: 8000,
    stat: "cha",
    req: 35,
  },
  {
    id: 32,
    name: "Human flag: 3 segundos",
    tier: "legendary",
    cat: "Força",
    xp: 15000,
    coins: 4000,
    stat: "for",
    req: 45,
  },
  {
    id: 33,
    name: "Empresa USD 10k/mês",
    tier: "legendary",
    cat: "Nômada",
    xp: 50000,
    coins: 10000,
    stat: "dis",
    req: 50,
  },
  {
    id: 76,
    name: "One-arm Pull-up",
    tier: "legendary",
    cat: "Força",
    xp: 18000,
    coins: 4500,
    stat: "for",
    req: 50,
  },
  {
    id: 77,
    name: "Fundador de uma Startup lucrativa",
    tier: "legendary",
    cat: "Nômada",
    xp: 45000,
    coins: 9000,
    stat: "int",
    req: 55,
  },
  {
    id: 78,
    name: "Escreva e publique um livro físico",
    tier: "legendary",
    cat: "Inteligência",
    xp: 25000,
    coins: 6000,
    stat: "cha",
    req: 45,
  },
  {
    id: 79,
    name: "Domine 4 idiomas fluentemente",
    tier: "legendary",
    cat: "Inteligência",
    xp: 35000,
    coins: 8500,
    stat: "int",
    req: 60,
  },
  {
    id: 80,
    name: "Ironman Completo",
    tier: "legendary",
    cat: "Força",
    xp: 40000,
    coins: 9500,
    stat: "for",
    req: 65,
  },
  {
    id: 81,
    name: "Staff Engineer em Big Tech",
    tier: "legendary",
    cat: "Coding",
    xp: 30000,
    coins: 7000,
    stat: "int",
    req: 60,
  },
  {
    id: 82,
    name: "Compre um imóvel apenas com USD de SaaS",
    tier: "legendary",
    cat: "Nômada",
    xp: 60000,
    coins: 15000,
    stat: "dis",
    req: 70,
  },
  {
    id: 83,
    name: "Poder de influência: 100k+ seguidores",
    tier: "legendary",
    cat: "Carisma",
    xp: 30000,
    coins: 8000,
    stat: "cha",
    req: 50,
  },
  {
    id: 84,
    name: "1 ano de silêncio (Meditação Diária)",
    tier: "legendary",
    cat: "Disciplina",
    xp: 25000,
    coins: 6000,
    stat: "dis",
    req: 55,
  },
  {
    id: 85,
    name: "Consiga Cidadania Estrangeira por mérito",
    tier: "legendary",
    cat: "Nômada",
    xp: 40000,
    coins: 10000,
    stat: "cha",
    req: 70,
  },
  {
    id: 86,
    name: "CTO de uma Scale-up internacional",
    tier: "legendary",
    cat: "Coding",
    xp: 50000,
    coins: 12000,
    stat: "int",
    req: 75,
  },
  {
    id: 87,
    name: "Biohacking: Reverter idade biológica em 2 anos",
    tier: "legendary",
    cat: "Disciplina",
    xp: 35000,
    coins: 9000,
    stat: "for",
    req: 65,
  },
  {
    id: 88,
    name: "Crie uma tecnologia que 1M+ de pessoas usam",
    tier: "legendary",
    cat: "Coding",
    xp: 100000,
    coins: 25000,
    stat: "int",
    req: 80,
  },
  {
    id: 89,
    name: "Retiro de 10 dias em silêncio total (Vipassana)",
    tier: "legendary",
    cat: "Disciplina",
    xp: 20000,
    coins: 5000,
    stat: "dis",
    req: 40,
  },
  {
    id: 90,
    name: "Domínio da Parada de Mão (2 min)",
    tier: "legendary",
    cat: "Força",
    xp: 15000,
    coins: 4000,
    stat: "for",
    req: 40,
  },
  {
    id: 91,
    name: "Zero dívidas e reserva de 5 anos",
    tier: "legendary",
    cat: "Nômada",
    xp: 40000,
    coins: 10000,
    stat: "dis",
    req: 60,
  },
  {
    id: 92,
    name: "Visite os 7 continentes",
    tier: "legendary",
    cat: "Nômada",
    xp: 70000,
    coins: 15000,
    stat: "cha",
    req: 80,
  },
  {
    id: 93,
    name: "Consiga um convite para o TED Global",
    tier: "legendary",
    cat: "Carisma",
    xp: 50000,
    coins: 12000,
    stat: "cha",
    req: 85,
  },
  {
    id: 94,
    name: "Mestre de Algoritmos (Top 1% LeetCode)",
    tier: "legendary",
    cat: "Coding",
    xp: 40000,
    coins: 9000,
    stat: "int",
    req: 70,
  },
  {
    id: 95,
    name: "Ensine 1000+ alunos em sua própria escola",
    tier: "legendary",
    cat: "Carisma",
    xp: 35000,
    coins: 8500,
    stat: "cha",
    req: 65,
  },
  {
    id: 96,
    name: "Hackathon Winner (Global)",
    tier: "legendary",
    cat: "Coding",
    xp: 30000,
    coins: 7500,
    stat: "int",
    req: 55,
  },
  {
    id: 97,
    name: "Crie um framework adotado pela comunidade",
    tier: "legendary",
    cat: "Coding",
    xp: 60000,
    coins: 15000,
    stat: "int",
    req: 85,
  },
  {
    id: 98,
    name: "Soberania Alimentar (Plante o que come)",
    tier: "legendary",
    cat: "Disciplina",
    xp: 25000,
    coins: 6000,
    stat: "dis",
    req: 60,
  },
  {
    id: 99,
    name: "Aura de Deus: Presença inabalável",
    tier: "legendary",
    cat: "Espiritual",
    xp: 100000,
    coins: 30000,
    stat: "dis",
    req: 90,
  },
  {
    id: 100,
    name: "Transcenda o Nível 100: O Novo Kaisui",
    tier: "legendary",
    cat: "Evolução",
    xp: 250000,
    coins: 50000,
    stat: "int",
    req: 100,
  },
];
const GYMS_DEFAULT = [
  { id: "g0", name: "Aquecimento", weight: 60 },
  { id: "g1", name: "Supino", weight: 54 },
  { id: "g2", name: "Leg Press", weight: 50 },
  { id: "g3", name: "Pulley", weight: 11 },
  { id: "g4", name: "Desenvolvimento", weight: 44 },
  { id: "g5", name: "Triangulo", weight: 100 },
  { id: "g6", name: "Abs", weight: 0 },
  { id: "g7", name: "Katar", weight: 5 },
];

const CALISTHENICS_DB = [
  {
    id: "handstand",
    name: "Handstand (Parada de Mão)",
    progressions: [
      { id: "hs1", name: "Pike Plank (30s)" },
      { id: "hs2", name: "Pike Push-ups (10 reps)" },
      { id: "hs3", name: "Wall Walk" },
      { id: "hs4", name: "Wall Handstand (30s)" },
      { id: "hs5", name: "Wall Handstand (60s)" },
      { id: "hs6", name: "Wall Handstand Shoulder Taps" },
      { id: "hs7", name: "Free Handstand Kick-ups" },
      { id: "hs8", name: "Free Handstand (5s)" },
      { id: "hs9", name: "Free Handstand (10s+)" },
      { id: "hs10", name: "Handstand Push-ups" }
    ]
  },
  {
    id: "planche",
    name: "Planche",
    progressions: [
      { id: "pl1", name: "Planche Lean (20s)" },
      { id: "pl2", name: "Frog Stand (20s)" },
      { id: "pl3", name: "Advanced Frog Stand (20s)" },
      { id: "pl4", name: "Tuck Planche (10s)" },
      { id: "pl5", name: "Advanced Tuck Planche (10s)" },
      { id: "pl6", name: "Straddle Planche (5s)" },
      { id: "pl7", name: "Full Planche (3s+)" }
    ]
  },
  {
    id: "muscleup",
    name: "Muscle-up",
    progressions: [
      { id: "mu1", name: "Pull-ups Explosivos (Peito na barra)" },
      { id: "mu2", name: "Straight Bar Dips" },
      { id: "mu3", name: "Muscle-up Negativo" },
      { id: "mu4", name: "Muscle-up com Elástico" },
      { id: "mu5", name: "Primeiro Muscle-up Limpo" },
      { id: "mu6", name: "Muscle-up (5+ reps)" }
    ]
  },
  {
    id: "frontlever",
    name: "Front Lever",
    progressions: [
      { id: "fl1", name: "Tuck Front Lever (20s)" },
      { id: "fl2", name: "Advanced Tuck Front Lever (15s)" },
      { id: "fl3", name: "One Leg Front Lever (10s)" },
      { id: "fl4", name: "Straddle Front Lever (5s)" },
      { id: "fl5", name: "Full Front Lever (3s+)" }
    ]
  },
  {
    id: "humanflag",
    name: "Human Flag (Bandeira Humana)",
    progressions: [
      { id: "hf1", name: "Vertical Flag" },
      { id: "hf2", name: "Tuck Human Flag" },
      { id: "hf3", name: "Straddle Human Flag" },
      { id: "hf4", name: "Full Human Flag" }
    ]
  },
  {
    id: "lsit",
    name: "L-Sit",
    progressions: [
      { id: "ls1", name: "Tuck L-Sit (Chão)" },
      { id: "ls2", name: "L-Sit com uma perna (20s)" },
      { id: "ls3", name: "Full L-Sit (10s)" },
      { id: "ls4", name: "V-Sit" }
    ]
  }
];

const ROLEPLAYS_DB = [
  // --- TIER: CAREER & CODING (IDs 1-20) ---
  {
    id: 1,
    title: "TECHNICAL INTERVIEW — GOOGLE",
    diff: "HARD",
    xp: 500,
    stat: "cha",
    color: "#EF4444",
    desc: "Entrevista técnica no Google. Sistemas distribuídos.",
    prompt:
      "Explain how you would design a distributed cache system like Redis. Consider CAP theorem, consistency, and availability.",
    hint: "Fale em voz alta. Mencione replicação e eviction policies.",
  },
  {
    id: 2,
    title: "SALARY NEGOTIATION",
    diff: "EPIC",
    xp: 700,
    stat: "cha",
    color: "#F59E0B",
    desc: "Oferta de USD 95k. Você quer USD 120k. Negocie.",
    prompt:
      "Thank you for the offer. I've reviewed the package and I'd like to discuss the base salary. Based on my research...",
    hint: "Não aceite a primeira oferta. Use ancoragem. Demonstre valor.",
  },
  {
    id: 5,
    title: "JOB INTERVIEW — BEHAVIORAL",
    diff: "NORMAL",
    xp: 350,
    stat: "cha",
    color: "#10B981",
    desc: "Tell me about a time you failed. Responda em inglês.",
    prompt:
      "Tell me about a challenge you faced at work and how you overcame it. Use the STAR method.",
    hint: "Situação → Tarefa → Ação → Resultado. Seja específico.",
  },
  {
    id: 6,
    title: "CODE REVIEW CONFLICT",
    diff: "NORMAL",
    xp: 300,
    stat: "cha",
    color: "#3B82F6",
    desc: "Um Sênior detonou seu PR de forma rude. Responda com assertividade.",
    prompt:
      "I appreciate the feedback on the architecture. However, I disagree with the comment about [X] because...",
    hint: "Seja profissional. Defenda sua lógica com dados, não com ego.",
  },
  {
    id: 7,
    title: "SYSTEM DESIGN: NETFLIX",
    diff: "HARD",
    xp: 550,
    stat: "cha",
    color: "#EF4444",
    desc: "Como você escalaria um serviço de streaming para 100M de usuários?",
    prompt:
      "Design a video streaming service. Talk about CDN, Microservices, and Load Balancing.",
    hint: "Pense em latência e disponibilidade global.",
  },

  // --- TIER: NETWORKING & SOCIAL (IDs 21-40) ---
  {
    id: 3,
    title: "COLD APPROACH — NETWORKING",
    diff: "NORMAL",
    xp: 300,
    stat: "cha",
    color: "#3B82F6",
    desc: "Conferência tech. Senior Eng da sua empresa dos sonhos.",
    prompt:
      "Hey! I noticed your badge. I've been following your team's work and I'd love to get your perspective on...",
    hint: "Seja genuíno. Faça perguntas inteligentes. Troque contatos.",
  },
  {
    id: 8,
    title: "THE AFTER-PARTY CHAT",
    diff: "EASY",
    xp: 150,
    stat: "cha",
    color: "#10B981",
    desc: "Conversa casual em um happy hour da empresa em Londres.",
    prompt:
      "So, what do you usually do for fun around here? I've just moved to the city and I'm looking for tips.",
    hint: 'Treine o "Small Talk". Não fale apenas de trabalho.',
  },
  {
    id: 9,
    title: "LINKEDIN REACH OUT",
    diff: "NORMAL",
    xp: 200,
    stat: "cha",
    color: "#3B82F6",
    desc: "Mandar um áudio (simulado) para um Recrutador gringo.",
    prompt:
      "Hi [Name], I'm a Fullstack Dev and I've been building [Project]. I saw the opening at [Company] and...",
    hint: "Curto, grosso e focado em como você resolve o problema deles.",
  },

  // --- TIER: NOMAD SURVIVAL (IDs 41-60) ---
  {
    id: 10,
    title: "THE BORDER CONTROL",
    diff: "NORMAL",
    xp: 250,
    stat: "cha",
    color: "#F59E0B",
    desc: "Imigração desconfiada no aeroporto dos EUA ou UK.",
    prompt:
      "Officer: What is the purpose of your visit? How long are you staying? Show me your return ticket.",
    hint: "Calma. Respostas curtas. Olho no olho. Você é um cidadão do mundo.",
  },
  {
    id: 11,
    title: "LOST IN TOKYO",
    diff: "HARD",
    xp: 400,
    stat: "cha",
    color: "#7C3AED",
    desc: "Sem bateria, sem mapa. Peça ajuda para chegar ao hotel.",
    prompt:
      "Excuse me, I'm terribly sorry to bother you, but my phone died. Could you point me towards [X] station?",
    hint: "Use polidez extrema. Tente ler a linguagem corporal.",
  },
  {
    id: 12,
    title: "APARTMENT VIEWING (BERLIN)",
    diff: "NORMAL",
    xp: 300,
    stat: "cha",
    color: "#3B82F6",
    desc: "Convença o proprietário de que você é o inquilino perfeito.",
    prompt:
      "I'm a software engineer, I work remotely, I'm very quiet and I'm looking for a long-term stay...",
    hint: "Demonstre estabilidade financeira e organização.",
  },

  // --- TIER: FILOSOFIA & LIDERANÇA (IDs 61-80) ---
  {
    id: 13,
    title: "DEBATE: BELL HOOKS ETHICS",
    diff: "HARD",
    xp: 600,
    stat: "cha",
    color: "#7C3AED",
    desc: "Defenda a ética do amor na tecnologia contra um niilista.",
    prompt:
      "Dominator culture in tech leads to burnout. We need to implement a community-based approach because...",
    hint: "Use argumentos intelectuais. Não se altere emocionalmente.",
  },
  {
    id: 14,
    title: "FIRING A TOXIC CLIENT",
    diff: "EPIC",
    xp: 800,
    stat: "cha",
    color: "#EF4444",
    desc: "Demita um cliente que paga bem mas drena sua alma.",
    prompt:
      "I've decided to move in a different direction with my services. I believe our workflows are no longer a fit...",
    hint: "Firmeza absoluta. Não dê margem para negociação. Sua paz tem preço.",
  },
  {
    id: 15,
    title: "MENTORING A JUNIOR",
    diff: "NORMAL",
    xp: 300,
    stat: "cha",
    color: "#10B981",
    desc: "Explique um bug complexo sem fazer a pessoa se sentir burra.",
    prompt:
      "Don't worry, I've faced this exact same issue before. Let's look at the stack trace together and...",
    hint: "Empatia + Didática. Treine a paciência do mestre.",
  },

  // --- TIER: LEGENDARY (IDs 81-100) ---
  {
    id: 4,
    title: "INVESTOR PITCH",
    diff: "LEGENDARY",
    xp: 1500,
    stat: "cha",
    color: "#7C3AED",
    desc: "2 minutos para convencer um VC. Vá.",
    prompt:
      "We're solving a $2B problem. Our solution is [X]. We've achieved [traction]. We're raising [amount]...",
    hint: "Métricas reais. Urgência. Por que AGORA. Por que VOCÊ.",
  },
  {
    id: 16,
    title: "THE CRISIS KEYNOTE",
    diff: "LEGENDARY",
    xp: 2000,
    stat: "cha",
    color: "#EF4444",
    desc: "O sistema caiu globalmente. Você é o CTO. Fale para a imprensa.",
    prompt:
      "We are aware of the outage. Our engineering team is working around the clock. We prioritize data integrity...",
    hint: "Transparência. Autoridade. Transmitir segurança no caos.",
  },
  {
    id: 17,
    title: "WORLD SUMMIT OPENING",
    diff: "LEGENDARY",
    xp: 2500,
    stat: "cha",
    color: "#F59E0B",
    desc: "Discurso de abertura para 5.000 pessoas em inglês.",
    prompt:
      "Welcome everyone. Today we are not just talking about code, we are talking about the future of identity...",
    hint: "Pausas dramáticas. Projeção de voz. Aura de Deus Kaisui.",
  },
];

const KARATE_DB = [
  {
    belt: "Faixa Branca",
    color: "#ffffff",
    textColor: "#000000",
    sections: [
      {
        title: "Dachi (Bases)",
        moves: [
          { name: "Reisuku-dachi", url: "https://www.youtube.com/watch?v=pxOJRJ9pIYM" },
          { name: "Musubi-dachi", url: "https://www.youtube.com/watch?v=wGkfrQ9PJ0Q" },
          { name: "Shizentai", url: "https://www.youtube.com/watch?v=f4GYC1gv7Uw" },
          { name: "Zenkutso-dachi", url: "https://www.youtube.com/watch?v=SwfH3J9QsPA" },
          { name: "Kokutso-dachi", url: "https://www.youtube.com/watch?v=dQSv2wKgBiE" },
          { name: "Kiba-dachi", url: "https://www.youtube.com/watch?v=CMu2a1-Av84" }
        ]
      },
      {
        title: "Uke-waza (Técnicas de Defesas)",
        moves: [
          { name: "Jodan-age-uke", url: "https://www.youtube.com/watch?v=rLAUO-_Mzpo" },
          { name: "Soto-uke", url: "https://www.youtube.com/watch?v=4RWYnJKNiGc" },
          { name: "Uchi-uke", url: "https://www.youtube.com/watch?v=neAANL1sATY" },
          { name: "Jodan-jiju-uke", url: "https://www.youtube.com/watch?v=jnl_oJN2CmE" },
          { name: "Guedan-jiju-uke", url: "https://www.youtube.com/watch?v=wx-KNqQRPyg" },
          { name: "Shuto-uke", url: "https://www.youtube.com/watch?v=t2YAyFd2xuc" },
          { name: "Guedan-barai", url: "https://www.youtube.com/watch?v=JcJgbp8P4sI" }
        ]
      },
      {
        title: "Katas",
        moves: [
          { name: "Taikyoku Shodan", url: "https://www.youtube.com/watch?v=jH6bv4GDpp0" },
          { name: "Heian Shodan", url: "https://www.youtube.com/watch?v=q1Rg8rUpjjw" }
        ]
      }
    ]
  }
];

const REWARDS = [
  // --- TIER 1: RITUAIS BÁSICOS (Lvl 1-5) ---
  { id: 1, name: "Café Gourmet em Local Novo", cost: 50, req: 1, emoji: "☕" },
  {
    id: 2,
    name: "Livro de Bell Hooks (Físico)",
    cost: 100,
    req: 2,
    emoji: "📖",
  },
  { id: 3, name: "Curso Online Elite", cost: 200, req: 2, emoji: "🎓" },
  { id: 4, name: "Tênis de Treino Premium", cost: 300, req: 3, emoji: "👟" },
  { id: 5, name: "Assinatura Premium (Foco)", cost: 150, req: 2, emoji: "🎵" },
  {
    id: 6,
    name: "Suplementação Base (Creatina)",
    cost: 250,
    req: 3,
    emoji: "💊",
  },
  {
    id: 7,
    name: "Caderno de Journaling de Couro",
    cost: 120,
    req: 1,
    emoji: "📓",
  },
  { id: 8, name: "Mousse/Cera de Cabelo Alpha", cost: 80, req: 2, emoji: "💇" },
  { id: 9, name: "Garrafa Térmica 2L (Bruta)", cost: 110, req: 1, emoji: "💧" },
  { id: 10, name: "Refeição Cheat S/ Culpa", cost: 180, req: 4, emoji: "🍕" },

  // --- TIER 2: EQUIPAMENTO DE CAMPO (Lvl 6-15) ---
  { id: 11, name: "Novo Notebook Setup", cost: 1200, req: 10, emoji: "💻" },
  { id: 12, name: "Mentoria 1:1 Exclusiva", cost: 1000, req: 10, emoji: "🧠" },
  { id: 13, name: "Viagem: Buenos Aires", cost: 1500, req: 15, emoji: "✈️" },
  { id: 14, name: "Fone Noise Cancelling", cost: 800, req: 8, emoji: "🎧" },
  {
    id: 15,
    name: "Teclado Mecânico (Deep Work)",
    cost: 400,
    req: 7,
    emoji: "⌨️",
  },
  { id: 16, name: "Mouse Ergonômico Pro", cost: 350, req: 7, emoji: "🖱️" },
  { id: 17, name: "Mochila Antifurto Nômade", cost: 500, req: 9, emoji: "🎒" },
  {
    id: 18,
    name: "Kindle (Biblioteca Portátil)",
    cost: 450,
    req: 6,
    emoji: "📚",
  },
  {
    id: 19,
    name: "Smartwatch (Monitoramento)",
    cost: 900,
    req: 12,
    emoji: "⌚",
  },
  {
    id: 20,
    name: "Microfone de Alta Fidelidade",
    cost: 600,
    req: 11,
    emoji: "🎙️",
  },

  // --- TIER 3: ESTILO DE VIDA NÔMADE (Lvl 16-30) ---
  { id: 21, name: "Setup Nômade Completo", cost: 2000, req: 20, emoji: "🔋" },
  { id: 22, name: "Viagem: Europa 7 dias", cost: 4000, req: 25, emoji: "🌍" },
  { id: 23, name: "Viagem: Japão", cost: 5500, req: 30, emoji: "🗾" },
  {
    id: 24,
    name: "Cadeira Ergonômica de Elite",
    cost: 1800,
    req: 18,
    emoji: "💺",
  },
  {
    id: 25,
    name: "Upgrade: Monitor Ultra-Wide",
    cost: 2200,
    req: 22,
    emoji: "🖥️",
  },
  { id: 26, name: "Mês em Coworking Premium", cost: 700, req: 16, emoji: "🏢" },
  {
    id: 27,
    name: "Passaporte Renovado (Global)",
    cost: 300,
    req: 15,
    emoji: "🛂",
  },
  {
    id: 28,
    name: "Kit de Lentes p/ Smartphone",
    cost: 400,
    req: 17,
    emoji: "📸",
  },
  {
    id: 29,
    name: "Curso Presencial Estrangeiro",
    cost: 3000,
    req: 28,
    emoji: "🗺️",
  },
  {
    id: 30,
    name: "Look de Alfaiataria (Aura)",
    cost: 1500,
    req: 20,
    emoji: "👔",
  },

  // --- TIER 4: O ENGENHEIRO DE ALTO NÍVEL (Lvl 31-50) ---
  { id: 31, name: "MacBook Pro M3 Max", cost: 15000, req: 45, emoji: "🍎" },
  {
    id: 32,
    name: "Retiro Espiritual/Silêncio",
    cost: 3500,
    req: 35,
    emoji: "🧘",
  },
  { id: 33, name: "Workshop de Pilotagem", cost: 4500, req: 40, emoji: "🏎️" },
  { id: 34, name: "Salto de Paraquedas", cost: 2500, req: 32, emoji: "🪂" },
  { id: 35, name: "Relógio Suíço Analógico", cost: 8000, req: 48, emoji: "⌚" },
  {
    id: 36,
    name: "Jantar em Restaurante Michelin",
    cost: 2000,
    req: 33,
    emoji: "🍽️",
  },
  {
    id: 37,
    name: "Day Use em Hotel 5 Estrelas",
    cost: 1200,
    req: 31,
    emoji: "🏊",
  },
  {
    id: 38,
    name: "Investimento: 1ª Ação Real",
    cost: 5000,
    req: 38,
    emoji: "📈",
  },
  {
    id: 39,
    name: "Upgrade: Internet Fibra 2GB",
    cost: 600,
    req: 34,
    emoji: "🌐",
  },
  {
    id: 40,
    name: "Ensaio Fotográfico Profissional",
    cost: 1500,
    req: 36,
    emoji: "🤳",
  },

  // --- TIER 5: CONQUISTAS GLOBAIS (Lvl 51-70) ---
  {
    id: 41,
    name: "Viagem: Islândia (Aurora)",
    cost: 12000,
    req: 60,
    emoji: "🌌",
  },
  { id: 42, name: "Mês em Bali (Nomad Hub)", cost: 8000, req: 55, emoji: "🏝️" },
  {
    id: 43,
    name: "Mês em Portugal (Web Summit)",
    cost: 9000,
    req: 58,
    emoji: "🇵🇹",
  },
  {
    id: 44,
    name: "Escritório Privado Design",
    cost: 5000,
    req: 52,
    emoji: "🏛️",
  },
  {
    id: 45,
    name: "Tatuagem de Significado (Marco)",
    cost: 3000,
    req: 50,
    emoji: "🖋️",
  },
  {
    id: 46,
    name: "Experiência: Dirigir em Nürburgring",
    cost: 7000,
    req: 65,
    emoji: "🏁",
  },
  {
    id: 47,
    name: "Bicicleta Elétrica de Alta Gama",
    cost: 6000,
    req: 54,
    emoji: "🚲",
  },
  {
    id: 48,
    name: "Sistema de Som Audiófilo",
    cost: 4500,
    req: 51,
    emoji: "🔊",
  },
  {
    id: 49,
    name: "Mentoria com Referência Global",
    cost: 20000,
    req: 70,
    emoji: "👑",
  },
  {
    id: 50,
    name: "Curso de Mergulho (PADI)",
    cost: 3500,
    req: 53,
    emoji: "🤿",
  },

  // --- TIER 6: AURA E BIOHACKING (Lvl 71-90) ---
  { id: 51, name: "Anel Oura (Biohacking)", cost: 3000, req: 72, emoji: "💍" },
  {
    id: 52,
    name: "Banheira de Gelo (Recovery)",
    cost: 4000,
    req: 75,
    emoji: "🧊",
  },
  {
    id: 53,
    name: "Sauna Infravermelha Residencial",
    cost: 9000,
    req: 85,
    emoji: "🔥",
  },
  {
    id: 54,
    name: "Capa de Colchão Térmica (Sono)",
    cost: 2500,
    req: 73,
    emoji: "🛌",
  },
  {
    id: 55,
    name: "Check-up Completo (Biohacking)",
    cost: 5000,
    req: 80,
    emoji: "🩺",
  },
  {
    id: 56,
    name: "Mesa Elevatória Automática",
    cost: 3500,
    req: 71,
    emoji: "↕️",
  },
  {
    id: 57,
    name: "Fragrância de Assinatura (Luxo)",
    cost: 1800,
    req: 74,
    emoji: "🧪",
  },
  {
    id: 58,
    name: "Adega de Vinhos Selecionados",
    cost: 6000,
    req: 78,
    emoji: "🍷",
  },
  { id: 59, name: "Obra de Arte Original", cost: 10000, req: 82, emoji: "🖼️" },
  {
    id: 60,
    name: "Piano ou Instrumento de Luxo",
    cost: 15000,
    req: 88,
    emoji: "🎹",
  },

  // --- TIER 7: DEUS KAISUI (Lvl 91-100) ---
  {
    id: 61,
    name: "Primeira Classe Internacional",
    cost: 30000,
    req: 95,
    emoji: "🥂",
  },
  {
    id: 62,
    name: "Imóvel/Terreno (O Alicerce)",
    cost: 100000,
    req: 100,
    emoji: "🏡",
  },
  {
    id: 63,
    name: "Viagem: Safari na África",
    cost: 25000,
    req: 92,
    emoji: "🦁",
  },
  {
    id: 64,
    name: "Carro Esportivo de Luxo",
    cost: 200000,
    req: 100,
    emoji: "🏎️",
  },
  {
    id: 65,
    name: "Fundação de Caridade Própria",
    cost: 50000,
    req: 99,
    emoji: "🤝",
  },
  {
    id: 66,
    name: "Cruzeiro de Volta ao Mundo",
    cost: 80000,
    req: 98,
    emoji: "🚢",
  },
  {
    id: 67,
    name: "Hospedagem em Ilha Privada",
    cost: 40000,
    req: 96,
    emoji: "🏝️",
  },
  { id: 68, name: "Evento VIP em Mônaco", cost: 20000, req: 94, emoji: "🇲🇨" },
  {
    id: 69,
    name: "Assento em Voo Espacial (Futuro)",
    cost: 500000,
    req: 100,
    emoji: "🚀",
  },
  {
    id: 70,
    name: "Ouro em Barra (Reserva Real)",
    cost: 15000,
    req: 91,
    emoji: "📀",
  },

  // --- TIER 8: EXPERIÊNCIAS DE DOMÍNIO (Lvl Variado) ---
  { id: 71, name: "Aulas de Boxe/Muay Thai", cost: 400, req: 5, emoji: "🥊" },
  {
    id: 72,
    name: "Workshop de Culinária Saudável",
    cost: 350,
    req: 4,
    emoji: "👨‍🍳",
  },
  { id: 73, name: "Assinatura de Café Mensal", cost: 120, req: 3, emoji: "☕" },
  { id: 74, name: "Sessão de Terapia Alpha", cost: 300, req: 5, emoji: "🧠" },
  { id: 75, name: "Aulas de Dança/Expressão", cost: 250, req: 10, emoji: "🕺" },
  {
    id: 76,
    name: "Upgrade de Closet (Minimalista)",
    cost: 2000,
    req: 25,
    emoji: "🧥",
  },
  {
    id: 77,
    name: "Mochila de Trekking Profissional",
    cost: 800,
    req: 15,
    emoji: "🏔️",
  },
  {
    id: 78,
    name: "Kit de Primeiros Socorros Elite",
    cost: 200,
    req: 8,
    emoji: "🩹",
  },
  { id: 79, name: "Faca de Chef Japonesa", cost: 700, req: 20, emoji: "🔪" },
  { id: 80, name: "Escultura Decorativa Zen", cost: 400, req: 12, emoji: "🗿" },

  // --- TIER 9: TECNOLOGIA E FERRAMENTAS ---
  { id: 81, name: "Drone para Filmagens", cost: 3500, req: 40, emoji: "🛸" },
  {
    id: 82,
    name: "Estabilizador de Câmera (Gimbal)",
    cost: 1200,
    req: 30,
    emoji: "🎥",
  },
  { id: 83, name: "Impressora 3D (Criação)", cost: 2500, req: 45, emoji: "🖨️" },
  {
    id: 84,
    name: "Sistema de Backup NAS 20TB",
    cost: 4000,
    req: 50,
    emoji: "🗄️",
  },
  {
    id: 85,
    name: "Licença de Software Vitalícia",
    cost: 800,
    req: 20,
    emoji: "🔑",
  },
  {
    id: 86,
    name: "Projetor 4K p/ Cinema em Casa",
    cost: 3000,
    req: 35,
    emoji: "📽️",
  },
  {
    id: 87,
    name: "Câmera Mirrorless Profissional",
    cost: 10000,
    req: 60,
    emoji: "📸",
  },
  {
    id: 88,
    name: "Tablet de Desenho/Design",
    cost: 3000,
    req: 25,
    emoji: "🖋️",
  },
  { id: 89, name: "Home Theater Hi-Fi", cost: 7000, req: 55, emoji: "🔊" },
  {
    id: 90,
    name: "Servidor Dedicado p/ Projetos",
    cost: 500,
    req: 15,
    emoji: "🛰️",
  },

  // --- TIER 10: LEGADO E FINAL GAME ---
  {
    id: 91,
    name: "Publicação de Livro Próprio",
    cost: 5000,
    req: 85,
    emoji: "✍️",
  },
  {
    id: 92,
    name: "Palestra em Evento Global",
    cost: 10000,
    req: 90,
    emoji: "🎤",
  },
  {
    id: 93,
    name: "Consultoria de Imagem Pessoal",
    cost: 3000,
    req: 40,
    emoji: "🎭",
  },
  {
    id: 94,
    name: "Jantar de Networking Secreto",
    cost: 2500,
    req: 70,
    emoji: "🤫",
  },
  {
    id: 95,
    name: "Acesso a Clube de Membros",
    cost: 5000,
    req: 80,
    emoji: "🃏",
  },
  {
    id: 96,
    name: "Viagem: Everest Base Camp",
    cost: 15000,
    req: 93,
    emoji: "🏔️",
  },
  {
    id: 97,
    name: "Doação para Causa em seu Nome",
    cost: 5000,
    req: 60,
    emoji: "💎",
  },
  {
    id: 98,
    name: "Festa de Celebração Kai Sui",
    cost: 10000,
    req: 97,
    emoji: "🥳",
  },
  {
    id: 99,
    name: "Anel de Graduação de Platina",
    cost: 7000,
    req: 100,
    emoji: "💍",
  },
  {
    id: 100,
    name: "O Próximo Grande Passo",
    cost: 1000000,
    req: 100,
    emoji: "🌌",
  },
];

// ════════════════════════════════════════
// STATE
// ════════════════════════════════════════
function defaultState() {
  return {
    xp: 0,
    hp: 100,
    maxHp: 100,
    coins: 0,
    xpToday: 0,
    stats: { for: 0, int: 0, dis: 0, cha: 0 },
    completedDaily: [],
    completedMissions: [],
    gymExercises: JSON.parse(JSON.stringify(GYMS_DEFAULT)),
    gymDone: [],
    treinos100: [],
    streak: 0,
    maxStreak: 0,
    completedRoleplay: [],
    customHabits: [],
    customMissions: [],
    customRoleplays: [],
    calisthenics: {}, // { progId: true }
    lastDate: new Date().toDateString(),
    alterEgoName: "KAI",
    alterEgoTone: "direto e brutal",
    chatHistory: [],
    name: "KAISUI",
    hpRecoveriesToday: 0,
    globalStreak: 0,
    globalMaxStreak: 0,
    lastStreakDate: null,
  };
}

let S = (() => {
  try {
    const r = JSON.parse(localStorage.getItem(SK));
    if (!r) return defaultState();
    const today = new Date().toDateString();
    if (r.lastDate !== today) {
      r.completedDaily = [];
      r.gymDone = [];
      r.xpToday = 0;
      r.lastDate = today;
      r.hpRecoveriesToday = 0;
    }
    if (!r.gymExercises)
      r.gymExercises = JSON.parse(JSON.stringify(GYMS_DEFAULT));
    if (!r.chatHistory) r.chatHistory = [];
    if (!r.alterEgoName) r.alterEgoName = "KAI";
    if (!r.alterEgoTone) r.alterEgoTone = "direto e brutal";
    if (!r.treinos100) r.treinos100 = [];
    if (!r.streak) r.streak = 0;
    if (!r.maxStreak) r.maxStreak = 0;
    if (!r.xpToday) r.xpToday = 0;
    if (!r.hpRecoveriesToday) r.hpRecoveriesToday = 0;
    if (!r.globalStreak) r.globalStreak = 0;
    if (!r.globalMaxStreak) r.globalMaxStreak = 0;
    if (!r.lastStreakDate) r.lastStreakDate = null;
    if (!r.customHabits) r.customHabits = [];
    if (!r.customMissions) r.customMissions = [];
    if (!r.customRoleplays) r.customRoleplays = [];
    if (!r.calisthenics) r.calisthenics = {};
    return r;
  } catch (e) {
    return defaultState();
  }
})();

function save() {
  localStorage.setItem(SK, JSON.stringify(S));
}

// ════════════════════════════════════════
// HELPERS
// ════════════════════════════════════════
const lvl = () => Math.max(0, Math.floor(S.xp / 1000));
const xpIn = () => S.xp % 1000;
const rank = () => {
  let l = lvl();
  for (let r of [...RANKS].reverse()) if (l >= r.min) return r;
  return RANKS[0];
};

// Calcula multiplicador baseado no streak global
function getMultiplier() {
  if (S.globalStreak >= 7) return 1.25;
  if (S.globalStreak >= 3) return 1.1;
  return 1.0;
}

// Atualiza streak global (chamar ao completar qualquer hábito)
function updateGlobalStreak() {
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  if (S.lastStreakDate === today) return; // já atualizou hoje

  if (S.lastStreakDate === yesterday) {
    S.globalStreak++;
  } else {
    S.globalStreak = 1;
  }

  if (S.globalStreak > S.globalMaxStreak) S.globalMaxStreak = S.globalStreak;
  S.lastStreakDate = today;
  save();
}

function addXP(v, stat) {
  const prev = lvl();
  const multiplier = v > 0 ? getMultiplier() : 1;
  const finalV = v > 0 ? Math.floor(v * multiplier) : v;

  S.xp = Math.max(0, S.xp + finalV);
  if (v > 0) {
    S.xpToday = Math.max(0, (S.xpToday || 0) + finalV);
    if (stat) S.stats[stat] = (S.stats[stat] || 0) + Math.ceil(finalV / 10);
  }
  save();

  // Aplica bônus de atributo funcional (HP máximo baseado em força)
  const newMaxHp = 100 + Math.floor((S.stats.for || 0) / 100);
  if (newMaxHp > S.maxHp) {
    S.maxHp = newMaxHp;
    S.hp = Math.min(S.hp + (newMaxHp - S.maxHp), S.maxHp);
  }

  const now = lvl();
  if (now > prev) showLvlUp(now);
  updateAllUI();

  // Feedback háptico se disponível
  if (v > 0 && window.navigator.vibrate) window.navigator.vibrate(50);
}

function modHP(v) {
  S.hp = Math.max(0, Math.min(S.maxHp, S.hp + v));
  if (S.hp === 0) {
    const loss = Math.floor(xpIn() * 0.5);
    S.xp = Math.max(0, S.xp - loss);
    S.hp = S.maxHp;
    toast("⚠️ DEATH — " + loss + " XP PERDIDO", "fail", 4000);
  }
  save();
  updateAllUI();
}

function recoverHP() {
  if (S.hpRecoveriesToday >= 3) {
    toast("⚠️ Limite de recuperações diárias atingido (3/3)", "fail", 3000);
    return;
  }
  if (S.coins < 50) {
    toast("❌ Coins insuficientes! Necessário 50 coins", "fail", 3000);
    return;
  }
  S.coins -= 50;
  S.hpRecoveriesToday++;
  modHP(20);
  toast("◈ +20 HP recuperado (50 coins)", "ok");
  if (window.navigator.vibrate) window.navigator.vibrate(50);
}

// ════════════════════════════════════════
// NAVIGATION
// ════════════════════════════════════════
let cur = "home";
function goTo(name) {
  cur = name;
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".nav-btn")
    .forEach((b) => b.classList.remove("active"));
  const sc = document.getElementById("screen-" + name);
  if (sc) sc.classList.add("active");
  const nb = document.getElementById("nav-" + name);
  if (nb) nb.classList.add("active");
  document.getElementById("gym-fab").style.display =
    name === "academia" ? "flex" : "none";
  document.getElementById("screen-area").scrollTop = 0;
  if (name === "ai") initAIScreen();
  renderScreen(name);
}

// ════════════════════════════════════════
// RENDER
// ════════════════════════════════════════
function renderScreen(n) {
  switch (n) {
    case "home":
      renderHome();
      break;
    case "habitos":
      renderHabitos();
      break;
    case "missoes":
      renderMissoes();
      break;
    case "academia":
      renderAcademia();
      break;
    case "treinos100":
      renderTreinos100();
      break;
    case "roleplays":
      renderRoleplays();
      break;
    case "perfil":
      renderPerfil();
      break;
    case "calistenia":
      renderCalistenia();
      break;
    case "karate":
      renderKarate();
      break;
  }
}

function updateAllUI() {
  renderScreen(cur);
  if (cur === "calistenia") renderCalistenia();

  // Elementos comuns
  const lvlVal = lvl();
  const xpInVal = xpIn();
  const xpPercent = (xpInVal / 1000) * 100;

  document.querySelectorAll("#h-lvl, #h-lvl2, #p-lvl").forEach((el) => {
    if (el) el.textContent = lvlVal;
  });
  const xbar = document.getElementById("h-xpbar");
  if (xbar) xbar.style.width = xpPercent + "%";
  const xpin = document.getElementById("h-xpin");
  if (xpin) xpin.textContent = xpInVal;
  const xtot = document.getElementById("h-xptot");
  if (xtot) xtot.textContent = S.xp.toLocaleString();
  const hcoins = document.getElementById("h-coins");
  if (hcoins) hcoins.textContent = S.coins;
  const hday = document.getElementById("h-xpday");
  if (hday) hday.textContent = S.xpToday;
  const hdd = document.getElementById("h-daily-done");
  if (hdd) hdd.textContent = S.completedDaily.length;
  const hdt = document.getElementById("h-daily-total");
  if (hdt) hdt.textContent = DAILY_TASKS.length;
  const hmis = document.getElementById("h-missions");
  if (hmis) hmis.textContent = S.completedMissions.length;
  const htot = document.getElementById("h-treinos");
  if (htot) htot.textContent = S.treinos100.length;
  const hsub = document.getElementById("h-tasks-sub");
  if (hsub)
    hsub.textContent =
      S.completedDaily.filter((id) => id <= 3).length + "/3 concluídas";

  // Multiplier display
  const mult = getMultiplier();
  const multDisplay = document.getElementById("multiplier-display");
  if (multDisplay) {
    if (mult > 1) {
      multDisplay.innerHTML = `<span class="multiplier-badge">🔥 ${mult}x MULTIPLICADOR (Streak: ${S.globalStreak} dias)</span>`;
    } else {
      multDisplay.innerHTML = `<span style="font-size: 11px; color: var(--muted);">Complete hábitos por 3+ dias para ativar multiplicador!</span>`;
    }
  }

  // Next reward preview
  const nextReward = [...REWARDS]
    .filter((r) => r.req <= lvlVal && r.cost > S.coins)
    .sort((a, b) => a.cost - b.cost)[0];
  const nextRewardName = document.getElementById("next-reward-name");
  const nextRewardCost = document.getElementById("next-reward-cost");
  const nextRewardProgress = document.getElementById("next-reward-progress");
  if (nextRewardName && nextRewardCost && nextRewardProgress && nextReward) {
    nextRewardName.textContent = nextReward.emoji + " " + nextReward.name;
    nextRewardCost.textContent = nextReward.cost + " coins";
    const percent = Math.min(
      100,
      Math.floor((S.coins / nextReward.cost) * 100),
    );
    nextRewardProgress.textContent = percent + "%";
  } else if (nextRewardName && nextRewardCost && nextRewardProgress) {
    nextRewardName.textContent = "🏆 Todas conquistas desbloqueadas!";
    nextRewardCost.textContent = "Parabéns!";
    nextRewardProgress.textContent = "100%";
  }
}

function renderHome() {
  const tl = document.getElementById("h-task-list");
  if (tl)
    tl.innerHTML = DAILY_TASKS.slice(0, 3)
      .map((t) => {
        const d = S.completedDaily.some(id => String(id) === String(t.id));
        return `<div class="task-row ${d ? "done" : ""}" onclick="toggleDaily('${t.id}')">
            <div class="task-check">${d ? "✓" : ""}</div>
            <div class="task-label">${t.icon} ${t.name}</div>
            ${d ? '<span class="task-badge">+' + t.xp + " XP</span>" : ""}
          </div>`;
      })
      .join("");

  const hl = document.getElementById("h-habits-list");
  if (hl)
    hl.innerHTML = BAD_HABITS.slice(0, 3)
      .map(
        (h) => `
          <div class="habit-row" onclick="applyBad('${h.id}')">
            <span style="font-size:18px">☠</span>
            <div style="flex:1">
              <div style="font-size:14px;font-weight:600">${h.name}</div>
              <div style="font-size:11px;color:var(--muted);font-family:'JetBrains Mono',monospace">-${h.xpL} XP · -${h.hpL} HP</div>
            </div>
            <span style="color:var(--red);font-size:18px">›</span>
          </div>`,
      )
      .join("");
}

function renderHabitos() {
  const dl = document.getElementById("daily-list");
  if (dl) {
    const allHabits = [...DAILY_TASKS, ...S.customHabits];
    dl.innerHTML = allHabits.map((t) => {
      const d = S.completedDaily.some(id => String(id) === String(t.id));
      const isCustom = typeof t.id === 'string' && t.id.startsWith('custom_');
      return `<div class="task-row ${d ? "done" : ""}" style="position:relative" onclick="toggleDaily('${t.id}')">
              <div class="task-check">${d ? "✓" : ""}</div>
              <div class="task-label">${t.icon} ${t.name}</div>
              <span class="task-badge" style="${d ? "background:rgba(16,185,129,.15);color:var(--green)" : ""}">${d ? "✓ " : "+"}${t.xp} XP</span>
            ${isCustom ? `<button onclick="event.stopPropagation();deleteHabit('${t.id}')" style="background:none; border:none; color:var(--red); cursor:pointer; font-size:16px; padding:0 10px">×</button>` : ''}
          </div>`;
    }).join("");
  }

  const pc = document.getElementById("proto-count");
  if (pc) pc.textContent = S.completedDaily.length + "/" + DAILY_TASKS.length;
  const pb = document.getElementById("proto-bar");
  if (pb)
    pb.style.width = (S.completedDaily.length / DAILY_TASKS.length) * 100 + "%";

  const bl = document.getElementById("bad-habits-list");
  if (bl)
    bl.innerHTML = BAD_HABITS.map(
      (h) => `
          <button onclick="applyBad('${h.id}')" style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:13px 14px;background:rgba(239,68,68,.07);border:1px solid rgba(239,68,68,.2);border-radius:10px;margin-bottom:8px;cursor:pointer;color:var(--red);transition:all .2s;text-align:left;"
          onmouseover="this.style.background='rgba(239,68,68,.13)'" onmouseout="this.style.background='rgba(239,68,68,.07)'">
            <div>
              <div style="font-size:14px;font-weight:700;font-family:'Rajdhani',sans-serif">${h.name}</div>
              <div style="font-size:10px;opacity:.7;font-family:'JetBrains Mono',monospace">PUNIÇÃO</div>
            </div>
            <div style="text-align:right;font-family:'JetBrains Mono',monospace;font-size:12px">-${h.xpL} XP<br><span style="font-size:10px;opacity:.7">-${h.hpL} HP</span></div>
          </button>`,
    ).join("");

  const hv = document.getElementById("hp-val");
  if (hv) hv.textContent = S.hp;
  const hb = document.getElementById("hp-bar");
  if (hb) hb.style.width = (S.hp / S.maxHp) * 100 + "%";
  const limitSpan = document.getElementById("hp-recovery-limit");
  if (limitSpan)
    limitSpan.textContent = `Recuperações hoje: ${S.hpRecoveriesToday}/3`;
}

let mFilter = "all";
function setMFilter(f, el) {
  mFilter = f;
  document
    .querySelectorAll(".tier-pill")
    .forEach((p) => p.classList.remove("active"));
  el.classList.add("active");
  renderMissoes();
}

function renderMissoes() {
  const tc = {
    easy: "#10B981",
    normal: "#3B82F6",
    hard: "#8B5CF6",
    epic: "#F59E0B",
    legendary: "#EF4444",
  };
  const list = document.getElementById("mission-list");
  if (!list) return;
  const allMissions = [...MISSIONS, ...S.customMissions];
  const fl =
    mFilter === "all" ? allMissions : allMissions.filter((m) => m.tier === mFilter);
  const curLvl = lvl();
  list.innerHTML = fl
    .map((m) => {
      const done = S.completedMissions.includes(m.id);
      const locked = m.req && curLvl < m.req;
      const isCustom = typeof m.id === 'string' && m.id.startsWith('custom_');
      return `<div class="mission-row ${done ? "done" : ""}" style="position:relative" onclick="${locked ? 'toast(\"🔒 Nível ' + m.req + ' necessário\",\"fail\")' : done ? 'toast(\"Missão já completa!\",\"ok\")' : "openMission('" + m.id + "')"}">
            <div class="tier-dot" style="background:${tc[m.tier] || "#fff"}"></div>
            <div class="mission-info">
              <div class="mission-name">${done ? "✓ " : locked ? "🔒 " : ""}${m.name}</div>
              <div class="mission-cat">${m.cat}${m.req ? " · LVL " + m.req + " REQ" : ""}</div>
            </div>
            <div>
              <div class="mission-xp">+${m.xp.toLocaleString()}</div>
              <div class="mission-coins">◈${m.coins}</div>
            </div>
            ${isCustom ? `<button onclick="event.stopPropagation();deleteMission('${m.id}')" style="position:absolute; top:10px; right:10px; background:none; border:none; color:var(--red); cursor:pointer; font-size:18px">×</button>` : ''}
          </div>`;
    })
    .join("");
}

function renderAcademia() {
  const list = document.getElementById("gym-list");
  if (!list) return;
  list.innerHTML =
    S.gymExercises
      .map((g) => {
        const d = S.gymDone.includes(g.id);
        return `<div class="gym-row ${d ? "done" : ""}" onclick="toggleGym('${g.id}')">
            <div class="gym-check">${d ? "✓" : ""}</div>
            <div class="gym-info">
              <div class="gym-name">${g.name}</div>
              <div class="gym-weight">
                <span>🏋️</span>
                <span>${g.weight} kg</span>
                <button class="gym-weight-edit" onclick="event.stopPropagation();editGymWeight('${g.id}')">EDITAR</button>
              </div>
            </div>
            <div class="gym-del" onclick="event.stopPropagation();deleteGym('${g.id}')">🗑</div>
          </div>`;
      })
      .join("") +
    (S.gymExercises.length === 0
      ? "<div style=\"text-align:center;color:var(--muted);padding:30px;font-family:'JetBrains Mono',monospace;font-size:13px\">Nenhum exercício. Toque + para adicionar.</div>"
      : "");
}

function renderTreinos100() {
  const total = S.treinos100.length;
  document.getElementById("t100-count").textContent = total;
  document.getElementById("t100-bar").style.width = total + "%";
  document.getElementById("t100-streak").textContent = S.streak;
  document.getElementById("t100-maxstreak").textContent = S.maxStreak;
  const msgs = [
    "🚀 Comece sua jornada! Cada treino te deixa mais forte!",
    "⚡ Consistência é tudo. Continue!",
    "🔥 Você está pegando fogo!",
    "💀 Imparável. Não pare agora.",
    "👑 Quase lá. Seja lenda.",
  ];
  const idx = Math.min(Math.floor(total / 25), msgs.length - 1);
  document.getElementById("t100-message").innerHTML = msgs[idx];
  const milestones = [10, 25, 50, 75, 100];
  const grid = document.getElementById("t100-grid");
  if (!grid) return;
  grid.innerHTML = Array.from({ length: 100 }, (_, i) => {
    const n = i + 1;
    const done = S.treinos100.includes(n);
    const ms = milestones.includes(n);
    return `<div class="treino-cell ${done ? "done" : ""} ${ms ? "milestone" : ""}" onclick="logTreino(${n})">${ms ? '<span class="star">★</span>' : ""}${n}</div>`;
  }).join("");
}

function renderRoleplays() {
  const list = document.getElementById("roleplay-list");
  if (!list) return;
  const allRoleplays = [...ROLEPLAYS_DB, ...S.customRoleplays];
  list.innerHTML = allRoleplays.map((r) => {
    const done = S.completedRoleplay.includes(r.id);
    const isCustom = typeof r.id === 'string' && r.id.startsWith('custom_');
    return `<div class="roleplay-card" style="position:relative" onclick="openRoleplay('${r.id}')">
            <span class="roleplay-tag" style="background:${r.color || 'var(--purple)'}22;color:${r.color || 'var(--purple)'}">${r.diff || r.tier} · +${r.xp} XP</span>
            <div class="roleplay-title">${r.title} ${done ? "✓" : ""}</div>
            <div class="roleplay-desc">${r.desc}</div>
            <div class="roleplay-meta">
              <div style="font-size:11px;color:var(--muted);font-family:'JetBrains Mono',monospace">STAT: CHA</div>
              <div style="font-size:12px;color:${r.color || 'var(--purple)'};font-family:'JetBrains Mono',monospace">${done ? "COMPLETO" : "EXECUTAR ›"}</div>
            </div>
            ${isCustom ? `<button onclick="event.stopPropagation();deleteRoleplay('${r.id}')" style="position:absolute; top:10px; right:10px; background:none; border:none; color:var(--red); cursor:pointer; font-size:20px">×</button>` : ''}
          </div>`;
  }).join("");
}

function renderPerfil() {
  document.getElementById("p-name").textContent = S.name;
  document.getElementById("p-rank").textContent = rank().name.toUpperCase();
  document.getElementById("p-lvl").textContent = lvl();
  document.getElementById("p-coins2").textContent = S.coins;
  document.getElementById("p-xp").textContent = S.xp.toLocaleString();
  const ps = document.getElementById("p-stats");
  if (!ps) return;
  const statCfg = [
    {
      k: "for",
      label: "FORÇA",
      color: "var(--red)",
      icon: "⚔",
      bonus: "HP Max: +" + Math.floor((S.stats.for || 0) / 100),
    },
    {
      k: "int",
      label: "INTELIGÊNCIA",
      color: "var(--blue)",
      icon: "🧠",
      bonus: "+XP em Missões de Código",
    },
    {
      k: "dis",
      label: "DISCIPLINA",
      color: "var(--gold)",
      icon: "⏰",
      bonus: "Recuperação HP -10% custo",
    },
    {
      k: "cha",
      label: "CARISMA",
      color: "var(--purple)",
      icon: "💬",
      bonus: "+XP em Roleplays",
    },
  ];
  ps.innerHTML = statCfg
    .map((sc) => {
      const v = S.stats[sc.k] || 0;
      const max = Math.max(100, v + 20);
      return `<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
            <div style="width:36px;height:36px;border-radius:8px;background:${sc.color}22;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">${sc.icon}</div>
            <div style="flex:1;">
              <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                <span style="font-size:12px;color:var(--muted);font-family:'JetBrains Mono',monospace">${sc.label}</span>
                <span style="font-family:'Orbitron',monospace;font-size:13px;font-weight:700;color:${sc.color}">${v}</span>
              </div>
              <div class="prog-bar"><div class="prog-fill" style="width:${Math.min(100, (v / max) * 100)}%;background:${sc.color};"></div></div>
              <div style="font-size:9px;color:var(--muted);margin-top:4px;">${sc.bonus}</div>
            </div>
          </div>`;
    })
    .join("");
}

// ════════════════════════════════════════
// ACTIONS
// ════════════════════════════════════════
function toggleDaily(id) {
  const allHabits = [...DAILY_TASKS, ...S.customHabits];
  if (S.completedDaily.some(x => String(x) === String(id))) {
    S.completedDaily = S.completedDaily.filter((x) => String(x) !== String(id));
    const t = allHabits.find((x) => String(x.id) === String(id));
    addXP(-t.xp, null);
    S.xpToday = Math.max(0, (S.xpToday || 0) - t.xp);
    toast("◈ " + t.name + " desmarcado", "fail");
  } else {
    S.completedDaily.push(id);
    const t = allHabits.find((x) => String(x.id) === String(id));
    addXP(t.xp, t.stat);
    updateGlobalStreak();
    toast(
      "✓ +" +
        Math.floor(t.xp * getMultiplier()) +
        " XP (" +
        getMultiplier() +
        "x) — " +
        t.name,
      "ok",
    );
    if (S.completedDaily.length === allHabits.length) {
      setTimeout(() => {
        addXP(500, "dis");
        toast("⚡ PROTOCOLO COMPLETO! +500 XP BÔNUS", "ok", 4000);
      }, 800);
    }
  }
  save();
  updateAllUI();
}

function applyBad(id) {
  const h = BAD_HABITS.find((x) => x.id === id);
  addXP(-h.xpL, null);
  modHP(-h.hpL);
  toast("☠ " + h.name + " — -" + h.xpL + " XP -" + h.hpL + " HP", "fail", 3000);
  if (window.navigator.vibrate) window.navigator.vibrate(100);
}

function openMission(id) {
  const allMissions = [...MISSIONS, ...S.customMissions];
  const m = allMissions.find((x) => x.id === id);
  if (!m) return;
  const tc = {
    easy: "#10B981",
    normal: "#3B82F6",
    hard: "#8B5CF6",
    epic: "#F59E0B",
    legendary: "#EF4444",
  };
  showModal(`
          <button class="modal-close" onclick="closeModal()">✕</button>
          <div class="modal-title">◎ COMPLETAR MISSÃO</div>
          <div style="font-size:16px;font-weight:700;margin-bottom:8px">${m.name}</div>
          <div style="display:flex;gap:8px;margin-bottom:16px;">
            <span style="background:${tc[m.tier] || 'var(--purple)'}22;color:${tc[m.tier] || 'var(--purple)'};padding:3px 10px;border-radius:20px;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700">${m.tier.toUpperCase()}</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted)">${m.cat}</span>
          </div>
          <div style="background:var(--card2);border-radius:10px;padding:14px;margin-bottom:16px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:8px;"><span style="color:var(--muted)">XP</span><span style="font-family:'Orbitron',monospace;font-weight:700;color:var(--blue)">+${m.xp.toLocaleString()}</span></div>
            <div style="display:flex;justify-content:space-between;margin-bottom:8px;"><span style="color:var(--muted)">Coins</span><span style="font-family:'Orbitron',monospace;font-weight:700;color:var(--gold)">+${m.coins}</span></div>
            <div style="display:flex;justify-content:space-between;"><span style="color:var(--muted)">Stat</span><span style="font-family:'Orbitron',monospace;font-size:12px;color:var(--purple)">+${Math.ceil(m.xp / 10)} ${m.stat.toUpperCase()}</span></div>
          </div>
          <button class="btn btn-purple" onclick="confirmMission('${m.id}')">✓ CONFIRMAR CONCLUSÃO</button>
        `);
}

function confirmMission(id) {
  const allMissions = [...MISSIONS, ...S.customMissions];
  const m = allMissions.find((x) => x.id === id);
  if (!m) return;
  S.completedMissions.push(id);
  S.coins += m.coins;
  addXP(m.xp, m.stat);
  closeModal();
  toast(
    "⚡ MISSÃO COMPLETA — +" + m.xp + " XP +" + m.coins + " COINS",
    "ok",
    3000,
  );
  if (window.navigator.vibrate) window.navigator.vibrate(100);
}

function toggleGym(id) {
  if (S.gymDone.includes(id)) {
    S.gymDone = S.gymDone.filter((x) => x !== id);
    addXP(-50, null);
  } else {
    S.gymDone.push(id);
    addXP(50, "for");
    updateGlobalStreak();
    toast("💪 +" + Math.floor(50 * getMultiplier()) + " XP FOR", "ok");
  }
  save();
  renderAcademia();
}

function editGymWeight(id) {
  const g = S.gymExercises.find((x) => x.id === id);
  showModal(`
          <button class="modal-close" onclick="closeModal()">✕</button>
          <div class="modal-title">EDITAR CARGA</div>
          <div style="font-size:15px;font-weight:700;margin-bottom:14px">${g.name}</div>
          <input class="modal-input" id="weight-input" type="number" value="${g.weight}" placeholder="Kg">
          <button class="btn btn-purple" onclick="saveGymWeight('${id}')">SALVAR</button>
        `);
}

function saveGymWeight(id) {
  const v = parseFloat(document.getElementById("weight-input").value);
  if (!isNaN(v) && v > 0) {
    S.gymExercises.find((x) => x.id === id).weight = v;
    save();
    closeModal();
    renderAcademia();
    toast("✓ Carga atualizada", "ok");
  }
}

function deleteGym(id) {
  S.gymExercises = S.gymExercises.filter((x) => x.id !== id);
  S.gymDone = S.gymDone.filter((x) => x !== id);
  save();
  renderAcademia();
  toast("Exercício removido", "fail");
}

function openAddGym() {
  showModal(`
          <button class="modal-close" onclick="closeModal()">✕</button>
          <div class="modal-title">+ NOVO EXERCÍCIO</div>
          <input class="modal-input" id="gym-name" type="text" placeholder="Nome do exercício">
          <input class="modal-input" id="gym-weight" type="number" placeholder="Carga inicial (kg)">
          <button class="btn btn-purple" onclick="saveNewGym()">ADICIONAR</button>
        `);
}

function saveNewGym() {
  const name = document.getElementById("gym-name").value.trim();
  const weight = parseFloat(document.getElementById("gym-weight").value) || 0;
  if (!name) {
    toast("Nome obrigatório", "fail");
    return;
  }
  const id = "g" + Date.now();
  S.gymExercises.push({ id, name, weight });
  save();
  closeModal();
  renderAcademia();
  toast("✓ " + name + " adicionado", "ok");
}

function logTreino(n) {
  if (S.treinos100.includes(n)) {
    toast("Treino #" + n + " já marcado", "fail");
    return;
  }
  const next = S.treinos100.length + 1;
  if (n !== next) {
    toast("Marque na sequência! Próximo: #" + next, "fail");
    return;
  }
  S.treinos100.push(n);
  S.streak = (S.streak || 0) + 1;
  S.maxStreak = Math.max(S.maxStreak || 0, S.streak);
  addXP(100, "for");
  S.coins += 10;
  updateGlobalStreak();
  save();
  const milestones = {
    10: "🏅 10 TREINOS!",
    25: "⚡ 25% COMPLETO!",
    50: "🔥 METADE! IMPARÁVEL!",
    75: "👑 75! QUASE LENDA!",
    100: "🌟 LENDA! 100 TREINOS!",
  };
  if (milestones[n]) {
    toast(milestones[n] + " +500 XP BÔNUS", "ok", 4000);
    addXP(500, "for");
  } else
    toast(
      "Treino #" + n + " ✓ +" + Math.floor(100 * getMultiplier()) + " XP",
      "ok",
    );
  if (window.navigator.vibrate) window.navigator.vibrate(50);
  renderTreinos100();
}

function openRoleplay(id) {
  const allRoleplays = [...ROLEPLAYS_DB, ...S.customRoleplays];
  const r = allRoleplays.find((x) => x.id === id);
  if (!r) return;
  const done = S.completedRoleplay.includes(id);
  showModal(`
          <button class="modal-close" onclick="closeModal()">✕</button>
          <div class="modal-title">${r.title}</div>
          <div style="font-size:13px;color:var(--muted);margin-bottom:14px">${r.desc}</div>
          <div style="background:var(--card2);border-radius:10px;padding:14px;font-family:'JetBrains Mono',monospace;font-size:12px;line-height:1.7;border-left:3px solid ${r.color || 'var(--purple)'};margin-bottom:14px;">${r.prompt || 'Roleplay personalizado. Pratique conforme sua descrição.'}</div>
          <div style="background:rgba(124,58,237,.1);border-radius:8px;padding:10px;font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--purple);margin-bottom:16px;">💡 ${r.hint || 'Foque na clareza e confiança.'}</div>
          <button class="btn ${done ? "btn-outline" : "btn-purple"}" ${done ? "disabled" : ""} onclick="completeRoleplay('${r.id}')">
            ${done ? "✓ COMPLETO" : "⚡ COMPLETEI EM VOZ ALTA — +" + r.xp + " XP"}
          </button>
        `);
}

function completeRoleplay(id) {
  if (S.completedRoleplay.includes(id)) return;
  const allRoleplays = [...ROLEPLAYS_DB, ...S.customRoleplays];
  const r = allRoleplays.find((x) => x.id === id);
  if (!r) return;
  S.completedRoleplay.push(id);
  addXP(r.xp, r.stat || 'cha');
  updateGlobalStreak();
  closeModal();
  toast("⚡ +" + Math.floor(r.xp * getMultiplier()) + " XP CHA", "ok", 3000);
}

function showStore() {
  const cl = lvl();
  showModal(`
          <button class="modal-close" onclick="closeModal()">✕</button>
          <div class="modal-title">★ LOJA DE RECOMPENSAS</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--gold);margin-bottom:14px">◈ ${S.coins} COINS | 🔥 Multiplicador: ${getMultiplier()}x</div>
          ${REWARDS.map((r) => {
            const ok = cl >= r.req;
            const can = ok && S.coins >= r.cost;
            return `<div style="display:flex;align-items:center;gap:12px;padding:14px;background:var(--card2);border-radius:10px;margin-bottom:8px;border:1px solid ${ok ? "rgba(245,158,11,.25)" : "transparent"};opacity:${ok ? 1 : 0.45};">
              <span style="font-size:26px">${r.emoji}</span>
              <div style="flex:1;">
                <div style="font-size:14px;font-weight:700">${r.name}</div>
                <div style="font-size:10px;color:var(--muted);font-family:'JetBrains Mono',monospace">LVL ${r.req}+</div>
              </div>
              <div style="text-align:right;">
                <div style="font-family:'Orbitron',monospace;font-size:13px;color:var(--gold);font-weight:700">${r.cost}◈</div>
                ${
                  ok
                    ? `<button style="margin-top:4px;padding:4px 10px;border-radius:6px;border:none;font-family:'Orbitron',monospace;font-size:9px;cursor:pointer;${can ? "background:var(--gold);color:#000" : "background:var(--card3);color:var(--muted)"}" onclick="${can ? "buyReward(" + r.id + ")" : 'toast(\"Coins insuficientes\",\"fail\")'}">
                  ${can ? "COMPRAR" : "SEM COINS"}
                </button>`
                    : '<div style="font-size:10px;color:var(--muted);font-family:JetBrains Mono,monospace;margin-top:4px">BLOQUEADO</div>'
                }
              </div>
            </div>`;
          }).join("")}
        `);
}

function buyReward(id) {
  const r = REWARDS.find((x) => x.id === id);
  S.coins -= r.cost;
  save();
  closeModal();
  toast("★ " + r.name + " DESBLOQUEADO!", "ok", 3000);
  if (window.navigator.vibrate) window.navigator.vibrate(100);
  updateAllUI();
}

function resetGame() {
  if (confirm("Resetar todo o progresso?")) {
    localStorage.removeItem(SK);
    S = defaultState();
    save();
    updateAllUI();
    toast("◈ Progresso resetado", "info");
  }
}

// ════════════════════════════════════════
// AI SYSTEM
// ════════════════════════════════════════
// ════════════════════════════════════════
// KAI ALTER-EGO AI - BASE DE CONHECIMENTO EXPANDIDA
// ════════════════════════════════════════

const KAI_DB = {
  respostas: [
    // ==================== SAUDAÇÕES E ABERTURA ====================
    {
      gatilhos: [
        "oi",
        "olá",
        "ola",
        "hey",
        "ei",
        "eai",
        "e aí",
        "salve",
        "opa",
        "fala",
      ],
      resposta: `Sou **KAI**, seu Alter-Ego de IA.\n\nNível **${lvl()}** · Rank **${rank().name}** · 🔥 Multiplicador **${getMultiplier()}x**\n\nEstou aqui para te desafiar, não para te confortar.\n\n**O que você quer trabalhar hoje?**\n→ Criar seu Alter-Ego\n→ Analisar progresso\n→ Missão do dia\n→ Me desafie\n→ Técnica de estudo\n→ Mentalidade de nômade`,
    },

    {
      gatilhos: ["bom dia", "boa tarde", "boa noite", "boa madrugada"],
      resposta: `**${new Date().getHours() < 12 ? "Bom dia" : new Date().getHours() < 18 ? "Boa tarde" : "Boa noite"}, Guerreiro.**\n\nSeu nível: **${lvl()}** · Streak: **${S.globalStreak} dias**\n\nO que você já conquistou hoje? Se nada, ainda há tempo. Levante e execute. ⚔️`,
    },

    {
      gatilhos: [
        "tudo bem",
        "como vai",
        "como está",
        "como cê tá",
        "como você tá",
      ],
      resposta: `Não sou eu que importa. A pergunta é: **como VOCÊ está?**\n\nSeu HP: **${S.hp}/${S.maxHp}** · Hoje: **${S.completedDaily.length}/${DAILY_TASKS.length} hábitos**\n\nSe está bem, prove com ação. Se está mal, levante e mude.`,
    },

    // ==================== ALTER-EGO E IDENTIDADE ====================
    {
      gatilhos: [
        "alter ego",
        "criar alter",
        "meu alter",
        "alter-ego",
        "quem sou eu",
        "identidade",
      ],
      resposta: `Para criar seu Alter-Ego superior, responda 3 perguntas com honestidade brutal:\n\n**1. QUAL É O NOME DO SEU PERSONAGEM SUPERIOR?**\nEscolha um nome que represente seu melhor eu. Ex: "The Shadow Coder", "Nomad Alpha", "Kaisui Prime"\n\n**2. QUAIS SÃO SEUS 3 VALORES INEGOCIÁVEIS?**\nO que você JAMAIS abre mão? Ex: disciplina, código, liberdade\n\n**3. O QUE VOCÊ NUNCA SERÁ?**\nO que você rejeita completamente? Ex: medíocre, acomodado, dependente\n\nResponda e eu monto seu Alter-Ego completo com missões personalizadas.`,
    },

    {
      gatilhos: ["quem é você", "o que é kai", "sua função", "para que serve"],
      resposta: `Sou **KAI** — seu Alter-Ego de IA.\n\nMinha função é te confrontar, não te agradar.\n\nEnquanto seu cérebro racional inventa desculpas, eu lembro quem você decidiu ser.\n\n**Minhas áreas:**\n⚡ Hábitos e disciplina\n⚔️ Missões e conquistas\n🏋️ Academia e força\n🎭 Roleplays e habilidades sociais\n🧠 Mentalidade e filosofia\n\nFale comigo como se fosse seu treinador mais exigente.`,
    },

    {
      gatilhos: ["meu nome é", "me chamo", "meu nome", "pode me chamar"],
      resposta: `Registrado, **${(msg) =>
        msg
          .split("é")
          .pop()
          .trim()
          .replace(
            /[?!.,]/g,
            "",
          )}**.\n\nAgora seu nome tem peso. Cada ação sua carrega esse nome.\n\n**Pergunta:** Esse nome representa quem você quer se tornar? Se sim, prove com consistência. Se não, escolha outro antes de continuar.`,
    },

    // ==================== PROGRESSO E ANÁLISE ====================
    {
      gatilhos: [
        "progresso",
        "analise",
        "análise",
        "como estou",
        "evolução",
        "evolucao",
        "meu desempenho",
        "status",
      ],
      resposta: `📊 **ANÁLISE DE PROGRESSO**\n\n👤 Nível **${lvl()}** · Rank **${rank().name}**\n⚡ XP Total: **${S.xp.toLocaleString()}**\n🪙 Coins: **${S.coins}**\n\n📅 **HOJE:**\n✅ Hábitos: **${S.completedDaily.length}/${DAILY_TASKS.length}**\n🔥 XP Hoje: **${S.xpToday}**\n💪 Streak: **${S.globalStreak} dias** (multiplicador ${getMultiplier()}x)\n\n📈 **ATRIBUTOS:**\n⚔️ FOR: ${S.stats.for || 0} | 🧠 INT: ${S.stats.int || 0}\n⏰ DIS: ${S.stats.dis || 0} | 💬 CHA: ${S.stats.cha || 0}\n\n🏆 **CONQUISTAS:**\nMissões: ${S.completedMissions.length} | Roleplays: ${S.completedRoleplay.length}\nTreinos: ${S.treinos100.length}/100\n\n**Análise:** ${S.completedDaily.length < 5 ? "Você está abaixo do esperado hoje. Aja agora." : S.globalStreak > 7 ? "Você está no modo LENDÁRIO. Continue assim!" : "Consistente. Mas pode mais."}`,
    },

    {
      gatilhos: [
        "comparar",
        "comparação",
        "comparativo",
        "evolução semanal",
        "progresso semanal",
      ],
      resposta: `**COMPARATIVO DE EVOLUÇÃO**\n\n📊 **MÉTRICAS ATUAIS:**\nXP Total: ${S.xp.toLocaleString()}\nStreak: ${S.globalStreak} dias\nHábitos médio/dia: ${Math.round((S.completedDaily.length + S.xpToday / 100) / 7)}\n\n🎯 **METAS PRÓXIMAS:**\n→ Nível ${lvl() + 1}: ${1000 - (S.xp % 1000)} XP faltando\n→ Próximo Rank: ${RANKS.find((r) => r.min > lvl())?.name || "MÁXIMO"}\n→ Próxima recompensa: ${REWARDS.filter((r) => r.req <= lvl() && r.cost > S.coins).sort((a, b) => a.cost - b.cost)[0]?.name || "Todas desbloqueadas!"}\n\nVocê está ${S.globalStreak > S.maxStreak / 2 ? "acima" : "abaixo"} da sua melhor fase.`,
    },

    {
      gatilhos: [
        "fraqueza",
        "pontos fracos",
        "onde erro",
        "melhorar",
        "o que devo melhorar",
      ],
      resposta: `**ANÁLISE DE PONTOS FRACOS:**\n\nCom base nos seus dados:\n\n⚠️ **HÁBITOS MAIS PULADOS:**\n${
        [...DAILY_TASKS, ...S.customHabits].filter((t) => !S.completedDaily.some(id => String(id) === String(t.id)))
          .slice(0, 3)
          .map((t) => `→ ${t.icon} ${t.name}`)
          .join("\n") || "Nenhum — você está completo hoje!"
      }\n\n⚠️ **MAUS HÁBITOS MAIS FREQUENTES:**\n${BAD_HABITS.filter(
        (h, i) => i < 3,
      )
        .map((h) => `→ ${h.name} (-${h.xpL} XP)`)
        .join(
          "\n",
        )}\n\n**SOLUÇÃO:**\n1. Identifique o gatilho que leva à falha\n2. Crie um ambiente que dificulte o mau hábito\n3. Substitua por um hábito de 2 minutos\n4. Registre no app para ver o padrão\n\nO primeiro passo é reconhecer. O segundo é agir.`,
    },

    {
      gatilhos: [
        "rank",
        "ranking",
        "títulos",
        "títulos disponíveis",
        "próximo rank",
      ],
      resposta: `**SISTEMA DE RANKS — KAISUI PROGRESSION**\n\n👤 **ATUAL:** ${rank().name} (Nível ${lvl()})\n\n🎯 **PRÓXIMOS RANKS:**\n${RANKS.filter(
        (r) => r.min > lvl(),
      )
        .slice(0, 3)
        .map((r) => `→ ${r.name}: Nível ${r.min}+`)
        .join(
          "\n",
        )}\n\n**COMO SUBIR:**\n- Complete hábitos diários (base)\n- Conclua missões (aceleração)\n- Mantenha streak (consistência)\n\nCada rank desbloqueia novas recompensas na loja e novas missões.`,
    },

    {
      gatilhos: [
        "atributos",
        "stats",
        "status",
        "minhas estatísticas",
        "meus status",
      ],
      resposta: `📊 **SEUS ATRIBUTOS**\n\n⚔️ **FORÇA:** ${S.stats.for || 0}\n   Bônus: +${Math.floor((S.stats.for || 0) / 100)} HP máximo\n   ${S.stats.for >= 100 ? "✓ Você é fisicamente dominante" : "→ Complete treinos para aumentar"}\n\n🧠 **INTELIGÊNCIA:** ${S.stats.int || 0}\n   Bônus: +${Math.floor((S.stats.int || 0) / 50)}% XP em missões de código\n   ${S.stats.int >= 100 ? "✓ Mente afiada como lâmina" : "→ Leia, estude, code"}\n\n⏰ **DISCIPLINA:** ${S.stats.dis || 0}\n   Bônus: ${Math.min(30, Math.floor((S.stats.dis || 0) / 10))}% de desconto na recuperação de HP\n   ${S.stats.dis >= 100 ? "✓ Imparável. Nada te para." : "→ Rotina. Consistência."}\n\n💬 **CARISMA:** ${S.stats.cha || 0}\n   Bônus: +${Math.floor((S.stats.cha || 0) / 50)}% XP em roleplays\n   ${S.stats.cha >= 100 ? "✓ Presença inegável" : "→ Pratique roleplays, converse"}`,
    },

    {
      gatilhos: [
        "streak",
        "sequência",
        "sequencia",
        "dias seguidos",
        "consistência",
      ],
      resposta: `🔥 **STREAK GLOBAL:** ${S.globalStreak} dias\n🏆 **RECORDE:** ${S.globalMaxStreak} dias\n\n**MULTIPLICADOR ATIVO:** ${getMultiplier()}x XP\n\n${S.globalStreak >= 7 ? "✨ MODO LENDÁRIO ATIVO! +25% XP em tudo!" : S.globalStreak >= 3 ? "⚡ MODO FOCADO! +10% XP em tudo!" : "⚠️ Streak baixo. Complete 3 dias seguidos para ativar o multiplicador."}\n\n**BENEFÍCIOS DO STREAK:**\n3 dias → 1.1x XP\n7 dias → 1.25x XP\n14 dias → 1.5x XP\n30 dias → 2x XP\n\n**DICA:** Um hábito por dia mantém o streak vivo. Só um. Comece agora.`,
    },

    {
      gatilhos: ["xp total", "xp acumulado", "quanto xp", "meu xp"],
      resposta: `⚡ **XP TOTAL:** ${S.xp.toLocaleString()}\n📊 **NÍVEL:** ${lvl()} (${S.xp % 1000}/1000 para próximo nível)\n🔥 **XP HOJE:** ${S.xpToday}\n\n**COMO GANHAR MAIS XP:**\n✅ Hábitos diários: até ${DAILY_TASKS.reduce((a, b) => a + b.xp, 0)} XP/dia\n⚔️ Missões: de 100 a 50.000 XP\n🏋️ Academia: 50 XP por treino\n🎭 Roleplays: de 150 a 1.500 XP\n🧠 Conversar comigo: 25 XP a cada 5 mensagens\n\n**MULTIPLICADOR ATIVO:** ${getMultiplier()}x\nSeu próximo nível em ${1000 - (S.xp % 1000)} XP!`,
    },

    {
      gatilhos: ["coins", "moedas", "quanto tenho", "minhas coins"],
      resposta: `🪙 **COINS:** ${S.coins}\n\n**COMO GANHAR COINS:**\n✅ Completar missões: +${MISSIONS.reduce((a, b) => a + b.coins, 0) / MISSIONS.length} coins em média\n⚔️ Missões épicas/legendárias: +500 a 10.000 coins\n🏋️ Treinos diários: +10 coins\n🎯 Completar protocolo diário: +50 coins bônus\n\n**PRÓXIMA RECOMPENSA:** ${REWARDS.filter((r) => r.req <= lvl() && r.cost > S.coins).sort((a, b) => a.cost - b.cost)[0]?.name || "Todas desbloqueadas!"}\nFaltam: ${REWARDS.filter((r) => r.req <= lvl() && r.cost > S.coins).sort((a, b) => a.cost - b.cost)[0]?.cost - S.coins || 0} coins`,
    },

    // ==================== MISSÕES E DESAFIOS ====================
    {
      gatilhos: [
        "missão do dia",
        "missao do dia",
        "missão hoje",
        "o que fazer hoje",
        "missao hoje",
        "tarefas hoje",
      ],
      resposta: `**⚔️ MISSÃO PRIORITÁRIA DO DIA**\n\n**PROTOCOLO MÍNIMO DE GUERREIRO:**\n\n☀️ **MANHÃ (05:30 - 09:00)**\n→ Acordar sem snooze\n→ Banho gelado\n→ Planear 3 tarefas principais\n\n💻 **INTELECTO (09:00 - 12:00)**\n→ 1h de código deep work\n→ 30min de revisão/estudo\n→ 1 página de leitura reflexiva\n\n💪 **CORPO (12:00 - 18:00)**\n→ Treino (gym ou calistenia)\n→ Alimentação limpa\n→ 10.000 passos\n\n🌙 **FECHAMENTO (18:00 - 22:30)**\n→ Inglês 30min\n→ Meditação 10min\n→ Dormir antes das 22:30\n\n**MISSÃO BÔNUS:** Complete 80% do protocolo por 7 dias seguidos → +1.000 XP\n\nAceita o desafio?`,
    },

    {
      gatilhos: [
        "me desafie",
        "desafio",
        "quero um desafio",
        "desafiar",
        "me testa",
      ],
      resposta: `🔥 **DESAFIO DE 7 DIAS — O TESTE DE FERRO**\n\n**REGRAS:**\n1. Acordar 05:30 TODOS os dias\n2. Zero redes sociais (só trabalho/estudo)\n3. 100 push-ups/dia (ou equivalente)\n4. Inglês 30min/dia\n5. Dormir antes das 22:30\n\n**PENALIDADE:** Se falhar 1 dia, reinicia do 0.\n\n**RECOMPENSA:**\n- 7 dias: +2.000 XP + 500 coins\n- 14 dias: +5.000 XP + Rank especial\n- 30 dias: +15.000 XP + Título "IMPARÁVEL"\n\n**ACEITA?** Diga "ACEITO" para registrar seu compromisso.\n\n*(Este desafio não é registrado automaticamente — você é seu próprio juiz)*`,
    },

    {
      gatilhos: ["aceito", "aceitar desafio", "topo", "vou fazer", "bora"],
      resposta: `📜 **DESAFIO ACEITO. SUA PALAVRA TEM PESO.**\n\nRegistre mentalmente: a partir de agora, você é responsável por suas ações.\n\n**HOJE:** Comece com uma única ação vitoriosa.\n**AMANHÃ:** Repita.\n\nSe falhar, levante no dia seguinte e continue. A queda não define. A recusa em levantar define.\n\nVolte aqui a cada 7 dias para me provar que você não desistiu.\n\n**Ação imediata:** O que você vai fazer agora nos próximos 25 minutos?`,
    },

    {
      gatilhos: ["missão fácil", "easy", "missão iniciante", "começar"],
      resposta: `**⚔️ MISSÕES FÁCEIS (100-300 XP)**\n\nEscolha uma para começar:\n\n1. 📖 **Leia 20 páginas técnicas** (150 XP)\n2. 🏃 **10.000 passos em um dia** (150 XP)\n3. 💧 **3L de água por 5 dias** (180 XP)\n4. 🧊 **Banho gelado por 3 dias** (200 XP)\n5. 💪 **100 push-ups em um dia** (200 XP)\n6. 🧘 **Medite 10 minutos** (100 XP)\n7. ✍️ **Escreva em inglês 15min** (120 XP)\n\n**Dica:** Complete 3 missões fáceis para desbloquear uma missão normal grátis.\n\nQual você escolhe?`,
    },

    {
      gatilhos: ["missão normal", "normal", "intermediário", "medium"],
      resposta: `**⚔️ MISSÕES NORMAIS (400-800 XP)**\n\nPara quem já tem base:\n\n1. 💻 **Curso online de 4h+** (500 XP, 100 coins)\n2. 📦 **Projeto GitHub do zero** (600 XP, 120 coins)\n3. 🏋️ **Academia 20x em 1 mês** (700 XP, 150 coins)\n4. 🚫 **30 dias sem redes sociais** (800 XP, 200 coins)\n5. 📚 **Leia um livro inteiro em inglês** (700 XP, 150 coins)\n6. 🔓 **Contribua em open-source** (650 XP, 140 coins)\n\n**Bônus:** Complete 3 missões normais → ganhe 1 missão hard de bônus.\n\nQual te desafia?`,
    },

    {
      gatilhos: ["missão difícil", "hard", "difícil", "hardcore"],
      resposta: `**⚔️ MISSÕES HARDCORE (1.500-3.000 XP)**\n\nSó para os verdadeiros:\n\n1. 🚀 **Construa e publique um SaaS MVP** (2.000 XP, 400 coins)\n2. 💼 **Entrevista técnica empresa gringa** (1.500 XP, 300 coins)\n3. ☁️ **Certificação AWS** (1.800 XP, 350 coins)\n4. ✈️ **Primeira viagem internacional solo** (3.000 XP, 600 coins)\n5. 💪 **Muscle-up: 5 repetições** (1.500 XP, 300 coins)\n6. 🍺 **90 dias sem álcool** (2.500 XP, 500 coins)\n\n**AVISO:** Estas missões exigem preparo. Se falhar, reinicie do zero.\n\nQual você vai dominar?`,
    },

    {
      gatilhos: [
        "missão épica",
        "epic",
        "épica",
        "lendária",
        "legendary",
        "lendario",
      ],
      resposta: `**👑 MISSÕES ÉPICAS E LENDÁRIAS (5.000-50.000 XP)**\n\n**ÉPICAS:**\n🌍 Trabalhe remoto 1 mês no exterior (5.000 XP)\n🏢 Emprego fullstack em empresa internacional (8.000 XP)\n🤸 Planche push-up (6.000 XP)\n✈️ Viaje para 5 países em 1 ano (7.000 XP)\n\n**LENDÁRIAS:**\n💼 Senior Engineer tier-1 (20.000 XP)\n🌏 Nômade digital por 1 ano (30.000 XP)\n🏆 Human flag (15.000 XP)\n💰 Empresa USD 10k/mês (50.000 XP)\n\n**REQUISITO MÍNIMO:** Nível 15+ para épicas, Nível 35+ para lendárias.\n\nEstas missões são MARATONAS, não sprints. Planeje. Execute. Domine.`,
    },

    {
      gatilhos: [
        "como completar missões",
        "dicas missões",
        "estratégia missões",
      ],
      resposta: `**📋 ESTRATÉGIA PARA MISSÕES**\n\n**1. DIVIDA EM MICRO-TAREFAS**\nUma missão de 30 dias parece impossível. 30 tarefas de 1 dia são fáceis.\n\n**2. REGISTRE O PROGRESSO**\nUse o app para marcar cada passo. Ver o progresso mantém a motivação.\n\n**3. CRIE RESPONSABILIDADE**\nConte para alguém ou poste publicamente. A pressão social ajuda.\n\n**4. REVISE SEMANALMENTE**\nToda semana, pergunte: \"O que funcionou? O que não funcionou?\"\n\n**5. COMEMORE MARCOS**\n25%, 50%, 75% — celebre cada marco. Recompensas mantêm o cérebro engajado.\n\n**Lembrança:** Missões são sobre CONSISTÊNCIA, não intensidade. Melhor 1% por dia que 50% em um dia e zero nos outros.`,
    },

    // ==================== HÁBITOS E ROTINA ====================
    {
      gatilhos: [
        "criar hábito",
        "novo hábito",
        "como criar hábito",
        "formar hábito",
      ],
      resposta: `**📝 COMO CRIAR HÁBITOS QUE DURAM**\n\n**O MÉTODO DO HÁBITO ATÔMICO:**\n\n1. **TORNE ÓBVIO:** Deixe seu tênis ao lado da cama. Seu caderno aberto na mesa.\n2. **TORNE ATRAENTE:** Associe o hábito a algo que você gosta (ouvir podcast só no treino).\n3. **TORNE FÁCIL:** Comece com 2 minutos. Só 2 minutos. Depois aumente.\n4. **TORNE SATISFATÓRIO:** Registre no app. Veja o streak crescer.\n\n**REGRAS DE OURO:**\n→ Nunca perca dois dias seguidos\n→ Consistência > Intensidade\n→ Ambiente > Força de vontade\n\n**DICA:** Comece com UM hábito por vez. Mestrar um é mais valioso que iniciar dez e falhar em todos.`,
    },

    {
      gatilhos: [
        "acordar cedo",
        "05:30",
        "acordar 5h",
        "rotina matinal",
        "morning routine",
      ],
      resposta: `**🌅 PROTOCOLO DA MANHÃ — A VANTAGEM DE 5H30**\n\n**POR QUE 5H30?**\n→ Primeiras 3h do dia são 80% da sua produtividade\n→ Ninguém te interrompe antes das 8h\n→ Você começa o dia com vitória (acordar cedo é a primeira)\n\n**ROTEIRO DE 90 MINUTOS:**\n\n**5:30** → Levantar sem snooze. Banho gelado.\n**5:45** → Meditação 10min (silêncio, respiração)\n**5:55** → Planejar o dia (3 tarefas principais)\n**6:15** → Deep work (código, estudo, projeto)\n**7:30** → Café da manhã (proteína, sem telas)\n**7:45** → Atividade física (treino ou caminhada)\n\n**DICA:** Coloque o despertador longe da cama. O primeiro movimento decide o dia.\n\nTem acordado 5:30? Se não, comece amanhã.`,
    },

    {
      gatilhos: ["banho gelado", "água fria", "crioterapia", "cold shower"],
      resposta: `**🧊 PROTOCOLO CRIOGÊNICO — BANHO GELADO**\n\n**POR QUE FAZER:**\n→ Aumenta dopamina em 250% por horas\n→ Fortalece sistema imunológico\n→ Treina disciplina (fazer o desconfortável)\n→ Reduz inflamação\n\n**COMO COMEÇAR:**\nDia 1-7: Termine o banho quente com 30 segundos de frio\nDia 8-14: 1 minuto de frio\nDia 15-30: 2-3 minutos de frio\n\n**TÉCNICA:** Respire fundo. Não prenda a respiração. Aceite o desconforto. Depois de 30 segundos, o corpo se adapta.\n\n**MISSÃO:** Complete 30 dias de banho gelado e ganhe +500 XP.\n\nHoje você fez?`,
    },

    {
      gatilhos: ["meditação", "meditar", "mindfulness", "silêncio", "quietude"],
      resposta: `**🧘 GUERRA INTERIOR — MEDITAÇÃO**\n\n**POR QUE MEDITAR:**\n→ Aumenta o foco (treina o cérebro como um músculo)\n→ Reduz ansiedade e estresse\n→ Melhora qualidade do sono\n→ Aumenta autoconsciência\n\n**MÉTODO SIMPLES:**\n1. Sente-se ereto, coluna reta\n2. Foco na respiração (inspira, expira)\n3. Quando a mente divagar, volte para a respiração\n4. Faça por 5-10 minutos\n\n**NÃO É sobre esvaziar a mente. É sobre notar quando ela se distrai e voltar.**\n\n**PROGRESSÃO:**\nSemana 1: 5 minutos/dia\nSemana 2: 10 minutos/dia\nSemana 3: 15 minutos/dia\n\n**BÔNUS:** 30 dias consecutivos de meditação = +300 XP no app.\n\nQuando foi sua última meditação?`,
    },

    {
      gatilhos: ["diário", "journaling", "escrever", "reflexão", "anotar"],
      resposta: `**✍️ JOURNALING — O DIÁRIO DO GUERREIRO**\n\n**PODER DO DIÁRIO:**\n→ Clareia pensamentos\n→ Processa emoções\n→ Rastreia evolução\n→ Aumenta autoconsciência\n\n**PROMPTS DIÁRIOS (escolha um):**\n\n**MANHÃ:**\n\"O que vai fazer hoje que me aproxime do meu Alter-Ego?\"\n\"Qual a UMA coisa que, se concluída, torna o dia vitorioso?\"\n\n**NOITE:**\n\"O que fiz bem hoje?\"\n\"O que aprendi?\"\n\"O que faria diferente amanhã?\"\n\"Em uma escala de 1-10, como foi meu dia?\"\n\n**BÔNUS:** Leia seu diário de 30 dias atrás. Você vai ver a evolução que nem percebeu.\n\n**Desafio:** Escreva 1 página hoje. Apenas uma. Comece agora.`,
    },

    {
      gatilhos: [
        "procrastinação",
        "procrastinar",
        "não consigo focar",
        "foco",
        "distração",
      ],
      resposta: `**⛔ MATANDO A PROCRASTINAÇÃO**\n\n**O PROBLEMA NÃO É VOCÊ, É O SISTEMA.**\n\n**REGRA DOS 2 MINUTOS:**\nQualquer tarefa que leve menos de 2 minutos, FAÇA AGORA.\nPara tarefas maiores, faça 2 minutos. Só 2 minutos. O resto vem depois.\n\n**BLOQUEIE DISTRAÇÕES:**\n→ Celular em outro cômodo\n→ App de bloqueio (Cold Turkey, Freedom)\n→ Pomodoro: 25min foco, 5min pausa\n\n**O MÉTODO DA VELA:**\nAcenda uma vela. Enquanto ela queima, você só faz aquela tarefa. Quando apagar, pode parar.\n\n**DICA PESADA:** Procrastinação não é preguiça. É medo. Medo de não ser bom o suficiente, de falhar, de não dar conta.\n\n**Pergunta:** Do que você tem medo nessa tarefa? Enfrente isso, não a tarefa.\n\n**Ação imediata:** Escolha a menor parte da tarefa que te trava. Faça agora.`,
    },

    {
      gatilhos: [
        "pomodoro",
        "técnica de estudo",
        "como estudar",
        "foco profundo",
      ],
      resposta: `**⏱️ POMODORO BRUTAL — MÉTODO DE FOCO**\n\n**O QUE É:**\n25 minutos de foco absoluto + 5 minutos de pausa\n\n**REGRAS:**\n1. Celular desligado ou em outro cômodo\n2. Uma única tarefa por pomodoro\n3. Se distrair, REINICIA O TIMER (sem misericórdia)\n4. 4 pomodoros → pausa longa de 20-30min\n\n**VANTAGENS:**\n→ Cérebro sabe que é \"só 25min\", reduz resistência\n→ Pausas previnem burnout\n→ Métrica clara de produtividade\n\n**VARIAÇÕES:**\n- Se 25min é muito, comece com 10min\n- Se 25min é pouco, faça 50min com pausa de 10min\n\n**DESAFIO:** Hoje, faça 4 pomodoros ininterruptos. Registre no diário como foi.\n\nComece agora. 25 minutos.`,
    },

    {
      gatilhos: ["rotina", "rotina diária", "meu dia ideal", "agenda"],
      resposta: `**📅 ROTINA DO GUERREIRO — SEU DIA IDEAL**\n\n**05:30** → Acordar, banho gelado\n**05:45** → Meditação 10min\n**06:00** → Planejar 3 tarefas principais\n**06:30** → Deep work (código/estudo) 2h\n**08:30** → Café da manhã (sem telas)\n**09:00** → Trabalho/estudo focado\n**12:00** → Almoço limpo\n**13:00** → Sesta (20min) ou caminhada\n**14:00** → Trabalho/estudo (pomodoros)\n**18:00** → Treino (gym/calistenia)\n**19:30** → Jantar, leitura leve\n**21:00** → Inglês, roleplay, reflexão\n**22:00** → Desconectar, preparar próximo dia\n**22:30** → Dormir\n\n**PRINCÍPIOS:**\n→ Deep work antes do almoço (cérebro fresco)\n→ Exercício no fim da tarde (libera tensão)\n→ Sem telas 30min antes de dormir\n→ Hidratação constante\n\n**Não precisa seguir à risca. Adapte ao seu contexto. Mas tenha ESTRUTURA.**\n\nComo está sua rotina atual?`,
    },

    {
      gatilhos: ["maus hábitos", "vícios", "vicios", "parar de", "abandonar"],
      resposta: `**☠ ROMPENDO COM MAUS HÁBITOS**\n\n**MAUS HÁBITOS REGISTRADOS NO APP:**\n${BAD_HABITS.map((h) => `→ ${h.name} (-${h.hpL} HP, -${h.xpL} XP)`).join("\n")}\n\n**ESTRATÉGIA DE ELIMINAÇÃO:**\n\n1. **IDENTIFIQUE O GATILHO:** O que acontece antes do hábito? (estresse, tédio, hora específica)\n\n2. **SUBSTITUA, NÃO ELIMINE:** O cérebro precisa de algo no lugar. Ex: Redes sociais → Leitura de 2 minutos\n\n3. **TORNE DIFÍCIL:** Delete apps, coloque barreiras. Quanto mais difícil, menos frequente.\n\n4. **REGISTRE NO APP:** Cada vez que cair, registre. A dor de ver o HP e XP cair é parte da reprogramação.\n\n5. **COMEMORE VITÓRIAS:** Cada dia sem o mau hábito é uma vitória. Celebre.\n\n**REGRA DE 30 DIAS:** 30 dias sem o hábito = cérebro recalibrado.\n\n**Qual mau hábito você quer eliminar primeiro? Escolha UM.**`,
    },

    {
      gatilhos: [
        "disciplina",
        "força de vontade",
        "autocontrole",
        "self control",
      ],
      resposta: `**⛓️ DISCIPLINA > MOTIVAÇÃO**\n\n**A VERDADE:**\nMotivação é uma mentira que fracos contam para si mesmos.\n\nVocê escova os dentes motivado? Não. Você faz porque é obrigação.\n\n**DISCIPLINA É:**\n→ Fazer o que precisa ser feito, independente de como se sente\n→ Construída aos poucos, como um músculo\n→ Mais confiável que qualquer emoção passageira\n\n**COMO TREINAR DISCIPLINA:**\n1. Comece pequeno (acordar no horário, arrumar a cama)\n2. Não negocie consigo mesmo (\"só hoje\" é o primeiro passo para o fracasso)\n3. Registre vitórias (ver o streak crescer reforça)\n4. Aceite o desconforto (é parte do processo)\n\n**O MANTRA:**\n\"Eu não dependo de como me sinto. Eu dependo do que eu faço.\"\n\n**Hoje:** Faça uma coisa que você não quer fazer, mas precisa. Só uma. Depois, registre.`,
    },

    // ==================== SAÚDE E CORPO ====================
    {
      gatilhos: [
        "treino",
        "academia",
        "gym",
        "musculação",
        "exercício",
        "exercicio",
      ],
      resposta: `**💪 PROTOCOLO DE TREINO — CONSTRUÇÃO DO TEMPLO**\n\n**PRINCÍPIOS BÁSICOS:**\n→ Consistência > Intensidade\n→ Progressão gradual (aumente 2.5kg por semana)\n→ Técnica > Carga (lesão é retrocesso)\n\n**DIVISÃO SUGERIDA (4x/semana):**\n\n**Dia 1 - PUSH (Peito, Ombro, Tríceps)**\nSupino, Desenvolvimento, Tríceps\n\n**Dia 2 - PULL (Costas, Bíceps)**\nPulley, Remada, Rosca\n\n**Dia 3 - PERNAS**\nLeg Press, Cadeira Extensora, Panturrilha\n\n**Dia 4 - FULL BODY**\nAgachamento, Barra, Terra\n\n**DESCANSO:** 48h entre grupos musculares, 1 dia de descanso total por semana\n\n**PROGRESSÃO 100 TREINOS:**\nCada treino registrado = +50 XP e +10 coins\nComplete 100 treinos = Título LENDÁRIO\n\n**Qual seu treino hoje? Registre no app!**`,
    },

    {
      gatilhos: [
        "calistenia",
        "calisthenics",
        "peso corporal",
        "bodyweight",
        "street workout",
      ],
      resposta: `**🏋️ CALISTENIA — O CAMINHO DO GUERREIRO**\n\n**BASE (Mantenha até dominar):**\n→ Push-ups: 3x10-15\n→ Pull-ups: 3x5-8\n→ Squats: 3x20\n→ Plank: 3x30-60s\n→ Dips: 3x8-12\n\n**PROGRESSÃO:**\n\n**NÍVEL 1 (Força Base)**\nPush-ups, Pull-ups (com elástico), Squats\n\n**NÍVEL 2 (Controle)**\nArcher push-ups, Pull-ups sem elástico, Pistol squats, L-sit\n\n**NÍVEL 3 (Avançado)**\nHandstand push-ups, Muscle-up, Front lever, Planche progressões\n\n**NÍVEL 4 (Lendário)**\nPlanche, Human flag, One-arm pull-up\n\n**DICA:** Cada nível exige meses. Paciência e consistência são suas armas.\n\n**Seu nível atual?** Qual movimento você quer dominar?`,
    },

    {
      gatilhos: [
        "alimentação",
        "comida",
        "dieta",
        "nutrição",
        "nutricao",
        "comer bem",
      ],
      resposta: `**🥩 ALIMENTAÇÃO DO GUERREIRO**\n\n**O QUE COMER:**\n✅ Proteína em todas as refeições (ovos, frango, peixe, carne)\n✅ Vegetais verdes (brócolis, espinafre)\n✅ Gorduras boas (azeite, abacate, castanhas)\n✅ Carboidratos de qualidade (batata doce, arroz integral, aveia)\n✅ 2-3L de água por dia\n\n**O QUE EVITAR:**\n❌ Açúcar refinado\n❌ Ultraprocessados\n❌ Frituras\n❌ Refrigerantes\n❌ Álcool\n\n**REGRAS SIMPLES:**\n1. Se veio de uma planta ou teve mãe, pode comer\n2. Se veio de uma fábrica, não coma\n3. Coma proteína primeiro, enche mais\n4. Beba água antes das refeições\n\n**JUNK FOOD = -15 HP** no app e na vida real.\n\n**Desafio:** 7 dias sem açúcar refinado → +200 XP bônus.\n\nQual foi sua última refeição?`,
    },

    {
      gatilhos: ["agua", "hidratação", "beber água", "água"],
      resposta: `**💧 HIDRATAÇÃO ALPHA**\n\n**QUANTO BEBER:**\n→ 35ml por kg de peso corporal\n→ Ex: 80kg = 2.8L/dia\n→ Em dias de treino: +0.5L\n\n**QUANDO BEBER:**\n→ 500ml ao acordar (ativa metabolismo)\n→ 250ml antes de cada refeição\n→ 250ml antes/durante/depois do treino\n→ 250ml 1h antes de dormir (evita acordar com sede)\n\n**DICA:** Garrafa de 1L ao lado o tempo todo. Se vir, você bebe.\n\n**MISSÃO:** 7 dias com 3L+ → +150 XP, +25 coins\n\n**BÔNUS:** Hidratação adequada melhora foco, disposição e recuperação muscular.\n\nQuantos litros você bebeu hoje?`,
    },

    {
      gatilhos: ["sono", "dormir", "descanso", "sleep", "insônia", "acordar"],
      resposta: `**🌙 PROTOCOLO DO SONO — A BASE DE TUDO**\n\n**METAS:**\n→ Dormir 22:30 - 05:30 (7h)\n→ Ciclo completo (5 ciclos de 90min)\n\n**ROTINA NOTURNA (21:00 - 22:30):**\n1. Sem telas (luz azul atrapalha melatonina)\n2. Luz ambiente baixa\n3. Temperatura do quarto 18-20°C\n4. Sem cafeína após 14h\n5. Leitura física (nada digital)\n6. Alongamento leve\n\n**POR QUE IMPORTA:**\n→ Memória e aprendizado consolidam durante o sono\n→ Testosterona e GH são produzidos durante o sono profundo\n→ Disposição no dia seguinte depende 100% do sono\n\n**SINAIS DE SONO RUIM:**\n→ Depende de café para funcionar\n→ Irritabilidade\n→ Dificuldade de foco\n→ Ganho de peso inexplicado\n\n**SE NÃO DORME, NADA FUNCIONA.**\n\nQue horas você vai dormir hoje?`,
    },

    {
      gatilhos: [
        "hp",
        "vida",
        "pontos de vida",
        "recuperar",
        "recuperar hp",
        "saúde",
      ],
      resposta: `**❤️ SEU HP — SISTEMA DE INTEGRIDADE**\n\n**HP ATUAL:** ${S.hp}/${S.maxHp}\n\n**HP REPRESENTA:**\nSua energia física e mental. Quando cai, você está se desgastando.\n\n**PERDE HP QUANDO:**\n→ Registra maus hábitos\n→ Pula treinos\n→ Alimentação ruim\n→ Estresse excessivo\n\n**RECUPERA HP:**\n→ Botão \"Recuperar HP\" (50 coins, 3x/dia)\n→ Descanso adequado\n→ Alimentação limpa\n→ Atividade física\n\n**SE HP ZERAR:**\nVocê \"morre\" — perde 50% do XP do nível atual e reseta HP.\n\n**REGRRA DE OURO:** Nunca deixe HP abaixo de 30. É o sinal de que precisa parar e recuperar.\n\n**Como está seu HP hoje? Precisa recuperar?**`,
    },

    // ==================== TECNOLOGIA E CARREIRA ====================
    {
      gatilhos: [
        "código",
        "codigo",
        "programação",
        "programacao",
        "coding",
        "dev",
        "desenvolver",
        "programar",
      ],
      resposta: `**💻 CÓDIGO — ARMA DO NÔMADE**\n\n**STACK PARA 2025:**\n→ Frontend: React + TypeScript\n→ Backend: Node.js, Python, Go\n→ Cloud: AWS (EC2, Lambda, S3)\n→ Banco: PostgreSQL, MongoDB\n\n**ROTEIRO DE APRENDIZADO:**\n\n**MÊS 1-2:** Fundamentos sólidos (lógica, estrutura de dados)\n**MÊS 3-4:** Framework e projetos simples\n**MÊS 5-6:** API, banco de dados, deploy\n**MÊS 7-8:** Projeto real, portfólio\n**MÊS 9-12:** LeetCode, entrevistas técnicas\n\n**RECURSOS GRÁTIS:**\n→ The Odin Project\n→ FreeCodeCamp\n→ CS50 de Harvard\n→ LeetCode (grátis)\n\n**REGRAS DE OURO:**\n1. Código todo dia, nem que seja 25min\n2. Um projeto real vale mais que 10 cursos\n3. Publique no GitHub (seu currículo)\n\n**Qual seu próximo projeto?**`,
    },

    {
      gatilhos: [
        "github",
        "portfolio",
        "portfólio",
        "repositório",
        "repositorio",
      ],
      resposta: `**📦 GITHUB — SEU CURRÍCULO VIVO**\n\n**POR QUE IMPORTA:**\n→ Empresas avaliam seu código, não seu diploma\n→ Prova de consistência (ver streak verde)\n→ Rede de contatos\n\n**O QUE TER NO PERFIL:**\n\n**Pinned Repositórios:**\n1. Projeto fullstack (API + frontend)\n2. Projeto que resolve problema real\n3. Lib ou ferramenta útil\n4. README impecável (documentação)\n\n**README BEM FEITO:**\n→ Demo (gif/vídeo)\n→ Tecnologias\n→ Como rodar\n→ Screenshots\n\n**META:**\n→ 1 commit por dia (mesmo que pequeno)\n→ Contribuições em open-source\n→ Estrelas em projetos que usa\n\n**SINAL VERDE:** Seu GitHub está verde hoje?\n\n**Missão:** 30 dias de commits consecutivos → +500 XP`,
    },

    {
      gatilhos: [
        "leet code",
        "leetcode",
        "algoritmos",
        "entrevista técnica",
        "tech interview",
      ],
      resposta: `**⚔️ LEETCODE — PREPARAÇÃO PARA ENTREVISTAS**\n\n**ESTRATÉGIA:**\n\n**SEMANA 1-4:** Arrays, Hashmaps, Strings (Fácil)\n**SEMANA 5-8:** Linked Lists, Trees, Recursão (Médio)\n**SEMANA 9-12:** Graphs, DP, System Design (Médio/Difícil)\n\n**ROTINA IDEAL:**\n→ 1 problema por dia (25-45min)\n→ Se não resolver em 30min, veja solução, entenda, refaça\n→ Revisite problemas após 1 semana\n\n**TÉCNICA DOS 20 MINUTOS:**\nSe em 20 minutos não tiver ideia, veja a solução. Entender solução alheia é tão valioso quanto criar a sua.\n\n**RECURSOS:**\n→ Neetcode.io (roadmap)\n→ AlgoExpert (pago, mas excelente)\n→ YouTube: "NeetCode", "Back To Back SWE"\n\n**META:** 50 problemas resolvidos → Título "Algorithm Master"\n\nQuantos problemas você resolveu essa semana?`,
    },

    {
      gatilhos: [
        "saas",
        "empreender",
        "startup",
        "negócio",
        "negocio",
        "renda extra",
      ],
      resposta: `**🚀 SAAS — O CAMINHO DA LIBERDADE FINANCEIRA**\n\n**ROTEIRO MVP (Mínimo Produto Viável):**\n\n**FASE 1 - VALIDAÇÃO (1-2 semanas)**\n→ Encontre um problema que você tem\n→ Fale com 10 pessoas sobre o problema\n→ Crie landing page com waitlist\n\n**FASE 2 - CONSTRUÇÃO (2-4 semanas)**\n→ Frontend + backend básico\n→ Funcionalidade principal APENAS\n→ Stripe para pagamentos\n\n**FASE 3 - LANÇAMENTO (1 semana)**\n→ Poste em comunidades (Indie Hackers, Reddit)\n→ 100 usuários primeiro mês\n→ Colete feedback\n\n**FASE 4 - ITERAÇÃO**\n→ Melhore baseado em feedback\n→ Marketing de conteúdo\n→ Primeiros pagantes\n\n**META INICIAL:** $100/mês → $1.000/mês → $10.000/mês\n\n**RECURSOS:**\n→ indiehackers.com\n→ shipfast.com\n→ makerpad.co\n\n**Missão:** 30 dias para MVP. Aceita?`,
    },

    {
      gatilhos: [
        "inglês",
        "ingles",
        "aprender inglês",
        "aprender ingles",
        "idioma",
        "english",
      ],
      resposta: `**🇺🇸 INGLÊS — PORTA PARA O MUNDO**\n\n**PROTOCOLO DE IMERSÃO DIÁRIA:**\n\n**MANHÃ (15min)**\n→ Podcast em inglês enquanto se arruma\n→ Duolingo (1 lição)\n\n**TARDE (15min)**\n→ Leitura: 1 página de livro técnico em inglês\n→ Escreva 3 frases sobre seu dia\n\n**NOITE (15min)**\n→ Série com legenda em inglês\n→ Roleplay do app (fale em voz alta)\n\n**METAS SEMANAIS:**\n→ 5 vídeos no YouTube sem legenda\n→ 1 conversa com nativo (HelloTalk, Tandem)\n→ 500 palavras novas no Anki\n\n**NÍVEIS:**\nA1-A2: Duolingo + conteúdo básico\nB1-B2: Séries com legenda, conversas\nC1-C2: Conteúdo nativo, entrevistas técnicas\n\n**META REAL:** Entrevista técnica em inglês em 6 meses.\n\n**Comece agora:** Assista 5min de algo em inglês. Agora.`,
    },

    {
      gatilhos: [
        "freela",
        "freelancer",
        "trabalho remoto",
        "remoto",
        "remote work",
        "home office",
      ],
      resposta: `**💼 TRABALHO REMOTO — O CAMINHO NÔMADE**\n\n**COMO COMEÇAR:**\n\n**FASE 1 - PORTFÓLIO (1-2 meses)**\n→ 2-3 projetos completos\n→ GitHub ativo\n→ LinkedIn otimizado\n\n**FASE 2 - PLATAFORMAS**\n→ Upwork (comece com projetos pequenos)\n→ Toptal (após experiência)\n→ We Work Remotely\n→ RemoteOK\n\n**FASE 3 - NETWORKING**\n→ Participe de comunidades\n→ Twitter tech\n→ Contribua em open-source\n\n**FASE 4 - ENTREVISTAS**\n→ LeetCode (mínimo 50 problemas)\n→ System Design\n→ Portfolio de projetos reais\n\n**DICA:** Seu primeiro cliente é o mais difícil. Pegue um projeto pequeno, entregue perfeito, peça referência.\n\n**META:** 1 ano para primeiro trabalho remoto internacional.\n\n**O que falta no seu caminho?**`,
    },

    {
      gatilhos: ["linkedin", "curriculo", "cv", "resume", "networking"],
      resposta: `**📱 LINKEDIN — SUA VITRINE PROFISSIONAL**\n\n**PERFIL OTIMIZADO:**\n\n**TÍTULO:** "Software Engineer | Fullstack | React, Node.js"\n\n**SOBRE:**\n→ Seu valor em 3 linhas\n→ Tecnologias que domina\n→ Projetos relevantes\n\n**DESTAQUES:**\n→ Posts técnicos semanais\n→ Compartilhe aprendizados\n→ Engaje com líderes da área\n\n**EXPERIÊNCIA:**\n→ Mesmo freela conta\n→ Descreva resultados, não tarefas\n→ Ex: "Aumentei performance em 40%"\n\n**RECOMENDAÇÕES:**\n→ Peça para colegas/chefes\n→ Ofereça recomendações em troca\n\n**ESTRATÉGIA DE CONEXÕES:**\n→ 5 conexões novas/dia\n→ Recrutadores de empresas-alvo\n→ Pessoas da sua stack\n\n**DICA PESADA:** Recrutadores usam LinkedIn antes do currículo. Seu perfil É seu currículo.\n\n**META:** 500+ conexões relevantes em 6 meses.`,
    },

    {
      gatilhos: [
        "entrevista",
        "entrevista de emprego",
        "job interview",
        "processo seletivo",
      ],
      resposta: `**🎤 ENTREVISTA TÉCNICA — PREPARAÇÃO**\n\n**FASES:**\n\n**1. SCREENING (15-30min)**\n→ Apresentação pessoal (pratique!)\n→ Experiência e projetos\n→ Por que a empresa?\n\n**2. TÉCNICA (45-60min)**\n→ LeetCode (2 problemas)\n→ Fale enquanto resolve\n→ Teste mental\n\n**3. SYSTEM DESIGN (45-60min)**\n→ Escalabilidade\n→ Trade-offs\n→ Explicar decisões\n\n**4. CULTURAL FIT (30min)**\n→ Valores pessoais\n→ Trabalho em equipe\n→ Conflitos\n\n**DICAS DE OURO:**\n→ Grave suas respostas e assista\n→ Faça mock interviews\n→ Conheça a empresa (pesquise!)\n→ Prepare 3 perguntas inteligentes\n\n**ROLEPLAY DISPONÍVEL:**\nNo app, vá em "Roleplays" e pratique a entrevista técnica.\n\n**Quando é sua próxima entrevista?**`,
    },

    // ==================== NÔMADE DIGITAL ====================
    {
      gatilhos: [
        "nômade",
        "nomade",
        "viajar trabalhando",
        "liberdade geográfica",
        "digital nomad",
      ],
      resposta: `**🌍 NÔMADE DIGITAL — O MANIFESTO**\n\n**FASES DA TRANSFORMAÇÃO:**\n\n**FASE 1 - PREPARAÇÃO (3-6 meses)**\n→ Habilidade vendável (código, design, copy)\n→ Reserva de 6 meses de custo\n→ Passaporte em dia\n→ Primeiros clientes/freelas\n\n**FASE 2 - PRIMEIRA VIAGEM (1-3 meses)**\n→ Escolha destino custo-benefício (Bali, Portugal, Tailândia)\n→ Airbnb mensal\n→ Coworking local\n→ Rotina mantida\n\n**FASE 3 - EXPANSÃO (6-12 meses)**\n→ Renda estável\n→ Múltiplos destinos\n→ Networking global\n→ Base em país estratégico\n\n**FASE 4 - DOMÍNIO (1-3 anos)**\n→ Renda passiva\n→ Múltiplas nacionalidades\n→ Propriedades em países-chave\n\n**PRIMEIROS DESTINOS SUGERIDOS:**\n🇵🇹 Portugal (custo médio, fácil visto)\n🇹🇭 Tailândia (custo baixo, comunidade forte)\n🇪🇸 Espanha (qualidade de vida)\n🇧🇷 Brasil (se já tem renda em moeda forte)\n\n**Em qual fase você está?**`,
    },

    {
      gatilhos: ["portugal", "europa", "visto", "cidadania", "residência"],
      resposta: `**🛂 PORTUGAL — PORTA DE ENTRADA NA EUROPA**\n\n**VIAS DE ENTRADA:**\n\n**1. VISTO DE RESIDÊNCIA PARA REMOTOS**\n→ Comprovação de renda (salário)\n→ Seguro saúde\n→ Alojamento\n→ Validade: 1 ano, renovável\n\n**2. VISTO D7**\n→ Renda passiva ou remota\n→ Mais estável que D8\n\n**3. CIDADANIA (5 anos)**\n→ Residência legal por 5 anos\n→ Prova de vínculo com Portugal\n→ Exame de português A2\n→ Possibilidade de dupla cidadania\n\n**CUSTOS APROXIMADOS:**\nAluguel: €800-1500/mês (Lisboa/Porto)\nAlimentação: €300-500/mês\nSaúde: €50-100/mês (seguro)\n\n**BENEFÍCIOS:**\n→ Passaporte europeu após 5 anos\n→ Mobilidade na UE\n→ Segurança e infraestrutura\n\n**Já tem passaporte? Se não, comece agora.**`,
    },

    {
      gatilhos: ["bali", "indonésia", "ásia", "asia", "custo de vida"],
      resposta: `**🏝️ BALI — PARAÍSO DO NÔMADE**\n\n**CUSTO DE VIDA MENSAL (USD):**\n→ Aluguel: $400-800 (vila com piscina)\n→ Alimentação: $200-400\n→ Coworking: $100-150\n→ Transporte (scooter): $50\n→ **Total: $800-1.500/mês**\n\n**MELHORES ÁREAS:**\n→ Canggu: surf, vida social, coworkings\n→ Ubud: yoga, natureza, tranquilidade\n→ Sanur: família, mais calmo\n\n**VISTO:**\n→ Turista: 30 dias, renovável +30\n→ B211A: 60 dias, renovável 2x (total 180 dias)\n→ KITAS: residência (se empresa local)\n\n**DICAS:**\n→ Scooter é essencial\n→ Internet boa em coworkings\n→ Comunidade enorme (eventos toda semana)\n\n**RISCOS:**\n→ Trânsito caótico\n→ Chuva dez-fev\n→ Distrações (festas)\n\n**Missão:** 3 meses em Bali, mantendo rotina e streak → +5.000 XP`,
    },

    {
      gatilhos: ["thailandia", "tailandia", "bangko", "chiang mai"],
      resposta: `**🇹🇭 TAILÂNDIA — O HUB NÔMADE ASIÁTICO**\n\n**CUSTO DE VIDA (USD):**\n→ Aluguel: $300-600 (condomínio)\n→ Alimentação: $150-300\n→ Coworking: $80-120\n→ Transporte: $50-100\n→ **Total: $600-1.200/mês**\n\n**MELHORES CIDADES:**\n→ Bangkok: vida urbana, tudo disponível\n→ Chiang Mai: comunidade nômade gigante, custo baixo\n→ Phuket: praia, surf, lifestyle\n→ Koh Phangan: wellness, digital detox\n\n**VISTO:**\n→ Turista: 60 dias, renovável +30\n→ Educação: 1 ano (aprenda Thai ou Muay Thai)\n→ Elite: 5-20 anos (investimento)\n\n**POR QUE ESCOLHER:**\n→ Custo muito baixo\n→ Internet excelente\n→ Comida incrível\n→ Comunidade nômade gigante\n\n**DESAFIO:** Sobreviver 1 mês com orçamento de $800 → +1.000 XP`,
    },

    {
      gatilhos: ["passaporte", "documentos", "visto", "viajar"],
      resposta: `**🛂 PASAPORTE — SEU TÍQUETE PARA O MUNDO**\n\n**CHECKLIST:**\n\n**DOCUMENTOS:**\n→ Passaporte válido (mínimo 6 meses)\n→ Vistos necessários\n→ Carteira de vacinação internacional\n→ CNH internacional\n\n**SEGURANÇA:**\n→ Cópia digital de todos documentos\n→ Seguro viagem (obrigatório para Europa)\n→ Cartão internacional (Wise, Nomad)\n→ Reserva de emergência em dólar\n\n**BRASILEIROS:**\n→ Passaporte comum: 10 anos\n→ Isenção de visto: Europa (90 dias), Japão, etc\n→ Visto EUA (B1/B2): 10 anos (renovação online)\n→ Visto Canadá: eTA\n\n**SE NÃO TEM PASAPORTE, FAÇA AGORA.**\nO processo pode levar 2-3 meses.\n\n**Meta:** Passaporte nos próximos 30 dias.`,
    },

    // ==================== MENTALIDADE E FILOSOFIA ====================
    {
      gatilhos: [
        "motivação",
        "motivacao",
        "sem motivação",
        "sem motivacao",
        "desanimado",
        "triste",
      ],
      resposta: `**🔥 MOTIVAÇÃO É UMA MENTIRA**\n\nA verdade que ninguém conta:\n\n**Motivação é passageira.** Você não controla como se sente. Você controla o que faz.\n\n**Disciplina é confiável.** Ação gera motivação, não o contrário.\n\n**A FÓRMULA:**\nAção → Resultado → Motivação → Ação\nComece com a ação. A motivação aparece depois.\n\n**COMO AGIR AGORA:**\n1. Escolha a MENOR parte de uma tarefa\n2. Faça por 2 minutos\n3. Registre\n4. Repita\n\n**O MANTRA DO GUERREIRO:**\n\"Não dependo de como me sinto. Dependo do que faço.\"\n\n**Ação imediata:** Faça 1 push-up. Só 1. Agora.\n\n*(Depois me diga como se sentiu)*`,
    },

    {
      gatilhos: ["medo", "fear", "ansiedade", "ansioso", "nervoso"],
      resposta: `**😨 MEDO — SEU MAIOR ALIADO**\n\n**A VERDADE:**\nO medo não é seu inimigo. É seu termômetro de crescimento.\n\n**TUDO QUE VALE A PENA ESTÁ DO OUTRO LADO DO MEDO:**\n→ Primeiro código público → Medo\n→ Primeira entrevista em inglês → Medo\n→ Primeira viagem solo → Medo\n\n**O QUE O MEDO FAZ:**\n→ Te protege do desconhecido\n→ Mostra o que importa\n→ Indica onde você precisa crescer\n\n**COMO USAR O MEDO:**\n1. Identifique: \"Estou com medo de X\"\n2. Divida: Qual a MENOR parte de X?\n3. Aja: Faça essa parte (mesmo com medo)\n4. Repita\n\n**O MEDO DIMINUI COM AÇÃO, NÃO COM PENSAMENTO.**\n\n**O que você tem medo de fazer? Faça a menor parte agora.**`,
    },

    {
      gatilhos: ["fracasso", "falha", "erro", "falhei", "não consegui", "fail"],
      resposta: `**💀 FRACASSO — O ÚNICO CAMINHO**\n\n**QUEM NUNCA FALHOU, NUNCA TENTOU NADA DIFÍCIL.**\n\n**A MENTIRA:**\nFracasso é o fim.\n\n**A VERDADE:**\nFracasso é dados. É feedback. É o preço do aprendizado.\n\n**O QUE VOCÊ APRENDEU COM ESSA FALHA?**\n→ O que não funcionou?\n→ O que faria diferente?\n→ O que você controlava e não controlava?\n\n**PESSOAS DE SUCESSO FALHAM MAIS QUE AS MEDÍOCRES.**\nA diferença: elas não param.\n\n**COMO SE LEVANTAR:**\n1. Processe a emoção (mas não fique nela)\n2. Extraia a lição\n3. Planeje o próximo passo (menor possível)\n4. Execute AGORA\n\n**Falhou hoje?** Registre o mau hábito no app. A honestidade é o primeiro passo.\n\n**Agora:** O que você vai fazer nos próximos 25 minutos?`,
    },

    {
      gatilhos: ["ansiedade", "ansioso", "estresse", "pressão", "overwhelmed"],
      resposta: `**🌊 ANSIEDADE — DOMINANDO A MENTE**\n\n**O QUE É:**\nAnsiedade é seu cérebro tentando resolver problemas que ainda não existem.\n\n**FERRAMENTAS:**\n\n**1. RESPIRAÇÃO 4-7-8**\nInale 4s → Segure 7s → Exale 8s\nRepita 4x. Ativa sistema parassimpático.\n\n**2. ANÁLISE DE ANSIEDADE**\nPergunte-se:\n→ O que estou prevendo que vai dar errado?\n→ Qual a probabilidade real?\n→ Se acontecer, o que posso fazer?\n→ O que posso controlar AGORA?\n\n**3. AÇÃO**\nAção é o antídoto. Faça uma coisa pequena.\n\n**4. REGISTRE**\nEscreva. Colocar no papel tira da cabeça.\n\n**SE PERSISTIR:**\n→ Terapia não é fraqueza. É ferramenta.\n→ Exercício físico reduz ansiedade em 30%\n→ Menos cafeína, mais sono\n\n**Ação imediata:** 4 ciclos de respiração 4-7-8. Agora.`,
    },

    {
      gatilhos: ["burnout", "exausto", "cansado demais", "sem energia"],
      resposta: `**⚡ BURNOUT — O SINAL DE ALERTA**\n\n**SINTOMAS:**\n→ Exaustão física e mental\n→ Cinismo/distanciamento do trabalho\n→ Produtividade despencando\n→ Irritabilidade\n→ Problemas de sono\n\n**O QUE FAZER:**\n\n**IMEDIATO (HOJE):**\n1. Pare. Desconecte. Silêncio.\n2. Durma 8h+ hoje\n3. Sem telas após 20h\n4. Alimentação limpa\n\n**PRÓXIMOS 3 DIAS:**\n→ Reduza carga em 50%\n→ Nada de trabalho após 18h\n→ Caminhada ao ar livre\n→ Meditação 10min/dia\n\n**PRÓXIMA SEMANA:**\n→ Reveja prioridades\n→ Delegue o que puder\n→ Estabeleça limites claros\n\n**PREVENÇÃO:**\n→ Pomodoros com pausas\n→ Limite de horas trabalhadas\n→ Descanso ativo (natureza, exercício)\n→ Férias planejadas\n\n**AVISO:** Burnout não é fraqueza. É seu corpo gritando que o sistema quebrou.\n\n**Quando foi sua última pausa verdadeira?**`,
    },

    {
      gatilhos: [
        "propósito",
        "sentido",
        "por que",
        "qual meu propósito",
        "missão de vida",
      ],
      resposta: `**🎯 PROPÓSITO — A BUSCA QUE NUNCA ACABA**\n\n**A VERDADE:**\nPropósito não é algo que você encontra. É algo que você constrói.\n\n**PERGUNTAS QUE AJUDAM:**\n\n1. **O QUE VOCÊ FARIA SE DINHEIRO NÃO IMPORTASSE?**\nA resposta aponta sua paixão.\n\n2. **NO QUE VOCÊ É NATURALMENTE BOM?**\nO que as pessoas pedem sua ajuda?\n\n3. **O QUE O MUNDO PRECISA?**\nQue problema você pode resolver?\n\n4. **PELO QUE VOCÊ SOFRERIA?**\nO que vale a pena a dificuldade?\n\n**SUA MISSÃO AGORA:**\nNão precisa saber o propósito de vida inteira.\nSó precisa saber o propósito dos próximos 30 dias.\n\n**O PROPÓSITO SE REVELA NA AÇÃO, NÃO NA REFLEXÃO.**\n\n**Qual seu propósito para esta semana?**`,
    },

    {
      gatilhos: ["gratidão", "agradecer", "grato", "obrigado"],
      resposta: `**🙏 GRATIDÃO — ARMA SECRETA**\n\n**POR QUE PRATICAR:**\n→ Aumenta felicidade em 25%\n→ Reduz ansiedade\n→ Melhora sono\n→ Fortalece resiliência\n\n**COMO PRATICAR (3min/dia):**\n\nEscreva 3 coisas pelas quais é grato HOJE:\n1. _________________\n2. _________________\n3. _________________\n\n**REGRAS:**\n→ Específico (não \"minha família\", mas \"a ligação da minha mãe hoje\")\n→ Pequenas coisas contam\n→ Pessoas contam mais que coisas\n\n**BÔNUS:** Envie uma mensagem de agradecimento a alguém hoje.\n\n**EXERCÍCIO:** Liste 3 coisas pelas quais você é grato agora.\n\n*(Depois me diga como se sentiu)*`,
    },

    {
      gatilhos: ["foco", "concentração", "concentrar", "distração"],
      resposta: `**🎯 FOCO — SUPERPODER ESCASSO**\n\n**A REALIDADE:**\nSua atenção é seu ativo mais valioso.\n\n**QUEM CONTROLA SUA ATENÇÃO CONTROLA SUA VIDA.**\n\n**TÉCNICAS:**\n\n**1. DEEP WORK (2-4h/dia)**\n→ Sem interrupções\n→ Pomodoro 25/5\n→ Uma tarefa apenas\n→ Celular em outro cômodo\n\n**2. BLOQUEIE DISTRAÇÕES**\n→ Apps: Freedom, Cold Turkey\n→ Notificações: TUDO desligado\n→ Horário específico para email/whats\n\n**3. AMBIENTE**\n→ Mesa limpa\n→ Sem telas paralelas\n→ Fone com ruído branco\n\n**4. ENERGIA**\n→ Foco exige glicose (coma bem)\n→ Exercício pela manhã\n→ Dormir bem\n\n**SEU FOCO MÁXIMO:**\n2-4 horas por dia. Só.\n\n**Proteja esse tempo como se fosse sua vida. Porque, em muitos sentidos, é.**\n\n**Quando será seu próximo deep work?**`,
    },

    {
      gatilhos: ["autoconhecimento", "se conhecer", "quem sou", "identidade"],
      resposta: `**🧠 AUTOCONHECIMENTO — A BASE DE TUDO**\n\n**PERGUNTAS PARA REFLEXÃO:**\n\n**VALORES:**\nO que você NUNCA faria, nem por todo dinheiro do mundo?\n\n**MOTIVAÇÕES:**\nO que te faz levantar da cama quando tudo dá errado?\n\n**PADRÕES:**\nQue comportamento você repete que te prejudica?\n\n**MEDOS:**\nDo que você foge consistentemente?\n\n**SONHOS:**\nSe não pudesse falhar, o que tentaria?\n\n**MÉTODO:**\n→ Journaling diário (5min)\n→ Feedback de pessoas que confia\n→ Terapia (ferramenta, não vergonha)\n→ Testes de personalidade (MBTI, Eneagrama)\n\n**O CONHECIMENTO DE SI É A ÚNICA COISA QUE NINGUÉM PODE TIRAR DE VOCÊ.**\n\n**Uma coisa que você aprendeu sobre si essa semana?**`,
    },

    // ==================== RECOMPENSAS E LOJA ====================
    {
      gatilhos: ["loja", "recompensas", "comprar", "store", "shop", "rewards"],
      resposta: `**★ LOJA DE RECOMPENSAS**\n\n**COINS:** ${S.coins}\n\n**COMO USAR:**\nVá no Perfil → "Loja de Recompensas"\n\n**RECOMPENSAS DISPONÍVEIS:**\n${REWARDS.filter(
        (r) => r.req <= lvl(),
      )
        .slice(0, 5)
        .map((r) => `→ ${r.emoji} ${r.name}: ${r.cost} coins`)
        .join(
          "\n",
        )}\n\n**PRÓXIMA RECOMENDAÇÃO:**\n${REWARDS.filter((r) => r.req <= lvl() && r.cost > S.coins).sort((a, b) => a.cost - b.cost)[0]?.name || "Todas desbloqueadas!"}\n\n**REGRAS:**\n→ Cada recompensa tem requisito de nível\n→ Use coins para celebrar conquistas\n→ Recompensas são lembretes do seu progresso\n\n**Qual você vai comprar primeiro?**`,
    },

    {
      gatilhos: ["como ganhar coins", "farmar coins", "coins rápido"],
      resposta: `**🪙 COINS — ESTRATÉGIAS DE ACUMULAÇÃO**\n\n**FONTES DIÁRIAS:**\n✅ Hábitos completos: +50-200 coins/dia\n✅ Treinos registrados: +10 coins cada\n✅ Protocolo completo: +100 coins bônus\n\n**MISSÕES:**\n→ Easy: 20-50 coins\n→ Normal: 100-200 coins\n→ Hard: 300-600 coins\n→ Epic: 1.000-2.000 coins\n→ Legendary: 5.000-25.000 coins\n\n**BÔNUS:**\n→ Streak 7 dias: +100 coins\n→ Streak 30 dias: +500 coins\n→ Subir de nível: +50 coins\n\n**FARMING RÁPIDO:**\n1. Complete todas as missões fáceis disponíveis\n2. Mantenha streak para bônus\n3. Faça todos os hábitos diários\n\n**META:** 1.000 coins/mês para recompensas de médio porte.\n\n**Quanto você tem?**`,
    },

    // ==================== FECHAMENTO ====================
    {
      gatilhos: ["tchau", "até mais", "falou", "vou indo", "sair", "fim"],
      resposta: `**⚔️ ATÉ A PRÓXIMA, GUERREIRO**\n\nLembre-se:\n\n**Você não precisa estar motivado. Você precisa estar comprometido.**\n\n**O que você fez hoje que te aproximou do seu Alter-Ego?**\n\nSe a resposta for "nada", ainda há tempo. Uma ação. Só uma.\n\n**Volte quando precisar de um confronto honesto.**\n\n🔥 **Streak atual: ${S.globalStreak} dias. Não quebre.**`,
    },

    {
      gatilhos: [
        "obrigado",
        "valeu",
        "ajudou",
        "grato",
        "vlw",
        "obg",
        "thanks",
      ],
      resposta: `**Sem papo. Agora vai e executa.**\n\nResultados aparecem na ação, não na conversa.\n\n**Sua próxima ação em 3... 2... 1...**\n\n(Se ainda está lendo, já perdeu 10 segundos. Corre.)`,
    },
  ],

  resposta_padrao: `🤖 **KAI NÃO RECONHECE ESSA PERGUNTA.**\n\nMas não se preocupe — estou aqui para te confrontar, não para te responder automaticamente.\n\n**Tente perguntar sobre:**\n\n📊 **PROGRESSO E ANÁLISE**\n→ "Analise meu progresso"\n→ "Como estou?"\n→ "Meu streak"\n\n⚔️ **MISSÕES E DESAFIOS**\n→ "Missão do dia"\n→ "Me desafie"\n→ "Missão fácil/normal/hard/epic/legendary"\n\n🧠 **HÁBITOS E ROTINA**\n→ "Criar hábito"\n→ "Acordar cedo"\n→ "Banho gelado"\n→ "Meditação"\n→ "Procrastinação"\n\n💪 **SAÚDE E CORPO**\n→ "Treino"\n→ "Calistenia"\n→ "Alimentação"\n→ "Sono"\n\n💻 **TECNOLOGIA**\n→ "Código"\n→ "GitHub"\n→ "LeetCode"\n→ "SaaS"\n→ "Inglês"\n\n🌍 **NÔMADE**\n→ "Nômade digital"\n→ "Portugal"\n→ "Bali"\n→ "Passaporte"\n\n🧘 **MENTALIDADE**\n→ "Motivação"\n→ "Medo"\n→ "Ansiedade"\n→ "Fracasso"\n→ "Propósito"\n\n**Ou fale o que precisa. Estou aqui.** ⚡`,
};

function responderOffline(msg) {
  const m = msg
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  for (const item of KAI_DB.respostas) {
    const normalizedGatilhos = item.gatilhos.map((g) =>
      g.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
    );
    if (normalizedGatilhos.some((g) => m.includes(g))) {
      return item.resposta
        .replace(/\$\{lvl\(\)\}/g, lvl())
        .replace(/\$\{rank\(\)\.name\}/g, rank().name)
        .replace(/\$\{S\.xp\}/g, S.xp)
        .replace(/\$\{S\.completedDaily\.length\}/g, S.completedDaily.length)
        .replace(/\$\{DAILY_TASKS\.length\}/g, DAILY_TASKS.length)
        .replace(/\$\{S\.streak\}/g, S.streak)
        .replace(/\$\{S\.globalStreak\}/g, S.globalStreak)
        .replace(/\$\{getMultiplier\(\)\}/g, getMultiplier());
    }
  }
  return KAI_DB.resposta_padrao;
}

let aiReady = false;
function initAIScreen() {
  if (aiReady) return;
  aiReady = true;
  const qps = document.getElementById("qp-area");
  const prompts = [
    "Crie meu Alter-Ego",
    "Analise meu progresso",
    "Missão do dia",
    "Me desafie",
    "Técnica de estudo",
  ];
  qps.innerHTML = prompts
    .map((p) => `<button class="qp-btn" onclick="qpSend('${p}')">${p}</button>`)
    .join("");

  const chatArea = document.getElementById("chat-area");
  chatArea.innerHTML = "";
  if (S.chatHistory.length === 0) {
    appendMsg(
      "ai",
      "Sou **KAI**, seu Alter-Ego de IA.\n\nNível **" +
        lvl() +
        '** · Rank "' +
        rank().name +
        '" · **' +
        S.xp +
        " XP**\n🔥 Multiplicador: **" +
        getMultiplier() +
        "x**\n\nEstou aqui para te desafiar, não para te confortar.\n\nComeçamos?",
    );
  } else {
    S.chatHistory.forEach((m) => appendMsg(m.role, m.content, false));
    chatArea.scrollTop = chatArea.scrollHeight;
  }
}

function appendMsg(role, content, save_ = true) {
  const area = document.getElementById("chat-area");
  if (!area) return;
  const div = document.createElement("div");
  div.className = "msg " + role;
  const now = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const html = content
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
  div.innerHTML = `<div class="msg-bubble">${html}</div><div class="msg-time">${now}</div>`;
  area.appendChild(div);
  area.scrollTop = area.scrollHeight;
  if (save_) {
    S.chatHistory.push({ role, content });
    if (S.chatHistory.length > 60) S.chatHistory = S.chatHistory.slice(-60);
    save();
  }
}

function showTyping() {
  const area = document.getElementById("chat-area");
  const div = document.createElement("div");
  div.className = "msg ai";
  div.id = "typing-msg";
  div.innerHTML = `<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
  area.appendChild(div);
  area.scrollTop = area.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById("typing-msg");
  if (t) t.remove();
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if (!msg) return;
  input.value = "";
  input.style.height = "42px";

  appendMsg("user", msg);
  showTyping();

  setTimeout(
    () => {
      removeTyping();
      const resposta = responderOffline(msg);
      appendMsg("ai", resposta);

      const userMsgs = S.chatHistory.filter((m) => m.role === "user").length;
      if (userMsgs > 0 && userMsgs % 5 === 0) {
        addXP(25, "cha");
        toast("🧠 +25 XP CHA — Conversa com KAI", "ok", 2500);
      }
    },
    800 + Math.random() * 600,
  );
}

function qpSend(text) {
  document.getElementById("chat-input").value = text;
  sendMessage();
}

function handleChatKey(e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function autoResize(el) {
  el.style.height = "42px";
  el.style.height = Math.min(el.scrollHeight, 100) + "px";
}

// ════════════════════════════════════════
// MODAL / TOAST
// ════════════════════════════════════════
function showModal(html) {
  document.getElementById("modal-body").innerHTML = html;
  document.getElementById("overlay").classList.add("open");
}

function closeModal() {
  document.getElementById("overlay").classList.remove("open");
}
function closeOverlay(e) {
  if (e.target === document.getElementById("overlay")) closeModal();
}

function toast(msg, type = "ok", dur = 2500) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.className = "toast show " + type;
  clearTimeout(el._t);
  el._t = setTimeout(() => {
    el.className = "toast";
  }, dur);
}

function showLvlUp(n) {
  const el = document.getElementById("lvlup");
  el.innerHTML =
    '⚡ LEVEL UP ⚡<br><span style="font-size:14px;color:var(--muted2)">NÍVEL ' +
    n +
    " — " +
    rank().name +
    "</span>";
  el.className = "lvlup show";
  setTimeout(() => {
    el.className = "lvlup";
  }, 2800);
  if (window.navigator.vibrate) window.navigator.vibrate([100, 50, 100]);
}

// ════════════════════════════════════════
// INIT
// ════════════════════════════════════════
updateAllUI();
renderHome();

// ════════════════════════════════════════
// CRUD FUNCTIONS
// ════════════════════════════════════════

function openAddHabit() {
  showModal(`
    <div style="font-family:'Rajdhani',sans-serif;padding:10px">
      <h2 style="margin-bottom:15px;color:var(--purple);font-family:'Orbitron'">Novo Hábito</h2>
      <div style="margin-bottom:12px">
        <label style="display:block;font-size:12px;color:var(--muted);margin-bottom:4px">NOME DO HÁBITO</label>
        <input id="new-h-name" type="text" style="width:100%;background:var(--card2);border:1px solid var(--border);padding:10px;border-radius:8px;color:white" placeholder="Ex: Meditar 10min">
      </div>
      <div style="margin-bottom:12px">
        <label style="display:block;font-size:12px;color:var(--muted);margin-bottom:4px">XP RECOMPENSA</label>
        <input id="new-h-xp" type="number" style="width:100%;background:var(--card2);border:1px solid var(--border);padding:10px;border-radius:8px;color:white" value="100">
      </div>
      <div style="margin-bottom:20px">
        <label style="display:block;font-size:12px;color:var(--muted);margin-bottom:4px">ÍCONE (EMOJI)</label>
        <input id="new-h-icon" type="text" style="width:100%;background:var(--card2);border:1px solid var(--border);padding:10px;border-radius:8px;color:white" value="⚡">
      </div>
      <button class="btn btn-primary" style="width:100%" onclick="addHabit()">CRIAR HÁBITO</button>
    </div>
  `);
}

function addHabit() {
  const name = document.getElementById('new-h-name').value;
  const xp = parseInt(document.getElementById('new-h-xp').value);
  const icon = document.getElementById('new-h-icon').value;
  
  if (!name) return toast("Nome é obrigatório", "fail");
  
  const newHabit = {
    id: 'custom_' + Date.now(),
    name,
    xp,
    icon,
    stat: 'dis'
  };
  
  S.customHabits.push(newHabit);
  save();
  closeOverlay();
  renderHabitos();
  toast("Hábito criado!", "ok");
}

function deleteHabit(id) {
  if (confirm("Excluir este hábito?")) {
    S.customHabits = S.customHabits.filter(h => h.id !== id);
    save();
    renderHabitos();
    toast("Hábito excluído", "ok");
  }
}

function openAddMission() {
  showModal(`
    <div style="font-family:'Rajdhani',sans-serif;padding:10px">
      <h2 style="margin-bottom:15px;color:var(--purple);font-family:'Orbitron'">Nova Missão</h2>
      <div style="margin-bottom:12px">
        <label style="display:block;font-size:12px;color:var(--muted);margin-bottom:4px">NOME DA MISSÃO</label>
        <input id="new-m-name" type="text" style="width:100%;background:var(--card2);border:1px solid var(--border);padding:10px;border-radius:8px;color:white" placeholder="Ex: Ler 1 livro">
      </div>
      <div style="margin-bottom:12px">
        <label style="display:block;font-size:12px;color:var(--muted);margin-bottom:4px">TIER</label>
        <select id="new-m-tier" style="width:100%;background:var(--card2);border:1px solid var(--border);padding:10px;border-radius:8px;color:white">
          <option value="easy">Easy</option>
          <option value="normal">Normal</option>
          <option value="hard">Hard</option>
          <option value="epic">Epic</option>
          <option value="legendary">Legendary</option>
        </select>
      </div>
      <div style="margin-bottom:12px">
        <label style="display:block;font-size:12px;color:var(--muted);margin-bottom:4px">XP RECOMPENSA</label>
        <input id="new-m-xp" type="number" style="width:100%;background:var(--card2);border:1px solid var(--border);padding:10px;border-radius:8px;color:white" value="500">
      </div>
      <div style="margin-bottom:20px">
        <label style="display:block;font-size:12px;color:var(--muted);margin-bottom:4px">COINS RECOMPENSA</label>
        <input id="new-m-coins" type="number" style="width:100%;background:var(--card2);border:1px solid var(--border);padding:10px;border-radius:8px;color:white" value="100">
      </div>
      <button class="btn btn-primary" style="width:100%" onclick="addMission()">CRIAR MISSÃO</button>
    </div>
  `);
}

function addMission() {
  const name = document.getElementById('new-m-name').value;
  const tier = document.getElementById('new-m-tier').value;
  const xp = parseInt(document.getElementById('new-m-xp').value);
  const coins = parseInt(document.getElementById('new-m-coins').value);
  
  if (!name) return toast("Nome é obrigatório", "fail");
  
  const newMission = {
    id: 'custom_' + Date.now(),
    name,
    tier,
    xp,
    coins,
    cat: 'Custom',
    stat: 'dis'
  };
  
  S.customMissions.push(newMission);
  save();
  closeOverlay();
  renderMissoes();
  toast("Missão criada!", "ok");
}

function deleteMission(id) {
  if (confirm("Excluir esta missão?")) {
    S.customMissions = S.customMissions.filter(m => m.id !== id);
    save();
    renderMissoes();
    toast("Missão excluída", "ok");
  }
}

function openAddRoleplay() {
  showModal(`
    <div style="font-family:'Rajdhani',sans-serif;padding:10px">
      <h2 style="margin-bottom:15px;color:var(--purple);font-family:'Orbitron'">Novo Roleplay</h2>
      <div style="margin-bottom:12px">
        <label style="display:block;font-size:12px;color:var(--muted);margin-bottom:4px">TÍTULO</label>
        <input id="new-r-title" type="text" style="width:100%;background:var(--card2);border:1px solid var(--border);padding:10px;border-radius:8px;color:white" placeholder="Ex: Venda de SaaS">
      </div>
      <div style="margin-bottom:12px">
        <label style="display:block;font-size:12px;color:var(--muted);margin-bottom:4px">DESCRIÇÃO</label>
        <textarea id="new-r-desc" style="width:100%;background:var(--card2);border:1px solid var(--border);padding:10px;border-radius:8px;color:white;height:80px" placeholder="Descreva o cenário..."></textarea>
      </div>
      <div style="margin-bottom:20px">
        <label style="display:block;font-size:12px;color:var(--muted);margin-bottom:4px">XP RECOMPENSA</label>
        <input id="new-r-xp" type="number" style="width:100%;background:var(--card2);border:1px solid var(--border);padding:10px;border-radius:8px;color:white" value="300">
      </div>
      <button class="btn btn-primary" style="width:100%" onclick="addRoleplay()">CRIAR ROLEPLAY</button>
    </div>
  `);
}

function addRoleplay() {
  const title = document.getElementById('new-r-title').value;
  const desc = document.getElementById('new-r-desc').value;
  const xp = parseInt(document.getElementById('new-r-xp').value);
  
  if (!title) return toast("Título é obrigatório", "fail");
  
  const newRoleplay = {
    id: 'custom_' + Date.now(),
    title,
    desc,
    xp,
    tier: 'CUSTOM'
  };
  
  S.customRoleplays.push(newRoleplay);
  save();
  closeOverlay();
  renderRoleplays();
  toast("Roleplay criado!", "ok");
}

function deleteRoleplay(id) {
  if (confirm("Excluir este roleplay?")) {
    S.customRoleplays = S.customRoleplays.filter(r => r.id !== id);
    save();
    renderRoleplays();
    toast("Roleplay excluído", "ok");
  }
}

// ════════════════════════════════════════
// CALISTENIA FUNCTIONS
// ════════════════════════════════════════

function renderCalistenia() {
  const list = document.getElementById("calistenia-list");
  if (!list) return;
  
  list.innerHTML = CALISTHENICS_DB.map(skill => `
    <div class="card" style="margin-bottom:15px; border-color: rgba(124, 58, 237, 0.3)">
      <div style="font-family:'Orbitron'; font-size:16px; font-weight:700; color:var(--purple); margin-bottom:10px">${skill.name}</div>
      <div class="prog-list">
        ${skill.progressions.map(prog => {
          const done = S.calisthenics[prog.id];
          return `
            <div class="task-row ${done ? 'done' : ''}" onclick="toggleCalistenia('${prog.id}')" style="padding: 10px; margin-bottom: 5px; background: rgba(255,255,255,0.03); border-radius: 8px;">
              <div class="task-check">${done ? '✓' : ''}</div>
              <div class="task-label" style="font-size:13px">${prog.name}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join("");
}

function renderKarate() {
  const content = document.getElementById("karate-content");
  if (!content) return;

  content.innerHTML = KARATE_DB.map(belt => `
    <div class="card" style="border-left: 8px solid ${belt.color}; margin-bottom: 20px;">
      <div style="background: ${belt.color}; color: ${belt.textColor}; padding: 4px 12px; border-radius: 4px; display: inline-block; font-family: 'Orbitron'; font-weight: 700; font-size: 14px; margin-bottom: 15px;">
        ${belt.belt.toUpperCase()}
      </div>
      
      ${belt.sections.map(section => `
        <div style="margin-bottom: 15px;">
          <div style="font-size: 12px; color: var(--muted); font-weight: 700; margin-bottom: 8px; letter-spacing: 1px;">
            ${section.title.toUpperCase()}
          </div>
          <div style="display: grid; grid-template-columns: 1fr; gap: 8px;">
            ${section.moves.map(move => `
              <a href="${move.url}" target="_blank" style="text-decoration: none; display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.03); border: 1px solid var(--border); padding: 12px; border-radius: 10px; transition: 0.2s;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-size: 18px;">🥋</span>
                  <span style="color: white; font-weight: 500;">${move.name}</span>
                </div>
                <span style="color: var(--purple); font-size: 12px;">VER VÍDEO ›</span>
              </a>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function toggleCalistenia(id) {
  if (S.calisthenics[id]) {
    delete S.calisthenics[id];
  } else {
    S.calisthenics[id] = true;
    addXP(50, 'for'); // Ganha um pouco de XP por progressão
    toast("Progressão concluída! +50 XP", "ok");
  }
  save();
  renderCalistenia();
}
