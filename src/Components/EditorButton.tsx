// Library imports
import { useEffect } from "react";

// Assets
import caretImage from "../../public/assets/Images/Icons_and_logos/caret.svg";

// Interfaces
interface editorButtonElements {
  indexOfCard: number;
  editorButton: any;
}

export default function EditorButton({
  indexOfCard,
  editorButton,
}: editorButtonElements) {
  // Hooks
  useEffect(() => {
    // Making CSS effect on editor button and elements of editor button
    const editorButtonInLowerPartOfCard: any = document.getElementsByClassName(
      "editor-button-in-lower-part-OfCard"
    )[indexOfCard];
    const editorContentWraperInLowerPartOfCard: any =
      document.getElementsByClassName(
        "editor-content-wraper-in-lower-part-OfCard"
      )[indexOfCard];

    if (editorButton == true) {
      editorButtonInLowerPartOfCard.style.cssText =
        "transform: rotate(180deg); transition: transform 0.5s;";
      editorContentWraperInLowerPartOfCard.style.cssText =
        "width: 100%; transition: width 0.4s;";
    } else {
      editorButtonInLowerPartOfCard.style.cssText =
        "transform: rotate(0deg); transition: transform 0.5s;";
      editorContentWraperInLowerPartOfCard.style.cssText =
        "width: 0%; transition: width 0.4s;";
    }
  }, [editorButton]);

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className="editor-button-container-OfCard">
        <img
          className="editor-button-in-lower-part-OfCard"
          src={caretImage}
          alt="caret-image"
        />
      </div>
      <p className="element-text-in-lower-part-OfCard editor-button-paragraph-OfCard">
        Editor
      </p>
      <span className="overlay-on-element-in-lower-part-OfCard"></span>
    </>
  );
}
