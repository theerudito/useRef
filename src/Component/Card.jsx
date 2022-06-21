import { useEffect, useRef, useState } from "react";
import { GetData } from "../Helpers/GetApi";

export const Card = () => {
	const [post, setPost] = useState({ title: "pos1" });
	const [loading, setLoading] = useState(true);
	const postRef = useRef(true);

	const updatePost = async () => {
		let newPost = await GetData();
		setTimeout(() => {
			if (postRef.current) {
				setPost(newPost);
				setLoading(false);
			}
		}, 2000);
	};

	useEffect(() => {
		updatePost();
		// vamos a desmontar el component
		return () => {
			postRef.current = false;
		};
	}, []);

	if (loading) return <p>Cargado...</p>;

	return <> {<p>{post.title} </p>}</>;
};
