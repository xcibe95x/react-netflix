import styles from "./Navbar.module.css";
import Logo from "../../assetsNavbar/navigation/logo.png";
import Lens from "../../assetsNavbar/navigation/Lensimg.png";
import Bell from "../../assetsNavbar/navigation/campanella.png";
import Pp from "../../assetsNavbar/navigation/ProfilePicture3.png";
import Downicon from "../../assetsNavbar/navigation/Downicon.png";
import Pen from "../../assetsNavbar/navigation/pen-icon.svg";
import Accounticon from "../../assetsNavbar/navigation/account-icon.svg";
import Help from "../../assetsNavbar/navigation/assistance.svg";
import { useRef, MouseEvent as RMouseEvent, useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../Interfaces";
import {v4 as uuid} from 'uuid';

export const Navbar = () => {
  const dropDown = useRef<HTMLUListElement>(null);
  const dropDownMobile = useRef<HTMLUListElement>(null);
  const { loggedUser, setUser, users } = useContext(UserContext);
  const otherUsers = users.filter((el) => loggedUser != el);
  // let location = useLocation();

  function closure(dropDownElement: HTMLUListElement) {
    return function closeDropDown(innerEvent: Event) {
      if (!dropDownElement.contains(innerEvent.target as Node)) {
        dropDownElement.style.display = "none";
        document.body.removeEventListener("click", closeDropDown);
      }
    };
  }

  const toggleDropdown = (
    event: RMouseEvent,
    dropDownElement: HTMLUListElement
  ) => {
    dropDownElement.style.display = "block";
    event.stopPropagation();
    document.body.addEventListener("click", closure(dropDownElement));
  };

  return (
    <div className={styles.navDesktop}>
      <img src={Logo} alt="logoImg" className={styles.logoImg} />
      {loggedUser.name && (
        <>
          <div>
            {/* List Hide */}
            <div className={styles.HideButton}>
              <a onClick={(e) => toggleDropdown(e, dropDownMobile.current!)} href="#">Browse</a>
              <img
                src={Downicon}
                alt="downIcon"
                onClick={(e) => toggleDropdown(e, dropDownMobile.current!)}
              />
            </div>
            {/* List 1 */}
            <ul className={styles.dropDownList} ref={dropDownMobile}>
              <li key={uuid()} >
                <a href="#" className={styles.active}>
                  Home
                </a>
              </li>
              <li key={uuid()} >
                <a href="#">Tv Show</a>
              </li>
              <li key={uuid()} >
                <a href="#">Movies</a>
              </li>
              <li key={uuid()} >
                <a href="#">New and Popular</a>
              </li>
              <li key={uuid()} >
                <a href="#">Audio and Subtitles</a>
              </li>
            </ul>
          </div>
          {/* List 2 */}
          <ul className={styles.list}>
            <li key={uuid()}  className={styles.listHide}>
              <a href="#">
                <img src={Lens} alt="imgLens" />
              </a>
            </li>
            <li key={uuid()}  className={styles.listHide}>
              <a href="#" className="GodName">
                {loggedUser.name}
              </a>
            </li>
            <li key={uuid()}  className={styles.listHide}>
              <a href="#">
                <img src={Bell} alt="imgBell" />
              </a>
            </li>
            <li key={uuid()} >
              <a href="#">
                <img
                  src={require("../../assets/images/" + loggedUser.profilePic)}
                  alt="Logged user profile pic"
                  className={styles.imgPp}
                />
              </a>
            </li>
            <li key={uuid()}  className={styles.liContainer}>
              <a href="#" className={styles.downIcon}>
                <img
                  src={Downicon}
                  alt="imgDropdown"
                  onClick={(e) => toggleDropdown(e, dropDown.current!)}
                />
              </a>
              {/* dropdown ul */}
              <ul className={styles.dropDown} ref={dropDown}>
                {otherUsers.map((el) => (
                  <li key={uuid()}  className={styles.liDropdown}>
                    <img
                      src={require("../../assets/images/" +
                        el.profilePic)}
                      alt="Other users profile pic"
                    />
                    <a href="#">{el.name}</a>
                  </li>
                ))}
                <li key={uuid()}  className={styles.liDropdown}>
                  <img src={Pen} alt="imgPen" />
                  <a href="#">Manage profiles</a>
                </li>
                <hr />
                <li key={uuid()}  className={styles.liDropdown}>
                  <img src={Accounticon} alt="imgAI" />
                  <a href="#">Account</a>
                </li>
                <li key={uuid()}  className={styles.liDropdown}>
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
        </>
      )}
    </div>
  );
};
