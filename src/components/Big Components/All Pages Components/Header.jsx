'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { useRouter } from "next/router";

import './header.scss';

import LogReg from '../../Mid Components/LogReg.jsx';

import textWarning from "../../../../public/text-warning-icon.svg";
import userAvatar from "../../../../public/profile-avatar-default.svg";
import siteLogo from "../../../../public/site-logo.svg";
import whatsapIcon from "../../../../public/whatsapp-icon.svg";
import viberIcon from "../../../../public/viber-icon.svg";
import telegramIcon from "../../../../public/telegram-icon.svg";
import searchIcon from "../../../../public/search-icon.svg";
import savedIcon from "../../../../public/saved-icon.svg";
import statisticsIcon from "../../../../public/statistics-icon.svg";
import cartIcon from "../../../../public/shopping-cart-icon.svg";

const Header = (props) => {

    const [logRegActive, setLogRegActive] = useState(false);


    // const router = useRouter();
    const [upperMenu, setUpperMenu] = useState(1);
    const [midMenu, setMidMenu] = useState(0);

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const getStoredUserObj = () => {

        const storedUserObj = sessionStorage.getItem('currentUser');
        if (storedUserObj) {
            // Parse the stored data
            const parsedUserObj = JSON.parse(storedUserObj);
            // Use the stored playlist
            // You can update the Redux state here if needed
            return parsedUserObj;
        } else {
            // If not available in Redux or local storage, return null
            return null;
        };
    }
    const parsedUserObj = getStoredUserObj();

    return (
        <>

            <LogReg logRegActive={logRegActive} setLogRegActive={setLogRegActive}></LogReg>
            <div className="header">
                <div className="header__horizontal-part top">
                    <div className="header__vertical-part">
                        <div className="header__upper-menu">
                            <button className={`header__upper-item ${upperMenu === 1 ? "active" : ""}`} onClick={() => { setUpperMenu(1) }}>Магазин</button>
                            <button className={`header__upper-item ${upperMenu === 2 ? "active" : ""}`} onClick={() => { setUpperMenu(2) }}>Хостинг</button>
                            <button className={`header__upper-item ${upperMenu === 3 ? "active" : ""}`} onClick={() => { setUpperMenu(3) }}>Ремонт</button>
                            <div className="header__line small"></div>
                            <Link href="/store">
                                <button className={`header__upper-item ${upperMenu === 4 ? "active" : ""}`} onClick={() => { setUpperMenu(3) }}>О компании</button>
                            </Link>
                            <Link href="/store">
                                <button className={`header__upper-item ${upperMenu === 5 ? "active" : ""}`} onClick={() => { setUpperMenu(3) }}>Блог</button>
                            </Link>
                        </div>
                    </div>
                    <div className="header__vertical-part">
                        <div className="header__basic-text ">
                            +38 (097) 123 45 67
                            <Image alt="image not loaded properly" src={textWarning} className="header__text-warning-icon" ></Image>
                        </div>
                        <div className="header__basic-text">Обратный звонок</div>

                        {parsedUserObj ? (
                            <Link href="/profile">
                                <div className="header__profile">
                                    <div className="header__profile-name">
                                        {parsedUserObj.username}
                                    </div>
                                    <Image alt="image not loaded properly" width={40} src={userAvatar} className="header__profile-avatar" />
                                </div>
                            </Link>
                        ) : (
                            <div className="header__profile">
                                {/* add user */}
                                <div className="header__profile-name" onClick={() => { setLogRegActive(true) }}>
                                    Личный кабинет
                                </div>
                                <Image alt="image not loaded properly" width={40} src={userAvatar} className="header__profile-avatar" />
                            </div>
                        )}

                    </div>
                </div>
                <div className="header__line big"></div>
                <div className="header__horizontal-part mid">
                    <div className="header__vertical-part">
                        <Image alt="image not loaded properly" src={siteLogo} className="header__logo"></Image>
                        <div className="header__grey-text">
                            Оборудование для майнинга
                        </div>

                        <div className="header__mid-menu">
                            {
                                upperMenu === 1
                                    ? (
                                        <>
                                            <Link href="/delivery" ><button className={`header__mid-link ${midMenu === 1 ? "active" : ""}`} onClick={() => { setMidMenu(1) }}>Доставка</button></Link>
                                            <Link href="/payment" ><button className={`header__mid-link ${midMenu === 2 ? "active" : ""}`} onClick={() => { setMidMenu(2) }}>Оплата</button></Link>
                                            <Link href="/returnment" ><button className={`header__mid-link ${midMenu === 3 ? "active" : ""}`} onClick={() => { setMidMenu(3) }}>Возврат</button></Link>
                                            <Link href="/tableofmargins" ><button className={`header__mid-link ${midMenu === 4 ? "active" : ""}`} onClick={() => { setMidMenu(4) }}>Таблица доходности</button></Link>
                                        </>
                                    )
                                    : upperMenu === 2
                                        ? (
                                            <>
                                                <Link href="/placement" ><button className={`header__mid-link ${midMenu === 1 ? "active" : ""}`} onClick={() => { setMidMenu(1) }}>Размещение в дата-центр</button></Link>
                                                <Link href="/aboutdata" ><button className={`header__mid-link ${midMenu === 2 ? "active" : ""}`} onClick={() => { setMidMenu(2) }}>О дата-центре</button></Link>
                                                <Link href="/reviews" ><button className={`header__mid-link ${midMenu === 3 ? "active" : ""}`} onClick={() => { setMidMenu(3) }}>Отзывы</button></Link>
                                                <Link href="/faq" ><button className={`header__mid-link ${midMenu === 4 ? "active" : ""}`} onClick={() => { setMidMenu(4) }}>FAQ</button></Link>
                                            </>
                                        )
                                        : upperMenu === 3
                                            ? (
                                                <>
                                                    <Link href="/controlpanel" ><button className={`header__mid-link ${midMenu === 1 ? "active" : ""}`} onClick={() => { setMidMenu(1) }}>Панель управления</button></Link>
                                                    <Link href="/mydevices" ><button className={`header__mid-link ${midMenu === 2 ? "active" : ""}`} onClick={() => { setMidMenu(2) }}>Мои устройства</button></Link>
                                                    <Link href="/myorders" ><button className={`header__mid-link ${midMenu === 3 ? "active" : ""}`} onClick={() => { setMidMenu(3) }}>Мои заявки</button></Link>
                                                    <Link href="/myprofile" ><button className={`header__mid-link ${midMenu === 4 ? "active" : ""}`} onClick={() => { setMidMenu(4) }}>Мои профиль</button></Link>
                                                </>
                                            )
                                            : (<></>)
                            }
                        </div>

                    </div>
                    <div className="header__vertical-part">
                        <div className="header__basic-text messangers">Получите консультацию в мессенджерах</div>
                        <div className="header__socials">
                            <Image alt="image not loaded properly" src={whatsapIcon} className="header__social-icon"></Image>
                            <Image alt="image not loaded properly" src={viberIcon} className="header__social-icon"></Image>
                            <Image alt="image not loaded properly" src={telegramIcon} className="header__social-icon"></Image>
                        </div>
                    </div>
                </div>
                <div className="header__line big"></div>
                {
                    upperMenu === 1 ?
                        (
                            <>
                                <div className="header__horizontal-part lower">
                                    <div className="header__burger-icon" onClick={toggleDropdown}>
                                        <div className="header__menu-line"></div>
                                        <div className="header__menu-line"></div>
                                        <div className="header__menu-line"></div>
                                    </div>
                                    <div className="header__burger-menu-name">Каталог оборудования</div>
                                    {isDropdownVisible && (
                                        <div className="header__dropdown-menu">
                                            <div className="header__dropdown-item">Item 1</div>
                                            <div className="header__dropdown-item">Item 2</div>
                                            <div className="header__dropdown-item">Item 3</div>
                                            <div className="header__dropdown-item">Item 4</div>
                                        </div>
                                    )}
                                    <div className="header__search-bar">
                                        <input type="text" className="header__search-input" placeholder='Поиск по товарам или категориям....' />
                                        <Image alt="image not loaded properly" src={searchIcon} className="header__search-icon"></Image>
                                    </div>
                                    <div className="header__lower-button">
                                        <Image alt="image not loaded properly" src={savedIcon} className="header__button-icon"></Image>
                                    </div>
                                    <div className="header__lower-button">
                                        <Image alt="image not loaded properly" src={statisticsIcon} className="header__button-icon"></Image>
                                    </div>
                                    <div className="header__lower-button cart">
                                        <Image alt="image not loaded properly" src={cartIcon} className="header__button-icon"></Image>
                                        {/* add cart */}
                                        <div className="header__basic-text cart">
                                            В корзине нет товаров
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                        :
                        null
                }
            </div>
        </>
    );
};

export default Header;



