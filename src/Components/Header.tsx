// Library imports
import { useState } from "react";

// Assets
import searchImage from "../assets/Images/Icons_and_logos/search.svg";
import listImage from "../assets/Images/Icons_and_logos/list.svg";

export default function Header() {
  const [inputValue, setinputValue] = useState("");

  const onChangesearchInputFunctionOfHeader = (typedValue: any) => {
    setinputValue(typedValue.target.value);
  };

  const onChangesearchButtonFunctionOfHeader = (searchTerm: any) => {
    console.log(searchTerm);
  };

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className="container-OfHeader">
        <nav className="nav-OfHeader">
          <div className="nav-menu-OfHeader">
            <div className="nav-menu-button-OfHeader">
              <img
                className="list-menu-image-OfHeader"
                src={listImage}
                alt="list-image"
              />
            </div>
          </div>
          <div className="logo-OfHeader">
            <h3>TskBook</h3>
          </div>
          <div className="search-OfHeader">
            <input
              className="search-input-OfHeader"
              type="text"
              onChange={onChangesearchInputFunctionOfHeader}
            />
            <button
              className="search-button-OfHeader"
              onClick={onChangesearchButtonFunctionOfHeader}
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
