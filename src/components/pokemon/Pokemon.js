import React, { Component } from 'react'
import PokemonCard from './PokemonCard'
import axios from 'axios';

const pokeinstance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})


const bulba = await axios.get('/pokemon/1')

