"use client";

// Library imports
import Image from "next/image";
import secureLocalStorage from "react-secure-storage";

// CSS imports
import style from "@/components/Profile/Profile.module.scss";

// Assets
import profileImage from "../../../public/assets/Images/Icons/profile.svg";

export default function Profile() {
  // Variables
  const UserData: any = secureLocalStorage.getItem("UserData");
  const ParsedUserData = JSON.parse(UserData);
  const FirstName: string = ParsedUserData ? ParsedUserData.first_name : "";
  const LastName: string = ParsedUserData ? ParsedUserData.last_name : "";
  const UserName: string = ParsedUserData ? ParsedUserData.username : "";

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <button className={`${style.profileButton} profileButton`}>
        <Image
          className={`${style.profileLogo} profileLogo`}
          src={profileImage}
          alt="search-logo"
        />
        <p className={`${style.usersName} usersName`}>
          {`${FirstName} ${LastName}`}
        </p>
        <div
          className={`${style.profileButtonItemsWrapper} profileButtonItemsWrapper`}
        >
          <ul className={`${style.profileButtonItems} profileButtonItems`}>
            <li
              className={`${style.profileImageContainer} profileImageContainer`}
            >
              <Image
                className={`${style.profileImage} profileImage`}
                src={profileImage}
                alt="profile-image"
              />
            </li>
            <li className={`${style.namesContainer} namesContainer`}>
              <p className={`${style.names} names`}>
                {`${FirstName} ${LastName}`}
              </p>
            </li>
            <li className={`${style.userNameContainer} userNameContainer`}>
              <p className={`${style.userName} userName`}>{UserName}</p>
            </li>
            <li className={`${style.signOutButton} signOutButton`}>Sign out</li>
          </ul>
        </div>
      </button>
    </>
  );
}
