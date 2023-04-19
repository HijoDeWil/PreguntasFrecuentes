<template>
  <div class="main">
    <form v-on:submit.prevent="login">
      <h1>¡Inicio de Sesión!</h1>

      <h6>Nombre de Usuario</h6>
  <input
  v-model="nombreusuario"
    type="text"
    name="username"
    id="username"
    placeholder="Nombre de usuario"
    class="form-control"
    :style="input"
  />
  <br />
  <h6>Contraseña</h6>
  <input
  v-model="password"
    type="password"
    name="password"
    id="password"
    placeholder="Contraseña"
    class="form-control"
    :style="input"
  />
  <br />
  <input @click="buscarUsuario" 
    type="submit"
    value="Iniciar Sesión"
    class="button"
    id="done"
   :style="inputStyle"
  />
</form>
</div>

</template>
<script>
import{ref} from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';

export default {
name: "LoginUno",
//Custom style for main and input for make the page responsive:
props: {
  mainStyle: String,
  inputStyle: String,
},
data(){
  return{
    //valor: this.$store.state.mostrar,
    usuarios: ref([]),
    nombreusuario: ref(""),
    password: ref(""),
    router: useRouter(),
    nombre: ref("Marcela"),
    contra: ref("789")
  }
},
methods:{
buscarUsuario(){
axios.get('https://preguntasfrecuentesreincar-default-rtdb.firebaseio.com/persona.json')
.then(res=>{console.log(res);
  console.log(this.nombreusuario,'usuario')
  console.log(this.password,'usuario')

  for (const id in res.data){
    if(res.data[id].nombreusuario===this.nombreusuario && res.data[id].password ===this.password){
      console.log('ingreso')
      this.usuarios.push({
        id:id,
        nombre: res.data[id].nombre,
        password: res.data[id].password
      })
    }
  }
if(this.nombre===this.nombreusuario && this.contra ===this.password){
  this.router.push('/pedidos'); 
this.$store.state.mostrar = true
this.$store.state.login = false

}else if(this.usuarios.length >= 1){
this.router.push('/pedidos'); 
this.$store.state.mostrar = true
this.$store.state.login = false
  }else{  
alert("Usuario y contraseña incorrecto")
}
this.usuarios.value=[]
})
.catch(error => console.log(error))
}
}
//return {nombreusuario,password,usuarios,buscarUsuario}
}
;
</script>

<style scoped>
/* Import Poppins font: */
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.main {
background: rgb(12, 43, 100);
position:absolute;
margin-top:35px;
left:25%;
width:auto;
text-align: center;
padding:30px;
border-radius: 0;
box-shadow: 0px 0px 8px -5px #000000;
padding-top: 3%;
padding-bottom: 5%;
font-family: "Poppins", sans-serif;
display:flex;
}

h1 {
color:rgb(255, 255, 255); 
display: flex;
font-family: Arial black;
text-align: center;
text-shadow: 2px 2px black;
font-size: 45px;
}

input {
border-radius: 0.5rem;
border: none;
padding: 10px;
text-align: center;
outline: none;
margin: 10px;
box-sizing: border-box;
font-family: "Poppins", sans-serif;
font-weight: 400;
display: flex;
}

input:hover {
box-shadow: 0px 0px 8px -5px #000000;
}

input:active {
box-shadow: 0px 0px 8px -5px #000000;
}

#done {
background: rgb(37, 168, 201);
}
#done:hover{
color:white;
background-color: rgb(91, 104, 116);
}
.button {
cursor: pointer;
user-select: none;
}

img {
height: 2.2rem;
margin: 10px;
user-select: none;
}

img:hover {
box-shadow: 0px 0px 8px -5px #000000;
cursor: pointer;
border-radius: 200rem;
}
div{
border: 1px solid #000000;
}
.button{
color: white;
}
h6{
margin-top: 20px;
font-size: 20px;
color:white;
}
</style>