import React from "react";
import s from "./Preloader.module.css";
import loader from "../../assets/img/loading.svg";

const Preloader = (props) => {
    return (
        <div className={ s.spinner }>
            <img src={ loader } alt="spinner"/>
        </div>
    )
};

export default Preloader