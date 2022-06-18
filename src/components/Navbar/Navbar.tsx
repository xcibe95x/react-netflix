import styles from "./Navbar.module.css";
import Logo from "../../assetsNavbar/navigation/logo.png";
import Lens from "../../assetsNavbar/navigation/Lensimg.png";
import Bell from "../../assetsNavbar/navigation/campanella.png";
import Pp from "../../assetsNavbar/navigation/ProfilePicture3.png";
import Downicon from "../../assetsNavbar/navigation/Downicon.png";
import Pen from "../../assetsNavbar/navigation/pen-icon.svg";
import Accounticon from "../../assetsNavbar/navigation/account-icon.svg";
import Help from "../../assetsNavbar/navigation/assistance.svg";
import { useRef, MouseEvent as RMouseEvent, useContext, useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Interfaces";
import {v4 as uuid} from 'uuid';

export const Navbar = () => {
  const dropDown = useRef<HTMLUListElement>(null);
  const dropDownMobile = useRef<HTMLUListElement>(null);
  const { loggedUser, setUser, users } = useContext(UserContext);
  const otherUsers = users.filter((el) => loggedUser.name != el.name);
  const navigate = useNavigate();
  // let location = useLocation();

  function closure(dropDownElement: HTMLUListElement) {
    return function closeDropDown(innerEvent: Event) {
      if (!dropDownElement.contains(innerEvent.target as Node)) {
        dropDownElement.classList.remove(styles.showOnMobile); 
        document.body.removeEventListener("click", closeDropDown);
      }
    };
  }

  const toggleDropdown = (
    event: RMouseEvent,
    dropDownElement: HTMLUListElement
  ) => {
    dropDownElement.classList.add(styles.showOnMobile);
    event.stopPropagation();
    document.body.addEventListener("click", closure(dropDownElement));
  };

  const logOut = () => {
    setUser({name: "", profilePic: ""})
    navigate("/");
  }

  return (
    <div className={styles.navDesktop}>
      <img src={Logo} alt="logoImg" className={styles.logoImg} />
      {loggedUser.name && (
        <>
          <div>
            {/* List Hide */}
            <div className={styles.HideButton}>
              <span onClick={(e) => toggleDropdown(e, dropDownMobile.current!)}>Browse</span>
              <img
                src={Downicon}
                alt="downIcon"
                onClick={(e) => toggleDropdown(e, dropDownMobile.current!)}
              />
            </div>
            {/* List 1 */}
            <ul className={styles.dropDownList} ref={dropDownMobile}>
              <li key={uuid()} >
                <span className={styles.active}>
                  Home
                </span>
              </li>
              <li key={uuid()} >
                <span>Tv Show</span>
              </li>
              <li key={uuid()} >
                <span>Movies</span>
              </li>
              <li key={uuid()} >
                <span>New and Popular</span>
              </li>
              <li key={uuid()} >
                <span>Audio and Subtitles</span>
              </li>
            </ul>
          </div>
          {/* List 2 */}
          <ul className={styles.list}>
            <li key={uuid()}  className={styles.listHide}>
              <span>
                <img src={Lens} alt="imgLens" />
              </span>
            </li>
            <li key={uuid()}  className={styles.listHide}>
              <span className="GodName">
                {loggedUser.name}
              </span>
            </li>
            <li key={uuid()}  className={styles.listHide}>
              <span>
                <img src={Bell} alt="imgBell" />
              </span>
            </li>
            <li key={uuid()} onClick={(e) => toggleDropdown(e, dropDown.current!)}>
              <span>
                <img
                  src={require("../../assets/images/" + loggedUser.profilePic)}
                  alt="Logged user profile pic"
                  className={styles.imgPp}
                />
              </span>
            </li>
            <li key={uuid()}  className={styles.liContainer} onClick={(e) => toggleDropdown(e, dropDown.current!)}>
                <img
                  src={Downicon}
                  alt="imgDropdown"    
                />
              {/* dropdown ul */}
              <ul className={styles.dropDown} ref={dropDown}>
                {otherUsers.map((el) => (
                  <li key={uuid()}  className={styles.liDropdown} onClick={() => setUser(el)} >
                    <img
                      src={require("../../assets/images/" +
                        el.profilePic)}
                      alt="Other users profile pic"
                    />
                    <span>{el.name}</span>
                  </li>
                ))}
                <li key={uuid()}  className={styles.liDropdown}>
                  <img src={Pen} alt="imgPen" />
                  <span>Manage profiles</span>
                </li>
                <hr />
                <li key={uuid()}  className={styles.liDropdown}>
                  <img src={Accounticon} alt="imgAI" />
                  <span>Account</span>
                </li>
                <li key={uuid()}  className={styles.liDropdown}>
                  <img src={Help} alt="imgHelp" />
                  <span>Service Center</span>
                </li>
                <hr />
                <p className={styles.liDropdown}>
                  <span onClick={logOut}>Exit Godflex</span>
                </p>
              </ul>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};
