// Library imports
import { useState, useEffect } from "react";

// Assets
import boldImage from "../assets/Images/Icons_and_logos/bold.svg";
import italicImage from "../assets/Images/Icons_and_logos/italic.svg";
import underlineImage from "../assets/Images/Icons_and_logos/underline.svg";
import strikeThroughImage from "../assets/Images/Icons_and_logos/strikethrough.svg";
import quoteImage from "../assets/Images/Icons_and_logos/quote.svg";
import linkImage from "../assets/Images/Icons_and_logos/link.svg";
import h1Image from "../assets/Images/Icons_and_logos/h1.svg";
import h2Image from "../assets/Images/Icons_and_logos/h2.svg";
import h3Image from "../assets/Images/Icons_and_logos/h3.svg";
import ulListImage from "../assets/Images/Icons_and_logos/ulList.svg";
import olListImage from "../assets/Images/Icons_and_logos/olList.svg";
import undoImage from "../assets/Images/Icons_and_logos/undo.svg";
import redoImage from "../assets/Images/Icons_and_logos/redo.svg";

// Interfaces
interface editorButtonContentElements {
  indexOfCard: number;
  quillRef: any;
}

export default function EditorButtonContent({
  indexOfCard,
  quillRef,
}: editorButtonContentElements) {
  // Hooks
  const [rangeOfSelectedText, setRangeOfSelectedText] = useState<any>(null);

  useEffect(() => {
    setRangeOfSelectedText(quillRef.current.getEditor().getSelection());
  }, []);

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
                const format: any = quillRef.current
                  .getEditor()
                  .getFormat(rangeOfSelectedText);

                if (format.bold) {
                  quillRef.current.getEditor().format("bold", false);
                } else {
                  quillRef.current.getEditor().format("bold", true);
                }
              }}
            >
              <img src={boldImage} alt="bold-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                const format: any = quillRef.current
                  .getEditor()
                  .getFormat(rangeOfSelectedText);

                if (format.italic) {
                  quillRef.current.getEditor().format("italic", false);
                } else {
                  quillRef.current.getEditor().format("italic", true);
                }
              }}
            >
              <img src={italicImage} alt="italic-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                const format: any = quillRef.current
                  .getEditor()
                  .getFormat(rangeOfSelectedText);

                if (format.underline) {
                  quillRef.current.getEditor().format("underline", false);
                } else {
                  quillRef.current.getEditor().format("underline", true);
                }
              }}
            >
              <img src={underlineImage} alt="underline-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                const format: any = quillRef.current
                  .getEditor()
                  .getFormat(rangeOfSelectedText);

                if (format.strike) {
                  quillRef.current.getEditor().format("strike", false);
                } else {
                  quillRef.current.getEditor().format("strike", true);
                }
              }}
            >
              <img src={strikeThroughImage} alt="strikeThrough-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                const format: any = quillRef.current
                  .getEditor()
                  .getFormat(rangeOfSelectedText);

                if (format.blockquote) {
                  quillRef.current.getEditor().format("blockquote", false);
                } else {
                  quillRef.current.getEditor().format("blockquote", true);
                }
              }}
            >
              <img src={quoteImage} alt="quote-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                const format: any = quillRef.current
                  .getEditor()
                  .getFormat(rangeOfSelectedText);

                if (format.link) {
                  const quill = quillRef.current.editor;
                  quill.format("link", false);
                } else {
                  const linkURL = window.prompt("Enter the URL:");

                  const quill = quillRef.current.editor;
                  quill.format("link", linkURL, "target", "_blank");
                }
              }}
            >
              <img src={linkImage} alt="link-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="vertical-line-in-sub-container-of-contents-in-editor-button-OfCard"></span>
          </div>
          <div className="sub-container-of-contents-in-editor-button-OfCard">
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                const format: any = quillRef.current
                  .getEditor()
                  .getFormat(rangeOfSelectedText);

                if (format.header === 1) {
                  quillRef.current.editor.format("header", false);
                } else {
                  quillRef.current.editor.format("header", 1);
                }
              }}
            >
              <img src={h1Image} alt="h1-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                const format: any = quillRef.current
                  .getEditor()
                  .getFormat(rangeOfSelectedText);

                if (format.header === 2) {
                  quillRef.current.editor.format("header", false);
                } else {
                  quillRef.current.editor.format("header", 2);
                }
              }}
            >
              <img src={h2Image} alt="h2-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                const format: any = quillRef.current
                  .getEditor()
                  .getFormat(rangeOfSelectedText);

                if (format.header === 3) {
                  quillRef.current.editor.format("header", false);
                } else {
                  quillRef.current.editor.format("header", 3);
                }
              }}
            >
              <img src={h3Image} alt="h3-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="vertical-line-in-sub-container-of-contents-in-editor-button-OfCard"></span>
          </div>
          <div className="sub-container-of-contents-in-editor-button-OfCard">
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                const format: any = quillRef.current
                  .getEditor()
                  .getFormat(rangeOfSelectedText);

                if (format.list == "bullet") {
                  quillRef.current.editor.format("list", false);
                } else {
                  quillRef.current.editor.format("list", "bullet");
                }
              }}
            >
              <img src={ulListImage} alt="ulList-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                const format: any = quillRef.current
                  .getEditor()
                  .getFormat(rangeOfSelectedText);

                if (format.list == "ordered") {
                  quillRef.current.editor.format("list", false);
                } else {
                  quillRef.current.editor.format("list", "ordered");
                }
              }}
            >
              <img src={olListImage} alt="olList-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span className="vertical-line-in-sub-container-of-contents-in-editor-button-OfCard"></span>
          </div>
          <div className="sub-container-of-contents-in-editor-button-OfCard">
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                if (quillRef.current) {
                  quillRef.current.editor.history.undo();
                }
              }}
            >
              <img src={undoImage} alt="undo-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
            <span
              className="image-container-of-contents-in-editor-button-OfCard"
              onClick={() => {
                if (quillRef.current) {
                  quillRef.current.editor.history.redo();
                }
              }}
            >
              <img src={redoImage} alt="redo-image" />
              <span className="overlay-on-image-container-of-contents-in-editor-button-OfCard"></span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
