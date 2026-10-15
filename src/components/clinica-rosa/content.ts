// Conteúdo editável do modelo Movimenta — clínica de Pilates e fisioterapia.
// Nome, contatos, números, parceiros e depoimentos são exemplos: troque pelos dados reais da clínica.
// Fotos: Unsplash (licença Unsplash), em public/images/clinica-rosa/.

const img = (nome: string) => `/images/clinica-rosa/${nome}`;

export const clinica = {
  nome: "Movimenta",
  descricao: "Pilates e fisioterapia",
  resumo: "Pilates clínico e fisioterapia com atendimento próximo, para você voltar a se movimentar com confiança.",
  whatsapp: "5500000000000", // A CONFIRMAR: DDI + DDD + número, só dígitos
  email: "contato@suaclinica.com.br", // A CONFIRMAR
  endereco: "Rua Exemplo, 123 · Sua cidade", // A CONFIRMAR
  redes: [
    { rede: "instagram", url: "https://instagram.com/" },
    { rede: "facebook", url: "https://facebook.com/" },
    { rede: "whatsapp", url: "" }, // preenchido a partir do número acima
  ],
};

export const whatsappUrl = (mensagem = "Olá! Vim pelo site e gostaria de agendar uma avaliação.") =>
  `https://wa.me/${clinica.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const navegacao = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

export const hero = {
  titulo: "Cuidado que transforma seus movimentos",
  texto:
    "Pilates clínico e fisioterapia caminhando juntos. Avaliamos com calma, planejamos cada etapa e acompanhamos sua evolução para que você se mova com menos dor e mais segurança.",
  profissionais: [
    {
      src: img("hero-prof-1.webp"),
      alt: "Profissional de saúde sorrindo, de braços cruzados, com uniforme verde-azulado",
    },
    { src: img("hero-prof-2.webp"), alt: "Profissional de saúde sorrindo, de braços cruzados, com jaleco branco" },
  ],
  circulos: [
    { src: img("circulo-1.jpg"), alt: "Fisioterapeuta orientando exercício com faixa elástica" },
    { src: img("circulo-2.jpg"), alt: "Terapia manual nas costas" },
  ],
};

export const servicosAgendamento = ["Pilates clínico", "Fisioterapia", "Reabilitação funcional", "Terapia manual"];

export const diferenciais = [
  {
    icone: "HeartHandshake",
    titulo: "Cuidado individual",
    texto: "Cada sessão parte da sua avaliação, do seu histórico e dos seus objetivos.",
  },
  {
    icone: "Flower2",
    titulo: "Clínica acolhedora",
    texto: "Um ambiente calmo e reservado, pensado para você se sentir à vontade.",
  },
  {
    icone: "Users",
    titulo: "Equipe especializada",
    texto: "Pilates e fisioterapia conversando entre si em um único plano de cuidado.",
  },
] as const;

// Indicadores: use apenas informações verdadeiras. Estes descrevem o método, não resultados.
export const indicadores = [
  { icone: "Award", numero: "1:1", legenda: "Atenção individual" },
  { icone: "Stethoscope", numero: "2", legenda: "Especialidades integradas" },
  { icone: "Footprints", numero: "4", legenda: "Etapas de cuidado" },
] as const;

export const sobre = {
  selo: "Pilates e fisioterapia em um só lugar",
  foto: { src: img("sobre.jpg"), alt: "Fisioterapeuta realizando terapia manual nas costas de uma paciente deitada" },
  titulo: "Sinta a diferença de um cuidado integrado",
  texto:
    "Unimos a precisão da fisioterapia ao fortalecimento do Pilates. Assim, o tratamento não termina quando a dor passa: seguimos com você até o movimento ficar natural de novo.",
  pontos: ["Avaliação completa antes de começar", "Plano revisto conforme sua evolução"],
  assinatura: "Equipe Movimenta",
};

// Parceiros: nomes genéricos. Substitua pelos logotipos reais, com autorização.
export const parceiros = ["Convênio", "Academia", "Empresa", "Estúdio", "Parceiro"];

export const servicos = {
  descricao: "Tratamentos que se complementam, do alívio da dor ao fortalecimento, sempre com acompanhamento próximo.",
  itens: [
    {
      icone: "PersonStanding",
      titulo: "Pilates clínico",
      texto: "Exercícios orientados para fortalecer, alinhar a postura e ganhar consciência corporal.",
    },
    {
      icone: "Activity",
      titulo: "Fisioterapia",
      texto: "Avaliação e tratamento de dores e lesões, com técnicas indicadas para cada caso.",
    },
    {
      icone: "Dumbbell",
      titulo: "Reabilitação funcional",
      texto: "Retorno gradual às atividades do dia a dia, ao trabalho e ao esporte.",
    },
    {
      icone: "Hand",
      titulo: "Terapia manual",
      texto: "Técnicas manuais para aliviar tensões, melhorar a mobilidade e o bem-estar.",
    },
  ],
  foto: {
    src: img("servicos-maos.jpg"),
    alt: "Mãos de fisioterapeuta realizando terapia manual nas costas de uma paciente",
  },
  destaque: "Cuidado de qualidade em cada etapa",
};

export const depoimentos = {
  descricao: "Relatos de exemplo. Publique apenas depoimentos reais, com autorização dos pacientes.",
  foto: { src: img("depoimentos.jpg"), alt: "Fisioterapeuta avaliando o joelho de um paciente deitado" },
  itens: [
    {
      nome: "Nome da paciente",
      papel: "Pilates clínico · exemplo",
      foto: img("avatar-1.jpg"),
      texto:
        "Comecei com dor nas costas e hoje faço as aulas com tranquilidade. Senti que cada exercício foi pensado para mim.",
    },
    {
      nome: "Nome do paciente",
      papel: "Reabilitação · exemplo",
      foto: img("avatar-2.jpg"),
      texto:
        "Fui acompanhado em todas as etapas da recuperação. A equipe explica tudo e ajusta o tratamento com cuidado.",
    },
    {
      nome: "Nome da paciente",
      papel: "Fisioterapia · exemplo",
      foto: img("avatar-1.jpg"),
      texto: "Atendimento atencioso do início ao fim. Voltei a fazer minhas atividades com mais segurança.",
    },
    {
      nome: "Nome do paciente",
      papel: "Terapia manual · exemplo",
      foto: img("avatar-2.jpg"),
      texto: "Ambiente acolhedor e profissionais atentos. Saio de cada sessão mais leve e com orientações claras.",
    },
  ],
};

export const integrado = {
  foto: { src: img("integrado.jpg"), alt: "Fisioterapeuta alongando o braço de uma paciente deitada na maca" },
  citacao: "“Movimento bem orientado é o caminho mais seguro para viver sem dor.”",
  titulo: "Pilates e fisioterapia juntos no seu cuidado",
  beneficios: [
    {
      icone: "ShieldCheck",
      titulo: "Profissionais habilitados", // A CONFIRMAR: cite formações e registros reais
      texto: "Equipe com formação em fisioterapia e Pilates, em constante atualização.",
    },
    {
      icone: "Calendar",
      titulo: "Horários flexíveis",
      texto: "Agenda organizada para encaixar o tratamento na sua rotina.",
    },
    {
      icone: "HandHeart",
      titulo: "Atendimento acolhedor",
      texto: "Escuta atenta, explicações claras e respeito ao seu ritmo.",
    },
  ],
};

export const equipe = {
  subtitulo: "Profissionais que acompanham você do primeiro contato à alta.",
  pessoas: [
    { src: img("equipe-1.jpg"), alt: "Profissional sorridente de jaleco branco com estetoscópio", pos: "50% 20%" },
    { src: img("equipe-2.jpg"), alt: "Profissional sorridente de uniforme azul com estetoscópio", pos: "50% 25%" },
    { src: img("equipe-3.jpg"), alt: "Profissional de jaleco branco com os braços cruzados", pos: "50% 22%" },
    { src: img("equipe-4.jpg"), alt: "Profissional de jaleco cinza sorrindo", pos: "50% 30%" },
  ],
};

export const etapas = {
  titulo: "Etapas simples para começar seu tratamento",
  texto: "Do primeiro contato ao início das sessões, você sabe exatamente o que vai acontecer.",
  foto: { src: img("etapas.jpg"), alt: "Fisioterapeuta acompanhando paciente em sessão de reabilitação" },
  passos: [
    { titulo: "Agende sua avaliação", texto: "Escolha o melhor dia pelo WhatsApp ou pelo formulário." },
    { titulo: "Converse com a equipe", texto: "Conte sua história, suas dores e seus objetivos." },
    { titulo: "Conheça seu plano", texto: "Explicamos o tratamento indicado e a frequência ideal." },
    { titulo: "Comece seu tratamento", texto: "Sessões acompanhadas, com ajustes a cada evolução." },
  ],
};

export const banner = {
  titulo: "Sente dores ao se movimentar? Comece seu cuidado hoje",
  texto: "Uma avaliação cuidadosa é o primeiro passo para tratar a causa, não só o sintoma.",
  foto: { src: img("banner-prof.webp"), alt: "Profissional de saúde de jaleco branco apontando para o lado" },
  palavras: ["Postura", "Mobilidade", "Reabilitação"],
};

export const rodape = {
  links: [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#equipe", label: "Equipe" },
    { href: "#contato", label: "Contato" },
    { href: "#sobre", label: "Sobre" },
    { href: "#etapas", label: "Como funciona" },
    { href: "#agendar", label: "Agendamento" },
    { href: "#topo", label: "Voltar ao topo" },
  ],
};
