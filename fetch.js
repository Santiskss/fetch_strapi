document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registerForm").addEventListener("submit", async function (event) {
        event.preventDefault(); // Evita que la página se recargue

        // Obtener los valores ingresados por el usuario
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        console.log("Datos a enviar:", { nombre, email, password }); // 🔍 Verifica en consola

        try {
            // Enviar datos a Strapi
            const response = await fetch("http://localhost:1337/api/usuarios", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    data: { nombre, email, password }
                })
            });

            const result = await response.json();
            console.log("Respuesta de Strapi:", result); // 🔍 Verifica la respuesta en consola

            if (result.data) {
                alert("Usuario registrado correctamente.");
            } else {
                alert("Error: " + result.error.message);
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            alert("Hubo un problema al conectar con el servidor.");
        }
    });
});
