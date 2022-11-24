import Boris from "../../images/Boris Vajagić-min.jpeg";
import Branislav from "../../images/Branislav Stojanovic-min.jpeg";
import Jelena from "../../images/Jelena Milev-min.jpg";
import Nikola from "../../images/Nikola Mirilo-min.jpg";

import React from "react";
import "./radionice.css";
import slikaPredavaca from "../../images/5-3.jpg";
import { useInView } from "react-intersection-observer";

const Radionice = () => {
  const { ref: myRef1, inView: Visible1 } = useInView();
  const { ref: myRef2, inView: Visible2 } = useInView();
  const { ref: myRef3, inView: Visible3 } = useInView();
  const { ref: myRef4, inView: Visible4 } = useInView();

  return (
    <div className="radionice-wrapper">
      <div ref={myRef1} className="radionica1-container">
        <div
          className={`radionica1-levo-container ${
            Visible1 ? "visible" : "hidden"
          }`}
        >
          <h1 className="redni-broj">001</h1>
          <h1 className="naziv-radionice">BACK-END</h1>
          <p className="radionica-opis">
            Back-end podrazumeva serversku stranu, to jest izradu programa koji
            je zaslužan za rad veb-sajta ili aplikacije. Odgovoran je za
            skladištenje, čuvanje i organizovanje podataka i osigurava da sve na
            strani korisnika funkcioniše.
          </p>
        </div>
        <div className="radionica1-desno-container">
          <div className="prvi-deo">
            <img
              className={`slika_desna ${Visible1 ? "visible2" : "hidden2"}`}
              src={Branislav}
              alt="Slika predavaca"
            />
            <h1
              className={`ime-predavaca ${Visible1 ? "visible1" : "hidden1"}`}
            >
              Branislav Stojanović
            </h1>
          </div>
          <p className={`predavac-opis ${Visible1 ? "visible1" : "hidden1"}`}>
            Branislav je student master studija na FON-u. Praktično znanje je
            stekao radeći u IT sektoru, učešćem na hakatonima i razvojem ličnih
            projekata. Trenutno je zaposlen na poziciji softverskog inženjera u
            kompaniji Blinking.
          </p>
        </div>
      </div>
      <div ref={myRef2} className="radionica2-container">
        <div className="radionica2-levo-container">
          <div className="prvi-deo">
            <h1 className={`ime-predavaca ${Visible2 ? "visible" : "hidden"}`}>
              Nikola Mirilo
            </h1>
            <img
              className={`slika_leva ${Visible2 ? "visible2" : "hidden2"}`}
              src={Nikola}
              alt="Slika predavaca"
            />
          </div>
          <p className={`predavac-opis ${Visible2 ? "visible" : "hidden"}`}>
            Nikola je student četvrte godine na Fakultetu organizacionih nauka.
            Zaposlen je kao junior IT projektni menadžer u kompaniji Adacta.
            Pored projektnog menadžmenta radi i kao front-end web developer na
            startup projektu pod nazivom <i>„Swapabee”</i>.
          </p>
        </div>
        <div
          className={`radionica2-desno-container ${
            Visible2 ? "visible1" : "hidden1"
          }`}
        >
          <h1 className="redni-broj">002</h1>
          <h1 className="naziv-radionice">FRONT-END</h1>
          <p className="radionica-opis">
            Kako bi aplikacije naših takmičara dobile svoj izgled i bile
            pristupačne, ova radionica je posvećena upravo kreiranju korisničkog
            interfejsa. Front-end omogućava laku komunikaciju sa korisnikom,
            nebitno da li se radi o veb-sajtu ili aplikaciji.
          </p>
        </div>
      </div>
      <div ref={myRef3} className="radionica3-container">
        <div
          className={`radionica1-levo-container ${
            Visible3 ? "visible" : "hidden"
          }`}
        >
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
              className={`slika_desna ${Visible3 ? "visible2" : "hidden2"}`}
              src={Boris}
              alt="Slika predavaca"
            />
            <h1
              className={`ime-predavaca ${Visible3 ? "visible1" : "hidden1"}`}
            >
              Boris Vajagić
            </h1>
          </div>
          <p className={`predavac-opis ${Visible3 ? "visible1" : "hidden1"}`}>
            Boris je student četvrte godine Fakulteta organizacionih nauka. U
            prethodnoj školskoj godini obavljao je ulogu predsednika Udruženja
            studenata informatike FONIS, a sada je član Upravnog odbora za
            upravljanje projektima.
          </p>
        </div>
      </div>
      <div ref={myRef4} className="radionica4-container">
        <div className="radionica2-levo-container">
          <div className="prvi-deo">
            <h1 className={`ime-predavaca ${Visible4 ? "visible" : "hidden"}`}>
              Jelena Milev
            </h1>
            <img
              className={`slika_leva ${Visible4 ? "visible2" : "hidden2"}`}
              src={Jelena}
              alt="Slika predavaca"
            />
          </div>
          <p className={`predavac-opis ${Visible4 ? "visible" : "hidden"}`}>
            Jelena Milev je master inženjer organizacionih nauka i medior
            software developer u kompaniji Levi9. Bavi se razvojem veb
            aplikacija korišćenjem Spring i Angular frameworka.
          </p>
        </div>
        <div
          className={`radionica2-desno-container ${
            Visible4 ? "visible1" : "hidden1"
          }`}
        >
          <h1 className="redni-broj">004</h1>
          <h1 className="naziv-radionice">GIT</h1>
          <p className="radionica-opis">
            Git je sistem za kontrolu i istoriju verzije koda, a samim tim je i
            veoma koristan za naše takmičare. Na ovoj radionici naučiće kako na
            što lakši način programirati u timu i upoznaće se sa prednostima
            koje ovaj program nudi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Radionice;
