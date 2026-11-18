document.addEventListener("DOMContentLoaded", () => {

    const imagenGrande = document.getElementById("imagenPrincipal");
    const listaMiniaturas = document.querySelectorAll(".miniatura-galeria");

    if (imagenGrande && listaMiniaturas.length > 0) {
        listaMiniaturas.forEach(miniatura => {
            miniatura.addEventListener("click", () => {
                const rutaAltaRes = miniatura.getAttribute("data-alta-resolucion");

                if (rutaAltaRes && imagenGrande.src !== rutaAltaRes) {
                    imagenGrande.style.opacity = "0";
                    imagenGrande.style.transform = "scale(0.98)";

                    setTimeout(() => {
                        imagenGrande.src = rutaAltaRes;

                        imagenGrande.style.opacity = "1";
                        imagenGrande.style.transform = "scale(1)";
                    }, 200);
                }
            });
        });
    }

    const modalAnimacion = document.getElementById("animationModal");
    const videoReel = document.getElementById("reelVideo");

    if (modalAnimacion && videoReel) {
        modalAnimacion.addEventListener("shown.bs.modal", () => {
            videoReel.play().catch(error => {
                console.log("La reproducción automática del vídeo fue bloqueada:", error);
            });
        });

        modalAnimacion.addEventListener("hide.bs.modal", () => {
            videoReel.pause();
            videoReel.currentTime = 0;
        });
    }

    const audioAmbiental = document.getElementById("ambientAudio");
    const botonAlternarAudio = document.getElementById("audioToggleBtn");

    if (audioAmbiental && botonAlternarAudio) {
        botonAlternarAudio.addEventListener("click", () => {
            if (audioAmbiental.paused) {
                audioAmbiental.play().then(() => {
                    botonAlternarAudio.textContent = "Pausar ambiente espacial";
                }).catch(error => {
                    console.log("La reproducción del audio fue bloqueada por el navegador:", error);
                });
            } else {
                audioAmbiental.pause();
                botonAlternarAudio.textContent = "Escuchar ambiente espacial";
            }
        });
    }
});