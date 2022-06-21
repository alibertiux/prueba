import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'

export const Pokemon = () => {
    const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

    const [pokemon, setPokemon] = useState([]);
    const [detail, setDetail] = useState("");
    
    const getPokemon = () => {
        axios.get(`${API_URL}`)
        .then(resp =>{
            //console.log(resp.data.results);
            setPokemon(resp.data.results);
           //console.log(pokemon, "pokemon");   
        })
    }
    useEffect(getPokemon, [])

    return (
        <div>
           {pokemon?.map((p) => (<Card url={p.url} name={p.name}/>)) }
        </div>
    )
}