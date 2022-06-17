import styles from './TopTenCard.module.css';
import cardStyles from '../MovieCard/MovieCard.module.css';

export const TopTenCard = () => {

  return (
    <div className={`${cardStyles.movieCard} ${styles.topTenCard}`}>
        <span className={styles.topTenNumber}>1</span>
        <img src="https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"></img>
    </div>
  )

}
