const campo_texto = document.querySelector("#Area");
const campo_mensaje= document.querySelector("#Txt");

const matriz_code=[
["e","enter"],
["i","imes"],
["a","ai"],
["o","ober"],
["u","ufat"],
];

function btnEncriptar() {
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function encriptar(AreaEncriptado){
    for(let i = 0; i < matriz_code.length; i++){
        if(AreaEncriptado.includes(matriz_code[i][0])){
            AreaEncriptado = AreaEncriptado.replaceAll(
            matriz_code[i][0],
            matriz_code[i][1]
            );
        }
    }
    return AreaEncriptado;

}
function btnDesEncriptar(){
    const texto = DesEncriptar(campo_texto.value);
    campo_mensaje.value = texto;
}
function DesEncriptar(TxtEncriptado){
    for(let i = 0; i < matriz_code.length; i++){
        if(TxtEncriptado.includes(matriz_code[i][1])){
            TxtEncriptado = TxtEncriptado.replaceAll(
            matriz_code[i][1],
            matriz_code[i][0]
            );
        }
    }
    return TxtEncriptado;

}