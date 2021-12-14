import axios from 'axios'

const state = {
    produtos: []
}

const getters = {
    todosOsProdutos: state => state.produtos 
}

const actions = {
    getProdutos({commit}) {
        axios.get().then((response) => {commit('getProdutos', response.data.games)})
    },

    deletarProduto({commit}, id) {
        commit('deletarProduto', id)
        window.alert('Produto excluído :(')
    },

    adicionarProduto({commit}, produto) {
        commit('adicionarProduto', produto)
    }
}

const mutations = {
    getProdutos: (state, data) => (state.produtos = data),

    deletarProduto: (state, id) => (state.produtos = state.produtos.filter(j => j.id !== id)), 

    adicionarProduto: (state, data) => state.produtos.push(data)
}

export default {
    state,
    actions,
    getters,
    mutations
}