<template>
    <div>
        <h1><strong>
            ¿Por qué me sale un error al intentar abrir el Syscorp?
        </strong></h1>

        <div class="img-gafas">
            <center><img src="../assets/ErrorSyscorp.jpeg"></center> 
        </div>

        <div class="container">
           
            <li><a><strong>Vulnerabilidad en la seguridad de tu equipo:</strong> Si este es el caso
                tu computador necesita ejecutar un analisis completo de todos los archivos 
                que este contiene.<br/>
                <strong>Sigue los siguientes pasos para ejecutar dicho analisis.<br/></strong></a></li><br/>
            <li><a>1. Abre la ventana principal del antivirus:</a></li>
                <div class="img-gafas">
                    <center><img src="../assets/kasperskya.png"></center> 
                    <center><h6>Imagen de muestra de la aplicación, el diseño y colores pueden variar según la versión</h6></center>
                </div>
            <li><a>2. Haz clic en el boton Analizar (scan), se abrirá la ventana "Análisis".</a></li>  
            <li><a>3. En la ventana Análisis seleccione "Analisis completo".</a></li>
            <li><a>4. En la sección Análisis completo, haga clic en el botón Ejecutar análisis.</a></li><br/>
            <a><strong>Es un proceso demorado, te pedimos paciencia.</strong></a>
            <div class="img-gafas">
                <!--<video src="aquí el video" controls></video>-->
            </div>
                <a><strong>Si el problema persiste comunícate inmediatamente con soporte técnico EXT-106</strong></a>
                <br/><br/><br/><br/><br/><br/>
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