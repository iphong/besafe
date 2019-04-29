export const announcements = JSON.parse(localStorage.getItem('besafe-messages') || '[]')
function saveItems() {
	localStorage.setItem('besafe-messages', JSON.stringify(announcements))
}
export function addAnnouncement(title, message) {
	const date = new Date()
	announcements.push({ date: date.toDateString(), time: date.toTimeString().split(' ')[0], title, message })
	saveItems()
}