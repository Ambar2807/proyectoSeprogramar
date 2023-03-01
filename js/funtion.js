window.addEventListener('load', () => {
    const data = fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => llenarCV(json))
})

function llenarCV(data) {
    const dataFiltrada = data.results[0]
    console.log(dataFiltrada)

    const foto = document.querySelector('#foto')
    foto.setAttribute('src', dataFiltrada.picture.medium)

    const nombreApellido = document.querySelector('#nombreApellido')
    const nombreCompleto = dataFiltrada.name.first + ' ' + dataFiltrada.name.last
    nombreApellido.innerHTML = nombreCompleto

    const sobreMi = document.querySelector('#sobremi')

    const fechaNacimiento = document.createElement('p')
    const date = new Date(dataFiltrada.dob.date)
    fechaNacimiento.innerHTML = '<b>Fecha nacimiento: </b>' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    sobreMi.appendChild(fechaNacimiento)

    const edad = document.createElement('p')
    edad.innerHTML = '<b>Edad: </b>' + dataFiltrada.dob.age + ' años'
    sobreMi.appendChild(edad)

    const contacto = document.querySelector('#contacto')

    const email = document.createElement('p')
    email.innerHTML = '<b>email: </b>' + dataFiltrada.email
    contacto.appendChild(email)

    const telefono = document.createElement('p')
    telefono.innerHTML = '<b>Telefono: </b>' + dataFiltrada.phone
    contacto.appendChild(telefono)
}


