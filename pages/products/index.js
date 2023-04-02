import React from "react";
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../../i18n.json'

const { locales } = i18nConfig

const Products = () => {
    const { t, lang } = useTranslation('common');
    return (

        <>
            <Head>
                <title>{t('products')}</title>
            </Head>

            <section className='container-fluid'>
                <div className=' animated fadeInRight  mt-4'>
                    <h1 className='mt-4'>{t('products')}</h1>
                </div>
                <div className='row animated fadeInLeft '>
                    <div className='col-md-4  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/product4.jpg" alt="" />
                        </div>
                        <div>
                            <p className='border-b product-name m-0 py-1'>{t('product4')}</p>
                        </div>
                    </div>
                    <div className='col-md-8  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/product5.jpg" alt="" />
                        </div>
                        <div>
                            <p className='border-b product-name m-0 py-1'>{t('product17')}</p>
                        </div>
                    </div>
                </div>
                <div className="product-text my-md-5 my-3">
                    <span>{t('productText1')}</span>
                </div>
                <div className='row animated fadeInLeft '>
                    <div className='col-md-4  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/product6.jpg" alt="" />
                        </div>
                        <div>
                            <p className='border-b product-name m-0 py-1'>{t('product5')}</p>
                        </div>
                    </div>
                    <div className='col-md-4  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/product7.jpg" alt="" />
                        </div>
                        <div>
                            <p className='border-b product-name m-0 py-1'>{t('product6')}</p>
                        </div>
                    </div>
                    <div className='col-md-4  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/product8.jpg" alt="" />
                        </div>
                        <div>
                            <p className='border-b product-name m-0 py-1'>{t('product7')}</p>
                        </div>
                    </div>
                    <div className='col-md-4  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/product9.jpg" alt="" />
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            <p className='border-b product-name m-0 py-1'>{t('product8')}</p>
                        </div>
                    </div>
                    <div className='col-md-4  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/product10.jpg" alt="" />
                        </div>
                        <div>
                            <p className='border-b product-name m-0 py-1'>{t('product1')}</p>
                        </div>
                    </div>
                    <div className='col-md-4  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/product11.jpg" alt="" />
                        </div>
                        <div>
                            <p className='border-b product-name m-0 py-1'>{t('product9')}</p>
                        </div>
                    </div>
                </div>
                <div className="product-text-left  my-md-5 my-3">
                    <span>{t('productText2')}</span>
                </div>

                <div className='row animated fadeInLeft '>
                    <div className='col-md-4  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/product12.jpg" alt="" />
                        </div>
                        <div>
                            <p className='border-b product-name m-0 py-1'>{t('product10')}</p>
                        </div>
                    </div>
                    <div className='col-md-8  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/product13.jpg" alt="" />
                        </div>
                        <div>
                            <p className='border-b product-name m-0 py-1'>{t('product11')}</p>
                        </div>
                    </div>
                </div>

                <div className='row animated fadeInLeft '>
                    <div className='col-md-8  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/product14.jpg" alt="" />
                        </div>
                        <div>
                            <p className='border-b product-name m-0 py-1'>{t('product12')}</p>
                        </div>
                    </div>
                    <div className='col-md-4  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/product15.jpg" alt="" />
                        </div>
                        <div>
                            <p className='border-b product-name m-0 py-1'>{t('product13')}</p>
                        </div>
                    </div>

                </div>

                <div className='row animated fadeInLeft mb-5'>
                    <div className='col-md-4  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/product16.jpg" alt="" />
                        </div>
                        <div>
                            <p className='border-b product-name m-0 py-1'>{t('product14')}</p>
                        </div>
                    </div>
                    <div className='col-md-4  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/product17.jpg" alt="" />
                        </div>
                        <div>
                            <p className='border-b product-name m-0 py-1'>{t('product15')}</p>
                        </div>
                    </div>
                    <div className='col-md-4  col-12 '>
                        <div className='mt-5 product-img'>
                            <img className="w-100" src="/static/product18.jpg" alt="" />
                        </div>
                        <div>
                            <p className='border-b product-name m-0 py-1'>{t('product16')}</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}




export default Products
