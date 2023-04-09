import React, { useEffect, useState } from "react";
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../../../i18n.json'
import { useRouter } from 'next/router'


const { locales } = i18nConfig

const Header = (props) => {
    const router = useRouter()
    const { t, lang } = useTranslation('common');

    const [scroll, setScroll] = useState(false)
    const scrollFunc = () => {
        window.onscroll = function () {
            if (window.pageYOffset >= 50) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        };
    }

    useEffect(() => {
        scrollFunc()
    }, [router.locale])


    const popperConfig = {
        strategy: "fixed"
    };

    const [language, setLang] = useState("az");

    useEffect(() => {
        setLang(
            localStorage.getItem("language") ? localStorage.getItem("language") : "az"
        );
    }, [lang]
    )

    const changeLang = (lng) => {
        console.log(lng)
        localStorage.setItem("language", lng.toString())
        router.push(router.asPath, undefined, { locale: lng })
        setLang(lng);
    };

    return (
        <><header className={`header justify-content-between align-items-center  ${props.isWhite ? 'white' : ''} ${scroll ? 'active' : ''}  `}>
            <Link type="button" href='/' className="cursor-pointer">
                <img className="cursor" src="/static/logo.svg" alt="" />
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <div className="menu align-items-center d-lg-flex justify-content-between position-relative">
                <ul className="d-lg-none d-flex align-items-center lang-link p-0 langs-mobile my-lg-0 my-3">
                    <li onClick={() => { changeLang('az') }} className={language == "az" ? "color-black border-r pr-3 cursor" : "border-r pr-3 cursor"}>AZ</li>
                    <li onClick={() => { changeLang('en') }} className={language == "en" ? "color-black border-r px-3 cursor" : "border-r px-3 cursor"}>EN</li>
                    <li onClick={() => { changeLang('ru') }} className={language == "ru" ? "color-black border-r px-3 cursor" : "border-r px-3 cursor"}>RU</li>
                </ul>
                <ul className="p-0 nav-links my-lg-0 my-5" >
                    <li><a href="/about-us">{t('about')}</a></li>
                    <li><a href="/products">{t('products')}</a></li>
                    <li><a href="/projects">{t('projects')}</a></li>
                    <li><a href="/sustainability">{t('sustain')}</a></li>
                    <li><a href="/contact">{t('contact')}</a></li>

                </ul>
                <ul className="d-lg-flex d-none align-items-center lang-link mb-0">
                    <li onClick={() => { changeLang('az') }} className={language == "az" ? "color-black border-r px-2 cursor" : "border-r px-2 cursor"}>AZ</li>
                    <li onClick={() => { changeLang('en') }} className={language == "en" ? "color-black border-r px-2 cursor" : "border-r px-2 cursor"}>EN</li>
                    <li onClick={() => { changeLang('ru') }} className={language == "ru" ? "color-black  px-2 cursor" : " px-2 cursor"}>RU</li>
                </ul>

                <div className=" d-lg-none d-flex align-items-center justify-content-between mobile-socials mb-0 mt-5">
                    <a className="my-lg-0 my-5 " href="https://www.facebook.com/5aConstructionn?mibextid=LQQJ4d" target="_blank">FACEBOOK</a>
                    <a className="my-lg-0 my-5 " href="https://instagram.com/5a_construction?igshid=YmMyMTA2M2Y=" target="_blank">INSTAGRAM</a>
                    <a className="my-lg-0 my-5 " href="https://www.linkedin.com/company/5a-construction/" target="_blank">LINKEDIN</a>
                </div>
            </div>



        </header>

        </>
    )
}


export default Header;
