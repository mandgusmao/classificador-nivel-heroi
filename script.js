// Lista de pokémons com várias informações
let pokemons = [
  {
    nome: "Pikachu",
    tipo: "Elétrico",
    nivel: 25,
    vida: 100,
    ataque: 55,
    defesa: 40
  },
  {
    nome: "Charizard",
    tipo: "Fogo / Voador",
    nivel: 36,
    vida: 150,
    ataque: 84,
    defesa: 78
  },
  {
    nome: "Bulbasaur",
    tipo: "Planta / Veneno",
    nivel: 16,
    vida: 90,
    ataque: 49,
    defesa: 49
  },
  {
    nome: "Dragonite",
    tipo: "Dragão / Voador",
    nivel: 55,
    vida: 200,
    ataque: 134,
    defesa: 95
  }
];

// Laço de repetição para exibir a mensagem final
for (let i = 0; i < pokemons.length; i++) {
  console.log(pokemons[i].nome.toUpperCase() + " Cadastrado com sucesso");
}
