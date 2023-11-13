import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from "next/image";

import './main-hero.scss';

import CatalogButton from '../../Small Components/Buttons/CatalogButton';

import heroImage1 from "../../../../public/main-hero-img-1.png";
import heroImage2 from "../../../../public/main-hero-img-2.jpg";
import heroImage3 from "../../../../public/main-hero-img-3.jpg";
import heroBackground1 from "../../../../public/main-hero-background-1.jpg";
import heroBackground2 from "../../../../public/main-hero-background-2.jpg";
import heroBackground3 from "../../../../public/main-hero-background-3.jpg";

export default function MainHero() {

    return (
        <>
            <div className="main-hero">
                <div className="main-hero__big-card">
                    <Image src={heroBackground1} className='main-hero__background big'></Image>
                    <Image src={heroImage1} className='main-hero__image big'></Image>

                    <div className="main-hero__card-title">ASIC-майнеры напрямую от производителя</div>
                    <ul className="main-hero__list">
                        <li className="main-hero__list-item">Без переплат;</li>
                        <li className="main-hero__list-item">180 дней гарантии;</li>
                        <li className="main-hero__list-item">от 7 дней доставка по Украины;</li>
                        <li className="main-hero__list-item">от 9 месяцев окупаемость;</li>
                    </ul>
                    <CatalogButton buttonType="yellow"></CatalogButton>
                </div>
                <div className="main-hero__small-cards">
                    <div className="main-hero__small-card">
                        <Image src={heroBackground2} className='main-hero__background small'></Image>
                        <Image src={heroImage2} className='main-hero__image small'></Image>
                        <div className="main-hero__small-card-title">ASIC-майнеры</div>
                        <div className="main-hero__small-card-undertitle">Более 120 моделей <br /> в наличии и под заказ</div>
                        <CatalogButton ></CatalogButton>

                    </div>
                    <div className="main-hero__small-card">
                        <Image src={heroBackground3} className='main-hero__background small'></Image>
                        <Image src={heroImage3} className='main-hero__image small-second'></Image>
                        <div className="main-hero__small-card-title">GPU-майнеры</div>
                        <div className="main-hero__small-card-undertitle">Более 120 моделей <br /> в наличии и под заказ</div>
                        <CatalogButton ></CatalogButton>
                    </div>
                </div>
            </div>
        </>
    )
}
