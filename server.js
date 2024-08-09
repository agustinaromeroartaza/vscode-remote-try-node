/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Función cuadrado de un número
const cuadrado = (n) => {
	return n * n;
}

// App
const app = express();
app.get('/', (req, res) => {
	const numero = 4; // Puedes cambiar este número según necesites
	const resultado = cuadrado(numero);
	res.send(`Hello remote world!\nEl resultado del cuadrado es: ${resultado}`);
});

// Iniciar el servidor solo si el archivo es ejecutado directamente
if (require.main === module) {
	app.listen(PORT, HOST);
	console.log(`Running on http://${HOST}:${PORT}`);
}

// Exportar la función para usarla en las pruebas
module.exports = {
	cuadrado
};
