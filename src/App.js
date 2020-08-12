import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <img src={require('./images/banner.png')} className="Banner"></img> 

      <h6> Produtos 100% veganos e preocupados com seu bem-estar</h6>
      </header>

      <div className="Produtos"> 
      <img src={require('./images/p1.png')} className="Bloco"></img> 
      <img src={require('./images/p2.png')} className="Bloco"></img> 
      <img src={require('./images/p3.png')} className="Bloco"></img> 

      </div>
      <div className="Depoimentos"> 
      <h6> Nos acreditamos no poder da beleza</h6>
      <p> “Lorem Ipsum is simply dummy text of the printing a to make a type specimen book.”</p>

      <div className="CaixaDepoimentos">
        <div className="Box">
      <img src={require('./images/Ellipse 1.png')}></img> 
      <p> “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book._”</p>
      <h5> Ana Paula</h5>
      </div>
    <div className="RedesSociais">
    <img src={require('./images/facebook 1.png')}></img> 
    <img src={require('./images/whatsapp 1.png')}></img> 
    <img src={require('./images/instagram 1.png')}></img> 


    </div>

      </div>
      </div>
      <footer>

        <div>
          <h5> Contato</h5>
          <p> +55 661 993049430</p>
          <p> contato@gmail.com</p>
  
        </div>  

        <div>
          <h5> Endereço</h5>
          <p> Av Jose Paulista</p>
          <p> Rua 33, lote 3</p>
  
        </div>  

         <div>
          <h5> Horario</h5>
          <p> Segunda - Sexta</p>
          <p> 8:00 - 18:00</p>
  
        </div>      

    </footer>
    </div>
  );
}

export default App;
