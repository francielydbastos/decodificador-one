/*As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/

function codificar() {
    let fraseCodificar = document.getElementById("input").value;
    let fraseCodificada = ""; 

    for (let i = 0; i < fraseCodificar.length; i++) {
        switch (fraseCodificar[i]) {
            case "a":
                fraseCodificada += "ai";
                break;
            case "e":
                fraseCodificada += "enter";
                break;
            case "i":
                fraseCodificada += "imes";
                break;
            case "o":
                fraseCodificada += "ober";
                break;
            case "u":
                fraseCodificada += "ufat";
                break;
            default:
                fraseCodificada += fraseCodificar[i];
                break;
        }
    }

    document.getElementById("output").value = fraseCodificada;
}

function decodificar() {
    let fraseCodificada = document.getElementById("input").value;
    let fraseDecodificada = "";

    fraseDecodificada = fraseCodificada.replaceAll("ai", "a")
                                       .replaceAll("enter", "e")
                                       .replaceAll("imes", "i")
                                       .replaceAll("ober", "o")
                                       .replaceAll("ufat", "u");

    document.getElementById("output").value = fraseDecodificada;
}

function copiar() {

    output.select();
    navigator.clipboard.writeText(output.value);
}