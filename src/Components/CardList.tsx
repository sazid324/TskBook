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
