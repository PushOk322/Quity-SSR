import React from 'react';
import Image from "next/image";

import './basic-product-features.scss';

import basicFeaturesIcon1 from "../../../../public/basic-features-icon-1.svg";
import basicFeaturesIcon2 from "../../../../public/basic-features-icon-2.svg";
import basicFeaturesIcon3 from "../../../../public/basic-features-icon-3.svg";
import basicFeaturesIcon4 from "../../../../public/basic-features-icon-4.svg";

export default function MainHero() {
    return (
        <div className="basic-site-features">
            <div className="basic-site-features__item">
                <Image src={basicFeaturesIcon1} className="basic-site-features__img" />
                <div className="basic-site-features__text">Сертификаты <br /> от производителя</div>
            </div>
            <div className="basic-site-features__item">
                <Image src={basicFeaturesIcon2} className="basic-site-features__img" />
                <div className="basic-site-features__text">Легальный ввоз<br /> через таможню</div>
            </div>
            <div className="basic-site-features__item">
                <Image src={basicFeaturesIcon3} className="basic-site-features__img" />
                <div className="basic-site-features__text">5 способов оплаты.<br /> Даже криптовалютой</div>
            </div>
            <div className="basic-site-features__item">
                <Image src={basicFeaturesIcon4} className="basic-site-features__img" />
                <div className="basic-site-features__text">Предпродажная проверка <br /> перед отправкой и в офисе</div>
            </div>
        </div>
    );
}
