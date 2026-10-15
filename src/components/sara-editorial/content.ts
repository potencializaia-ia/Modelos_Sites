// Conteúdo editável do modelo Sara Scapini — Editorial.
// Itens marcados com "A CONFIRMAR" ainda não foram validados com a cliente.
// Fotos: Unsplash (licença Unsplash), em public/images/sara-editorial/.

export const marca = {
  nome: "Sara Scapini", // A CONFIRMAR: nome profissional completo
  logoParte1: "Sara",
  logoParte2: "Scapini",
  subtitulo: "Pilates · Movimento consciente",
  bio: "Professora de Pilates. Aulas pensadas para cuidar do corpo com atenção, respiração e movimento consciente.",
};

export const contato = {
  instagram: "sarascapini",
  whatsapp: "5500000000000", // A CONFIRMAR: DDI + DDD + número, só dígitos
  email: "", // A CONFIRMAR: deixe vazio para ocultar
  mensagem: "Olá, Sara! Vim pelo site e quero começar as aulas de Pilates.",
};

export const whatsappUrl = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(contato.mensagem)}`;
export const instagramUrl = `https://instagram.com/${contato.instagram}`;

export const navegacao = [
  { href: "#inicio", label: "Início" },
  { href: "#aulas", label: "Aulas" },
  { href: "#conteudos", label: "Conteúdos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export const hero = {
  titulo: ["Pilates para cuidar", "do corpo em casa"],
  texto:
    "Movimentos simples e bem orientados para fortalecer, alongar e respirar melhor, no seu ritmo e no seu espaço.",
  botao: "Comece agora",
  foto: {
    src: "/images/sara-editorial/hero.jpg",
    alt: "Mulher sentada de pernas cruzadas sobre o tapete, respirando de olhos fechados",
  },
  // Indicadores: use apenas informações confirmadas. Números aqui marcam etapas, não resultados.
  indicadores: [
    { numero: "01", legenda: "Aula individual" },
    { numero: "02", legenda: "Plano sob medida" },
    { numero: "03", legenda: "No seu ritmo" },
  ],
};

type Cor = "verde" | "terracota";

export type Conteudo = {
  id: string;
  titulo: string;
  categoria: string;
  cor: Cor;
  data: string;
  foto: string;
  alt: string;
  posicao?: string; // object-position da foto
  tipo?: "video" | "texto";
};

// Datas e títulos são exemplos de demonstração. Substitua pelos conteúdos reais.
export const destaques: Conteudo[] = [
  {
    id: "prancha-reformer",
    titulo: "Prancha no reformer: força com controle",
    categoria: "Força",
    cor: "verde",
    data: "13 out 2026",
    foto: "/images/sara-editorial/destaque-1.jpg",
    alt: "Aluna em prancha apoiada no reformer",
    posicao: "50% 45%",
  },
  {
    id: "mobilidade-coluna",
    titulo: "Mobilidade da coluna em movimentos simples",
    categoria: "Mobilidade",
    cor: "terracota",
    data: "06 out 2026",
    foto: "/images/sara-editorial/destaque-3.jpg",
    alt: "Aluna estende uma perna para o alto apoiada no reformer",
    posicao: "50% 40%",
  },
  {
    id: "alongamento-lateral",
    titulo: "Alongamento lateral para aliviar a rotina",
    categoria: "Alongamento",
    cor: "verde",
    data: "29 set 2026",
    foto: "/images/sara-editorial/destaque-4.jpg",
    alt: "Aluna em alongamento lateral com um braço estendido sobre o reformer",
    posicao: "50% 38%",
  },
  {
    id: "pernas-reformer",
    titulo: "Pernas e quadril com o reformer",
    categoria: "Reformer",
    cor: "terracota",
    data: "22 set 2026",
    foto: "/images/sara-editorial/destaque-2.jpg",
    alt: "Aluna em apoio sobre o reformer com uma perna elevada",
    posicao: "50% 50%",
  },
  {
    id: "flexao-frontal",
    titulo: "Flexão do tronco com consciência",
    categoria: "Postura",
    cor: "verde",
    data: "15 set 2026",
    foto: "/images/sara-editorial/destaque-5.jpg",
    alt: "Mulher inclinando o tronco à frente em movimento controlado",
    posicao: "50% 35%",
  },
  {
    id: "alcas-reformer",
    titulo: "Alças do reformer: o básico para começar",
    categoria: "Iniciantes",
    cor: "terracota",
    data: "08 set 2026",
    foto: "/images/sara-editorial/destaque-6.jpg",
    alt: "Aluna ajoelhada no reformer segurando as alças",
    posicao: "50% 60%",
  },
];

export const depoimento = {
  // A CONFIRMAR: publique apenas depoimentos reais, com autorização da aluna.
  texto: "Encontrei nas aulas um tempo só meu. Saio mais leve, mais atenta à minha postura e com vontade de voltar.",
  autor: "Nome da aluna, cidade",
  foto: {
    src: "/images/sara-editorial/depoimento.webp",
    alt: "Mulher alongando os braços para trás em um movimento amplo",
  },
};

export const conteudos: Conteudo[] = [
  {
    id: "cantinho-em-casa",
    titulo: "Como montar seu cantinho de Pilates em casa",
    categoria: "Em casa",
    cor: "terracota",
    data: "10 out 2026",
    foto: "/images/sara-editorial/conteudo-1.jpg",
    alt: "Mulher com roupa verde segurando um tapete enrolado em uma sala clara",
    posicao: "50% 40%",
    tipo: "video",
  },
  {
    id: "postura-sentada",
    titulo: "Postura sentada: cuidados para o dia a dia",
    categoria: "Postura",
    cor: "verde",
    data: "03 out 2026",
    foto: "/images/sara-editorial/conteudo-2.jpg",
    alt: "Mulher sentada de pernas cruzadas sobre o tapete, com a coluna alongada",
    posicao: "42% 50%",
    tipo: "texto",
  },
  {
    id: "ao-ar-livre",
    titulo: "Pilates ao ar livre: movimento com leveza",
    categoria: "Ao ar livre",
    cor: "terracota",
    data: "26 set 2026",
    foto: "/images/sara-editorial/conteudo-3.jpg",
    alt: "Mulher em avanço com o tronco estendido em uma trilha arborizada",
    posicao: "56% 50%",
    tipo: "video",
  },
  {
    id: "aparelhos",
    titulo: "Os aparelhos do Pilates, explicados",
    categoria: "Aparelhos",
    cor: "verde",
    data: "19 set 2026",
    foto: "/images/sara-editorial/conteudo-4.jpg",
    alt: "Sala clara com aparelhos de Pilates de madeira",
    posicao: "50% 50%",
    tipo: "texto",
  },
  {
    id: "alongamento-pos-trabalho",
    titulo: "Alongamentos suaves para começar o dia",
    categoria: "Alongamento",
    cor: "terracota",
    data: "12 set 2026",
    foto: "/images/sara-editorial/conteudo-5.jpg",
    alt: "Mulher sentada na cama alongando os braços para o alto, perto de uma janela iluminada",
    posicao: "45% 50%",
    tipo: "video",
  },
  {
    id: "reformer-iniciantes",
    titulo: "Reformer para iniciantes: o que esperar",
    categoria: "Iniciantes",
    cor: "verde",
    data: "05 set 2026",
    foto: "/images/sara-editorial/conteudo-6.jpg",
    alt: "Aluna deitada no reformer com uma perna elevada presa à alça",
    posicao: "50% 35%",
    tipo: "texto",
  },
];
