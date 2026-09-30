import type { LucideIcon } from "lucide-react";
import { Diamond, Heart, ShieldCheck, Smile, WalletCards } from "lucide-react";

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "A clínica", href: "#clinica" },
  { label: "Especialistas", href: "#equipe" },
  { label: "Valores", href: "#servicos" },
  { label: "Avaliações", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: "clinica-geral",
    number: "01",
    title: "Clínica geral e restaurações",
    description: "Tratamentos cuidadosos com materiais modernos e foco total no conforto do paciente.",
    price: "R$ 350",
    image: "/images/servico-clinica-geral.jpg",
    imageAlt: "Paciente sorrindo durante avaliação odontológica com espelho clínico",
  },
  {
    id: "limpeza",
    number: "02",
    title: "Limpeza e prevenção",
    description: "Profilaxia completa, remoção de tártaro e orientação de higiene para manter seu sorriso saudável.",
    price: "R$ 250",
    image: "/images/servico-limpeza.jpg",
    imageAlt: "Escovas de dente de bambu em copo de vidro ao lado de um ramo verde",
  },
  {
    id: "implantes",
    number: "03",
    title: "Implantes dentários",
    description: "Planejamento digital com exames de imagem para implantes seguros, estáveis e naturais.",
    price: "R$ 3.500",
    image: "/images/servico-implantes.jpg",
    imageAlt: "Dentista analisando radiografia panorâmica em painel iluminado",
  },
  {
    id: "ortodontia",
    number: "04",
    title: "Ortodontia e alinhadores",
    description: "Aparelhos fixos e alinhadores transparentes para corrigir o sorriso com discrição e conforto.",
    price: "R$ 280/mês",
    image: "/images/servico-ortodontia.jpg",
    imageAlt: "Pessoa encaixando um alinhador dental transparente",
  },
  {
    id: "estetica",
    number: "05",
    title: "Odontologia estética",
    description: "Lentes, facetas e design de sorriso planejados digitalmente para um resultado harmônico.",
    price: "R$ 1.200",
    image: "/images/servico-estetica.jpg",
    imageAlt: "Planejamento digital do sorriso exibido em um tablet",
  },
  {
    id: "clareamento",
    number: "06",
    title: "Clareamento dental",
    description: "Clareamento em consultório ou caseiro supervisionado, com segurança para o esmalte.",
    price: "R$ 890",
    image: "/images/servico-clareamento.jpg",
    imageAlt: "Dentista atendendo paciente em consultório moderno",
  },
];

export type Benefit = { title: string; text: string; icon: LucideIcon };

export const benefits: Benefit[] = [
  { title: "Tecnologia moderna", text: "Precisão, segurança e conforto.", icon: Diamond },
  { title: "Especialistas experientes", text: "Equipe em constante atualização.", icon: ShieldCheck },
  { title: "Atendimento personalizado", text: "Cada sorriso recebe um plano único.", icon: Heart },
  { title: "Ambiente acolhedor", text: "Cuidado e tranquilidade em cada visita.", icon: Smile },
  { title: "Transparência", text: "Orçamentos claros e sem surpresas.", icon: WalletCards },
];

export type GalleryImage = { src: string; alt: string };

export const clinicGallery: GalleryImage[] = [
  { src: "/images/clinica-recepcao.jpg", alt: "Recepção moderna e iluminada da clínica" },
  { src: "/images/clinica-consultorio.jpg", alt: "Consultório odontológico branco com cadeira azul-clara" },
  { src: "/images/clinica-espera.jpg", alt: "Sala de espera ampla com planta e poltrona confortável" },
];

export type Specialist = {
  name: string;
  role: string;
  cro: string;
  image: string;
  imageAlt: string;
};

export const team: Specialist[] = [
  {
    name: "Dr. Lucas Almeida",
    role: "Cirurgião-dentista",
    cro: "CRO-SP 00000",
    image: "/images/equipe-lucas.jpg",
    imageAlt: "Retrato do Dr. Lucas Almeida de jaleco branco",
  },
  {
    name: "Dra. Marina Ferreira",
    role: "Ortodontista",
    cro: "CRO-SP 00000",
    image: "/images/equipe-marina.jpg",
    imageAlt: "Retrato da Dra. Marina Ferreira sorrindo, com uniforme clínico",
  },
  {
    name: "Dr. Rafael Martins",
    role: "Implantodontista",
    cro: "CRO-SP 00000",
    image: "/images/equipe-rafael.jpg",
    imageAlt: "Retrato do Dr. Rafael Martins sorrindo, com uniforme clínico azul",
  },
  {
    name: "Dra. Ana Carvalho",
    role: "Odontologia estética",
    cro: "CRO-SP 00000",
    image: "/images/equipe-ana.jpg",
    imageAlt: "Retrato da Dra. Ana Carvalho de jaleco branco",
  },
];

export const contact = {
  address: "Av. Paulista, 1000 — São Paulo, SP",
  hours: "Seg–Sex: 8h às 20h",
  phone: "(11) 99999-9999",
  phoneHref: "tel:+5511999999999",
  whatsapp: "https://wa.me/5511999999999",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  maps: "https://www.google.com/maps/search/?api=1&query=Av.+Paulista,+1000,+S%C3%A3o+Paulo",
};
