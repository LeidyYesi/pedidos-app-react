//Componente que crea datos

function PedidoForm({
  cliente,
  setCliente,
  producto,
  setProducto,
  cantidad,
  setCantidad,
  onAgregar
}) {
  return (
    <div className="form">
      <input
        placeholder="Cliente"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
      />

      <input
        placeholder="Producto"
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
      />

      <input
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        onChange={(e) => setCantidad(Number(e.target.value))}
      />

      <button onClick={onAgregar}>
        Agregar pedido
      </button>

      
    </div>
  );
}

export default PedidoForm;