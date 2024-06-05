document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registerForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Accede a los campos del formulario
      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var birthPlace = document.getElementById("birth-place").value;
      var birthDate = document.querySelector(".birth-place").value;
      var billingAddress = document.getElementById("billing-address").value;
      var DNI = document.getElementById("DNI").value;
      var gender = document.getElementById("gender").value;
      var email = document.getElementById("email").value;
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
  
  
      if (username.length < 6 || username.length > 25) {
        alert("El nombre de usuario debe tener entre 6 y 25 caracteres");
        return;
      }
  
      if (password.length < 8 || password.length > 30) {
        alert("La contraseña debe tener entre 8 y 30 caracteres");
        return;
      }
  
      console.log("Datos del formulario de registro:");
      console.log("Nombre:", firstName);
      console.log("Apellido:", lastName);
      console.log("Lugar de nacimiento:", birthPlace);
      console.log("Fecha de nacimiento:", birthDate);
      console.log("Dirección de facturación:", billingAddress);
      console.log("DNI:", DNI);
      console.log("Género:", gender);
      console.log("Correo electrónico:", email);
      console.log("Usuario:", username);
      console.log("Contraseña:", password);
  
      alert("¡Registro exitoso! Datos enviados al servidor");
    });

  });