//Componente que muestra datos

function PedidoCard({
  cliente,
  producto,
  cantidad,
  onAumentar,
  onEliminar,
  onEditarCantidad
}) {
  return (
    <div>
      <p>{cliente} pidió {cantidad} {producto}</p>

      <button onClick={onAumentar}>
        +1
      </button>

      <button onClick={onEliminar}>
        Eliminar
      </button>

      <input
        type="number"
        value={cantidad}
        onChange={(e) => {
          console.log("Nuevo valor:", e.target.value);
          onEditarCantidad(Number(e.target.value));
        }}
      />




    </div>
  );
}

export default PedidoCard;