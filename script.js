document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleção dos elementos no DOM
    const btnIncrease = document.getElementById('btn-increase');
    const btnDecrease = document.getElementById('btn-decrease');
    const btnContrast = document.getElementById('btn-contrast');

    let currentSize = 16; // Tamanho base da fonte em pixels

    // 2. Aumentar Fonte (com verificação de segurança)
    if (btnIncrease) {
        btnIncrease.addEventListener('click', () => {
            if (currentSize < 22) {
                currentSize += 2;
                document.body.style.fontSize = `${currentSize}px`;
            }
        });
    }

    // 3. Diminuir Fonte (com verificação de segurança)
    if (btnDecrease) {
        btnDecrease.addEventListener('click', () => {
            if (currentSize > 12) {
                currentSize -= 2;
                document.body.style.fontSize = `${currentSize}px`;
            }
        });
    }

    // 4. Alternar Alto Contraste (com verificação de segurança)
    if (btnContrast) {
        btnContrast.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
        });
    }
});
