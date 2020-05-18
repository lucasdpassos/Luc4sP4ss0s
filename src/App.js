import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from './Routes';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Template } from './components/MainComponents';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Logo from './components/layout/Logo'


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