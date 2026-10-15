// Catálogo exibido na página inicial (/).
// Para adicionar um modelo: inclua um item aqui e salve a captura em public/previews/<slug>.jpg (1440×900).
// Modelo privado: marque `privado: true` — some do catálogo e do Google, mas abre pelo link direto.
// No layout do modelo, adicione também `robots: { index: false, follow: false }` ao metadata.
export type Modelo = {
  slug: string;
  nome: string;
  segmento: string;
  descricao: string;
  destaques: string[];
  privado?: boolean;
};

export const modelos: Modelo[] = [
  {
    slug: "lumident",
    nome: "Lumident",
    segmento: "Odontologia",
    descricao: "Clínica odontológica com visual azul e leve, ilustração 3D de dente e agendamento online.",
    destaques: ["Modal de agendamento", "Serviços e valores", "Equipe"],
  },
  {
    slug: "sorriso",
    nome: "Sorriso",
    segmento: "Odontologia",
    descricao: "Clínica odontológica em painel branco com toques lilás, foco em tratamentos e credibilidade.",
    destaques: ["Tratamentos", "Prêmios", "Atendimento 24/7"],
  },
  {
    slug: "dentora",
    nome: "Dentora",
    segmento: "Odontologia",
    descricao: "Visual premium com foto em tela cheia, depoimentos e etapas do tratamento. Conteúdo em inglês.",
    destaques: ["Hero com foto", "Depoimentos", "Etapas do tratamento"],
  },
  {
    slug: "sara-pilates",
    nome: "Sara Scapini",
    segmento: "Pilates e fisioterapia",
    descricao:
      "Profissional autônoma de pilates: visual editorial em marfim, rosa e verde sálvia, com formas orgânicas.",
    destaques: ["Agendamento pelo WhatsApp", "Como funciona", "Perguntas frequentes"],
    privado: true,
  },
  {
    slug: "sara-editorial",
    nome: "Sara Scapini Editorial",
    segmento: "Pilates",
    descricao:
      "Pilates em estilo blog editorial: logo manuscrito, hero com mandala, carrossel de aulas e grade de conteúdos.",
    destaques: ["Carrossel de aulas", "Busca de conteúdos", "Fotos reais"],
  },
  {
    slug: "movimenta-fisioterapia",
    nome: "Movimenta",
    segmento: "Pilates e fisioterapia",
    descricao:
      "Clínica em rosa claro: hero com profissionais recortadas, agendamento sobreposto, serviços, equipe e etapas.",
    destaques: ["Agendamento pelo WhatsApp", "Depoimentos em carrossel", "Etapas do atendimento"],
  },
];

export const modelosPublicos = modelos.filter((m) => !m.privado);

// Destino dos botões "Quero meu site" do catálogo (WhatsApp da Potencializa).
export const contatoUrl = "https://wa.me/5554991412254?text=Quero%20criar%20meu%20site";
