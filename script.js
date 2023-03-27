const counter = document.querySelector('.notification-counter')
let newNotifications
const allNotifications = document.querySelectorAll('.notification__item')
const readAllBtn = document.querySelector('.readAll')

const checkNotifications = params => {
	newNotifications = document.querySelectorAll('.new')
	counter.innerHTML = newNotifications.length
	if (newNotifications.length === 0) {
		counter.classList.remove('show')
	} else {
		counter.classList.add('show')
	}
}

const readAllHandler = () => {
	newNotifications.forEach(notification => notification.classList.remove('new'))
	checkNotifications()
}
const notificationStatusHandler = e => {
	e.target.closest('.notification__item').classList.remove('new')
	checkNotifications()
}

readAllBtn.addEventListener('click', readAllHandler)
allNotifications.forEach(notification => notification.addEventListener('click', notificationStatusHandler))

checkNotifications()
