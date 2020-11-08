import React from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainCookies.css';
import 'bulma/css/bulma.css';


const MainRodo = ({ contrastType }) => {
  return (
    <div className="wrapperCookies">
      <div>
        <NaviAside activeColor={contrastType} />
      </div>
      <div className="mainSection">
        <BreakeStartSection>POLITYKA PLIKÓW „COOKIES”</BreakeStartSection>
        <div>
          <p id="cookiesTitle">
            Wyrażanie zgody na instalację przez witrynę plików cookies podczas każdej wizyty z
            serwisie mogłoby być uciążliwe. W myśl nowelizacji ustawy Prawo Telekomunikacyjne
            internauta może wyrazić zgodę poprzez odpowiednie ustawienia przeglądarki internetowej.
            Od chwili uzyskania tych informacji decyzja korzystania z serwisu bez zmiany ustawień
            przeglądarki jest traktowana jako świadomy wybór użytkownika.
          </p>
          <ol id="cookiesListNumber">
            <li>
              Serwis nie zbiera w sposób automatyczny żadnych informacji, z wyjątkiem informacji
              zawartych w plikach cookies.
            </li>
            <li>
              Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki
              tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i
              przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj
              zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na
              urządzeniu końcowym oraz unikalny numer.
            </li>
            <li>
              Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies
              oraz uzyskującym do nich dostęp jest operator niniejszego Serwisu, Zakład Budżetowy
              Związku Gmin „EKOWOD” ul. Olsztyńska 10D, 11-100 Lidzbark Warmiński.
            </li>
            <li>
              Pliki cookies wykorzystywane są w celu:
              <ul>
                <li>
                  o dostosowania zawartości stron internetowych Serwisu do preferencji Użytkownika
                  oraz optymalizacji korzystania ze stron internetowych; w szczególności pliki te
                  pozwalają rozpoznać urządzenie Użytkownika Serwisu i odpowiednio wyświetlić stronę
                  internetową, dostosowaną do jego indywidualnych potrzeb;
                </li>
                <li>
                  o tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu
                  korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i
                  zawartości;
                </li>
                <li>
                  o utrzymania sesji Użytkownika Serwisu (po zalogowaniu), dzięki której Użytkownik
                  nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła.
                </li>
              </ul>
            </li>
            <li>
              W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne”
              (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami
              tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu
              wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania
              (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu
              końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu
              ich usunięcia przez Użytkownika.
            </li>
            <li>
              W ramach Serwisu stosowane są następujące rodzaje plików cookies:
              <ul>
                <li>
                  o „niezbędne” pliki cookies, umożliwiające korzystanie z usług dostępnych w ramach
                  Serwisu, np. uwierzytelniające pliki cookies wykorzystywane do usług wymagających
                  uwierzytelniania w ramach Serwisu;
                </li>
                <li>
                  o pliki cookies służące do zapewnienia bezpieczeństwa, np. wykorzystywane do
                  wykrywania nadużyć w zakresie uwierzytelniania w ramach Serwisu;
                </li>
                <li>
                  o „wydajnościowe” pliki cookies, umożliwiające zbieranie informacji o sposobie
                  korzystania ze stron internetowych Serwisu;
                </li>
                <li>
                  o „funkcjonalne” pliki cookies, umożliwiające „zapamiętanie” wybranych przez
                  Użytkownika ustawień i personalizację interfejsu Użytkownika, np. w zakresie
                  wybranego języka lub regionu, z którego pochodzi Użytkownik, rozmiaru czcionki,
                  wyglądu strony internetowej itp.;
                </li>
                <li>
                  o „reklamowe” pliki cookies, umożliwiające dostarczanie Użytkownikom treści
                  reklamowych bardziej dostosowanych do ich zainteresowań.
                </li>
              </ul>
            </li>
            <li>
              W wielu przypadkach oprogramowanie służące do przeglądania stron internetowych
              (przeglądarka internetowa) domyślnie dopuszcza przechowywanie plików cookies w
              urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać w każdym czasie
              zmiany ustawień dotyczących plików cookies. Ustawienia te mogą zostać zmienione w
              szczególności w taki sposób, aby blokować automatyczną obsługę plików cookies w
              ustawieniach przeglądarki internetowej bądź informować o ich każdorazowym
              zamieszczeniu w urządzeniu Użytkownika Serwisu. Informacje dotyczące sposobów zmian
              ustawienia cookies w najpopularniejszych przeglądarkach internetowych znajdują się w
              dalszej części niniejszego dokumentu. Szczegółowe informacje o możliwości i sposobach
              obsługi plików cookies dostępne są w ustawieniach oprogramowania (przeglądarki
              internetowej) oraz w plikach pomocy dostępnych w menu przeglądarki.
            </li>
            <li>
              Operator Serwisu informuje, że ograniczenia stosowania plików cookies mogą wpłynąć na
              niektóre funkcjonalności dostępne na stronach internetowych Serwisu.
            </li>
            <li>
              Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane
              mogą być również przez współpracujących z operatorem Serwisu reklamodawców, partnerów
              oraz podmiotów trzecich (np. Facebook, Twitter, Google itp.).
            </li>
            <li>
              Więcej informacji o plikach cookies znaleźć można na stronie
              www.wszystkoociasteczkach.pl
            </li>
          </ol>
          <p id="cookiesTitle">PLIKI COOKIES – INSTRUKCJA</p>
          <p>Usuwanie, wyłączanie przechowywania, przywracanie przechowywania plików cookies</p>
          <p>
            Sposób zmiany ustawień plików cookies może różnić się w zależności od przeglądarki
            internetowej, z której korzysta użytkownik. Informacje na temat plików cookies znajdują
            się w zakładce „Pomoc” w każdej przeglądarce internetowej.
          </p>
          <p>Pliki cookies w przeglądarkach internetowych</p>
          <p>W opcjach przeglądarki należy wybrać opcję odpowiadającą za ustawienia prywatności:</p>
          <p id="cookiesTitle">Google Chrome</p>
          <p>
            Domyślne ustawienia przeglądarki Google Chrome zezwalają na przechowywanie cookies. Aby
            zmienić ustawienia należy:
          </p>
          <ul>
            <li>• kliknąć w menu „Ustawienia Google Chrome” i wybrać opcję „Ustawienia”;</li>
            <li>• kliknąć w „Pokaż ustawienia zaawansowane” na dole strony;</li>
            <li>• wybrać opcję „Ustawienia treści” w opcjach „Prywatność”;</li>
            <li>• wybrać żądane ustawienia;</li>
            <li>
              • aby wprowadzić specjalne ustawienia dla danego serwisu należy kliknąć w „Zarządzaj
              wyjątkami” i wybrać własne ustawienia dla witryn;
            </li>
            <li>• aby zatwierdzić zmiany należy kliknąć w przycisk „Gotowe”.</li>
          </ul>
          <p id="cookiesTitle">Microsoft Internet Explorer</p>
          <p>
            Domyślne ustawienia przeglądarki Microsoft Internet Explorerze zwalają na przechowywanie
            plików cookies, ale blokują pliki, które mogą pochodzić z serwisów niestosujących
            polityki prywatności. Aby zmienić ustawienia należy:
          </p>
          <ul>
            <li>• kliknąć w menu „Narzędzia” i wybrać „Opcje Internetowe”;</li>
            <li>• wybrać zakładkę „Prywatność”;</li>
            <li>
              • za pomocą suwaka określić żądany poziom ustawień (najwyższy blokuje cookies
              całkowicie, najniższy zezwala na przechowywanie wszystkich cookies);
            </li>
          </ul>
          <p id="cookiesTitle">LUB:</p>
          <ul>
            <li>• kliknąć przycisk „Zaawansowane” i samodzielnie wybrać żądane ustawienia;</li>
            <li>
              • aby wprowadzić specjalne ustawienia dla danego serwisu należy kliknąć w „Witryny” i
              wybrać własne ustawienia dla witryn;
            </li>
            <li>• zatwierdzić zmiany za pomocą przycisku „OK”.</li>
          </ul>
          <p id="cookiesTitle">Mozilla Firefox</p>
          <p>
            Domyślne ustawienia przeglądarki Mozilla Firefox zezwalają na przechowywanie plików
            cookies. Aby zmienić ustawienia należy:
          </p>
          <ul>
            <li>
              • kliknąć w menu „Narzędzia” (w innych wersjach: kliknąć przycisk „Firefox”) i wybrać
              „Opcje”;
            </li>
            <li>• następnie wybrać zakładkę „Prywatność” i zaznaczyć żądane ustawienia;</li>
            <li>
              • aby wprowadzić specjalne ustawienia dla danego serwisu należy kliknąć w „Wyjątki” i
              wybrać własne ustawienia dla witryn;
            </li>
            <li>• zatwierdzić zmiany za pomocą przycisku „OK”.</li>
          </ul>
          <p id="cookiesTitle">Opera</p>
          <p>
            Domyślne ustawienia przeglądarki Opera zezwalają na przechowywanie plików cookies. Aby
            zmienić ustawienia należy:
          </p>
          <ul>
            <li>
              • kliknąć w „Preferencje”, wybrać opcję „Zaawansowane”, a następnie „Ciasteczka”;
            </li>
            <li>• zaznaczyć żądane ustawienia;</li>
            <li>
              • aby wprowadzić specjalne ustawienia dla danego serwisu należy wejść na wybraną
              stronę internetową, kliknąć na niej prawym przyciskiem myszy, wybrać polecenie
              „Preferencje dla witryn” i przejść do karty „Ciasteczka” a następnie wprowadzić
              pożądane ustawienia;
            </li>
            <li>• zatwierdzić zmiany za pomocą przycisku „OK”.</li>
          </ul>
          <p id="cookiesTitle">Safari</p>
          <p>
            Domyślne ustawienia przeglądarki Safari zezwalają na przechowywanie plików cookies. Aby
            zmienić ustawienia należy:
          </p>
          <ul>
            <li>• w menu „Safari” wybrać opcję „Preferencje”;</li>
            <li>• kliknąć ikonę „Prywatność”;</li>
            <li>• zaznaczyć żądane ustawienia;</li>
            <li>
              • aby wprowadzić specjalne ustawienia dla danego serwisu należy kliknąć w „Szczegóły”
              i wybrać własne ustawienia dla witryn.
            </li>
          </ul>
          <p id="cookiesTitle">Pliki cookies w programie Adobe Flash Player</p>
          <p>
            Oprogramowanie Adobe Flash Player używane jest w celu umożliwienia Użytkownikowi dostępu
            do multimedialnych danych (podcasty mp3, filmy wideo, inne dane), przekazów
            strumieniowych (transmisje „na żywo”), programów takich, jak np. gry internetowe (w
            które można grać w przeglądarce internetowej), a także do dostarczenia Użytkownikowi
            reklamy. Oprogramowanie Adobe Flash Player również używa plików cookies. Dostęp do nich
            możliwy jest dzięki mechanizmowi na stronie internetowej Adobe:
            http://www.macromedia.com/support/documentation/pl/flashplayer/help/settings_manager07.html
          </p>
          <p id="cookiesTitle">Pliki cookies w przeglądarkach internetowych urządzeń mobilnych</p>
          <p>
            Opis ustawień dostępny jest na stronach internetowych producentów najpopularniejszych
            systemów mobilnych:
          </p>
          <ul>
            <li>• urządzenia z systemem iOS</li>
            <li>• urządzenia z systemem Android</li>
            <li>• urządzenia z systemem Windows Phone</li>
            <li>• urządzenia z systemem BlackBerry</li>
          </ul>
          <p>
            W ramach systemów mobilnych dostępnych jest wiele różnych przeglądarek internetowych.
            Szczegółowe informacje na temat ustawień dotyczących plików cookies można uzyskać w
            ustawieniach w menu używanej przeglądarki.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainRodo;
