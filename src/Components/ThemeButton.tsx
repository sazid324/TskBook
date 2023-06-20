// Assets
import cardBackgroundImage from "../assets/Images/Icons_and_logos/cardBackground.svg";

// Interfaces
interface ThreeDotMenuElements {
  indexOfCard: number;
}

export default function ({ indexOfCard }: ThreeDotMenuElements) {
  // Variables
  const colors: any = [
    // "#801922",
    // "#B22833",
    "#F7525F",
    "#3179F5",
    "#66BB6A",
    "#FFEE58",
    "#787B86",
    "#F77C80",
    "#5B9CF6",
    "#81C784",
    "#FFF176",
    "#B2B5BE",
    "#FAA1A4",
    "#90BFF9",
    "#A5D6A7",
    "#FFF59D",
    "#FFFFFF",
  ];

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <span className="theme-menu-button-OfCard">
        <img src={cardBackgroundImage} alt="cardBackground-image" />
        <div
          className="theme-items-wraper-in-lower-part-OfCard"
          onMouseEnter={() => {
            const themeButtonOfCard: any = document.getElementsByClassName(
              "theme-button-OfCard"
            )[indexOfCard];
            themeButtonOfCard.style.display = "none";
          }}
        >
          <div className="color-items-in-theme-button-OfCard">
            {colors.map((color: any) => {
              return (
                <div
                  className="color-in-theme-button-OfCard"
                  style={{
                    backgroundColor: `${color}`,
                  }}
                  onClick={() => {
                    const containerOfCard: any =
                      document.getElementsByClassName("container-OfCard")[
                        indexOfCard
                      ];
                    const upperPartOfCard: any =
                      document.getElementsByClassName("upper-part-OfCard")[
                        indexOfCard
                      ];
                    const lowerPartOfCard: any =
                      document.getElementsByClassName("lower-part-OfCard")[
                        indexOfCard
                      ];
                    const headingOfCard: any =
                      document.getElementsByClassName("heading-OfCard")[
                        indexOfCard
                      ];
                    const bodyOfCard: any =
                      document.getElementsByClassName("body-OfCard")[
                        indexOfCard
                      ];

                    containerOfCard.style.borderColor = `${color}`;
                    upperPartOfCard.style.borderColor = `${color}`;
                    lowerPartOfCard.style.backgroundColor = `${color}`;
                    headingOfCard.style.backgroundColor = `${color}`;
                    bodyOfCard.style.backgroundColor = `${color}`;
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </span>
      <p className="element-text-in-lower-part-OfCard theme-button-OfCard">
        Theme
      </p>
    </>
  );
}
