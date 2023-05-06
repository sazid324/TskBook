import Divider from "./Divider";
import Header from "./Header";
import ListGroup from "./ListGroup";

function App() {
  return (
    <>
      <header>
        <Header />
        <Divider width="100%" height="1px" color="#ececec" />
      </header>
      <section id="main_body">
        <div className="main_container">
          <div className="leftPart">
            <ListGroup />
          </div>
          <div className="rightPart">
            <Divider width="1px" height="100%" color="#ececec" />
            {/* <div className="elementsContainer"></div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
