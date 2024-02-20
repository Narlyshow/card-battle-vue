<template>
    <div v-if="show" class="popup">
      <div class="popup-content">
        <span class="close" @click="closePopup">&times;</span>
        <h3>Cadastro realizado com sucesso!</h3>
        <p>Seu cadastro foi concluído com sucesso.</p>
        <button @click="closePopup">Ir para login</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: true
      };
    },
    methods: {
      openPopup() {
        this.show = true;
      },
      closePopup() {
        this.show = false;
        this.$emit('fechar');
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    z-index: 9999;
  }
  
  .popup-content {
    text-align: center;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  </style>
  