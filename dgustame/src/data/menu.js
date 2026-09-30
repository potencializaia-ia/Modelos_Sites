/**
 * Cardápio do D'Gustame — transcrito das fotos do cardápio impresso.
 *
 * ⚠️ Os preços podem ter mudado desde a foto. Confira todos com o restaurante
 * antes de publicar. Para atualizar, basta editar `price` (número em reais).
 *
 * Campos do item:
 *   id        identificador único (usado pelos destaques da página inicial)
 *   name      nome exibido
 *   desc      descrição/ingredientes (opcional)
 *   price     preço em reais (número)
 *   featured  true = destaque visual "Especialidade da casa"
 */
export const menuNotice = 'Preços sujeitos a alteração. Confirme os valores no restaurante.'

const AFTER_15H = 'Servidos somente após as 15h'

export const menu = [
  {
    id: 'lanches',
    title: 'Lanches',
    items: [
      { id: 'omelete', name: 'Omelete com 3 ovos', price: 12 },
      { id: 'pao-de-queijo', name: 'Pão de queijo', price: 4.5 },
      { id: 'coxinha', name: 'Coxinha', price: 6 },
      { id: 'pastel-carne', name: 'Pastel de carne', price: 10 },
      { id: 'pastel-frango', name: 'Pastel de frango', price: 10 },
      { id: 'pastel-queijo', name: 'Pastel de queijo', price: 10 },
      { id: 'pastel-assado', name: 'Pastel assado', desc: 'Carne, frango, palmito ou presunto e queijo', price: 12 },
      { id: 'espetinho-frango', name: 'Espetinho de frango', price: 12 },
      { id: 'sanduiche-simples', name: 'Sanduíche simples', desc: 'Apresuntado e queijo', price: 10 },
      { id: 'sanduiche-pao-branco', name: 'Sanduíche de pão branco', desc: 'Presunto cozido magro, queijo, alface, tomate e cenoura', price: 14 },
      { id: 'sanduiche-natural', name: 'Sanduíche natural light', desc: 'Presunto, ricota light, alface, tomate e cenoura', price: 15 },
      { id: 'sanduiche-frango', name: 'Sanduíche de frango', desc: 'Frango com maionese, queijo e alface', price: 13 },
      { id: 'torrada-simples', name: 'Torrada simples', desc: 'Presunto e queijo', price: 12 },
      { id: 'torrada-especial', name: 'Torrada especial', desc: 'Presunto, queijo, alface, tomate e ovo', price: 16 },
    ],
  },
  {
    id: 'xis',
    title: 'Xis',
    items: [
      { id: 'xis-dgustame', name: "Xis D'gustame", desc: 'Filé, bacon, coração, alface, tomate, queijo, apresuntado, milho, ovo, batata palha e maionese da casa', price: 40, featured: true },
      { id: 'xis-salada-simples', name: 'Xis Salada Simples', desc: 'Hambúrguer, alface, tomate, queijo, presunto cozido magro e maionese da casa', price: 22 },
      { id: 'xis-salada-especial', name: 'Xis Salada Especial', desc: 'Hambúrguer, alface, tomate, queijo, presunto cozido magro, milho, ovo e maionese da casa', price: 25 },
      { id: 'xis-bacon', name: 'Xis Bacon', desc: 'Hambúrguer, bacon, alface, tomate, queijo, presunto cozido magro, milho, ovo e maionese da casa', price: 32 },
      { id: 'xis-frango', name: 'Xis Frango', desc: 'Frango, alface, tomate, queijo, presunto cozido magro, milho, ovo e maionese da casa', price: 30 },
      { id: 'xis-file', name: 'Xis Filé', desc: 'Filé, alface, tomate, queijo, presunto cozido magro, milho, ovo e maionese da casa', price: 37 },
      { id: 'xis-coracao', name: 'Xis Coração', desc: 'Coração, alface, tomate, queijo, presunto cozido magro, milho, ovo e maionese da casa', price: 32 },
      { id: 'xis-calabresa', name: 'Xis Calabresa', desc: 'Hambúrguer, calabresa, alface, tomate, queijo, presunto cozido magro, milho, ovo e maionese da casa', price: 32 },
    ],
  },
  {
    id: 'petiscos',
    title: 'Petiscos',
    items: [
      { id: 'file-xadrez', name: 'Filé xadrez com queijo', price: 40 },
      { id: 'batata-frita', name: 'Porção de batata frita', price: 22 },
    ],
  },
  {
    id: 'pratos',
    title: 'Pratos',
    notice: AFTER_15H,
    items: [
      { id: 'bife-salada-pao', name: 'Bife, salada e pão', price: 28 },
      { id: 'bife-batata', name: 'Bife e batata frita', price: 34 },
      { id: 'bife-arroz-feijao', name: 'Bife, arroz e feijão', price: 32 },
      { id: 'bife-arroz-salada', name: 'Bife, arroz e salada', price: 32 },
      { id: 'bife-arroz-batata', name: 'Bife, arroz e batata frita', price: 37 },
      { id: 'bife-arroz-ovos', name: 'Bife, arroz e dois ovos', price: 35 },
      { id: 'bife-arroz-feijao-ovo', name: 'Bife, arroz, feijão e ovo', price: 35 },
      { id: 'bife-arroz-feijao-salada', name: 'Bife, arroz, feijão e salada', price: 35 },
      { id: 'bife-arroz-feijao-massa', name: 'Bife, arroz, feijão e massa', price: 37 },
      { id: 'bife-arroz-batata-salada', name: 'Bife, arroz, batata frita e salada', price: 38 },
      { id: 'frango-arroz-batata-salada', name: 'Peito de frango, arroz, batata frita e salada', price: 38 },
      { id: 'chuleta', name: 'Chuleta, arroz, batata frita e salada', price: 40 },
      { id: 'a-la-minuta', name: 'À La Minuta', desc: 'Bife, arroz, batata frita, alface, tomate e ovo', price: 43 },
      { id: 'a-la-minuta-feijao', name: 'À La Minuta com feijão', desc: 'Bife, arroz, feijão, batata frita, ovo, alface e tomate', price: 45 },
    ],
  },
  {
    id: 'files',
    title: 'Filés',
    notice: AFTER_15H,
    items: [
      { id: 'file-a-la-minuta', name: 'À La Minuta', desc: 'Filé na chapa, arroz, batata frita, tomate, alface e ovo', price: 57 },
      { id: 'file-ii', name: 'Filé II', desc: 'Filé à milanesa, arroz, batata frita, alface e tomate', price: 65 },
      { id: 'file-iii', name: 'Filé III', desc: 'Filé acebolado, arroz, batata frita, alface e tomate', price: 65 },
      { id: 'file-iv', name: 'Filé IV', desc: 'Filé na chapa, dois ovos, arroz, batata frita, alface e tomate', price: 67 },
      { id: 'file-v', name: 'Filé V', desc: 'Filé à parmegiana, queijo, presunto cozido magro, arroz, batata frita, tomate e alface', price: 68 },
      { id: 'file-cubano', name: 'Filé Cubano', desc: 'Filé na chapa, banana, arroz, purê de batata, pepino, melão e mamão', price: 70 },
      { id: 'file-dgustame', name: "Filé D'gustame", desc: 'Filé à milanesa, queijo, presunto cozido magro, arroz, batata frita, pepino, mamão, melão e pêssego em calda', price: 75 },
    ],
  },
  {
    id: 'sucos',
    title: 'Sucos',
    notice: 'Copo de 300 ml',
    items: [
      { id: 'suco-abacaxi', name: 'Abacaxi', price: 10 },
      { id: 'suco-laranja', name: 'Laranja', price: 10 },
      { id: 'suco-misto', name: 'Suco misto', price: 12 },
      { id: 'vitamina', name: 'Vitamina', desc: 'Banana, maçã ou mamão', price: 12 },
      { id: 'vitamina-mista', name: 'Vitamina mista', desc: 'Banana, maçã e mamão', price: 14 },
    ],
  },
  {
    id: 'refrigerantes',
    title: 'Refrigerantes e águas',
    items: [
      { id: 'refri-mini', name: 'Refrigerante lata mini', price: 4 },
      { id: 'refri-ks', name: 'Refrigerante KS 290 ml', price: 6 },
      { id: 'refri-lata', name: 'Refrigerante lata', price: 7 },
      { id: 'refri-600', name: 'Refrigerante 600 ml', price: 10 },
      { id: 'refri-1l', name: 'Refrigerante 1 L', price: 12 },
      { id: 'refri-2l', name: 'Refrigerante 2 L', price: 18 },
      { id: 'del-valle-lata', name: 'Suco Del Valle lata', price: 7 },
      { id: 'del-valle-kapo', name: 'Suco Del Valle Kapo', price: 6 },
      { id: 'sprite-h2oh', name: 'Sprite Fresh ou H2OH!', price: 9 },
      { id: 'agua-sem-gas', name: 'Água mineral sem gás', price: 5 },
      { id: 'agua-com-gas', name: 'Água mineral com gás', price: 5 },
      { id: 'agua-15', name: 'Água mineral 1,5 L sem gás', price: 8 },
      { id: 'gatorade', name: 'Gatorade', price: 10 },
      { id: 'powerade', name: 'Powerade', price: 10 },
      { id: 'red-bull', name: 'Energético Red Bull 250 ml', price: 14 },
      { id: 'monster', name: 'Energético Monster 473 ml', price: 14 },
    ],
  },
  {
    id: 'cafes',
    title: 'Cafés',
    items: [
      { id: 'cafe-pequeno', name: 'Café passado pequeno', price: 4 },
      { id: 'cafe-grande', name: 'Café passado grande', price: 7 },
      { id: 'expresso', name: 'Café expresso 200 ml', desc: 'Grão moído', price: 13 },
      { id: 'baristo', name: 'Cafés Baristo', desc: 'Cappuccino, mocaccino ou chocolate', price: 10 },
    ],
  },
  {
    id: 'alcoolicas',
    title: 'Bebidas alcoólicas',
    items: [
      { id: 'caipirinha', name: 'Caipirinha', desc: 'Limão, açúcar e cachaça', price: 15 },
      { id: 'caipirissima', name: 'Caipiríssima', desc: 'Limão, açúcar e vodca', price: 17 },
      { id: 'dreher', name: 'Conhaque Dreher', price: 7 },
      { id: 'campari', name: 'Campari', price: 15 },
      { id: 'martini', name: 'Martini', price: 7 },
      { id: 'vodca', name: 'Vodca Smirnoff ou Orloff', price: 7 },
      { id: 'drurys', name: "Whisky Drury's", price: 9 },
      { id: 'natu-nobilis', name: 'Whisky Natu Nobilis', price: 14 },
      { id: 'jack-daniels', name: "Whisky Jack Daniel's", price: 18 },
      { id: 'chivas', name: 'Whisky Chivas Regal 12 anos', price: 20 },
      { id: 'bitter', name: 'Bitter Nove Ervas', price: 5 },
      { id: 'vinho-taca', name: 'Vinho taça 250 ml', price: 7 },
    ],
  },
  {
    id: 'cervejas',
    title: 'Cervejas',
    items: [
      { id: 'brahma', name: 'Brahma', price: 15 },
      { id: 'eisenbahn', name: 'Eisenbahn', price: 15 },
      { id: 'kaiser', name: 'Kaiser', price: 13 },
      { id: 'original', name: 'Original', price: 16 },
      { id: 'skol', name: 'Skol', price: 15 },
      { id: 'cerveja-1l', name: 'Cervejas 1 L', desc: 'Brahma, Original, Polar ou Skol', price: 18 },
    ],
  },
]

export const findItem = (id) => {
  for (const cat of menu) {
    const item = cat.items.find((i) => i.id === id)
    if (item) return { ...item, category: cat }
  }
  return null
}

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
// Intl usa espaço não separável entre "R$" e o valor, o que evita quebra de linha.
export const formatPrice = (value) => brl.format(value)
