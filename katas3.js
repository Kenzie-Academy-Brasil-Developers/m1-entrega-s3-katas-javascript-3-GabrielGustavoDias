const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let count = []
    for(let i = 1; i<=25; i ++){
        count.push(i)
    }
    return count
}
console.log(kata1())


function kata2() {
    let count = []
    for(let i = 25; i >= 1; i--){
        count.push(i)
    }
    return count
}
console.log(kata2())


function kata3() {
    let count = []
    for(let i = -1; i>=-25;i--){
        count.push(i)
    }
    return count
}
console.log(kata3())


function kata4() {
    let count = []
    for(let i = -25;i<=-1;i++){
        count.push(i)
    }
    return count
}
 console.log(kata4())


function kata5() {
    let count = []
    for(let i = 25; i>=-25; i--){
        if(i % 2 !==0 ){
            count.push(i)
        }
    } 
    return count  
}
console.log(kata5())

function kata6() {
    let count = []
    for(let i = 3; i<=100; i++){
        if(i % 3 == 0 ){
            count.push(i)
        }
    }
    return count
}
console.log(kata6())

function kata7() {
    let count = []
    for(let i = 7; i<=100; i++){
        if(i % 7 == 0 ){
            count.push(i)
        }
    }
    return count

}
console.log(kata7())

function kata8() {
    let count = []
    for(let i = 100; i>=3; i--){
        if(i % 3 == 0 ){
            count.push(i)
        }if(i % 7 == 0){
            count.push(i)
        }
    }
    return count
}

console.log(kata8())

function kata9() {
    let count = []
    for(let i = 5; i<=100; i++){
        if(i % 5 == 0 && i % 2 !==0 ){           
        count.push(i)
        }
    }
    return count
}
console.log(kata9())

function kata10(x) {
    return x
}
console.log(kata10(sampleArray))


function kata11(x) {
    let count = []
    for(let i = 0; i<x.length;i++){
        if(x[i] % 2 == 0 ){
            count.push(x[i])
        }
    }
    return count  
}
console.log(kata11(sampleArray))




function kata12(x) {
    let count = []
    for(let i = 0; i<x.length;i++){
        if(x[i] % 2 !== 0 ){
            count.push(x[i])
        }
    }
    return count
}
console.log(kata12(sampleArray))

function kata13(x) {
    let count = []
    for(let i = 0; i<x.length; i++){
        if(x[i] % 8 == 0){
            count.push(x[i])
        }
    }
    return count
}
console.log(kata13(sampleArray))

function kata14(x) {
    let count = []
    for(let i = 0; i<x.length; i++){
        let resultado = x[i] * x[i]
        count.push(resultado)
    }
    return count
}
console.log(kata14(sampleArray))

function kata15(x) {
    let resultado = x
    for(let i = x- 1; i > 0; i --){
        resultado = i + resultado
    }
    return resultado
}
console.log(kata15(20))


function kata16(x) {
}
 console.log(kata16(sampleArray))
 
function kata17(x){
    let menorNumero = x[0]
    for(let i = 0; i<x.length; i++){
        if(menorNumero > x[i]){
            menorNumero = x[i]
        }
    }
    return menorNumero
}
console.log(kata17(sampleArray))


function kata18(x) {
    let maiorNumero = x[0]
    for(let i = 0; i < x.length; i++){
        if(maiorNumero < x[i]){
            maiorNumero = x[i]
        }
    }
    return maiorNumero
}

console.log(kata18(sampleArray))
