import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Detail } from "./Detail";

const Card = (props) => {
    const [showDetail, setShowDetail] = useState(false);

    const [detail, setDetail] = useState("");
    const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

    const handlerClick = (url) => {
        console.log(url, "url");
        axios.get(`${API_URL+url}`)
        .then(resp =>{
            console.log(resp.data.sprites.front_default);
            setDetail(resp.data.sprites.front_default);//imagen
            setShowDetail(true);
            console.log(detail, "detail");
        })
}
    const toggleDetail = () => {
        setShowDetail(!showDetail);
    }

    return (
        <div>
        {!showDetail && <button onClick={() => {handlerClick (props.name)}}> {props.name}</button>}
        { showDetail && <Detail detail={detail}/> }
        </div>
    )
}

export default Card