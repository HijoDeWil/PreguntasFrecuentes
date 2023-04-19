<template>
    <div>
        <h1><strong>
            ¿Porque Mi PC está lento?
        </strong></h1>

        <div class="img-gafas">
            <center><img src="../assets/pclento.jpeg"></center> 
        </div>

        <div class="container">
           
            <li><a><strong>1.PC con poca memoria ram:</strong>Si sientes que tu pc se 
                    pone lento cuando tienes abiertos 2 o mas programas es probable que la 
                    causa sea poca ram instalada en tu equipo.</a></li><br/>
                <a><strong>COMUNÍCATE CON EL DEPARTAMENTO DE SISTEMAS EXT-106 PARA SOLUCIONAR
                    ESTE PROBLEMA LO MAS PRONTO POSIBLE
                </strong></a><br/>
        </div>
        <div class="container">
           
            <li><a><strong>2.PC con Disco mecánico obsoleto:</strong>Si te das cuenta que
            tu PC se demora muchísimo tiempo en encender y cuando lo hace se tarda una eternidad
            en abrir cada programa, es posible que sea por el tipo de almacenamiento interno de tu equipo,
            en este caso es necesario instalar una unidad de estado sólido para que tu pc tenga un 
            mejor rendimiento.</a></li><br/>

            <a><strong>COMUNÍCATE CON EL DEPARTAMENTO DE SISTEMAS EXT-106 PARA SOLUCIONAR
                   ESTE PROBLEMA LO MAS PRONTO POSIBLE
               </strong></a><br/>

            <li><a><strong>3.MUCHOS ARCHIVOS DESCARGADOS (JURIDICA Y ADMINISTRATIVOS):</strong>
            Es necesario recordar que todos los archivos que se manejen o que tengan que 
            ser utilizados, deben ser guardados en la respectiva carpeta (Dentro del 
            servidor 192.168.2.251), no debe haber ningun archivo en la carpeta
            "descargas" ya que los mismos quitan espacio de almacenamiento del disco y por consiguiente el 
            rendimiento de este se verá gravemente afectado.</a></li><br/>

            <a><strong>TE RECOMENDAMOS PASAR TODOS LOS ARCHIVOS QUE TENGAS EN LA CARPETA 
            "descargas" A TU CARPETA DENTRO DEL SERVIDOR
               </strong></a><br/>

              <br/><br/><br/><br/>
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