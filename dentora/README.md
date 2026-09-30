# Dentora — Landing page odontológica

Modelo de site (front-end estático) em **React 19 + Vite 7 + CSS puro**, sem backend e sem biblioteca de componentes.
Projeto independente do site Lumident (Next.js) que fica na raiz do repositório.

## Rodar

```bash
cd dentora
npm install
npm run dev        # http://localhost:5174
npm run build      # gera dist/
npm run preview    # serve o build em http://localhost:4174
```

Requer Node 20.19+ (ou 22.12+).

## Estrutura

```
dentora/
  index.html                 fonte Inter, metadados
  public/images/             fotos (Unsplash — licença Unsplash)
  src/
    main.jsx · App.jsx
    styles.css               tokens de cor, layout e responsividade
    components/
      Hero.jsx               hero com menu em pílulas, menu mobile, card flutuante, tratamentos e paginação
      StepsStrip.jsx         faixa de etapas
      About.jsx              "About Us" + métricas
      Treatments.jsx         tratamentos, cartão do especialista e painel de dados
      Results.jsx            resultados (gráfico) + depoimentos com navegação
      Services.jsx           cartões de serviços
      Footer.jsx             newsletter com validação local, contato e rodapé
      Logo.jsx · Icons.jsx   logotipo e ícones SVG
```

Cores principais em `src/styles.css` (`:root`): fundo `#FAFAF9`, texto `#141414`, destaque `#35BDD0`, cinza `#8B8B8B`.
