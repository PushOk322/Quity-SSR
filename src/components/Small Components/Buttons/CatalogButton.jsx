import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import "./catalog-button.scss";
const CatalogButton = (props) => {
    return (
        <>
            <Link href="/Catalog">
                <button className={`catalog-button ${props.buttonType === "yellow" ? "yellow" : "transparent"}`}>
                    В каталог
                </button>
            </Link>
        </>
    );
};

export default CatalogButton;
