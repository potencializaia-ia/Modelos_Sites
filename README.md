# Modelos de sites — Potencializa

Todos os modelos rodam no mesmo link. A página inicial (`/`) é um catálogo com a prévia de cada modelo.

| Modelo | URL | Código |
| --- | --- | --- |
| Catálogo | `/` | `src/app/page.tsx`, dados em `src/data/modelos.ts` |
| Lumident (odontologia, azul) | `/lumident` | `src/app/lumident/`, `src/components/*` |
| Sorriso (odontologia, lilás) | `/sorriso` | `src/app/sorriso/`, `src/components/sorriso/` |
| Dentora (odontologia, inglês) | `/dentora` | `dentora/` (Vite) |
| D'Gustame (restaurante, cliente) — **privado** | `/dgustame` | `dgustame/` (Vite) |
| Delícias da Mamãe (doces, cliente) — **privado** | `/delicias-mamae` | `delicias-mamae/` (Vite) |
| Sara Scapini (pilates, marfim e sálvia) — **privado** | `/sara-pilates` | `src/app/sara-pilates/`, `src/components/pilates/` (textos e dados em `content.ts`) |
| Sara Scapini Editorial (pilates, verde e terracota) | `/sara-editorial` | `src/app/sara-editorial/`, `src/components/sara-editorial/` (textos e dados em `content.ts`, fotos em `public/images/sara-editorial/`) |
| Movimenta (clínica de Pilates e fisioterapia, rosa) | `/movimenta-fisioterapia` | `src/app/movimenta-fisioterapia/`, `src/components/clinica-rosa/` (textos e dados em `content.ts`, fotos em `public/images/clinica-rosa/`) |

## Como funciona

- A raiz é um app Next.js. Lumident e Sorriso são rotas dele.
- Os modelos em Vite são projetos independentes (hoje só o Dentora). `npm run build` executa `scripts/build-modelos.mjs`,
  que compila cada um com `--base=/<modelo>/` e coloca o resultado em `public/<modelo>/`
  (pasta ignorada pelo git). O `next.config.ts` aponta `/<modelo>` para o `index.html` compilado.
- Nos modelos Vite, imagens de `public/` devem ser referenciadas com `import.meta.env.BASE_URL`
  (ex.: `` `${import.meta.env.BASE_URL}images/foto.jpg` ``), nunca com `/images/...`, senão quebram no subcaminho.

## Rodar

```bash
npm install
npm run build:modelos   # compila os modelos Vite (necessário uma vez para vê-los no `npm run dev`)
npm run dev             # http://localhost:3000
npm run build && npm start   # produção
```

Para editar um modelo Vite com recarregamento automático, rode `npm run dev` dentro da pasta dele.

## Publicar na Vercel

Importe o repositório na Vercel sem alterar nada: framework **Next.js**, diretório raiz `/`,
comando de build padrão (`npm run build`). O build já compila os modelos Vite.

## Adicionar um novo modelo

1. **Next.js:** crie `src/app/<slug>/` (com `layout.tsx` para título e descrição próprios).
   **Vite:** crie a pasta `<slug>/` na raiz e adicione o nome em `scripts/build-modelos.mjs`,
   `next.config.ts`, `.gitignore`, `tsconfig.json` (exclude) e `eslint.config.mjs` (ignores).
2. Adicione o modelo em `src/data/modelos.ts`.
3. Salve uma captura 1440×900 em `public/previews/<slug>.jpg`.

---

# Modelo Lumident Odontologia

Front-end estático (demonstração) em **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + Lucide React**.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000/lumident
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

> `dgustame/` e `delicias-mamae/` são projetos de clientes: entram no build como privados (fora do catálogo e com `noindex`).
