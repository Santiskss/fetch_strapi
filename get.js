async function obtenerUsuarios() {
    try {
        const response = await fetch("http://localhost:1337/api/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const users = await response.json();
        console.log("Usuarios recuperados de Strapi:\n");

        users.forEach(user => {
            console.log(`ID: ${user.id}`);
            console.log(`Nombre: ${user.name}`);
            console.log(`Email: ${user.email}`);
            console.log("-------------------------");
        });

    } catch (error) {
        console.error("Error al recuperar usuarios:", error);
    }
}

// Ejecutar la función
obtenerUsuarios();
