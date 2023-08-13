// Library imports
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Component imports
import Header from "../Components/Header";
import ListGroup from "../Components/ListGroup";
import Copyright from "../Components/Copyright";
import Button from "../Components/Button";
import Note from "../Pages/Note";

function App() {
  // Hooks
  const [addNew, setAddNew] = useState(() => {
    const storedValue: any = localStorage.getItem(
      "card-notes-in-local-storage"
    );
    return storedValue ? JSON.parse(storedValue) : [];
  });
  const [query, setQuery] = useState("");

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
                <Button addNew={addNew} setAddNew={setAddNew}>
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
              <Routes>
                <Route
                  path="/note"
                  element={
                    <Note addNew={addNew} setAddNew={setAddNew} query={query} />
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
