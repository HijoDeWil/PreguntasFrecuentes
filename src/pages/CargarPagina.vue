<template>
    <div>
        <h1><strong>¿Que hago si tengo problemas al cargar Página?
        </strong></h1>
        <div class="container">
        <div class="img-gafas">
        <center><img src="../assets/conexion.png"></center>
        <video src="../assets/historial.mp4" controls></video>
        <center><img src="../assets/privada.jpg"></center>
        </div>
        <div class="text">
            <a>Como ya saben la red para los gestores es limitada. Solo pueden ingresar a ciertas páginas web ya 
                asignadas por la cartera o solicitadas por el coordinador<br/>
                <br/>
            </a>
            <a>Si necesitas una página específica tú coordinador deberá enviar un correo electrónico a sistemas
                para que habiliten la página. Para algunas carteras saldrá una imagen diferente ya que necesitan
                el capchat y aparecerá en el buscador de google.<br/></a>
            <a><strong>Borrar la caché, cookies e historial de navegación.<br/></strong></a>
            <a>Esta función solo aplica cuando ciertas páginas cargan lento, problemas al ingresar, carga el captcha. Deberás
                eliminar el historial de navegación. Cuando finalice el proceso,<strong>Reinicar el computador.</strong>
            <br/><br/></a>

            <a><strong>Si el problema persiste comunícate con soporte técnico EXT-106</strong><br/><br/></a>
            <a>En algunas páginas pocas ocaciones te saldrá la siguiente imagen,¿Como podemos solucionarlo?<br/></a>
            <a>1. Selecciona la siguiente opción: <strong>opciones avanzadas.</strong><br/></a>
            <a>2. Haz clic donde señala la flecha roja  <strong>Acceder</strong>"nombre de la página"<strong>(Sitio no seguro)</strong>
            para poder ingresar a la página web.</a>
            </div>
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
 
}
a:hover{
    background: none;
}
img{
    max-width: 580px;
    max-height: 580px;
    border-style: solid;
    border-width: 1px;
    border-color:black;
}
video{
    max-width: 580px;
    max-height: 580px;
    display:block;
    justify-self: center;
    margin:auto;
    border-style: solid;
}
.text{
    margin-left: 25px;
    margin-right: 25px;
    margin-top:25px;
}
</style>