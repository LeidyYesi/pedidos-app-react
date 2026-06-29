import { useState } from "react";



function FormularioPedido() {
    const [cliente, setCliente] = useState("");
    const [producto, setProducto] = useState("");
    const [cantidad, setCantidad] = useState(1);

    const [pedidos, setPedidos] = useState([]);    //"La lista de pedidos debería ser un estado que empieza con un array vacío."

    function agregarPedido(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={agregarPedido}>

            <input
                value={cliente}
                onChange={(e) => setCliente(event.target.value)}
            />

            <input
                value={producto}
                onChange={(e) => setProducto(event.target.value)}
            />

            <input
                value={cantidad}
                onChange={(e) => setCantidad(event.target.value)}
            />

            <button>
                Agregar Pedido
            </button>




        </form>)
}
export default FormularioPedido;