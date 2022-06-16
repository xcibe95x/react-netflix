import styles from './MovieCard.module.css';
import { Movie } from '../../Interfaces';
import { POSTER_API } from '../../api';
import { useMovieLogo } from '../../useMovieLogo';

export const MovieCard: React.FC<{movie: Movie, showLogo: boolean}> = ({movie, showLogo}) => {

    const logoPath = useMovieLogo(movie.id);

    if (movie.backdrop_path) {

        return (
            <div className={styles.movieCard}>
                {movie.vote_average > 7.8 && <span className={styles.topTen}></span>}
                {showLogo && <img src={logoPath} className={styles.movieLogo}></img>}
                <img src={POSTER_API + (showLogo ? movie.backdrop_path : movie.poster_path)} alt={movie.title}></img>
            </div>
    ) 
    } else return <></>
}
