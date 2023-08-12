// Library imports
import { useEffect, useContext } from "react";

// Component imports
import Card from "./Card";
import { addNewNoteContext } from "../Pages/Note";

// Assets
import noteImage from "../assets/Images/Icons_and_logos/note.svg";

// Interfaces
interface CardListElements {
  cardArrayProp: any;
}

export default function CardList({ cardArrayProp }: CardListElements) {
  // Variables
  let localNotesLoaded: boolean = false;

  // Hooks
  const [addNew, setAddNew] = useContext<any>(addNewNoteContext);

  useEffect(() => {
    // Saving and retriving data from local storage
    if (localNotesLoaded == false) {
      localNotesLoaded = true;

      const retriveSavedCardNotes: any = JSON.parse(
        localStorage.getItem("card-notes-in-local-storage") || ""
      );

      setAddNew(retriveSavedCardNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("card-notes-in-local-storage", JSON.stringify(addNew));

    // Making card header and body visible
    for (let i = 0; i < addNew.length; i++) {
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
  }, [addNew]);

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
