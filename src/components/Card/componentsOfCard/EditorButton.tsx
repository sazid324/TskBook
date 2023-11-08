// Library imports
import { useEffect } from "react";
import Image from "next/image";

// CSS imports
import style from "@/components/Card/Card.module.scss";

// Assets
import caretImage from "../../../../public/assets/Images/Icons/caret.svg";

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
      "editorButtonInLowerPartOfCard"
    )[indexOfCard];
    const editorContentWraperInLowerPartOfCard: any =
      document.getElementsByClassName("editorContentWraperInLowerPartOfCard")[
        indexOfCard
      ];

    if (editorButton === true) {
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
      <div
        className={`${style.editorButtonContainerOfCard} editorButtonContainerOfCard`}
      >
        <Image
          className={`${style.editorButtonInLowerPartOfCard} editorButtonInLowerPartOfCard`}
          src={caretImage}
          alt="caret-image"
        />
      </div>
      <p
        className={`${style.elementTextInLowerPartOfCard} elementTextInLowerPartOfCard editorButtonParagraphOfCard`}
      >
        Editor
      </p>
      <span
        className={`${style.overlayOnElementInLowerPartOfCard} overlayOnElementInLowerPartOfCard`}
      ></span>
    </>
  );
}
