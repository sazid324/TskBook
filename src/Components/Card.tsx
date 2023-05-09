import reminderImage from "../assets/Images/Icons_and_logos/reminder.svg";
import cardBackgroundImage from "../assets/Images/Icons_and_logos/cardBackground.svg";
import labelImage from "../assets/Images/Icons_and_logos/label.svg";
import archiveImage from "../assets/Images/Icons_and_logos/archive.svg";
import attachmentImage from "../assets/Images/Icons_and_logos/attachment.svg";
import threeDotImage from "../assets/Images/Icons_and_logos/threeDot.svg";

export default function Card() {
  return (
    <>
      <div className="containerOfCard">
        <div className="upperPartOfCard">
          <h4 className="headingOfCard">Heading</h4>
          <p className="bodyOfCard">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit non
            doloremque maxime, illo a, molestiae voluptate nobis modi deserunt
            culpa facilis recusandae saepe vitae debitis. Ab sit distinctio
            repellendus doloribus quibusdam aspernatur doloremque cumque aliquid
            aliquam libero. Expedita quam magni, ipsa atque accusamus iusto
            obcaecati dolor possimus molestias debitis hic reprehenderit itaque
            at explicabo, voluptatum est maiores. Sapiente illo esse ullam
            laborum aspernatur qui? Officiis consequatur maxime minima vel dicta
            ab harum, ipsum, sed nihil libero cumque quam quod ratione cum?
            Pariatur, ab aperiam. Dignissimos, facilis dolorum. Quaerat adipisci
            distinctio odit, sint quo doloremque eaque maxime beatae aperiam
            obcaecati alias blanditiis neque, iusto qui at eius dolorum, modi
            quibusdam nesciunt fugit suscipit expedita vitae voluptatum!
            Necessitatibus, natus dolore. Iste, qui ea nemo officiis voluptatem
            quaerat a error vero reiciendis modi impedit placeat aut sunt id
            saepe, quibusdam quam nam eum in blanditiis maxime necessitatibus
            facilis nobis accusantium? Excepturi porro eos, atque voluptas eaque
            officiis. Sint libero soluta excepturi omnis quae illo consequuntur
            dolore. Nesciunt iste id dolor. A amet deleniti delectus debitis
            cum, distinctio dolores ipsum aspernatur quasi saepe minus
            reprehenderit alias, fugiat accusantium illum fuga officiis et iusto
            voluptatum obcaecati harum placeat blanditiis libero. Expedita nobis
            nostrum aspernatur corrupti.
          </p>
        </div>
        <div className="lowerPartOfCard">
          <span className="elementInLowerPartOfCard">
            <img src={reminderImage} alt="reminder-image" />
          </span>
          <span className="elementInLowerPartOfCard">
            <img src={cardBackgroundImage} alt="cardBackground-image" />
          </span>
          <span className="elementInLowerPartOfCard">
            <img src={labelImage} alt="label-image" />
          </span>
          <span className="elementInLowerPartOfCard">
            <img src={archiveImage} alt="archive-image" />
          </span>
          <span className="elementInLowerPartOfCard">
            <img src={attachmentImage} alt="attachment-image" />
          </span>
          <span className="elementInLowerPartOfCard">
            <img src={threeDotImage} alt="threeDot-image" />
          </span>
        </div>
      </div>
    </>
  );
}
