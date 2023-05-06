import Divider from "./Divider";
import Header from "./Header";
import ListGroup from "./ListGroup";
import Copyright from "./Copyright";
import Button from "./Button";

function App() {
  return (
    <>
      <header>
        <Header />
        <Divider width="100%" height="1px" color="#e2e2e2" />
      </header>
      <section id="main_body">
        <div className="main_container">
          <div className="leftPart">
            <div className="topPartOfLeftPart">
              <Button>Add New</Button>
              <ListGroup />
            </div>
            <div className="bottomPartOfLeftPart">
              <Copyright />
            </div>
          </div>
          <div className="rightPart">
            <Divider width="1px" height="100%" color="#ececec" />
            <div className="elementsContainer"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
