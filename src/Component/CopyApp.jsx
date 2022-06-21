import { useState, useRef } from "react";

export const CopyApp = () => {
	const [text, settext] = useState("Hola");
	const imputRef = useRef();
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = () => {
		const imput = imputRef.current;

		// selecionar el texto
		imput.select();
		console.log(imput);

		// una vez selecionado procedemos a copiar
		document.execCommand("copy");

		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 1000);
	};
	return (
		<>
			<h4>CopyApp</h4>
			<input
				text="text"
				ref={imputRef}
				value={text}
				onChange={(e) => settext(e.target.value)}
			/>
			<button onClick={handleCopy}>Copy</button>
			{isCopied && <p>Copied</p>}
		</>
	);
};
