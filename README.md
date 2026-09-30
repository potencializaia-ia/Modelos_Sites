# Modelos de site — Odontologia

Dois modelos de landing page no mesmo projeto:

| Modelo | URL | Código |
| --- | --- | --- |
| 1 · Lumident (azul, dente 3D) | http://localhost:3000/ | `src/app/page.tsx`, `src/components/*` |
| 2 · Sorriso (painel branco, lilás) | http://localhost:3000/sorriso | `src/app/sorriso/`, `src/components/sorriso/` |

O modelo 2 usa CSS Module próprio (`sorriso.module.css`) e fonte Inter; não interfere no modelo 1.
Fotos do modelo 2 em `public/images/sorriso/` (Unsplash — licença Unsplash). Nome, endereço, telefone e CRO são fictícios.

---

# Modelo 1 — Lumident Odontologia

Front-end estático (demonstração) em **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + Lucide React**.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start   # produção
```

Requer Node 20.9+.

## Estrutura

```
src/
  app/            layout.tsx (fonte Manrope, metadata) · page.tsx · globals.css (tokens de cor)
  data/content.ts serviços, diferenciais, galeria, equipe, contatos (edite aqui)
  components/
    Header.tsx            cabeçalho sticky + drawer de navegação
    hero/Hero.tsx         hero + card flutuante
    hero/ToothIllustration.tsx  dente 3D em SVG
    services/             seção Serviços e valores + accordion acessível
    Benefits.tsx · ClinicGallery.tsx · Team.tsx (carrossel com scroll-snap) · Footer.tsx
    appointment/          provider, botão de CTA e modal de agendamento
    ui/                   helpers de botão e título de seção
public/images/            fotos (Unsplash — licença Unsplash)
```

## Importante

- **Demonstração:** o modal de agendamento valida os campos e simula o envio. Nenhum dado sai do navegador.
  Para produção, troque o trecho marcado em `AppointmentModal.tsx` (`handleSubmit`) por API/CRM/webhook.
- Nomes, CRO, preços, telefone e endereço são fictícios.
- As fotos da equipe são de banco de imagens. Para uma clínica real, use fotos dos profissionais de verdade.
- A cor principal foi levemente escurecida (`#3A78B8` em vez de `#3F7FC1`) para garantir contraste AA do texto branco nos botões.
