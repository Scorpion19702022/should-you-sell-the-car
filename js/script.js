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
const spamAge = document.querySelector('.spamage')
const spamMileage = document.querySelector('.spammileage')
const spamVisit = document.querySelector('.spamvisit')
const spamAccident = document.querySelector('.spamaccident')

const info = document.querySelector('.advice__sell--info')
const infoFinal = document.querySelector('.advice__sell--final')

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
			spamAge.textContent = age
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
				error.classList.add('actionerror')
				info.textContent = 'wypełnij poprawnie wszystkie pola by uzyskać informacje'
				spamAge.textContent = '0'
			}

			if (year.value > todayYear) {
				info.textContent = `Jeszcze nie mamy ${year.value} roku`
				infoFinal.textContent = 'Wypełnij poprawnie wszystkie pola'
				model.value = ''
				year.value = ''
				mileage.value = ''
				visit.value = ''
				accident.value = 0
				spamYear.textContent = `Błąd w dacie. Mamy ${todayYear} rok`
				spamAge.textContent = 'Błąd'
				error.classList.add('actionerror')
			}

			if (age > 10 && mileage.value > 150000 && visit.value >= 4 && accident.value === 'TAK') {
				info.textContent = `Twój samochód ma ${age} lat. Duży przebieg: ${mileage.value} km. Miałaś/eś ${visit.value} wizyt w warsztacie w ostatnich dwóch latach. Twój samochód jest także po POWAŻNEJ KOLIZJI`
				infoFinal.textContent = 'Rozważ sprzedaż samochodu'
				model.value = ''
				year.value = ''
				mileage.value = ''
				visit.value = ''
				accident.value = 0
				spamAge.textContent = age
				error.classList.remove('actionerror')
			} else if (mileage.value > 150000 && visit.value >= 4 && accident.value === 'TAK') {
				info.textContent = `Twój samochód ma ${age} lat, czyli nie jest jeszcze stary. Jednakże ma duży przebieg: ${mileage.value} km. Miałaś/eś też aż ${visit.value} wizyt w warsztacie w ostatnich dwóch latach. Twój samochód jest także po POWAŻNEJ KOLIZJI`
				infoFinal.textContent = 'Rozważ sprzedaż samochodu'
				model.value = ''
				year.value = ''
				mileage.value = ''
				visit.value = ''
				accident.value = 0
				spamAge.textContent = age
				error.classList.remove('actionerror')
			} else if (age > 10 && visit.value >= 4 && accident.value === 'TAK') {
				info.textContent = `Twój samochód ma nieduży przebieg: ${mileage.value} km. Jednakże ma już ${age} lat. Miałaś/eś też aż ${visit.value} wizyt w warsztacie w ostatnich dwóch latach. Twój samochód jest także po POWAŻNEJ KOLIZJI`
				infoFinal.textContent = 'Rozważ sprzedaż samochodu'
				model.value = ''
				year.value = ''
				mileage.value = ''
				visit.value = ''
				accident.value = 0
				spamAge.textContent = age
				error.classList.remove('actionerror')
			} else if (age > 10 && mileage.value > 150000 && accident.value === 'TAK') {
				info.textContent = `Miałaś/eś tylko ${visit.value} wizyt w warsztacie w ostatnich dwóch latach, co jest niewiele. Jednakże twój samochód ma ${age} lat. Duży przebieg: ${mileage.value} km. Twój samochód jest także po POWAŻNEJ KOLIZJI`
				infoFinal.textContent = 'Rozważ sprzedaż samochodu'
				model.value = ''
				year.value = ''
				mileage.value = ''
				visit.value = ''
				accident.value = 0
				spamAge.textContent = age
				error.classList.remove('actionerror')
			} else if (mileage.value > 150000 && accident.value === 'TAK') {
				info.textContent = `Mimo, że samochód ma niewiele, bo ${age} lat, tylko ${visit.value} wizyt w warsztacie w ostatnich dwóch latach. Jednakże ma duży przebieg: ${mileage.value} km. Jest także po POWAŻNEJ KOLIZJI`
				infoFinal.textContent = 'Rozważ sprzedaż samochodu'
				model.value = ''
				year.value = ''
				mileage.value = ''
				visit.value = ''
				accident.value = 0
				spamAge.textContent = age
				error.classList.remove('actionerror')
			} else if (
				accident.value === 'TAK' &&
				model.value != '' &&
				year.value != '' &&
				mileage.value != '' &&
				visit.value != ''
			) {
				info.textContent = `Mimo tego że samochód ma tylko ${age} lat, nieduży jeszcze przebieg: ${mileage.value} km i w ostatnich dwóch latach był tylko ${visit.value} razy w warsztacie to jest po POWAŻNEJ KOLIZJI`
				infoFinal.textContent = 'Rozważ sprzedaż samochodu'
				model.value = ''
				year.value = ''
				mileage.value = ''
				visit.value = ''
				accident.value = 0
				spamAge.textContent = age
				error.classList.remove('actionerror')
			} else if (age > 10 && mileage.value > 150000 && visit.value >= 4 && accident.value === 'NIE') {
				info.textContent = `Mimo, że samochód nie miał poważnej kolizji jednakże Twój samochód ma ${age} lat. Duży przebieg: ${mileage.value} km. Miałaś/eś też ${visit.value} wizyt w warsztacie w ostatnich dwóch latach.`
				infoFinal.textContent = 'Rozważ sprzedaż samochodu'
				model.value = ''
				year.value = ''
				mileage.value = ''
				visit.value = ''
				accident.value = 0
				spamAge.textContent = age
				error.classList.remove('actionerror')
			} else if (mileage.value > 150000 && visit.value >= 4 && accident.value === 'NIE') {
				info.textContent = `Mimo, że samochód nie miał poważnej kolizji i ma niewiele jeszcze bo ${age} lat. Jednakże ma duży przebieg: ${mileage.value} km i miałaś/eś też aż ${visit.value} wizyt w warsztacie w ostatnich dwóch latach.`
				infoFinal.textContent = 'Rozważ sprzedaż samochodu'
				model.value = ''
				year.value = ''
				mileage.value = ''
				visit.value = ''
				accident.value = 0
				spamAge.textContent = age
				error.classList.remove('actionerror')
			} else if (age > 10 && visit.value >= 4 && accident.value === 'NIE') {
				info.textContent = `Mimo, że samochód nie miał poważnej kolizji a także niewielki przebieg: ${mileage.value} km. Jednakże ma już ${age} lat i miałaś/eś aż ${visit.value} wizyt w warsztacie w ostatnich dwóch latach.`
				infoFinal.textContent = 'Rozważ sprzedaż samochodu'
				model.value = ''
				year.value = ''
				mileage.value = ''
				visit.value = ''
				accident.value = 0
				spamAge.textContent = age
				error.classList.remove('actionerror')
			} else if (visit.value >= 4 && accident.value === 'NIE') {
				info.textContent = `Mimo, że samochód nie miał poważnej kolizji i ma niewiele jeszcze bo ${age} lat a także niewielki przebieg: ${mileage.value} km. Jednakże miałaś/eś aż ${visit.value} wizyt w warsztacie w ostatnich dwóch latach.`
				infoFinal.textContent = 'Rozważ sprzedaż samochodu'
				model.value = ''
				year.value = ''
				mileage.value = ''
				visit.value = ''
				accident.value = 0
				spamAge.textContent = age
				error.classList.remove('actionerror')
			} else if (age > 10 && mileage.value > 150000 && accident.value === 'NIE') {
				info.textContent = `Mimo, że samochód nie miał poważnej kolizji a także niewiele bo tylko ${visit.value} wizyt w warsztacie w ostatnich dwóch latach. Jednakże ma już ${age} lat i duży przebieg: ${mileage.value} km.`
				infoFinal.textContent = 'Rozważ sprzedaż samochodu'
				model.value = ''
				year.value = ''
				mileage.value = ''
				visit.value = ''
				accident.value = 0
				spamAge.textContent = age
				error.classList.remove('actionerror')
			} else if (age > 10 && accident.value === 'NIE') {
				info.textContent = `Mimo, że samochód nie miał poważnej kolizji a także niewiele bo tylko ${visit.value} wizyt w warsztacie w ostatnich dwóch latach oraz nieduży jeszcze przebieg: ${mileage.value} km. Jednakże ma już ${age} lat.`
				infoFinal.textContent = 'Rozważ sprzedaż samochodu'
				model.value = ''
				year.value = ''
				mileage.value = ''
				visit.value = ''
				accident.value = 0
				spamAge.textContent = age
				error.classList.remove('actionerror')
			} else if (mileage.value > 150000 && accident.value === 'NIE') {
				info.textContent = `Mimo, że samochód nie miał poważnej kolizji i ma tylko ${age} lat a także niewiele bo tylko ${visit.value} wizyty w warsztacie w ostatnich dwóch latach. Jdnakże ma duży przebieg: ${mileage.value} km`
				infoFinal.textContent = 'Rozważ sprzedaż samochodu'
				model.value = ''
				year.value = ''
				mileage.value = ''
				visit.value = ''
				accident.value = 0
				spamAge.textContent = age
				error.classList.remove('actionerror')
			} else if (
				accident.value === 'NIE' &&
				model.value != '' &&
				year.value != '' &&
				mileage.value != '' &&
				visit.value != ''
			) {
				info.textContent = `Twój samochód ma tylko ${age} lat, nieduży przebieg: ${mileage.value} km. W ostatnich dwóch latach był w warsztacie tylko ${visit.value} razy. Nie miał też poważnej kolizji`
				infoFinal.style.color = 'Lightblue'
				infoFinal.textContent = 'Nie musisz sprzedawać samochodu'
				model.value = ''
				year.value = ''
				mileage.value = ''
				visit.value = ''
				accident.value = 0
				spamAge.textContent = age
				error.classList.remove('actionerror')
			}
		}
		show1()
	}
}

const car = new CarInfo(model.value, year.value, mileage.value, visit.value, accident.value)

const clean = () => {
	error.classList.remove('actionerror')
	model.value = ''
	year.value = ''
	mileage.value = ''
	visit.value = ''
	accident.value = 0
	spamBrand.textContent = ''
	spamYear.textContent = ''
	spamAge.textContent = ''
	spamMileage.textContent = ''
	spamVisit.textContent = ''
	spamAccident.textContent = ''
	info.textContent = ''
	infoFinal.textContent = ''
}

btnClear.addEventListener('click', clean)

btnAdvice.addEventListener('click', () => car.showInfoOne())
