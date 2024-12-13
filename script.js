// Función para abrir una ventana emergente y mostrar un archivo PDF

    // Seleccionar el botón y su enlace interno
    const button = document.getElementById('closeIntroBtn');
    const link = button.querySelector('a.MiPopup');

    // Asignar evento de click al botón
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar cualquier comportamiento estándar del enlace
        openPdfInPopup(link.href); // Abrir el archivo PDF en el visor de la ventana emergente
    });

    // Función para abrir una ventana emergente y mostrar un archivo PDF
function openPdfInPopup(url) {
    const popupWidth = 640;
    const popupHeight = 480;

    // Cálculo para centrar la ventana emergente
    const left = (window.innerWidth - popupWidth) / 2 + window.screenX;
    const top = (window.innerHeight - popupHeight) / 2 + window.screenY;

    // Crear la ventana emergente con el visor de PDF
    const popup = window.open(
        '', // Título vacío
        '', // Usamos un nombre vacío para que no se sobreescriba ninguna ventana existente
        `width=${popupWidth},height=${popupHeight},top=${top},left=${left},scrollbars=yes,resizable=no`
    );

   
    // Validar que la ventana emergente fue creada exitosamente
    if (popup) {
        // Crear un iframe para evitar problemas de interpretación literal de HTML
        popup.document.write(`
           <html>
            <head>
                <title>Visor PDF</title>
            </head>
            <body style="margin: 0; display: flex; justify-content: center; align-items: center; height: 100%; background-color: #f0f0f0;">
                <embed src="${url}" type="application/pdf" width="100%" height="100%" />
            </body>
        </html>
        `);
        popup.document.close();// Asegurarse de que el contenido se renderice 
    } else {
        //alert("No se pudo abrir la ventana emergente. Verifica que los popups no estén bloqueados.");
        if (!window.__alertDisplayed) {
            alert("No se pudo abrir la ventana emergente. Verifica que los popups no estén bloqueados.");
            window.__alertDisplayed = true; // Evitar mostrar múltiples alertas
        }
    }

    // Seleccionar el botón y su enlace interno
    const button = document.getElementById('closeIntroBtn');
    const link = button.querySelector('a.MiPopup');

    // Asignar evento de click al botón
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar cualquier comportamiento estándar del enlace
        openPdfInPopup(link.href); // Abrir el archivo PDF en el visor de la ventana emergente
    });

}
