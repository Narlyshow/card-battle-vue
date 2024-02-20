<template>
    <div class="register-container">
      <div class="register-form">
        <h2>Cadastre-se</h2>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" v-model="nome" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="senha">Senha:</label>
            <input type="password" id="senha" v-model="senha" required>
          </div>
          <div class="form-group">
            <label for="confirmarSenha">Confirmar Senha:</label>
            <input type="password" id="confirmarSenha" v-model="confirmarSenha" required>
          </div>
          <div v-if="senha !== confirmarSenha" class="alert">As senhas não coincidem.</div>
          <button type="submit" :disabled="senha !== confirmarSenha">Cadastrar</button>
        </form>
        <PopupSuccess v-if="cadastroSucesso" @fechar="cadastroSucesso = false" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import PopupSuccess from '../components/PopupSuccess.vue';
  
  export default {
    components: {
    PopupSuccess
  },
    data() {
      return {
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        nomeDoPersonagem: 'NULL',
        cadastroSucesso: false
      };
    },
    methods: {
      async register() {
        if (this.senha !== this.confirmarSenha) {
          return; // Impedir o envio do formulário se as senhas não coincidem
        }
  
        try {
          const response = await axios.post('https://localhost:7021/api/v1/players/RegisterPlayer', {
            nomeDeUsuario: this.nome,
            email: this.email,
            senha: this.senha,
            nomeDoPersonagem : this.nomeDoPersonagem
          });
  
          console.log('Resposta da API:', response.data);
          this.cadastroSucesso = true;
          console.log(this.cadastroSucesso)
          // Lidar com a resposta da API, redirecionar, etc.
        } catch (error) {
          console.error('Erro no cadastro:', error);
          // Exibir mensagem de erro ao usuário, se necessário
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .register-container {
  background-image: url('@/assets/cadastro.jpg');
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register-form {
  background: rgba(255, 255, 255, 0.9);
  width: 350px;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
  </style>
  