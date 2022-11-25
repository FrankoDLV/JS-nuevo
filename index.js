class productos {
    constructor(nombre, precio, stock, disponibilidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
      this.disponibilidad = disponibilidad;
    }
    cambiarStock() {
      this.stock = --this.stock;
    }
    configurarStock(stock) {
      this.stock = stock;
    }
  }
  
  const celular1 = new productos("Iphone 14", 1200, 200, true);
  const celular2 = new productos("Iphone 13 Pro Max", 1000, 120, true);
  const celular3 = new productos("Iphone 13", 900, 150, true);
  const celular4 = new productos("Iphone 11 Pro Max", 700, 190, true);
  const MacBook = new productos("Mac Book air", 1300, 100, true);
  const MacBook2 = new productos("Mac Book Pro", 1500, 100, true);
  const Ipad1 = new productos("Ipad 9na", 400, 120, true);
  const Auric = new productos("Airpods", 100, 300, true);
  
  let total = 0;
  const carrito = [];
  let barrera = true;
  let seguirComprando = true;
  let regalos = Auric;
  
  function keepShopping() {
    if (seguirComprando === false) {
      alert(`El total de tu compra es de $${total}.`);
      alert(`Gracias por tu compra.`);
  
      barrera = false;
    }
  }
  
  function alerta(productos, total, carrito) {
    alert(
      `Compraste: ${productos.nombre} x $${productos.precio}. El total de tu compra es de: $${total}. 
            
            
      Lista de productos comprados: ${carrito}`
    );
  }
  
  while (barrera === true) {
    let producto = parseInt(
      prompt(`Ingresa el producto que vas a comprar:
        1. Iphone 14
        2. Iphone 13 Pro max
        3. Iphone 13
        4. Iphone 11 pro max
        5. Mac book Air
        6. Mac Book Pro
        7. Ipad 9na`)
    );
    if (producto === 1) {
      carrito.push(productos.nombre);
      total = total + celular1.precio;
  
      alerta(celular1, total, carrito);
  
      seguirComprando = confirm("Queres seguir comprando?");
      keepShopping();
    } else if (producto === 2) {
      carrito.push(celular2.nombre);
      total = total + celular2.precio;
  
      alerta(celular2, total, carrito);
  
      seguirComprando = confirm("Queres seguir comprando?");
      keepShopping();
    } else if (producto === 3) {
      carrito.push(celular3.nombre);
      total = total + celular3.precio;
  
      alerta(celular3, total, carrito);
  
      seguirComprando = confirm("Queres seguir comprando?");
      keepShopping();
    } else if (producto === 4) {
      carrito.push(celular3.nombre);
      total = total + celular4.precio;
  
      alerta(celular4, total, carrito);
  
      seguirComprando = confirm("Queres seguir comprando?");
      keepShopping();
    } else if (producto === 5) {
      carrito.push(MacBook.nombre);
      total = total + MacBook.precio;
  
      alerta(MacBook, total, carrito);
  
      seguirComprando = confirm("Queres seguir comprando?");
      keepShopping();
    } else if (producto === 6) {
      carrito.push(MacBook2.nombre);
      total = total + MacBook2.precio;
  
      alerta(MacBook2, total, carrito);
  
      seguirComprando = confirm("Queres seguir comprando?");
      keepShopping();
    } else if (producto === 7) {
      carrito.push(Ipad1.nombre), carrito.push(Auric.nombre);
      alert("Con esta compra te llevas auriculares de regalo !!!");
      total = total + Ipad1.precio;
      alerta(Ipad1, total, carrito);
      seguirComprando = confirm("Queres seguir comprando?");
      keepShopping();
    }
  }
  