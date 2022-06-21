import { useState, useEffect, useRef } from "react";

export const RenderApp = () => {
	const [text, setText] = useState("");
	const renderRef = useRef(1); //#1 render = 1
	// sino le asignamos nada va hacer undefinded recomendado iniciar en uno

	useEffect(() => {
		// render 1 ref = 2 el dos no lo veremos hasta la nueva renderizacion q es 3
		// render 1 ref = 3 el dos no lo veremos hasta la nueva renderizacion q es 4
		const render = renderRef.current++;
		console.log(render);
	});

	return (
		<>
			<h4>RenderApp</h4>
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			{/* render 1 ref=1 eso se pinta el uno en pantalla */}
			{/* render 1 ref=2 eso se pinta el uno en pantalla */}
			<p>Renders: {renderRef.current} </p>
		</>
	);
};
