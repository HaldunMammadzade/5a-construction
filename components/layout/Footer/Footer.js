import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-fluid pt-5 pb-3">
                <div className="row align-items-strech px-md-0 px-3">
                    <div className="col-lg-6 col-12 d-flex justify-content-between p-0">
                        <div>
                            <a href="/"><img src="/static/logo2.svg" alt="" /></a>
                        </div>
                        <div className="address">
                            <p className="cursor">Ziya Bunyadov pr. 19-65
                                <br />
                                Dərnəgül Tikinti Bazarı,
                                <br />
                                Bakı, Azərbaycan</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 text-md-left d-flex p-0 mt-md-0 mt-4 justify-content-between">
                        <ul className="p-0 page-links">
                            <li><a href="/about-us">HAQQIMIZDA</a></li>
                            <li><a href="/products">MƏHSULLAR</a></li>
                            <li><a href="/projects">PROYEKTLƏR</a></li>
                            <li><a href="/sustainability">DAYANIQLILIQ</a></li>
                            <li><a href="/contact">ƏLAQƏ</a></li>
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
                    <address>DESIGN AND DEVELOPED BY MARTIAN STUDIO</address>
                </div>
            </div>
        </div>
    )
}

export default Footer