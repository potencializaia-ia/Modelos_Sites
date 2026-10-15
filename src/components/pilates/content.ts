// Conteúdo editável do modelo Sara Scapini — Pilates.
// Tudo marcado com "A CONFIRMAR" ainda não foi validado com a cliente.
// Campos de texto vazios ("") não aparecem no site; preencha para exibir.

export const perfil = {
  nome: "Sara Scapini", // A CONFIRMAR: nome profissional completo
  assinatura: "Pilates · Fisioterapia · Massoterapia",
  instagram: "sarascapini",
  whatsapp: "5500000000000", // A CONFIRMAR: DDI + DDD + número, só dígitos
  mensagemWhatsapp: "Olá, Sara! Vim pelo site e gostaria de agendar uma aula de pilates.",
  registro: "", // A CONFIRMAR: ex. "Crefito 0-000000-F". Fica oculto enquanto vazio.
  endereco: "[Endereço do espaço — a confirmar]",
  bairroCidade: "[Bairro, cidade — a confirmar]",
  // A CONFIRMAR: endereço completo como aparece no Google Maps (rua, número, bairro, cidade, UF, CEP)
  // ou o nome do local. Transforma o endereço do contato em link para o Google Maps. Vazio = sem link.
  enderecoMapa: "",
  horarios: "[Dias e horários de atendimento — a confirmar]",
};

// Itens do menu (cabeçalho e rodapé).
export const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#pilates", label: "Pilates" },
  { href: "#cuidados", label: "Outros cuidados" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export const whatsappUrl = (mensagem = perfil.mensagemWhatsapp) =>
  `https://wa.me/${perfil.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const instagramUrl = `https://instagram.com/${perfil.instagram}`;

export const mapaUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(perfil.enderecoMapa)}`;

// Fotos: deixe src vazio para mostrar o espaço reservado.
// Para trocar, salve em public/images/pilates/ e use "/images/pilates/arquivo.jpg".
// Só use fotos reais com autorização da cliente.
export const fotos = {
  hero: { src: "", alt: "Sara acompanhando uma aluna durante aula particular de pilates", legenda: "Sara em aula" },
  sobre: { src: "", alt: "Retrato de Sara Scapini", legenda: "Retrato da Sara" },
  pilates: {
    src: "",
    alt: "Detalhe de um exercício de pilates com orientação próxima",
    legenda: "Detalhe de exercício",
  },
  pilates2: { src: "", alt: "Aluna realizando exercício de pilates", legenda: "Aluna em movimento" },
};

// Fotos do espaço alugado. Lista vazia esconde a seção.
export const fotosEspaco = [
  { src: "", alt: "Vista geral do espaço onde acontecem as aulas", legenda: "Vista geral do espaço" },
  { src: "", alt: "Equipamentos usados nas aulas", legenda: "Equipamentos" },
  { src: "", alt: "Detalhe do ambiente", legenda: "Detalhe do ambiente" },
];

export const sobre = {
  titulo: "Olá, eu sou a Sara.",
  paragrafos: [
    "Acredito que cada corpo tem sua própria história, e que o movimento fica mais leve quando é respeitado. Por isso, minhas aulas são pensadas para uma pessoa de cada vez, com tempo para ouvir, observar e ajustar.",
    "Além do pilates, também atendo com fisioterapia e massoterapia, sempre com o mesmo cuidado: presença, escuta e atenção aos detalhes.",
  ],
  // A CONFIRMAR: formação e cursos. Itens só aparecem se a lista tiver conteúdo.
  formacao: [] as string[],
};

export const pilates = {
  titulo: "Aulas particulares de pilates",
  intro:
    "Na aula particular, todo o tempo é seu. Os exercícios são escolhidos a partir do que você sente, do que você busca e de como seu corpo responde em cada encontro.",
  pilares: [
    {
      titulo: "Uma pessoa por vez",
      texto: "Atenção integral durante toda a aula, com correções próximas e cuidadosas.",
    },
    {
      titulo: "Planejada para você",
      texto: "Os exercícios partem da sua rotina, do seu histórico e dos seus objetivos.",
    },
    {
      titulo: "No seu ritmo",
      texto: "Cada aula respeita como você chega naquele dia, sem pressa e sem comparação.",
    },
    {
      titulo: "Consciência do movimento",
      texto: "Você entende o que está fazendo e por quê, e leva essa percepção para o dia a dia.",
    },
  ],
  paraQuem: [
    "Quem nunca fez pilates e quer começar com segurança",
    "Quem prefere uma aula tranquila, sem turma",
    "Quem quer voltar a se movimentar com orientação próxima",
    "Quem busca mais consciência corporal e bem-estar",
  ],
};

export const outrosCuidados = [
  {
    titulo: "Fisioterapia",
    texto: "Atendimento individual com avaliação e acompanhamento, com um olhar atento ao seu corpo e à sua rotina.",
    mensagem: "Olá, Sara! Gostaria de saber mais sobre o atendimento de fisioterapia.",
  },
  {
    titulo: "Massoterapia",
    texto: "Um momento de pausa e cuidado, com técnicas manuais que convidam o corpo a relaxar.",
    mensagem: "Olá, Sara! Gostaria de saber mais sobre a massoterapia.",
  },
];

export const etapas = [
  {
    titulo: "Conversa inicial",
    texto: "Você me chama no WhatsApp, conta um pouco sobre você e combinamos o melhor horário.",
  },
  {
    titulo: "Primeiro encontro",
    texto: "Conheço seu histórico, sua rotina e o que você busca, e observo como você se movimenta.",
  },
  {
    titulo: "Aulas sob medida",
    texto: "Cada aula é planejada para você e ajustada conforme o seu corpo responde.",
  },
  {
    titulo: "Acompanhamento",
    texto: "Acompanho cada etapa com você, adaptando o caminho sempre que for preciso.",
  },
];

// Depoimentos: inclua apenas relatos reais, com autorização. Lista vazia esconde a seção.
export const depoimentos: { texto: string; autor: string }[] = [];

export const perguntas = [
  {
    pergunta: "Preciso ter experiência com pilates?",
    resposta: "Não. As aulas são individuais e partem do seu momento, seja você iniciante ou alguém que já pratica.",
  },
  {
    pergunta: "Como é a primeira aula?",
    resposta:
      "Começamos com uma conversa sobre sua rotina, seu histórico e seus objetivos. A partir disso, fazemos os primeiros exercícios com calma, para eu conhecer como você se movimenta.",
  },
  {
    pergunta: "Com que frequência posso fazer as aulas?",
    resposta: "A frequência é combinada com você, de acordo com seus objetivos e sua disponibilidade.",
  },
  {
    pergunta: "Onde as aulas acontecem?",
    resposta:
      "Em um espaço reservado para os atendimentos. O endereço completo está logo abaixo, na seção de contato.",
  },
  {
    pergunta: "O que devo vestir?",
    resposta: "Roupas confortáveis, que permitam se movimentar livremente. Se tiver alguma dúvida, é só me perguntar.",
  },
  {
    pergunta: "Posso agendar fisioterapia ou massoterapia?",
    resposta: "Sim. Me chame no WhatsApp contando o que você procura e combinamos o atendimento.",
  },
];
