import * as React from 'react';
import { Helmet } from 'react-helmet'
import Nav from '../Layout/Navbar'
import Breadcrumb from '../Layout/Breadcrumb'


// style
import '../style/css/contact.css'
import { NavLink } from 'react-router-dom'

function Contact() {

    return (
        <React.Fragment>
            <Helmet>
                <title>Stteam | contact</title>
            </Helmet>
            <main className='contact'>
                <Nav />
                <section className='w-100 '>
                    <Breadcrumb />
                    <section className='bg-light section'>
                        <div className='container pt-2 pb-2' >
                            <h2> where to <strong> find us </strong></h2>
                            <div>
                                <NavLink to='https://www.google.com/maps/place/%D8%A7%D9%84%D9%85%D8%B3%D8%B9%D9%88%D8%AF+%D9%84%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA+-+Al+Masaood%E2%80%AD/@24.4881309,54.3751348,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e6643765ba6a9:0x98494bcce27e6018!8m2!3d24.488126!4d54.3725599!16s%2Fg%2F11g8_bk_wg?entry=ttu'
                                    className='mb-3 fw-bold'
                                    target='_blank'>
                                    Al Massood Automobiles Showroom. Najda St.Floor5 Office 10
                                </NavLink>
                            </div>
                            <div className='google-map position-relative mt-2'>
                                <div className='position-absolute dotes-left'>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.922820838274!2d54.37513482401894!3d24.48813086005398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6643765ba6a9%3A0x98494bcce27e6018!2z2KfZhNmF2LPYudmI2K8g2YTZhNiz2YrYp9ix2KfYqiAtIEFsIE1hc2Fvb2Q!5e0!3m2!1sar!2seg!4v1687384381237!5m2!1sar!2seg" width="100%" height="350" title='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <NavLink to='https://www.google.com/maps/place/%D8%A7%D9%84%D9%85%D8%B3%D8%B9%D9%88%D8%AF+%D9%84%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA+-+Al+Masaood%E2%80%AD/@24.4881309,54.3751348,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e6643765ba6a9:0x98494bcce27e6018!8m2!3d24.488126!4d54.3725599!16s%2Fg%2F11g8_bk_wg?entry=ttu'
                                    className='link-map'
                                    target='_blank'>
                                </NavLink>
                                <div className='position-absolute dotes-right'>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                </div>
                            </div>
                            <div className='info-contact'>
                                <div className='mt-3'>
                                    <div className='row'>
                                        <div className='col-sm-4 mt-2 mb-2'>
                                            <h2>Contact details :</h2>
                                        </div>
                                        <div className='col-sm-4 mt-2 mb-2'><NavLink to='tel:0503079019' className='fw-bold'>
                                            <span className='icon'><i class="fa-solid fa-phone"></i></span> 0503079019 </NavLink>
                                        </div>
                                        <div className='col-sm-4 mt-2 mb-2'><NavLink to='tel:026277955' className='fw-bold'>
                                            <span className='icon'><i class="fa-solid fa-phone"></i></span>  026277955 </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <div className='row'>
                                        <div className='col-sm-12 col-md-4 mt-2 mb-2'>
                                            <h2>Office In Abu Dhabi  :</h2>
                                        </div>
                                        <div className='col-sm-12 col-md-4 mt-2 mb-2'>
                                            <NavLink to='https://www.google.com/maps/place/%D8%A7%D9%84%D9%85%D8%B3%D8%B9%D9%88%D8%AF+%D9%84%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA+-+Al+Masaood%E2%80%AD/@24.4881309,54.3751348,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e6643765ba6a9:0x98494bcce27e6018!8m2!3d24.488126!4d54.3725599!16s%2Fg%2F11g8_bk_wg?entry=ttu'
                                                target='_blank' className='fw-bold'>
                                                <span className='icon'><i class="fa-solid fa-phone"></i></span>Al Massood Automobiles Showroom. Najda St. Floor5 Office 10 </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </React.Fragment>
    )
}

export default Contact