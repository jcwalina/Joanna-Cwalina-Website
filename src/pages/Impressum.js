import { BackButton } from "../ui/Buttons";

export const Impressum = () => {
  return (
    <>
      <BackButton path={-1} />

      <div className="impressum center">
        <div className="impressum-content">
          <header className=" ">
            <h2 className="">Impressum</h2>
          </header>

          <div>
            <h3>Angaben gemäß § 5 TMG</h3>

            <p>
              Joanna Cwalina
              <br />
              Kestenbergerweg 6<br />
              67105 Schifferstadt
            </p>

            <h3>Kontakt</h3>
            <p>
              Telefon: +49 15772195452 <br />
              E-Mail: joannacwalinaa@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
