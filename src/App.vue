<template>
  <b-container>
    <router-view />
  </b-container>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');


  body {
    background-image: url("https://i.pinimg.com/originals/7a/0d/e2/7a0de2c425b99bd0f4490e1480fa89e5.jpg");
  }

  h1, h2, h3, h4, .card-header {
    font-weight: 700;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.671);
  }

  .container {
    font-family: 'Nunito', sans-serif;
    background-color: rgba(7, 5, 5, 0.65);
  }

  .footer {
    display: flex;
    justify-content: space-around;
  }
</style>
