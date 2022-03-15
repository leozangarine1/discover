/* 
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F 
*/

function getScore(notaNum){
let nota = ""

if(notaNum >= 90 && notaNum <= 100){
    nota = 'A'
} else if(notaNum >= 80 && notaNum <= 89) {
    nota = 'B'
} else if(notaNum >= 70 && notaNum <= 79) {
    nota = 'C'
} else if(notaNum >= 60 && notaNum <= 69) {
    nota = 'D'
} else if(notaNum < 60 && notaNum >= 0) {
    nota = 'F'
} else {
    console.log('Nota inválida')
}

console.log(nota)
}

getScore(90)
getScore(52)
getScore(877)
getScore(36)
getScore(78)
getScore(89)
