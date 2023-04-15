const formularioReg = document.getElementById("formularioReg")
const cliente = []
const contenedorConsultasHTML = document.querySelector(".contenedorConsultas")
const submitForm = document.getElementById("submitForm")


formularioReg.addEventListener("submit",(event) =>{
    event.preventDefault()
    cliente.push({
        nombre: formularioReg.nombre.value,
        asunto: formularioReg.asunto.value,
        email: formularioReg.email.value,
        telefono: formularioReg.tel.value,
        mensaje: formularioReg.mensaje.value,
    })
    renderizarConsultas()
    console.log(cliente.nombre)
    formularioReg.reset()
})

const renderizarConsultas = () => {
    contenedorConsultasHTML.innerHTML = ""
    for(const consultas of cliente){
        contenedorConsultasHTML.innerHTML += `
        <div class = "card-consultas">
            <h2>Nombre: ${consultas.nombre}</h2>
            <p>Asunto: ${consultas.asunto}</p>
            <p>Email: ${consultas.email}</p>
            <p>Mensaje: ${consultas.mensaje}</p>
        </div>
        `
    }
 }

 submitForm.addEventListener("click",() => {
    Swal.fire(
        'Muchas gracias!',
        'Realizo la consulta con exito'
      )
 })