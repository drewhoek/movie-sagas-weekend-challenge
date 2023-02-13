import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
export default function MovieDetails() {
	const movieIdObject = useParams();
	const history = useHistory();

	console.log(movieIdObject);

	const movieDetails = useSelector((store) => store.movieDetails);

	console.log("here are our genres for a the movie", movieDetails.jsonb_agg);

	if (movieDetails) {
		return (
			<Container className="detail-page">
				<Typography variant="h2" component="h3">
					Movie Details
				</Typography>
				<Container className="details">
					<img className="details-poster" src={movieDetails.poster} />
					<h3>{movieDetails.title}</h3>
					<p>{movieDetails.description}</p>
					<h4>Genres</h4>
					<ul>
						{movieDetails &&
							movieDetails.jsonb_agg &&
							Array.isArray(movieDetails.jsonb_agg) &&
							movieDetails.jsonb_agg.map((genre, index) => (
								<li key={index}>{genre}</li>
							))}
					</ul>
				</Container>
				<Button
					className="home"
					variant="contained"
					onClick={() => {
						history.push("/");
					}}
				>
					Go Back Home
				</Button>
			</Container>
		);
	}
}
