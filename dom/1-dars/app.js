// documet
// window
// console.log(document)
// console.log(window)

// ----------------

const title = document.getElementById('title')
const btn = document.querySelector('.btn')
const para = document.getElementById('para')


// function setClass() {
//     title.classList.add('text1')
//     console.log(title)
// }
// title.classList.add('text1')  // clas qoshish
// title.classList.remove('text1')  // classni delete qilish

// title.classList.remove('text1')  // classni delete qilish

// function setClass() {
//     title.classList.toggle('text1')  //  text1 class bolsa qoshadi bolmsasa delete qiladi
//     console.log(title)
// }


const image = document.getElementById('image')

// console.log(para.getAttribute('id'))  // bu atrubite olish
para.setAttribute('class', 'paragrif')
para.setAttribute('style', 'color: red;')  // atribute qoshish
image.setAttribute('src', './img.png');

// para.textContent = 'salom '
// para.textContent += 'qaleysan'

let age = 17
if (age >= 16) {
    para.textContent = 'siz pasport ola olasiz'
}

if (age < 16) {
    para.textContent = 'siz pasport ola olmaysiz'
}

