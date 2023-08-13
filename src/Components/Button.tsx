// Assets
import addImage from "../assets/Images/Icons_and_logos/add.svg";

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
  // Adding functionality of Add New button.
  const functionCalledByAddNewButton = () => {
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
  };

  return (
    <button className="btn-OfButton" onClick={functionCalledByAddNewButton}>
      <img className="add-image-OfButton" src={addImage} alt="add-image" />
      <p className="text-OfButton">{children}</p>
    </button>
  );
}
