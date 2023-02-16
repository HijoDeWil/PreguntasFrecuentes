<template>
    <div>
      <div class="card" style="width: 35rem">
        <div class="card-body">
          <h5 class="card-title">¡Registrar Nuevo Usuario!</h5>
  
          <div class="form-group">
            <label for="formGroupExampleInput">Nombre</label>
            <input
              v-model="nombreusuario"
              type="text"
              class="form-control"
              placeholder="Nombre de Usuario"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Contraseña</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="Contraseña"
            />
          </div>
          <label>Seleccione el área al que pertenece</label>
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
          <!-- <div class="form-group">
            <label for="formGroupExampleInput2">Aporta</label>
            <input
              v-model="aporte"
              type="text"
              class="form-control"
              placeholder="cer-ve-za ?"
            /> 
          </div>-->
          <button class="btn btn-primary" @click="addPersona" onclick="alert('¡EL USUARIO FUE AGREGADO EXITOSAMENTE!')">
            A&ntilde;adir
          </button>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  /*eslint-disable*/
  import {ref} from 'vue'
  import axios from 'axios'
  //import {useStore} from 'vuex'
  //import {useRouter} from 'vue-router'
  export default {
    setup(){
      //const store = useStore()
      //const router = useRouter()
      const nombreusuario = ref("")
      const password = ref("")
      const area = ref("")
      //const aporte = ref("")
      function addPersona(){
        if(nombreusuario.value != '' && password.value != "" && area.value !=""){
          const persona = {
            nombreusuario:nombreusuario.value,
            password:password.value,
            area:area.value
            /*aporte:aporte.value*/
          }
          /*    store.dispatch("addPersona", persona);        
          router.push('/print') */
          axios.post('https://preguntasfrecuentesreincar-default-rtdb.firebaseio.com/persona.json',persona).then(res=>console.log(res)).catch(error => console.log(error))
        }
      }
      return{nombreusuario, password , area , addPersona}
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
  .main[data-v-04b5aa7d] {
      background: rgba(178, 135, 98, 0.269);
      position: absolute;
      top: 20%;
      left: 30%;
      width: 30%;
      text-align: center;
      padding: 70px;
      border-radius: 3rem
  rem
  ;
      box-shadow: 0px 0px 8px -5px #000000;
      padding-top: 3%;
      padding-bottom: 5%;
      font-family: "Poppins", sans-serif;
      display: flex;
  }
  .card-body{
    padding: 40px;
    margin-top: 20px;
    align-content: center;
  }
  div{
    align-content: center;
    display:fixed;
    left:400px;
    border-radius: 30px;  
  }
  .card{
    padding: 10px;
    align-content: center;
    width: 300px;
    background-color: rgb(12, 43, 100);
    border-radius:0;
  }
  h3{
    text-align: center;
    color:white;
    
  }
  label{
    text-align: center;
    color:#fff;
  }
  div{
    margin-top:70px;
    margin-left: 30px;

  }
  .btn-primary {
      color: #fff;
      background-color: #1f9eaf;
      border-color: #0a9975;
      margin-top: 10px;
  }
  .form-control {
      display: block;
      width: 100%;
      height: calc(1.5em + 0.75rem + 2px);
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius:0;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      font-family: "Poppins", sans-serif;
  }
  h5{
    font-family: arial black;
    font-size: 40px;
    color:rgb(255, 255, 255);
    text-align: center;
  }
  </style>