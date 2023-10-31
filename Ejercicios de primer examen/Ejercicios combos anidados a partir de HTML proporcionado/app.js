let continente_1=new Array("Seleccione País","España","Francia","Italia","Reino Unido","Alemania","Bélgica");
let continente_2=new Array("Seleccione País","China","Japón","Irán","Iraq","Afganistán","Paquistán");
let continente_3=new Array("Seleccione País","Marruecos","Nigeria","Zambia","Lesoto","Argelia","Somalia");
let continente_4=new Array("Seleccione País","Canadá","Estados Unidos","México","Brasil","Argentina ","Chile");
let continente_5=new Array("Seleccione País","Australia","Nueva Zelanda","Tonga","Samoa","Islas Marshall ","Islas Salomón");

let nombresContinentes = ["Europa","Asia","Africa", "América","Oceanía"]

let todosContinentes = [
  [],
  continente_1,
  continente_2,
  continente_3,
  continente_4,
  continente_5
];

window.onload = function(){
  document.f1.pais.options[0].text = "Selecciona País";
}

function cambia_continente(){ 
     let continente = document.f1.continente[document.f1.continente.selectedIndex].value

     if (continente != 0) { 
        mis_paises=todosContinentes[continente]
        num_paises = mis_paises.length 
        document.f1.pais.length = num_paises

        for(i=0;i<num_paises;i++){ 
           document.f1.pais.options[i].value=mis_paises[i] 
           document.f1.pais.options[i].text=mis_paises[i] 
        }	

     }else{ 
        document.f1.pais.length = 1; 
        document.f1.pais.options[0].text = "Selecciona País";

     } 
    document.getElementById("mensaje").innerHTML= "";
    document.f1.pais.options[0].selected = true 
}

function muestra_mensaje(){
  let continente = nombresContinentes[document.f1.continente.value-1];
  let pais = document.f1.pais.value;

  if (pais !== "Selecciona País"){

  document.getElementById("mensaje").innerHTML = "<p>Has seleccionado el continente <b>"+continente+"</b> y el país <b>"+pais+"</b></p>";
  } else
  {
    document.getElementById("mensaje").innerHTML = "";
  }
}