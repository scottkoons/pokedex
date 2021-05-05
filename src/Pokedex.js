import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({ items, username }) => {
    const total = items.reduce((acc, i) => {
        return acc + i.base_experience;
    }, 0);
    return (
        <div className="Pokedex">
            <h1 className="Pokedex-title">{username}'s Pokedex</h1>
            <div className="Pokedex-cards">
                {items.map(i => (
                    <Pokecard id={i.id} item={i.name} img={i.img} price={i.price} quantity={i.quantity} type={i.type} expreience={i.base_experience} />
                ))}
            </div>
            <b>Base Experience Total: {total}</b>
        </div>
    );
};

export default Pokedex;