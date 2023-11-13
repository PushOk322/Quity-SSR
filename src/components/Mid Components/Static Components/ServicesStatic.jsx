import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from "next/image";

import './services-static.scss';

import BlueButton from "../../Small Components/Buttons/BlueButton.jsx";

import playIcon from "../../../../public/play-icon.svg";
import staticImg1 from "../../../../public/services-static-img-1.jpg";
import staticImg2 from "../../../../public/services-static-img-2.jpg";

export default function ServicesStatic() {

    return (
        <>
            <div className="services-static__container">
                <div className="services-static__block first">
                    <Image src={staticImg1} className="services-static__background-image"></Image>
                    <div className="services-static__background-image-blur"></div>

                    <div className="services-static__title">Нет условий <br /> для майнинга дома?</div>
                    <div className="services-static__undertext">Разместите оборудование в нашем дата-центре и отслеживайте заработок с любого устройства в <span>личном кабинете</span></div>

                    <div className="services-static__infos">
                        <div className="services-static__info-box">
                            <div className="services-static__info-data">3.7 кВтч <span>с НДС</span></div>
                            <div className="services-static__info-description">легальная оплата за «розетку»</div>
                        </div>
                        <div className="services-static__info-box">
                            <div className="services-static__info-data">100 % </div>
                            <div className="services-static__info-description">время непрерывной работы </div>
                        </div>
                        <div className="services-static__info-box">
                            <div className="services-static__info-data"> 24/7</div>
                            <div className="services-static__info-description">постоянный контроль и охрана объекта</div>
                        </div>
                    </div>

                    <div className="services-static__buttons">
                        <Link href={"/"}>
                            <BlueButton text="Подробнее" handleClick={() => null} width={150}></BlueButton>
                        </Link>
                        <div className="services-static__play">
                            <a target="_blank" href="https://www.youtube.com/watch?v=4guNcsVGU7U">
                                <Image src={playIcon} className="services-static__paly-icon"></Image>
                            </a>
                            <div className="services-static__play-text">Посмотрите видео о нашем дата-центре</div>
                        </div>
                    </div>
                </div>
                <div className="services-static__block">
                    <Image src={staticImg2} className="services-static__background-image"></Image>
                    <div className="services-static__background-image-blur"></div>

                    <div className="services-static__title">Отремонтируем <br /> Ваш ASIC за 2 недели</div>
                    <div className="services-static__undertext small">Только оригинальные запчасти с оплатой по факту только за выполненные работы </div>

                    <div className="services-static__infos ">
                        <div className="services-static__info-box">
                            <div className="services-static__info-data">14 дней </div>
                            <div className="services-static__info-description">гарантия на ремонт</div>
                        </div>
                        <div className="services-static__info-box">
                            <div className="services-static__info-data">5+ лет</div>
                            <div className="services-static__info-description">опыт работы наших инженеров</div>
                        </div>
                        <div className="services-static__info-box">
                            <div className="services-static__info-data">0 $</div>
                            <div className="services-static__info-description">диагностика даже если откажетесь от услуг</div>
                        </div>
                    </div>

                    <div className="services-static__buttons">
                        <Link href={"/"}>
                            <BlueButton text="Подробнее" handleClick={() => null} width={150}></BlueButton>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
