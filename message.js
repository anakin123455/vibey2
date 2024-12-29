document.addEventListener("DOMContentLoaded", function () {
    // Tworzenie elementów modala
    const modalOverlay = document.createElement("div");
    modalOverlay.id = "modalOverlay";
    modalOverlay.style.position = "fixed";
    modalOverlay.style.top = "0";
    modalOverlay.style.left = "0";
    modalOverlay.style.width = "100%";
    modalOverlay.style.height = "100%";
    modalOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modalOverlay.style.display = "flex";
    modalOverlay.style.justifyContent = "center";
    modalOverlay.style.alignItems = "center";
    modalOverlay.style.zIndex = "1000";

    const modalBox = document.createElement("div");
    modalBox.style.backgroundColor = "#fff";
    modalBox.style.padding = "20px";
    modalBox.style.borderRadius = "10px";
    modalBox.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    modalBox.style.textAlign = "center";
    modalBox.style.maxWidth = "400px";
    modalBox.style.width = "80%";

    const modalMessage = document.createElement("p");
    modalMessage.textContent = "N.I to kurwa";
    modalMessage.style.marginBottom = "20px";
    modalMessage.style.fontSize = "16px";
    modalMessage.style.color = "#333";

    const closeButton = document.createElement("button");
    closeButton.textContent = "Potwierdź";
    closeButton.style.backgroundColor = "black";
    closeButton.style.color = "#fff";
    closeButton.style.border = "none";
    closeButton.style.padding = "10px 20px";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";
    closeButton.style.fontSize = "14px";

    closeButton.addEventListener("click", function () {
        modalOverlay.remove();
    });

    // Dodanie elementów do drzewa DOM
    modalBox.appendChild(modalMessage);
    modalBox.appendChild(closeButton);
    modalOverlay.appendChild(modalBox);
    document.body.appendChild(modalOverlay);
});
