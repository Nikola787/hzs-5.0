import React from "react";
import "./agenda.css";
const agenda = () => {
  return (
    <div>
      <div className="agenda">
        <div className="agenda-title">
          <h1 className="title">AGENDA</h1>
        </div>
        <div className="agenda-content">
          <div className="agenda-first">
            <div className="first">
              <div className="ag-fi-date">
                <p>3. 11</p>
              </div>
              <div className="ag-fi-title">
                <p>Otvaranje prijava</p>
              </div>
              <div className="ag-fi-text">
                <p>
                  Od 3. novembra učesnici imaju dve nedelje da okupe svoj tim od
                  tri ili četiri člana i popune prijavu na sajtu.
                </p>
              </div>
            </div>
          </div>
          <div className="agenda-second">
            <div className="second">
              <div className="ag-sc-date">
                <p>17. 11</p>
              </div>
              <div className="ag-sc-title">
                <p>Zatvaranje prijava</p>
              </div>
              <div className="ag-sc-text">
                <p>
                  Nakon zatvaranja, sve prijave će biti pregledane i timovi će
                  dobiti mejl sa rezultatima prvog kruga selekcije i daljim
                  uputstvima.
                </p>
              </div>
            </div>
          </div>
          <div className="agenda-third">
            <div className="third">
              <div className="ag-th-date">
                <p>22. 11</p>
              </div>
              <div className="ag-th-title">
                <p>Online test</p>
              </div>
              <div className="ag-th-text">
                <p>
                  Timove koji prođu prvi krug selekcije čeka drugi krug - online
                  provera informatičkog znanja nakon koje će najbolje plasirani
                  timovi proći i u treći, poslednji krug.
                </p>
              </div>
            </div>
          </div>
          <div className="agenda-fourth">
            <div className="fourth">
              <div className="ag-fo-date">
                <p>26. 11 - 27. 11</p>
              </div>
              <div className="ag-fo-title">
                <p>Radionice</p>
              </div>
              <div className="ag-fo-text">
                <p>
                  U sklopu poslednjeg kruga selekcije biće održane radionice
                  koje će našim učesnicima proširiti znanja i olakšati izradu
                  domaćeg zadatka.
                </p>
              </div>
            </div>
          </div>
          <div className="agenda-fifth">
            <div className="fifth">
              <div className="ag-fv-date">
                <p>27. 11 - 1. 12</p>
              </div>
              <div className="ag-fv-title">
                <p>Domaći zadatak</p>
              </div>
              <div className="ag-fv-text">
                <p>
                  Treći krug selekcije predstavlja domaći zadatak u vidu
                  projektnog rada. Nakon pregledanja domaćih zadataka biće
                  odabrani takmičari hakatona.
                </p>
              </div>
            </div>
          </div>
          <div className="agenda-sixth">
            <div className="sixth">
              <div className="ag-sh-date">
                <p>10. 12 - 11. 12</p>
              </div>
              <div className="ag-sh-title">
                <p>Hakaton</p>
              </div>
              <div className="ag-sh-text">
                <p>
                  Na samom takmičenju biće predstavljena tema hakatona, nakon
                  čega timovi imaju 24 časa da razviju svoje softversko rešenje
                  uz pomoć stručnih mentora. Posle isteka vremena sledi
                  prezentacija rešenja svih timova i proglašenje pobednika
                  hakatona.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default agenda;
