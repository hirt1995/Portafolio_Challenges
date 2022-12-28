
function encriptarTexto(){
    var textarea = document.getElementById('Encriptar').value.toLowerCase();

    if (textarea == ""){
        document.getElementById('textoEncriptado').innerHTML= "";
        if(screen.width < 480){
            document.getElementById("no_encontrado").style.visibility = "hidden";
            document.getElementById("no_encontrado_two").style.visibility = "visible";

        }else{
            document.getElementById("no_encontrado").style.visibility = "visible";
        }
      
    } else {
        document.getElementById("no_encontrado").style.visibility = "hidden";
        var textoCifrado = textarea.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        document.getElementById('textoEncriptado').innerHTML = textoCifrado;
    }
    document.getElementById('Encriptar').value="";
}


function desencriptarTexto (){ 
    var textarea = document.getElementById('Encriptar').value.toLowerCase();

    if (textarea == ""){
        document.getElementById('textoEncriptado').innerHTML= "";
        document.getElementById("no_encontrado").style.visibility = "visible";      
    } else {
        document.getElementById("no_encontrado").style.visibility = "hidden";
        var textoCifrado = textarea.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        document.getElementById('textoEncriptado').innerHTML = textoCifrado;    
    }
    document.getElementById('Encriptar').value=""

}

function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);  
    }

    const boton_copiar= document.querySelector("#btn_copiar");
   
    boton_copiar.addEventListener("click", () => {
        Notification.requestPermission().then(perm => {
            if (perm === "granted") {
            var parrafo = document.getElementById('textoEncriptado').innerHTML;
            if (parrafo == "") {
                new Notification("No hay texto secreto para copiar")
            }else{
                new Notification("Texto secreto copiado");
            }
            }
        })
    })


    
