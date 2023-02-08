<template>
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
  </head>
 <div class="nav-bar">
  <nav class="navbar navbar-light nav-pills">
    <!-- <div class="container"> -->
      <ul class="nav">
       
        <li class="nav-item">
          <router-link to="/Header" class="nav-link" active-class="active"
            >Inicio</router-link
          >
        </li>

        <li class="nav-item">
          <RouterLink to="" class="nav-link">Recursos Humanos</RouterLink>
        <ul>
          <li class="submenu"><RouterLink to="">¿Como acceder al beneficio de gafas?</RouterLink></li>
          <li class="submenu"><RouterLink to="">¿Como solicitar un certificado laboral?</RouterLink></li>
          <li class="submenu"><RouterLink to="">¿Como solicitar un permiso o informar una calamidad?</RouterLink></li>
        <!--   <li class="submenu"><RouterLink to="" class="sublist"></RouterLink></li>
          <li class="submenu"><RouterLink to="" class="sublist"></RouterLink></li>
          <li class="submenu"><RouterLink to="" class="sublist"></RouterLink></li>
          <li class="submenu"><RouterLink to="" class="sublist"></RouterLink></li> -->
        </ul>
        </li>
      </ul> 

      <h1>Bienvenido!</h1>
      </nav>
</div>
       <!--  <li class="nav-item" v-if="verificar">
          <router-link to="/FormData" class="nav-link" active-class="active"
            >Agregar Usuarios</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/Pedidos" class="nav-link" active-class="active"
            >¡Pedir!</router-link
          >
        </li>
        <li class="nav-item" v-if="verificar">
          <router-link to="/print" class="nav-link" active-class="active"
            >Usuarios Registrados</router-link
          >
        </li>
         <li class="nav-item" v-if="check">
          <router-link to="/LoginUno" class="nav-link" active-class="active"
            >Inicio de Sesion</router-link
          >
        </li>  -->
        <!-- <li class="nav-item">
          <router-link to="/Productos" class="nav-link" active-class="active"
            >Productos</router-link
          >
        </li> -->
        <!-- <li class="nav-item" v-if="verificar">
          <router-link to="/PedidoGet" class="nav-link" active-class="active"
            >PedidoGet</router-link
          >
        </li> -->
        <!-- <button v-if="verificar"><a href="/log">Cerrar Sesion</a></button>
        --> 
     
   

    
</template>
<script>

// import LoginUno from "./components/LoginUno";
/*import{ref} from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';*/
export default {
 
  data(){
    return{
      mostrar:this.$store.state.mostrar,
      login:this.$store.state.login 
    }
  },
  computed:{
    verificar(){
    return  this.$store.state.mostrar
  },
  check(){
      return  this.$store.state.login 
    }
}}
</script>
<style>
.submenu{
  position: absolute;
  background: #333333;
  width: 120%;
  display:none;
}
.submenu li{
  display: block;
  padding: 20px;
  color: #ffffff;
  font-family: 'Times New Roman', Times, serif;
  text-decoration: none;
 
}
.nav-item li:hover .submenu{
  display: block;
}
div.nav-bar{
  display: block;
  margin:auto;
  margin-top: 10px;
}
body{
  background-color: #204ece;
  margin-top:-20px;
}
.nav-item{
  color: #8b6c53;
  display: block;
  padding:15px 20px;
  text-decoration: none;
}
.nav-link{
  color: #FFF;
  background-color:#8e400000;
  border-color: #95786b;
  transition-duration: 0.4s;
}
.nav-link:hover {
  background-color: #547fdb;
  color: white;
}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: #000000;
    background-color: #ffffff;
}
.navbar{
  color:#8b6c53
}
h1{
  font-family: 'Times New Roman', Times, serif;
  color:#ffffff;
}
</style>
