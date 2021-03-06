import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./NavBar.scss";
import Setting from "./Setting";
import { toast } from "react-toastify";
import { db } from "../../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { storage } from "../../firebase-config";
import { updateEmail } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ProfileEdit = ({ username, picture, toggle, toggleProfile }) => {
  const [active, setActive] = useState(false);
  const { currentUser } = useSelector((state) => state.setUser);
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPicture, setNewPicture] = useState("");

  const handleClick = () => {
    setActive(!active);
  };

  /**
   * It takes the new username, email, and picture, and uploads the picture to the storage, and updates
   * the user's username and email.
   * </code>
   */
  const handleSubmit = () => {
    setActive(!active);
    setNewUsername("");
    setNewEmail("");
    setNewPicture("");

    /* Creating a reference to the storage. */
    const imageRef = ref(storage, `${currentUser.uid}.jpg`);
    uploadBytes(imageRef, newPicture).then(() => {
      getDownloadURL(imageRef)
        .then((url) => {
          // Update User
          updateDoc(doc(db, "users", currentUser.uid), {
            username: newUsername,
            photo: url,
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    });

    // Update Email
    updateEmail(currentUser, newEmail);

    console.log(newUsername, newEmail, newPicture);
    toast("Profile Updated");
  };

  return (
    <>
      {active ? (
        <Setting
          username={username}
          picture={picture}
          toggle={toggle}
          toggleProfile={toggleProfile}
        />
      ) : (
        <div className="nav__user" style={{ marginTop: "30px" }}>
          <div className="nav__close">
            <div class="close" onClick={toggleProfile}></div>
          </div>
          <div className="nav__user__pic">
            <img src={picture} alt="user" />
            <p>{currentUser ? username : "email"}</p>
          </div>
          <div className="nav__user__options">
            <span>Username</span>
            <input
              type="text"
              placeholder={username}
              value={username}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <span>Email</span>
            <input
              type="text"
              placeholder={currentUser.email}
              value={currentUser.email}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <span>Choose Profile Picture</span>
            <input
              type="file"
              onChange={(e) => setNewPicture(e.target.files[0])}
            />
            <button onClick={handleSubmit}>Save Changes</button>
            <button onClick={handleClick}>Go Back</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileEdit;
