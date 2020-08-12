var socket = io();


socket.on("connect", function () {
    console.log("Conectado al servidor")
})


socket.on("disconnect", function () {
    console.log("Perdimos conexión con el servidor")
})


socket.emit("enviarMensaje", {
    usuario: "Miguel",
    mensaje: "Sabelo Pelo"
}, function(resp){
    console.log("Servidor: ", resp)
});

socket.on("enviarMensaje", function (mensaje) {
    console.log(mensaje);


})
