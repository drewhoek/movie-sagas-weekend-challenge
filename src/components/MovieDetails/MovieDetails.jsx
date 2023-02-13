import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useState } from "react";
export default function MovieDetails() {
	const movieIdObject = useParams();
	const history = useHistory();

	console.log(movieIdObject);

	const movieDetails = useSelector((store) => store.movieDetails);

	console.log("here are our genres for a the movie", movieDetails.jsonb_agg);

	if (movieDetails) {
		return (
			<>
				<Typography variant="h2" component="h3">
					Movie Details
				</Typography>
				<section className="details">
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
				</section>
				<Button
					className="home"
					variant="contained"
					onClick={() => {
						history.push("/");
					}}
				>
					Go Back Home
				</Button>
			</>
		);
	}
}
