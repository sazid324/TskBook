import Header from "./Header";
import ListGroup from "./ListGroup";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section id="main_body">
        <div className="main_container">
          <div className="rightPart">
            <ListGroup />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
