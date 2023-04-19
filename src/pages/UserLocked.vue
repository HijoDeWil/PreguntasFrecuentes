<template>
    <div>
        <h1><strong>
            ¿Porque Mi Usuario Sale Bloqueado?
        </strong></h1>

        <div class="img-gafas">
            <center><img src="../assets/cuentabloqueada.jpg"></center> 
        </div>

        <div class="container">
           
            <li><a><strong>Intentos erroneos con la contraseña:</strong> Si este es el caso
                quiere decir que hiciste varios intentos fallidos al momento de colocar la 
                contraseña de tu computador.</a></li><br/>
                <a><strong>ESPERA 2 MINUTOS PARA COLOCAR TU CONTRASEÑA NUEVAMENTE</strong></a><br/>
                <a><strong>Si el problema persiste comunícate con soporte técnico EXT-106</strong></a>
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