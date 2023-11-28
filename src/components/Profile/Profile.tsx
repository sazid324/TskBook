// Library imports
import Image from "next/image";

// CSS imports
import style from "@/components/Profile/Profile.module.scss";

// Assets
import profileImage from "../../../public/assets/Images/Icons/profile.svg";

export default function Profile() {
  return (
    <>
      <button
        className={`${style.profileButton} profileButton`}
      >
        <Image
          className={`${style.profileLogo} profileLogo`}
          src={profileImage}
          alt="search-logo"
        />
        <p className={`${style.usersName} usersName`}>Sazid Ahsan</p>
        <div
          className={`${style.profileButtonItemsWrapper} profileButtonItemsWrapper`}
        >
          <ul
            className={`${style.profileButtonItems} profileButtonItems`}
          >
            <li
              className={`${style.itemInProfileButtonItems} itemInProfileButtonItems`}
            >
              Sign out
            </li>
          </ul>
        </div>
      </button>
    </>
  );
}
