# 📦 Pedidos App React

Aplicación desarrollada en React para la gestión de pedidos.  
Permite crear, editar y eliminar pedidos de forma dinámica, con persistencia en el navegador mediante localStorage.

---

## 🚀 Funcionalidades

- ➕ Agregar pedidos
- ✏️ Editar cantidad de pedidos
- ❌ Eliminar pedidos
- 💾 Persistencia de datos con localStorage
- 🔁 Actualización automática de la interfaz con React

---

## 🧠 Conceptos aplicados

Este proyecto fue creado con el objetivo de practicar:

- useState
- useEffect
- Props
- Manejo de eventos
- Renderizado de listas con map()
- Comunicación entre componentes (padre → hijo y hijo → padre)

---

## 🧩 Tecnologías

- React
- JavaScript (ES6+)
- CSS básico
- Vite

---

## 📸 Vista previa

_

---

## 📂 Estructura del proyecto
src/
├── components/
│ ├── PedidoCard.jsx
│ ├── PedidoForm.jsx
├── ListaPedidos.jsx
├── App.jsx


---

## 💡 Aprendizaje principal

Este proyecto me permitió entender cómo fluye la información en React:

- El estado vive en el componente padre
- Los datos se pasan mediante props
- Los eventos suben del hijo al padre
- useEffect permite sincronizar datos con el navegador

---
## Avances

### Dashboard de Pedidos

Funcionalidades implementadas hasta el momento:

- Estructura del proyecto con componentes reutilizables.
- Lista de pedidos.
- Formulario controlado con React.
- Manejo de estado mediante `useState`.
- Inputs controlados (`value` y `onChange`).
- Manejo del envío del formulario con `onSubmit` y `preventDefault()`.

### Próximos pasos

- Agregar nuevos pedidos dinámicamente.
- Limpiar el formulario después del envío.
- Consumir pedidos desde una API utilizando `useEffect` y `fetch`.

## 📌 Autor

Proyecto realizado como parte de aprendizaje de React.