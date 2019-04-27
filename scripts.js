function iniciarSesion(usuario) {
  localStorage.setItem("usuario", usuario);
}

function registrarUsuario() {
  if (document.getElementById("user").value.length > 0) {
  const pass = document.getElementById("password1").value;
  if (document.getElementById("password2").value === pass) {
    let usuarios = localStorage.getItem("usuarios");
    const correo = document.getElementById("user").value.toLowerCase();
    let usuarioNuevo = {
      usuario: correo, clave: pass
    };
    if (usuarios === null) {
      localStorage.setItem("usuarios", JSON.stringify({usersArray: [usuarioNuevo]}));
      iniciarSesion(correo);
      return true;
    } else {
      let arregloUsuarios = JSON.parse(localStorage.getItem("usuarios")).usersArray;
      arregloUsuarios.push(usuarioNuevo);
      localStorage.setItem("usuarios", JSON.stringify({usersArray: arregloUsuarios}));
    }
  } else {
    document.getElementsByClassName("error")[0].classList.remove("ocultar");
    return false;
  }
 } else {
   document.getElementsByClassName("error")[1].classList.remove("ocultar");
   return false;
 }
}