import { useRef, useState } from "react";

export const CopyApp = () => {
	const [text, setText] = useState("");
	const inputRef = useRef();
	const [isCopy, setIsCopy] = useState(false);

	const handleCopy = () => {
		const input = inputRef.current;

		console.log(input);
		input.select();

		document.execCommand("copy");

		setIsCopy(true);
		setText("");
		setTimeout(() => {
			setIsCopy(false);
		}, 1000);
	};

	return (
		<>
			<h4>CopyApp</h4>

			<input
				ref={inputRef}
				text="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={handleCopy}>Copy</button>
			{isCopy && <p>Copied</p>}
		</>
	);
};
