/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as GirlImg } from "../assets/girl.svg";
import { ReactComponent as WhatsappLogo } from "../assets/whatsapp.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as HamburguerMenuSVG } from "../assets/hamburguerMenu.svg";
import { ReactComponent as InstagramLogo } from "../assets/instagram.svg";
import { ReactComponent as FacebookLogo } from "../assets/facebook.svg";
import { ReactComponent as YoutubeLogo } from "../assets/youtube.svg";
import { ReactComponent as CloseSVG } from "../assets/close.svg";

import "./App.css";
import React, { SyntheticEvent } from "react";

function App() {
  function onScrollNav(ev: Event): void {
    const scrollTop = (ev.target as HTMLDivElement).scrollTop;
    const nav = document.getElementById("navbar");
    if (scrollY == 0) {
      nav?.classList.remove("scroll");

      return;
    }

    nav?.classList.add("scroll");
  }

  function openMenu(e: SyntheticEvent): void {
    e.preventDefault();
    const menu = document.getElementById("container");
    menu?.classList.add("menu-expanded");
  }

  function closeMenu(e: SyntheticEvent): void {
    e.preventDefault();
    const menu = document.getElementById("container");
    menu?.classList.remove("menu-expanded");
  }

  document.addEventListener("scroll", onScrollNav);

  return (
    <div id="container">
      <nav id="navbar">
        <div className="wrapper">
          <a className="logo" href="#">
            <Logo />
          </a>

          <div className="menu">
            <ul>
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
            </ul>

            <button className="button">
              <a href="#">Agende sua consulta</a>
            </button>

            <ul className="social-links">
              <li>
                <a target="_blank" href="https://facebook.com">
                  <FacebookLogo />
                </a>
              </li>

              <li>
                <a target="_blank" href="https://instagram.com">
                  <InstagramLogo />
                </a>
              </li>

              <li>
                <a target="_blank" href="https://youtube.com">
                  <YoutubeLogo />
                </a>
              </li>
            </ul>
          </div>

          <button
            aria-expanded="false"
            aria-label="Abrir menu"
            onClick={openMenu}
            className="open-menu"
          >
            <HamburguerMenuSVG />
          </button>
          <button
            aria-label="Fechar menu"
            aria-expanded="true"
            onClick={closeMenu}
            className="close-menu"
          >
            <CloseSVG />
          </button>
        </div>
      </nav>

      <header className="wrapper">
        <h4>BOAS-VINDAS A DOCTORCARE 👋</h4>
        <h1>Assistência médica simplificada para todos</h1>
        <p>
          Os médicos da DoctorCare vão além dos sintomas para tratar a causa
          raiz de sua doença e proporcionar uma cura a longo prazo.
        </p>
        <button>
          <WhatsappLogo /> Agende sua consulta
        </button>

        <GirlImg
          id="girl-svg"
          title="Mulher negra vestindo um moletom verde e sorrindo"
        />
        <div className="stats">
          <div className="stat">
            <h3>+3.500</h3>
            <p>Pacientes atendidos</p>
          </div>

          <div className="stat">
            <h3>+15</h3>
            <p>Especialistas disponíveis</p>
          </div>

          <div className="stat">
            <h3>+10</h3>
            <p>Anos no mercado</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
