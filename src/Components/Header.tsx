import { useState } from "react";
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

  return (
    <>
      <div className="headerOfHeader">
        <nav className="navOfHeader">
          <div className="navMenuOfHeader">
            <div className="navMenuButtonOfHeader">
              <img
                className="listImageMenuOfHeader"
                src={listImage}
                alt="list-image"
              />
            </div>
          </div>
          <div className="logoOfHeader">
            <h3>Logo</h3>
          </div>
          <div className="searchOfHeader">
            <input
              className="searchInputOfHeader"
              type="text"
              onChange={onChangesearchInputFunctionOfHeader}
            />
            <button
              className="searchButtonOfHeader"
              onClick={onChangesearchButtonFunctionOfHeader}
            >
              <img className="searchLogoOfHeader" src={searchImage} alt="search-logo" />
            </button>
            <div className="searchResult">{inputValue}</div>
          </div>
        </nav>
      </div>
    </>
  );
}
