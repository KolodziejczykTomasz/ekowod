import React, { Component } from 'react';
import 'components/Main.css';
import styled from 'styled-components';




class Main extends Component {
  render() {
    return (
      <div className="wrapper container">
        <div className="asideSection ">
          <div className="asideContainer">Aside</div>
        </div>
        <div className="mainSection">
          <div className="mainContainer">
            <div className="notification is-success">
              <button class="delete"></button>
              Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit
            </div>
            <section className="section">
              <div className="container">
                <h1 className="title">Section</h1>
                <h2 className="subtitle">
                  A simple container to divide your page into <strong>sections</strong>, like the
                  one you're currently reading
                </h2>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <h1 className="title">Section</h1>
                <h2 className="subtitle">
                  A simple container to divide your page into <strong>sections</strong>, like the
                  one you're currently reading
                </h2>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
