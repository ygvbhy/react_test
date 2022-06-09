import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import Movie from "../components/Movie";

function Detail() {
    const [loading, setLoading] = useState(true)
    const [movieDetail, setMovieDetail] = useState([])
    const { id } = useParams()
    const getMovie = async () => {
        const json = await (
            await fetch('https://yts.mx/api/v2/movie_details.json?movie_id=' + id)
        ).json()
        setMovieDetail(json.data.movie)
        setLoading(false)
    }
    useEffect(() => {
        getMovie()
    }, [])
    return (
        <div>
            { loading ? <h1>Loading...</h1> : (
                <div>
                    <Movie
                        coverImg={movieDetail.medium_cover_image}
                        id={movieDetail.id}
                        title={movieDetail.title_long}
                        summary={movieDetail.description_full}
                        genres={movieDetail.genres}
                    />
                </div>
            )}
        </div>
    )
}

export default Detail