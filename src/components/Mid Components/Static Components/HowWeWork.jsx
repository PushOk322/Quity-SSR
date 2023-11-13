import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from "next/image";

import './how-we-work.scss';

import howWeWorkIcon1 from "../../../../public/how-we-work-icon-1.svg";
import howWeWorkIcon2 from "../../../../public/how-we-work-icon-2.svg";
import howWeWorkIcon3 from "../../../../public/how-we-work-icon-3.svg";
import howWeWorkIcon4 from "../../../../public/how-we-work-icon-4.svg";
import howWeWorkIcon5 from "../../../../public/how-we-work-icon-5.svg";
import howWeWorkIcon6 from "../../../../public/how-we-work-icon-6.svg";
import ifUNeed from "../../../../public/if-u-need-icon.svg";


export default function HowWeWork() {

    return (
        <>
            <div className="how-we-work">
                <div className="how-we-work__title">Как мы работаем?</div>
                <div className="how-we-work__container">
                    <div className="how-we-work__block">
                        <Image src={howWeWorkIcon1} className="how-we-work__icon"></Image>
                        <div className="how-we-work__heading">Заказываете в 3 клика</div>
                        <div className="how-we-work__text">
                            Вы оформляете заказ через <span>личный кабинет,</span> оплачиваете любым удобным способом
                        </div>
                    </div>
                    <div className="how-we-work__block">
                        <Image src={howWeWorkIcon2} className="how-we-work__icon"></Image>
                        <div className="how-we-work__heading">Отгружаем за 1 день</div>
                        <div className="how-we-work__text">
                            Если товар в наличии, то отгружаем Вам в течение 1 дня после оплаты. По предзаказу –  до 10 дней доставка из Китая
                        </div>
                    </div>
                    <div className="how-we-work__block">
                        <Image src={howWeWorkIcon3} className="how-we-work__icon"></Image>
                        <div className="how-we-work__heading">Предпродажная проверка</div>
                        <div className="how-we-work__text">
                            Проверяем товар в Вашем присутствии или онлайн по видеосвязи
                        </div>
                    </div>
                    <div className="how-we-work__block">
                        <Image src={howWeWorkIcon4} className="how-we-work__icon"></Image>
                        <div className="how-we-work__heading">Закрепляем сделку договором</div>
                        <div className="how-we-work__text">
                            Оформляем договор на покупку с гарантией на новое оборудование 6-12 месяцев
                        </div>
                    </div>
                    <div className="how-we-work__block">
                        <Image src={ifUNeed} className="how-we-work__ifyouneed"></Image>
                        <Image src={howWeWorkIcon5} className="how-we-work__icon"></Image>
                        <div className="how-we-work__heading">Доставляем по УКРАИНЕ до 10 дней</div>
                        <div className="how-we-work__text">
                            Любой транспортной компанией в срок
                            до 10 дней. Статус заказа можете отслеживать в личном кабинете
                        </div>
                    </div>
                    <div className="how-we-work__block">
                        <Image src={howWeWorkIcon6} className="how-we-work__icon finish"></Image>
                        <div className="how-we-work__heading">Вы получаете ASIC</div>
                        <div className="how-we-work__text">
                            Забираете товар в пункте выдачи в своем городе
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
