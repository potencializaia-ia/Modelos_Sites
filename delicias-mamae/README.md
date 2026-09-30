# Delícias e Sabores da Mamãe — site

Site institucional de confeitaria artesanal (docinhos de festa, brigadeiros e trufas) com pedidos pelo WhatsApp.
Front-end estático em **React 19 + TypeScript + Tailwind CSS 4 + Lucide React** (Vite), sem backend.
Projeto independente dos outros modelos deste repositório.

## Rodar

```bash
cd delicias-mamae
npm install
npm run dev        # http://localhost:5176
npm run build      # checa os tipos e gera dist/ (hospedagem estática)
npm run preview    # serve o build em http://localhost:4176
```

Requer Node 20.19+ (ou 22.12+).

## Onde editar

| O quê | Arquivo |
|---|---|
| WhatsApp, Instagram, antecedência mínima, links do menu | `src/data/site.ts` |
| Mensagens pré-preenchidas do WhatsApp | `src/lib/whatsapp.ts` |
| Categorias, sabores, pesos e preços do cardápio | `src/data/menu.ts` |
| Cards de destaque, etapas, galeria, depoimentos, FAQ, benefícios | `src/data/content.ts` |
| Cores e fontes | `src/index.css` (bloco `@theme`) |
| Título, descrição e Open Graph | `index.html` |

## Componentes

`src/components/`: Header (com drawer móvel) · Hero · BenefitsBar · FeaturedProducts · MenuTabs ·
About · OrderSteps · Gallery · Testimonials · FAQ · FinalCTA · Footer · WhatsAppButton ·
`ui.tsx` (Logo, SectionHeading, Reveal, ícones de marca e grafismo floral).

## Antes de publicar

1. **Fotos:** todas são ilustrativas (Unsplash, licença de uso livre). Troque pelas fotos reais dos doces,
   em especial a da seção "Sobre nós", que deve mostrar a fundadora trabalhando (`public/images/`).
2. **Depoimentos:** são demonstrativos e aparecem marcados como tal. Substitua por avaliações reais
   em `src/data/content.ts` e altere `testimonialsAreDemo` para `false`.
3. **Trufas recheadas:** sabores, pesos e valores não foram informados; o site mostra "sob consulta".
4. **Instagram:** o link aponta para a publicação fornecida. Se houver um perfil, troque `instagramUrl`
   em `src/data/site.ts` pelo endereço do perfil.
5. **Preços:** confirmar os valores atuais do cardápio.
