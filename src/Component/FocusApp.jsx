import { useState, useRef } from "react";

export const FocusApp = () => {
	const [text, setText] = useState("");
	const imputRef = useRef();
	// useRef podemos enviarle un valor o no pero
	//como vamos a interactuar con el dom no es necesario
	const handleFocus = () => {
		const imput = imputRef.current;
		// imprimimo lo que tiene la referencia
		console.log(imput);
		// luego accedemos a su metodos
		console.log(imputRef.current.value);
		// mutar el estado no es recomendado
		//imputRef.current.value = "hola"
		imput.focus();
	};
	return (
		<>
			<h3>Focus App</h3>
			<input
				ref={imputRef}
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={handleFocus}>Focus</button>
		</>
	);
};
