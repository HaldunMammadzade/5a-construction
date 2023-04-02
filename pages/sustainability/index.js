import React from "react";
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../../i18n.json'

const { locales } = i18nConfig

const Sustainability = () => {
    const { t, lang } = useTranslation('common');
    return (

        <>
            <Head>
                <title>{t('sustain')}</title>
            </Head>
            <section>
                <div className='container-fluid pb-5'>
                    <div className='mt-5 mb-4'>
                        <h1 className="about-sustain animated fadeInRight">{t('sustainTitle')}</h1>
                    </div>
                    <div className="row align-items-end">
                        <div className="col-md-6 col-12">
                            <img className='w-100' src="/static/img1.jpg" alt="" />
                        </div>
                        <div className="col-md-6 col-12 sustain-desc my-md-0 my-3">
                            <p className="m-0">{t('sustainDesc1')}
                                <br />
                                <br />
                                {t('sustainDesc2')}
                            </p>
                        </div>
                    </div>
                    <div className='mt-5 mb-4'>
                        <h1 className="sustain-header animated fadeInRight">{t('sustainTitle2')}</h1>
                    </div>
                    <div>
                        <img className='w-100' src="/static/img2.jpg" alt="" />
                    </div>
                    <div className="product-text-left my-5">
                        <p>{t('sustainDesc3')}</p>
                    </div>
                </div>
            </section>

        </>
    )
}




export default Sustainability
