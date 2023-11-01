// CSS imports
import style from "@/components/Copyright/Copyright.module.scss";

export default function Copyright() {
  let copyrightYear: any = new Date().getFullYear();

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className={`${style.containerOfCopyright} containerOfCopyright`}>
        <p className={`${style.textOfCopyright} textOfCopyright`}>
          &copy; {copyrightYear} TskBook | All rights reserved.
        </p>
      </div>
    </>
  );
}
