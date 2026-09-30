# D'Gustame Restaurante — site

Site institucional com cardápio para o D'Gustame, restaurante familiar do Centro de Passo Fundo (RS).
Front-end estático em **React 19 + Vite 7 + CSS puro**, sem backend. É um projeto independente dos outros
modelos deste repositório.

## Rodar

```bash
cd dgustame
npm install
npm run dev        # http://localhost:5175
npm run build      # gera dist/ (pronto para qualquer hospedagem estática)
npm run preview    # serve o build em http://localhost:4175
```

Requer Node 20.19+ (ou 22.12+).

## Onde editar

| O quê | Arquivo |
|---|---|
| Endereço, telefone, link do mapa, horários, preço do buffet | `src/config/restaurant.js` |
| Itens e preços do cardápio | `src/data/menu.js` |
| Fotos (trocar as temporárias pelas reais) | `src/data/photos.js` + arquivos em `public/images/` |
| Cores e fontes | `src/styles.css` (`:root`) |
| Título e descrição para o Google | `index.html` |

- **Horários e preço do buffet:** estão como `null` e, por isso, não aparecem no site. Quando forem confirmados,
  preencha em `restaurant.js` que eles passam a aparecer automaticamente (faixa do almoço, cartão de
  localização e dados estruturados).
- **Fotos:** enquanto `src` for `null`, o site mostra um espaço marcado como "Foto temporária".
  Coloque a foto em `public/images/` e informe o caminho, por exemplo `src: '/images/buffet.jpg'`.
- **Preços:** edite o campo `price` (número em reais). A formatação "R$ 22,00" é automática.

## Estrutura

```
src/
  config/restaurant.js   dados institucionais (fonte única)
  data/menu.js           cardápio (10 categorias, 88 itens)
  data/photos.js         espaços de foto
  seo.js                 dados estruturados schema.org/Restaurant gerados da configuração
  components/
    Header.jsx           cabeçalho fixo + menu móvel
    Hero.jsx             abertura
    Buffet.jsx           almoço: buffet livre e por quilo
    About.jsx            sobre o restaurante
    Highlights.jsx       destaques (preços lidos de menu.js)
    Menu.jsx             cardápio completo com busca e filtro por categoria
    Location.jsx         endereço, telefone, "Como chegar" e "Ligar agora"
    Footer.jsx · Logo.jsx · Photo.jsx · Curve.jsx · Icons.jsx
```

## Confirmar com o restaurante antes de publicar

1. **Fotos autorizadas:** buffet, prato do buffet por quilo, ambiente/equipe e Xis D'gustame.
2. **Horários:** de funcionamento e do almoço.
3. **Preço do buffet:** livre e por quilo.
4. **Endereço:** o cardápio impresso diz "Rua Teixeira Soares, 849", mas há cadastros externos com outro número.
5. **Preços do cardápio:** foram transcritos das fotos do cardápio e podem ter mudado.
6. **Link do mapa:** conferir se https://maps.app.goo.gl/VhFDrYZ4SJyCsujt8 abre o estabelecimento correto.
