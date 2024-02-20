import { createRouter, createWebHistory } from "vue-router";

import TelaLogin from '../components/TelaLogin.vue';
import PopupSuccess from '../components/PopupSuccess.vue'
//import TelaPrincipal from '../views/TelaPrincipal.vue';
//import NotFound from '../views/NotFound.vue';

//pode importar manual como está acima, porém dependendo do numero de imports o
//código pode ficar bastande sujo e carregar coisas que não são necessários
// por isso pode-se aplicar o lazyLoad passando como parametro a view, enxugando o
//código e deixando dinâmico, além de só carregar o componente chamado.

function lazyLoad(view){
    return import(`../views/${view}.vue`);
}


const routes = [
    // Configure as rotas usando os componentes importados
    {
        path: '/',
        name: 'TelaLogin',
        component: TelaLogin
    },
    { 
      path: '/tela-principal',
      name: 'TelaPrincipal',
      component: lazyLoad("TelaPrincipal"),
      //props: (route) => ({ emailAutenticado: route.query.emailAutenticado })
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: lazyLoad("NotFound")
    },
    {
        path: '/formulario-cadastro',
        name: 'FormularioCadastro',
        component: lazyLoad("FormularioCadastro")
    },
    {
      path: '/pop-up',
      name: 'PopupSuccess',
      component: PopupSuccess
    }  
  ];
  
  const router = createRouter({
    history: createWebHistory(), 
    routes
  });
  
  export default router;