// let text = 'nasimhon'
// console.log(text.length)
// console.log(text.at(1))
// console.log('taraqqiyot'.toUpperCase())  // harflarni katta qilib beradi
// console.log('SALOM'.toLowerCase())  // matnni kichik harfda qilib beradi
// Nasimjon
// const ism = 'nAsimhon'
// const bosh = ism.charAt().toUpperCase()
// console.log(bosh + ism.slice(1).toLowerCase())

// let text = 'na@simhon@gmail.com'
// let index = text.indexOf('@', 3) //8let text = 'nasimhon'
// console.log(text.length)
// console.log(text.at(1))
// console.log('taraqqiyot'.toUpperCase())  // harflarni katta qilib beradi
// console.log('SALOM'.toLowerCase())  // matnni kichik harfda qilib beradi
// Nasimjon
// const ism = 'nAsimhon'
// const bosh = ism.charAt().toUpperCase()
// console.log(bosh + ism.slice(1).toLowerCase())

// let text = 'na@simhon@gmail.com'
// let index = text.lastIndexOf('-', 4)
// console.log(text[index])
// console.log(index)

// let text = 'salom men jsda string mavzusini organayapman'
// console.log(text.includes('mav'))  //topsa tru topmasa false

// let arr = ['sobirov', 'sobirova', 'abdullayev', "sultonmahmudova"]
// let ism = 'Madina'
// console.log(ism.endsWith('in'))  // oxiridangi jumla bormi yoki yoqmi tekshirish
// console.log(ism.startsWith('Ma')) // boshidagi jumla bormi yoki yoqmi tekshirish  true / false

// arr.map((i) => {
//     if (i.startsWith('s')) console.log(i)
// })

// console.log('salom'.padEnd('10', '.'))
// console.log('salom'.padStart('10', '-'))

// console.log("abcde".substring(1, 4))  //slice ga oxshash


// let text = ' salom '
// text = text.trim()
// console.log(text.length)


// ------------------------------------
//  Kirish: 'nasimhon@gmail.com'
// let text = 'nasimhon@gmail.com'
// let bosh = text.charAt()
// let index = text.indexOf('@')
// let davom = text.slice(index - 1)
// let result = bosh.padEnd(7, '*') + davom

// console.log(result)
// Natija: 'n******n@gmail.com'


// let text = 'salom men js organayapman'
// text = text.trimStart()  // matn oldin bosh joyni olib tashlash
// text = text.trimEnd()  // matn oxiridan bosh joylarni olib tashlash
// console.log(text.length)
// console.log(text.split(' ', 3))  // arrayga aylantiradi 3 limit nechta elementni olish


// console.log('salom '.repeat(3)) // mattni takrorlab beradi 3 => takrorlanishlar soni

// let text = 'salom men js organayapman'
// console.log(text.replace('js', 'ona tili'))

// let arr = [1, 2, 4, 5, 7, 4, 8, 6, 3, 4, 6, 7]

// console.log(eval(arr.join('+')))  // eval bu matn ichida calculator

// let son = 12
// console.log(eval('son+13'))  //