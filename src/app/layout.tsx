// Library imports
import type { Metadata } from "next";

// CSS imports
import "../styles/global.scss";
import style from "@/app/layout.module.scss";

// Redux Imports
import ReduxProvider from "@/redux/provider";

// Component imports
import Header from "../components/Header/Header";
import ListGroup from "../components/ListGroup/ListGroup";
import Button from "../components/Button/Button";

// Metadata
export const metadata: Metadata = {
  title: "TskBook",
  description:
    "TskBook is a productivity tool that helps to you to increase your productivity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body>
          <ReduxProvider>
            <header id={style.header}>
              <Header />
            </header>
            <main id={style.mainBody}>
              <section className={`${style.mainContainer} mainContainer`}>
                <aside className={`${style.leftPart} leftPart`}>
                  <div
                    className={`${style.leftPartContainer} leftPartContainer`}
                  >
                    <section className="leftPartUpperSection">
                      <Button>Add New</Button>
                      <ListGroup />
                    </section>
                  </div>
                </aside>
                <section className={`${style.rightPart} rightPart`}>
                  <div
                    className={`${style.elementsContainer} elementsContainer`}
                  >
                    {children}
                  </div>
                </section>
              </section>
            </main>
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}
