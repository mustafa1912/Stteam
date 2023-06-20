import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Helmet } from "react-helmet";


import '../style/css/home.css'
import Nav from '../Layout/Navbar'
export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Stteam | home</title>
                </Helmet>
                <main>
                    <Nav />
                    <section className='home'>
                        <div className='container position-relative;'>
                            <div className='row flex-sm-column-reverse flex-md-row'>
                                <div className='col-sm-12 colo-12 col-md-6 mt-md-3   mt-sm-5 text-side'>
                                    <div className='title'>
                                        <h1 className=''> support <span className='text-light'> team</span></h1>
                                        <h4> general maintenance <span className='text-light'>  &  </span> decoration <span> team</span></h4>
                                    </div>
                                    <div className='get-start'>
                                        <h2 className='text-light'> becuse your home </h2>
                                        <h2 className='text-light text-end'> deserves to be specail </h2>
                                        <button className='btn btn-orinage rounded-0 mt-4'>
                                            get start
                                        </button>
                                    </div>
                                </div>
                                <div className='col-sm-12 colo-12 col-md-6 mt-md-3  img-side'>
                                    <img src="/images/house.png" alt="house" title='house' className='img-house ' />
                                    <img src="/images/Shape.png" alt="house" title='house' className=' position-absolute' />
                                    {/* */}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*  <Footer /> */}
                    <div className='position-absolute socail row m-0'>
                        <div className='item'>
                            <img src="/images/Long line.png" alt="house" title='house' className='line' />
                        </div>
                        <div className='item'>
                            <div className='mt-3'>
                                <NavLink to='https://www.instagram.com/supportteamgd' rel='nofllow' target='_blanck' className='btn-socail'>
                                    <i class="fa-brands fa-instagram"></i>
                                </NavLink>
                            </div>
                            <div className='mt-3'>
                                <NavLink to='https://twitter.com/stteam37' rel='nofllow' target='_blanck' className='btn-socail'>
                                    <i class="fa-brands fa-twitter"></i>
                                </NavLink>
                            </div>
                            <div className='mt-3'>
                                <NavLink to='https://wa.me/0503079019' rel='nofllow' target='_blanck' className='btn-socail'>
                                    <i class="fa-brands fa-whatsapp"></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <img src="/images/Shape2.png" alt="house" title='house' className='Shape2 position-absolute' />
                </main>
            </React.Fragment>
        )
    }
}

export default Home
