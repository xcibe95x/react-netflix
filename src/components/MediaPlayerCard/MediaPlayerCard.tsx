import styles from './MediaPlayerCard.module.css';

export const MediaPlayerCard = () => {

  return (

    <div className={styles.mediaPlayer}>
      <img className={styles.mPlayerImage} src="https://jfx.xcibe95x.com/assets/img/posters/arcane.jpg" />
      <div className={styles.mPlayerContainer}>
        {/* <span class="card-play"></span>
        <span class="card-add"></span>
        <span class="card-like"></span>
        <span class="card-more"></span> */}
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
