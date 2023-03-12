import { useSelector } from "react-redux";
import {
	Box,
	Button,
	Container,
	List,
	ListItem,
	Paper,
	Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function MovieDetails() {
	const history = useHistory();

	// Access store to grab movie details
	const movieDetails = useSelector((store) => store.movieDetails);

	console.log("here are our genres for a the movie", movieDetails.jsonb_agg);

	return (
		<Box className="detail-container">
			<Paper className="detail-page">
				<Typography variant="h2" component="h3">
					Movie Details
				</Typography>
				<Container className="details">
					<img className="details-poster" src={movieDetails.poster} />
					<Typography variant="h3" component="h3">
						{movieDetails.title}
					</Typography>
					<p>{movieDetails.description}</p>
					<Typography component="h2" variant="h4">
						Genres
					</Typography>
					<Box className="list">
						<List>
							{movieDetails &&
								movieDetails.jsonb_agg &&
								Array.isArray(movieDetails.jsonb_agg) &&
								movieDetails.jsonb_agg.map((genre, index) => (
									<ListItem key={index}>{genre}</ListItem>
								))}
						</List>
					</Box>
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
			</Paper>
		</Box>
	);
}
