import Vue from 'vue';
import VueRouter from 'vue-router';

import ListaDeProdutos from './components/ListaDeProdutos'
import DetalharProdutos from './components/DetalharProdutos'


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'lista',
            component: ListaDeProdutos
        },
        {
            path: '/produtos/:id',
            name: 'DetalharProdutos',
            component: DetalharProdutos
        }
    ]
})