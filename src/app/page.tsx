"use client";

// Library imports
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Component imports
import CardList from "../components/CardList/CardList";

// Custom Hook imports
import useJWTRecover from "@/customHook/useJWTRecover";

// Redux imports
import { apiData } from "@/redux/slices/cardSlice";

export default function Notes() {
  // Custom Hooks
  useJWTRecover();

  // Hooks
  const [divElement, setDivElement] = useState<any>(null);
  const [viewPort, setViewPort] = useState(() => {
    return {
      viewPortWidth: window.innerWidth,
      viewPortHeight: window.innerHeight,
    };
  });

  const cardDispatch = useDispatch();

  useEffect(() => {
    // Adding API data to initialstate of redux
    cardDispatch(apiData());
  }, []);

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
      let distanceFromLeft: number = divLeftOffset + divWidth;
      // Calculate the Height from the top part of the window to the bottom part of the element
      let distanceFromTop: number = divTopOffset + divHeight;

      // Making div element visible
      divElement.style.cssText = "display: block; opacity: 0;";

      // Setting position of button containers
      if (viewPort) {
        if (viewPort.viewPortWidth < distanceFromLeft) {
          if (viewPort.viewPortHeight < distanceFromTop) {
            setTimeout(() => {
              divElement.style.cssText = `transform: translate(-${
                divWidth / 2 + 3
              }px, -${
                divHeight / 2 + 3
              }px); display: block; opacity: 1; transition: opacity 0.5s;`;
            }, 5);
          } else {
            setTimeout(() => {
              divElement.style.cssText = `transform: translate(-${
                divWidth / 2 + 3
              }px, ${
                divHeight / 2 + 3
              }px); display: block; opacity: 1; transition: opacity 0.5s;`;
            }, 5);
          }
        } else {
          if (viewPort.viewPortHeight < distanceFromTop) {
            setTimeout(() => {
              divElement.style.cssText = `transform: translate(${
                divWidth / 2 + 3
              }px, -${
                divHeight / 2 + 3
              }px); display: block; opacity: 1; transition: opacity 0.5s;`;
            }, 5);
          } else {
            setTimeout(() => {
              divElement.style.cssText = `transform: translate(${
                divWidth / 2 + 3
              }px, ${
                divHeight / 2 + 3
              }px); display: block; opacity: 1; transition: opacity 0.5s;`;
            }, 5);
          }
        }
      }
    }
  }, [divElement !== null]);

  // Getting query value from redux store
  const query = useSelector((state: any) => {
    return state.SearchSlice;
  });

  const addNewCard: any = useSelector((state: any) => {
    return state.CardSlice.cardData;
  });

  // Functions
  // Reverse array
  const newReversedArray = (addNewArray: any) => {
    const newArray: any = [];

    if (addNewCard) {
      for (let i = addNewCard.length - 1; i >= 0; i--) {
        newArray.push(addNewArray[i]);
      }
    }

    return newArray;
  };

  const reversedCardArray: any = newReversedArray(addNewCard);

  // Getting window height and width
  window.onresize = () => {
    setViewPort({
      viewPortWidth: window.innerWidth,
      viewPortHeight: window.innerHeight,
    });
  };

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <CardList
        cardArrayProp={reversedCardArray.filter(
          (items: any) =>
            items.headerValue.toLowerCase().includes(query) ||
            items.bodyValue.toLowerCase().includes(query)
        )}
        setDivElement={setDivElement}
      />
    </>
  );
}
