const lista_productos = [
  {
    titulo: "producto 1",
    precio: 200,
    color: "",
    medidas: "",
    descripcion: "",
    imagen: ""
  },
  {
    titulo: "producto 2",
    precio: 150,
    color: "",
    medidas: "",
    descripcion: "",
    imagen: ""
  },
  {
    titulo: "producto 3",
    precio: 400,
    color: "",
    medidas: "",
    descripcion: "",
    imagen: ""
  }
]

const urlParams = new URLSearchParams(window.location.search)
const id_producto = parseInt(urlParams.get('producto'))

let html

if(isNaN(id_producto) || (0 >= id_producto || id_producto > lista_productos.length)) {
  html = `
    <article>
      <h1>No hay un producto con ese indice</h1>
      <p>:/</p>
    </article>
  `
} else {
  let producto = lista_productos[id_producto-1]

  html = `
    <article>
      <h1 class="titulo">${producto.titulo}</h1>
      <img src="" alt=${producto.titulo} class="img-producto">
      <p class="descripcion">${producto.descripcion}</p>
      <strong class="precio">Precio: $${producto.precio}</strong>
    </article>
  `
}

const detalleHtml = document.querySelector('main')
detalleHtml.insertAdjacentHTML('beforeend', html)