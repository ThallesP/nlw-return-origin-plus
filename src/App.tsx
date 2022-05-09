/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as WhatsappLogo } from "../static/whatsapp.svg";
import { ReactComponent as Logo } from "../static/logo.svg";
import { ReactComponent as HamburguerMenuSVG } from "../static/hamburguerMenu.svg";
import { ReactComponent as InstagramLogo } from "../static/instagram.svg";
import { ReactComponent as FacebookLogo } from "../static/facebook.svg";
import { ReactComponent as YoutubeLogo } from "../static/youtube.svg";
import { ReactComponent as CloseSVG } from "../static/close.svg";
import { ReactComponent as CheckmarkSVG } from "../static/checkmark.svg";
import { ReactComponent as MapPinSVG } from "../static/mapPin.svg";
import { ReactComponent as MailSVG } from "../static/mail.svg";
import { ReactComponent as UpIconSVG } from "../static/upIcon.svg";
import ScrollReveal from "scrollreveal";

import "./App.css";
import React, { SyntheticEvent, useState } from "react";

function App() {
  function onScroll(ev: Event) {
    showGreenNavOnScroll();
    showBackToTopButton();

    activateMenuAtCurrentSection("home");
    activateMenuAtCurrentSection("services");
    activateMenuAtCurrentSection("about");
    activateMenuAtCurrentSection("contact");
  }

  function activateMenuAtCurrentSection(sectionId: string) {
    const section = document.getElementById(sectionId);

    if (!section) throw new Error("Section ID not found!");

    const targetLine = scrollY + innerHeight / 2;

    // verificar se a seção passou da linha
    // quais dados vou precisar?
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

    // verificar se a base está abaixo da linha alvo

    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

    // limites da seção
    const sectionBoundaries =
      sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    if (!menuElement) throw new Error("Menu element not found!");

    menuElement.classList.remove("active");
    if (sectionBoundaries) {
      menuElement.classList.add("active");
    }
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

            <a
              className="button"
              onClick={(e) => {
                closeMenu(e);
                scrollTo("contact");
              }}
              href="#contact"
            >
              Agende sua consulta
            </a>

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
          <div className="col-a">
            <header>
              <h4>BOAS-VINDAS A DOCTORCARE 👋</h4>
              <h1>Assistência médica simplificada para todos</h1>
            </header>

            <div className="content">
              <p>
                Os médicos da DoctorCare vão além dos sintomas para tratar a
                causa raiz de sua doença e proporcionar uma cura a longo prazo.
              </p>
              <a className="button" href="#contact">
                <WhatsappLogo /> Agende sua consulta
              </a>
            </div>
          </div>
          <div className="col-b">
            <img
              src="/static/girl.png"
              id="girl-svg"
              alt="Mulher negra vestindo um moletom verde e sorrindo"
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
          <div className="col-a">
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
                ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim. Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia consequat duis
                enim. Amet minim mollit non deserunt ullamco est sit aliqua
                dolor do amet sint.
              </p>
            </div>
          </div>

          <div className="col-b">
            <img
              src="/static/doctor.png"
              alt="Um Doutor feliz de jaleco branco com uma prancheta na mão com seus dois pacientes"
            />
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="content">
          <div className="wrapper">
            <div className="col-a">
              <header>
                <h2>Entre em contato com a gente!</h2>
              </header>
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
            </div>

            <div className="col-b">
              <img
                src="/static/black-guy-cellphone.png"
                alt="homem negro com moletom bege mexendo no celular e sorrindo"
              />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrapper">
          <div className="col-a">
            <a className="logo" href="#">
              <Logo />
            </a>
            <p>
              ©2022 DoctorCare.
              <br />
              Todos os direitos reservados.
            </p>
          </div>

          <div className="col-b">
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
        </div>
      </footer>

      <a id="backToTopButton" href="#home">
        <UpIconSVG />
      </a>
    </div>
  );
}

export default App;
