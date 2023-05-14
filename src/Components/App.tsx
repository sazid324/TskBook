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
    const addNewContainerOfCard: any = [...addNew, []];
    setAddNew(addNewContainerOfCard);
  };

  // Adding functionality of delete button.

  const functionCalledByDeleteButton = (i: any) => {
    const deleteContainerOfCard: any = [...addNew];
    deleteContainerOfCard.splice(i, 1);
    setAddNew(deleteContainerOfCard);
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
                {addNew.map((i: any) => {
                  return (
                    <Card
                      functionCalledByDeleteButton={() =>
                        functionCalledByDeleteButton(i)
                      }
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
