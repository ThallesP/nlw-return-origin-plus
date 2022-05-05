/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as GirlImg } from "../assets/girl.svg";
import { ReactComponent as WhatsappLogo } from "../assets/whatsapp.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as HamburguerMenuSVG } from "../assets/hamburguerMenu.svg";
import { ReactComponent as InstagramLogo } from "../assets/instagram.svg";
import { ReactComponent as FacebookLogo } from "../assets/facebook.svg";
import { ReactComponent as YoutubeLogo } from "../assets/youtube.svg";
import { ReactComponent as CloseSVG } from "../assets/close.svg";
import { ReactComponent as CheckmarkSVG } from "../assets/checkmark.svg";
import { ReactComponent as MapPinSVG } from "../assets/mapPin.svg";
import { ReactComponent as MailSVG } from "../assets/mail.svg";
import { ReactComponent as UpIconSVG } from "../assets/upIcon.svg";
import ScrollReveal from "scrollreveal";

import "./App.css";
import React, { SyntheticEvent } from "react";

function App() {
  function onScroll(ev: Event) {
    showGreenNavOnScroll();
    showBackToTopButton();
  }

  function showGreenNavOnScroll(): void {
    const nav = document.getElementById("navbar");
    if (scrollY == 0) {
      nav?.classList.remove("scroll");

      return;
    }

    nav?.classList.add("scroll");
  }

  function showBackToTopButton(): void {
    const button = document.getElementById("backToTopButton");
    if (scrollY < 500) {
      button?.classList.remove("show");
      return;
    }

    button?.classList.add("show");
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

  function scrollTo(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  document.addEventListener("scroll", onScroll);

  ScrollReveal({ origin: "top", distance: "30px", duration: 700 }).reveal(
    `#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content`
  );
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
                <a
                  onClick={(e) => {
                    closeMenu(e);
                    scrollTo("home");
                  }}
                  href="#home"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    closeMenu(e);
                    scrollTo("services");
                  }}
                  href="#services"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    closeMenu(e);
                    scrollTo("about");
                  }}
                  href="#about"
                >
                  Sobre
                </a>
              </li>
            </ul>

            <button className="button">
              <a
                onClick={(e) => {
                  closeMenu(e);
                  scrollTo("contact");
                }}
                href="#contact"
              >
                Agende sua consulta
              </a>
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

      <section id="home">
        <div className="wrapper">
          <header>
            <h4>BOAS-VINDAS A DOCTORCARE 👋</h4>
            <h1>Assistência médica simplificada para todos</h1>
          </header>

          <div className="content">
            <p>
              Os médicos da DoctorCare vão além dos sintomas para tratar a causa
              raiz de sua doença e proporcionar uma cura a longo prazo.
            </p>
            <a className="button" href="#contact">
              <WhatsappLogo /> Agende sua consulta
            </a>

            <GirlImg
              id="girl-svg"
              title="Mulher negra vestindo um moletom verde e sorrindo"
            />
          </div>

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
        </div>
      </section>

      <section id="services">
        <div className="wrapper">
          <header>
            <h4>Serviços</h4>
            <h2>Como podemos ajudá-lo a se sentir melhor?</h2>
          </header>
        </div>

        <div className="content">
          <div className="cards">
            <div className="card">
              <CheckmarkSVG />

              <h3>Problemas digestivos</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.
              </p>
            </div>

            <div className="card">
              <CheckmarkSVG />

              <h3>Saúde Hormonal</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.
              </p>
            </div>

            <div className="card">
              <CheckmarkSVG />

              <h3>Bem-estar mental</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.
              </p>
            </div>

            <div className="card">
              <CheckmarkSVG />

              <h3>Cuidados Pediátricos</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.
              </p>
            </div>

            <div className="card">
              <CheckmarkSVG />

              <h3>Autoimune e Inflamação</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.
              </p>
            </div>

            <div className="card">
              <CheckmarkSVG />

              <h3>Saúde do Coração</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrapper">
          <header>
            <h4>Sobre nós</h4>
            <h2>Entenda quem somos e por que existimos</h2>
          </header>

          <div className="content">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim. Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim. Amet minim
              mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
            <img
              src="/assets/doctor.png"
              alt="Um Doutor feliz de jaleco branco com uma prancheta na mão com seus dois pacientes"
            />
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrapper">
          <header>
            <h2>Entre em contato com a gente!</h2>
          </header>
        </div>

        <div className="content">
          <div className="wrapper">
            <ul>
              <li>
                <MapPinSVG /> R. Amauri Souza, 346
              </li>
              <li>
                <MailSVG />
                contato@doctorcare.com
              </li>
            </ul>
            <a
              className="button"
              target="_blank"
              href="https://wa.me/5511999999999"
            >
              <WhatsappLogo /> Agende sua consulta
            </a>
            <img
              src="/assets/black-guy-cellphone.png"
              alt="homem negro com moletom bege mexendo no celular e sorrindo"
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="wrapper">
          <a className="logo" href="#">
            <Logo />
          </a>
          <p>
            ©2022 DoctorCare.
            <br />
            Todos os direitos reservados.
          </p>
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
      </footer>

      <a id="backToTopButton" href="#home">
        <UpIconSVG />
      </a>
    </div>
  );
}

export default App;
