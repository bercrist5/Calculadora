let btnIgual_presionado = 0;

//referenciamos todos los botones sacando delete, y CL

let button_input = document.querySelectorAll(".btns");

//referenciamos el display, boton igual y delete

let input_display = document.getElementById("txtDisplay");
let equal_button = document.getElementById("bntigual");
let delete_button = document.getElementById("bntdelete");
let clear = document.getElementById("btnclear");

window.onload = () => {
	input_display.value = "";
}

//accedemos a cada boton .btns usando un foreach
button_input.forEach((button_class) => {
	button_class.addEventListener("click", () => {
		if (btnIgual_presionado == 1) {
			input_display.value = "";
			btnIgual_presionado = 0;
		}
		else {
			input_display.value += button_class.value;
		}
	});
});


//resolvemos lo que esta en el input cuando se presione el boton igual
equal_button.addEventListener("click", () => {
	btnIgual_presionado = 1;
	let inp_val = input_display.value;

	try {
		//evaliuamos la operacion del display
		let solution = eval(inp_val)

		//verdadero para numeros naturales
		// falso para decimales

		if (Number.isInteger(solution)) {
			input_display.value = solution
		}
		else {
			input_display.value = solution.toFixed(2)
		}


	} catch (err) {
		alert("Entrada invalida")
	}
});

//limpiar todo el display

clear.addEventListener("click", ()=>{
	input_display.value="";
})


//borrar ultimo digito

delete_button.addEventListener("click", ()=>{
	input_display.value= input_display.value.substr(0, input_display.value.length-1)
})
