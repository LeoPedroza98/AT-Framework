<template>
  <b-container>
    <b-card no-body class="overflow-hidden" style="max-width: 540px">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="produto.image_url" :alt="produto.name" :title="produto.name" class="rounded-0"></b-card-img>
        </b-col>
        
        <b-col md="6">
          <b-card-body :title="produto.name">
            <b-card-text>
              <b-col> Categoria do Produto: {{ produto.categoria }} </b-col>

              <b-col> Quantidade: {{ produto.quantidade }} </b-col>
            </b-card-text>

            <b-card-text>
              <b-col>
                <router-link to="/"> Voltar </router-link>
              </b-col>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

    <div id="edit">
      <h2>Editar</h2>

      <div class="form-group" @submit="onSubmit">
        <label for="Nome"> Nome: </label>
        <input type="text" class="form-control" id="Nome" v-model="produto.name" />

        <label for="ano"> Categoria: </label>
        <input type="text" v-model.trim.lazy="produto.categoria" id="categoria" class="form-control" />

        <label for="quantidade"> Quantidade: </label>
        <input type="number" v-model.trim.lazy="produto.quantidade" id="quantidade" class="form-control"
        />
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "DetalharProdutos",

  data() {
    return {
      id: this.$route.params.id,
      produto: this.$route.params.produto,
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.produto));
    },
  },
};
</script>

<style>
.card {
  margin: auto;
  margin-top: 50px;
  margin-bottom: 30px;
}

#edit {
  width: 50%;
  margin: auto;
}

.container {
  padding: 10px;
}
</style>