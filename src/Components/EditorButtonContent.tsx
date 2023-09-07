// Assets
import boldImage from "../assets/Images/Icons_and_logos/bold.svg";
import italicImage from "../assets/Images/Icons_and_logos/italic.svg";
import underlineImage from "../assets/Images/Icons_and_logos/underline.svg";
import strikeThroughImage from "../assets/Images/Icons_and_logos/strikethrough.svg";
import h1Image from "../assets/Images/Icons_and_logos/h1.svg";
import h2Image from "../assets/Images/Icons_and_logos/h2.svg";
import h3Image from "../assets/Images/Icons_and_logos/h3.svg";
import ulListImage from "../assets/Images/Icons_and_logos/ulList.svg";
import olListImage from "../assets/Images/Icons_and_logos/olList.svg";
import quoteImage from "../assets/Images/Icons_and_logos/quote.svg";
import linkImage from "../assets/Images/Icons_and_logos/link.svg";
import checkBoxImage from "../assets/Images/Icons_and_logos/checkBox.svg";
import verticalLineImage from "../assets/Images/Icons_and_logos/verticalLine.svg";
import undoImage from "../assets/Images/Icons_and_logos/undo.svg";
import redoImage from "../assets/Images/Icons_and_logos/redo.svg";

// Interfaces
interface editorButtonContentElements {
  indexOfCard: number;
  setBodyValueOnChange: any;
  selectedText: any;
  rangeOfSelectedText: any;
  nodeNameOfSelectedRange: any;
}

export default function EditorButtonContent({
  indexOfCard,
  setBodyValueOnChange,
  selectedText,
  rangeOfSelectedText,
  nodeNameOfSelectedRange,
}: editorButtonContentElements) {
  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div
        className="editor-content-wraper-in-lower-part-OfCard"
        onMouseEnter={() => {
          const editorbuttonParagraphOfCard: any =
            document.getElementsByClassName("editor-button-paragraph-OfCard")[
              indexOfCard
            ];
          editorbuttonParagraphOfCard.style.display = "none";
        }}
      >
        <div className="contents-in-editor-button-OfCard">
          <div className="sub-container-of-contents-in-editor-button-OfCard">
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                const bodyOfCard: any =
                  document.getElementsByClassName("body-OfCard")[indexOfCard];

                console.log(nodeNameOfSelectedRange)

                if (
                  nodeNameOfSelectedRange == "DIV" ||
                  nodeNameOfSelectedRange == "SPAN"
                ) {
                  const bold: any = document.createElement("b");
                  rangeOfSelectedText.surroundContents(bold);
                } else if (nodeNameOfSelectedRange == "B") {
                    rangeOfSelectedText?.startContainer.parentNode.insertAdjacentText(
                      "beforebegin",
                      `${selectedText}`
                    );
                    rangeOfSelectedText?.startContainer.parentNode.remove();
                }

                setBodyValueOnChange(bodyOfCard.innerHTML);
              }}
            >
              <img src={boldImage} alt="bold-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="image-container-of-contents-in-editor-button-OfCard">
              <img src={italicImage} alt="italic-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="image-container-of-contents-in-editor-button-OfCard">
              <img src={underlineImage} alt="underline-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="image-container-of-contents-in-editor-button-OfCard">
              <img src={strikeThroughImage} alt="strikeThrough-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="vertical-line-in-sub-container-of-contents-in-editor-button-OfCard"></span>
          </div>
          <div className="sub-container-of-contents-in-editor-button-OfCard">
            <span className="image-container-of-contents-in-editor-button-OfCard">
              <img src={h1Image} alt="h1-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="image-container-of-contents-in-editor-button-OfCard">
              <img src={h2Image} alt="h2-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="image-container-of-contents-in-editor-button-OfCard">
              <img src={h3Image} alt="h3-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="vertical-line-in-sub-container-of-contents-in-editor-button-OfCard"></span>
          </div>
          <div className="sub-container-of-contents-in-editor-button-OfCard">
            <span className="image-container-of-contents-in-editor-button-OfCard">
              <img src={ulListImage} alt="ulList-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="image-container-of-contents-in-editor-button-OfCard">
              <img src={olListImage} alt="olList-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="vertical-line-in-sub-container-of-contents-in-editor-button-OfCard"></span>
          </div>
          <div className="sub-container-of-contents-in-editor-button-OfCard">
            <span className="image-container-of-contents-in-editor-button-OfCard">
              <img src={quoteImage} alt="quote-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="image-container-of-contents-in-editor-button-OfCard">
              <img src={linkImage} alt="link-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="image-container-of-contents-in-editor-button-OfCard">
              <img src={checkBoxImage} alt="checkBox-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="image-container-of-contents-in-editor-button-OfCard">
              <img src={verticalLineImage} alt="verticalLine-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="vertical-line-in-sub-container-of-contents-in-editor-button-OfCard"></span>
          </div>
          <div className="sub-container-of-contents-in-editor-button-OfCard">
            <span className="image-container-of-contents-in-editor-button-OfCard">
              <img src={undoImage} alt="undo-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="image-container-of-contents-in-editor-button-OfCard">
              <img src={redoImage} alt="redo-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
