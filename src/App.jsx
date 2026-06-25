import './App.css';

import Header  from './components/Header';   //Trae la función que exportamos en Header.jsx
import Footer  from './components/Footer';
import PedidoCard  from './components/PedidoCard';
import ListaPedidos from './ListaPedidos';



function App() {
  
  return (
    <div>
      <h1>Dashboard de Pedidos</h1>
      <ListaPedidos />
    </div>
  );
}


export default App;