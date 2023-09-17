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
  const [divElement, setDivElement] = useState<any>(null);
  const [viewPort, setViewPort] = useState({
    viewPortWidth: window.innerWidth,
    viewPortHeight: window.innerHeight,
  });

  useEffect(() => {
    // Effects on viewport change.
    if (divElement) {
      // Get the position of the div relative to the window's left edge
      const divLeftOffset: number = divElement.getBoundingClientRect().left;
      // Get the position of the div relative to the window's top edge
      const divTopOffset: number = divElement.getBoundingClientRect().top;

      // Get the width of the div
      const divWidth: number = divElement.offsetWidth;
      // Get the height of the div
      const divHeight: number = divElement.offsetHeight;

      // Calculate the width from the left part of the window to the right part of the element
      var distanceFromLeft: number = divLeftOffset + divWidth;
      // Calculate the Height from the top part of the window to the bottom part of the element
      var distanceFromTop: number = divTopOffset + divHeight;

      // Setting position of button containers
      if (viewPort.viewPortWidth < distanceFromLeft) {
        if (viewPort.viewPortHeight < distanceFromTop) {
          divElement.style.cssText = `transform: translate(-${
            divWidth / 2
          }px, -${divHeight / 2}px);`;
        } else {
          divElement.style.cssText = `transform: translate(-${
            divWidth / 2
          }px, ${divHeight / 2}px);`;
        }
      } else {
        if (viewPort.viewPortHeight < distanceFromTop) {
          divElement.style.cssText = `transform: translate(${
            divWidth / 2
          }px, -${divHeight / 2}px);`;
        } else {
          divElement.style.cssText = `transform: translate(${divWidth / 2}px, ${
            divHeight / 2
          }px);`;
        }
      }
    }
  }, [divElement != null]);

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
            setDivElement={setDivElement}
          />
        </cardArrayContext.Provider>
      </addNewNoteContext.Provider>
    </>
  );
}
