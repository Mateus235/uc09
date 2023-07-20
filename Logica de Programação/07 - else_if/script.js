//let nota = prompt ()

//if (nota >= 7 ){
//    console.log("aprovado");
//}else if (nota >= 5){
//console.log("recuperaçao");
//}else{
  //console.log("reprovado");
//}


let nota1 = prompt(("Digite sua Nota 01"));
let nota2 = prompt(("Digite sua Nota 02"));
let nota3 = prompt(("Digite sua Nota 03"));
let nota4 = prompt(("Digite sua Nota 04"));

 

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7){
    console.log(`Aprovado!Nota final: ${media.toFixed(2)}`);
}else if (media >= 5){
    console.log(`Recuperação! Nota final: ${media.toFixed(2)}`);
}else{
    console.log(`Reprovado! Nota final:${media.toFixed(2)}`);
}





