<template>
    <div>
      <title>Haz tu pedido</title>
  
      <div class="card" style="width: 35rem">
        <div class="card-body">
          <h1 class="card-title">¡Preguntas Frecuentes!</h1>
          <h2>Formulario Para subir preguntas frecuentes</h2>
      <legend>Datos de la Pregunta</legend>
          <div class="form-group">
            <label for="formGroupExampleInput">Ingrese la Pregunta</label>
            <input
              v-model="nameProducto"
              type="text"
              class="form-control"
              placeholder="¿ejemplo pregunta?"
            />
          </div>          
        <h5>Aquí escriba la Repuesta de su Pregunta</h5>
          <div class="form-group">
            <label for="formGroupExampleInput">responda la pregunta</label>
            <textarea 
            v-model="nombre" 
            type="text" 
            class="form-control" 
            cols="60" 
            rows="6">Escriba el proceso para solucionar su pregunta</textarea>
          </div>

          <h6>Seleccione el Área al que pertenece </h6>
          <select
            v-model="area"
            type="text"
            name="area"
            class="form-control"
            placeholder="Seleccione el Área"
        ><option value=""></option>
          <option value="sistemas">Sistemas</option>
          <option value="administrativo">Administrativo</option>
          <option value="contabilidad">Contabilidad</option>
          <option value="rechumanos">Recursos Humanos</option>
        </select>
    
          <div>
            <label>Fecha Del Pedido</label>
                  <input type="DATE" v-model="fecha">
          </div>
          <button class="btn btn-primary" @click="addPedido" id="btn-alert" onclick="alert('Tu Pregunta Fue Agregada Correctamente')">
            Añadir
          </button>
        </div>
      </div>
    </div>
  </template>
  <script>
  /*eslint-disable*/
  import {ref} from 'vue'
  import axios from 'axios'
  // import {useStore} from 'vuex'
  // import {useRouter} from 'vue-router'
  export default {
    setup(){
      // const store = useStore()
      // const router = useRouter()
      const area = ref("")
      const nameProducto = ref("")
      const TipoMadera = ref("")
      const MedioPago = ref("")
      const TipoTela = ref("")
      const nombre = ref("")
      const tipoDoc= ref("")
      const documento = ref("")
      const direccion = ref("")
      const fecha = ref("")
  
      //const aporte = ref("")
  
      function addPedido(){
        if(nameProducto.value != ''){
         const pedido = {
            area:area.value,
            nameProducto:nameProducto.value,
            TipoMadera:TipoMadera.value,
            MedioPago:MedioPago.value,
            TipoTela:TipoTela.value,
            nombre:nombre.value,
            tipoDoc:tipoDoc.value,
            documento:documento.value,
            direccion:direccion.value,
            fecha:fecha.value,
  
            /*aporte:aporte.value*/
           }        
          /*    store.dispatch("addPersona", persona);        
          router.push('/print') */
          axios.post('https://preguntasfrecuentesreincar-default-rtdb.firebaseio.com/pedido.json',pedido).then(res=>console.log(res)).catch(error => console.log(error))
        }
      }
      return{area, nameProducto, nombre, tipoDoc, documento, direccion ,fecha, addPedido}
    }
    /*data() {
       return {
         nombre: "",
         email: "",
         aporte: "",
       };
     },
     methods: {
       addPersona() {
         if (this.nombre != "" && this.email != "") {
           const persona = {
             nombre: this.nombre,
             email: this.email,
             aporte: this.aporte,
           };
           this.$store.dispatch("addPersona", persona);
           this.$router.push('/print')
         }
       },
     },*/
  };
  </script>
  <style scoped>
  h1{
      font-family: arial black;
      text-align: center;
      cursor:default;
      color:rgb(150, 128, 110);
  }
  h2{
      font-family:Arial, Helvetica, sans-serif;
      font-size:36px;
      color: black;
      text-align: center;
  }
  h6{
      color:rgb(102, 102, 102);
      text-align: center;
      margin-left: 100px;
      margin-right: 100px;
  }
  legend{
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
  }
  p{
      text-align: center;
  }
  input{
      border-radius: 10px;
      border-style: none;
      font-family: "Poppins", sans-serif;
      margin:10px;
      padding: 10px;
  }
  
  .card {
      width: auto;
      height: 100%;
      margin:auto;
      background-color: rgba(218, 182, 136, 0.877);
      border-style: none;
      border-radius: 30px;
      border-style: solid;
      border-width: 2px;
      justify-content: center;
  }
  </style>