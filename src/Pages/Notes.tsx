// Library imports
import { useState, useEffect, createContext } from "react";

// Component imports
import CardList from "../Components/CardList";

// Component exports
export const addNewNoteContext: any = createContext(null);
export const cardArrayContext: any = createContext(null);

// Interfaces
interface NoteElements {
  addNew: any;
  setAddNew: any;
  query: any;
}

export default function Notes({ addNew, setAddNew, query }: NoteElements) {
  // Functions
  window.onresize = () => {
    setViewPort({
      viewPortWidth: window.innerWidth,
      viewPortHeight: window.innerHeight,
    });
  };

  // Hooks
  const [viewPort, setViewPort] = useState({
    viewPortWidth: window.innerWidth,
    viewPortHeight: window.innerHeight,
  });

  useEffect(() => {
    // Effects on viewport change.
    for (let i = 0; i < cardArray.length; i++) {
      const themeMenuButtonOfCard: any = document.getElementsByClassName(
        "theme-items-wraper-in-lower-part-OfCard"
      )[i];
      const attachmentItemsWraperInLowerPartOfCard: any =
        document.getElementsByClassName(
          "attachment-items-wraper-in-lower-part-OfCard"
        )[i];
      const threeDotMenuOfCard: any = document.getElementsByClassName(
        "three-dot-items-wraper-in-lower-part-OfCard"
      )[i];

      const containerOfCardDistanceFromRight: any = document
        .getElementsByClassName("container-OfCard")
        [i].getBoundingClientRect().right;
      const containerOfCardDistanceFromBottom: any = document
        .getElementsByClassName("container-OfCard")
        [i].getBoundingClientRect().bottom;

      if (viewPort.viewPortWidth < containerOfCardDistanceFromRight + 95) {
        if (viewPort.viewPortHeight < containerOfCardDistanceFromBottom + 95) {
          themeMenuButtonOfCard.style.cssText = "left: 11px; top: -117px";
          attachmentItemsWraperInLowerPartOfCard.style.cssText =
            "left: -192px; top: -165px";
          threeDotMenuOfCard.style.cssText = "left: -142px; top: -113px";
        } else {
          themeMenuButtonOfCard.style.cssText = "left: 11px; top: 11px";
          attachmentItemsWraperInLowerPartOfCard.style.cssText =
            "left: -192px; top: 11px";
          threeDotMenuOfCard.style.cssText = "left: -142px; top: 11px";
        }
      } else {
        if (viewPort.viewPortHeight < containerOfCardDistanceFromBottom + 95) {
          themeMenuButtonOfCard.style.cssText = "left: 11px; top: -117px";
          attachmentItemsWraperInLowerPartOfCard.style.cssText =
            "left: 11px; top: -165px";
          threeDotMenuOfCard.style.cssText = "left: 11px; top: -113px";
        } else {
          themeMenuButtonOfCard.style.cssText = "left: 11px; top: 11px";
          attachmentItemsWraperInLowerPartOfCard.style.cssText =
            "left: 11px; top: 11px";
          threeDotMenuOfCard.style.cssText = "left: 11px; top: 11px";
        }
      }
    }
  }, [viewPort]);

  // Reverse array
  const newReversedArray = (addNewArray: any) => {
    const newArray: any = [];

    for (let i = addNew.length - 1; i >= 0; i--) {
      newArray.push(addNewArray[i]);
    }

    return newArray;
  };

  const cardArray: any = newReversedArray(addNew);

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <addNewNoteContext.Provider value={[addNew, setAddNew]}>
        <cardArrayContext.Provider value={cardArray}>
          <CardList
            cardArrayProp={cardArray.filter(
              (items: any) =>
                items.headerValue.toLowerCase().includes(query) ||
                items.bodyValue.toLowerCase().includes(query)
            )}
          />
        </cardArrayContext.Provider>
      </addNewNoteContext.Provider>
    </>
  );
}