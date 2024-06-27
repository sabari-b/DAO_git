import React from 'react'
import logo from '../assets/image/Group-1.png'

function Stakingreward() {
    return (
        <div className='App mt-3'>
            <div className='container-fluid'>
                <div className='custom-staking'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <h5 className='fw-bold'>Staking Reward</h5>
                                <p className='search-id'>Search Your Wallet or ID Name</p>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className='custom-inside-staking'>
                                            <div className='row'>
                                                <div className='col-lg-6'>
                                                    <div className='staking-box'>
                                                        <h6 className='fw-bold'>Stake $DCX - 30 Days</h6>
                                                        <p>Lock for 30 days period</p>
                                                        <div className='custom-apy'>
                                                            <h6 >EARNINGS</h6>
                                                            <h6 className='fw-bold'>28% APY <img src={logo}></img></h6>
                                                        </div>
                                                        <p>Staked liquidity Pool</p>
                                                        <h6  className='fw-bold'>126,458 $DCX</h6>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='staking-box-right d-flex justify-content-center align-items-center'>
                                                        <button>Stake Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='custom-inside-staking'>
                                            <div className='row'>
                                                <div className='col-lg-6'>
                                                    <div className='staking-box'>
                                                        <h6 className='fw-bold'>Stake $DCX - 90 Days</h6>
                                                        <p>Lock for 0 days period</p>
                                                        <div className='custom-apy'>
                                                            <h6 >EARNINGS</h6>
                                                            <h6 className='fw-bold'>42% APY <img src={logo}></img></h6>
                                                        </div>
                                                        <p>Staked liquidity Pool</p>
                                                        <h6  className='fw-bold'>26,458 $DCX</h6>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='staking-box-right d-flex justify-content-center align-items-center flex-column'>
                                                        <p className=' text-center'>Claim in: 21d: h:30min</p>
                                                        <button>Stake Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='custom-inside-staking'>
                                            <div className='row'>
                                                <div className='col-lg-6'>
                                                    <div className='staking-box'>
                                                        <h6 className='fw-bold'>Stake $DCX - Flexible</h6>
                                                        <p>Unlock - Claim reward everyday</p>
                                                        <div className='custom-apy'>
                                                            <h6 >EARNINGS</h6>
                                                            <h6 className='fw-bold'>10% APY <img src={logo}></img></h6>
                                                        </div>
                                                        <p>Staked liquidity Pool</p>
                                                        <h6  className='fw-bold'>26,458 $DCX</h6>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='staking-box-right d-flex justify-content-center align-items-center'>
                                                        <button>Stake Now</button>
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
        </div>
    )
}

export default Stakingreward