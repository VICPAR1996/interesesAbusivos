var options = document.getElementById("options")
var intereses = document.getElementById("intereses")
var fecha = document.getElementById("fecha")

switch(options.value){
    case "1":
        var options1 = document.getElementById("options1")
        break;
    case "2":
        var options2 = document.getElementById("options2")
        break;
    case "3":
        var options3 = document.getElementById("options3")
        break;
}

var form = document.getElementById("abusiveForm");
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(intereses.value)
    console.log(fecha.value)

    form.innerHTML = "HOLA"
})


function getResourceFromAPI(credit_id, purpose_id, country_id, year_number, month_number){
    fetch('https://dashboard.heroku.com/apps/creditos-usuararios/'.concat(credit_id, "/", purpose_id, "/", country_id, "/", year_number, "/", month_number))
      .then(response => response.json())
      .then(json => console.log(json))
}
