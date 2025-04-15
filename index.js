const basic = document.querySelector(".basic");
const professional = document.querySelector(".professional");
const master = document.querySelector(".master");
const checkbox = document.getElementById("checkbox");

const Moneda={
    dolar: "$",
}

const PreciosAnuales ={
    basic: 199.99,
    professional:249.99 ,
    master: 399.99
}

const PreciosMensuales = {
    basic: 19.99,
    professional: 24.99,
    master: 39.99
}

function actualizarPrecios(){
    if (checkbox.checked) {
       basic.innerHTML= `<span class="signo">${Moneda.dolar}</span>${PreciosAnuales.basic}`;
       professional.innerHTML = `<span class="signo">${Moneda.dolar}</span>${PreciosAnuales.professional}`;
       master.innerHTML =`<span class="signo">${Moneda.dolar}</span>${PreciosAnuales.master}`
    }else{
      basic.innerHTML =`<span class="signo">${Moneda.dolar}</span>${PreciosMensuales.basic}`; 
      professional.innerHTML = `<span class="signo">${Moneda.dolar}</span>${PreciosMensuales.professional}`;
      master.innerHTML = `<span class="signo">${Moneda.dolar}</span>${PreciosMensuales.master}`;
    }
}
checkbox.addEventListener("change", actualizarPrecios);
actualizarPrecios();