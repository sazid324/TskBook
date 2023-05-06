export default function Copyright() {
  let copyrightYear: any = new Date().getFullYear();

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
