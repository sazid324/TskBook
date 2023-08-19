// Library imports
import { useState, createContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Component imports
import Header from "../Components/Header";
import ListGroup from "../Components/ListGroup";
import Copyright from "../Components/Copyright";
import Button from "../Components/Button";
import Note from "../Pages/Notes";
import ToDo from "../Pages/ToDo";
import Reminders from "../Pages/Reminders";
import Labels from "../Pages/Labels";
import Archive from "../Pages/Archive";
import Trash from "../Pages/Trash";

// Component exports
export const currentPageContext: any = createContext(null);

function App() {
  // Hooks
  const [addNew, setAddNew] = useState(() => {
    const storedValue: any = localStorage.getItem(
      "card-notes-in-local-storage"
    );
    return storedValue ? JSON.parse(storedValue) : [];
  });
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState("/notes");

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
                <currentPageContext.Provider
                  value={[currentPage, setCurrentPage]}
                >
                  <Button addNew={addNew} setAddNew={setAddNew}>
                    Add New
                  </Button>
                  <ListGroup />
                </currentPageContext.Provider>
              </div>
              <div className="left-part-lower-section">
                <Copyright />
              </div>
            </div>
          </div>
          <div className="right-part">
            <div className="elements-container">
              <Routes>
                <Route path="/" element={<Navigate to="/notes" />} />
                <Route
                  path="/notes"
                  element={
                    <Note addNew={addNew} setAddNew={setAddNew} query={query} />
                  }
                />
                <Route path="/todo" element={<ToDo />} />
                <Route path="/reminders" element={<Reminders />} />
                <Route path="/labels" element={<Labels />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/trash" element={<Trash />} />
                <Route path="*" element={<Navigate to="/notes" />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
