import React, { useRef, useState } from 'react';
import game from "../assets/image/binance.png"
import honey from "../assets/image/images.png"
import youtube from "../assets/image/youtube-1.png"
import coin from "../assets/image/eth1.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import shutter from "../assets/image/shutterstock-1.jpg"
import twitter from "../assets/image/twitter.png"



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Socialtask() {
  return (
    <div className='App mt-3'>
      <div className='container-fluid'>
        <div className='custom-social-task'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='row'>
                  <div className='col-lg-8'>
                    <div className='custom-inside-social'>
                      <p>Register Now To Instantly Unlock.</p>
                      <h2>Rewards Up To 90%</h2>
                      <p>Many Desktop Publishing Packages.</p>
                      <button className='custom-social-btn'>Sign UP</button>
                    </div>
                  </div>
                  <div className='col-lg-4 mt-lg-0 mt-3'>
                    <div className='custom-inside-social'>
                      <p>Jackpot</p>
                      <h2>$ 100,000</h2>
                      <button className='custom-social-btn'>Sign UP</button>
                    </div>
                  </div>
                </div>
                <div className='row mt-5'>
                  <div className='col-lg-3'>
                    <div className='custom-lottery'>
                      <h2>Socials Tasks</h2>
                      <p>Social Micro-Tasks</p>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <div className='custom-lottery'>
                      <h2>Prediction</h2>
                      <p>Social Micro-Tasks</p>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <div className='custom-lottery'>
                      <h2>Lottery</h2>
                      <p>Social Micro-Tasks</p>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <div className='custom-lottery'>
                      <h2>Staking</h2>
                      <p>Social Micro-Tasks</p>
                    </div>
                  </div>
                </div>
                <div className='row mt-5 mb-4'>
                  <div className='custom-popular'>
                    <p>New Tasks <span>More <FaArrowRightLong /></span></p>
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
                            spaceBetween: 25,
                          },
                        }}
                        // modules={[Pagination]}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <div className='row'>
                            <div className='col-lg-12'>
                              <div className='custom-swiper-1' data-bs-toggle="modal" data-bs-target="#staticBackdrop1" style={{ cursor: "pointer" }}>
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
                                  <img src={twitter} class="card-img-top" alt="..." />
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
                      </Swiper>
                    </div>
                  </div>

                  {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                  </button> */}


                  <div class="modal fade text-dark" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content social-modal-1">
                        <div class="modal-header justify-content-end  border-0">
                          {/* <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1> */}
                          <button type="button" class="custom-modal-btn-1" data-bs-dismiss="modal" aria-label="Close"><IoMdClose /></button>
                        </div>
                        <div class="modal-body border-0 pt-0">
                          <div className='custom-social-modal-body'>
                            <div className='d-flex gap-3 mb-3'>
                              <img src={shutter}></img>
                              <h4>Join D-Ecosystem Telegram and Say GM!</h4>
                            </div>
                            <p style={{ opacity: "0.7" }}>Description project Connecting with others players
                              create a huge community opportunities for all
                              members of this
                              community.</p>
                            <div className='custom-list my-4'>
                              <h6>Instructions :</h6>
                              <ul style={{ listStyle: "-moz-initial", padding: "1rem", marginBottom: "0px", opacity: "0.7" }}>
                                <li>Connect your Telegram to RewardHub apa</li>
                                <li >Join D-ecosystem Telegram</li>
                                <li>Say ‘GM’, make some friends.</li>
                                <li>nteract with others members</li>
                              </ul>
                            </div>
                            <div className='d-flex mt-3 justify-content-between align-items-baseline custom-reward'>
                              <h4>Rewards:</h4>
                              <p><img src={coin} style={{ width: "20px", marginRight: "5px" }}></img>0.04 <span>~$0.04</span></p>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer justify-content-center  border-0 pt-0">
                          <button type="button" class="custom-social-modal-btn w-100 fw-bold">Link Telegram Account</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row mt-5 mb-4'>
                  <div className='custom-popular'>
                    <p>Popular Tasks <span>More <FaArrowRightLong /></span></p>
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
                            spaceBetween: 25,
                          },
                        }}
                        // modules={[Pagination]}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <div className='row'>
                            <div className='col-lg-12'>
                              <div className='custom-swiper-1'>
                                <div class="card border-0 custom-card">
                                  <img src={youtube} class="card-img-top" alt="..." />
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
                                  <img src={youtube} class="card-img-top" alt="..." />
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
                                  <img src={youtube} class="card-img-top" alt="..." />
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
                                  <img src={youtube} class="card-img-top" alt="..." />
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
                                  <img src={youtube} class="card-img-top" alt="..." />
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
                                  <img src={youtube} class="card-img-top" alt="..." />
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
                                  <img src={youtube} class="card-img-top" alt="..." />
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
      </div>
    </div>
  )
}

export default Socialtask