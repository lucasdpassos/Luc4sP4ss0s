import React, { Component } from 'react'
import PokemonCard from '../../pokemon/PokemonCard'
import axios from 'axios';

import PanelArea from './stylepanel'

export default class PokemonList extends Component {
    state= {
        url: 'https://pokeapi.co/api/v2/type/ground',
        pokedata: null
    };

    // Lucas: Utilizei o Axios para ler e requisitar as informações dentro da API (GET), e fazer "pokemon" receber o array 'results' de dentro dos dados, que é a lista de Pokemons
    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokedata: res.data['pokemon'].slice(0,14) })
        
        
    }

    
    /* Lucas: Dentro de um React.fragment (<>) a aplicação vai conferir se 'pokemon' está ou não "null", se estiver "null" irá retornar a mensagem de carregamento, 
    caso contrário irá imprimir os cards. As Props foram definidas em PokemonCard.js */
    render() {
        return (
            <PanelArea>
                {this.state.pokedata ? (
            <div className='row'>
                {this.state.pokedata.map(pokedata => 
                    <PokemonCard
                        key={pokedata.pokemon.name}
                        name={pokedata.pokemon.name}
                        url={pokedata.pokemon.url}
                    /> 
                    )}
            </div>
        ) : (
            <h1> Carregando Pokemon </h1>
        )}
        </PanelArea>
    )};

}
