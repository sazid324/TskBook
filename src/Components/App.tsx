import Header from "./Header";
import ListGroup from "./ListGroup";
import Copyright from "./Copyright";
import Button from "./Button";
import Card from "./Card";
import { renderToString } from "react-dom/server";

function App() {
  const functionCalledByAddNewButton = () => {
    const mainContainerOfCard: any = document.querySelector(
      ".mainContainerOfCard"
    );

    const cardComponent: any = `${renderToString(<Card />)}`;

    mainContainerOfCard.insertAdjacentHTML("beforeend", cardComponent);
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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
