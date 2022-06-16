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
import { useLocation } from "react-router-dom";
import * as React from "react";

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

  const dropDown1 = useRef<HTMLUListElement>(null);

  const closeDropdown1 = (innerEvent1: MouseEvent) => {
    if (!dropDown1.current!.contains(innerEvent1.target as Node)) {
      dropDown1.current!.style.display = "none";
      document.body.removeEventListener("click", closeDropdown1);
    }
  };

  const toggleDropdown1 = (event1: RMouseEvent) => {
    dropDown1.current!.style.display = "flex";
    event1.stopPropagation();
    document.body.addEventListener("click", closeDropdown1);
  };

  // let location = useLocation();

  // React.useEffect(() => {
  //   ga("send", "pageview");
  // }, [location]);

  return (
    <div className={styles.navDesktop}>
      <img src={Logo} alt="logoImg" className={styles.logoImg} />
      {/* List Hide */}
      <div className={styles.HideButton}>
        <a href="#">Browse</a>
        <img src={Downicon} alt="downIcon" onClick={toggleDropdown1} />
      </div>
      <ul className={styles.Hide} ref={dropDown1}>
        <li>
          <a href="#" className={styles.active}>
            Home
          </a>
        </li>
        <hr />
        <li>
          <a href="#">Tv Show</a>
        </li>
        <hr />
        <li>
          <a href="#">Movies</a>
        </li>
        <hr />
        <li>
          <a href="#">New and Popular</a>
        </li>
        <hr />
        <li>
          <a href="#">Audio and Subtitles</a>
        </li>
      </ul>
      {/* List 1 */}
      <ul className={styles.list}>
        <li className={styles.listHide}>
          <a href="#" className={styles.active}>
            Home
          </a>
        </li>
        <li className={styles.listHide}>
          <a href="#">Tv Show</a>
        </li>
        <li className={styles.listHide}>
          <a href="#">Movies</a>
        </li>
        <li className={styles.listHide}>
          <a href="#">New and Popular</a>
        </li>
        <li className={styles.listHide}>
          <a href="#">Audio and Subtitles</a>
        </li>
      </ul>
      {/* List 2 */}
      <ul className={styles.list}>
        <li className={styles.listHide}>
          <a href="#">
            <img src={Lens} alt="imgLens" />
          </a>
        </li>
        <li className={styles.listHide}>
          <a href="#" className="GodName">
            Zeus
          </a>
        </li>
        <li className={styles.listHide}>
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
            <img
              src={Downicon}
              alt="imgDropdown"
              onClick={toggleDropdown}
              className={styles.listHide}
            />
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
