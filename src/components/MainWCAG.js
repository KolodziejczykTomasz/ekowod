import React from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainWCAG.css';
import 'bulma/css/bulma.css';



const MainWCAG = ({ contrastType }) => {
  return (
    <div className="wrapperMain">
      <div>
        <NaviAside activeColor={contrastType} />
      </div>
      <div className="mainSection">
        <section>
          <BreakeStartSection>Oświadczenie o dostępności</BreakeStartSection>
          <div>
            <p className="wcagHeader">
              Serwis został zaprojektowany tak, aby był możliwy do obsłużenia dla jak najszerszej
              grupy użytkowników, niezależnie od używanej technologii, oprogramowania lub posiadanej
              dysfunkcji. Nieustannie poszukujemy rozwiązań aby zwiększyć dostępność i użyteczność
              naszej strony internetowej. Jeżeli masz jakieś uwagi albo komentarze skontaktuj się z
              nami.
            </p>
            <ul className="wcagList">
              <li> Data publikacji strony internetowej: 2020-11-20</li>
              <li> Data ostatniej istotnej aktualizacji: 2020-11-20</li>
              <li>Oświadczenie sporządzono dnia: 2020-11-20</li>
            </ul>
            <p className="wcagDescritpion" style={{margin: "20px 0 40px 0"}}>
              Deklarację sporządzono na podstawie samooceny przeprowadzonej przez podmiot publiczny.
              W przypadku stwierdzenia niedostępności strony internetowej lub jej elementów prosimy
              o kontakt z w/w osobą kontaktową.
            </p>
            <h2 id="wcagh2">Zgodność ze standardami: </h2>
            <p className="wcagDescritpion">Serwis jest zgodny ze standardami W3C</p>
            <h2 className="wcagh2">Kompatybilność:</h2>
            <p className="wcagDescritpion">
              Strona internetowa jest zgodna z ustawą z dnia 4 kwietnia 2019 r. o dostępności
              cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych.
            </p>
            <h2 className="wcagh2">Wygląd:</h2>
            <p className="wcagDescritpion">
              Serwis jest wyposażony w mechanizmy ułatwiające przeglądanie treści przez osoby
              niedowidzące. Zmiana wielkości czcionki. Całość serwisu oparta jest na stylach CSS.
              Skróty klawiaturowe: Serwis nie jest wyposażony w skróty klawiaturowe, które mogły by
              wchodzić w konflikt z technologiami asystującymi (np. programy czytające), systemem
              lub aplikacjami użytkowników.
            </p>
            <h2 className="wcagh2"> Dostępność architektoniczna</h2>
            <ul className="wcagDescritpion">
              <li>
                Siedziba Z.B.Z.G "EKOWOD" znajduje się w budynku przy ul. Olsztyńskiej 10D, 11-100
                Lidzbark Warmiński
              </li>
              <li>
                Budynek nie jest wyposażony w windę, platformę, pochylnię itp. Osoby
                niepełnosprawnetelefonicznie mogą zgłaszać potrzebę obsługi bez konieczności
                wchodzenia do budynku.
              </li>
              <li>Z tyłu budynku znajduje się parking z miejscami dla osób niepełnosprawnych.</li>
              <li>Nie ma przeciwwskazań wstępu osoby niepełnosprawnej z psem asystującym.</li>
              <li>
                Z.B.Z.G "EKOWOD" nie ma możliwości zapewnienia tłumacza języka migowego na miejscu
                lub online.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainWCAG;
