export const GetData = async () => {
	const url = "https://jsonplaceholder.typicode.com/posts/1";
	try {
		const res = await fetch(url);
		const data = await res.json();
		//console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};
