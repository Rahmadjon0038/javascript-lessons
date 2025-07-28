// let hour = date.getHours();
// let min = date.getMinutes();
// let secont = date.getSeconds();
// console.log(`${hour}:${min}:${secont}`)

// let arr = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', "avgust"]
// let month = date.getMonth()  //oy indexsi
// console.log(arr[month])

// let day = date.getDay()  //kun indexsi
// console.log(day)

// let year = date.getFullYear()
// console.log(year)  // yil

// setTimeout() => 

// setTimeout(() => {
// /bajariladigan codelarimiz/
// },'vaqt')

// setTimeout(() => {
//    alert('royhatdan oting')
// }, 3000)

// let son = 0

// setInterval(() => {
//     if (son < arr.length - 1) {
//         son++
//         console.log(arr[son])
//         console.log(son)
//     }
//     else {
//         son = 0
//     }
// }, 1000);



const gethour = document.getElementById('hour')

setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let secont = date.getSeconds();


    gethour.textContent = `${hour}:${min}:${secont}`
}, 1000)