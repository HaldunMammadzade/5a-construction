import React from "react";
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../../i18n.json'

const { locales } = i18nConfig

const Project1 = () => {
    const { t, lang } = useTranslation('common');
    return (

        <>
            <Head>
                <title>{t('projects')}</title>
            </Head>

            <section className='container-fluid'>
                <div className=' animated fadeInRight mb-3  mt-4 d-sm-flex justify-content-sm-between align-items-center'>
                    <h1 >{t('project1')}</h1>
                    <div className='project-loc'>
                        <span>{t('location')}</span>
                        <p>{t('city')}</p>
                    </div>
                </div>
                <div>
                    <img className="w-100" src="/static/project4.jpg" alt="" />
                </div>
                <div className="product-text mt-5">
                    <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum is that it has a more-or-less normal It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</span>
                </div>
                <div className='row animated fadeInLeft mb-5'>
                    <div className='col-md-6  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/project5.jpg" alt="" />
                        </div>
                    </div>
                    <div className='col-md-6  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/project6.jpg" alt="" />
                        </div>
                    </div>
                    <div className='col-md-6  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/project7.jpg" alt="" />
                        </div>
                    </div>
                    <div className='col-md-6  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/project8.jpg" alt="" />
                        </div>
                    </div>
                    <div className='col-md-6  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/project9.jpg" alt="" />
                        </div>
                    </div>
                    <div className='col-md-6  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/project10.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}




export default Project1
