import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import BackgroundUrl from "./assets/img/background.jpg";

import ThiagoUrl from "./assets/img/thiago_selfie.jpg";

import Faq from "./Faq";
import CardCarol, { CardTitle } from "./Card";
import Acordeao from "./Acordeao";

import MeuModal from "./MeuModal";

const App = () => {
  let [visible, setVisible] = useState(false);
  let [visibleModalCard, setVisibleModalCard] = useState(false);

  const openModalCard = () => {
    setVisibleModalCard(true);
  };

  const closeModalCard = () => {
    setVisibleModalCard(false);
  };

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const openModal2 = () => {};
  return (
    <>
      <div>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </div>
      <div className="section__comoFunciona">
        <div className="section__comoFunctiona_title">
          <h1 onClick={() => openModal()}>Abrir</h1>
          <h1 onClick={() => openModalCard()}>Abrir Card</h1>
          <p>
            O seu <mark>plano de sucesso</mark>.
          </p>
        </div>
        <MeuModal visivel={visible} closeModal={closeModal} title="TITULO 1" />
        <MeuModal
          visivel={visibleModalCard}
          closeModal={closeModalCard}
          title="TITULO CARD"
          bgColor="pink"
        />
        <section class="section__comoFunciona_content">
          <section class="container">
            <CardCarol
              num="1"
              bg="black"
              texto="asiduasi djai sdji asjd aisj"
            />
          </section>
          <div></div>
        </section>
      </div>
    </>
  );
};

export default App;
