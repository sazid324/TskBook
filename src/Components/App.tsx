// Library imports
import { useState } from "react";

// Component imports
import Header from "./Header";
import ListGroup from "./ListGroup";
import Copyright from "./Copyright";
import Button from "./Button";
import Card from "./Card";

// Assets
import noteImage from "../assets/Images/Icons_and_logos/note.svg";

function App() {
  // Hooks
  const [addNew, setAddNew] = useState([]);
  const [query, setQuery] = useState("");

  // Adding functionality of Add New button.
  const functionCalledByAddNewButton = () => {
    const addNewContainerOfCard: any = [
      ...addNew,
      {
        id: Date.now() + Math.floor(Math.random() * 78),
        headerValue: "",
        bodyValue: "",
      },
    ];

    setAddNew(addNewContainerOfCard);
  };

  const newReversedArray = (addNewArray: any) => {
    const newArray: any = [];

    for (let i = addNew.length - 1; i >= 0; --i) {
      newArray.push(addNewArray[i]);
    }

    return newArray;
  };

  const cardArray: any = newReversedArray(addNew);

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <header>
        <Header setNewQuery={setQuery} />
      </header>
      <section id="main-body">
        <div className="main-container">
          <div className="left-part">
            <div className="left-part-container">
              <div className="left-part-upper-section">
                <Button
                  functionCallingOnBtnClick={functionCalledByAddNewButton}
                >
                  Add New
                </Button>
                <ListGroup />
              </div>
              <div className="left-part-lower-section">
                <Copyright />
              </div>
            </div>
          </div>
          <div className="right-part">
            <div className="elements-container">
              <div className="main-container-OfCard">
                {cardArray.length > 0 ? (
                  cardArray.map((element: any, index: number) => {
                    return (
                      <Card
                        key={element.id}
                        newState={addNew}
                        setNewState={setAddNew}
                        cardArrayProp={cardArray}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
