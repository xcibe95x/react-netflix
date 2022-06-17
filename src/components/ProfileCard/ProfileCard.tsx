import { FC, useContext } from "react";
import { UserContext, User } from "../../Interfaces";
import { useNavigate } from "react-router-dom";

import styles from "./ProfileCard.module.css";

const ProfileCard = (user: User) => {
  const { loggedUser, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function logUser() {
    if (user.name) {
      setUser(user);
      navigate("/home");
    }
  }

  return (
    <div className={styles.profileCard}>
      <button onClick={logUser}>
        <img
          className={styles.profileImg}
          src={require(`../../assets/images/${
            user.profilePic || "addProfile.png"
          }`)}
          alt="Profile image"
        />
      </button>
      <h4 className={styles.profileName}>{user.name || "Add God"}</h4>
    </div>
  );
};

export default ProfileCard;
