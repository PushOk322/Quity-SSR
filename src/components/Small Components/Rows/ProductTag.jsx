'use client'

import React, { useState, useEffect } from 'react';
import "./product-tag.scss";

const ProductTag = (props) => {


    return (
        <>
            <div className={`product-tag ${props.tagType === "hit" ? "hit" : props.tagType === "new" ? "new" : ""}`}>

                {props.tagType === "hit" ? "ХИТ" : props.tagType === "new" ? "НОВИНКИ" : ""}

            </div>
        </>
    );
};

export default ProductTag;
