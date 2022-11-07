import React from "react";
import "./radionice.css";
import slikaPredavaca from "../../images/Petra.jpg";

const radionice = () => {
  return (
    <div className="radionice-wrapper" id="radionice">
      <div className="radionica1-container">
        <div className="radionica1-levo-container">
          <h1 className="redni-broj">001</h1>
          <h1 className="naziv-radionice">BACK-END</h1>
          <p className="radionica-opis">
            Back-end podrazumeva serversku stranu, to jest izradu programa koji
            je zaslužan za rad veb-sajta ili aplikacije. Odgovoran je za
            skladištenje, čuvanje i organizovanje podataka i osiguravanju da sve
            na strani korisnika funkcioniše.
          </p>
        </div>
        <div className="radionica1-desno-container">
          <div className="prvi-deo">
            <img
              className="slika_desna"
              src={slikaPredavaca}
              alt="Slika predavaca"
            />
            <h1 className="ime-predavaca">Pavle Prica</h1>
          </div>
          <p className="predavac-opis">
            Pavle je Cloud inženjer i deo Zühlke tima. Bavi se aplikacijama
            baziranim na Cloud-u i fokus je na tehnologijama kao što su Java,
            Kotlin, Spring, Amazon Web Services.
          </p>
        </div>
      </div>
      <div className="radionica2-container">
        <div className="radionica2-levo-container">
          <div className="prvi-deo">
            <h1 className="ime-predavaca">Pavle Prica</h1>
            <img
              className="slika_leva"
              src={slikaPredavaca}
              alt="Slika predavaca"
            />
          </div>
          <p className="predavac-opis">
            Pavle je Cloud inženjer i deo Zühlke tima. Bavi se aplikacijama
            baziranim na Cloud-u i fokus je na tehnologijama kao što su Java,
            Kotlin, Spring, Amazon Web Services.
          </p>
        </div>
        <div className="radionica2-desno-container">
          <h1 className="redni-broj">002</h1>
          <h1 className="naziv-radionice">FRONT-END</h1>
          <p className="radionica-opis">
            Kako bi aplikacije naših takmičara dobile svoj izgled i bile
            pristupačne, ova radionica je posvećena upravo kreiranju korisničkog
            interfejsa. Front-end je sve što korisnik vidi i omogućava laku
            komunikaciju sa korisnikom, nebitno da li se radi o veb-sajtu ili
            aplikaciji.
          </p>
        </div>
      </div>
      <div className="radionica3-container">
        <div className="radionica1-levo-container">
          <h1 className="redni-broj">003</h1>
          <h1 className="naziv-radionice">SOFT-SKILLS</h1>
          <p className="radionica-opis">
            Kako je prezentovanje rešenja sastavni deo takmičenja, jako je važno
            da učesnici na pravi način predstave svoju ideju. Ova radionica
            osmišljena je tako da takmičari čuju savete i iskustva ljudi koji su
            odlično upoznati sa važnošću pravilnog izlaganja rešenja.
          </p>
        </div>
        <div className="radionica1-desno-container">
          <div className="prvi-deo">
            <img
              className="slika_desna"
              src={slikaPredavaca}
              alt="Slika predavaca"
            />
            <h1 className="ime-predavaca">Pavle Prica</h1>
          </div>
          <p className="predavac-opis">
            Pavle je Cloud inženjer i deo Zühlke tima. Bavi se aplikacijama
            baziranim na Cloud-u i fokus je na tehnologijama kao što su Java,
            Kotlin, Spring, Amazon Web Services.
          </p>
        </div>
      </div>
      <div className="radionica4-container">
        <div className="radionica2-levo-container">
          <div className="prvi-deo">
            <h1 className="ime-predavaca">Pavle Prica</h1>
            <img
              className="slika_leva"
              src={slikaPredavaca}
              alt="Slika predavaca"
            />
          </div>
          <p className="predavac-opis">
            Pavle je Cloud inženjer i deo Zühlke tima. Bavi se aplikacijama
            baziranim na Cloud-u i fokus je na tehnologijama kao što su Java,
            Kotlin, Spring, Amazon Web Services.
          </p>
        </div>
        <div className="radionica2-desno-container">
          <h1 className="redni-broj">004</h1>
          <h1 className="naziv-radionice">GIT</h1>
          <p className="radionica-opis">
            Git je sistem za kontrolu i istoriju verzije koda, a samim tim i
            veoma koristan za naše takmičare. Na ovoj radionici naučiće kako na
            što lakši način kodirati u timu i upoznaće se sa prednostima koje
            ovaj program nudi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default radionice;
