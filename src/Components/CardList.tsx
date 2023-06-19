// Library imports
import { useEffect } from "react";

// Component imports
import Card from "./Card";

// Assets
import noteImage from "../assets/Images/Icons_and_logos/note.svg";

// Interfaces
interface CardListElements {
  newState: any;
  setNewState: any;
  cardArrayProp: any;
}

export default function CardList({
  newState,
  setNewState,
  cardArrayProp,
}: CardListElements) {
  // Variables
  let localNotesLoaded: boolean = false;

  // Hooks
  useEffect(() => {
    // Saving and retriving data from local storage
    if (localNotesLoaded == false) {
      localNotesLoaded = true;

      const retriveSavedCardNotes: any = JSON.parse(
        localStorage.getItem("card-notes-in-local-storage") || ""
      );

      setNewState(retriveSavedCardNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "card-notes-in-local-storage",
      JSON.stringify(newState)
    );

    // Making card header and body visible
    for (let i = 0; i < newState.length; i++) {
      const headingOfCard: any =
        document.getElementsByClassName("heading-OfCard")[i];
      const bodyOfCard: any = document.getElementsByClassName("body-OfCard")[i];

      headingOfCard.disabled = true;
      bodyOfCard.disabled = true;

      if (headingOfCard.value == "") {
        headingOfCard.style.display = "none";
      } else {
        headingOfCard.style.display = "block";
      }
      if (bodyOfCard.value == "") {
        bodyOfCard.style.display = "none";
      } else {
        bodyOfCard.style.display = "block";
      }
    }
  }, [newState]);

  useEffect(() => {
    // Making card header and body visible
    for (let i = 0; i < cardArrayProp.length; i++) {
      const headingOfCard: any =
        document.getElementsByClassName("heading-OfCard")[i];
      const bodyOfCard: any = document.getElementsByClassName("body-OfCard")[i];

      headingOfCard.disabled = true;
      bodyOfCard.disabled = true;

      if (headingOfCard.value == "") {
        headingOfCard.style.display = "none";
      } else {
        headingOfCard.style.display = "block";
      }
      if (bodyOfCard.value == "") {
        bodyOfCard.style.display = "none";
      } else {
        bodyOfCard.style.display = "block";
      }
    }
  }, [cardArrayProp]);

  /////////////////////// Return Method ///////////////////////

  return (
    <div className="main-container-OfCard">
      {cardArrayProp.length > 0 ? (
        cardArrayProp.map((element: any, index: number) => {
          return (
            <Card
              key={element.id}
              newState={newState}
              setNewState={setNewState}
              cardArrayProp={cardArrayProp}
              elementOfCard={element}
              indexOfCard={index}
            />
          );
        })
      ) : (
        <span className="watermark-on-no-items">
          <img
            className="watermark-img-on-no-items"
            src={noteImage}
            alt="note_logo"
          />
          <p className="watermark-text-on-no-items">
            Notes you add appear here
          </p>
        </span>
      )}
    </div>
  );
}
