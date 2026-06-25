function PedidoCard({
  cliente,
  producto,
  cantidad,
  onAumentar,
  onEliminar,
  onEditarCantidad
}) {
  return (
    <div className="card">
      <h3>{cliente}</h3>

      <p>{producto}</p>

      <p>Cantidad: {cantidad}</p>

      <input
        type="number"
        value={cantidad}
        onChange={(e) =>
          onEditarCantidad(Number(e.target.value))
        }
      />

      <div>
        <button onClick={onAumentar}>+1</button>
        <button onClick={onEliminar}>Eliminar</button>
      </div>
    </div>
  );
}

export default PedidoCard;