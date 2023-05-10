import Head from 'next/head'
import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../i18n.json'

const { locales } = i18nConfig

export default function Home() {
    const { t, lang } = useTranslation('common');
    return (


        <>
            <Head>
                <title>{t('home')}</title>
            </Head>
            <section>
                <div className='container-fluid'>
                    <div className='d-lg-flex d-block my-xl-5 py-xl-5 mt-0 pt-0 section-content'>
                        <div className='mt-xl-5 pt-xl-5 px-sm-0 px-3 mt-0 pt-0 animated fadeInLeft'>
                            <h1>{t('homeTitle')}</h1>
                            <p className='mt-4 mr-17'>{t('homeDesc')}</p>
                            <button className='mt-4'>
                                <a href="/contact">{t('buttonContact')}</a>
                            </button>
                        </div>
                        <div className='animated fadeInRight d-lg-block d-none'>
                            <img className='float-lg-right mt-lg-0 mt-4  main-img' src="/static/home-img.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className='animated fadeInRight d-lg-none d-block '>
                    <img className='float-lg-right mt-lg-0 mt-4  main-img' src="/static/home-img.jpg" alt="" />
                </div>
                <div className="position-relative marquee-container container-fluid">
                    <div className="marquee d-flex justify-content-around">
                        <span>{t('partner')}</span>
                        <span>{t('partner')}</span>
                        <span>{t('partner')}</span>
                        <span>{t('partner')}</span>
                        <span>{t('partner')}</span>
                        <span>{t('partner')}</span>
                        <span>{t('partner')}</span>
                        <span>{t('partner')}</span>
                        <span>{t('partner')}</span>
                    </div>
                </div>
            </section>

            <section>
                <div className='about-cover my-5 d-lg-block d-none'>
                    <img className='main-img' src="/static/about-cover.jpg" alt="" />
                </div>
                <div className='container-fluid'>
                    <div className='row mb-5 section-content'>
                        <div className='col-md-6 col-12'>
                            <h1>{t('aboutTitle')}</h1>
                        </div>
                        <div className='col-md-6 col-12 '>
                            <p className='mr-11'>{t('aboutDesc')}</p>
                            <button className='mt-4'>
                                <a href="/about-us">{t('buttonMore')}</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='about-cover my-5 d-lg-none d-block'>
                    <img className='main-img' src="/static/about-cover.jpg" alt="" />
                </div>
            </section>

            <section className='statistics border-t border-b'>
                <div className='row align-items-center'>
                    <div className='col-md-6 col-12 border-b border-r pr-lg-0'>
                        <div className='container-fluid my-4'>
                            <p>200+</p>
                            <span>{t('satisfied')}</span>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 border-b '>
                        <div className='container-fluid my-4'>
                            <p>10</p>
                            <span>{t('projectCount')}</span>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 border-b border-r pr-lg-0'>
                        <div className='container-fluid my-4'>
                            <p>130</p>
                            <span>{t('kind')}</span>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 border-b '>
                        <div className='container-fluid my-4'>
                            <p>6</p>
                            <span>{t('productGet')}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='my-5'>
                    <div className='container-fluid my-5'>
                        <h1 className='why-choose-us'>{t('choooseUs')}</h1>
                    </div>
                </div>

                <div>
                    <Accordion defaultActiveKey="0" >
                        <Accordion.Item eventKey="0" className='border-t border-b'>
                            <div className='container-fluid'>
                                <Accordion.Header>
                                    <div className='d-flex align-items-center'>
                                        <img src="/static/choose-icon1.svg" className='mt-lg-4' alt="" />
                                        <p className='mb-0'>{t('quality')}</p>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>{t('qualityText')}</Accordion.Body>
                            </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='border-b'>
                            <div className='container-fluid'>
                                <Accordion.Header>
                                    <div className='d-flex align-items-center'>
                                        <img src="/static/choose-icon2.svg" className='mt-lg-4' alt="" />
                                        <p className='mb-0'>{t('service')}</p>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>{t('serviceText')}</Accordion.Body>
                            </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='border-b'>
                            <div className='container-fluid'>
                                <Accordion.Header>
                                    <div className='d-flex align-items-center'>
                                        <img src="/static/choose-icon3.svg" className='mt-lg-4' alt="" />
                                        <p className='mb-0'>{t('develop')}</p>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>{t('developText')}</Accordion.Body>
                            </div>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </section>

            <section className='products py-lg-0 py-5'>
                <div className='container-fluid'>
                    <div className='d-xl-flex d-block justify-content-between my-xl-5 py-lg-5'>
                        <div className='mt-xl-5 mt-3 pt-xl-5 mt-3 product-desc'>
                            <h1>{t('ourProducts')}</h1>
                            <p className='mt-4 '>{t('ourProductsText')}</p>
                            <button className='mt-4'>
                                <a href="/products">{t('more')}</a>
                            </button>
                        </div>
                        <div>
                            <div className='mt-5 product-img'>
                                <a href="/products"><img className='float-xl-right w-100' src="/static/product1.jpg" alt="" /></a>
                            </div>
                            <div>
                                <p className='border-bottom product-name m-0 py-1'>{t('product1')}</p>
                            </div>
                        </div>

                    </div>
                    <div className='d-lg-flex d-block justify-content-between py-2'>
                        <div>
                            <div className='product-img'>
                                <a href="/products"><img className='float-xl-left px-5 w-100' src="/static/product2.jpg" alt="" /></a>
                            </div>
                            <div>
                                <p className='border-bottom product-name m-0 py-1'>{t('product2')}</p>
                            </div>
                        </div>

                        <div>
                            <div className='mt-xl-5 product-img border-bottom product3'>
                                <a href="/products"><img className='float-xl-right px-2 w-100' src="/static/product3.jpg" alt="" /></a>
                                <p className='product-name  m-0 py-1'>{t('product3')}</p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='projects'>
                <div className='container-fluid'>
                    <div className=' animated fadeInLeft d-flex justify-content-between align-items-center mt-4 mb-2'>
                        <h1 className='mb-3 mt-4'>{t('projects')}</h1>
                        <button>
                            <a href="/projects">{t('more')}</a>
                        </button>
                    </div>
                </div>
                <div className='row animated fadeInRight'>
                    <div className='col-lg-4  col-12 pr-0 border-1'>
                        <a href="/project1">
                            <img className='w-100' src="/static/project1.jpg" alt="" />
                            <div className='px-4 py-3'>
                                <h3>{t('project1')}</h3>
                                <span>{t('location')}</span>
                                <p>{t('city')}</p>
                            </div>
                        </a>
                    </div>
                    <div className='col-lg-4  col-12 pr-0 pl-0 border-1'>
                        <a href="/project2">
                            <img className='w-100' src="/static/project2.jpg" alt="" />
                            <div className='px-4 py-3'>
                                <h3>{t('project2')}</h3>
                                <span>{t('location')}</span>
                                <p>{t('city')}</p>
                            </div>
                        </a>
                    </div>
                    <div className='col-lg-4  col-12 pl-0 pr-0 border-1'>
                        <a href="/project3">
                            <img className='w-100' src="/static/project3.jpg" alt="" />
                            <div className='px-4 py-3'>
                                <h3>{t('project3')}</h3>
                                <span>{t('location')}</span>
                                <p>{t('city')}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>


        </>
    )
}



