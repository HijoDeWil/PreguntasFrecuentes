import LoginUno from './components/LoginUno.vue'

import PrintData from './pages/PrintData.vue'
import Pedidos from './pages/RegistroPedido.vue'
import PedidoGet from './pages/ImprimirPedido.vue'
import InfoPedido from './pages/InfoPedido.vue'
import AppVue from './App.vue'


export const routes = [
    {path:'/LoginUno',component:LoginUno},
    {path:'/print', component:PrintData},
    {path:'/log', component:LoginUno},
    {path:'/PedidoGet', component:PedidoGet},
    {path:'/Pedidos',component:Pedidos},
    {path:'/InfoPedido/:index',component:InfoPedido},
    {path:'/AppVue',component:AppVue}
]