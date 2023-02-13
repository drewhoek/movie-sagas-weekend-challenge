import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";

function MovieList() {
	const dispatch = useDispatch();
	const history = useHistory();
	const movies = useSelector((store) => store.movies);

	useEffect(() => {
		dispatch({ type: "FETCH_MOVIES" });
	}, []);

	return (
		<main>
			<Typography variant="h2" component="h2">
				MovieList
			</Typography>
			<section className="movies">
				{movies.map((movie) => {
					return (
						<div key={movie.id}>
							<h3>{movie.title}</h3>
							<img
								src={movie.poster}
								alt={movie.title}
								onClick={() => {
									dispatch({
										type: "FETCH_MOVIE_DETAILS",
										payload: { id: movie.id },
									});
									history.push(`/details/${movie.id}`);
								}}
							/>
						</div>
					);
				})}
			</section>
		</main>
	);
}

export default MovieList;
