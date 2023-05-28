export default function Copyright() {
  let copyrightYear: any = new Date().getFullYear();

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className="container-OfCopyright">
        <p className="text-OfCopyright">
          &copy; {copyrightYear} TskBook | All rights reserved.
        </p>
      </div>
    </>
  );
}
