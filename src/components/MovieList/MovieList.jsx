import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { useHistory } from "react-router-dom";
import { Box, Paper, Typography } from "@material-ui/core";

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
			<Box className="moviesContainer">
				{movies.map((movie) => {
					return (
						<Paper className="movies" key={movie.id} elevation={3}>
							<Typography variant="h4" component="h3">
								{movie.title}
							</Typography>
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
						</Paper>
					);
				})}
			</Box>
		</main>
	);
}

export default MovieList;
