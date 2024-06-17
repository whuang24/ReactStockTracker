import React from "react"
import '../Component CSS/Details.css';
import { finnhubClient } from "../finnhubService";
import StockChart from "./StockChart"
import Header from "./Header"

export default function Details(props) {
    return (
        <div className="detailsContainer">
            <Header symbol={props.currStock} removing={props.removing}/>
            <StockChart symbol={props.currStock}/>
        </div>
    )
}