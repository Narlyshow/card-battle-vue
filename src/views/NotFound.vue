<template>
    <div class="not-found-container">
      <div class="not-found-content">
        <h1>404 - Página Não Encontrada</h1>
        <p>A página que você está procurando pode ter sido removida ou não existe.</p>
        <router-link to="/tela-principal" class="back-to-home">Voltar para a Página Inicial</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  };
  </script>
  
  <style scoped>
  .not-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .not-found-content {
    text-align: center;
  }
  
  h1 {
    font-size: 3em;
    color: #333;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2em;
    color: #666;
    margin-bottom: 30px;
  }
  
  .back-to-home {
    display: inline-block;
    font-size: 1.2em;
    color: #fff;
    text-decoration: none;
    background-color: #007BFF;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  
  }
  
  .back-to-home:hover {
    background-color: #0056b3;
  }
  </style>
  