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
          <router-link to="/pqrs" class="nav-link" active-class="active"
            >Inicio</router-link
          >
        </li>
      
        <li class="nav-item" v-if="verificar">
          <router-link to="/FormData" class="nav-link" active-class="active"
            >Registrar Nuevo</router-link
          >
        </li>
        <!-- <li class="nav-item" v-if="verificar">
          <router-link to="/PrintData" class="nav-link" active-class="active"
            >Usuarios</router-link
          >
        </li> -->
        <li class="nav-item" v-if="verificar">
          <router-link to="/Pedidos" class="nav-link" active-class="active"
            >Formulario de Preguntas</router-link
          >
        </li>
        <li class="nav-item" v-if="verificar">
          <router-link to="/PreguntasQuejasR" class="nav-link" active-class="active"
            >PQRS</router-link
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
      login:this.$store.state.login
    }
  },
  computed:{
    verificar(){
    return  this.$store.state.mostrar
  },
  check(){
    return this.$store.state.login
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
  background-color: #0d4dd8;
}
a.nav-link{
  color:#ffffff;
  text-align:left;
}
header.hea {
    background: #032d86;
    width: 100%;
    z-index: index 100%;
    position:sticky;
    height: 70px;
    margin-right: 5px;
  
  } 
  h1{
  font-family: 'Times New Roman', Times, serif;
  color:#ffffff;
}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: #fff;
    background-color: #075f88;
    padding:12px;
}
.navbar{
  color:#4c72c5
}
a.nav-link{
  color:#ffffff;
  text-align:left;
  padding:12px;
  background-color: #26c0c0;
  border-radius: 15px;
  margin-left:16px;
}
.nav li:hover .submenu{
  display:inline-block;
}
.nav-link:hover {
  background-color: #5f8bce;
  color: white;
  padding:12px;
  transition: 0,5ms;
}

.navbar .navbar-light .nav-pills ul{
  list-style: none;
}
.nav > li{
position:relative;
display:inline-block
}
.nav > li > {
  display: block;
  padding:auto;
  font-family:'Times New Roman', Times, serif;
  text-transform: none;

}
.nav li a:hover{
  transition:all .3s;
}
header.hea[data-v-3c9d234f] {
  background: linear-gradient();
    width: 100%;
    z-index: index 80%;
    position: sticky;
    height: 45px;
    margin-right: 5px;
}
</style>
