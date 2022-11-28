class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

const producto1 = new Producto(
  1,
  "Iphone 14 Pro Max",
  807.521,
  "https://http2.mlstatic.com/D_NQ_NP_743624-MLA51873628788_102022-V.jpg"
);
const producto2 = new Producto(
  2,
  "Iphone 14 Pro",
  552.425,
  "https://media.ambito.com/p/fd43c679427709642123f8e17cbc4ff6/adjuntos/239/imagenes/040/135/0040135070/730x0/smart/iphone-14-pro-y-14-pro-max-2jpg.jpg"
);
const producto3 = new Producto(
  3,
  "Iphone 14",
  449.999,
  "https://media.revistagq.com/photos/6320d611504ebd882c04f41b/master/w_1600%2Cc_limit/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo.jpg"
);
const producto4 = new Producto(
  4,
  "Iphone 13 Pro Max",
  712.861,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLb1f5Snt36m4OTs7TmiLE9_1JmQW5humX9V32FE26d45Vd6-bQZRkOZ_7XEmuiSJTeUI&usqp=CAU"
);
const producto5 = new Producto(
  5,
  "Iphone 13 Pro",
  449.799,
  "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_Colors_09142021_big.jpg.large.jpg"
);
const producto6 = new Producto(
  6,
  "Iphone 13 mini",
  389.999,
  "https://http2.mlstatic.com/D_NQ_NP_932957-MLA47782545553_102021-O.jpg"
);
const producto7 = new Producto(
  7,
  "Iphone 12 Pro Max",
  429.999,
  "https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.8.png"
);
const producto8 = new Producto(
  18,
  "Iphone 12 Pro",
  439.992,
  "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-graphite-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202842000"
);
const producto9 = new Producto(
  9,
  "Iphone 12",
  284.999,
  "https://www.mylshop.com.ar/wp-content/uploads/2022/03/apple-iphone-12-128gb-verde.jpg"
);
const producto10 = new Producto(
  10,
  "Iphone 11 Pro Max",
  384.999,
  "https://exitocol.vtexassets.com/arquivos/ids/5543384/celular-iphone-11-pro-max-blanco-256gb.jpg?v=637461829686130000"
);
const producto11 = new Producto(
  10,
  "Iphone 11 Pro",
  184.999,
  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-11-pro-gold-2019?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1611101491000"
);
const producto12 = new Producto(
  10,
  "Iphone 11",
  154.999,
  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone11-yellow-2019?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1611169089000"
);

const productos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9,
  producto10,
  producto11,
  producto12,
];

const divProductos = document.getElementById("divProductos");

productos.forEach((producto) => {
  divProductos.innerHTML += ` <div class="cardIphone">
 <h1>${producto.nombre}-$${producto.precio}</h1>
 <img src="${producto.imagen}" />
 <a href="#" class="btn-primary" id=${producto.id}> Comprar</a>
</div>`;
});

//carrito

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const btnAgregar = document.querySelectorAll(".btn-primary");

btnAgregar.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();
    const productoSeleccionado = productos.find(
      (prod) => prod.id === parseInt(btn.id)
    );
    const productoCarrito = { ...productoSeleccionado, cantidad: 1 };
    console.log(productoSeleccionado, productoCarrito);

    const indexCarrito = carrito.findIndex(
      (prod) => prod.id === productoCarrito.id
    );
    if (indexCarrito === -1) {
      carrito.push(productoCarrito);
    } else {
      carrito[indexCarrito].cantidad++;
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };
});

const botonFinalizar = document.querySelector("#finalizar");

botonFinalizar.onclick = () => {
  const totalCompra = carrito
    .map((prod) => prod.precio * prod.cantidad)
    .reduce((elem1, elem2) => elem1 + elem2);
  console.log(totalCompra);
};
