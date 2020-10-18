import React from 'react';
import NaviTop from 'components/NaviTop';
import Jumbotron from 'components/Jumbotron';
import Footer from 'components/Footer';

const AboutView = () => (
  <>
    <NaviTop />
    <Jumbotron />
    <section class="section">
      <div class="container">
        <h1 class="title">Kadra</h1>
        <table class="table">
          <thead>
            <th>
              <abbr title="Dział">Dział</abbr>
            </th>
            <th>
              <abbr title="Dane pracownika">Imię i Nazwisko</abbr>
            </th>
            <th>
              <abbr title="Adres email">Adres e-mail</abbr>
            </th>
          </thead>
          <tbody>
            <tr>
              <th>Kierownik</th>
              <td>mgr inż. Katarzyna Kozieł</td>
              <td>k.koziel@ekowod-lidzbark.pl</td>
            </tr>
            <tr>
              <th>Obsługa klienta</th>
              <td>Adam Puszkiewicz</td>
              <td>a.puszkiewicz@ekowod-lidzbark.pl</td>
            </tr>
            <tr>
              <th>Windykacja</th>
              <td>mgr Iwona Szafałowicz</td>
              <td>i.szafalowicz@ekowod-lidzbark.pl</td>
            </tr>
            <tr>
              <th>Ochrona środowiska</th>
              <td>mgr inż. Kamila Jeżewska </td>
              <td>k.jezewska@ekowod-lidzbark.pl</td>
            </tr>
            <tr>
              <th>Kadry i płace</th>
              <td>mgr Elwira Gwiazda</td>
              <td>e.gwiazda@ekowod-lidzbark.pl</td>
            </tr>
            <tr>
              <th>Główny księgowy</th>
              <td>mgr Natalia Stankiewicz</td>
              <td>n.stankiewicz@ekowod-lidzbark.pl</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <Footer />
  </>
);

export default AboutView;
