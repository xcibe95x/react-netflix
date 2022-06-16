import styles from "./Navbar.module.css";
import Logo from "../../assetsNavbar/navigation/logo.png";
import Lens from "../../assetsNavbar/navigation/Lensimg.png";
import Bell from "../../assetsNavbar/navigation/campanella.png";
import Pp from "../../assetsNavbar/navigation/ProfilePicture3.png";
import Downicon from "../../assetsNavbar/navigation/Downicon.png";
import Pen from "../../assetsNavbar/navigation/pen-icon.svg";
import Accounticon from "../../assetsNavbar/navigation/account-icon.svg";
import Help from "../../assetsNavbar/navigation/assistance.svg";
import { useRef, MouseEvent as RMouseEvent } from "react";

export const Navbar = () => {
  const dropDown = useRef<HTMLUListElement>(null);

  const closeDropdown = (innerEvent: MouseEvent) => {
    if (!dropDown.current!.contains(innerEvent.target as Node)) {
      dropDown.current!.style.display = "none";
      document.body.removeEventListener("click", closeDropdown);
    }
  };

  const toggleDropdown = (event: RMouseEvent) => {
    dropDown.current!.style.display = "block";
    event.stopPropagation();
    document.body.addEventListener("click", closeDropdown);
  };

  return (
    <div className={styles.navDesktop}>
      <img src={Logo} alt="logoImg" className={styles.logoImg} />

      <ul className={styles.list}>
        <li>
          <a href="#" className={styles.active}>
            Home
          </a>
        </li>
        <li>
          <a href="#">Tv Show</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">New and Popular</a>
        </li>
        <li>
          <a href="#">Audio and Subtitles</a>
        </li>
      </ul>
      <ul className={styles.list}>
        <li>
          <a href="#">
            <img src={Lens} alt="imgLens" />
          </a>
        </li>
        <li>
          <a href="#" className="GodName">
            Zeus
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Bell} alt="imgBell" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Pp} alt="imgPp" className={styles.imgPp} />
          </a>
        </li>
        <li className={styles.liContainer}>
          <a href="#" className={styles.downIcon}>
            <img src={Downicon} alt="imgDropdown" onClick={toggleDropdown} />
          </a>
          {/* dropdown ul */}
          <ul className={styles.dropDown} ref={dropDown}>
            <li className={styles.liDropdown}>
              <img src={Pp} alt="" />
              <a href="#">Zeus</a>
            </li>
            <li className={styles.liDropdown}>
              <img src={Pp} alt="" />
              <a href="#">Ade</a>
            </li>
            <li className={styles.liDropdown}>
              <img src={Pp} alt="" />
              <a href="#">Poseidone</a>
            </li>
            <li className={styles.liDropdown}>
              <img src={Pp} alt="" />
              <a href="#">Apollo</a>
            </li>
            <li className={styles.liDropdown}>
              <img src={Pen} alt="imgPen" />
              <a href="#">Manage profiles</a>
            </li>
            <hr />
            <li className={styles.liDropdown}>
              <img src={Accounticon} alt="imgAI" />
              <a href="#">Account</a>
            </li>
            <li className={styles.liDropdown}>
              <img src={Help} alt="imgHelp" />
              <a href="#">Service Center</a>
            </li>
            <hr />
            <p className={styles.liDropdown}>
              <a href="#">Exit Godflex</a>
            </p>
          </ul>
        </li>
      </ul>
    </div>
  );
};
