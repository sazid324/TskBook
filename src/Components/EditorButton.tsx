// Library imports
import { useEffect } from "react";

// Assets
import caretImage from "../assets/Images/Icons_and_logos/caret.svg";

// Interfaces
interface editorButtonElements {
  indexOfCard: number;
  editorButton: any;
  setEditorButton: any;
  editorButtonRef: any;
}

export default function EditorButton({
  indexOfCard,
  editorButton,
  setEditorButton,
  editorButtonRef,
}: editorButtonElements) {
  // Hooks
  useEffect(() => {
    const editorButtonInLowerPartOfCard: any = document.getElementsByClassName(
      "editor-button-in-lower-part-OfCard"
    )[indexOfCard];

    if (editorButton == true) {
      editorButtonInLowerPartOfCard.style.cssText =
        "transform: rotate(180deg);";
    } else {
      editorButtonInLowerPartOfCard.style.cssText =
        "transform: rotate(0deg);";
    }
  }, [editorButton]);

  useEffect(() => {
    // Adding Clicked outside functionality.
    const clickedOutSideTheEditorButton = (event: any) => {
      if (!editorButtonRef.current.contains(event.target)) {
        setEditorButton(false);
      }
    };

    document.addEventListener("mousedown", clickedOutSideTheEditorButton);
  });

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
