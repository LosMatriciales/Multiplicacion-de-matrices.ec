function parseMatrix(text) {
    try {
        return JSON.parse(text);
    } catch (e) {
        alert("Error en el formato de la matriz. Asegúrate de seguir las instrucciones.");
        return null;
    }
}

function multiplyMatrices() {
    const matrixAText = document.getElementById("matrixA").value;
    const matrixBText = document.getElementById("matrixB").value;

    const matrixA = parseMatrix(matrixAText);
    const matrixB = parseMatrix(matrixBText);

    if (!matrixA || !matrixB) return;

    if (matrixA[0].length !== matrixB.length) {
        alert("El número de columnas de la matriz A debe ser igual al número de filas de la matriz B.");
        return;
    }

    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrixA[0].length; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            result[i][j] = sum;
        }
    }

    document.getElementById("resultado").textContent = JSON.stringify(result);
}





