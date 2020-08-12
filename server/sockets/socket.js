const {io} = require("../server");


 
  io.on("connection", (client) => {
    console.log("USUARIO CONECTADO");

    client.emit("enviarMensaje", { usuario: "Admin", mensaje: "Bienvenido a esta aplicación." });

    client.on("disconnect", () => {
      console.log("Usuario desconectado");
    });

    client.on("enviarMensaje", (data, callback) => {
      console.log(data);


      client.broadcast.emit("enviarMensaje", data)

    //   if(mensaje.usuario){
    //       callback({resp:"TODO SALIO BIEN!"})
    //   }else{
    //       callback({resp:"todos salio MAL!"})
    //   }
    });
  });