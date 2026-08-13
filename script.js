document.addEventListener('DOMContentLoaded', () => {
    const htmlRoot = document.getElementById('html-root');
    const btnIncrease = document.getElementById('btn-increase');
    const btnDecrease = document.getElementById('btn-decrease');
    const btnContrast = document.getElementById('btn-contrast');

    let currentSize = 16; // Tamanho base em pixels

    // Aumentar Fonte
    btnIncrease.addEventListener('click', () => {
        if (currentSize < 22) {
            currentSize += 2;
            document.body.style.fontSize = `${currentSize}px`;
        }
    });

    // Diminuir Fonte
    btnDecrease.addEventListener('click', () => {
        if (currentSize > 12) {
            currentSize -= 2;
            document.body.style.fontSize = `${currentSize}px`;
        }
    });

    // Alternar Alto Contraste
    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });
});
