// Library imports
import { useState, useEffect, useRef } from "react";

// Assets
import searchImage from "../../public/assets/Images/Icons_and_logos/search.svg";
import cross from "../../public/assets/Images/Icons_and_logos/cross.svg";
import listImage from "../../public/assets/Images/Icons_and_logos/list.svg";

// Interfaces
interface headerElements {
  setNewQuery: any;
}

export default function Header({ setNewQuery }: headerElements) {
  // Hooks
  const [clickedOnSearch, setClickedOnSearch] = useState(false);
  const [clickedOnNavMenu, setClickedOnNavMenu] = useState(() => {
    const navMenuState = localStorage.getItem(
      "nav-menu-state-in-local-storage"
    );
    return navMenuState ? JSON.parse(navMenuState) : false;
  });

  let searchBox: any = useRef();

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
      document.getElementsByClassName("nav-menu-OfHeader")[0];
    const navMenuButtonOfHeader: any = document.getElementsByClassName(
      "nav-menu-button-OfHeader"
    )[0];
    const logoOfHeader: any =
      document.getElementsByClassName("logo-OfHeader")[0];
    const searchOfHeader: any =
      document.getElementsByClassName("search-OfHeader")[0];
    const searchInputOfHeader: any = document.getElementsByClassName(
      "search-input-OfHeader"
    )[0];
    const searchLogoOfHeader: any = document.getElementsByClassName(
      "search-logo-OfHeader"
    )[0];

    if (clickedOnSearch == true) {
      // Adding transition effect on search input field
      navMenuOfHeader.style.cssText = "width: 0%; transition: width 0.5s;";
      navMenuButtonOfHeader.style.cssText = "display: none;";
      logoOfHeader.style.cssText = "display: none;";
      searchOfHeader.style.cssText = "width: 100%; transition: width 0.5s;";
      searchInputOfHeader.style.cssText =
        "width: 100%; transition: width 0.5s; display: block;";
      searchLogoOfHeader.src = `${cross}`;
    }
    if (clickedOnSearch == false) {
      navMenuOfHeader.style.cssText = "width: 33.33%; transition: width 0.5s;";
      navMenuButtonOfHeader.style.cssText = "display: block;";
      logoOfHeader.style.cssText =
        "display: block; display: flex; justify-content: center;";
      searchOfHeader.style.cssText = "width: 33.33%; transition: width 0.5s;";
      searchInputOfHeader.style.cssText = "width: 0%; transition: width 0.5s;";

      setTimeout(() => {
        searchInputOfHeader.style.cssText = "display: none;";
      }, 300);

      searchLogoOfHeader.src = `${searchImage}`;
      setNewQuery("");
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
    const leftPart: any = document.getElementsByClassName("left-part")[0];
    const rightPart: any = document.getElementsByClassName("right-part")[0];
    const btnOfButton: any = document.getElementsByClassName("btn-OfButton")[0];
    const textOfButton: any =
      document.getElementsByClassName("text-OfButton")[0];
    const containerOfCopyright: any = document.getElementsByClassName(
      "container-OfCopyright"
    )[0];
    const liOfListGroup: any =
      document.getElementsByClassName("li-OfListGroup");
    const textInLiOfListGroup: any = document.getElementsByClassName(
      "text-in-li-OfListGroup"
    );

    if (clickedOnNavMenu == true) {
      leftPart.style.cssText = "width: 5.3rem; transition: width 0.4s;";
      rightPart.style.cssText = "left: 5.3rem; transition: left 0.4s;";
      btnOfButton.style.cssText =
        "margin-left: 0px; transition: margin-left 0.4s;";
      textOfButton.style.display = "none";
      containerOfCopyright.style.display = "none";

      for (let i = 0; i < liOfListGroup.length; i++) {
        liOfListGroup[i].style.cssText = "width: 4.45rem;";
        textInLiOfListGroup[i].style.display = "none";
      }
    }

    if (clickedOnNavMenu == false) {
      leftPart.style.cssText = "width: 14.5rem; transition: width 0.4s;";
      rightPart.style.cssText = "left: 14.5rem; transition: left 0.4s;";
      btnOfButton.style.cssText =
        "margin-left: 1.7rem; transition: margin-left 0.4s;";

      setTimeout(() => {
        textOfButton.style.display = "block";
        containerOfCopyright.style.display = "block";

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
      <div className="container-OfHeader">
        <nav className="nav-OfHeader">
          <div className="nav-menu-OfHeader">
            <button
              className="nav-menu-button-OfHeader"
              onClick={() => {
                setClickedOnNavMenu(!clickedOnNavMenu);
              }}
            >
              <img
                className="list-menu-image-OfHeader"
                src={listImage}
                alt="list-image"
              />
            </button>
          </div>
          <div className="logo-OfHeader">
            <h3>TskBook</h3>
          </div>
          <div className="search-OfHeader" ref={searchBox}>
            <input
              className="search-input-OfHeader"
              type="text"
              placeholder="Search here...."
              onChange={(event: any) =>
                setNewQuery(event.target.value.toLowerCase())
              }
            />
            <button
              className="search-button-OfHeader"
              onClick={() => {
                setClickedOnSearch(!clickedOnSearch);
              }}
            >
              <img
                className="search-logo-OfHeader"
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
