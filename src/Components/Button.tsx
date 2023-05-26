// Assets
import addImage from "../assets/Images/Icons_and_logos/add.svg";

interface ButtonElements {
  children: string;
  functionCallingOnBtnClick: () => void;
}

export default function Button({ children, functionCallingOnBtnClick }: ButtonElements) {
  return (
    <button className="btnOfButton" onClick={functionCallingOnBtnClick}>
      <img className="addImageOfButton" src={addImage} alt="add-image" />
      <p className="pOfButton">{children}</p>
    </button>
  );
}
