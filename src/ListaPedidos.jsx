//Componente que  maneja estado

import { useState, useEffect } from "react";
import PedidoCard from "./components/PedidoCard";
import PedidoForm from "./components/PedidoForm";


function ListaPedidos() {
  const [pedidos, setPedidos] = useState(() => {
    const guardados = localStorage.getItem("pedidos");
    return guardados ? JSON.parse(guardados) : [];
  });

  const [cliente, setCliente] = useState("");
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState(1);


  useEffect(() => {
    localStorage.setItem(
      "pedidos",
      JSON.stringify(pedidos)
    );
  }, [pedidos]);

  function agregarPedido() {
    const nuevoPedido = {
      id: Date.now(),
      cliente,
      producto,
      cantidad,
    };

    setPedidos(prev => [...prev, nuevoPedido]);

    setCliente("");
    setProducto("");
    setCantidad(1);
  }

  function aumentarCantidad(id) {
    setPedidos(prev =>
      prev.map(pedido =>
        pedido.id === id
          ? { ...pedido, cantidad: pedido.cantidad + 1 }
          : pedido
      )
    );
  }

  function eliminarPedido(id) {
    setPedidos(prev =>
      prev.filter(pedido => pedido.id !== id)
    );
  }

  function editarCantidad(id, nuevaCantidad) {
    setPedidos(prev =>
      prev.map(pedido =>
        pedido.id === id
          ? { ...pedido, cantidad: nuevaCantidad }
          : pedido
      )
    );
  }
  

  return (
    <div>
      <h2>Pedidos</h2>

      <PedidoForm
        cliente={cliente}
        setCliente={setCliente}
        producto={producto}
        setProducto={setProducto}
        cantidad={cantidad}
        setCantidad={setCantidad}
        onAgregar={agregarPedido}
      />

      {pedidos.map(pedido => (
        <PedidoCard
          key={pedido.id}
          cliente={pedido.cliente}
          producto={pedido.producto}
          cantidad={pedido.cantidad}
          onAumentar={() => aumentarCantidad(pedido.id)}
          onEliminar={() => eliminarPedido(pedido.id)}
          onEditarCantidad={(valor) =>
            editarCantidad(pedido.id, valor)}
            
        />
      
      ))}


    </div>
  );
}

export default ListaPedidos;








