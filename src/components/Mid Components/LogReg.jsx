'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/slices/userSlice';
import axios from 'axios';


import './log-reg.scss';

import LogInput from "../Small Components/Inputs/LogInput.jsx";
import SuccessErrorCard from '../Mid Components/Cards/SuccessErrorCard.jsx';
import BlueButton from '../Small Components/Buttons/BlueButton';
import PasswordInput from "../Small Components/Inputs/PasswordInput.jsx";

import closeIcon from "../../../public/close-popup-icon.svg";

const LogReg = (props) => {
    const [logReg, setLogReg] = useState(1);








    const dispatch = useDispatch();




    const [successErrorState, setSuccessErrorState] = useState(0);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        //console.log("pressed");
        try {
            const response = await axios.post('https://quity-strapi.onrender.com/api/auth/local?populate=*', {
                identifier: email,
                password: password,
            });
            console.log('Logged in:', response.data);

            dispatch(loginUser(response.data));
            const currentUser = {
                blocked: response.data.user.blocked,
                confirmed: response.data.user.confirmed,
                createdAt: response.data.user.createdAt,
                email: response.data.user.email,
                id: response.data.user.id,
                provider: response.data.user.provider,
                updatedAt: response.data.user.updatedAt,
                username: response.data.user.username,
                jwt: response.data.jwt
            };
    
            // Store the currentUser object in sessionStorage
            sessionStorage.setItem(`currentUser`, JSON.stringify(currentUser));
            props.setLogRegActive(false);

            setSuccessErrorState(1);
            
            setTimeout(() => {
                setSuccessErrorState(0);

                window.location.reload();
                
                // navigate("/UserMain");

            }, 1000);
        } catch (error) {
            setSuccessErrorState(2);
            setTimeout(() => {
                setSuccessErrorState(0);
            }, 2000);
        }
    };

    const [regFIO, setRegFIO] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPhone, setRegPhone] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [regPasswordRepeat, setRegPasswordRepeat] = useState('');

    const handleReg = async () => {
        if (regPassword != regPasswordRepeat) {
            setSuccessErrorState(1);

            setTimeout(() => {
                setSuccessErrorState(0);
            }, 1000);
        } else {
            try {
                const response = await axios.post('https://quity-strapi.onrender.com/api/auth/local/register', {
                    username: regFIO,
                    email: regEmail,
                    user_phone: regPhone,
                    password: regPassword,
                    role: "Authenticated",
                });
                // console.log('Logged in:', response.data);

                
                setSuccessErrorState(1);
                
                setTimeout(() => {
                    setSuccessErrorState(0);
                    
                    setLogReg(1);
                    // navigate("/UserMain");
                }, 1000);
            } catch (error) {
                setSuccessErrorState(2);
                setTimeout(() => {
                    setSuccessErrorState(0);
                }, 2000);
            }
        }
        //console.log("pressed");
        
    };


    return (
        <>
            <SuccessErrorCard popUpState={successErrorState}></SuccessErrorCard>
            <div className={`log-reg__wrapper ${props.logRegActive ? "active" : ""}`}>
                <div className={`log-reg ${props.logRegActive ? "active" : ""}`}>
                    <Image alt="image not loaded properly" src={closeIcon} className="log-reg__close-icon" onClick={() => { props.setLogRegActive(false) }}></Image>
                    <div className="log-reg__nav">
                        <div className={`log-reg__nav-button ${logReg === 1 ? "active" : ""}`} onClick={() => { setLogReg(1) }}>
                            Вход
                        </div>
                        <div className={`log-reg__nav-button ${logReg === 2 ? "active" : ""}`} onClick={() => { setLogReg(2) }}>
                            /  Регистрация
                        </div>
                    </div>
                    {
                        logReg === 1 ?
                            <>
                                <div className="log-reg__inputs">
                                    <LogInput placeholder="Email *" type="email" label="Email или телефон *" id="email-input" setInputValue={setEmail}></LogInput>
                                    <PasswordInput placeholder="Пароль *" label="Пароль *" id="password-input-log" setInputValue={setPassword} ></PasswordInput>
                                </div>
                                <div className="log-reg__under-inputs link">
                                    Забыл пароль?
                                </div>
                                <div className="log-reg__button-wrapper">
                                    <BlueButton text="Войти" handleClick={handleLogin}></BlueButton>
                                </div>
                            </>
                            :
                            <>
                                <div className="log-reg__inputs">
                                    <LogInput placeholder="ФИО *" type="text" label="ФИО *" id="fio-input" setInputValue={setRegFIO}></LogInput>
                                    <LogInput placeholder="Email *" type="email" label="Email *" id="email-input-create" setInputValue={setRegEmail}></LogInput>
                                    <LogInput placeholder="Телефон *" type="tel" label="Телефон *" id="phone-input-create" setInputValue={setRegPhone}></LogInput>
                                    <PasswordInput placeholder="Придумайте пароль *" label="Придумайте пароль *" id="password-input" setInputValue={setRegPassword} ></PasswordInput>
                                    <PasswordInput placeholder="Подтвердите пароль *" label="Подтвердите пароль *" id="password-input-repeat" setInputValue={setRegPasswordRepeat} ></PasswordInput>
                                </div>
                                <div className="log-reg__under-inputs">
                                    Я принимаю условия <span>Публичной оферты</span> и <span>Пользовательского соглашения</span>
                                </div>
                                <div className="log-reg__button-wrapper">
                                    <BlueButton text="Зарегистрироватся" handleClick={handleReg}></BlueButton>
                                </div>
                            </>
                    }

                </div>
            </div>
        </>
    );
};

export default LogReg;



