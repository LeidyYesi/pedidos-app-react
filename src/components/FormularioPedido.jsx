import { useState } from "react";



function FormularioPedido() {
    const [cliente, setCliente] = useState("");
    const [producto, setProducto] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [pedidos, setPedidos] = useState([]);    //"La lista de pedidos debería ser un estado que empieza con un array vacío."

    function agregarPedido(event) {          //crea el pedido, lo guarda y limpia el formulario
        event.preventDefault();

        const nuevoPedido = { cliente, producto, cantidad }

        setPedidos(prev => [...prev, nuevoPedido]);
        //setPedidos([...pedidos, nuevoPedido]);        tambien funcionaria pero prev es una práctica más segura.
        setCliente("");
        setProducto("");
        setCantidad(1);
    }




    return (
        <form onSubmit={agregarPedido}>
            <div>
                {pedidos.map((pedido, index) => (
                    <PedidoCard
                        key={index}
                        cliente={pedido.cliente}
                        producto={pedido.producto}
                        cantidad={pedido.cantidad}
                    />

                ))}
            </div>

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