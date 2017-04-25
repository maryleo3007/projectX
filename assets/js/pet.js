var imagen_origen;
var imagen_destino;

function Pet(id,nombre,sexo,edad,tipoPelo,foto) {
  this.id = id;
  this.nombre = nombre;
  this.sexo = sexo;
  this.edad = edad;
  this.tipoPelo = tipoPelo;
  thi.foto = foto;
}


function comenzar() {
  imagen_origen = document.getElementById("img1");

  imagen_origen.addEventListener("dragstart",dragImage,false);

  imagen_destino = document.getElementById('house_pet');
  imagen_destino.addEventListener("dragenter",function (e) {
    e.preventDefault();
  },false);

  imagen_destino.addEventListener("dragover",function (e) {
    e.preventDefault();
  },false);

  imagen_destino.addEventListener("drop",dropImage,false);
}
function dragImage(e) {
  var codigo = "<img src='"+imagen_origen.getAttribute("src")+"'>";

  e.dataTransfer.setData("Text",codigo)
}
function dropImage(e){
  imagen_destino = document.getElementById('house_pet');
  e.preventDefault();
  imagen_destino.innerHTML = e.dataTransfer.getData("Text");
  prueba = document.getElementById("prueba");
  imagen_destino.addEventListener("toggle",printModalHtml(prueba));

}
function printModalHtml(parent){
  var divmodal = document.createElement("div");
  divmodal.setAttribute("class","modal");
  divmodal.setAttribute("id","creative");
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

  var button1 = document.createElement("button");
  button1.setAttribute("class","close");
  button1.setAttribute("data-dismiss","modal");
  button1.setAttribute("aria-label","Close");

  divmodalheader.appendChild(button1);

  var span1 = document.createElement("span");
  span1.setAttribute("aria-hidden","true");
  span1.appendChild(document.createTextNode('x'));

  button1.appendChild(span1);

  var divImagen = document.createElement("div");
  divImagen.setAttribute("class","divImagen");

  divmodalbody.appendChild(divImagen);
  parent.appendChild(divmodal);

  /*
  var img1 = document.createElement("img");
  img1.setAttribute("src",imagen);

  divImagen.appendChild(img1);
*/
  /*
  <div class="modal" id="creative" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content" style="background:#CECF48;">
        <div class="modal-header">
          **<button type="button" class="close"
          data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>

        </div>
        <div class="modal-body">
          <p style="font-size:20px; display: block;">This project, I did for my sister who is a published journalist, editor for newpaper, and a novel writer. She needed a portfolio that she could handle herself easily after I set it up for her. Wordpress.com was the best option. I edited a free
            theme with licensed graphics and setup all the pages with content.</p>
        </div>
        <div class="modal-footer">
          footer
        </div>

        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
*/
}
window.addEventListener("load",comenzar,false);
