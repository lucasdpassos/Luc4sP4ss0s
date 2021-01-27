import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from './Routes';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Template } from './components/MainComponents';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Logo from './components/layout/Logo'


/* Lucas: Prezado recrutador, esta aplicação foi construída utilizando como base as tecnologias: React.js (Framework js) e Bulma (Framework css), optei pela escolha do React para a
construção da aplicação pois tenho mais cargas de estudos e projetos práticos com este framework, e optei pelo Bulma para auxiliar em algumas questões do design, pelo seu perfil
minimalista e de interpretação agradável.
*/

/* Toda aplicação abaixo é pautada em React Routes, direcionando o usuário para as rotas pré-definidas nos botões, conforme requisitado no desafio, utilizei o Axios para consumir
 algumas informações da Poke API. Também introduzi ao código alguns elementos de Redux, que podem ser utilizados no futuro da aplicação para acrescentarmos mais funcionalidades. 
*/ 


const Page = (props) => {
  return (
    <BrowserRouter>
     <Template>
       <Logo />
        <Header />

        
       
        <Routes />  

        
        
        
        
        
     <Footer />
     </Template>
    </BrowserRouter>
    
  );
}


const mapStateToProps = (state) => {
  return {
    user:state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)