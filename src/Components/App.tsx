// Library imports
import { useEffect, useState } from "react";

// Component imports
import Header from "./Header";
import ListGroup from "./ListGroup";
import Copyright from "./Copyright";
import Button from "./Button";
import CardList from "./CardList";

function App() {
  // Hooks
  const [addNew, setAddNew] = useState(() => {
    const storedValue = localStorage.getItem("card-notes-in-local-storage");
    return storedValue ? JSON.parse(storedValue) : [];
  });
  const [query, setQuery] = useState("");

  let localNotesLoaded: boolean = false;

  useEffect(() => {
    // Saving and retriving data from local storage
    if (localNotesLoaded == false) {
      localNotesLoaded = true;

      const retriveSavedCardNotes: any = JSON.parse(
        localStorage.getItem("card-notes-in-local-storage") || ""
      );

      setAddNew(retriveSavedCardNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("card-notes-in-local-storage", JSON.stringify(addNew));

    // Making card header and body visible
    for (let i = 0; i < addNew.length; i++) {
      const headingOfCard: any =
        document.getElementsByClassName("heading-OfCard")[i];
      const bodyOfCard: any = document.getElementsByClassName("body-OfCard")[i];

      headingOfCard.disabled = true;
      bodyOfCard.disabled = true;

      if (headingOfCard.value == "") {
        headingOfCard.style.display = "none";
      } else {
        headingOfCard.style.display = "block";
      }
      if (bodyOfCard.value == "") {
        bodyOfCard.style.display = "none";
      } else {
        bodyOfCard.style.display = "block";
      }
    }
  }, [addNew]);

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

  // Reverse array
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
              <CardList
                newState={addNew}
                setNewState={setAddNew}
                cardArrayProp={cardArray.filter(
                  (items: any) =>
                    items.headerValue.toLowerCase().includes(query) ||
                    items.bodyValue.toLowerCase().includes(query)
                )}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
