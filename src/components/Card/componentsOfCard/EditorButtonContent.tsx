// Library imports
import { useState, useEffect } from "react";
import Image from "next/image";

// CSS imports
import style from "@/components/Card/Card.module.scss";

// Assets
import boldImage from "../../../../public/assets/Images/Icons/bold.svg";
import italicImage from "../../../../public/assets/Images/Icons/italic.svg";
import underlineImage from "../../../../public/assets/Images/Icons/underline.svg";
import strikeThroughImage from "../../../../public/assets/Images/Icons/strikethrough.svg";
import quoteImage from "../../../../public/assets/Images/Icons/quote.svg";
import h1Image from "../../../../public/assets/Images/Icons/h1.svg";
import h2Image from "../../../../public/assets/Images/Icons/h2.svg";
import h3Image from "../../../../public/assets/Images/Icons/h3.svg";
import ulListImage from "../../../../public/assets/Images/Icons/ulList.svg";
import olListImage from "../../../../public/assets/Images/Icons/olList.svg";
import linkImage from "../../../../public/assets/Images/Icons/link.svg";
import checkBoxImage from "../../../../public/assets/Images/Icons/checkBox.svg";
import undoImage from "../../../../public/assets/Images/Icons/undo.svg";
import redoImage from "../../../../public/assets/Images/Icons/redo.svg";

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
  const [formatOfSelectedText, setFormatOfSelectedText] = useState<any>(null);

  useEffect(() => {
    const quill = quillRef.current.getEditor();

    quill.on("selection-change", (range: any) => {
      if (range) {
        const format: any = quillRef.current.getEditor().getFormat(range);

        setFormatOfSelectedText(format);
      }
    });
  }, []);

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div
        className={`${style.editorContentWraperInLowerPartOfCard} editorContentWraperInLowerPartOfCard`}
        onMouseEnter={() => {
          const editorButtonParagraphOfCard: any =
            document.getElementsByClassName("editorButtonParagraphOfCard")[
              indexOfCard
            ];
          editorButtonParagraphOfCard.style.display = "none";
        }}
        onWheel={(e: any) => {
          const editorContentWraperInLowerPartOfCard: any =
            document.getElementsByClassName(
              "editorContentWraperInLowerPartOfCard"
            )[indexOfCard];

          // Get scroll direction
          const scrollDirection = Math.sign(e.deltaY);

          // Adjust the scroll amount as needed
          const scrollAmount: number = 100;

          // Scroll the container horizontally
          editorContentWraperInLowerPartOfCard.scrollLeft +=
            scrollAmount * scrollDirection;
        }}
      >
        <div
          className={`${style.contentsInEditorButtonOfCard} contentsInEditorButtonOfCard`}
        >
          <div
            className={`${style.subContainerOfContentsInEditorButtonOfCard} subContainerOfContentsInEditorButtonOfCard`}
          >
            <span
              className={`${style.imageContainerOfContentsInEditorButtonOfCard} imageContainerOfContentsInEditorButtonOfCard`}
              onClick={() => {
                if (formatOfSelectedText.bold) {
                  quillRef.current.getEditor().format("bold", false);
                } else {
                  quillRef.current.getEditor().format("bold", true);
                }
              }}
            >
              <Image src={boldImage} alt="bold-image" />
              <span
                className={`${style.overlayOnImageContainerOfContentsInEditorButtonOfCard} overlayOnImageContainerOfContentsInEditorButtonOfCard`}
              ></span>
            </span>
            <span
              className={`${style.imageContainerOfContentsInEditorButtonOfCard} imageContainerOfContentsInEditorButtonOfCard`}
              onClick={() => {
                if (formatOfSelectedText.italic) {
                  quillRef.current.getEditor().format("italic", false);
                } else {
                  quillRef.current.getEditor().format("italic", true);
                }
              }}
            >
              <Image src={italicImage} alt="italic-image" />
              <span
                className={`${style.overlayOnImageContainerOfContentsInEditorButtonOfCard} overlayOnImageContainerOfContentsInEditorButtonOfCard`}
              ></span>
            </span>
            <span
              className={`${style.imageContainerOfContentsInEditorButtonOfCard} imageContainerOfContentsInEditorButtonOfCard`}
              onClick={() => {
                if (formatOfSelectedText.underline) {
                  quillRef.current.getEditor().format("underline", false);
                } else {
                  quillRef.current.getEditor().format("underline", true);
                }
              }}
            >
              <Image src={underlineImage} alt="underline-image" />
              <span
                className={`${style.overlayOnImageContainerOfContentInEditorButtonOfCard} overlayOnImageContainerOfContentInEditorButtonOfCard`}
              ></span>
            </span>
            <span
              className={`${style.imageContainerOfContentsInEditorButtonOfCard} imageContainerOfContentsInEditorButtonOfCard`}
              onClick={() => {
                if (formatOfSelectedText.strike) {
                  quillRef.current.getEditor().format("strike", false);
                } else {
                  quillRef.current.getEditor().format("strike", true);
                }
              }}
            >
              <Image src={strikeThroughImage} alt="strikeThrough-image" />
              <span
                className={`${style.overlayOnImageContainerOfContentsInEditorButtonOfCard} overlayOnImageContainerOfContentsInEditorButtonOfCard`}
              ></span>
            </span>
            <span
              className={`${style.imageContainerOfContentsInEditorButtonOfCard} imageContainerOfContentsInEditorButtonOfCard`}
              onClick={() => {
                if (formatOfSelectedText.blockquote) {
                  quillRef.current.getEditor().format("blockquote", false);
                } else {
                  quillRef.current.getEditor().format("blockquote", true);
                }
              }}
            >
              <Image src={quoteImage} alt="quote-image" />
              <span
                className={`${style.overlayOnImageContainerOfContentsInEditorButtonOfCard} overlayOnImageContainerOfContentsInEditorButtonOfCard`}
              ></span>
            </span>
            <span
              className={`${style.verticalLineInSubContainerOfContentsInEditorButtonOfCard} verticalLineInSubContainerOfContentsInEditorButtonOfCard`}
            ></span>
          </div>
          <div
            className={`${style.subContainerOfContentsInEditorButtonOfCard} subContainerOfContentsInEditorButtonOfCard`}
          >
            <span
              className={`${style.imageContainerOfContentsInEditorButtonOfCard} imageContainerOfContentsInEditorButtonOfCard`}
              onClick={() => {
                if (formatOfSelectedText.header === 1) {
                  quillRef.current.editor.format("header", false);
                } else {
                  quillRef.current.editor.format("header", 1);
                }
              }}
            >
              <Image src={h1Image} alt="h1-image" />
              <span
                className={`${style.overlayOnImageContainerOfContentsInEditorButtonOfCard} overlayOnImageContainerOfContentsInEditorButtonOfCard`}
              ></span>
            </span>
            <span
              className={`${style.imageContainerOfContentsInEditorButtonOfCard} imageContainerOfContentsInEditorButtonOfCard`}
              onClick={() => {
                if (formatOfSelectedText.header === 2) {
                  quillRef.current.editor.format("header", false);
                } else {
                  quillRef.current.editor.format("header", 2);
                }
              }}
            >
              <Image src={h2Image} alt="h2-image" />
              <span
                className={`${style.overlayOnImageContainerOfContentsInEditorButtonOfCard} overlayOnImageContainerOfContentsInEditorButtonOfCard`}
              ></span>
            </span>
            <span
              className={`${style.imageContainerOfContentsInEditorButtonOfCard} imageContainerOfContentsInEditorButtonOfCard`}
              onClick={() => {
                if (formatOfSelectedText.header === 3) {
                  quillRef.current.editor.format("header", false);
                } else {
                  quillRef.current.editor.format("header", 3);
                }
              }}
            >
              <Image src={h3Image} alt="h3-image" />
              <span
                className={`${style.overlayOnImageContainerOfContentsInEditorButtonOfCard} overlayOnImageContainerOfContentsInEditorButtonOfCard`}
              ></span>
            </span>
            <span
              className={`${style.verticalLineInSubContainerOfContentsInEditorButtonOfCard} verticalLineInSubContainerOfContentsInEditorButtonOfCard`}
            ></span>
          </div>
          <div
            className={`${style.subContainerOfContentsInEditorButtonOfCard} subContainerOfContentsInEditorButtonOfCard`}
          >
            <span
              className={`${style.imageContainerOfContentsInEditorButtonOfCard} imageContainerOfContentsInEditorButtonOfCard`}
              onClick={() => {
                if (formatOfSelectedText.list === "bullet") {
                  quillRef.current.editor.format("list", false);
                } else {
                  quillRef.current.editor.format("list", "bullet");
                }
              }}
            >
              <Image src={ulListImage} alt="ulList-image" />
              <span
                className={`${style.overlayOnImageContainerOfContentsInEditorButtonOfCard} overlayOnImageContainerOfContentsInEditorButtonOfCard`}
              ></span>
            </span>
            <span
              className={`${style.imageContainerOfContentsInEditorButtonOfCard} imageContainerOfContentsInEditorButtonOfCard`}
              onClick={() => {
                if (formatOfSelectedText.list === "ordered") {
                  quillRef.current.editor.format("list", false);
                } else {
                  quillRef.current.editor.format("list", "ordered");
                }
              }}
            >
              <Image src={olListImage} alt="olList-image" />
              <span
                className={`${style.overlayOnImageContainerOfContentsInEditorButtonOfCard} overlayOnImageContainerOfContentsInEditorButtonOfCard`}
              ></span>
            </span>
            <span
              className={`${style.verticalLineInSubContainerOfContentsInEditorButtonOfCard} verticalLineInSubContainerOfContentsInEditorButtonOfCard`}
            ></span>
          </div>
          <div
            className={`${style.subContainerOfContentsInEditorButtonOfCard} subContainerOfContentsInEditorButtonOfCard`}
          >
            <span
              className={`${style.imageContainerOfContentsInEditorButtonOfCard} imageContainerOfContentsInEditorButtonOfCard`}
              onClick={() => {
                if (formatOfSelectedText.link) {
                  const quill = quillRef.current.editor;
                  quill.format("link", false);
                } else {
                  const linkURL = window.prompt("Enter the URL:");

                  const quill = quillRef.current.editor;
                  quill.format("link", linkURL, "target", "_blank");
                }
              }}
            >
              <Image src={linkImage} alt="link-image" />
              <span
                className={`${style.overlayOnImageContainerOfContentsInEditorButtonOfCard} overlayOnImageContainerOfContentsInEditorButtonOfCard`}
              ></span>
            </span>
            <span
              className={`${style.imageContainerOfContentsInEditorButtonOfCard} imageContainerOfContentsInEditorButtonOfCard`}
              onClick={() => {
                if (formatOfSelectedText.list === "checked") {
                  quillRef.current.editor.format("list", false);
                } else {
                  quillRef.current.editor.format("list", "checked");
                }
              }}
            >
              <Image src={checkBoxImage} alt="check-box-image" />
              <span
                className={`${style.overlayOnImageContainerOfContentsInEditorButtonOfCard} overlayOnImageContainerOfContentsInEditorButtonOfCard`}
              ></span>
            </span>
            <span
              className={`${style.verticalLineInSubContainerOfContentsInEditorButtonOfCard} verticalLineInSubContainerOfContentsInEditorButtonOfCard`}
            ></span>
          </div>
          <div
            className={`${style.subContainerOfContentsInEditorButtonOfCard} subContainerOfContentsInEditorButtonOfCard`}
          >
            <span
              className={`${style.imageContainerOfContentsInEditorButtonOfCard} imageContainerOfContentsInEditorButtonOfCard`}
              onClick={() => {
                if (quillRef.current) {
                  quillRef.current.editor.history.undo();
                }
              }}
            >
              <Image src={undoImage} alt="undo-image" />
              <span
                className={`${style.overlayOnImageContainerOfContentsInEditorButtonOfCard} overlayOnImageContainerOfContentsInEditorButtonOfCard`}
              ></span>
            </span>
            <span
              className={`${style.imageContainerOfContentsInEditorButtonOfCard} imageContainerOfContentsInEditorButtonOfCard`}
              onClick={() => {
                if (quillRef.current) {
                  quillRef.current.editor.history.redo();
                }
              }}
            >
              <Image src={redoImage} alt="redo-image" />
              <span
                className={`${style.overlayOnImageContainerOfContentsInEditorButtonOfCard} overlayOnImageContainerOfContentsInEditorButtonOfCard`}
              ></span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
