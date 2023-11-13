'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from "next/image";

import './choose-static.scss';

import BlueButton from '../../Small Components/Buttons/BlueButton.jsx';

import bookIcon from "../../../../public/choose-book-icon-1.svg";
import whatsappIcon from "../../../../public/whatsapp-icon-transparent.svg";
import viberIcon from "../../../../public/viber-icon-transparent.svg";
import telegramIcon from "../../../../public/telegram-icon-transparent.svg";

export default function ChooseStatic() {

    const [chosenPrice, setChosenPrice] = useState(1);

    return (
        <>
            <div class="choose-static">
                <div class="choose-static__title">Подберите ASIC-майнер <br /> и рассчитайте сроки окупаемости <br /> и Вашу будущую прибыль <span> за период 2021-2023 год</span> </div>
                <div class="choose-static__books">
                    <div class="choose-static__book">
                        <Image src={bookIcon} class="choose-static__book-img"></Image>
                        <div class="choose-static__book-name">Чек-лист «ТОП5 ASIC-майнеров 2021 года»</div>
                    </div>
                    <div class="choose-static__book">
                        <Image src={bookIcon} class="choose-static__book-img"></Image>
                        <div class="choose-static__book-name">«Как оптимизировать домашнюю майнинг-ферму с минимальными вложениями»</div>
                    </div>
                    <div class="choose-static__book">
                        <Image src={bookIcon} class="choose-static__book-img"></Image>
                        <div class="choose-static__book-name">Подборка ASIC-майнеров в 3х вариантов с расчетом прибыльности </div>
                    </div>
                </div>

                <div class="choose-static__lower">
                    <div class="choose-static__lower-title">Какую сумму вы хотите инвестировать в майнинг?</div>
                    <div class="choose-static__choose-block">
                        <div class={`choose-static__item ${chosenPrice === 1 ? "active" : ""}`} onClick={() => { setChosenPrice(1) }}>До 10 000$</div>
                        <div class={`choose-static__item ${chosenPrice === 2 ? "active" : ""}`} onClick={() => { setChosenPrice(2) }}>10-20 тыс.$</div>
                        <div class={`choose-static__item ${chosenPrice === 3 ? "active" : ""}`} onClick={() => { setChosenPrice(3) }}>20-30 тыс. $</div>
                        <div class={`choose-static__item ${chosenPrice === 4 ? "active" : ""}`} onClick={() => { setChosenPrice(4) }}>30-50 тыс. $</div>
                        <div class={`choose-static__item ${chosenPrice === 5 ? "active" : ""}`} onClick={() => { setChosenPrice(5) }}>более 50 тыс. $</div>
                    </div>
                    <div class="choose-static__where-to-send">
                        <div class="choose-static__where-to-send-block">
                            <div class="choose-static__heading">
                                Введите номер телефона
                            </div>
                            <input type="tel" class="choose-static__input" />
                        </div>
                        <div class="choose-static__where-to-send-block">
                            <div class="choose-static__heading">
                                Куда Вам выслать расчет?
                            </div>
                            <div class="choose-static__socials">
                                <Image src={whatsappIcon} class="choose-static__social"></Image>
                                <Image src={viberIcon} class="choose-static__social"></Image>
                                <Image src={telegramIcon} class="choose-static__social"></Image>
                            </div>
                        </div>
                    </div>
                    <div className="choose-static__blue-button">
                        <BlueButton text="Подобрать и рассчитать окупаемость + получить бонусы " width={902}></BlueButton>
                    </div>
                    <div class="choose-static__after-button-text">Или пишите - подберем Вам оборудование в мессенджере</div>

                    <div class="choose-static__socials small">
                        <Image src={whatsappIcon} class="choose-static__social small"></Image>
                        <Image src={viberIcon} class="choose-static__social small"></Image>
                        <Image src={telegramIcon} class="choose-static__social small"></Image>
                    </div>
                </div>
            </div>
        </>
    )
}
