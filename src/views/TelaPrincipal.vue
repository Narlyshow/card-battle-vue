<template>
    <div class="tela-principal">
      <nav>
        <div class="logo">Card Battle</div>
        <router-link to="/tela-principal">Home</router-link>
        <router-link to="/deck">Deck</router-link>
        <router-link to="/ranking">Ranking</router-link>
        <button @click="logout">Logout</button>
      </nav>
  
      <div class="conteudo">
        <div class="info-jogador">
          <h2>Bem-vindo, {{ jogador.nome }}!</h2>
          <p>Nível: {{ jogador.nivel }}</p>
          <p>XP: {{ jogador.experiencia }}</p>
        </div>
  
        <div class="area-cartas">
          <!-- Seção para exibir cartas ou outro conteúdo do jogo -->
          <!-- Exemplo: Exibindo cartas do jogador -->
          <div v-for="carta in jogador.cartas" :key="carta.id" class="carta">
            <img :src="carta.imagem" :alt="carta.nome" />
            <p>{{ carta.nome }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        jogador: {
          nome: '',
          nivel: 5,
          experiencia: 120,
          cartas: [
            { id: 1, nome: 'Dragão', imagem: 'dragon.jpg' },
            { id: 2, nome: 'Feiticeiro', imagem: 'wizard.jpg' },
            // Adicione mais cartas conforme necessário
          ]
        }
      };
    },
    mounted() {
    const emailAutenticado = localStorage.getItem('emailAutenticado');  
    this.carregarInformacoesJogador(emailAutenticado);
    },
    methods: {
      async carregarInformacoesJogador(emailAutenticado) {
      try {
        
        const url = `https://localhost:7021/api/v1/players/PlayerInformation?email=${emailAutenticado}`;
        const response = await fetch(url);
        const data = await response.json();

        // Atualizar os dados do jogador com os dados recebidos da API
        this.jogador.nome = data.nome_de_usuario;
        this.jogador.nivel = data.nivel;
        this.jogador.experiencia = data.experiencia;
        this.jogador.cartas = data.cartas; // Supondo que a API retorne um array de cartas

      } catch (error) {
        console.error('Erro ao carregar informações do jogador:', error);
      }
    },
      logout() {
        
        localStorage.removeItem('emailAutenticado');
        
        // Implemente a lógica de logout, por exemplo, redirecionar para a tela de login
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Adicione estilos conforme necessário */
  .tela-principal {
    padding: 20px;
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #007BFF;
    padding: 10px;
    color: #fff;
  }
  
  nav a {
    color: #fff;
    margin-right: 10px;
    text-decoration: none;
  }
  
  nav button {
    background-color: #fff;
    color: #007BFF;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .conteudo {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .info-jogador {
    flex: 1;
  }
  
  .area-cartas {
    flex: 2;
    display: flex;
    flex-wrap: wrap;
  }
  
  .carta {
    margin: 10px;
    text-align: center;
  }
  
  .carta img {
    width: 100px;
    height: 150px;
    object-fit: cover;
  }
  </style>