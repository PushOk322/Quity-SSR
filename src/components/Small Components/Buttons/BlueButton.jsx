'use client'

import React, { useState, useEffect } from 'react';
import "./blue-button.scss";

const BlueButton = (props) => {
    const handleClick = (event) => {
        props.handleClick();
    };
    return (
        <>
            <button className="blue-button" onClick={()=>{handleClick()}} style={{width:props.width }}>
                {props.text}
            </button>
        </>
    );
};

export default BlueButton;
