"use client";

// Library imports
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";

// CSS imports
import style from "@/layouts/Header/Header.module.scss";

// Redux Imports
import { searchQuery } from "@/redux/slices/searchSlice";

// Assets
import TskBookLightLogo from "@/assets/Images/Brandings/TskBook_Light_Theme_logo.svg";
import searchImage from "@/assets/Images/Icons/search.svg";
import cross from "@/assets/Images/Icons/cross.svg";
import listImage from "@/assets/Images/Icons/list.svg";

export default function Header() {
  // Hooks
  const [clickedOnSearch, setClickedOnSearch] = useState(false);
  const [clickedOnNavMenu, setClickedOnNavMenu] = useState(() => {
    const navMenuState = localStorage.getItem(
      "nav-menu-state-in-local-storage"
    );
    return navMenuState ? JSON.parse(navMenuState) : false;
  });

  let searchBox: any = useRef();

  const searchDispatch = useDispatch();

  useEffect(() => {
    // Adding Clicked outside functionality.
    const clickedOutSideTheSearchButton = (event: any) => {
      if (!searchBox.current.contains(event.target)) {
        setClickedOnSearch(false);
      }
    };

    document.addEventListener("mousedown", clickedOutSideTheSearchButton);
  });

  useEffect(() => {
    // Adding functionality of Search button.
    const navMenuOfHeader: any =
      document.getElementsByClassName("navMenuOfHeader")[0];
    const navMenuButtonOfHeader: any = document.getElementsByClassName(
      "navMenuButtonOfHeader"
    )[0];
    const logoOfHeader: any =
      document.getElementsByClassName("logoOfHeader")[0];
    const searchOfHeader: any =
      document.getElementsByClassName("searchOfHeader")[0];
    const searchInputOfHeader: any = document.getElementsByClassName(
      "searchInputOfHeader"
    )[0];
    const searchLogoOfHeader: any =
      document.getElementsByClassName("searchLogoOfHeader")[0];

    if (clickedOnSearch === true) {
      // Adding transition effect on search input field
      navMenuOfHeader.style.cssText = "width: 0%; transition: width 0.5s;";
      navMenuButtonOfHeader.style.cssText = "display: none;";
      logoOfHeader.style.cssText = "display: none;";
      searchOfHeader.style.cssText = "width: 100%; transition: width 0.5s;";
      searchInputOfHeader.style.cssText =
        "width: 100%; transition: width 0.5s; display: block;";
      searchLogoOfHeader.src = cross.src;
    }
    if (clickedOnSearch === false) {
      navMenuOfHeader.style.cssText = "width: 33.33%; transition: width 0.5s;";
      navMenuButtonOfHeader.style.cssText = "display: block;";
      logoOfHeader.style.cssText =
        "display: block; display: flex; justify-content: center;";
      searchOfHeader.style.cssText = "width: 33.33%; transition: width 0.5s;";
      searchInputOfHeader.style.cssText = "width: 0%; transition: width 0.5s;";

      setTimeout(() => {
        searchInputOfHeader.style.cssText = "display: none;";
      }, 300);

      searchLogoOfHeader.src = searchImage.src;
      searchDispatch(searchQuery(""));
      searchInputOfHeader.value = "";
    }
  }, [clickedOnSearch]);

  useEffect(() => {
    // Saving Nav menu state to local storage.
    localStorage.setItem(
      "nav-menu-state-in-local-storage",
      JSON.stringify(clickedOnNavMenu)
    );

    // Adding functionality of Nav menu button.
    const leftPart: any = document.getElementsByClassName("leftPart")[0];
    const rightPart: any = document.getElementsByClassName("rightPart")[0];
    const btnOfButton: any = document.getElementsByClassName("btnOfButton")[0];
    const textOfButton: any =
      document.getElementsByClassName("textOfButton")[0];
    const liOfListGroup: any = document.getElementsByClassName("liOfListGroup");
    const textInLiOfListGroup: any = document.getElementsByClassName(
      "textInLiOfListGroup"
    );
    const profileButton: any =
      document.getElementsByClassName("profileButton")[0];
    const usersName: any = document.getElementsByClassName("usersName")[0];

    if (clickedOnNavMenu === true) {
      leftPart.style.cssText = "width: 6rem; transition: width 0.4s;";
      rightPart.style.cssText = "left: 6rem; transition: left 0.4s;";
      btnOfButton.style.cssText =
        "margin-left: 0px; transition: margin-left 0.4s;";
      textOfButton.style.display = "none";
      profileButton.style.cssText = "width: inherit;";

      for (let i = 0; i < liOfListGroup.length; i++) {
        liOfListGroup[i].style.cssText = "width: 4.45rem;";
        textInLiOfListGroup[i].style.display = "none";
        usersName.style.display = "none";
      }
    }

    if (clickedOnNavMenu === false) {
      leftPart.style.cssText = "width: 15.2rem; transition: width 0.4s;";
      rightPart.style.cssText = "left: 15.2rem; transition: left 0.4s;";
      btnOfButton.style.cssText =
        "margin-left: 1.7rem; transition: margin-left 0.4s;";

      setTimeout(() => {
        textOfButton.style.display = "block";
        profileButton.style.cssText = "width: 100%;";
        usersName.style.display = "block";

        for (let i = 0; i < liOfListGroup.length; i++) {
          liOfListGroup[i].style.cssText = "width: inherit;";
          textInLiOfListGroup[i].style.display = "block";
        }
      }, 150);
    }
  }, [clickedOnNavMenu]);

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className={`${style.containerOfHeader} containerOfHeader`}>
        <nav className={`${style.navOfHeader} navOfHeader`}>
          <div className={`${style.navMenuOfHeader} navMenuOfHeader`}>
            <button
              className={`${style.navMenuButtonOfHeader} navMenuButtonOfHeader`}
              onClick={() => {
                setClickedOnNavMenu(!clickedOnNavMenu);
              }}
            >
              <Image
                className={`${style.listMenuImageOfHeader} listMenuImageOfHeader`}
                src={listImage}
                alt="list-image"
              />
            </button>
          </div>
          <div className={`${style.logoOfHeader} logoOfHeader`}>
            <Image
              className={`${style.brandLogoOfHeader} brandLogoOfHeader`}
              src={TskBookLightLogo}
              alt="TskBook-Light_logo"
              priority={true}
              quality={100}
            ></Image>
          </div>
          <div
            className={`${style.searchOfHeader} searchOfHeader`}
            ref={searchBox}
          >
            <input
              className={`${style.searchInputOfHeader} searchInputOfHeader`}
              type="text"
              placeholder="Search here...."
              onChange={(event: any) => {
                searchDispatch(searchQuery(event.target.value.toLowerCase()));
              }}
            />
            <button
              className={`${style.searchButtonOfHeader} searchButtonOfHeader`}
              onClick={() => {
                setClickedOnSearch(!clickedOnSearch);
              }}
            >
              <Image
                className={`${style.searchLogoOfHeader} searchLogoOfHeader`}
                src={searchImage}
                alt="search-logo"
              />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
