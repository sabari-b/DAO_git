import React, { useEffect, useState } from 'react'
import $, { data } from "jquery";
import mask from "../assets/image/logo-1.png"
import google from "../assets/image/google-1.png"
import windows from "../assets/image/windows-1.png"
import twitter from "../assets/image/twitter-1.png"
import apple from "../assets/image/apple-1.jpg"
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import dcx from "../assets/image/Group-1.png";
import Web3 from 'web3';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from '../services/authConfig';
import { loginRequest } from '../services/authConfig';
import { useMsal, useAccount } from '@azure/msal-react';
import { callMsGraph } from '../services/graph';
import { makeApiRequest } from '../services/axiosService';
import Window_Ethereum_Config_Api from '../services/windowEthereumConfig';
import config from '../services/config';
import Modalpopup from './Modalpopup';
// const msalClient = new PublicClientApplication(msalConfig);

function Navbar() {

    const { instance, accounts } = useMsal();
    const account = useAccount();
    const [profile, setProfile] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [walletAddress, setWalletAddress] = useState(null);
    const [hideLogin, setHideLogin] = useState(false)
    const [accessToken, setAccessToken] = useState(null);
    const [loginStatus, setLoginStatus] = useState(null);

    useEffect(() => {
        // console.log("walletAddress",walletAddress);
        let localUserWalletAddress = localStorage.getItem('walletAddress')
        if (walletAddress != null || localUserWalletAddress != null) {
            setWalletAddress(localUserWalletAddress)
            setHideLogin(true)
        }
    }, [walletAddress])


    $(document).ready(function () {
        $(".custom-nav-button-1").on("click", function () {
            $(".custom-nav-button-1").removeClass("active");
            $(this).addClass("active");
        });
    });

    return (
        <div className='App'>
            <div className='container-fluid'>
                <nav class="navbar navbar-expand-lg bg-body-tertiary custom-nav-top-1">
                    <div class="container-fluid">
                        <a class="navbar-brand custom-right-nav-name-1" href="/"><img src={mask}></img>RewardHub</a>
                        <button class="navbar-toggler navbar-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul class="navbar-nav">
                                {
                                    hideLogin == true ? (
                                        <>
                                            <li class="nav-item dashboard-hide">
                                                <a class="nav-link active" aria-current="page">
                                                    <button className='custom-nav-button-1'>{(walletAddress.substring(0, 5) + "..." + walletAddress.substring(walletAddress.length - 4))}</button>
                                                </a>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li class="nav-item dashboard-hide">
                                                <a class="nav-link" aria-current="page" >
                                                    <button className='custom-nav-button-1' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Log in</button>
                                                </a>
                                            </li>
                                            <li class="nav-item dashboard-hide">
                                                <a class="nav-link active" >
                                                    <button className='custom-nav-button-1 active' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Sign up</button>
                                                </a>
                                            </li>
                                        </>
                                    )
                                }
                                <li class="nav-item home-hide">
                                    <a class="nav-link" aria-current="page">
                                        <button className='custom-nav-button-2' ><img src={dcx}></img> Buy Dcx </button>
                                    </a>
                                </li>
                                <li class="nav-item home-hide">
                                    <a class="nav-link active">
                                        <button className='custom-nav-button-3'>
                                            <img src={dcx} className='earning-img'></img>
                                            <p className='mb-0'>Earnings</p>
                                            <p className='mb-0'><img src={dcx} className='earning-img-1'></img>0.29</p>
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
            </div>
            <Modalpopup />

        </div>
    )
}

export default Navbar