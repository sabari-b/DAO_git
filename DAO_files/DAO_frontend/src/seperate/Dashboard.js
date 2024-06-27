import React from 'react'
import $ from 'jquery'
import { GrClose } from 'react-icons/gr';
import { MdWebAsset } from 'react-icons/md';
import { RiWallet3Fill } from 'react-icons/ri';
import { RiExchangeDollarLine } from 'react-icons/ri';
import { PiClockClockwiseBold } from 'react-icons/pi';
import { FaListAlt } from 'react-icons/fa';
import { TbLogout } from 'react-icons/tb';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import { ImProfile } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../assets/css/dashboard.css'
import Socialstask from '../seperate/Socialtask';
import Crypto from '../seperate/Crypto';
import Navbar from '../seperate/navbar'
import Stakingreward from '../seperate/Stakingreward'
import Leaderboard from '../seperate/Leaderboard'
import Myaccount from '../seperate/Myaccount'
import Fotter from '../seperate/Fotter'
import { MdAccountCircle } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";
import { FaDice } from "react-icons/fa";
import { BiLogoWindows } from "react-icons/bi";
import { Tooltip } from 'react-tooltip'


$(document).ready(function () {
    if ($(window).width() < 600) {       // if width is less than 600px
        $(".nav-link").click(function () {
            $("#mySidenav").css("width", "0px");
        });
    }
    else {
        // $('#v-pills-asset-tab').click(function () {
        //   location.reload();
        // });
    }

    $("#mobile-three-line-collapse").click(function () {
        $("#mySidenav").css("width", "250px");
    });
    $("#mobile-close-collapse").click(function () {
        $("#mySidenav").css("width", "0px");
    });
    $(".dashboard-profile-table-tabs-section-hide").hide();
    $(".details-button-navigation button").click(function () {
        $(".dashboard-profile-section-hide").hide();
        $(".dashboard-profile-table-tabs-section-hide").show();
        $("#mySidenav").css("width", "100px");
        $(".dashboard-main-section").css("margin-left", "100px");
        $(".dashboard-navbar-brand img").css("width", "50px");
        $(".dashboard-navbar-brand img").css("height", "50px");
        $("#mobile-close-arrow-left").hide();
        $(".dashboard-text-1").hide();
        $("#mobile-close-arrow-right").show();
    });
    $(".button-dashboard-table-back").click(function () {
        $(".dashboard-profile-section-hide").show();
        $(".dashboard-profile-table-tabs-section-hide").hide();
        $("#mySidenav").css("width", "250px");
        $(".dashboard-main-section").css("margin-left", "250px");
        $(".dashboard-navbar-brand img").css("width", "80px");
        $(".dashboard-navbar-brand img").css("height", "80px");
        $("#mobile-close-arrow-left").show();
        $(".dashboard-text-1").show();
        $("#mobile-close-arrow-right").hide();
    });



    $("#mobile-close-arrow-right").hide();
    $("#mobile-close-arrow-left").click(function () {
        $("#mySidenav").css("width", "100px");
        $(".dashboard-main-section").css("margin-left", "100px");
        $(".dashboard-navbar-brand img").css("width", "50px");
        $(".dashboard-navbar-brand img").css("height", "50px");
        $("#mobile-close-arrow-left").hide();
        $(".dashboard-text-1").hide();
        $("#mobile-close-arrow-right").show();
    });
    $("#mobile-close-arrow-right").click(function () {
        $("#mySidenav").css("width", "250px");
        $(".dashboard-main-section").css("margin-left", "250px");
        $(".dashboard-navbar-brand img").css("width", "80px");
        $(".dashboard-navbar-brand img").css("height", "80px");
        $("#mobile-close-arrow-left").show();
        $(".dashboard-text-1").show();
        $("#mobile-close-arrow-right").hide();
    });


    if ($('#mySidenav').css('width') === '100px') {
        $('#mySidenav').css('a');
    }
});

function Dashboard() {
    const location = useLocation();
    return (
        <div className='App dashboard-navhide-section'>
            <Navbar />
            <div className='container-fluid'>
                <div className="row">
                    {/* Sidebar */}
                    <div>
                        <span id="mobile-three-line-collapse">&#9776;</span>
                        <div className="dashboard-sidenav-section" id="mySidenav">
                            <nav
                                id="sidebar"
                                className="col-md-12 col-lg-12 d-md-block sidebar component-navbar"
                            >
                                <div className="d-flex flex-row">
                                    <div className="ms-auto me-3">
                                        <span id="mobile-close-collapse"><GrClose />
                                        </span>
                                    </div>
                                </div>
                                {/* <div className="d-flex flex-row">
            <div className="ms-auto">
              <span id="mobile-close-arrow-left"><IoMdArrowDropleft /></span>
              <span id="mobile-close-arrow-right"><IoMdArrowDropright /></span>
            </div>
          </div> */}
                                <div className="d-flex flex-row pt-2 mb-2">
                                    <div className="mx-auto">
                                        {/* <a className="navbar-brand" href="/"><img src={render12}></img></a> */}
                                    </div>
                                </div>

                                <div className="position-sticky">
                                    <ul className="nav flex-column nav-pills">

                                        <li className="nav-item">
                                            <a
                                                className={`nav-link component-tabs ${location.pathname === "/dashboard/socialstask"
                                                    ? "active"
                                                    : ""
                                                    }`}
                                                href="/dashboard/socialstask"
                                            >
                                                <BiLogoWindows className="sidenav-icon-size-css " /> Socials Tasks
                                            </a>
                                        </li>

                                        {/* <li className="nav-item">
                                            <a
                                                className={`nav-link component-tabs ${location.pathname === "/dashboard/crypto" ? "active" : ""
                                                    }`}
                                                href="/dashboard/crypto"
                                            >
                                                <FaDice className="sidenav-icon-size-css" /> Crypto Games
                                            </a>
                                        </li> */}

                                        <li className="nav-item">
                                            <a
                                                className="nav-link component-tabs"
                                                id='clickable'

                                            >
                                                <MdWebAsset className="sidenav-icon-size-css" />  Crypto Games
                                            </a>

                                            <Tooltip anchorSelect="#clickable" className="tool-tip-1" place='top' clickable>
                                                <div>Coming Soon</div>
                                            </Tooltip>
                                        </li>




                                        <li className="nav-item">
                                            <a
                                                className={`nav-link component-tabs ${location.pathname === "/dashboard/staking-reward" ? "active" : ""
                                                    }`}
                                                href="/dashboard/staking-reward"
                                            >
                                                <MdWebAsset className="sidenav-icon-size-css" /> Staking Reward
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                className={`nav-link component-tabs ${location.pathname === "/dashboard/leader-board" ? "active" : ""
                                                    }`}
                                                href="/dashboard/leader-board"
                                            >
                                                <MdLeaderboard className="sidenav-icon-size-css" /> Leaderboard
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                className={`nav-link component-tabs ${location.pathname === "/dashboard/my-account" ? "active" : ""
                                                    }`}
                                                href="/dashboard/my-account"
                                            >
                                                <MdAccountCircle className="sidenav-icon-size-css" /> My Account
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                className='nav-link component-tabs'
                                                href="/"
                                            >
                                                <MdAccountCircle className="sidenav-icon-size-css" /> Log Out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>



                    {/* Main Content */}
                    <main className="col-md-12 ms-sm-auto col-lg-10 px-md-4">

                        {location.pathname === "/dashboard/socialstask" && <Socialstask />}
                        {location.pathname === "/dashboard/crypto" && <Crypto />}
                        {location.pathname === "/dashboard/staking-reward" && <Stakingreward />}
                        {location.pathname === "/dashboard/leader-board" && <Leaderboard />}
                        {location.pathname === "/dashboard/my-account" && <Myaccount />}
                    </main>
                </div>
            </div>
            <Fotter />
        </div>
    )
}

export default Dashboard