import React from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import './MainTariff.css';
import 'bulma/css/bulma.css';

const MainTariff = ({ contrastType, fontSizeChange }) => {
  return (
    <div className="wrapperTariff">
      <div>
        <NaviAside activeColor={contrastType} />
      </div>
      <div className="mainSection" activeColor={contrastType} activeSize={fontSizeChange}>
        <BreakeStartSection>Cennik</BreakeStartSection>
        <p
          style={{
            textAlign: 'center',
            marginBottom: 70,
            fontWeight: 600,
            backgroundColor: contrastType,
          }}
        >
          Obowiązujące od 14 maja 2021 roku ceny: woda, ścieki i opłata abonamentowa.
        </p>

        <table
          className="table"
          style={{ width: '90%', margin: '0 auto', backgroundColor: contrastType }}
        >
          <thead>
            <tr>
              <th>Usługa</th>
              <th></th>
              <th>Netto</th>
              <th>VAT [8%]</th>
              <th>Brutto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Dostawa wody [m3]</th>
              <td> Wszystkie Gminy</td>
              <td>3,00zł</td>
              <td>0,24zł</td>
              <td>3,24zł</td>
            </tr>
            <tr>
              <th>Odprowadzanie ścieków [m3]</th>
              <td>Gmina Górowo Iławieckie</td>
              <td>5,13zł</td>
              <td>0,41zł</td>
              <td>5,54zł</td>
            </tr>
            <tr>
              <th></th>
              <td>Gmina Lidzbark Warmiński</td>
              <td>4,52zł</td>
              <td>0,36zł</td>
              <td>4,88zł</td>
            </tr>
            <tr>
              <th></th>
              <td>Gmina Kolno</td>
              <td>7,14zł</td>
              <td>0,57zł</td>
              <td>7,71zł</td>
            </tr>
            <tr>
              <th></th>
              <td>Gmina Lubomino</td>
              <td>5,46zł</td>
              <td>0,44zł</td>
              <td>5,90zł</td>
            </tr>
            <tr>
              <th>Opłata abonamentowa</th>
              <td>Wodomierz:</td>
              <td>2,59zł</td>
              <td>0,21zł</td>
              <td>2,80zł</td>
            </tr>
            <tr>
              <th></th>
              <td>Ryczałt:</td>
              <td>2,59zł</td>
              <td>0,21zł</td>
              <td>2,80zł</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
        <div>
          <table className="table" style={{ width: '90%', backgroundColor: contrastType, margin: "75px auto" }}>            
            <tbody>
              <tr>
                <th>
                  Decyzja zatwierdzająca taryfę za zbiorowe zaopatrzenie w wodę i zbiorowe
                  odprowadzanie ścieków
                </th>
                <td align="center">
                  <a
                    href="http://ekowod-lidzbark.pl/files/taryfa.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SaveAltIcon style={{ fontSize: 30 }} />
                  </a>
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainTariff;
