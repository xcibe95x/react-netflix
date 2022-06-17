import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer>
    <div className={styles.socialIcons}>
      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
      <a href="#"><i className="fa-brands fa-instagram"></i></a>
      <a href="#"><i className="fa-brands fa-twitter"></i></a>
      <a href="#"><i className="fa-brands fa-youtube"></i></a>
    </div>

    <div className={styles.footerLinks}>
      <ul>
        <li><a href="#">Audio and subtitles</a></li>
        <li><a href="#">Media Center</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
      <ul>
        <li><a href="#">Audio description</a></li>
        <li><a href="#">Relations with investors</a></li>
        <li><a href="#">Legal Notes</a></li>
      </ul>
      <ul>
        <li><a href="#">Service center</a></li>
        <li><a href="#">Job opportunities</a></li>
        <li><a href="#">Cookie preferences</a></li>
      </ul>
      <ul>
        <li><a href="#">Gift Cards</a></li>
        <li><a href="#">Terms of use</a></li>
        <li><a href="#">Company information</a></li>
      </ul>
    </div>
    <a href=""><button className={styles.serviceCode}>Service Code</button></a>
    <span className={styles.copyright}>&copy 1997-2022 Godflex. inc <br/>TeamGodFlex</span>
  </footer>
  )
}
