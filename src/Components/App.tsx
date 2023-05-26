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
  const [addNew, setAddNew] = useState([]);

  // Adding functionality of Add New button.
  const functionCalledByAddNewButton = () => {
    const addNewContainerOfCard: any = [
      ...addNew,
      {
        id: Date.now() + Math.floor(Math.random() * 78),
      },
    ];

    setAddNew(addNewContainerOfCard);
  };

  const reverseArray = (addNew: any) => {
    const newCardArray: any = [];

    for (let i = addNew.length - 1; i >= 0; i--) {
      newCardArray.push(addNew[i]);
    }

    return newCardArray;
  };

  const cardArray: any = reverseArray(addNew);

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <header>
        <Header />
      </header>
      <section id="mainBody">
        <div className="mainContainer">
          <div className="leftPart">
            <div className="leftPartContainer">
              <div className="leftPartUpperSection">
                <Button
                  functionCallingOnBtnClick={functionCalledByAddNewButton}
                >
                  Add New
                </Button>
                <ListGroup />
              </div>
              <div className="leftPartLowerSection">
                <Copyright />
              </div>
            </div>
          </div>
          <div className="rightPart">
            <div className="elementsContainer">
              <div className="mainContainerOfCard">
                {cardArray.length > 0 ? (
                  cardArray.map((element: any, index: number) => {
                    return (
                      <Card
                        key={element.id}
                        newState={addNew}
                        setNewState={setAddNew}
                        indexOfCard={index}
                      />
                    );
                  })
                ) : (
                  <span className="elementsOnNoNote">
                    <img
                      className="imgElementOnNoNote"
                      src={noteImage}
                      alt="note_logo"
                    />
                    <p className="textElementOnNoNote">
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
