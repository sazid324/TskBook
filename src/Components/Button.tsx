// Assets
import addImage from "../assets/Images/Icons_and_logos/add.svg";

interface ButtonElements {
  children: string;
  functionCallingOnBtnClick: () => void;
}

export default function Button({ children, functionCallingOnBtnClick }: ButtonElements) {
  return (
    <button className="btn-OfButton" onClick={functionCallingOnBtnClick}>
      <img className="add-image-OfButton" src={addImage} alt="add-image" />
      <p className="text-OfButton">{children}</p>
    </button>
  );
}
