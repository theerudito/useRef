import { useRef, useState } from "react";

export const ReproductorVideo = () => {
	const videoRef = useRef();
	const [isPlaying, setIsPlaying] = useState(false);

	const handlePlay = () => {
		const video = videoRef.current;
		console.log(video);

		isPlaying ? video.pause() : video.play();
		setIsPlaying(!isPlaying);
	};

	return (
		<>
			<h4>Reproductor Video</h4>
			<video width="400" ref={videoRef} onClick={handlePlay}>
				<source src="videos/video.mp4" type="video/mp4" />
			</video>
			<button onClick={handlePlay}>{isPlaying ? "Pause" : "Play"} </button>
		</>
	);
};
