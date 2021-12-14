<template>
  <b-container id="add">
    <b-row>
      <h3 style="color:white">Adicionar produto</h3>
    </b-row>

    <div class="form-group">
      <label for="nome" style="color:white"> Nome: </label>
      <input type="text" class="form-control" id="nome" placeholder="Nome do Produto" v-model.trim.lazy="name" required/>

      <label for="categoria" style="color:white"> Categoria do Produto: </label>
      <input type="text" v-model.trim.lazy="categoria" id="categoria" placeholder="Insira a categoria do produto" class="form-control" required/>

      <label for="quantidade" style="color:white"> Quantidade: </label>
      <input type="number" v-model.trim.lazy="quantidade" id="quantidade" placeholder="Ex. 2" class="form-control" required/>

      <label for="quantidade" style="color:white"> Link: </label>
      <input type="url" v-model.trim.lazy="Link" id="Link" placeholder="Insira o Link do Produto" class="form-control" required/>

      <b-row>
        <b-button @click="criarProduto()" variant="danger"> Salvar </b-button>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AdicionarProduto",

  data() {
    return {
      name: "",
      categoria: "",
      quantidade: "",
      link:""
    };
  },

  methods: {
    ...mapActions(["adicionarProduto"]),

    criarProduto() {
      let produto = {
        name: this.name,
        categoria: this.categoria,
        quantidade: this.quantidade,
        link:this.link,
        image_url:
          "https://image.flaticon.com/icons/png/512/103/103831.png",
      };
      this.adicionarProduto(produto);
      window.alert("Produto adicionado! :)");
    },
  },
};
</script>

<style>
.btn {
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px;
}

h3 {
  margin: auto;
  margin-top: 50px;
}

.form-control {
  margin-bottom: 20px;
}

.form-group {
  margin: auto;
}

#add {
  width: 50%;
}
</style>