const obtenerPersonaFake = require("./library");


obtenerPersonaFake().then(persona => persona.results.forEach(element => {


    //console.log(element.location);
    //console.log(element);

    console.log("Nombre: " +element.name.first);
    console.log("Apellido: " +element.name.last);
    console.log("Domicilio: " +element.location.country + ", " + element.location.state + 
    ", " + element.location.city + ", " +element.location.street.name + " " + element.location.street.number
    + ", " + element.location.postcode );
    console.log("Email: " +element.email);
    console.log("Usuario: " +element.login.username + " y contraseña: " + element.login.password);
})
);