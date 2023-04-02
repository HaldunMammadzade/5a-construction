import React from "react";
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../../i18n.json'

const { locales } = i18nConfig

const Projects = () => {
    const { t, lang } = useTranslation('common');
    
    return (

        <>
            <Head>
                <title>{t('projects')}</title>
            </Head>

            <section className='projects'>
                <div className='container-fluid'>
                    <div className=' animated fadeInLeft d-flex justify-content-between align-items-center mt-4 mb-2'>
                        <h1 className='mb-3 mt-4'>{t('projects')}</h1>
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
                    <div className='col-lg-4  col-12 pr-0 pl-0 border-1'>
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




export default Projects
