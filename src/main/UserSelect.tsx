import { useState } from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import styles from "./UserSelect.module.css";
import { IProfileCard } from "../Interfaces";

// Godflex Home Page

const gods: IProfileCard[] = [
  { name: "Zeus", imgFilename: "zeus.jpg" },
  { name: "Ade", imgFilename: "ade.webp" },
  { name: "Poseidone", imgFilename: "poseidone.jpg" },
  { name: "Apollo", imgFilename: "apollo.webp" },
];

function UserSelect() {
  const [users, setUsers] = useState(gods);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Chi vuole guardare Godflex?</h2>
      <div className={styles.profileContainer}>
        {users.map((god, i) => (
          <ProfileCard key={i} name={god.name} imgFilename={god.imgFilename} />
        ))}
        <ProfileCard />
      </div>
      <button className={styles.button}>Gestisci i profili</button>
    </div>
  );
}

export default UserSelect;
