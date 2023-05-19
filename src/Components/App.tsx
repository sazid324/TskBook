import { useState } from "react";
import Header from "./Header";
import ListGroup from "./ListGroup";
import Copyright from "./Copyright";
import Button from "./Button";
import Card from "./Card";

function App() {
  // Adding functionality of Add New button.

  const [addNew, setAddNew] = useState([]);

  const functionCalledByAddNewButton = () => {
    const addNewContainerOfCard: any = [...addNew, addNew];
    setAddNew(addNewContainerOfCard);
  };

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
                {addNew}
                {addNew.map((element: never) => {
                  return (
                    <Card
                      key={addNew.indexOf(element)}
                      indexOfCard={addNew.indexOf(element)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
