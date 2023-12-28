// CSS imports
import style from "@/components/NoContent/NoContent.module.scss";

// Component imports
import PageWatermark from "@/components/PageWatermark/PageWatermark";
import Copyright from "@/components/Copyright/Copyright";

// Interfaces
interface NoContentElements {
  children: string;
  imageSource: any;
  imageAlt: string;
}

export default function NoContent({ children, imageSource, imageAlt }: NoContentElements) {
  return (
    <>
      <section className={`${style.noContentContainer} noContentContainer`}>
        <PageWatermark imageSource={imageSource} imageAlt={imageAlt}>
          {children}
        </PageWatermark>
        <footer
          className={`${style.leftPartLowerSection} leftPartLowerSection`}
        >
          <Copyright />
        </footer>
      </section>
    </>
  );
}
