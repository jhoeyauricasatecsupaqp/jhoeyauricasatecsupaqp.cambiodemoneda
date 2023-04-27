function calcularCambio() {
	const monto = document.getElementById("monto").value;
	const moneda = document.querySelector('input[name="moneda"]:checked').value;
	const cambio = document.querySelector('input[name="cambio"]:checked').value;
	let resultado;

	if (moneda == "soles") {
		if (cambio == "soles") {
			resultado = monto;
		} else if (cambio == "dolares") {
			resultado = monto / 3.8;
		} else if (cambio == "euros") {
			resultado = monto / 4.0;
		}
	} else if (moneda == "dolares") {
		if (cambio == "soles") {
			resultado = monto * 3.8;
		} else if (cambio == "dolares") {
			resultado = monto;
		} else if (cambio == "euros") {
			resultado = monto * 0.91;
		}
	} else if (moneda == "euros") {
		if (cambio == "soles") {
			resultado = monto * 4.0;
		} else if (cambio == "dolares") {
			resultado = monto / 0.91;
		} else if (cambio == "euros") {
			resultado = monto;
		}
	}

	document.getElementById("resultado").innerHTML = resultado;
}