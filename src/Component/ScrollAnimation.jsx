import { useEffect, useState, useRef } from "react";

export const ScrollAnimation = () => {
	const [background, setBackground] = useState("pink");
	const DivRef = useRef();

	useEffect(() => {
		// creamos una funcion para controlar el scrol
		const handleScroll = () => {
      const div = DivRef.current;
      // "revisamo si funciona"
			console.log("hizo scrol");
			// comprovemos si esta bien la referencia
      console.log(div);
      
      // revisar el metodo q nos da el alto ancho y posicion
      console.log(div.getBoundingClientRect())
      // Y es el inicion ejemplo va hacer 0 y va ser negativo cuando baje
      const {y} = div.getBoundingClientRect()
      console.log(y)
      
      // cambiar color
      const backgroundColor = y <= 0 ? "orange" : "pink"
      setBackground(backgroundColor)
    
    };

		// escuchar el evento de la ventana
		window.addEventListener("scroll", handleScroll);

		// remover el evento
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<h4>Scroll Animation</h4>
			<div ref={DivRef} style={{ height: "180vh", background: background }}>
				<h5>Scroll cambiar el color de Fondo </h5>
			</div>
		</>
	);
};
