import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MovieDetails() {
	const movieIdObject = useParams();
	console.log(movieIdObject);

	const movieDetails = useSelector((store) => store.movieDetails);

	return (
		<>
			<h2>Movie Details</h2>
			<section className="details">
				<img className="details-poster" src={movieDetails.poster} />
				<h3>{movieDetails.title}</h3>
				<p>{movieDetails.description}</p>
				<h4>Genres</h4>
				{console.log(movieDetails.jsonb_agg)}
				<ul>
					{movieDetails &&
						movieDetails.jsonb_agg.map((genre, index) => (
							<li key={index}>{genre}</li>
						))}
				</ul>
			</section>
		</>
	);
}
