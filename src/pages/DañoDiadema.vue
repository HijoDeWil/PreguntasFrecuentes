<template>
    <div>
        <h1><strong>¿Que hago en caso de presentar problemas con la Diadema?</strong></h1>
        <div class="img-gafas">
      <!--   <center><img src="../assets/gafas.png"></center> -->
        </div>
        <div class="container">
            <h1></h1>
            <li><a>Los fallos por la diadema pueden ser varios:</a></li>
            <li><a><strong>1.Falla en el puerto USB:</strong> Si este es el caso
            te recomiendo desconectar la diadema del puerto en el que se encuentra
            y hacer el cambio a otro preferiblemente el que se encuentre al lado. 
            Si con esto no se soluciona el problema, prueba con las siguientes 
            soluciones.</a></li><br/>
        
        <center><img src="../assets/PuertosUsb.jpeg" width="300" height="400"></center>
        <center><h6>estos son los puertos en los que puedes probar conectar la diadema</h6></center>
    </div>
    <div class="container">
            <h1></h1>
            <li><a><strong>2.Falla por la configuración del EyeBeam:</strong> Si este es el caso te 
            pedimos prestar total atención al siguiente video, el cual explica los pasos que tienes
            que seguir para ver si tienes una correcta configuración de tu diadema. "Asegúrate de tener
            seleccionada tu diadema como (speaker device y microphone device) "</a></li><br/>
        
        <center><video src="../assets/ConfiguracionDiadema.mp4" controls></video></center>
        <center><h6>video de muestra para configuración de diadema</h6></center>
        <br/> <br/> <br/> <br/> <br/> <br/>
    </div>
    </div>
</template>
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
h6{
    color:rgb(99, 102, 102);
    font-family: 'Times New Roman', Times, serif;
}
video{
    max-width: 580px;
    max-height: 580px;
    display:block;
    justify-self: center;
    margin:auto;
    border-style: solid;
}
</style>