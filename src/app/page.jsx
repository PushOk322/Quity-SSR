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
import MiniCatalog from '../components/Big Components/Catalogs/MiniCatalog.jsx';
import ServicesStatic from '../components/Mid Components/Static Components/ServicesStatic.jsx';
import HowWeWork from '../components/Mid Components/Static Components/HowWeWork.jsx';
import ChooseStatic from '../components/Mid Components/Static Components/ChooseStatic.jsx';

export default function Home() {
  
  return (
    <>
      <div className="wrapper">
        <Header></Header>
        <MainHero></MainHero>
        <BasicProductFeatures></BasicProductFeatures>
        <MiniCatalog></MiniCatalog>
        <ServicesStatic></ServicesStatic>
        <HowWeWork></HowWeWork>
        <ChooseStatic></ChooseStatic>
        <div className="height"></div>
      </div>
    </>
  )
}
