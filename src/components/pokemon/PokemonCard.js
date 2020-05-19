import React, { Component } from 'react';
import styled from 'styled-components';
import './stylecard.css';

// Lucas: Abaixo o Styled-component do Sprite das imagens

const Sprite = styled.img`
    width: 5em;
    Height: 5em;
    


`


// Lucas: O Bootstrap por default irá mostrar 4 Pokemons por linha do mercado, esse padrão irá ser responsivo ao tamanho da tela do dispositivo

export default class PokemonCard extends Component {
    state ={
        name:'',
        imageUrl:'',
        pokemonIndex:''
    };

    // Lucas: Notei que no fim de cada URL de pokemon mostrava o respectivo ID , então usei '.split' para separar o número final de cada URL e transformar no Index
    // Lucas: Peguei as imagens dos pokemons direto de um diretório do Github em que os index de seus respectivos pokemons ficam na URL
    componentDidMount() {
        const { name, url } = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

        this.setState({name: name, imageUrl: imageUrl, pokemonIndex: pokemonIndex})
    }



    // Lucas: As props abaixo serão transmitidas em PokemonList.js
    render() {
      
        // Lucas: Eu preferi estruturar a exibição e a ordem das colunas no Bootstrap, e os componentes estilizados com CSS  
        return (
            <div className='col-md-3 col-sm-6 mb-5'>  
                <div className='poke-item'>
                    
                    <div className='poke-item-img'>
                         <Sprite id='poke_item' className='card-img-top mx-auto mt-2'
                            src={this.state.imageUrl}>
                         </Sprite>   
                    </div>                
              <div className="poke-item--name" style={{textTransform: 'capitalize'}}>{this.state.name}</div>
                </div>    
            </div>
            
        )
    }
    }
