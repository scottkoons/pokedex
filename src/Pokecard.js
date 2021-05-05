import React from "react";
import './Pokecard.css';

const Pokecard = ({ id, item, img, price, quantity, type, expreience }) => {
    let pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className="Pokecard">
            <div className="Pokecard-title">{item}</div>
            <img className="Pokecard-image" src={pokemonImg} />
            <div className="Pokecard-data">Type: {type}</div>
            <div className="Pokecard-data">Experience: {expreience}</div>
        </div>
    );
};

export default Pokecard;