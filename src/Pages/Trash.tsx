// Component imports
import PageWatermark from "../Components/pageWatermark";

// Assets
import trashImage from "../assets/Images/Icons_and_logos/trash.svg";

export default function Trash() {
  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className="trash-page-container-OfCard">
        {0 ? (
          <p>Dummy</p>
        ) : (
          <PageWatermark
            imageSource={trashImage}
            imageAlt={"trash_logo"}
            children={"No elements in Trash"}
          />
        )}
      </div>
    </>
  );
}
