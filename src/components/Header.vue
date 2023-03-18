<template>
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
  </head>
      <body>
    <div class='enc'>
        <h1 class='pie'><strong>Preguntas Frecuentes</strong></h1>
        <!-- recursos humanos -->
        <div class="caja-theme">
            <h2>Capital Humano</h2>
            <li class="nav-item"><router-link to="/BenGafas" class="" active-class="active">¿Como acceder al beneficio de gafas?</router-link></li>
            <li class="nav-item"><router-link to="/CertificadoLaboral" class="" active-class="active">¿Como solicitar un certificado laboral?</router-link></li>
            <li class="nav-item"><router-link to="/PermisoCalamidad" class="" active-class="active">¿Como solicitar un permiso o informar una calamidad?</router-link></li>
            <li class="nav-item"><router-link to="/MisBeneficios" class="" active-class="active">¿Que beneficios tengo como trabajador?</router-link></li>
            <li class="nav-item"><router-link to="/RetirarCesantias" class="" active-class="active">¿Como solicito el retiro de mis cesantías?</router-link></li>
            <li class="nav-item"><router-link to="/MisBeneficios" active-class="active"><a>¿Como realizan mi liquidación al terminar el contrato?</a></router-link></li>
            <li class="nav-item"><router-link to="/OrganigramaR" active-class="active"><a>¿Como es el organigrama de la empresa?</a></router-link></li>
          </div>
       <!--  sistemas -->
      <div class="caja-theme">      
      <h2>Sistemas</h2>
      <li class="nav-item"><router-link to="/ConexionRed" active-class="active"><a>¿Problemas con la red?</a></router-link></li>
      <li class="nav-item"><router-link to="/ProblemaEncendido" active-class="active"><a>¿Problemas al encender el equipo?</a></router-link></li>
      <li class="nav-item"><router-link to="/CargarPagina" active-class="active"><a>¿Problemas con páginas WEB?</a></router-link></li>
      <li class="nav-item"><router-link to="/DañoDiadema" active-class="active"><a>¿Problemas con la diadema?</a></router-link></li>
      <!--   <li class="nav-item"><router-link to=""><a>¿Abrir archivos de OpenOffice o LibreOficce?</a></router-link></li>
      <li class="nav-item"><router-link to=""><a>¿Ingresar a la compartida?</a></router-link></li>    
      <li class="nav-item"><router-link to=""><a>¿Pidgin o Spark?</a></router-link></li>
      <li class="nav-item"><router-link to=""><a>¿Problemas con aplicativo Eyebeam, Zoiper, Microsip?</a></router-link></li> -->
    </div>
   

    <div class="caja-theme">      
      <h2>Administrativo</h2>
      <li class="nav-item"><router-link to="/SeguridadDeLaInformacion" active-class="active"><a>¿Cuales son las políticas de seguridad de la información?</a></router-link></li>
      <li v-for="(pedido, i) in pedidos" :key="i"  class="nav-item">
              <router-link :to="`/InfoDB/${pedido.id}`" active-class="active">{{pedido.nameProducto}}</router-link></li> 
      <li class="nav-item"><router-link to="/DirPersonalApoyo" active-class="active"><a>¿Cuales son los directivos y el personal de apoyo?</a></router-link></li>
              
      <!-- <li class="nav-item"><router-link to="/ConexionRed" active-class="active"><a>¿Problemas con la red?</a></router-link></li>
      <li class="nav-item"><router-link to="/ProblemaEncendido" active-class="active"><a>¿Problemas al encender el equipo?</a></router-link></li>
      <li class="nav-item"><router-link to="/CargarPagina" active-class="active"><a>¿Páginas WEB?</a></router-link></li>
      <li class="nav-item"><router-link to=""><a>¿Abrir archivos de OpenOffice o LibreOficce?</a></router-link></li>
      <li class="nav-item"><router-link to=""><a>¿Ingresar a la compartida?</a></router-link></li>    
      <li class="nav-item"><router-link to=""><a>¿Pidgin o Spark?</a></router-link></li>
      <li class="nav-item"><router-link to=""><a>¿Problemas con aplicativo Eyebeam, Zoiper, Microsip?</a></router-link></li> -->
    </div>

    <div class="caja-theme">
    <h2>Formación</h2>
      <li class="nav-item"><a href="http://192.168.2.26:81/moodle/login/index.php" target="_blank">Link de capacitaciones moodle de Reincar</a></li>
     <!--  <li class="nav-item"><router-link to="/ProblemaEncendido" active-class="active"><a>¿Problemas al encender el equipo?</a></router-link></li>
      <li class="nav-item"><router-link to="/CargarPagina" active-class="active"><a>¿Problemas con páginas WEB?</a></router-link></li>
      <li class="nav-item"><router-link to="/DañoDiadema" active-class="active"><a>¿Problemas con la diadema?</a></router-link></li> -->
      <!--   <li class="nav-item"><router-link to=""><a>¿Abrir archivos de OpenOffice o LibreOficce?</a></router-link></li>
      <li class="nav-item"><router-link to=""><a>¿Ingresar a la compartida?</a></router-link></li>    
      <li class="nav-item"><router-link to=""><a>¿Pidgin o Spark?</a></router-link></li>
      <li class="nav-item"><router-link to=""><a>¿Problemas con aplicativo Eyebeam, Zoiper, Microsip?</a></router-link></li> -->
    </div>

</div>
      </body>
      <div class="pqr-container">
  <div class="form-text">
    <div class="background-block">
      <div class="text-block">
  <h5>¿Tienes alguna sugerencia, queja o reclamo?</h5>
          <label for="formGrpupExampleInput">Escoge la cartera o el área a la que perteneces.</label>
          <h6>Selecciona el Área al que perteneces </h6>
          <select
            v-model="area"
            type="text"
            name="area"
            class="form-control"
            placeholder="Selecciona el Área"
        ><option value=""></option>
          <option value="sistemas">Sistemas</option>
          <option value="administrativo">Administrativo</option>
          <option value="contabilidad">Contabilidad</option>
          <option value="rechumanos">Recursos Humanos</option>
          <option value="credifinanciera">Credifinanciera</option>
          <option value="comultrasan">Comultrasan</option>
          <option value="credivalores">Credivalores</option>
          <option value="cens">Cens</option>
          <option value="bancobogota">Banco de Bogotá</option>
          <option value="chec">Chec</option>
          <option value="toyota">Toyota</option>
          <option value="avvillas">AVVillas</option>
        </select>

        <div class="form-group">
            <label for="formGroupExampleInput">Nombre</label>
            <input
            v-model="nombre" 
            type="text" 
            class="form-control"
            placeholder="Escribe tu nombre (Opcinal)"/>
          </div>
          <label>Fecha</label>
                  <input type="DATE" v-model="fecha">

          <div class="form-group">
            <label for="formGroupExampleInput">Escribe aquí cuales son tus dudas o sugerencias...</label>
            <textarea 
            v-model="pqrs" 
            type="text" 
            class="form-control" 
            cols="10" 
            rows="4"></textarea>
          </div>
          <button class="btn btn-primary" @click="addPqrs" id="btn-alert" onclick="alert('Tu respuesta se ha enviado correctamente')">
            Enviar
          </button>
      </div>
    </div>
  </div>
</div>
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
        --> <footer>
          <li class="nav-item" v-if="check">
          <router-link to="/LoginUno" class="nav-link" active-class="active"
            ><a>Inicio de Sesion</a></router-link
          >
        </li>
        </footer>
        
</template>
<script>
/*eslint-disable*/
import {ref} from 'vue'
import axios from 'axios'
// import LoginUno from "./components/LoginUno";
/*import{ref} from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';*/
export default {
  setup(){
    const area = ref("")
    const pqrs = ref("")
    const nombre = ref("")
    const fecha = ref("")

    function addPqrs(){
      if(pqrs.value != '', area.value !='', fecha.value !=''){
        const agregarPqrs = {fecha:fecha.value, pqrs:pqrs.value, area:area.value, nombre:nombre.value};
        axios.post('https://preguntasfrecuentesreincar-default-rtdb.firebaseio.com/agregarPqrs.json',agregarPqrs).then(res=>console.log(res)).catch(error => console.log(error));
      }
    }
    const pedidos = ref([])
  axios.get('https://preguntasfrecuentesreincar-default-rtdb.firebaseio.com/pedido.json')
  .then(res =>{
    console.log(res)
    for(const id in res.data){
      pedidos.value.push({
        id: id,
          codigo:res.data[id].codigo,
          nameProducto:res.data[id].nameProducto,
          TipoMadera:res.data[id].TipoMadera,
          MedioPago:res.data[id].MedioPago,
          TipoTela:res.data[id].TipoTela,
          nombre:res.data[id].nombre,
          tipoDoc:res.data[id].tipoDoc,
          documento:res.data[id].documento,
          direccion:res.data[id].direccion,
          fecha:res.data[id].fecha,
      })
    }
  })
  .catch(error=>console.log(error))
  return {pedidos, pqrs, area, nombre, fecha,  addPqrs};
},
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
  margin-left: 100px;
}
h2{
  font-family: 'Times New Roman', Times, serif;
  font-size: 22px;
  text-align:center;
}
li a{
  font-family:'Times New Roman', Times, serif;
  color:#000;
  font-size:14px;
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
  list-style:circle;
  line-height: 0%;
}
a{
  line-height: 0px;
}
li .nav-link{
  text-align: left;
 
}
footer{
  padding:10px;
}
div.pqr-container{
  margin-left: 10px;
  padding: 12px;
  background-color: #072463;
  color:#fff
}
.pqr-container{
  padding: 3rem;
  width: 13cm;
}
div.form-text{
  margin-top: 13px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
