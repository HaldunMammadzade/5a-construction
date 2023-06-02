import React from "react";
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../../../i18n.json'

const { locales } = i18nConfig
const Footer = () => {
    const { t, lang } = useTranslation('common');
    return (
        <div className="footer">
            <div className="container-fluid pt-5 pb-3">
                <div className="row align-items-strech p-0 m-0">
                    <div className="col-lg-6 col-12 d-flex justify-content-between p-0">
                        <div>
                            <a href="/"><img src="/static/logo2.svg" alt="" /></a>
                        </div>
                        <div className="address">
                            <p className="cursor">{t('address1')}
                                <br />
                                {t('address2')},
                                <br />
                                {t('address3')}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 text-md-left d-flex p-0 mt-md-0 mt-4 justify-content-between">
                        <ul className="p-0 page-links">
                            <li><a href="/about-us">{t('about')}</a></li>
                            <li><a href="/products">{t('products')}</a></li>
                            <li><a href="/projects">{t('projects')}</a></li>
                            <li><a href="/sustainability">{t('sustain')}</a></li>
                            <li><a href="/contact">{t('contact')}</a></li>
                        </ul>

                        <ul className="p-0">
                            <li><a href="https://www.facebook.com/5aConstructionn?mibextid=LQQJ4d" target="_blank">FACEBOOK</a></li>
                            <li><a href="https://instagram.com/5a_construction?igshid=YmMyMTA2M2Y=" target="_blank">INSTAGRAM</a></li>
                            <li><a href="https://www.linkedin.com/company/5a-construction/" target="_blank">LINKEDIN</a></li>
                        </ul>
                    </div>
                </div>

                <div className="contact-footer">
                    <p className="m-0">+99455/703130011</p>
                    <p className="m-0">sales@5aconstruction.co</p>
                </div>

                <div className="d-sm-flex d-block justify-content-sm-between down pt-4">
                    <address className="text-uppercase">2022 5A Construction  |  Bütün hüquqlar qorunur</address>
                    <a className="own-link" href="https://www.martianstudio.co/" target="_blank">DESIGN AND DEVELOPED BY MARTIAN STUDIO</a>
                </div>
            </div>
        </div>
    )
}

export default Footer