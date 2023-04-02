import React , {useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.scss';
import appWithI18n from 'next-translate/appWithI18n'
import DefaultLayout from "../components/layout/DefaultLayout";
import i18nConfig from '../i18n'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  let language = 'az'

  if (typeof window !== 'undefined') {
     language = localStorage.getItem("language");
  }

  useEffect(()=>{
    router.push(router.asPath, undefined, { locale: language })
  }, [language])

  return <DefaultLayout>
    <Component {...pageProps} />
  </DefaultLayout>
}


// / Wraping your _app.js
export default appWithI18n(MyApp, {
  ...i18nConfig,
  // Set to false if you want to load all the namespaces on _app.js getInitialProps
})

