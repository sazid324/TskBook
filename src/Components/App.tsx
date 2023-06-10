// Library imports
import { useEffect, useState, useRef } from "react";

// Component imports
import Header from "./Header";
import ListGroup from "./ListGroup";
import Copyright from "./Copyright";
import Button from "./Button";
import CardList from "./CardList";

function App() {
  // Hooks
  const [addNew, setAddNew] = useState([]);
  const [query, setQuery] = useState("");

  const localNotesLoaded: any = useRef(false);
  const newNotesLoaded: any = useRef(false);

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

  // Saving and retriving data from local storage
  useEffect(() => {
    if (localNotesLoaded.current === false) {
      const retriveSavedCardNotes: any = JSON.parse(
        localStorage.getItem("card-notes-in-local-storage") || ""
      );

      if (
        retriveSavedCardNotes[0].headerValue != "" &&
        retriveSavedCardNotes[0].bodyValue != ""
      ) {
        setAddNew(retriveSavedCardNotes);

        return () => {
          localNotesLoaded.current = true;
        };
      }
    }
  }, []);

  useEffect(() => {
    if (newNotesLoaded === false) {
      localStorage.setItem(
        "card-notes-in-local-storage",
        JSON.stringify(addNew)
      );

      return () => {
        newNotesLoaded.current = true;
      };
    }

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
