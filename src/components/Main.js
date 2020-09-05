import React, { Component } from 'react';
import 'components/Main.css';
import BreakeStartSection from 'components/BreakeStartSection';
import BreakeEndSection from 'components/BreakeEndSection';
import AsideItem from 'components/AsideItem';
import AsideMenuItem from 'components/AsideMenuItem';
import MainItem from './MainItem';

class Main extends Component {
  render() {
    return (
      <div className="wrapper container">
        <div className="asideSection ">
          <div className="asideMenu">
            <div className="menuHeader">
              <h1 className="menuHeaderTitle">Menu</h1>
            </div>
            <AsideMenuItem>Klient</AsideMenuItem>
            <AsideMenuItem>Kontakt</AsideMenuItem>
            <AsideMenuItem>Obiekty</AsideMenuItem>
            <AsideMenuItem>Cennik</AsideMenuItem>
          </div>
          <BreakeEndSection />
          <div>
            <AsideItem>AsideItem 2</AsideItem>
            <AsideItem>AsideItem 3</AsideItem>
          </div>
        </div>
        <div className="mainSection">
          <BreakeStartSection>Aktualności</BreakeStartSection>
          <MainItem>
            <h1 className="title">Section</h1>
            <h2 className="subtitle">
              A simple container to divide your page into <strong>sections</strong>, like the one
              you're currently reading
            </h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo sit quod
              perferendis tenetur assumenda. Doloremque dignissimos non aut possimus explicabo est
              aperiam voluptates rerum sint!
            </p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo sit quod
              perferendis tenetur assumenda. Doloremque dignissimos non aut possimus explicabo est
              aperiam voluptates rerum sint!
            </p>
          </MainItem>
          <MainItem>
            <h1 class="title">Section</h1>
            <h2 class="subtitle">
              A simple container to divide your page into <strong>sections</strong>, like the one
              you're currently reading
            </h2>
          </MainItem>
        </div>
      </div>
    );
  }
}

export default Main;
