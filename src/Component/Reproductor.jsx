import { useRef, useState } from "react";

export const ReproductorApp = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const videoRef = useRef();

	const handlePlay = () => {
		const video = videoRef.current;

		isPlaying ? video.pause() : video.play();
		setIsPlaying(!isPlaying);
	};

	return (
		<>
			<h4>ReproductorApp</h4>
			<video
				width="400"
				ref={videoRef}
				controls
				src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Medias%2FVideos%2FPete%20Bellis%20%26%20Tommy%20-%20You%20Should%20Know%20(Costa%20Mee%20Remix).mp4?alt=media&token=c1348dc4-ba43-4af5-9f65-1880584b7dd1"
				type="video/mp4"
				// muted
				poster="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Mis%20Images%20Page%2Fapimongo.jpg?alt=media&token=5ff09240-b05b-4030-981e-7cb786254d8b"
				onClick={handlePlay}></video>
			{/* <button onClick={handlePlay}>{isPlaying ? "Pause" : "Play"} </button> */}
		</>
	);
};
