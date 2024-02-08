<template>
  <div class="login-container">
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Nome de Usuário:</label>
          <input type="text" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="senha">Senha:</label>
          <input type="password" id="senha" v-model="senha" required>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <div class="alert" v-if="senhaInvalida">Senha inválida. Tente novamente.</div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      senha: '',
      emailAutenticado: '',
      senhaInvalida: false
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('https://localhost:7021/api/v1/players/Login', {
          email: this.email,
          senha: this.senha
        });

        // Verifique a resposta da API e tome as ações apropriadas
        console.log('Resposta da API:', response.data);
        
        localStorage.setItem('emailAutenticado', this.email);

        // Redirecione para a próxima página ou realize a ação apropriada após o login bem-sucedido
        this.$router.push({ name: 'TelaPrincipal', query: { emailAutenticado  : this.email}});
        console.log(this.emailAutenticado);

      } catch (error) {
        // Exiba uma mensagem de erro se as credenciais forem inválidas.
        this.senhaInvalida = true;
        console.error('Erro de autenticação:', error);
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  background-image: url('@/assets/login.jpg'); /* Adicione o caminho para sua imagem de fundo */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  background: rgba(255, 255, 255, 0.9); /* Adicione um fundo semitransparente para o formulário */
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}


.form-group {
  margin: 10px 0;
}

label {
  display: block;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.alert {
  color: red;
  margin-top: 10px;
}
</style>
