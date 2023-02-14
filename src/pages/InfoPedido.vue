<template>
    <div>
      <div v-if="pedidos != undefined">
        <h1><strong>{{ pedidos.nameProducto }}</strong></h1>
        <div class="img-gafas">
            <center><img>{{ pedidos.image }}</center>
        </div>
        
          <div class="container">
           <!--  <p>Fecha: <b>{{pedidos.fecha}}</b></p>
            <p>Codigo:  <b>{{pedidos.codigo}}</b></p> -->
            <!-- <p>Nombre Producto: <b>{{pedidos.nameProducto }}</b></p> -->
            <!-- <p>Tipp de Madera: <b>{{pedidos.TipoMadera}}</b></p>
            <p>Medio de pago:  <b>{{pedidos.MedioPago}}</b></p>
            <p>Tipo de tela: <b>{{pedidos.TipoTela}}</b></p> -->
            <li><a>{{pedidos.nombre}}</a></li>
            <a><strong><u>En caso de ser necesario comuníquese con Soporte Técnico</u></strong></a>
            <!-- <p>Tipo de documento: <b>{{pedidos.tipoDoc}}</b></p>
            <p>Numero documento: <b> {{pedidos.documento}}</b></p>
            <p>Dirección:  <b>{{pedidos.direccion}}</b></p> -->
          </div>
      </div>
  
    </div> 
  </template>
  <script>
  /* import {computed} from 'vue' */
  /* import {useStore} from 'vuex' */
  import {useRoute} from 'vue-router'
  import{ref} from 'vue'
  import axios from 'axios'
  
  export default {
  setup(){
    /*   const store = useStore() */
       const route = useRoute()
      const pedidos = ref([])
  
     /*  const persona = computed(()=>{ */
        const index = route.params.index;
      /*   return store.getters.getPersona(index); */
     /*  }) */
     axios.get('https://preguntasfrecuentesreincar-default-rtdb.firebaseio.com/pedido/'+index+'.json')
     .then(res=>{
      console.log(res.data)
      pedidos.value = res.data
     
     })
     .catch(error => console.log(error))
      return {pedidos}
    }
    };
  </script>
  <style scoped>
  h1{
    font-family: 'Times New Roman', Times, serif;
    color:#000000;
    text-align: center;
    font-size: 40px;
}
div.container{
    padding: auto;
    background: #fff;
}
div.img-gafas{
    align-content: center;
}
li{
    
    margin-top: 30px;
    margin-left: 20px;
}
a{
    font-family: 'Times New Roman', Times, serif;
    color:#000;
    font-size: 20px;
    margin: 10px;
}
a:hover{
    background: none;
}
  </style>