'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/slices/productsSlice';
import ProductCard from '../../Mid Components/Cards/ProductCard';
import axios from 'axios';
// import { useRouter } from "next/router";

import './mini-catalog.scss';

import arrowRight from "../../../../public/arrow-right-icon.svg";


const MiniCatalog = (props) => {

    const dispatch = useDispatch();


    const [sort, setSort] = useState("asic");

    const productsObj = useSelector(state => state.products.products);
    console.log("🚀 productsObj:", productsObj)

    useEffect(() => {
        loadProducts();
    }, []);


    const loadProducts = async () => {
        try {
            const response = await axios.get(`https://quity-strapi.onrender.com/api/products?populate[0]=product_photo`);

            console.log("🚀 response:", response)

            const dispatchPromises = response.data.data.map((videoData, index) => {
                return dispatch(addProduct({ data: videoData, index }));
            });

            await Promise.all(dispatchPromises.filter(Boolean)); //
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };


    return (
        <>
            <div class="mini-catalog">
                <div class="mini-catalog__title">Более 120 моделей в наличии и под заказ</div>
                <div class="mini-catalog__sort">
                    <div class={sort === "asic" ? "mini-catalog__button active" : " mini-catalog__button"} onClick={() => { setSort("asic") }}>ASIC–майнеры</div>
                    <div class={sort === "gpu" ? "mini-catalog__button active" : " mini-catalog__button"} onClick={() => { setSort("gpu") }}>GPU–майнеры</div>
                    <div class={sort === "hdd" ? "mini-catalog__button active" : " mini-catalog__button"} onClick={() => { setSort("hdd") }}>Жесткие диски</div>
                </div>
                <div class="mini-catalog__catalog">
                    {productsObj.length === 0 ? (
                        // Display a loading message or any other content while loading
                        <p style={{ color: "#000" }}>Loading...</p>
                    ) : (
                        // Render VideoCard components when videoObj is not empty
                        productsObj.map((productData, index) => {

                            switch (sort) {
                                case "asic":
                                    if (productData.product_type === "asic") {
                                        //console.log(`Rendering VideoCard ${index}`);
                                        return (
                                            <ProductCard key={index} productObj={productData} />
                                        );
                                    }
                                    break;
                                case "gpu":
                                    if (productData.product_type === "gpu") {
                                        //console.log(`Rendering VideoCard ${index}`);
                                        return (
                                            <ProductCard key={index} productObj={productData} />
                                        );
                                    }
                                    break;
                                case "hdd":
                                    if (productData.product_type === "hdd") {
                                        //console.log(`Rendering VideoCard ${index}`);
                                        return (
                                            <ProductCard key={index} productObj={productData} />
                                        );
                                    }
                                    break;
                                default:
                                    return null; // Return nothing for other cases
                            }
                        })
                    )}
                    <div class="mini-catalog__catalog-card">
                        <div class="mini-catalog__catalog-card-text">Еще 113 моделей в наличии и под заказ</div>
                        <Image src={arrowRight} class="mini-catalog__catalog-card-arrow"></Image>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MiniCatalog;



