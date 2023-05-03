////***query Selector */
const contenedorServicios = document.querySelector("#contenedor-carrito");
const mostrarServicios = (data) =>{
  contenedorServicios.innerHTML = ""; //para que no se vuelva a renderizar se asigna como un vacio
  data.forEach(servicio => {
    const cardService = document.createElement('article');//contenedor de cada uno de los productos de mi tienda
    //cardService.setAttribute('id', 'tarjeta-compra');//le creo un atributo para estilos
    cardService.innerHTML =`
                            <img class ="ser-img" src="${servicio?.img}" alt="${servicio?.nombre}" style="width: 200px;margin-left: 100px" >
                            
                                <h5>Destino:${servicio?.destino.toUpperCase()} Servicio:</h5><h1>
                                <h5>${servicio?.nombre}</h5><h1>
                                <button class="btn-eliminar" style= "cursor: pointer;border: 1px solid #47cfac;padding: 23px 15px" id='${servicio.id}'>Eliminar</button>                                
                                </div>
                                `;  
    contenedorServicios.appendChild(cardService);
    }) 
const eliminar = contenedorServicios.querySelector('.btn-eliminar');
eliminar.addEventListener('click', (e) => {
eliminarDelCarrito(e.target.id)
console.log("hola");
});
  } 
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
mostrarServicios(carrito);
    ////*****total del carrito */
const total = carrito.reduce((acc,el) => acc + el.precio, 0);
const totalBuying = document.querySelector("#total-carrito");
totalBuying.innerHTML =  `TOTAL A PAGAR: $${total} `;
contenedorServicios.appendChild(totalBuying);



 //localStorage.clear();
  ///////GuardarLS///////////
  function guardarLS(elemento){
    return localStorage.setItem('carrito', JSON.stringify(elemento))
  }
///////////////eliminar Servicios//////////////
  const eliminarDelCarrito = (id) =>{
    const foundId = carrito.find(serv => serv.id ===id);
    console.log(foundId);
    carrito = carrito.filter(carritoId => {
      return carritoId !==foundId;
    });
    guardarLS(carrito);      
    mostrarServicios(carrito);
     };



  

