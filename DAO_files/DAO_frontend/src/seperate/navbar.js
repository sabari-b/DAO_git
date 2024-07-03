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
import {  GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig }  from '../services/authConfig';
import { loginRequest } from '../services/authConfig';
import { useMsal, useAccount } from '@azure/msal-react';
import { callMsGraph } from '../services/graph';
import { makeApiRequest } from '../services/axiosService';
import Window_Ethereum_Config_Api from '../services/windowEthereumConfig';
import config from '../services/config';
const msalClient = new PublicClientApplication(msalConfig);

function Navbar() {
    
    const { instance, accounts } = useMsal();
    const account = useAccount();
    const [profile, setProfile] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [walletAddress, setWalletAddress] = useState(null);
    const [hideLogin,setHideLogin] = useState(false)
    const [accessToken, setAccessToken] = useState(null);
    const [loginStatus, setLoginStatus] = useState(null);

    useEffect(()=>{
        // console.log("walletAddress",walletAddress);
        let localUserWalletAddress = localStorage.getItem('walletAddress')
        if(walletAddress != null || localUserWalletAddress != null){
            setWalletAddress(localUserWalletAddress)
            setHideLogin(true)
        }
    },[walletAddress])

  

    useEffect(() => {
        const microsoftAuth = async () => {
            if (account) {
                await instance.acquireTokenSilent({
                    scopes: ["User.Read"],
                    account: account
                }).then(response => {
                    console.log("response",response);
                    fetch('https://graph.microsoft.com/v1.0/me', {
                        headers: {
                            Authorization: `Bearer ${response.accessToken}`
                        }
                    })
                    .then(res => res.json())
                    .then(data => setProfile(data));
                });
            }
        }
        if (!instance.getActiveAccount()) {
            microsoftAuth()
        } else {
            console.log("Already logged");
        }
    }, [account, instance]);
    
    $(document).ready(function () {
        $(".custom-nav-button-1").on("click", function () {
            $(".custom-nav-button-1").removeClass("active");
            $(this).addClass("active");
        });
    });

    const responseMessage = async(response) => {
        try {
            const userObject = jwtDecode(response.credential);
            let payload = {
                type : 1,
                data : {
                    googleEmail : userObject.email,
                    googleprofilePicture : userObject.picture
                }
            }
            let params = {
                data : payload,
                method : "POST",
                url : "register"
            }
            let res = await makeApiRequest(params);
            localStorage.setItem('walletAddress',res.data)
            setHideLogin(true)
            toast.success(res.message)
        } catch (err) {
            if (err.response && err.response.status === 400) {
                toast.warn( "Google email" + err.response.data.message)
            } else {
                toast.error('Something went wrong when access google account..!')
            }
        }
    };
    const errorMessage = (error) => {
        console.log(error);
    };


    const handleLogin = async() => {
        // let ins = instance.loginPopup()
        // console.log("ins",ins);
        await instance.loginPopup(loginRequest)
            .then(response => {
                // console.log("response",response);
                instance.setActiveAccount(response.account);
                getUserEmail();
            })
            .catch(e => {
                console.log("error====",e);
            });
        
    };
    const getUserEmail = async() => {
        const activeAccount = await instance.getActiveAccount();
        if (activeAccount) {
            instance.acquireTokenSilent({
                ...loginRequest,
                account: activeAccount
            }).then(async(response) => {
                callMsGraph(response.accessToken).then(async(email) => {
                    console.log("getUserEmail email",email); // store the user microsoft account in backend
                    try {
                        let payload = {
                            type : 2,
                            data : {
                                microsoftEmail : email,
                            }
                        }
                        let params = {
                            data : payload,
                            method : "POST",
                            url : "register"
                        }
                        let res = await makeApiRequest(params);
                        localStorage.setItem('walletAddress',res.data)
                        setHideLogin(true)
                        toast.success(res.message)
                    } catch (err) {
                        if (err.response && err.response.status === 400) {
                            toast.warn( "Microsoft email" + err.response.data.message)
                        } else {
                            toast.error('Something went wrong when access microsoft account..!')
                        }
                    }
                });
            }).catch(e => {
                console.error(e);
                toast.error('Something went wrong when access microsoft account..!')
            });
        }
    };

    const handleTwitterLogin = async() =>{
        // const modalElement = document.getElementById('staticBackdrop');
        // const modal = Modal.getInstance(modalElement) || new Modal(modalElement);
        // modal.hide();
        // return false;
        try {
            const width = 600;
            const height = 700;
            const left = window.screen.width / 2 - width / 2;
            const top = window.screen.height / 2 - height / 2;

            window.open(
            `${config.backendurl}login`,
            '_blank',
            `width=${width},height=${height},top=${top},left=${left}`
            );

        } catch (error) {
            console.log('Error initiating Twitter login', error);
            toast.error('Error initiating Twitter login..!');
        }
    }

    const addCustomNetwork = async () => {
        try {
          await window.ethereum.request({
            method: Window_Ethereum_Config_Api.wallet_switchEthereumChain,
            params: [{ chainId: config.DCXCHAIN_HEX_ID }]
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: Window_Ethereum_Config_Api.wallet_addEthereumChain,
                params: [
                  {
                    chainId: config.DCXCHAIN_HEX_ID,
                    chainName: config.DCX_NETWORK_NAME,
                    nativeCurrency: {
                      name: config.DCX_NETWORK_NAME,
                      symbol: config.DCX_SYMBOL,
                      decimals: config.DCX_DECIMAL,
                    },
                    rpcUrls: [config.DCXRPC_URL],
                    blockExplorerUrls: [config.DCX_BLOCKEXPLORER],
                  },
                ],
              });
              toast.success("Custom network added successfully");
            } catch (addError) {
              console.log("error", addError);
              toast.error("Something went wrong..!");
            }
          }
          // handle other "switch" errors
        }
      }

    const connectWallet = async () => {

        if (typeof window.ethereum !== 'undefined') {
          try {
            // Request account access
            const web3 = new Web3(window.ethereum);
            
            const chainId = await window.ethereum.request({ method: Window_Ethereum_Config_Api.eth_chainId });
            
            if (chainId !== config.DCXCHAIN_HEX_ID) {
              await addCustomNetwork();
              toast.success("Register successfully..!");
            } else {
              await window.ethereum.request({ method: Window_Ethereum_Config_Api.eth_requestAccounts });
              // const web3 = new Web3(window.ethereum);  
              const account = await web3.eth.getAccounts();
              const address = account[0];
              console.log("address====", address)
            //   const checkUserRegisteredExists = await DemoCorePlanContract.methods.isUserExists(address).call();
            //   console.log("checkUserRegisteredExists",checkUserRegisteredExists);
            //   if (checkUserRegisteredExists == true) {
            //     setShow(true)
            //   } else {
            //     setShow(false)
            //   }
              setWalletAddress(account[0]);
              localStorage.setItem('walletAddress', address);
              toast.success("Register successfully..!");
            //   await window.ethereum.request({ method: Window_Ethereum_Config_Api.eth_requestAccounts });
            }
    
            // Switch network
            // await window.ethereum.request({
            //   method: Window_Ethereum_Config_Api.wallet_switchEthereumChain,
            //   params: [{ chainId: config.DCXCHAIN_HEX_ID }] // Replace '0x1' with the chain ID you want to switch to
            // });
    
            // Get current network ID
            const networkId = await web3.eth.net.getId();
          } catch (error) {
            console.log("error",error);
            toast.error("Something went wrong");
          }
        } else {
            toast.error("Please install MetaMask or another Web3 provider extension");
            setTimeout(() => {
                window.open("https://metamask.io/download/",'_blank') 
            }, 3000);
        }
      };


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
                                                    <button className='custom-nav-button-1'>{( walletAddress.substring(0, 5) + "..." + walletAddress.substring(walletAddress.length - 4))}</button>
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
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-sm">
                        <div class="modal-content custom-modal-1">
                            <div class="modal-header border-0">
                                <h1 class="modal-title fs-5 mx-auto" id="staticBackdropLabel">Connect with Us</h1>
                                <button type="button" class="custom-modal-btn-1" data-bs-dismiss="modal" aria-label="Close"><IoMdClose /></button>
                            </div>
                            <div class="modal-body mb-4">
                                <div className='custom-inside-modal-body'>
                                    <div className='web-site-img'>
                                        <div> 
                                        <GoogleOAuthProvider clientId="963401899710-f4mvvjcv1uf5jf4vbeesi95g7d5n8s0q.apps.googleusercontent.com" >
                                            <GoogleLogin type='icon' onSuccess={responseMessage} onError={errorMessage}
                                            />
                                        </GoogleOAuthProvider>

                                        </div>
                                        <div>
                                        {accounts.length > 0 ? (
                                            <div>Welcome, {accounts[0].name}</div>
                                        ) : (
                                            // <button onClick={handleLogin}>Login</button>
                                            <button onClick={handleLogin} style={{ padding: '10px', fontSize: '16px', background: '#0078D4', color: '#fff', border: 'none', borderRadius: '4px' }}>
                                                Microsoft
                                            </button>
                                        )}
                                        </div>
                                        {/* <img src={windows}></img> */}
                                        <img src={twitter}></img>
                                        <button onClick={handleTwitterLogin}>Login</button>
                                        <img src={apple} className='me-0'></img>
                                    </div>
                                    <form>
                                        <div class="mb-3 mt-3">
                                            <input type="email" class="form-control modal-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email' />
                                        </div>
                                    </form>
                                    <div className='modal-button'>
                                        <button>Sign in</button>
                                    </div>
                                    <div className='custom-or-1'>
                                        <p className='mt-1 mb-0'>or</p>
                                        {/* href="/dashboard/socialstask"  */}
                                        <a onClick={connectWallet}><button className=''>Connect Wallet</button></a>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Understood</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar