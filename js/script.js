document.addEventListener('DOMContentLoaded', () => {
	const customersData = [
		{
			name: 'Jane Cooper',
			company: 'Microsoft',
			phone: '(225) 555-0118',
			email: 'jane@microsoft.com',
			country: 'United States',
			status: 'Active',
		},
		{
			name: 'Floyd Miles',
			company: 'Yahoo',
			phone: '(205) 555-0100',
			email: 'floyd@yahoo.com',
			country: 'Kiribati',
			status: 'Inactive',
		},
		{
			name: 'Ronald Richards',
			company: 'Adobe',
			phone: '(302) 555-0107',
			email: 'ronald@adobe.com',
			country: 'Israel',
			status: 'Inactive',
		},
		{
			name: 'Marvin McKinney',
			company: 'Tesla',
			phone: '(252) 555-0126',
			email: 'marvin@tesla.com',
			country: 'Iran',
			status: 'Active',
		},
		{
			name: 'Jerome Bell',
			company: 'Google',
			phone: '(629) 555-0129',
			email: 'jerome@google.com',
			country: 'Réunion',
			status: 'Active',
		},
		{
			name: 'Kathryn Murphy',
			company: 'Microsoft',
			phone: '(406) 555-0120',
			email: 'kathryn@microsoft.com',
			country: 'Curaçao',
			status: 'Active',
		},
		{
			name: 'Jacob Jones',
			company: 'Yahoo',
			phone: '(208) 555-0112',
			email: 'jacob@yahoo.com',
			country: 'Brazil',
			status: 'Active',
		},
		{
			name: 'Kristin Watson',
			company: 'Facebook',
			phone: '(704) 555-0127',
			email: 'kristin@facebook.com',
			country: 'Åland Islands',
			status: 'Inactive',
		},
	]

	const body = document.querySelector('body')

	const tableBody = document.querySelector('.customers__table tbody')
	const searchInput = document.querySelector('.customers__search-input')
	const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
	const sidebar = document.querySelector('.sidebar')

	function renderTable(data) {
		tableBody.innerHTML = ''
		data.forEach(customer => {
			const row = document.createElement('tr')
			row.innerHTML = `
                <td>${customer.name}</td>
                <td>${customer.company}</td>
                <td>${customer.phone}</td>
                <td>${customer.email}</td>
                <td>${customer.country}</td>
                <td><span class="customers__status customers__status--${customer.status.toLowerCase()}">${
				customer.status
			}</span></td>
            `
			tableBody.appendChild(row)
		})
	}

	renderTable(customersData)

	searchInput.addEventListener('input', e => {
		const searchTerm = e.target.value.toLowerCase()
		const filteredData = customersData.filter(customer =>
			Object.values(customer).some(value =>
				value.toLowerCase().includes(searchTerm)
			)
		)
		renderTable(filteredData)
	})

	function animateTableRows() {
		const rows = document.querySelectorAll('.customers__table tbody tr')

		rows.forEach((row, index) => {
			row.style.opacity = '0'
			row.style.transform = 'translateY(20px)'
			row.style.transition = 'opacity 0.3s ease, transform 0.3s ease'

			setTimeout(() => {
				row.style.opacity = '1'
				row.style.transform = 'translateY(0)'
			}, index * 100)
		})
	}

	animateTableRows()

	mobileMenuToggle.addEventListener('click', () => {
		body.classList.toggle('overflow-hidden-menu')
		sidebar.classList.toggle('active')
		mobileMenuToggle.classList.toggle('active')
		document.body.classList.toggle('menu-open')
	})

	document.addEventListener('click', e => {
		if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
			body.classList.remove('overflow-hidden-menu')
			sidebar.classList.remove('active')
			mobileMenuToggle.classList.remove('active')
			document.body.classList.remove('menu-open')
		}
	})
})
