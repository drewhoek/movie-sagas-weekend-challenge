import { useParams } from "react-router-dom";

export default function MovieDetails() {
	const movieIdObject = useParams();
	console.log(movieIdObject);

	return (
		<>
			<h2>Movie Details</h2>
			<section className="details">
				This is the movie ID: {movieIdObject.id}
			</section>
		</>
	);
}
