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
          
          

         <!--  aquí van los cuadros de texto -->
        <h5>Aquí escriba la Repuesta de su Pregunta</h5>
          <div class="form-group">
            <label for="formGroupExampleInput">responda la pregunta</label>
            <textarea 
            v-model="nombre" 
            type="text" 
            class="form-control" 
            cols="50" 
            rows="4">Escriba el proceso para solucionar su pregunta</textarea>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">use este espacio para agregar otra sección de texto</label>
            <textarea 
            v-model="nombreA" 
            type="text" 
            class="form-control" 
            cols="50" 
            rows="4">Escriba el proceso para solucionar su pregunta</textarea>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">use este espacio para agregar otra sección de texto</label>
            <textarea 
            v-model="nombreB" 
            type="text" 
            class="form-control" 
            cols="50" 
            rows="4">Escriba el proceso para solucionar su pregunta</textarea>
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
            <label>Fecha</label>
                  <input type="DATE" v-model="fecha">
          </div>
          <h5>Agrega imagen(es) o video(s) alusivos</h5>
          <input type="file" id="photo" name="imagen">
          <button id="upload" onclick="uploadImage()">Upload Image</button>
          <div col-sm-4>
          <button class="btn btn-primary" @click="addPedido" id="btn-alert" onclick="alert('Tu Pregunta Fue Agregada Correctamente')">
            Añadir
          </button>
        </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import {ref} from 'vue'
  import axios from 'axios'
  export default {
    setup(){     
      const imagen = ref("")
      const area = ref("")
      const nameProducto = ref("")
      const nombreB = ref("")
      const nombreA = ref("")
      const nombre = ref("")    
      const fecha = ref("")
      function addPedido(){
        if(nameProducto.value != ''){
         const pedido = { area:area.value, nameProducto:nameProducto.value, nombre:nombre.value, nombreA:nombreA.value, nombreB:nombreB.value,fecha:fecha.value, imagen:imagen.value};
          axios.post('https://preguntasfrecuentesreincar-default-rtdb.firebaseio.com/pedido.json',pedido).then(res=>console.log(res)).catch(error => console.log(error));
        }
      }
      return{area, nameProducto, nombre, nombreA, nombreB ,fecha, imagen , addPedido}
    },mounted(){
  }}
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
      width: 700px;
      border-style: none;
      border-radius:0;
      border-style: solid;
      border-width: 1.5px;
      border-color:black;
      justify-content: center;
  }
  .btn-primary{
    background-color: rgb(0, 238, 198);
    color:black;
    font-size:20px;
  }
  div.card-body{
    width:800px;
    background-color: rgb(12, 43, 100);
    margin-top: 0;
    margin-right: 200px;
    
  }
  div{
    margin-top:30px;
    margin-right: 150px;
  }
  img.img-responsive{
    width: 100px;
    height: 100px
  }
  </style>