<template>
  <div>
    <center><h1><strong>Preguntas Quejas Reclamos y Sugerencias</strong></h1></center>
    <li v-for="(agregarPqrs, i) in addPqrs" :key="i" class="nav-item">{{agregarPqrs.pqrs}} <h6>{{agregarPqrs.nombre}}</h6>  "{{ agregarPqrs.fecha }}" / {{agregarPqrs.area}}
    </li>
  </div>
</template>
<script>
import {ref} from 'vue'
import axios from 'axios'
export default {
  setup(){
  const addPqrs = ref([])
  axios.get('https://preguntasfrecuentesreincar-default-rtdb.firebaseio.com/agregarPqrs.json')
  .then(res =>{
    console.log(res)
    for(const id in res.data){
      addPqrs.value.push({
        area:res.data[id].area,
        nombre:res.data[id].nombre,
        pqrs:res.data[id].pqrs,
        fecha:res.data[id].fecha
      })
    }
  })
  .catch(error=>console.log(error))
  return{addPqrs}
  }
}
</script>
<style scoped>
li a{
  font-family:'Times New Roman', Times, serif;
  font-size: 20px;
  color:#000000;
  margin-top:20px;
  margin-bottom: 2px;
  padding:20px;
}
div{
  padding:30px;
  margin-left: 20px;

}
h6{
  color:#1cbfe7;
}
li.nav-item{
  margin-top: 10px;
}
</style>