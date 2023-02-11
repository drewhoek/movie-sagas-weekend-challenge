import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { useHistory } from "react-router-dom";

function MovieList() {
	const dispatch = useDispatch();
	const history = useHistory();
	const movies = useSelector((store) => store.movies);

	useEffect(() => {
		dispatch({ type: "FETCH_MOVIES" });
	}, []);

	// function goToDetails(movie) {
	// 	console.log("in goToDetails for movie at id:", movie.id);
	// 	history.push(`/details/${movie.id}`);
	// 	dispatch({
	// 		type: "FETCH_MOVIE_DETAILS",
	// 		payload: movie,
	// 	});
	// }

	return (
		<main>
			<h1>MovieList</h1>
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
