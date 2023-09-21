// Component imports
import PageWatermark from "../Components/PageWatermark";

// Assets
import todoImage from "../assets/Images/Icons_and_logos/to-do.svg";

export default function todo() {
  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className="to-do-page-container-OfCard">
        {0 ? (
          <p>Dummy</p>
        ) : (
          <PageWatermark
            imageSource={todoImage}
            imageAlt={"to-do_logo"}
            children={"To-do elements will appear here"}
          />
        )}
      </div>
    </>
  );
}
