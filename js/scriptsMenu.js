function cargarContenido(opcion) {
    fetch(`${opcion}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar ${opcion}.html`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('contenido').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
