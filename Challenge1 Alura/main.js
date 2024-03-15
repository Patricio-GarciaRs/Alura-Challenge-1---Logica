function encodeText () {
    let encodeValue = document.getElementById("myInput").value;

    var textoCifrado = encodeValue.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    document.getElementById("imgArea").style.display = "none";
    document.getElementById("textArea").style.display = "none";
    document.getElementById("textResult").style.display = "block";
    document.getElementById("textResult").innerHTML = textoCifrado;
    document.getElementById("btnCopy").style.visibility = "visible";
};

function desencodeText () {
    let desencodeValue = document.getElementById("myInput").value;
    
    var textoCifrado = desencodeValue.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    document.getElementById("imgArea").style.display = "none";
    document.getElementById("textArea").style.display = "none";
    document.getElementById("textResult").style.display = "block";
    document.getElementById("textResult").innerHTML = textoCifrado;
    document.getElementById("btnCopy").style.visibility = "visible";
};

function copyToClipboard () {
    var copyText = document.getElementById("textResult");
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
}