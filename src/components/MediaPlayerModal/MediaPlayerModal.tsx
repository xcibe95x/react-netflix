import { FC } from 'react';
import { Genre, Movie } from '../../Interfaces';
import styles from './MediaPlayerModal.module.css';

export const MediaPlayerModal: FC<{movie: Movie | null}> = ({movie}) => {

  // API CALL

  return (

    <div className={styles.mediaPlayer}>
      <img className={styles.mPlayerImage} src={movie?.backdrop_path} />
      <div className={styles.mPlayerContainer}>
        <span className={styles.cardPlay}></span>
        <span className={styles.cardAdd}></span>
        <span className={styles.cardLike}></span>
        <span className={styles.cardMore}><i className="fa-regular fa-chevron-down"></i></span>
      </div>
      <div className={styles.mPlayerContainer}>
        <span className={styles.compatible}>98% compatible<span className={styles.vm14}>VM14</span><span></span></span>
      </div>
      <div className={`${styles.genre} ${styles.compatible}`}>
      <span>Genere</span>
      <span>Genere</span>
      <span>Genere</span>
      </div>
    </div>

  )
}
