import Header from './components/Header.vue'
import LoginUno from './components/LoginUno.vue'

//pages
import BenGafas from './pages/BenGafas.vue'
import CertificadoLaboral from './pages/CertificadoLaboral.vue'
import PermisoCalamidad from './pages/PermisoCalamidad.vue'
import ConexionRed from './pages/ConexionRed.vue'
import ProblemaEncendido from './pages/ProblemaEncendido.vue'
import CargarPagina from './pages/CargarPagina.vue'
//fin pages
/* import PrintData from './pages/PrintData.vue'
import Pedidos from './pages/RegistroPedido.vue'
import PedidoGet from './databse/ImprimirPedido.vue'
import InfoPedido from './pages/InfoPedido.vue' */
import AppVue from './App.vue'


export const routes = [
    {path:'/LoginUno',component:LoginUno},
    {path:'/Header',component:Header},
    //pages
    {path:'/BenGafas',component:BenGafas},
    {path:'/CertificadoLaboral',component:CertificadoLaboral},
    {path:'/PermisoCalamidad',component:PermisoCalamidad},
    {path:'/ConexionRed',component:ConexionRed},
    {path:'/ProblemaEncendido',component:ProblemaEncendido},
    {path:'/CargarPagina',component:CargarPagina},
    //fin pages
/*     {path:'/print', component:PrintData},
    {path:'/log', component:LoginUno},
    {path:'/PedidoGet', component:PedidoGet},
    {path:'/Pedidos',component:Pedidos},
    {path:'/InfoPedido/:index',component:InfoPedido}, */
    {path:'/AppVue',component:AppVue}
]