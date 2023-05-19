export default function Copyright() {
  let copyrightYear: any = new Date().getFullYear();

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className="containerOfCopyright">
        <p className="peragraphOfCopyright">
          &copy; {copyrightYear} TskBook | All rights reserved.
        </p>
      </div>
    </>
  );
}
