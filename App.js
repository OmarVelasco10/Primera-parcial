const miInfoo=new Array();

const btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", e =>{   //tenias { en lugar de ( antes de "click
  let nombre=document.getElementById("txtNombre").value;
  let descripcion=document.getElementById("txtDescripcion").value;
  let cantidad=document.getElementById("txtCantidad").value;
  cantidad=parseInt(cantidad);
  let costo=parseInt(document.getElementById("txtCosto").value);

  let product=new Producto(nombre, descripcion, cantidad, costo);

  let details = document.getElementById("details");
  details.innerHTML+= `
  <div>
  <p><strong>ID ${product.id} - </strong${product.nombre}</p>
  <p>Desc: ${product.descripcion}</p>
  <p>Valor Total:${product.valorMercancia}</p>
  <p>${product.showTextInfo()}</p>
  </div>
  `;
  console.log(product.showInfo);
});
