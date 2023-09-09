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
  // Functions
  const functionCalledByEditorButtonContentElementOnClick = (
    tagName: any,
    selectedTagName: any
  ) => {
    const bodyOfCard: any =
      document.getElementsByClassName("body-OfCard")[indexOfCard];
    const arrayOfTag: any = Array.from(bodyOfCard.children);

    if (nodeNameOfSelectedRange == "DIV") {
      const createdElement = `<${tagName}>${selectedText}</${tagName}>`;
      rangeOfSelectedText.deleteContents();
      rangeOfSelectedText.insertNode(
        document.createRange().createContextualFragment(createdElement)
      );
    } else if (nodeNameOfSelectedRange == `${selectedTagName}`) {
      if (
        rangeOfSelectedText?.startContainer.parentNode.innerHTML.length >
        selectedText.length
      ) {
        if (
          rangeOfSelectedText?.startContainer.parentNode.innerHTML.slice(
            0,
            selectedText.length
          ) === selectedText
        ) {
          rangeOfSelectedText?.startContainer.parentNode.insertAdjacentHTML(
            "beforebegin",
            `${selectedText}<${tagName}>${rangeOfSelectedText?.startContainer.parentNode.innerHTML.slice(
              selectedText.length
            )}</${tagName}>`
          );

          rangeOfSelectedText?.startContainer.parentNode.remove();
        } else if (
          rangeOfSelectedText?.startContainer.parentNode.innerHTML.slice(
            -selectedText.length
          ) === selectedText
        ) {
          rangeOfSelectedText?.startContainer.parentNode.insertAdjacentHTML(
            "afterend",
            `<${tagName}>${rangeOfSelectedText?.startContainer.parentNode.innerHTML.slice(
              0,
              rangeOfSelectedText.startOffset
            )}</${tagName}>${selectedText}`
          );

          rangeOfSelectedText?.startContainer.parentNode.remove();
        } else {
          const textBeforeSelectedText: any =
            rangeOfSelectedText?.startContainer.parentNode.innerHTML.slice(
              0,
              rangeOfSelectedText.startOffset
            );
          const textAfterSelectedText: any =
            rangeOfSelectedText?.startContainer.parentNode.innerHTML.slice(
              rangeOfSelectedText.endOffset
            );

          rangeOfSelectedText?.startContainer.parentNode.insertAdjacentHTML(
            "beforebegin",
            `<${tagName}>${textBeforeSelectedText}</${tagName}>${selectedText}<${tagName}>${textAfterSelectedText}</${tagName}>`
          );

          rangeOfSelectedText?.startContainer.parentNode.remove();
        }
      } else {
        rangeOfSelectedText?.startContainer.parentNode.insertAdjacentText(
          "beforebegin",
          `${selectedText}`
        );
        rangeOfSelectedText?.startContainer.parentNode.remove();
      }
    }

    if (bodyOfCard.innerHTML.includes(`</${tagName}><${tagName}>`) == true) {
      bodyOfCard.innerHTML = bodyOfCard.innerHTML.replaceAll(
        `</${tagName}><${tagName}>`,
        ""
      );
    }

    if (arrayOfTag) {
      arrayOfTag.forEach((element: any) => {
        element.innerHTML = element.innerHTML.replaceAll(`<${tagName}>`, "");
        element.innerHTML = element.innerHTML.replaceAll(`</${tagName}>`, "");
      });
    }

    setBodyValueOnChange(bodyOfCard.innerHTML);
  };

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
                functionCalledByEditorButtonContentElementOnClick("b", "B");
              }}
            >
              <img src={boldImage} alt="bold-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                functionCalledByEditorButtonContentElementOnClick("i", "I");
              }}
            >
              <img src={italicImage} alt="italic-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                functionCalledByEditorButtonContentElementOnClick("u", "U");
              }}
            >
              <img src={underlineImage} alt="underline-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                functionCalledByEditorButtonContentElementOnClick("s", "S");
              }}
            >
              <img src={strikeThroughImage} alt="strikeThrough-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="vertical-line-in-sub-container-of-contents-in-editor-button-OfCard"></span>
          </div>
          <div className="sub-container-of-contents-in-editor-button-OfCard">
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                functionCalledByEditorButtonContentElementOnClick("h1", "H1");
              }}
            >
              <img src={h1Image} alt="h1-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                functionCalledByEditorButtonContentElementOnClick("h2", "H2");
              }}
            >
              <img src={h2Image} alt="h2-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                functionCalledByEditorButtonContentElementOnClick("h3", "H3");
              }}
            >
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
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                functionCalledByEditorButtonContentElementOnClick("q", "Q");
              }}
            >
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
