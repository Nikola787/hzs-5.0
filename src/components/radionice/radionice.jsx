import React from "react";
import "./radionice.css";
import slikaPredavaca from "../../images/5-3.jpg";

const radionice = () => {
  return (
    <div className="radionice-wrapper">
      <div className="radionica1-container">
        <div className="radionica1-levo-container">
          <h1 className="redni-broj">001</h1>
          <h1 className="naziv-radionice">BACK-END</h1>
          <p className="radionica-opis">
            Na back-end radionici učesnici će saznati šta mogu ostvariti kroz
            Spring, njegov ekosistem i za šta on nudi rešenje. Programski jezik
            koji će biti korišćen je Java, a kreiraće se back-end aplikacija
            koja će se koristiti i na front-end radionici.
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
          <h1 className="naziv-radionice">BACK-END</h1>
          <p className="radionica-opis">
            Na back-end radionici učesnici će saznati šta mogu ostvariti kroz
            Spring, njegov ekosistem i za šta on nudi rešenje. Programski jezik
            koji će biti korišćen je Java, a kreiraće se back-end aplikacija
            koja će se koristiti i na front-end radionici.
          </p>
        </div>
      </div>
      <div className="radionica1-container">
        <div className="radionica1-levo-container">
          <h1 className="redni-broj">001</h1>
          <h1 className="naziv-radionice">BACK-END</h1>
          <p className="radionica-opis">
            Na back-end radionici učesnici će saznati šta mogu ostvariti kroz
            Spring, njegov ekosistem i za šta on nudi rešenje. Programski jezik
            koji će biti korišćen je Java, a kreiraće se back-end aplikacija
            koja će se koristiti i na front-end radionici.
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
          <h1 className="naziv-radionice">BACK-END</h1>
          <p className="radionica-opis">
            Na back-end radionici učesnici će saznati šta mogu ostvariti kroz
            Spring, njegov ekosistem i za šta on nudi rešenje. Programski jezik
            koji će biti korišćen je Java, a kreiraće se back-end aplikacija
            koja će se koristiti i na front-end radionici.
          </p>
        </div>
      </div>
    </div>
  );
};

export default radionice;
