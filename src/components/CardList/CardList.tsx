// CSS imports
import style from "@/components/CardList/CardList.module.scss";

// Component imports
import Card from "../Card/Card";
import PageWatermark from "../PageWatermark/PageWatermark";

// Assets
import noteImage from "../../../public/assets/Images/Icons/note.svg";

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
          <PageWatermark imageSource={noteImage} imageAlt={"note_logo"}>
            {"Notes you add appear here"}
          </PageWatermark>
        )}
      </div>
    </>
  );
}
