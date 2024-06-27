import React from 'react'
import img from '../assets/image/eth1.png'
import imgs from '../assets/image/eth1.png'
import imgss from '../assets/image/eth1.png'
import { GrCopy } from "react-icons/gr";
import { FaGithubAlt } from "react-icons/fa";

function Myaccount() {
    return (
        <div className='App mt-3'>
            <div className='container-fluid'>
                <div className='custom-my-account'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <h5 className='fw-bold'>My Account</h5>
                                <div className='body-account'>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className='inside-body-account'>
                                                <div className='account-email'>
                                                    <img src={img}></img>
                                                    <p className='account-letter email-flow'>Email: Lorenzo.trich@gmail.com</p>
                                                    <p className='account-letter'>Wallet: <button className='myaccount-btn'>Connect</button></p>
                                                    <p className='account-letter'>Referral: <button className='myaccount-btn'>Copy Referral Link</button></p>
                                                </div>
                                                <div className='account-earnings'>
                                                    <h6>EARNINGS</h6>
                                                    <p> <img className="me-1" src={imgs}></img>0.04 <span> ~ $0.04</span></p>
                                                    <div class="progress my-4" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                                        <div class="progress-bar" style={{width:"20%"}}></div>
                                                    </div>
                                                    <h5 className='account-letter'>Minimum Amount Withdraw: <span className='fw-bold'>0.5 DCX</span> </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className='inside-body-account-right'>
                                                <p className='account-letter'>Recent Transactions</p>
                                                <div className='account-past'>
                                                    <GrCopy />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-lg-12'>
                                        <h5 className='fw-bold'>Socials Media Accounts</h5>
                                        <p className='account-letter fs-6'>Connect your Social media account to track your micro-tasks.</p>
                                        <div className='row'>
                                            <div className='col-lg-4 mb-lg-0 mb-3'>
                                                <div className='custom-discard d-flex align-items-center'>
                                                    <FaGithubAlt className='discard-icon-1' />
                                                    <div className='ms-2'>
                                                        <h5 className='mb-0'>x</h5>
                                                        <p className='mb-0 account-letter'>Oxmoonrock</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-4  mb-lg-0 mb-3'>
                                                <div className='custom-discard d-flex align-items-center'>
                                                    <FaGithubAlt className='discard-icon-1' />
                                                    <div className='ms-2'>
                                                        <p className='mb-0'>Discard</p>
                                                    </div>
                                                    <button className='link-btn ms-auto'>Link</button>
                                                </div>
                                            </div>
                                            <div className='col-lg-4  mb-lg-0 mb-3'>
                                                <div className='custom-discard d-flex align-items-center'>
                                                    <FaGithubAlt className='discard-icon-1' />
                                                    <div className='ms-2'>
                                                        <p className='mb-0'>Telegram</p>
                                                    </div>
                                                    <button className='link-btn ms-auto'>Link</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-lg-12'>
                                        <h5 className='fw-bold'>Task History</h5>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <div className='custom-task-history'>
                                                    <h6 className='fw-bold'>Follow D-Ecosystem on X</h6>
                                                    <p>Reward issued: 12 March 2023</p>
                                                    <span className='fw-bold'><img src={imgss} className='me-2'></img>0.04</span>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='custom-task-history'>
                                                    <h6 className='fw-bold'>Follow D-Ecosystem on X</h6>
                                                    <p>Reward issued: 12 March 2023</p>
                                                    <span className='fw-bold'><img src={imgss} className='me-2'></img>0.04</span>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='custom-task-history'>
                                                    <h6 className='fw-bold'>Follow D-Ecosystem on X</h6>
                                                    <p>Reward issued: 12 March 2023</p>
                                                    <span className='fw-bold'><img src={imgss} className='me-2'></img>0.04</span>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='custom-task-history'>
                                                    <h6 className='fw-bold'>Follow D-Ecosystem on X</h6>
                                                    <p>Reward issued: 12 March 2023</p>
                                                    <span className='fw-bold'><img src={imgss} className='me-2'></img>0.04</span>
                                                </div>
                                            </div>
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

export default Myaccount