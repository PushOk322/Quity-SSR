'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { useRouter } from "next/router";

import './product-card.scss';

import ProductTag from '../../Small Components/Rows/ProductTag';


import minerImg from "../../../../public/miner-img.png";

const ProductCard = (props) => {
    console.log("🚀 ~ file: ProductCard.jsx:18 ~ ProductCard ~ props:", props.productObj)




    return (
        <>
            <div className="product-card">
                <div className="product-card__product-tag">
                    <ProductTag tagType={props.productObj.product_tag}></ProductTag>
                </div>
                <div className="product-card__image-wrapper">
                    <Image width={182} height={168} src={props.productObj.product_photo} className="product-card__image"></Image>
                </div>
                <div className="product-card__product-state">{props.productObj.product_status === 'ready' ? "В наличии":props.productObj.product_status === 'wait' ? "Под заказ": null }</div>
                <div className="product-card__name">{props.productObj.product_name}</div>
                <div className="product-card__infos">
                    <div className="product-card__info-item">{props.productObj.product_hashrate} <span>TH/s</span></div>
                    <div className="product-card__info-item">{props.productObj.product_energy_consumption} <span>W</span></div>
                    <div className="product-card__info-item">{props.productObj.product_profitability} <span>J/TH</span></div>
                </div>
                <div className="product-card__price">{props.productObj.product_profitability} <span>$</span></div>
            </div>
        </>
    );
};

export default ProductCard;



