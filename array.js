// Array  [raqam,matn,funksiya,objet]

// const fruits = ["apple", "banana"];
//               0          1         2    3

// console.log(fruits[fruits.length - 2])
// console.log(fruits.at(-2))

// fruits.push('Anor')
// fruits.push('Gilos', 'salom')  //array oxiriga element qoshadi

// fruits.pop(); // exiridagi elementni ochirib tashlaydi

// fruits[4] = 'yangi meva'  // index mos bo'lsa yangilaydi bo'lmasa qo'shadi

// console.log(fruits)



// const arr1 = ["apple", "banana"];
// const arr2 = [2, 3];

// console.log(arr1 + arr2)
// let newArr = arr1.toString() + arr2.toString()
// console.log(arr1.concat(arr2, [4, 5], ['salom']))  // arraylarni qoshish
// 

// let text = 'salom,men,array,mavzusida,otiribman'
// let newArr = text.split(',') // bu mantnni arrayga aylantirish  , bor joydan ajratadi

// console.log(newArr.join('--').split())  // arrayni elementlarini qoshib yuborish
// let info = "Abdullayev Rahmadjon   sasa     sassa"
// // let arr = info.split(' ')
// let arr = info.split(/\s+/)     // yodlab oling nechta bosh joy kelsaham togri ajratib beradi
// console.log(arr)

// console.log(arr[0])



// console.log(typeof [])

// let arr = [1, 2, 3, 4, 5]
// arr.forEach((item, index) => {
//     console.log(index, item)
// })

// let newArr = arr.map((item) => (
//     item + 100
// ))  
//{} qo'ymasak avtomatik return degani


// console.log(newArr)

// MAP VS FOREATCH

// let arr1 = arr.forEach((item) => item + 100)
// let arr2 = arr.map((item) => item + 100)

// console.log('for eatch=>', arr1)
// console.log('map=>', arr2)



// ------------------------------- jul 18 -------------------

// let arr = ['salom', "Men dasturchiman", 2, { name: "Nasimhon", 'familiyasi': "Obidof", "uzim haqimda malumot": "men taraqqiyotda oqiyman" }];

// console.log(arr[arr.length - 1]['name'])
// console.log(arr.at(-1))
// console.log(arr.at(-1)['name'])

// arr.forEach((element) => {
//     console.log(element)
// })
// let newarr =  arr.map((i) => {
//     return i
// })
// console.log(newarr)

// ------------------------ filter -------------------
// let arr = [1, 2, 5, 3, 4, 5, 7, 8, 5]

// let newArr = arr.filter((item) => {
//    return item !== 5
// })

// console.log('eski', arr)
// console.log('yangi', newArr)


// people.forEach(element => {
//     console.log(element.name)
// });

// const newArr = people.filter((item) => {
//     return item.job == 'Dasturchi'
// })

// newArr.map((item) => {
//     console.log(item.name)
// })

// const users = ["Ali", "Vali", "Sami", "Ozoda", "Guli"];
// // 1.1. Arraydagi har bir isming oldiga "Ism:" yozib chiqaring (for yordamida)
// // 1.2. Faqat 5 harfli ismlarni chiqaring (if bilan tekshiring)
// // 1.3. Ismlar sonini chiqaruvchi funksiya yozing
// 2. Array oxiriga va boshiga qo‘shish

// for (let i = 0; i < users.length; i++) {
//     // 1- console.log(`ismi : ${users[i]}`)
//     if (users[i].length == 4) {
//         console.log(users[i])
//     }

// }



// const people = [
//     {
//         id: 1,
//         name: "Ali Karimov",
//         age: 28,
//         job: "Dasturchi",
//         male: true,
//         phoneUz: "+998 90 123 45 67",
//         phoneRu: "+7 926 123 45 67"
//     },
//     {
//         id: 2,
//         name: "Zarina Yuldasheva",
//         age: 24,
//         job: "Grafik dizayner",
//         male: false,
//         phoneUz: "+998 91 234 56 78",
//         phoneRu: "+7 925 234 56 78"
//     },
//     {
//         name: "Javohir Abduvaliev",
//         age: 31,
//         job: "Shifokor",
//         male: true,
//         phoneUz: "+998 93 345 67 89",
//         phoneRu: "+7 917 345 67 89"
//     },
//     2, 12, 3
// ];

// for(item of people){
//     console.log(item)
// }

// for(item in people){
//     console.log(people[item])
// }


//  shift() — Boshidagi elementni o‘chiradi
// people.shift();

// //  unshift()   boshiga malumot qoshadi
// people.unshift({ name: 'new user' });

// console.log(people)

// let numbers = [1, 2, 3, 4, 5, 6, 7]
// const [obj1, obj2,...obj3] = numbers
// console.log(obj1, obj2)
// console.log(obj3)

// numbers = ['salom', ...numbers, 8, 9, { name: 'name' }]
// console.log(numbers)

// ------------------------------- jul 21 ----------------

//  1. slice() — Kesadi, lekin asl arrayga ta’sir qilmaydi

// let arr = [4, 8, 3, 4, 5, 6]
// let newArr = arr.slice(2)   // 1 indexni oladi 3 - indexdagi malumotni olmaydi


// let newArr = arr.splice(1, 3, 100, 111)  // 1 index 2 nechta kesib olish soni  100,111 replace orniga element qo'shish

// arr.splice(1, 3)

// console.log('old arr', arr)
// console.log('sclie arr', newArr)

// let arr = [4, 8, 3, 4, [12, , [100, , ['salom'], 23], 3], 5, 6]
// // let sum = 0
// // arr.forEach((item) => {
// //     sum += item
// // })
// console.log(sum)

// console.log(arr.flat(2))  // bu array ichidagi arrayni elementlarini chiqaradi


// let arr = [4, 8, 3, 7, 4, 6, 7, 8, 9]
// console.log(arr.lastIndexOf(11, 3))  // malum bir elementni qidiradi topsa index qaytaradi topmasa -1 qaytadi

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.reverse())  // array elementlarini teskarisga chiqarib beradi

// let arr = ['olma', 'banan', 'nok','olcha']
// console.log(arr.includes('olcha')) // array ichida qidirilayotgan narsa bormi yoki yoqmi true / false

// let arr = [1, 2, 3, 2, 4, 5, 2]
// // console.log(arr.indexOf(2, 2))  // array boshidan qaytarib beradi
// const result = arr.find(item => item > 1);
// console.log(result)

const people = [

    {
        id: 2,
        name: "Zarina Yuldasheva",
        age: 24,
        job: "Grafik dizayner",
        male: false,
        phoneUz: "+998 91 234 56 78",
        phoneRu: "+7 925 234 56 78"
    },
    {
        id: 1,
        name: "Ali Karimov",
        age: 20,
        job: "Dasturchi",
        male: true,
        phoneUz: "+998 90 123 45 67",
        phoneRu: "+7 926 123 45 67"
    },
    {
        name: "Bahodir Abduvaliev",
        age: 31,
        job: "Shifokor",
        male: true,
        phoneUz: "+998 93 345 67 89",
        phoneRu: "+7 917 345 67 89"
    },
];
// const result = people.find((item) => item.age > 20)
// console.log(result.name)


// reduce(callback, initialValue) — Hammasini bitta qiymatga qisqartiradi


// // let sum = 0
// // arr.forEach((item) => {
// //     sum += item
// // })
// console.log(sum)

// const sum = arr.reduce((boshi, oxiri) => boshi + oxiri, 0);
// console.log(sum)

// SORT TARTIBLASH
// let arr = [10, 1, 4, 7, 3, 9]

// arr.sort((a, b) => a - b)

// console.log(arr)

// matn uchun

// let arr = ['salom', 'ali', 'baxrom']
// console.log(arr.sort((a, b) => a.localeCompare(b)))
// console.log(people.sort((a, b) => a.name.localeCompare(b.name)))

// let arr = [12, 3, 4, 5, 5, 3]

// const set = new Set(arr)

// console.log(set)
let obj = {
    name: "Bahodir Abduvaliev",
    age: 31,
    job: "Shifokor",
    male: true,
    phoneUz: "+998 93 345 67 89",
    phoneRu: "+7 917 345 67 89"
}
// console.log(Object.keys(obj))
// console.log(Object.entries(obj))
// console.log(Object.values(obj))
if (Object.keys(obj).length) {
    console.log(obj)
}
else{
    console.log('objet bosh')
}