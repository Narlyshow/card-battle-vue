<template>
  <div class="login-container">
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Digite seu email:</label>
          <input type="text" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="senha">Digite sua senha:</label>
          <input type="password" id="senha" v-model="senha" required>
        </div>
        <div class="forgot-password">
          <router-link to="/rota-interna">Esqueceu sua senha?</router-link>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <div class="register-wrapper">
        <div class="register-text">
          <p><b>Não é cadastrado?</b></p>
        </div>
        <div class="register">
          <router-link to="/formulario-cadastro"><b>Cadastre-se</b></router-link>
        </div>
      </div>  
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

        console.log('Resposta da API:', response.data);
        localStorage.setItem('emailAutenticado', this.email);
        this.$router.push({ name: 'TelaPrincipal', query: { emailAutenticado: this.email }});
      } catch (error) {
        this.senhaInvalida = true;
        console.error('Erro de autenticação:', error);
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  background-image: url('@/assets/login.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  background: rgba(255, 255, 255, 0.9);
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
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
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.forgot-password {
  text-align: right;
  margin-bottom: 10px;
}

.register-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.register-text {
  color: #333;
  font-size: 14px;
}

.register {
  color: #007BFF;
  font-size: 14px;
}
</style>
