var imagen_origen;
var imagen_destino;
function comenzar() {

  imagen_origen = document.getElementById("img1")

  imagen_origen.addEventListener("dragstart",false);

  imagen_destino = document.getElementById('house_pet');
  imagen_destino.addEventListener("dragenter",function (e) {
    e.preventDefault();
  },false);

  imagen_destino.addEventListener("dragover",function (e) {
    e.preventDefault();
  },false);

  imagen_destino.addEventListener("drop",dropImage,false);
}
/*******funciones****/

function dragImage(e) {
  var codigo = "<img src='"+parametro.getAttribute("src")+"'>";
  e.dataTransfer.setData("Text",codigo)
}
function dropImage(e){
  imagen_destino = document.getElementById('house_pet');
  e.preventDefault();
  imagen_destino.innerHTML = e.dataTransfer.getData("Text");

  var fotito = imagen_origen.src
  var addModal = document.getElementById('contenedorGeneral');

  printModalHtml(addModal,fotito);
  verModal();
}
function verModal(){
  var modal = document.getElementById('myModal');
  modal.style.display = "block";
}
function printModalHtml(parent,fotito){
  var divmodal = document.createElement("div");
  divmodal.setAttribute("class","modal");
  divmodal.setAttribute("id","myModal");
  divmodal.setAttribute("tabindex","-1");
  divmodal.setAttribute("role","dialog");
  divmodal.setAttribute("aria-hidden","true");

  var divmodaldialog = document.createElement("div");
  divmodaldialog.setAttribute("class","modal-dialog");
  divmodaldialog.setAttribute("role","document");

  divmodal.appendChild(divmodaldialog);

  divmodalcontent = document.createElement("div");
  divmodalcontent.setAttribute("class","modal-content");

  divmodaldialog.appendChild(divmodalcontent);

  var divmodalheader = document.createElement("div");
  divmodalheader.setAttribute("class","modal-header");

  var divmodalbody = document.createElement("div");
  divmodalbody.setAttribute("class","modal-body");

  var divmodalfooter = document.createElement("div");
  divmodalfooter.setAttribute("class","modal-footer");

  divmodalcontent.appendChild(divmodalheader);
  divmodalcontent.appendChild(divmodalbody);
  divmodalcontent.appendChild(divmodalfooter);

  var a1 = document.createElement("a");
  a1.setAttribute("class","close");
  a1.setAttribute("data-dismiss","modal");
  a1.setAttribute("aria-label","Close");
  a1.setAttribute("href",'file:///C:/Users/Laboratoria0060/Desktop/sprint3/ProyectoX/index.html');

  divmodalheader.appendChild(a1);

  var span1 = document.createElement("span");
  span1.setAttribute("aria-hidden","true");
  span1.appendChild(document.createTextNode('x'));

  a1.appendChild(span1);

  var divImagen = document.createElement("div");
  divImagen.setAttribute("class","divImagen");

  var img1 = document.createElement("img");
  img1.setAttribute("src",fotito);

  divImagen.appendChild(img1);

  divmodalbody.appendChild(divImagen);
  parent.appendChild(divmodal);

}
//window.addEventListener("load",comenzar,false);
window.addEventListener("load",function () {

  comenzar();
});
