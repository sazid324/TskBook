// Library imports
import { useContext } from "react";

// Component imports
import { currentPageContext } from "./App";

// Assets
import addImage from "../../public/assets/Images/Icons_and_logos/add.svg";

interface ButtonElements {
  addNew: any;
  setAddNew: any;
  children: string;
}

export default function Button({
  addNew,
  setAddNew,
  children,
}: ButtonElements) {
  // Hooks
  const [currentPage] = useContext<any>(currentPageContext);

  // Adding functionality of Add New button.
  const functionCalledByAddNewButton = () => {
    if (currentPage === "/notes") {
      const addNewContainerOfCard: any = [
        ...addNew,
        {
          id: Date.now() + Math.floor(Math.random() * 78),
          headerValue: "",
          bodyValue: "",
          files: [],
          color: "#FFFFFF",
        },
      ];

      setAddNew(addNewContainerOfCard);
    }
  };

  /////////////////////// Return Method ///////////////////////

  return (
    <button
      className="btn-OfButton"
      onClick={() => functionCalledByAddNewButton()}
    >
      <img className="add-image-OfButton" src={addImage} alt="add-image" />
      <p className="text-OfButton">{children}</p>
    </button>
  );
}
