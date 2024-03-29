import pqrs from './components/Header.vue'
import LoginUno from './components/LoginUno.vue'

//pages
import BenGafas from './pages/BenGafas.vue'
import CertificadoLaboral from './pages/CertificadoLaboral.vue'
import PermisoCalamidad from './pages/PermisoCalamidad.vue'
import ConexionRed from './pages/ConexionRed.vue'
import ProblemaEncendido from './pages/ProblemaEncendido.vue'
import CargarPagina from './pages/CargarPagina.vue'
import FormData from './pages/FormData.vue'
import Details from './pages/Details.vue'
import PrintData from './pages/PrintData.vue'
import Pedidos from './pages/RegistroPedido.vue'
import InfoDB from './pages/InfoPedido.vue'
import RetirarCesantias from './pages/RetirarCesantias.vue'
import MisBeneficios from './pages/MisBeneficios.vue'
import OrganigramaR from './pages/OrganigramaR.vue'
import SeguridadDeLaInformacion from './pages/SeguridadDeLaInformacion.vue'
import DañoDiadema from './pages/DañoDiadema.vue'
import DirPersonalApoyo from './pages/DirPersonalApoyo.vue'
import PreguntasQuejasR from './pages/PreguntasQuejasR.vue'
import InfoPqrs from './pages/InfoPqrs.vue'
import UserLocked from './pages/UserLocked.vue'
import PcLento from './pages/PcLento.vue'
import ErrorSyscorp from './pages/ErrorSyscorp.vue'
import BarraTareas from './pages/BarraTareas.vue'
//fin pages
/* import PrintData from './pages/PrintData.vue'
import Pedidos from './pages/RegistroPedido.vue'
import PedidoGet from './databse/ImprimirPedido.vue'
import InfoPedido from './pages/InfoPedido.vue' */
import AppVue from './App.vue'


export const routes = [
    {path:'/LoginUno',component:LoginUno},
    {path:'/pqrs',component:pqrs},
    //pages
    {path:'/BenGafas',component:BenGafas},
    {path:'/CertificadoLaboral',component:CertificadoLaboral},
    {path:'/PermisoCalamidad',component:PermisoCalamidad},
    {path:'/ConexionRed',component:ConexionRed},
    {path:'/ProblemaEncendido',component:ProblemaEncendido},
    {path:'/CargarPagina',component:CargarPagina},
    {path:'/FormData',component:FormData},
    {path:'/details',component:Details},
    {path:'/PrintData',component:PrintData},
    {path:'/Pedidos',component:Pedidos},
    {path:'/InfoDB/:index',component:InfoDB},
    {path:'/RetirarCesantias',component:RetirarCesantias},
    {path:'/MisBeneficios',component:MisBeneficios},
    {path:'/OrganigramaR',component: OrganigramaR},
    {path:'/SeguridadDeLaInformacion',component:SeguridadDeLaInformacion},
    {path:'/DañoDiadema',component:DañoDiadema},
    {path:'/DirPersonalApoyo',component:DirPersonalApoyo},
    {path:'/PreguntasQuejasR',component:PreguntasQuejasR},
    {path:'/InfoPqrs',component:InfoPqrs},
    {path:'/UserLocked',component:UserLocked},
    {path:'/PcLento',component:PcLento},
    {path:'/ErrorSyscorp',component:ErrorSyscorp},
    {path:'/BarraTareas',component:BarraTareas},
    //fin pages
/*     {path:'/print', component:PrintData},
    {path:'/log', component:LoginUno},
    {path:'/PedidoGet', component:PedidoGet},
    {path:'/Pedidos',component:Pedidos},
    {path:'/InfoPedido/:index',component:InfoPedido}, */
    {path:'/AppVue',component:AppVue}
]