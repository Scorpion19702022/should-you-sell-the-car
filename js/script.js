const error = document.querySelector('.error')

const model = document.querySelector('#model')
const year = document.querySelector('#year')
const mileage = document.querySelector('#mileage')
const visit = document.querySelector('#visit')
const accident = document.querySelector('#accident')

const btnAdvice = document.querySelector('.btns__advice')
const btnClear = document.querySelector('.btns__clear')

const spamBrand = document.querySelector('.spambrand')
const spamYear = document.querySelector('.spamyear')
const spamMileage = document.querySelector('.spammileage')
const spamVisit = document.querySelector('.spamvisit')
const spamAccident = document.querySelector('.spamaccident')

const info = document.querySelector('.advice__sell--info')

let dateYear = new Date()
let todayYear = dateYear.getFullYear()

console.log(todayYear)
