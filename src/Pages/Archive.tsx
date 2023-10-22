// Component imports
import PageWatermark from "../Components/pageWatermark";

// Assets
import archiveImage from "../assets/Images/Icons_and_logos/archive.svg";

export default function Archive() {
  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className="archive-container-OfCard">
        {0 ? (
          <p>Dummy</p>
        ) : (
          <PageWatermark
            imageSource={archiveImage}
            imageAlt={"archive_logo"}
            children={"Your archived elements appear here"}
          />
        )}
      </div>
    </>
  );
}
