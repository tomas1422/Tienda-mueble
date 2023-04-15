const contenedorPresentacionHTML = document.getElementById("contenedorPresentacion")
fetch("./database/vendedores.json")
    .then(response => response.json())
    .then(vendedores =>{
        for(const vendedor of vendedores){
            contenedorPresentacionHTML.innerHTML += `
            <div class = "card">
                <div class="cardImg">
                    <img src=${vendedor.url}>
                </div>
                <p>${vendedor.name} ${vendedor.lastName}</p>
                <p>Edad: ${vendedor.years} </p>
                <p>Posición: ${vendedor.work} </p>
                <p>Cargo: ${vendedor.section} </p>
                <p>Pasion: Jugar Futbol</p>
            </div>
            `
        }
    }) 