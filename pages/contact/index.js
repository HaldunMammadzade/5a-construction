import React from "react";
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../../i18n.json'
const { locales } = i18nConfig
const Contact = () => {
    const { t, lang } = useTranslation('common');
    return (

        <>
            <Head>
                <title>{t('contactUs')}</title>
            </Head>

            <section className="container-fluid">
                <div className="row contact border-t border-b ">
                    <div className="col-lg-7 col-12 border-l p-0 d-lg-none">
                        <h1 className="mb-5 mt-4 ml-3">{t('contactUs')}</h1>

                        <div className="d-flex justify-content-between border-t contact-info pl-3 pt-4 pb-5">
                            <span>{t('mail')}</span>
                            <address>sales@5aconstruction.co</address>
                        </div>
                        <div className="d-flex justify-content-between border-t contact-info-number pl-3 pt-4 pb-5">
                            <span>{t('number')}</span>
                            <address>+99455/703130011</address>
                        </div>
                        <div className="d-flex justify-content-between border-t contact-info pl-4 pt-3 pb-5">
                            <span>{t('addressText')}</span>
                            <address>{t('address1')}
                                <br />
                                {t('address2')}
                                <br />
                                {t('address3')}</address>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 p-0">
                        <img className='w-100 py-4 animated fadeInLeft' src="/static/contact.jpg" alt="" />
                    </div>
                    <div className="col-lg-7 col-12 border-l p-0 d-lg-block d-none">
                        <h1 className="mb-5 mt-4 ml-3">{t('contactUs')}</h1>

                        <div className="d-flex justify-content-between border-t contact-info pl-3 pt-4 pb-5">
                            <span>{t('mail')}</span>
                            <address>sales@5aconstruction.co</address>
                        </div>
                        <div className="d-flex justify-content-between border-t contact-info-number pl-3 pt-4 pb-5">
                            <span>{t('number')}</span>
                            <address>+99455/703130011</address>
                        </div>
                        <div className="d-flex justify-content-between border-t contact-info pl-4 pt-3 pb-5">
                            <span>{t('addressText')}</span>
                            <address>{t('address1')}
                                <br />
                                {t('address2')}
                                <br />
                                {t('address3')}</address>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}




export default Contact
