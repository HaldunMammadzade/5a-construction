import React from "react";
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../../i18n.json'

const { locales } = i18nConfig
const About = () => {
    const { t, lang } = useTranslation('common');
    return (

        <>
            <Head>
                <title>{t('about')}</title>
            </Head>
            <section>
                <div className='container-sm-fluid'>
                    <div className='my-lg-5 my-0 section-content'>
                        <div className='mt-lg-5 mt-0 pt-lg-5 pt-0 '>
                            <h1 className="about-header animated fadeInRight px-lg-0 px-3">{t('aboutMain')}</h1>
                            <img className='w-100 py-4 animated fadeInLeft d-md-block d-none' src="/static/about-main.jpg" alt="" />
                            <img className='w-100 py-4 animated fadeInLeft d-md-none d-block' src="/static/about-mobile.jpg" alt="" />
                        </div>
                    </div>
                    <div className="about px-lg-0 px-3">
                        <samp>{t('aboutDesc2')}</samp>
                    </div>
                </div>
            </section>

            <section className='container-fluid'>
                <div className="row company-value pt-3 pb-5 mb-4">
                    <div className="col-xl-3 col-md-6 col-12">
                        <p className="mr-5">{t('value')}</p>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12 border-l pr-sm-5">
                        <h2>1</h2>
                        <span >{t('value1')}</span>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12 border-l pr-sm-5">
                        <h2>2</h2>
                        <span >{t('value2')}</span>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12 border-l pr-sm-5">
                        <h2>3</h2>
                        <span >{t('value3')}</span>
                    </div>
                </div>
            </section>

            <section className='container-fluid'>
                <div className="d-xl-flex justify-content-xl-between py-5 vision">
                <h3 className="d-sm-none d-block">{t('vision')}</h3>
                    <div className="mr-2">
                        <img className='main-img' src="/static/about1.jpg " alt="" />
                    </div>
                    <div className="ml-md-2 ml-0 mt-md-0 mt-3">
                        <div className="vision d-sm-none d-block">
                            
                            <p>{t('visionText')}</p>
                        </div>
                        <img className='float-right w-100 vision-img main-img mt-lg-0 mt-3' src="/static/about2.jpg" alt="" />
                        <div className="vision d-sm-block d-none">
                            <h3 >{t('vision')}</h3>
                            <p>{t('visionText')}</p>
                        </div>
                    </div>
                </div>

                <div className="d-xl-flex justify-content-xl-between py-5">
                    <div className="mr-2 ">
                        <div className="vision d-sm-none d-block">
                            <h3 >{t('mission')}</h3>
                            <p>{t('missionText')}</p>
                        </div>
                        <img className='float-right w-100 vision-img ' src="/static/about3.jpg" alt="" />
                        <div className="vision d-sm-block d-none">
                            <h3 >{t('mission')}</h3>
                            <p>{t('missionText')}</p>
                        </div>
                    </div>
                    <div className="ml-md-2 ml-0">
                        <img className=' main-img' src="/static/about4.jpg" alt="" />
                    </div>

                </div>
            </section>

            <div className="position-relative marquee-container-about ">
                <div className="marquee-about d-flex justify-content-around  align-items-center pt-4">
                    <div>
                        <img className='' src="/static/partners1.png" alt="" />
                        <img className='' src="/static/partners2.png" alt="" />
                        <img className='' src="/static/partners3.png" alt="" />
                        <img className='' src="/static/partners4.png" alt="" />
                        <img className='' src="/static/partners5.png" alt="" />
                        <img className='' src="/static/partners6.png" alt="" />
                        <img className='' src="/static/partners1.png" alt="" />
                        <img className='' src="/static/partners2.png" alt="" />
                        <img className='' src="/static/partners3.png" alt="" />
                        <img className='' src="/static/partners4.png" alt="" />
                        <img className='' src="/static/partners5.png" alt="" />
                        <img className='' src="/static/partners6.png" alt="" />
                    </div>
                    <div>
                        <img className='' src="/static/partners1.png" alt="" />
                        <img className='' src="/static/partners2.png" alt="" />
                        <img className='' src="/static/partners3.png" alt="" />
                        <img className='' src="/static/partners4.png" alt="" />
                        <img className='' src="/static/partners5.png" alt="" />
                        <img className='' src="/static/partners6.png" alt="" />
                        <img className='' src="/static/partners1.png" alt="" />
                        <img className='' src="/static/partners2.png" alt="" />
                        <img className='' src="/static/partners3.png" alt="" />
                        <img className='' src="/static/partners4.png" alt="" />
                        <img className='' src="/static/partners5.png" alt="" />
                        <img className='' src="/static/partners6.png" alt="" />
                    </div>
                    <div>
                        <img className='' src="/static/partners1.png" alt="" />
                        <img className='' src="/static/partners2.png" alt="" />
                        <img className='' src="/static/partners3.png" alt="" />
                        <img className='' src="/static/partners4.png" alt="" />
                        <img className='' src="/static/partners5.png" alt="" />
                        <img className='' src="/static/partners6.png" alt="" />
                        <img className='' src="/static/partners1.png" alt="" />
                        <img className='' src="/static/partners2.png" alt="" />
                        <img className='' src="/static/partners3.png" alt="" />
                        <img className='' src="/static/partners4.png" alt="" />
                        <img className='' src="/static/partners5.png" alt="" />
                        <img className='' src="/static/partners6.png" alt="" />
                    </div>
                </div>

            </div>

        </>
    )
}




export default About
