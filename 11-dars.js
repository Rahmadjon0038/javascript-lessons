// import ism, { age, fisrtname } from './data.js'
// console.log(ism.age)
// console.log('salom', ism)

// console.log(age, fisrtname)

// // import  && export
// OBJECT  
// { key : value }
// let name = 'ism'

// let obj = {
//     username: "Rahmadjon",
//     age: 12,
//     fistname: 'Abdullayev',
//     'ism familiya': 'Abdullayev Rahmadjon'
// }

// console.log(obj.username)  // malumot olish
// console.log(obj.age)
// console.log(obj.fistname)

// console.log(obj)
// console.log(obj['ism familiya'])  // object ichidan malumot olish 
// console.log(obj['age'])


// let names = 'Taraqqiyot'
// let fisrtname = "Davlatobot"


// let obj = { names, fisrtname, age: 12 }  // objet ichiga maluimot tashqi uzgaruvchidan kisra kalit key yozish shart emas
// console.log(obj)

// let user1 = { name: "Rahmadjon" };

// let user2 = user1

// // console.log(user1.name)

// console.log(user2 == user1)  //true
// console.log({ name: "Rahmadjon" } == { name: "Rahmadjon" })  //false


// const user1 = { name: "Rahmadjon" };
// user1.name = 'Nasimxon'   // yangilash 
// user1.age = 12; //malumot qoshish

// user1.age = 111

// delete user1.name   // ochirish

// console.log(user1)


// -------------------------------------------- jul 11 --------------------------------------

// let key = 'chorshanba'  
// // dinamik key yasash
// let obj = {
//     dushanba: {
//         dars1:'Rus tili',
//         '2-para':"Matematika",
//     },
//     seshanba:"Web"
// }
// console.log(obj[key])
// console.log(obj.dushanba['2-para'])


// let obj = { name: 'Rahmadjon', age: 12, desc: { description: 'Taraqqiyot teaching center', place: 'Davlatabot' } }

// const { age, name, desc: { description, place } } = obj // desc: { description, place }   bu holat object ichidagi object keyni distructure qilish yani olish  bu yerda desc object

// console.log(age, name, description, place)

// let age = 100
// let { name, age:newAge } = obj // distructure qilayotgan keyimiz bilan tashqi uzgaruvchimiz nomi birxil bolib qolsa   age: newAge   bu xolat : nuqta bilan yangi nom berishimiz mumkinn bu yerda age object key newAge yangi nom
// console.log(name, newAge)
// console.log(age)

// let name = 'salomat'
// function getName({ age }) {
//     // let { name } = obj
//     console.log('name', name)
//     console.log('age', age)
// }

// getName({ name: 'Rahmadjon', age: 12})


// Object ICHIDA Function ISHLATISH
// let ism = 'salm'
// let obj = {
//     name: "Taraqqiyot",
//     place: "Davlatabot",

//     // sayHi: () => {
//     //     console.log(this)
//     // },
//     sayHithis() {
//         console.log(this.name)
//     }
// }

// let obj1 = obj

// obj = null

// // obj.sayHi()
// obj1.sayHithis()


// ----------------------------- 14 jul ------------------------

// const obj = {
//     sayHI(son, name) {
//         console.log('salom', son)
//         return `return qiymat ${name}`
//     },
//     name: "Nasimhon"
// }
// console.log(obj.sayHI(12, obj.name))

// const obj = { name: "Nasimhon", age: 11, job: "Devoloper" }

// const { age, name } = obj
// console.log(name, age)

// const getName = ({ age, name }) => {
//     console.log(age, name)
// }
// getName(obj)

// const obj = {
//     name: "Nasimhon", age: 11, classes: { id: 1, name: "5 sinf" }
// }
// const { age, name, classes: { id, name: newname } } = obj
// console.log(id, newname)

// let kun = 'du'
// const jadval = {
//     du: {
//         para: 1,
//         name: "Matematika"
//     },
//     se: {
//         para: 2,
//         name: "Ona tili"
//     },
//     chor: {
//         para: 3,
//         name: "Inglis tili"
//     },
// }
// console.log(jadval[kun])

// const obj = { name: "Rahmadon", age: 11, job: "devoloper" }
// spread operatori    ...
// name: "Rahmadon", age: 11, job: "devoloper",hobby:'coding' 
// console.log({ ...obj })

// console.log(Object.values(obj))