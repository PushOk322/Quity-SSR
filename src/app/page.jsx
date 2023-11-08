'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Image from "next/image";
// import { useRouter } from "next/router";

import './main.scss';

import Header from "../components/Big Components/All Pages Components/Header.jsx";
import MainHero from "../components/Mid Components/Static Components/MainHero.jsx";
import BasicProductFeatures from "../components/Mid Components/Static Components/BasicProductFeatures.jsx";


export default function Home() {
  
  return (
    <>
      <div className="wrapper">
        <Header></Header>
        <MainHero></MainHero>
        <BasicProductFeatures></BasicProductFeatures>
        <div className="height"></div>
      </div>
    </>
  )
}
