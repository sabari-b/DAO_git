
import img from '../assets/image/eth1.png'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

function Leaderboard() {



    return (
        <div className='App mt-3'>
            <div className='container-fluid'>
                <div className='custom-leaderboard min-vh-100'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='d-lg-flex justify-content-between align-items-center'>
                                    <h5 className='fw-bold'>Leaderboard</h5>
                                    {/* <button className='custom-leader-board-btn'>Search Your Wallet or ID Name</button> */}
                                    <div class="mb-3 row">
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control custom-leader-board-btn" id="inputPassword" placeholder='Search Your Wallet or ID Name' />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='custom-inside-leaderboard mt-3'>
                                            <table class="table table-dark ">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Rank</th>
                                                        <th scope="col">Player</th>
                                                        <th scope="col">Task Completed</th>
                                                        <th scope="col">Referral Points</th>
                                                        <th scope="col">Total DCX Earned</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td >1</td>
                                                        <td> <span className='me-1'><img src={img}></img></span>Sweeper07</td>
                                                        <td>176</td>
                                                        <td>61</td>
                                                        <td><span className='me-1'><img src={img}></img></span>237</td>
                                                    </tr>
                                                    <tr>
                                                        <td >1</td>
                                                        <td> <span className='me-1'><img src={img}></img></span>Sweeper07</td>
                                                        <td>176</td>
                                                        <td>61</td>
                                                        <td><span className='me-1'><img src={img}></img></span>237</td>
                                                    </tr>
                                                    <tr style={{ borderBottom: "1px solid transparent" }}>
                                                        <td >1</td>
                                                        <td> <span className='me-1'><img src={img}></img></span>Sweeper07</td>
                                                        <td>176</td>
                                                        <td>61</td>
                                                        <td><span className='me-1'><img src={img}></img></span>237</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='text-white justify-content-end d-flex mt-lg-0 mt-3'>
                                            <Pagination
                                                count={2}
                                                renderItem={(item) => (
                                                    <PaginationItem
                                                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                                        {...item}
                                                        className="pagination-item"
                                                    />
                                                )}
                                            />
                                        </div>
                                        {/* <div>
                                            <canvas ref={canvasRef} id="scene" style={canvasStyle}></canvas>
                                            <input ref={copyRef} id="copy" type="text" defaultValue="karthik" style={{ display: 'none' }} />
                                        </div> */}
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

export default Leaderboard