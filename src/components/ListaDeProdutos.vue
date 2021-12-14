<template>
  <b-container>
    <b-row>
      <h1 style="color:white">
        <b-icon icon="bag-plus" animation="spin" font-scale="1"></b-icon>
        Sua Lista de Compras
        <b-icon icon="bag-plus-fill" animation="spin-reverse" font-scale="1"></b-icon>
      </h1>
    </b-row>

    <b-card-group deck>
      <b-card
        v-for="produto in todosOsProdutos"
        :key="produto.id"
        style="min-width: 16rem; max-width: 16rem"
        border-variant="default"
        :header="produto.name"
        header-bg-variant="danger"
        header-text-variant="white"
        align="center"
        class="card"
      >
        <b-card-text>
          <b-button variant="outline-danger">
            <router-link style="color:white" tag="span" :to="{ name: 'DetalharProdutos', params: { id: produto.id, produto: produto },}">
              Detalhar
            </router-link>
          </b-button>
        </b-card-text>

        <b-link class="b-link">
          <b-icon-trash @click="deletarProduto(produto.id)"></b-icon-trash>
        </b-link>
      </b-card>
    </b-card-group>

    <adicionar-produto />
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AdicionarProduto from "./AdicionarProduto.vue";

export default {
  name: "ListaDeProdutos",

  components: {
    AdicionarProduto,
  },

  computed: mapGetters(["todosOsProdutos"]),

  methods: {
    ...mapActions(["getProdutos", "deletarProduto"]),
  },

  created() {
    this.getProdutos();
  },
};
</script>

<style>
.card {
  margin: auto;
  background: grey;
}

.card-deck {
  margin-left: 100px;
}

h1 {
  margin: auto;
  margin-top: 20px;
}
</style>