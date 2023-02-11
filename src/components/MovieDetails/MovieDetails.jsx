import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MovieDetails() {
	const movieIdObject = useParams();
	console.log(movieIdObject);

	const movieDetails = useSelector((store) => store.MovieDetails);

	console.log(
		`here are our movie details at id: ${movieIdObject.id}:`,
		movieDetails
	);

	return (
		<>
			<h2>Movie Details</h2>
			<section className="details">
				This is the movie ID: {movieIdObject.id}
			</section>
		</>
	);
}
