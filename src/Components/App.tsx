import Header from "./Header";
import ListGroup from "./ListGroup";
import Copyright from "./Copyright";
import Button from "./Button";

function App() {
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
                <Button>Add New</Button>
                <ListGroup />
              </div>
              <div className="leftPartLowerSection">
                <Copyright />
              </div>
            </div>
          </div>
          <div className="rightPart">
            <div className="elementsContainer"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
