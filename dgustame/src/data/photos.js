/**
 * Espaços de fotografia do site.
 *
 * Nenhuma foto autorizada do restaurante foi fornecida ainda. Enquanto `src`
 * for `null`, o componente <Photo> mostra uma imagem temporária identificada
 * como tal. Para usar a foto real, coloque o arquivo em `public/images/` e
 * informe o caminho com a base do Vite (o site roda em /dgustame/), ex.:
 * src: `${import.meta.env.BASE_URL}images/buffet.jpg`.
 *
 * Use apenas fotos do próprio restaurante ou com autorização de uso.
 * Não use fotos de avaliações de terceiros nem imagens genéricas de banco.
 */
export const photos = {
  hero: {
    src: null,
    alt: 'Buffet do almoço servido no D’Gustame, com pratos de comida caseira',
    hint: 'Foto do buffet servido',
  },
  buffetLivre: {
    src: null,
    alt: 'Mesa do buffet livre do D’Gustame',
    hint: 'Foto do buffet livre',
  },
  buffetQuilo: {
    src: null,
    alt: 'Prato montado no buffet por quilo do D’Gustame',
    hint: 'Foto de um prato do buffet por quilo',
  },
  ambiente: {
    src: null,
    alt: 'Salão do D’Gustame, no Centro de Passo Fundo',
    hint: 'Foto do ambiente, da família ou da equipe',
  },
  xis: {
    src: null,
    alt: 'Xis D’gustame servido no restaurante',
    hint: 'Foto do Xis D’gustame',
  },
}
