<template>
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
  </head>
      <body>
      <div class='enc'>
        <h1 class='pie'><strong>Reincar Preguntas Frecuentes</strong></h1>
        
        <!-- recursos humanos -->
        <div class="caja-theme">
            <h2>Recursos Humanos</h2>
            <li class="nav-item"><router-link to="/BenGafas" class="" active-class="active">¿Como acceder al beneficio de gafas?</router-link></li>
            <li class="nav-item"><router-link to="/CertificadoLaboral" class="" active-class="active">¿Como solicitar un certificado laboral?</router-link></li>
            <li class="nav-item"><router-link to="/PermisoCalamidad" class="" active-class="active">¿Como solicitar un permiso o informar una calamidad?</router-link></li>
        </div>

        <!-- contabilidad -->
        <div class="caja-theme">      
      <h2>Contabilidad</h2>
      <!-- <li class="nav-item"><router-link to=""><a>¿Como acceder al beneficio de gafas?</a></router-link></li>
      <li class="nav-item"><router-link to=""><a>¿Como solicitar un certificado laboral?</a></router-link></li>
      <li class="nav-item"><router-link to=""><a>¿Como solicitar un permiso o informar una calamidad?</a></router-link></li> -->
      </div>

       <!--  sistemas -->
      <div class="caja-theme">      
      <h2>Sistemas</h2>
      <li class="nav-item"><router-link to="/ConexionRed" active-class="active"><a>¿Problemas con la red?</a></router-link></li>
      <li class="nav-item"><router-link to="/ProblemaEncendido" active-class="active"><a>¿Problemas al encender el equipo?</a></router-link></li>
      <li class="nav-item"><router-link to="/CargarPagina" active-class="active"><a>¿Páginas WEB?</a></router-link></li>
      <li class="nav-item"><router-link to=""><a>¿Abrir archivos de OpenOffice o LibreOficce?</a></router-link></li>
      <li class="nav-item"><router-link to=""><a>¿Ingresar a la compartida?</a></router-link></li>    
      <li class="nav-item"><router-link to=""><a>¿Pidgin o Spark?</a></router-link></li>
      <li class="nav-item"><router-link to=""><a>¿Problemas con aplicativo Eyebeam, Zoiper, Microsip?</a></router-link></li>
    </div>

    <div class="caja-theme">      
      <h2>Administrativo</h2>
      <!-- <li class="nav-item"><router-link to="/ConexionRed" active-class="active"><a>¿Problemas con la red?</a></router-link></li>
      <li class="nav-item"><router-link to="/ProblemaEncendido" active-class="active"><a>¿Problemas al encender el equipo?</a></router-link></li>
      <li class="nav-item"><router-link to="/CargarPagina" active-class="active"><a>¿Páginas WEB?</a></router-link></li>
      <li class="nav-item"><router-link to=""><a>¿Abrir archivos de OpenOffice o LibreOficce?</a></router-link></li>
      <li class="nav-item"><router-link to=""><a>¿Ingresar a la compartida?</a></router-link></li>    
      <li class="nav-item"><router-link to=""><a>¿Pidgin o Spark?</a></router-link></li>
      <li class="nav-item"><router-link to=""><a>¿Problemas con aplicativo Eyebeam, Zoiper, Microsip?</a></router-link></li> -->
    </div>
</div>
      </body>

       <!--  <li class="nav-item">
          <routerLink to="" class="nav-link" active-class="active">Recursos Humanos</routerLink>
          <ul>
            <li class="submenu"><routerLink to=""><a>¿Como acceder al beneficio de gafas?</a></routerLink></li>
            <li class="submenu"><routerLink to=""><a>¿Como solicitar un certificado laboral?</a></routerLink></li>
            <li class="submenu"><routerLink to=""><a>¿Como solicitar un permiso o informar una calamidad?</a></routerLink></li>
          </ul>
        </li>
      </ul> 
 -->
    
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
<style scoped>


  a:hover {
    background: #c4b3a9;
    border-radius: 10px;
  }
  @import url(http://fonts.googleapis.com/css?family=Montserrat+Alternates);
  @import url('https://fonts.googleapis.com/css2?family=Miniver&display=swap');
  
  .enc{
    margin:2px;
    padding:1px;
    font:12pt;
  }
  
  
  h1.pie{
  font-family: 'Times New Roman', Times, serif,cursive;
  font-size: 50px;
  color:rgb(2, 38, 139);
  text-align: center;
  }

 /*li a{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #fff;
  font-size: 20px;
  
  }*/
  
  
  
  a{
    color: black; 
    text-align: center;
  }
  a:hover {
    color: white;  
  }
  
  .enc{
    margin:2px;
    padding:1px;
    font:12pt;
  }
  
  div.enc{
  background-color:#f8f8f8;
  background-size: 100%;
  margin:auto;
  display:block;
  width:100%;
  height: 100%;
  background-repeat: no-repeat;
  margin-top: 40px;
 }
div.caja-theme{
  padding:auto;
  padding-block: 10px;
  display:inline-block;
  margin-top:auto;
  vertical-align:top;
  margin-left: 15px;
}
h2{
  font-family: 'Times New Roman', Times, serif;
  font-size: 22px;
  text-align:center;
}
li a{
  font-family:'Times New Roman', Times, serif;
  color:#000;
  font-size:12px;
}
a:hover{
  background-color: #88ddf7;
  color:#000;
}
li{
  font-family: Arial black;
  color:#000000;
  margin-top:10px;
  margin-bottom: 2px;

}
li.nav-item{
  padding:0cm;
  list-style: none;
  line-height: 0%;
}
a{
  line-height: 0px;
}
</style>
