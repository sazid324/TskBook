// Library imports
import { useEffect, useContext } from "react";

// Component imports
import Card from "./Card";
import PageWatermark from "./PageWatermark";
import { addNewNoteContext } from "../Pages/Notes";

// Assets
import noteImage from "../assets/Images/Icons_and_logos/note.svg";

// Interfaces
interface CardListElements {
  cardArrayProp: any;
  setDivElement: any;
}

export default function CardList({
  cardArrayProp,
  setDivElement,
}: CardListElements) {
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
    // Saving data on local storage when new card is added.
    localStorage.setItem("card-notes-in-local-storage", JSON.stringify(addNew));
  }, [addNew]);

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
              setDivElement={setDivElement}
            />
          );
        })
      ) : (
        <PageWatermark
          imageSource={noteImage}
          imageAlt={"note_logo"}
          children={"Notes you add appear here"}
        />
      )}
    </div>
  );
}
