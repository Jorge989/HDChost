import React from "react";
import "./App.css";
import Logo from "./assets/hdchostlogo.png";

<title>HDC Host</title>;
function App() {
  return (
    <body>
      <div className="container">
        <div className="navbar-container">
          <nav>
            <a href="#">
              <img className="logo" src={Logo} />
            </a>
            <ul className="navbar-items">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Planos</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#" className="default-btn">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <main>
          <div className="main-banner">
            <h1>hDC Host</h1>
            <p>OS melhores planos para qualquer tipo de projeto</p>

          </div>
          <seciton className="sepcialti-container">
<ul>
  <li>
    <i className="fas fa-shield-alt">

    </i>
    <h3>Segurança</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </li>
  <li>
    <i className="fas fa-rocket">

    </i>
    <h3>Velocidade</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </li>
  <li>
    <i className="fas fa-comments">

    </i>
    <h3>Suporte</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </li>
</ul>
          </seciton>
          <section className="pricing-container">
<h1>Planos e Preços</h1>
<p>Selecione o plano perfeito para voçê</p>
<div className="plans-container">
  <div className="plan">
    <ul>
      <li className="price">R$15/mês</li>
      <li className="plan-name">Padrão</li>
      <li>2GB de espaço em disco</li>
      <li>10 Sub-domínios</li>
      <li>25 Contas de e-mail</li>
      <li>C-panel</li>
      <li>Suporte 24/7</li>
      <li className="plan-btn">Selecionar</li>
    </ul>
  </div>
  <div className="plan">
    <ul>
      <li className="price">R$30/mês</li>
      <li className="plan-name">Dedicado</li>
      <li>5GB de espaço em disco</li>
      <li>20 Sub-domínios</li>
      <li>50 Contas de e-mail</li>
      <li>C-panel</li>
      <li>Suporte 24/7</li>
      <li className="plan-btn">Selecionar</li>
    </ul>
  </div>
  <div className="plan">
    <ul>
      <li className="price recommended">R$50/mês</li>
      <li className="plan-name">Dedicado Plus</li>
      <li>10GB de espaço em disco</li>
      <li>100 Sub-domínios</li>
      <li>100 Contas de e-mail</li>
      <li>C-panel</li>
      <li>Suporte 24/7</li>
      <li className="plan-btn recommended">Selecionar</li>
    </ul>
  </div>
    <div className="plan">
    <ul>
      <li className="price ">R$100/mês</li>
      <li className="plan-name">Cloud</li>
      <li>20GB de espaço em disco</li>
      <li>200 Sub-domínios</li>
      <li>200 Contas de e-mail</li>
      <li>C-panel</li>
      <li>Suporte 24/7</li>
      <li className="plan-btn ">Selecionar</li>
    </ul>
  </div>
</div>
          </section>
          <section className="searchdomain-container">
<h2>Buscar um domínio</h2>
<p>Veja se o domínio que voçê deseja está disponível</p>
<form>
  <input type="text" name="domain" placeholder="Digite seu domínio desejado"></input>
    <input type="submit" value="Buscar Domínio"></input>
</form>
</section>
<section className="contact-container">
<h2>Entre em contato</h2>
<p>Mande uma menssagem para nós conversarmos sobre a melhor hospedagem para seu negócio.</p>
<form>
  <input type="text" name="name" placeholder="Seu nome"></input>
    <input type="email" placeholder="Seu e-mail"></input>
 
  <textarea name="message" placeholder="Digite sua mensagem">
    <input type="submit" value="Enviar" placeholder="Digite sua mensagem">

    </input>
  </textarea>
</form>
</section>
      
        </main>
        <footer>
          <p>Hora de Codar @2021</p>
        </footer>
      </div>
    </body>
  );
}

export default App;
