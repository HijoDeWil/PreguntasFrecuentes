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
            rows="10">Escriba el proceso para solucionar su pregunta</textarea>
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
          <div>
            <label for="formGroupExampleInput">Agregar Imagen Alusiva</label>
            <input class="form-control" type="file" name="image">
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
      const image = ref("")
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
            image:image.value,
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
      return{area, nameProducto, nombre, tipoDoc, documento, direccion ,fecha, image , addPedido}
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
      color:rgb(255, 255, 255);
  }
  h2{
      font-family:Arial, Helvetica, sans-serif;
      font-size:36px;
      color: rgb(255, 255, 255);
      text-align: center;
  }
  h6 {
      color:rgb(255, 255, 255);
      text-align: center;
      margin-left: 100px;
      margin-right: 100px;
  }
  h5{
    color:white;
  }
  legend{
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
      color:white;
  }
  label{
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
      color:white;
  }
  p{
      text-align: center;
      color:white;
  }
  input{
      border-radius: 10px;
      border-style: none;
      font-family: "Poppins", sans-serif;
      margin:10px;
      padding: 10px;
      color:rgb(136, 129, 129);
  }
  
  .card {
      height: auto;
      margin:auto;
      background-color: rgb(12, 43, 100);
      border-style: none;
      border-radius:0;
      border-style: solid;
      border-width: 2px;
      border-color:black;
      justify-content: center;
  }
  .btn-primary{
    background-color: rgb(0, 238, 198);
    color:black;
    font-size:20px;
  }
  div.card-body{
    width:auto;
    margin-top: 20px;
  }
  div{
    margin-top:30px
  }
  </style>