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

class CarInfo {
	constructor(brand, year, mileage, visit, accident) {
		this.brand = brand
		this.year = year
		this.mileage = mileage
		this.visit = visit
		this.accident = accident
	}

	showInfoOne() {
		const show1 = () => {
			let dateYear = new Date()
			let todayYear = dateYear.getFullYear()
			let age = todayYear - year.value
			spamBrand.textContent = model.value
			spamYear.textContent = year.value
			spamMileage.textContent = mileage.value
			spamVisit.textContent = visit.value
			spamAccident.textContent = accident.value

			if (
				model.value !== '' ||
				year.value !== '' ||
				mileage.value !== '' ||
				visit.value !== '' ||
				accident.value !== 0
			) {
				error.textContent = 'wypełnij wszystkie pola'
				info.textContent = 'wypełnij poprawnie wszystkie pola by uzyskać informacje'
			} else {
			}
		}
		show1()
	}
}

const car = new CarInfo(model.value, year.value, mileage.value, visit.value, accident.value)

const clean = () => {
	error.textContent = ''
	model.value = ''
	year.value = ''
	mileage.value = ''
	visit.value = ''
	accident.value = 0
	spamBrand.textContent = ''
	spamYear.textContent = ''
	spamMileage.textContent = ''
	spamVisit.textContent = ''
	spamAccident.textContent = ''
	info.textContent = ''
}

btnClear.addEventListener('click', clean)

btnAdvice.addEventListener('click', () => car.showInfoOne())
