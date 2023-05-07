import addImage from "../assets/Images/Icons_and_logos/add.svg";

interface ButtonElements {
  children: string;
}

export default function Button({ children }: ButtonElements) {
  return (
    <button className="btnOfButton">
      <img className="addImageOfButton" src={addImage} alt="add-image" />
      <p className="pOfButton">{children}</p>
    </button>
  );
}
