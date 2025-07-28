// MANTIQIY OPERATORLAR   VA  YOKI INKOR
// inkor  true  false
// VA = MANTIQIY QOSHISH  BIN NECHTA SHARTADAN IKALASI HAM ROAST BOLSA ROST CHIQADI YANI TRUE
// YOKI = BIR NECHA SHARTDAN BITTASi ROST BOLSAHAM ROST TRUE 

// ! inkor  
// &&   and va
// || or yoki

// console.log(!true) 
// console.log(true && false)
// console.log(true || !false)

// console.log(12 > 15 || 2 < 3) // false
// console.log(10 > 5 && 2 < 12)

// 0, '', null, undefined, NaN false   === false

// console.log(true && 'hey')
// console.log(1!=='0' && false && 'hey') // hey false 
// console.log(1!=='0' && true && 'hey')



// if va else 

// if (10 < 12 || -1 > 0) {
//     console.log('1 xonaga kiring')
// }

// else {
//     console.log('tanimadim')
// }

// let yosh = 0;
// if (yosh >= 16) {
//     console.log('siz pasport ola olasiz')
// }
// else if (yosh <= 0) {
//     console.log('bunday yosh mavjud emas')
// }
// else {
//     console.log('hali yosh yetarli emas')
// }


// let age = 20
// if (age > 18) {
//     console.log('siz account ocha olasiz')
// }
// else if(age > 100){
//     console.log('qarib qolibsiz')
// }
// else{
//     console.log('nomalum hatolik')
// }

// let a = 1
// let b = 2
// let c = -1
// let count = 0
// if (a > 0) {
//     count++
// }b
// if (b > 0) {
//     count++
// }
// if (c > 0){
//     man--
// }
// console.log(count,'ta musbat son bor')



// !
// && 
// console.log('salom' || !false)
// ||  va 



// 0, '', null, undefined, NaN false   === false

// if (true === '1') {
//     console.log('salom')
// }
// else {
//     console.log('hayr')
// }

// 8-masala
// let a = 10
// let b = 5
// if (a > b) {
//     b += 10
// }
// console.log('a=', a, 'b=', b)

// 9-masala

// let a = 10
// let b = 11

// if (a !== b) {
//    let c = a + b
//    const d = a + b
//     a = c
//     b = d
//     console.log(`a => ${a} b=> ${b}`)
// }
// else {
//     a = 0
//     b = 0
//     console.log(`a => ${a} b=> ${b}`)
// }

// 10-masala
// let a = 11
// let b = 11
// if (a != b) {
//     if (a > b) {
//         b = a
//         // console.log(`a => ${a} b=> ${b}`)
//     }
//     else {
//         a = b
//         // console.log(`a => ${a} b=> ${b}`)
//     }
// }
// else {
//     a = 0
//     b = 0
// }
// console.log(`a => ${a} b=> ${b}`)

// let a = 3
// let b = 2
// let c = 1
// if (a < b && a < c) {
//     console.log(a)
// }
// else if (b < a && b < c) {
//     console.log(b)
// }
// else if (c < b && c < a) {
//     console.log(c)
// }

// let a = 3
// let b = 4
// let c = 12
// // let c = 1
// if (a > b && a > c) {
//     console.log('katta son', +a)
// }
// else if (b > a) {
//     console.log('kichik son', +b)
// }
// else {
//     console.log('sanlar teng')
// }

let a = 1
let b = 2
let c = 3

if (a + b > a + c) {
    console.log(b, c)
}
else {
    console.log(b, c)
}
if (b + c > b + a) {
    console.log(b, c)
}
else {
    console.log(a, c)
}

