<template>
<!-- <app-header class="mb-3" />  -->
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Reincar Preguntas Frecuentes</title>
  </head>

    
        <header class='hea'>
          <div class="nav-bar">
  <nav class="navbar navbar-light nav-pills">
    <!-- <div class="container"> -->
      <ul class="nav">
       
        <li class="nav-item">
          <router-link to="/Header" class="nav-link" active-class="active"
            >Inicio</router-link
          >
        </li>
      </ul>
      <h1>Bienvenido!</h1>
      </nav>
</div> 
      </header>
      
  <header id="header" class="header">
        <div class="container">
            <div class="row">
                <div class="four columns">
                </div>
                <div class="two columns u-pull-right">
                </div>
            </div> 
        </div>
        </header>
      
        <div class="barra">
          <div class="container">
              <div class="row"></div>
              </div>
          </div>
          <footer>
            <div>
              
            </div>
          </footer>
<router-view />
</template>

<script>
export default {
  name: "App",
  components: {
   /*  "app-header": Header, */
    //LoginUno
  },
  data(){
    return{
      error:false,
      mostrar:this.$store.state.mostrar,
    }
  },
  computed:{
    verificar(){
    return  this.$store.state.mostrar
  }
}}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.navbar.navbar-light .nav-pills{
  width: 1000px;
  margin:auto;
  padding:auto;
}
a.nav-link{
  color:#ffffff;
  text-align:left;
}
</style>
