import styles from './MovieCard.module.css';
import { Movie } from '../../Interfaces';
import { POSTER_API } from '../../api';

export const MovieCard: React.FC<{movie: Movie, showLogo: boolean}> = ({movie, showLogo}) => {

  return (

    <div className={styles.movieCard}>
        {/* <span class="top-ten"></span> */}
        {showLogo && <img src="https://image.tmdb.org/t/p/original/vkS6WVlzH4QZCw0fS1O73inWCMm.png" className={styles.movieLogo}></img>}
        <img src={POSTER_API + (showLogo ? movie.backdrop_path : movie.poster_path)} alt={movie.title}></img>
    </div>

  )
}
