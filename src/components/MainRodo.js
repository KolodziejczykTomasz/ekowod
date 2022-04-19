import React from 'react';
import BreakeStartSection from '../components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import '../components/MainRodo.css';
import 'bulma/css/bulma.css';

const MainRodo = ({ contrastType }) => {
  return (
    <div className="wrapperMain">
      <div>
        <NaviAside activeColor={contrastType} />
      </div>
      <div className="mainSection">
        <section>
          <BreakeStartSection>KLAUZULA INFORMACYJNA</BreakeStartSection>
          <div>
            <ol id="rodoList">
              <li id="rodoListItem">
                Administratorem danych osobowych jest Zakład Budżetowy Związku Gmin
                „EKOWOD” w Lidzbarku Warmińskim, ul. Olsztyńska 10 D, 1 1-100 Lidzbark Warmiński,
                telefon 89 764 20 26.
              </li>
              <li id="rodoListItem">
                W sprawach z zakresu ochrony danych osobowych mogą Państwo kontaktować się z
                Inspektorem Ochrony Danych pod adresem e-mail: inspektor@cbi24.pl.
              </li>
              <li id="rodoListItem">
                Osoba, której dane dotyczą ma prawo do: - żądania dostępu do danych osobowych oraz
                ich sprostowania, usunięcia lub ograniczenia przetwarzania danych osobowych. -
                cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania,
                którego dokonano na podstawie zgody przed jej cofnięciem. - wniesienia skargi do
                organu nadzorczego w przypadku gdy przetwarzanie danych odbywa się z naruszeniem
                przepisów powyższego rozporządzenia tj. Prezesa Urzędu Ochrony Danych Osobowych, ul.
                Stawki 2, 00-193 Warszawa.
              </li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainRodo;
