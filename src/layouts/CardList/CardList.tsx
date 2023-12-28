// CSS imports
import style from "@/layouts/CardList/CardList.module.scss";

// Component imports
import Card from "@/components/Card/Card";
import NoContent from "@/layouts/NoContent/NoContent";

// Assets
import noteImage from "@/assets/Images/Icons/note.svg";

// Interfaces
interface CardListElements {
  cardArrayProp: any;
  setDivElement: any;
}

export default function CardList({
  cardArrayProp,
  setDivElement,
}: CardListElements) {
  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className={`${style.mainContainerOfCard} mainContainerOfCard`}>
        {cardArrayProp.length > 0 ? (
          cardArrayProp.map((element: any, index: number) => {
            return (
              <Card
                key={element._id}
                elementOfCard={element}
                indexOfCard={index}
                setDivElement={setDivElement}
              />
            );
          })
        ) : (
          <NoContent imageSource={noteImage} imageAlt={"note_logo"}>
            {"Notes you add appear here"}
          </NoContent>
        )}
      </div>
    </>
  );
}
