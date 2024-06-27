
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import game from "../assets/image/binance.png"
import coin from "../assets/image/eth1.png"
import twitter from "../assets/image/twitter.png"
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from '../seperate/navbar'
import Fotter from '../seperate/Fotter'
import honey from "../assets/image/images.png"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules

import { Autoplay, Pagination,  Navigation  } from 'swiper/modules';

function home() {
  return (
    <div className='App home-navhide-section'>
      <Navbar />
      <div className='container-fluid'>
        <div className='custom-banner-1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='row justify-content-center'>
                  <div className='col-lg-9'>
                    <div className='custom-inside-banner-1'>
                      <h1 className='fw-bold'>Unlock Infinity <span>possibilities.</span></h1>
                      <p>Maximize every moment with RewardHub. Complete tasks, participate in
                        surveys, and provide valuable feedback to earn $DCX. Your effort is
                        directly converted into cryptocurrency rewards.</p>
                      <button className='custom-home-button-1' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Start Now Engage & Earn</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='custom-body-1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='row'>
                  <div className='custom-popular'>
                    <p>Popular Tasks <span style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">More <FaArrowRightLong /></span></p>
                  </div>
                  <div className='col-lg-12'>
                    <div className='custom-inside-body'>
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        autoplay={{
                          delay: 3500,
                          disableOnInteraction: false,
                        }}
                        breakpoints={{
                          400: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                          },
                          640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                          },
                          768: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                          },
                          1024: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                          },
                        }}
                        // modules={[Pagination]}
                        navigation={true}
                        modules={[Autoplay,  Navigation]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <div className='row'>
                            <div className='col-lg-12'>
                              <div className='custom-swiper-1'>
                                <div class="card border-0 custom-card">
                                  <img src={game} class="card-img-top" alt="..." />
                                  <div class="card-body custom-swiper-body">
                                    <h2>Surveys</h2>
                                    <p>Share Your Opinion to allllllllllllllll</p>
                                    <div className='d-flex inside-swiper-box align-items-center'>
                                      <img src={coin}></img>
                                      <p className='mb-0'>0.51</p>
                                      <p className='mb-0'>-$0.53</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className='row'>
                            <div className='col-lg-12'>
                              <div className='custom-swiper-1'>
                                <div class="card border-0  custom-card">
                                  <img src={honey} class="card-img-top" alt="..." />
                                  <div class="card-body custom-swiper-body">
                                    <h2>Honeygain</h2>
                                    <p>Share Your Opinion to allllllllllllllll</p>
                                    <div className='d-flex inside-swiper-box align-items-center'>
                                      <img src={coin}></img>
                                      <p className='mb-0'>0.51</p>
                                      <p className='mb-0'>-$0.53</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className='row'>
                            <div className='col-lg-12'>
                              <div className='custom-swiper-1'>
                                <div class="card border-0  custom-card">
                                  <img src={twitter} class="card-img-top" alt="..." />
                                  <div class="card-body custom-swiper-body">
                                    <h2>Binance</h2>
                                    <p>Share Your Opinion to allllllllllllllll</p>
                                    <div className='d-flex inside-swiper-box align-items-center'>
                                      <img src={coin}></img>
                                      <p className='mb-0'>0.51</p>
                                      <p className='mb-0'>-$0.53</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className='row'>
                            <div className='col-lg-12'>
                              <div className='custom-swiper-1'>
                                <div class="card border-0  custom-card">
                                  <img src={honey} class="card-img-top" alt="..." />
                                  <div class="card-body custom-swiper-body">
                                    <h2>Youtube</h2>
                                    <p>Share Your Opinion to allllllllllllllll</p>
                                    <div className='d-flex inside-swiper-box align-items-center'>
                                      <img src={coin}></img>
                                      <p className='mb-0'>0.51</p>
                                      <p className='mb-0'>-$0.53</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className='row'>
                            <div className='col-lg-12'>
                              <div className='custom-swiper-1'>
                                <div class="card border-0  custom-card">
                                  <img src={game} class="card-img-top" alt="..." />
                                  <div class="card-body custom-swiper-body">
                                    <h2>World of Tanks</h2>
                                    <p>Share Your Opinion to allllllllllllllll</p>
                                    <div className='d-flex inside-swiper-box align-items-center'>
                                      <img src={coin}></img>
                                      <p className='mb-0'>0.51</p>
                                      <p className='mb-0'>-$0.53</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className='row'>
                            <div className='col-lg-12'>
                              <div className='custom-swiper-1'>
                                <div class="card border-0  custom-card">
                                  <img src={honey} class="card-img-top" alt="..." />
                                  <div class="card-body custom-swiper-body">
                                    <h2>Follow on X</h2>
                                    <p>Share Your Opinion to allllllllllllllll</p>
                                    <div className='d-flex inside-swiper-box align-items-center'>
                                      <img src={coin}></img>
                                      <p className='mb-0'>0.51</p>
                                      <p className='mb-0'>-$0.53</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className='row'>
                            <div className='col-lg-12'>
                              <div className='custom-swiper-1'>
                                <div class="card border-0  custom-card">
                                  <img src={twitter} class="card-img-top" alt="..." />
                                  <div class="card-body custom-swiper-body">
                                    <h2>Surveys</h2>
                                    <p>Share Your Opinion to allllllllllllllll</p>
                                    <div className='d-flex inside-swiper-box align-items-center'>
                                      <img src={coin}></img>
                                      <p className='mb-0'>0.51</p>
                                      <p className='mb-0'>-$0.53</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='custom-body-2'>
          <div className='container'>
            <div className='custom-inside-body-2'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className=''>
                    <p>Join Our Community</p>
                  </div>
                  <div className='row'>
                    <div className='col-lg-4'>
                      <div className='custom-payment'>
                        <p>Total Payout</p>
                        <h2 className='fw-bold'>15 000</h2>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='custom-payment'>
                        <p>Total Payout</p>
                        <h2 className='fw-bold'>15 000</h2>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='custom-payment'>
                        <p>Total Payout</p>
                        <h2 className='fw-bold'>15 000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  )
}

export default home